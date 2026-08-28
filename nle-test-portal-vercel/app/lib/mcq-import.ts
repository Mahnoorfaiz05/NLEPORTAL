export type ImportedQuestion={
  id:number;
  question:string;
  options:string[];
  answer:number|null;
  explanation:string;
  needsReview:boolean;
  reviewReason:string;
};

const OPTION_LINE=/^\s*([A-Da-d])[\.\)\:]\s*(.*)$/;
const ANSWER_LINE=/^\s*(?:correct\s*)?answer\s*[:\-–—]\s*([A-Da-d])\b/i;
const EXPLAIN_LINE=/^\s*explanation\s*[:\-–—]\s*(.*)$/i;
const Q_START=/^\s*(?:\d+)\s*[\.\)\-]\s*(.*)$/;

function letterIndex(letter:string){
  return letter.toUpperCase().charCodeAt(0)-65;
}

function clean(text:string){
  return text.replace(/\r/g,"\n").replace(/\u00a0/g," ").replace(/[ \t]+\n/g,"\n").trim();
}

function splitBlocks(raw:string){
  const lines=clean(raw).split("\n");
  const blocks:string[][]=[];
  let current:string[]|null=null;
  for(const line of lines){
    const start=line.match(Q_START);
    if(start){
      if(current)blocks.push(current);
      current=[start[1]||""];
      continue;
    }
    if(current)current.push(line);
  }
  if(current)blocks.push(current);
  return blocks;
}

function parseBlock(lines:string[],id:number):ImportedQuestion{
  const optionMap:Record<string,string>={};
  let answer:number|null=null;
  let explanation="";
  let questionLines:string[]=[];
  let stage:"question"|"options"|"explain"="question";
  let lastOption="";

  for(const line of lines){
    const answerMatch=line.match(ANSWER_LINE);
    if(answerMatch){
      answer=letterIndex(answerMatch[1]);
      const rest=line.replace(ANSWER_LINE,"").replace(/^[\s:—–\-]+/,"").trim();
      if(rest&&!explanation)explanation=rest;
      stage="explain";
      continue;
    }
    const explainMatch=line.match(EXPLAIN_LINE);
    if(explainMatch){
      explanation=explainMatch[1]||"";
      stage="explain";
      continue;
    }
    const optionMatch=line.match(OPTION_LINE);
    if(optionMatch){
      const letter=optionMatch[1].toUpperCase();
      optionMap[letter]=(optionMatch[2]||"").trim();
      lastOption=letter;
      stage="options";
      continue;
    }
    if(stage==="options"&&lastOption&&line.trim()){
      optionMap[lastOption]=(optionMap[lastOption]+" "+line.trim()).trim();
      continue;
    }
    if(stage==="explain"){
      if(line.trim())explanation=(explanation?explanation+" ":"")+line.trim();
      continue;
    }
    questionLines.push(line);
  }

  const options=["A","B","C","D"].map(letter=>optionMap[letter]||"");
  const question=questionLines.join(" ").replace(/\s+/g," ").trim();
  const missingOptions=options.some(o=>!o);
  const reasons:string[]=[];
  if(!question)reasons.push("Missing question text");
  if(missingOptions)reasons.push("Need all four options A–D");
  if(answer===null||answer<0||answer>3)reasons.push("Missing or unclear correct answer");
  return {
    id,
    question,
    options,
    answer:answer!==null&&answer>=0&&answer<=3?answer:null,
    explanation,
    needsReview:reasons.length>0,
    reviewReason:reasons.join("; "),
  };
}

export function parseMcqBank(raw:string):ImportedQuestion[]{
  const blocks=splitBlocks(raw);
  return blocks.map((lines,index)=>parseBlock(lines,index+1)).filter(q=>q.question||q.options.some(Boolean)||q.answer!==null);
}

export function importSummary(questions:ImportedQuestion[]){
  const needsReview=questions.filter(q=>q.needsReview).length;
  return {imported:questions.length,valid:questions.length-needsReview,needsReview};
}
