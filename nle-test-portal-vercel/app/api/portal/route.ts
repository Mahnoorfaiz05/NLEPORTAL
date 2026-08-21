import { getDb } from "../../../db";
import { questionBanks, tests } from "../../data";

export const runtime = "nodejs";
const ADMIN_KEY = process.env.ADMIN_KEY || "";
const SESSION_COOKIE = "nle_session";
type RawStatement={
  bind:(...values:unknown[])=>RawStatement;
  first:<T>()=>Promise<T|null>;
  all:()=>Promise<{results:unknown[]}>;
  run:()=>Promise<unknown>;
};
type RawDb={prepare:(sql:string)=>RawStatement;batch:(statements:RawStatement[])=>Promise<unknown>};
async function rawDb():Promise<RawDb>{return ((await getDb()) as unknown as {$client:RawDb}).$client;}

async function initDb() {
  const db = await rawDb();
  await db.batch([
    db.prepare("CREATE TABLE IF NOT EXISTS students (student_id TEXT PRIMARY KEY, name TEXT NOT NULL, access_hash TEXT NOT NULL, active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, student_id TEXT NOT NULL, expires_at TEXT NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS attempts (student_id TEXT NOT NULL, test_slug TEXT NOT NULL, status TEXT NOT NULL, started_at TEXT NOT NULL, submitted_at TEXT, score INTEGER, total INTEGER NOT NULL DEFAULT 100, PRIMARY KEY(student_id,test_slug))"),
    db.prepare("CREATE TABLE IF NOT EXISTS answers (student_id TEXT NOT NULL, test_slug TEXT NOT NULL, question_id INTEGER NOT NULL, selected INTEGER NOT NULL, correct INTEGER NOT NULL, answered_at TEXT NOT NULL, PRIMARY KEY(student_id,test_slug,question_id))"),
    db.prepare("CREATE INDEX IF NOT EXISTS answers_attempt_idx ON answers(student_id,test_slug)"),
  ]);
}
async function hash(value:string){
  const data=new TextEncoder().encode(value);
  const digest=await crypto.subtle.digest("SHA-256",data);
  return [...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,"0")).join("");
}
function cookie(request:Request,name:string){
  const raw=request.headers.get("cookie")||"";
  const part=raw.split(";").map(x=>x.trim()).find(x=>x.startsWith(name+"="));
  return part?decodeURIComponent(part.slice(name.length+1)):"";
}
async function studentFrom(request:Request){
  const token=cookie(request,SESSION_COOKIE); if(!token)return null;
  const row=await (await rawDb()).prepare("SELECT s.student_id studentId,s.name FROM sessions x JOIN students s ON s.student_id=x.student_id WHERE x.token=? AND x.expires_at>? AND s.active=1").bind(token,new Date().toISOString()).first<{studentId:string;name:string}>();
  return row||null;
}
function json(data:unknown,status=200,headers:HeadersInit={}){return Response.json(data,{status,headers});}
function safeTest(slug:string){return tests.find(t=>t.slug===slug);}
async function body(request:Request){try{return await request.json() as Record<string,unknown>;}catch{return {};}}

export async function GET(request:Request){
  await initDb();
  const url=new URL(request.url), action=url.searchParams.get("action")||"session";
  if(action==="session"){
    const student=await studentFrom(request);
    if(!student)return json({authenticated:false,tests});
    const rows=await (await rawDb()).prepare("SELECT test_slug testSlug,status,score,total,started_at startedAt,submitted_at submittedAt FROM attempts WHERE student_id=?").bind(student.studentId).all();
    return json({authenticated:true,student,tests,attempts:rows.results});
  }
  if(action==="test"){
    const student=await studentFrom(request); if(!student)return json({error:"Please sign in."},401);
    const slug=url.searchParams.get("slug")||"", meta=safeTest(slug), bank=questionBanks[slug];
    if(!meta||!bank)return json({error:"Test not found."},404);
    const existing=await (await rawDb()).prepare("SELECT status,score,total FROM attempts WHERE student_id=? AND test_slug=?").bind(student.studentId,slug).first<{status:string;score:number;total:number}>();
    if(existing?.status==="completed")return json({error:"This test has already been completed.",completed:true},409);
    if(!existing)await (await rawDb()).prepare("INSERT INTO attempts(student_id,test_slug,status,started_at,total) VALUES(?,?,?,?,?)").bind(student.studentId,slug,"in_progress",new Date().toISOString(),bank.length).run();
    const saved=await (await rawDb()).prepare("SELECT question_id questionId,selected,correct FROM answers WHERE student_id=? AND test_slug=? ORDER BY question_id").bind(student.studentId,slug).all();
    const map=new Map((saved.results as Array<{questionId:number;selected:number;correct:number}>).map(x=>[x.questionId,x]));
    return json({test:meta,questions:bank.map(q=>({id:q.id,question:q.question,options:q.options})),saved:[...map.values()]});
  }
  if(action==="result"){
    const student=await studentFrom(request); if(!student)return json({error:"Please sign in."},401);
    const slug=url.searchParams.get("slug")||"", bank=questionBanks[slug],meta=safeTest(slug);
    const attempt=await (await rawDb()).prepare("SELECT status,score,total,submitted_at submittedAt FROM attempts WHERE student_id=? AND test_slug=?").bind(student.studentId,slug).first<{status:string;score:number;total:number;submittedAt:string}>();
    if(!bank||!meta||attempt?.status!=="completed")return json({error:"Completed result not found."},404);
    const rows=await (await rawDb()).prepare("SELECT question_id questionId,selected,correct FROM answers WHERE student_id=? AND test_slug=? ORDER BY question_id").bind(student.studentId,slug).all();
    const selected=new Map((rows.results as Array<{questionId:number;selected:number;correct:number}>).map(x=>[x.questionId,x]));
    return json({test:meta,attempt,questions:bank.map(q=>({...q,selected:selected.get(q.id)?.selected??null,isCorrect:Boolean(selected.get(q.id)?.correct)}))});
  }
  if(action==="admin"){
    if(!ADMIN_KEY||request.headers.get("x-admin-key")!==ADMIN_KEY)return json({error:"Invalid admin access code."},403);
    const students=await (await rawDb()).prepare("SELECT s.student_id studentId,s.name,s.active,s.created_at createdAt,EXISTS(SELECT 1 FROM sessions x WHERE x.student_id=s.student_id AND x.expires_at>?) loggedIn FROM students s ORDER BY s.created_at DESC").bind(new Date().toISOString()).all();
    const results=await (await rawDb()).prepare("SELECT a.student_id studentId,s.name,a.test_slug testSlug,a.status,a.score,a.total,a.started_at startedAt,a.submitted_at submittedAt FROM attempts a JOIN students s ON s.student_id=a.student_id ORDER BY a.started_at DESC").all();
    return json({students:students.results,results:results.results,tests});
  }
  return json({error:"Unknown action."},400);
}

export async function POST(request:Request){
  await initDb();
  const data=await body(request),action=String(data.action||"");
  if(action==="login"){
    const studentId=String(data.studentId||"").trim().toUpperCase(),accessCode=String(data.accessCode||"").trim();
    if(!studentId||!accessCode)return json({error:"Student ID and access code are required."},400);
    const row=await (await rawDb()).prepare("SELECT student_id studentId,name,access_hash accessHash,active FROM students WHERE student_id=?").bind(studentId).first<{studentId:string;name:string;accessHash:string;active:number}>();
    if(!row||!row.active||row.accessHash!==await hash(accessCode))return json({error:"Invalid Student ID or access code."},401);
    const token=crypto.randomUUID()+crypto.randomUUID(),expires=new Date(Date.now()+30*86400000).toISOString();
    await (await rawDb()).prepare("INSERT INTO sessions(token,student_id,expires_at) VALUES(?,?,?)").bind(token,studentId,expires).run();
    return json({ok:true,student:{studentId,name:row.name}},200,{"Set-Cookie":`${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`});
  }
  if(action==="logout"){
    const token=cookie(request,SESSION_COOKIE); if(token)await (await rawDb()).prepare("DELETE FROM sessions WHERE token=?").bind(token).run();
    return json({ok:true},200,{"Set-Cookie":`${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`});
  }
  if(action==="answer"){
    const student=await studentFrom(request);if(!student)return json({error:"Session expired."},401);
    const slug=String(data.slug||""),id=Number(data.questionId),selected=Number(data.selected),bank=questionBanks[slug],q=bank?.find(x=>x.id===id);
    if(!q||!Number.isInteger(selected)||selected<0||selected>=q.options.length)return json({error:"Invalid answer."},400);
    const attempt=await (await rawDb()).prepare("SELECT status FROM attempts WHERE student_id=? AND test_slug=?").bind(student.studentId,slug).first<{status:string}>();
    if(attempt?.status!=="in_progress")return json({error:"This attempt is not active."},409);
    const prior=await (await rawDb()).prepare("SELECT selected,correct FROM answers WHERE student_id=? AND test_slug=? AND question_id=?").bind(student.studentId,slug,id).first<{selected:number;correct:number}>();
    if(prior)return json({correct:Boolean(prior.correct),correctIndex:q.answer,explanation:q.explanation,locked:true});
    const correct=selected===q.answer?1:0;
    await (await rawDb()).prepare("INSERT INTO answers(student_id,test_slug,question_id,selected,correct,answered_at) VALUES(?,?,?,?,?,?)").bind(student.studentId,slug,id,selected,correct,new Date().toISOString()).run();
    const score=await (await rawDb()).prepare("SELECT COUNT(*) count,SUM(correct) score FROM answers WHERE student_id=? AND test_slug=?").bind(student.studentId,slug).first<{count:number;score:number}>();
    return json({correct:Boolean(correct),correctIndex:q.answer,explanation:q.explanation,answered:score?.count||0,score:score?.score||0});
  }
  if(action==="submit"){
    const student=await studentFrom(request);if(!student)return json({error:"Session expired."},401);
    const slug=String(data.slug||""),bank=questionBanks[slug];if(!bank)return json({error:"Test not found."},404);
    const score=await (await rawDb()).prepare("SELECT COUNT(*) count,SUM(correct) score FROM answers WHERE student_id=? AND test_slug=?").bind(student.studentId,slug).first<{count:number;score:number}>();
    if((score?.count||0)<bank.length)return json({error:`Please answer all ${bank.length} questions before submitting.`,answered:score?.count||0},400);
    await (await rawDb()).prepare("UPDATE attempts SET status='completed',score=?,submitted_at=? WHERE student_id=? AND test_slug=? AND status='in_progress'").bind(score?.score||0,new Date().toISOString(),student.studentId,slug).run();
    return json({ok:true,score:score?.score||0,total:bank.length});
  }
  if(action==="adminCreateStudent"){
    if(!ADMIN_KEY||request.headers.get("x-admin-key")!==ADMIN_KEY)return json({error:"Invalid admin access code."},403);
    const studentId=String(data.studentId||"").trim().toUpperCase(),name=String(data.name||"").trim(),accessCode=String(data.accessCode||"").trim();
    if(studentId.length<3||name.length<2||accessCode.length<4)return json({error:"Name, Student ID and a 4+ character access code are required."},400);
    try{await (await rawDb()).prepare("INSERT INTO students(student_id,name,access_hash,active,created_at) VALUES(?,?,?,?,?)").bind(studentId,name,await hash(accessCode),1,new Date().toISOString()).run();}
    catch{return json({error:"This Student ID already exists."},409);}
    return json({ok:true});
  }
  if(action==="adminRemoveStudent"){
    if(!ADMIN_KEY||request.headers.get("x-admin-key")!==ADMIN_KEY)return json({error:"Invalid admin access code."},403);
    const studentId=String(data.studentId||"").trim().toUpperCase();
    if(!studentId)return json({error:"Student ID is required."},400);
    const db=await rawDb();
    await db.batch([db.prepare("DELETE FROM sessions WHERE student_id=?").bind(studentId),db.prepare("DELETE FROM answers WHERE student_id=?").bind(studentId),db.prepare("DELETE FROM attempts WHERE student_id=?").bind(studentId),db.prepare("DELETE FROM students WHERE student_id=?").bind(studentId)]);
    return json({ok:true});
  }
  return json({error:"Unknown action."},400);
}
