import { getDb } from "../../../db";
import { questionBanks, tests } from "../../data";
import { importSummary, parseMcqBank } from "../../lib/mcq-import";
import { customIdFromSlug, isCustomSlug, listCustomTests, loadCustomQuestions, loadCustomTest, slugFromCustomId, studentVisible, toTestInfo, visibleFreeTests, visibleStudentTests } from "../../lib/custom-tests";
import { pdfToText } from "../../lib/pdf-text";

export const runtime = "nodejs";
const ADMIN_KEY = process.env.ADMIN_KEY || "";
const SESSION_COOKIE = "nle_session";
const PUBLIC_COOKIE = "nle_public_visitor";
const PUBLIC_COOKIE_2 = "nle_public_visitor_2";
const PUBLIC_CUSTOM_COOKIE = "nle_public_custom";
const PUBLIC_MOCK_2={slug:"public-grand-mock-2",name:"Free Mock Test 2",short:"FREE MOCK 2",icon:"★",color:"#e09b24",questionCount:100,duration:120,category:"grand" as const};
type Category="systems"|"basic"|"grand";
const CATEGORY_CODES:Record<Category,string>={systems:process.env.CATEGORY_SYSTEMS_CODE||"",basic:process.env.CATEGORY_BASIC_CODE||"",grand:process.env.CATEGORY_GRAND_CODE||""};
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
    db.prepare("CREATE TABLE IF NOT EXISTS category_unlocks (session_token TEXT NOT NULL, category TEXT NOT NULL, unlocked_at TEXT NOT NULL, PRIMARY KEY(session_token,category))"),
    db.prepare("CREATE TABLE IF NOT EXISTS public_attempts (visitor_token TEXT PRIMARY KEY, started_at TEXT NOT NULL, submitted_at TEXT, score INTEGER, total INTEGER NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS public_attempts_2 (visitor_token TEXT PRIMARY KEY, started_at TEXT NOT NULL, submitted_at TEXT, score INTEGER, total INTEGER NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS attempts (student_id TEXT NOT NULL, test_slug TEXT NOT NULL, status TEXT NOT NULL, started_at TEXT NOT NULL, submitted_at TEXT, score INTEGER, total INTEGER NOT NULL DEFAULT 100, PRIMARY KEY(student_id,test_slug))"),
    db.prepare("CREATE TABLE IF NOT EXISTS answers (student_id TEXT NOT NULL, test_slug TEXT NOT NULL, question_id INTEGER NOT NULL, selected INTEGER NOT NULL, correct INTEGER NOT NULL, answered_at TEXT NOT NULL, PRIMARY KEY(student_id,test_slug,question_id))"),
    db.prepare("CREATE INDEX IF NOT EXISTS answers_attempt_idx ON answers(student_id,test_slug)"),
    db.prepare("CREATE TABLE IF NOT EXISTS admin_tests (id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL DEFAULT '', module TEXT NOT NULL DEFAULT 'systems', test_type TEXT NOT NULL DEFAULT 'basic', appear_in TEXT NOT NULL DEFAULT 'module', question_count INTEGER NOT NULL DEFAULT 0, duration INTEGER NOT NULL DEFAULT 120, passing_pct INTEGER NOT NULL DEFAULT 50, active INTEGER NOT NULL DEFAULT 1, locked INTEGER NOT NULL DEFAULT 0, save_attempts INTEGER NOT NULL DEFAULT 1, published INTEGER NOT NULL DEFAULT 0, archived INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)"),
    db.prepare("CREATE TABLE IF NOT EXISTS admin_questions (test_id TEXT NOT NULL, question_id INTEGER NOT NULL, question TEXT NOT NULL, options_json TEXT NOT NULL, answer INTEGER NOT NULL, explanation TEXT NOT NULL DEFAULT '', needs_review INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(test_id,question_id))"),
    db.prepare("CREATE TABLE IF NOT EXISTS admin_public_attempts (visitor_token TEXT NOT NULL, test_id TEXT NOT NULL, started_at TEXT NOT NULL, submitted_at TEXT, score INTEGER, total INTEGER NOT NULL, PRIMARY KEY(visitor_token,test_id))"),
  ]);
}
function isAdmin(request:Request){return Boolean(ADMIN_KEY)&&request.headers.get("x-admin-key")===ADMIN_KEY;}
async function resolveCustom(db:RawDb,slug:string){
  if(!isCustomSlug(slug))return null;
  const row=await loadCustomTest(db,customIdFromSlug(slug));
  if(!row||row.archived)return null;
  const questions=await loadCustomQuestions(db,row.id);
  return {row,meta:toTestInfo(row,questions.length),questions};
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
  const row=await (await rawDb()).prepare('SELECT s.student_id AS "studentId",s.name FROM sessions x JOIN students s ON s.student_id=x.student_id WHERE x.token=? AND x.expires_at>? AND s.active=1').bind(token,new Date().toISOString()).first<{studentId:string;name:string}>();
  return row||null;
}
async function sessionFrom(request:Request){
  const token=cookie(request,SESSION_COOKIE);if(!token)return null;
  const student=await studentFrom(request);return student?{token,student}:null;
}
async function unlockedCategories(request:Request){
  const token=cookie(request,SESSION_COOKIE);if(!token)return [] as Category[];
  const rows=await (await rawDb()).prepare("SELECT category FROM category_unlocks WHERE session_token=?").bind(token).all();
  return (rows.results as Array<{category:Category}>).map(x=>x.category);
}
async function categoryAllowed(request:Request,category:Category){return (await unlockedCategories(request)).includes(category);}
function json(data:unknown,status=200,headers:HeadersInit={}){return Response.json(data,{status,headers});}
function safeTest(slug:string){return tests.find(t=>t.slug===slug);}
async function body(request:Request){try{return await request.json() as Record<string,unknown>;}catch{return {};}}

export async function GET(request:Request){
  await initDb();
  const url=new URL(request.url), action=url.searchParams.get("action")||"session";
  if(action==="publicTest"){
    const bank=questionBanks["public-grand-mock"];
    const existingToken=cookie(request,PUBLIC_COOKIE),visitorToken=existingToken||crypto.randomUUID()+crypto.randomUUID();
    await (await rawDb()).prepare("INSERT INTO public_attempts(visitor_token,started_at,total) VALUES(?,?,?) ON CONFLICT(visitor_token) DO NOTHING").bind(visitorToken,new Date().toISOString(),bank.length).run();
    const headers:HeadersInit=existingToken?{}:{"Set-Cookie":`${PUBLIC_COOKIE}=${encodeURIComponent(visitorToken)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`};
    return json({test:{slug:"public-grand-mock",name:"Free NLE Grand Mock Test",short:"FREE MOCK",icon:"★",color:"#e09b24",questionCount:bank.length,duration:180,category:"grand"},questions:bank.map(q=>({id:q.id,question:q.question,options:q.options}))},200,headers);
  }
  if(action==="publicTest2"){
    const bank=questionBanks["public-grand-mock-2"];
    if(!bank)return json({error:"Test not found."},404);
    const existingToken=cookie(request,PUBLIC_COOKIE_2),visitorToken=existingToken||crypto.randomUUID()+crypto.randomUUID();
    await (await rawDb()).prepare("INSERT INTO public_attempts_2(visitor_token,started_at,total) VALUES(?,?,?) ON CONFLICT(visitor_token) DO NOTHING").bind(visitorToken,new Date().toISOString(),bank.length).run();
    const headers:HeadersInit=existingToken?{}:{"Set-Cookie":`${PUBLIC_COOKIE_2}=${encodeURIComponent(visitorToken)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`};
    return json({test:{...PUBLIC_MOCK_2,questionCount:bank.length},questions:bank.map(q=>({id:q.id,question:q.question,options:q.options}))},200,headers);
  }
  if(action==="session"){
    const student=await studentFrom(request);
    const extra=await visibleStudentTests(await rawDb());
    const freeCustomTests=await visibleFreeTests(await rawDb());
    if(!student)return json({authenticated:false,tests,freeCustomTests});
    const rows=await (await rawDb()).prepare('SELECT test_slug AS "testSlug",status,score,total,started_at AS "startedAt",submitted_at AS "submittedAt" FROM attempts WHERE student_id=?').bind(student.studentId).all();
    return json({authenticated:true,student,tests:[...tests,...extra],attempts:rows.results,unlockedCategories:await unlockedCategories(request),freeCustomTests});
  }
  if(action==="test"){
    const student=await studentFrom(request); if(!student)return json({error:"Please sign in."},401);
    const slug=url.searchParams.get("slug")||"";
    let meta=safeTest(slug), bank=questionBanks[slug];
    const custom=(!meta||!bank)?await resolveCustom(await rawDb(),slug):null;
    if(custom){
      if(!studentVisible(custom.row)||custom.row.appearIn==="free")return json({error:"Test not found."},404);
      meta=custom.meta;bank=custom.questions.filter(q=>q.answer>=0&&q.options.length>=4);
    }
    if(!meta||!bank)return json({error:"Test not found."},404);
    if(!await categoryAllowed(request,meta.category))return json({error:"Unlock this category before opening the test.",categoryLocked:true},403);
    const save=custom?custom.row.saveAttempts===1:true;
    const existing=save?await (await rawDb()).prepare("SELECT status,score,total FROM attempts WHERE student_id=? AND test_slug=?").bind(student.studentId,slug).first<{status:string;score:number;total:number}>():null;
    if(existing?.status==="completed")return json({error:"This test has already been completed.",completed:true},409);
    if(save&&!existing)await (await rawDb()).prepare("INSERT INTO attempts(student_id,test_slug,status,started_at,total) VALUES(?,?,?,?,?)").bind(student.studentId,slug,"in_progress",new Date().toISOString(),bank.length).run();
    const saved=save?await (await rawDb()).prepare('SELECT question_id AS "questionId",selected,correct FROM answers WHERE student_id=? AND test_slug=? ORDER BY question_id').bind(student.studentId,slug).all():{results:[]};
    const map=new Map((saved.results as Array<{questionId:number;selected:number;correct:number}>).map(x=>[x.questionId,x]));
    return json({test:meta,questions:bank.map(q=>({id:q.id,question:q.question,options:q.options})),saved:[...map.values()]});
  }
  if(action==="result"){
    const student=await studentFrom(request); if(!student)return json({error:"Please sign in."},401);
    const slug=url.searchParams.get("slug")||"";
    let bank=questionBanks[slug],meta=safeTest(slug);
    const custom=(!bank||!meta)?await resolveCustom(await rawDb(),slug):null;
    if(custom){meta=custom.meta;bank=custom.questions;}
    if(meta&&!await categoryAllowed(request,meta.category))return json({error:"Unlock this category before viewing the result.",categoryLocked:true},403);
    const attempt=await (await rawDb()).prepare('SELECT status,score,total,submitted_at AS "submittedAt" FROM attempts WHERE student_id=? AND test_slug=?').bind(student.studentId,slug).first<{status:string;score:number;total:number;submittedAt:string}>();
    if(!bank||!meta||attempt?.status!=="completed")return json({error:"Completed result not found."},404);
    const rows=await (await rawDb()).prepare('SELECT question_id AS "questionId",selected,correct FROM answers WHERE student_id=? AND test_slug=? ORDER BY question_id').bind(student.studentId,slug).all();
    const selected=new Map((rows.results as Array<{questionId:number;selected:number;correct:number}>).map(x=>[x.questionId,x]));
    return json({test:meta,attempt,questions:bank.map(q=>({...q,selected:selected.get(q.id)?.selected??null,isCorrect:Boolean(selected.get(q.id)?.correct)}))});
  }
  if(action==="admin"){
    if(!ADMIN_KEY||request.headers.get("x-admin-key")!==ADMIN_KEY)return json({error:"Invalid admin access code."},403);
    const students=await (await rawDb()).prepare('SELECT s.student_id AS "studentId",s.name,s.active,s.created_at AS "createdAt",EXISTS(SELECT 1 FROM sessions x WHERE x.student_id=s.student_id AND x.expires_at>?) AS "loggedIn" FROM students s ORDER BY s.created_at DESC').bind(new Date().toISOString()).all();
    const results=await (await rawDb()).prepare('SELECT a.student_id AS "studentId",s.name,a.test_slug AS "testSlug",a.status,a.score,a.total,a.started_at AS "startedAt",a.submitted_at AS "submittedAt" FROM attempts a JOIN students s ON s.student_id=a.student_id ORDER BY a.started_at DESC').all();
    const publicStats=await (await rawDb()).prepare('SELECT COUNT(*) AS started,COUNT(submitted_at) AS completed FROM public_attempts').first<{started:number;completed:number}>();
    const publicAttempts=await (await rawDb()).prepare('SELECT started_at AS "startedAt",submitted_at AS "submittedAt",score,total FROM public_attempts ORDER BY started_at DESC LIMIT 50').all();
    const publicStats2=await (await rawDb()).prepare('SELECT COUNT(*) AS started,COUNT(submitted_at) AS completed FROM public_attempts_2').first<{started:number;completed:number}>();
    const publicAttempts2=await (await rawDb()).prepare('SELECT started_at AS "startedAt",submitted_at AS "submittedAt",score,total FROM public_attempts_2 ORDER BY started_at DESC LIMIT 50').all();
    return json({students:students.results,results:results.results,tests,publicStats:{started:Number(publicStats?.started||0),completed:Number(publicStats?.completed||0)},publicAttempts:publicAttempts.results,publicStats2:{started:Number(publicStats2?.started||0),completed:Number(publicStats2?.completed||0)},publicAttempts2:publicAttempts2.results});
  }
  if(action==="adminCustomTests"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const db=await rawDb();
    const customTests=[];
    for(const row of await listCustomTests(db)){
      const qs=await loadCustomQuestions(db,row.id);
      customTests.push({...row,validCount:qs.filter(q=>!q.needsReview&&q.answer>=0).length,reviewCount:qs.filter(q=>q.needsReview||q.answer<0).length});
    }
    return json({customTests});
  }
  if(action==="publicCustomTest"){
    const slug=url.searchParams.get("slug")||"",custom=await resolveCustom(await rawDb(),slug);
    if(!custom||!studentVisible(custom.row)||custom.row.appearIn!=="free")return json({error:"Test not found."},404);
    const bank=custom.questions.filter(q=>q.answer>=0&&q.options.length>=4);
    if(!bank.length)return json({error:"This test has no published questions yet."},404);
    const existingToken=cookie(request,PUBLIC_CUSTOM_COOKIE),visitorToken=existingToken||crypto.randomUUID()+crypto.randomUUID();
    if(custom.row.saveAttempts)await (await rawDb()).prepare("INSERT INTO admin_public_attempts(visitor_token,test_id,started_at,total) VALUES(?,?,?,?) ON CONFLICT(visitor_token,test_id) DO NOTHING").bind(visitorToken,custom.row.id,new Date().toISOString(),bank.length).run();
    const headers:HeadersInit=existingToken?{}:{"Set-Cookie":`${PUBLIC_CUSTOM_COOKIE}=${encodeURIComponent(visitorToken)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`};
    return json({test:custom.meta,questions:bank.map(q=>({id:q.id,question:q.question,options:q.options}))},200,headers);
  }
  return json({error:"Unknown action."},400);
}

export async function POST(request:Request){
  await initDb();
  const contentType=request.headers.get("content-type")||"";
  if(contentType.includes("multipart/form-data")){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const form=await request.formData();
    if(String(form.get("action")||"")!=="adminParsePdf")return json({error:"Unknown action."},400);
    const file=form.get("file");
    if(!(file instanceof File))return json({error:"PDF file is required."},400);
    const text=await pdfToText(new Uint8Array(await file.arrayBuffer()));
    const questions=parseMcqBank(text);
    return json({questions,summary:importSummary(questions),text});
  }
  const data=await body(request),action=String(data.action||"");
  if(action==="publicAnswer"){
    const bank=questionBanks["public-grand-mock"],id=Number(data.questionId),selected=Number(data.selected),q=bank.find(x=>x.id===id);
    if(!q||!Number.isInteger(selected)||selected<0||selected>=q.options.length)return json({error:"Invalid answer."},400);
    return json({correct:selected===q.answer,correctIndex:q.answer,explanation:q.explanation});
  }
  if(action==="publicSubmit"){
    const visitorToken=cookie(request,PUBLIC_COOKIE),bank=questionBanks["public-grand-mock"],score=Number(data.score);
    if(!visitorToken)return json({error:"Public attempt was not found. Please reopen the test."},400);
    if(!Number.isInteger(score)||score<0||score>bank.length)return json({error:"Invalid public score."},400);
    await (await rawDb()).prepare("UPDATE public_attempts SET submitted_at=?,score=?,total=? WHERE visitor_token=?").bind(new Date().toISOString(),score,bank.length,visitorToken).run();
    return json({ok:true});
  }
  if(action==="publicAnswer2"){
    const bank=questionBanks["public-grand-mock-2"],id=Number(data.questionId),selected=Number(data.selected),q=bank.find(x=>x.id===id);
    if(!q||!Number.isInteger(selected)||selected<0||selected>=q.options.length)return json({error:"Invalid answer."},400);
    return json({correct:selected===q.answer,correctIndex:q.answer,explanation:q.explanation});
  }
  if(action==="publicSubmit2"){
    const visitorToken=cookie(request,PUBLIC_COOKIE_2),bank=questionBanks["public-grand-mock-2"],score=Number(data.score);
    if(!visitorToken)return json({error:"Public attempt was not found. Please reopen the test."},400);
    if(!Number.isInteger(score)||score<0||score>bank.length)return json({error:"Invalid public score."},400);
    await (await rawDb()).prepare("UPDATE public_attempts_2 SET submitted_at=?,score=?,total=? WHERE visitor_token=?").bind(new Date().toISOString(),score,bank.length,visitorToken).run();
    return json({ok:true});
  }
  if(action==="publicAnswerCustom"){
    const custom=await resolveCustom(await rawDb(),String(data.slug||""));
    if(!custom||!studentVisible(custom.row)||custom.row.appearIn!=="free")return json({error:"Test not found."},404);
    const id=Number(data.questionId),selected=Number(data.selected),q=custom.questions.find(x=>x.id===id);
    if(!q||!Number.isInteger(selected)||selected<0||selected>=q.options.length)return json({error:"Invalid answer."},400);
    return json({correct:selected===q.answer,correctIndex:q.answer,explanation:q.explanation});
  }
  if(action==="publicSubmitCustom"){
    const custom=await resolveCustom(await rawDb(),String(data.slug||""));
    if(!custom||!studentVisible(custom.row)||custom.row.appearIn!=="free")return json({error:"Test not found."},404);
    const visitorToken=cookie(request,PUBLIC_CUSTOM_COOKIE),score=Number(data.score),total=custom.questions.filter(q=>q.answer>=0).length;
    if(!Number.isInteger(score)||score<0||score>total)return json({error:"Invalid public score."},400);
    if(custom.row.saveAttempts){
      if(!visitorToken)return json({error:"Public attempt was not found. Please reopen the test."},400);
      await (await rawDb()).prepare("UPDATE admin_public_attempts SET submitted_at=?,score=?,total=? WHERE visitor_token=? AND test_id=?").bind(new Date().toISOString(),score,total,visitorToken,custom.row.id).run();
    }
    return json({ok:true});
  }
  if(action==="login"){
    const studentId=String(data.studentId||"").trim().toUpperCase(),accessCode=String(data.accessCode||"").trim();
    if(!studentId||!accessCode)return json({error:"Student ID and access code are required."},400);
    const row=await (await rawDb()).prepare('SELECT student_id AS "studentId",name,access_hash AS "accessHash",active FROM students WHERE student_id=?').bind(studentId).first<{studentId:string;name:string;accessHash:string;active:number}>();
    if(!row||!row.active||row.accessHash!==await hash(accessCode))return json({error:"Invalid Student ID or access code."},401);
    const token=crypto.randomUUID()+crypto.randomUUID(),expires=new Date(Date.now()+30*86400000).toISOString();
    await (await rawDb()).prepare("INSERT INTO sessions(token,student_id,expires_at) VALUES(?,?,?)").bind(token,studentId,expires).run();
    return json({ok:true,student:{studentId,name:row.name}},200,{"Set-Cookie":`${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`});
  }
  if(action==="logout"){
    const token=cookie(request,SESSION_COOKIE); if(token){const db=await rawDb();await db.batch([db.prepare("DELETE FROM category_unlocks WHERE session_token=?").bind(token),db.prepare("DELETE FROM sessions WHERE token=?").bind(token)]);}
    return json({ok:true},200,{"Set-Cookie":`${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`});
  }
  if(action==="unlockCategory"){
    const session=await sessionFrom(request);if(!session)return json({error:"Session expired."},401);
    const category=String(data.category||"") as Category,accessCode=String(data.accessCode||"").trim();
    if(!(["systems","basic","grand"] as string[]).includes(category))return json({error:"Invalid category."},400);
    const expected=CATEGORY_CODES[category];
    if(!expected)return json({error:"This category password has not been configured by the administrator."},503);
    if(accessCode!==expected)return json({error:"Incorrect category password."},403);
    await (await rawDb()).prepare("INSERT INTO category_unlocks(session_token,category,unlocked_at) VALUES(?,?,?) ON CONFLICT(session_token,category) DO NOTHING").bind(session.token,category,new Date().toISOString()).run();
    return json({ok:true,category});
  }
  if(action==="answer"){
    const student=await studentFrom(request);if(!student)return json({error:"Session expired."},401);
    const slug=String(data.slug||""),id=Number(data.questionId),selected=Number(data.selected);
    let meta=safeTest(slug),bank=questionBanks[slug],q=bank?.find(x=>x.id===id);
    const custom=(!meta||!bank)?await resolveCustom(await rawDb(),slug):null;
    if(custom){
      if(!studentVisible(custom.row)||custom.row.appearIn==="free")return json({error:"Test not found."},404);
      meta=custom.meta;q=custom.questions.find(x=>x.id===id);
    }
    if(meta&&!await categoryAllowed(request,meta.category))return json({error:"Category access is locked."},403);
    if(!q||!Number.isInteger(selected)||selected<0||selected>=q.options.length)return json({error:"Invalid answer."},400);
    const save=custom?custom.row.saveAttempts===1:true;
    if(!save)return json({correct:selected===q.answer,correctIndex:q.answer,explanation:q.explanation});
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
    const slug=String(data.slug||"");
    let bank=questionBanks[slug],meta=safeTest(slug);
    const custom=(!bank||!meta)?await resolveCustom(await rawDb(),slug):null;
    if(custom){if(!studentVisible(custom.row)||custom.row.appearIn==="free")return json({error:"Test not found."},404);meta=custom.meta;bank=custom.questions.filter(q=>q.answer>=0);}
    if(!bank||!meta)return json({error:"Test not found."},404);
    if(!await categoryAllowed(request,meta.category))return json({error:"Category access is locked."},403);
    const save=custom?custom.row.saveAttempts===1:true;
    if(!save)return json({ok:true,score:Number(data.score||0),total:bank.length});
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
  if(!isAdmin(request)&&String(data.action||"").startsWith("admin"))return json({error:"Invalid admin access code."},403);
  if(action==="adminParsePaste"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const questions=parseMcqBank(String(data.text||""));
    return json({questions,summary:importSummary(questions)});
  }
  if(action==="adminCreateTest"||action==="adminUpdateTest"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const title=String(data.title||"").trim();
    if(title.length<3)return json({error:"A test title is required."},400);
    const now=new Date().toISOString();
    const id=action==="adminUpdateTest"?String(data.id||""):crypto.randomUUID().replace(/-/g,"");
    if(!id)return json({error:"Test id is required."},400);
    const fields=[title,String(data.description||""),String(data.module||"systems"),String(data.testType||"basic"),String(data.appearIn||"module"),Number(data.questionCount||0),Number(data.duration||120),Number(data.passingPct||50),Number(data.active??1),Number(data.locked??0),Number(data.saveAttempts??1)];
    if(action==="adminCreateTest")await (await rawDb()).prepare("INSERT INTO admin_tests(id,title,description,module,test_type,appear_in,question_count,duration,passing_pct,active,locked,save_attempts,published,archived,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,0,0,?,?)").bind(id,...fields,now,now).run();
    else await (await rawDb()).prepare("UPDATE admin_tests SET title=?,description=?,module=?,test_type=?,appear_in=?,question_count=?,duration=?,passing_pct=?,active=?,locked=?,save_attempts=?,updated_at=? WHERE id=? AND archived=0").bind(...fields,now,id).run();
    return json({ok:true,id});
  }
  if(action==="adminSaveQuestions"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const id=String(data.id||""),items=Array.isArray(data.questions)?data.questions as Array<{question:string;options:string[];answer:number|null;explanation?:string;needsReview?:boolean;reviewReason?:string}>:[];
    if(!id||!items.length)return json({error:"Questions are required."},400);
    const publish=Number(data.publish||0)===1;
    const normalized=items.map((item,index)=>({
      id:index+1,
      question:String(item.question||"").trim(),
      options:(item.options||[]).slice(0,4).map(o=>String(o||"").trim()),
      answer:item.answer,
      explanation:String(item.explanation||""),
      needsReview:Boolean(item.needsReview)||!item.question||!(item.options||[]).slice(0,4).every(Boolean)||item.answer===null||item.answer<0||item.answer>3,
    }));
    if(publish&&normalized.some(q=>q.needsReview||q.answer===null))return json({error:"Resolve all review items before publishing."},400);
    const db=await rawDb();
    await db.prepare("DELETE FROM admin_questions WHERE test_id=?").bind(id).run();
    for(const q of normalized){
      await db.prepare("INSERT INTO admin_questions(test_id,question_id,question,options_json,answer,explanation,needs_review) VALUES(?,?,?,?,?,?,?)").bind(id,q.id,q.question,JSON.stringify(q.options),q.answer??-1,q.explanation,q.needsReview?1:0).run();
    }
    await db.prepare("UPDATE admin_tests SET question_count=?,published=?,updated_at=? WHERE id=?").bind(normalized.length,publish?1:0,new Date().toISOString(),id).run();
    return json({ok:true,count:normalized.length,published:publish});
  }
  if(action==="adminGetQuestions"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const id=String(data.id||"");
    return json({questions:await loadCustomQuestions(await rawDb(),id)});
  }
  if(action==="adminToggleTest"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const id=String(data.id||""),field=String(data.field||"");
    if(!["active","locked","published"].includes(field))return json({error:"Invalid field."},400);
    const row=await loadCustomTest(await rawDb(),id);
    if(!row)return json({error:"Test not found."},404);
    if(field==="published"&&!row.published){
      const qs=await loadCustomQuestions(await rawDb(),id);
      if(!qs.length||qs.some(q=>q.needsReview||q.answer<0))return json({error:"Import and review valid questions before publishing."},400);
    }
    const next=field==="active"?Number(!row.active):field==="locked"?Number(!row.locked):Number(!row.published);
    const sql=field==="active"?"UPDATE admin_tests SET active=?,updated_at=? WHERE id=?":field==="locked"?"UPDATE admin_tests SET locked=?,updated_at=? WHERE id=?":"UPDATE admin_tests SET published=?,updated_at=? WHERE id=?";
    await (await rawDb()).prepare(sql).bind(next,new Date().toISOString(),id).run();
    return json({ok:true});
  }
  if(action==="adminArchiveTest"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    await (await rawDb()).prepare("UPDATE admin_tests SET archived=1,published=0,active=0,updated_at=? WHERE id=?").bind(new Date().toISOString(),String(data.id||"")).run();
    return json({ok:true});
  }
  if(action==="adminCustomStats"){
    if(!isAdmin(request))return json({error:"Invalid admin access code."},403);
    const id=String(data.id||""),slug=slugFromCustomId(id),row=await loadCustomTest(await rawDb(),id);
    if(!row)return json({error:"Test not found."},404);
    const studentStats=await (await rawDb()).prepare("SELECT COUNT(*) started,COUNT(CASE WHEN status='completed' THEN 1 END) completed,AVG(CASE WHEN status='completed' THEN score*100.0/NULLIF(total,0) END) average,COUNT(CASE WHEN status='completed' AND score*100.0/NULLIF(total,0)>=? THEN 1 END) passed FROM attempts WHERE test_slug=?").bind(row.passingPct,slug).first<{started:number;completed:number;average:number|null;passed:number}>();
    const publicStats=await (await rawDb()).prepare("SELECT COUNT(*) started,COUNT(submitted_at) completed,AVG(CASE WHEN submitted_at IS NOT NULL THEN score*100.0/NULLIF(total,0) END) average,COUNT(CASE WHEN submitted_at IS NOT NULL AND score*100.0/NULLIF(total,0)>=? THEN 1 END) passed FROM admin_public_attempts WHERE test_id=?").bind(row.passingPct,id).first<{started:number;completed:number;average:number|null;passed:number}>();
    const started=Number(studentStats?.started||0)+Number(publicStats?.started||0);
    const completed=Number(studentStats?.completed||0)+Number(publicStats?.completed||0);
    const average=Math.round(Number(studentStats?.average||publicStats?.average||0));
    const passed=Number(studentStats?.passed||0)+Number(publicStats?.passed||0);
    return json({stats:{started,completed,average,passed}});
  }
  return json({error:"Unknown action."},400);
}
