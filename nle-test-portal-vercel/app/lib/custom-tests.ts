import type { TestInfo } from "../data/types";
import type { ImportedQuestion } from "./mcq-import";

export const CUSTOM_PREFIX="custom-";
type RawStatement={
  bind:(...values:unknown[])=>RawStatement;
  first:<T>()=>Promise<T|null>;
  all:()=>Promise<{results:unknown[]}>;
  run:()=>Promise<unknown>;
};
export type RawDb={prepare:(sql:string)=>RawStatement;batch:(statements:RawStatement[])=>Promise<unknown>};

export type CustomTestRow={
  id:string;
  title:string;
  description:string;
  module:string;
  testType:string;
  appearIn:string;
  questionCount:number;
  duration:number;
  passingPct:number;
  active:number;
  locked:number;
  saveAttempts:number;
  published:number;
  archived:number;
  createdAt:string;
  updatedAt:string;
};

export type StoredQuestion={id:number;question:string;options:string[];answer:number;explanation:string;needsReview?:boolean};

export function isCustomSlug(slug:string){return slug.startsWith(CUSTOM_PREFIX);}
export function customIdFromSlug(slug:string){return slug.slice(CUSTOM_PREFIX.length);}
export function slugFromCustomId(id:string){return CUSTOM_PREFIX+id;}

export function studentCategory(row:CustomTestRow):"systems"|"basic"|"grand"{
  if(row.appearIn==="mock"||row.testType==="mock")return "grand";
  if(row.module==="basic"||row.testType==="basic")return "basic";
  if(row.module==="grand")return "grand";
  return "systems";
}

export function toTestInfo(row:CustomTestRow,count:number):TestInfo{
  const category=studentCategory(row);
  return {
    slug:slugFromCustomId(row.id),
    name:row.title,
    short:row.title.slice(0,10).toUpperCase()||"CUSTOM",
    icon:"＋",
    color:category==="grand"?"#b7791f":category==="basic"?"#6557c7":"#087f8c",
    questionCount:count||row.questionCount,
    duration:row.duration,
    category,
  };
}

export function studentVisible(row:CustomTestRow){
  return row.published===1&&row.active===1&&row.locked===0&&row.archived===0&&row.appearIn!=="hidden";
}

export async function loadCustomTest(db:RawDb,id:string){
  return db.prepare('SELECT id,title,description,module,test_type AS "testType",appear_in AS "appearIn",question_count AS "questionCount",duration,passing_pct AS "passingPct",active,locked,save_attempts AS "saveAttempts",published,archived,created_at AS "createdAt",updated_at AS "updatedAt" FROM admin_tests WHERE id=?').bind(id).first<CustomTestRow>();
}

export async function loadCustomQuestions(db:RawDb,id:string){
  const rows=await db.prepare('SELECT question_id AS id,question,options_json AS "optionsJson",answer,explanation,needs_review AS "needsReview" FROM admin_questions WHERE test_id=? ORDER BY question_id').bind(id).all();
  return (rows.results as Array<{id:number;question:string;optionsJson:string;answer:number;explanation:string;needsReview:number}>).map(row=>({
    id:row.id,
    question:row.question,
    options:JSON.parse(row.optionsJson||"[]") as string[],
    answer:row.answer,
    explanation:row.explanation||"",
    needsReview:Boolean(row.needsReview),
  }));
}

export async function listCustomTests(db:RawDb){
  const rows=await db.prepare('SELECT id,title,description,module,test_type AS "testType",appear_in AS "appearIn",question_count AS "questionCount",duration,passing_pct AS "passingPct",active,locked,save_attempts AS "saveAttempts",published,archived,created_at AS "createdAt",updated_at AS "updatedAt" FROM admin_tests WHERE archived=0 ORDER BY created_at DESC').all();
  return rows.results as CustomTestRow[];
}

export async function visibleStudentTests(db:RawDb){
  const rows=await listCustomTests(db);
  const visible=rows.filter(row=>studentVisible(row)&&row.appearIn!=="free");
  const tests:TestInfo[]=[];
  for(const row of visible){
    const qs=await loadCustomQuestions(db,row.id);
    if(!qs.length)continue;
    tests.push(toTestInfo(row,qs.length));
  }
  return tests;
}

export async function visibleFreeTests(db:RawDb){
  const rows=await listCustomTests(db);
  const visible=rows.filter(row=>studentVisible(row)&&row.appearIn==="free");
  const tests:TestInfo[]=[];
  for(const row of visible){
    const qs=await loadCustomQuestions(db,row.id);
    if(!qs.length)continue;
    tests.push(toTestInfo(row,qs.length));
  }
  return tests;
}

export function questionsFromImport(items:ImportedQuestion[]):StoredQuestion[]{
  return items.map((item,index)=>({
    id:index+1,
    question:item.question,
    options:item.options,
    answer:item.answer??-1,
    explanation:item.explanation||"",
    needsReview:item.needsReview,
  }));
}
