"use client";
import {useEffect,useState} from "react";

type CustomTest={
  id:string;title:string;description:string;module:string;testType:string;appearIn:string;
  questionCount:number;duration:number;passingPct:number;active:number;locked:number;
  saveAttempts:number;published:number;createdAt:string;updatedAt:string;
  validCount?:number;reviewCount?:number;stats?:{started:number;completed:number;average:number;passed:number};
};
type DraftQ={id:number;question:string;options:string[];answer:number|null;explanation:string;needsReview:boolean;reviewReason?:string};
const emptyForm={title:"",description:"",module:"systems",testType:"basic",appearIn:"module",questionCount:"100",duration:"120",passingPct:"50",active:true,locked:false,saveAttempts:true};

export default function AdminTestBuilder({adminKey,onError}:{adminKey:string;onError:(msg:string)=>void}){
  const[tests,setTests]=useState<CustomTest[]>([]);
  const[form,setForm]=useState(emptyForm);
  const[editingId,setEditingId]=useState("");
  const[paste,setPaste]=useState("");
  const[draft,setDraft]=useState<DraftQ[]|null>(null);
  const[summary,setSummary]=useState<{imported:number;valid:number;needsReview:number}|null>(null);
  const[busy,setBusy]=useState(false);
  const[preview,setPreview]=useState<DraftQ[]|null>(null);
  const[statsFor,setStatsFor]=useState<CustomTest|null>(null);

  async function api(action:string,body:Record<string,unknown>={}){
    const r=await fetch("/api/portal",{method:"POST",headers:{"Content-Type":"application/json","x-admin-key":adminKey},body:JSON.stringify({action,...body})});
    const d=await r.json();
    if(!r.ok)throw new Error(d.error||"Request failed");
    return d;
  }
  async function refresh(){
    const r=await fetch("/api/portal?action=adminCustomTests",{headers:{"x-admin-key":adminKey},cache:"no-store"});
    const d=await r.json();
    if(!r.ok)return onError(d.error||"Unable to load tests");
    setTests(d.customTests||[]);
  }
  useEffect(()=>{refresh();},[adminKey]);

  async function saveMeta(e:React.FormEvent){
    e.preventDefault();setBusy(true);
    try{
      await api(editingId?"adminUpdateTest":"adminCreateTest",{
        id:editingId||undefined,
        title:form.title,description:form.description,module:form.module,testType:form.testType,appearIn:form.appearIn,
        questionCount:Number(form.questionCount),duration:Number(form.duration),passingPct:Number(form.passingPct),
        active:form.active?1:0,locked:form.locked?1:0,saveAttempts:form.saveAttempts?1:0,
      });
      setForm(emptyForm);setEditingId("");await refresh();
    }catch(err){onError(err instanceof Error?err.message:"Unable to save test");}
    setBusy(false);
  }
  async function parsePaste(){
    setBusy(true);
    try{
      const d=await api("adminParsePaste",{text:paste});
      setDraft(d.questions);setSummary(d.summary);
    }catch(err){onError(err instanceof Error?err.message:"Unable to parse questions");}
    setBusy(false);
  }
  async function parsePdf(file:File){
    setBusy(true);
    try{
      const data=new FormData();data.append("action","adminParsePdf");data.append("file",file);
      const r=await fetch("/api/portal",{method:"POST",headers:{"x-admin-key":adminKey},body:data});
      const d=await r.json();
      if(!r.ok)throw new Error(d.error||"Unable to read PDF");
      setDraft(d.questions);setSummary(d.summary);if(d.text)setPaste(d.text);
    }catch(err){onError(err instanceof Error?err.message:"Unable to import PDF");}
    setBusy(false);
  }
  async function saveQuestions(publish:boolean){
    if(!editingId&&!form.title)return onError("Save the test details first, then import questions.");
    setBusy(true);
    try{
      let id=editingId;
      if(!id){
        const created=await api("adminCreateTest",{
          title:form.title,description:form.description,module:form.module,testType:form.testType,appearIn:form.appearIn,
          questionCount:Number(form.questionCount),duration:Number(form.duration),passingPct:Number(form.passingPct),
          active:form.active?1:0,locked:form.locked?1:0,saveAttempts:form.saveAttempts?1:0,
        });
        id=created.id;setEditingId(id);
      }
      await api("adminSaveQuestions",{id,questions:draft,publish:publish?1:0});
      setDraft(null);setSummary(null);setPaste("");await refresh();
    }catch(err){onError(err instanceof Error?err.message:"Unable to save questions");}
    setBusy(false);
  }
  async function toggle(id:string,field:"active"|"locked"|"published"){
    try{await api("adminToggleTest",{id,field});await refresh();}catch(err){onError(err instanceof Error?err.message:"Unable to update test");}
  }
  async function archive(id:string){
    if(!confirm("Archive this admin-created test? Existing hardcoded tests are not affected."))return;
    try{await api("adminArchiveTest",{id});if(editingId===id){setEditingId("");setForm(emptyForm);}await refresh();}catch(err){onError(err instanceof Error?err.message:"Unable to archive test");}
  }
  async function loadQuestions(id:string){
    try{
      const d=await api("adminGetQuestions",{id});
      setPreview(d.questions||[]);
    }catch(err){onError(err instanceof Error?err.message:"Unable to load questions");}
  }
  async function loadStats(row:CustomTest){
    try{
      const d=await api("adminCustomStats",{id:row.id});
      setStatsFor({...row,stats:d.stats});
    }catch(err){onError(err instanceof Error?err.message:"Unable to load statistics");}
  }
  function edit(row:CustomTest){
    setEditingId(row.id);
    setForm({title:row.title,description:row.description,module:row.module,testType:row.testType,appearIn:row.appearIn,questionCount:String(row.questionCount),duration:String(row.duration),passingPct:String(row.passingPct),active:Boolean(row.active),locked:Boolean(row.locked),saveAttempts:Boolean(row.saveAttempts)});
    setDraft(null);setSummary(null);
  }
  function updateDraft(i:number,patch:Partial<DraftQ>){
    setDraft(list=>(list||[]).map((q,idx)=>idx===i?{...q,...patch,needsReview:false,reviewReason:""}:q));
  }

  return <section className="panel tablePanel resultsPanel testBuilder">
    <h2>Test Management</h2>
    <p className="muted">Create additional tests without changing existing Renal, Reproductive, Grand Mock, or Free Mock banks. Publish only after reviewing imported questions.</p>
    <form className="builderForm" onSubmit={saveMeta}>
      <label>Test title<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required/></label>
      <label>Description / instructions<textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} rows={3}/></label>
      <div className="builderGrid">
        <label>Module / category<select value={form.module} onChange={e=>setForm({...form,module:e.target.value})}><option value="systems">System-wise</option><option value="basic">Basic subjects</option><option value="grand">Grand mock</option></select></label>
        <label>Test type<select value={form.testType} onChange={e=>setForm({...form,testType:e.target.value})}><option value="basic">Basic</option><option value="mock">Mock</option><option value="free">Free</option></select></label>
        <label>Appears in<select value={form.appearIn} onChange={e=>setForm({...form,appearIn:e.target.value})}><option value="module">Specific module</option><option value="mock">Mock Tests</option><option value="free">Free Tests</option><option value="hidden">Hidden / Private</option></select></label>
        <label>Number of questions<input type="number" min={1} value={form.questionCount} onChange={e=>setForm({...form,questionCount:e.target.value})}/></label>
        <label>Time limit (min)<input type="number" min={1} value={form.duration} onChange={e=>setForm({...form,duration:e.target.value})}/></label>
        <label>Passing %<input type="number" min={0} max={100} value={form.passingPct} onChange={e=>setForm({...form,passingPct:e.target.value})}/></label>
      </div>
      <div className="builderChecks">
        <label><input type="checkbox" checked={form.active} onChange={e=>setForm({...form,active:e.target.checked})}/> Active</label>
        <label><input type="checkbox" checked={form.locked} onChange={e=>setForm({...form,locked:e.target.checked})}/> Locked</label>
        <label><input type="checkbox" checked={form.saveAttempts} onChange={e=>setForm({...form,saveAttempts:e.target.checked})}/> Save student attempts/results</label>
      </div>
      <button disabled={busy}>{editingId?"Update test details":"Create test"}</button>
      {editingId&&<button type="button" className="outline" onClick={()=>{setEditingId("");setForm(emptyForm);}}>Cancel edit</button>}
    </form>

    <h3>Bulk question import</h3>
    <p className="muted">Paste numbered MCQs (A–D, Answer, Explanation) or upload a PDF. Nothing is published until you review and save.</p>
    <textarea className="pasteBox" value={paste} onChange={e=>setPaste(e.target.value)} placeholder={"1. Question text...\nA. Option A\nB. Option B\nC. Option C\nD. Option D\nAnswer: B\nExplanation: ..."} rows={10}/>
    <div className="builderActions">
      <button type="button" disabled={busy||!paste.trim()} onClick={parsePaste}>Parse pasted questions</button>
      <label className="outline uploadBtn">Upload PDF<input type="file" accept="application/pdf" hidden onChange={e=>{const f=e.target.files?.[0];if(f)parsePdf(f);e.target.value="";}}/></label>
    </div>

    {summary&&draft&&<div className="importSummary"><b>{summary.imported} questions imported — {summary.valid} valid — {summary.needsReview} need review</b><span>Edit flagged items, then save as draft or publish.</span></div>}
    {draft&&<div className="importReview">{draft.map((q,i)=><article className={"reviewQ "+(q.needsReview?"bad":"good")} key={i}>
      <header><b>Question {i+1}</b>{q.needsReview&&<span>Needs review{q.reviewReason?": "+q.reviewReason:""}</span>}</header>
      <label>Question<textarea value={q.question} rows={3} onChange={e=>updateDraft(i,{question:e.target.value})}/></label>
      {["A","B","C","D"].map((letter,oi)=><label key={letter}>{letter}<input value={q.options[oi]||""} onChange={e=>{const options=[...q.options];options[oi]=e.target.value;updateDraft(i,{options});}}/></label>)}
      <label>Correct answer<select value={q.answer??""} onChange={e=>updateDraft(i,{answer:e.target.value===""?null:Number(e.target.value)})}><option value="">Select</option><option value={0}>A</option><option value={1}>B</option><option value={2}>C</option><option value={3}>D</option></select></label>
      <label>Explanation<textarea value={q.explanation} rows={2} onChange={e=>updateDraft(i,{explanation:e.target.value})}/></label>
      <button type="button" className="dangerBtn" onClick={()=>setDraft(list=>(list||[]).filter((_,idx)=>idx!==i))}>Delete question</button>
    </article>)}
      <button type="button" className="outline" onClick={()=>setDraft(list=>[...(list||[]),{id:(list||[]).length+1,question:"",options:["","","",""],answer:null,explanation:"",needsReview:true,reviewReason:"Added manually"}])}>Add question</button>
      <div className="builderActions">
        <button type="button" disabled={busy} onClick={()=>saveQuestions(false)}>Save as draft</button>
        <button type="button" disabled={busy||draft.some(q=>q.needsReview||q.answer===null||!q.question||q.options.some(o=>!o))} onClick={()=>saveQuestions(true)}>Save and publish</button>
      </div>
    </div>}

    <h3>Created tests</h3>
    <table><thead><tr><th>Test</th><th>Type / location</th><th>Status</th><th>Questions</th><th>Actions</th></tr></thead>
    <tbody>{tests.map(row=><tr key={row.id}>
      <td><b>{row.title}</b><small>{row.description||"No description"}</small></td>
      <td>{row.testType} · {row.appearIn} · {row.module}</td>
      <td><span className={"badge "+(row.published?"completed":"")}>{row.published?"Published":"Draft"}</span> {row.active?"Active":"Inactive"} {row.locked?"Locked":"Unlocked"}</td>
      <td>{row.validCount??row.questionCount}{row.reviewCount?` · ${row.reviewCount} review`:""}</td>
      <td className="builderRowActions">
        <button type="button" className="outline" onClick={()=>edit(row)}>Edit</button>
        <button type="button" className="outline" onClick={()=>loadQuestions(row.id)}>View / preview</button>
        <button type="button" className="outline" onClick={()=>toggle(row.id,"locked")}>{row.locked?"Unlock":"Lock"}</button>
        <button type="button" className="outline" onClick={()=>toggle(row.id,"active")}>{row.active?"Deactivate":"Activate"}</button>
        <button type="button" className="outline" onClick={()=>toggle(row.id,"published")}>{row.published?"Unpublish":"Publish"}</button>
        <button type="button" className="outline" onClick={()=>loadStats(row)}>Attempts</button>
        <button type="button" className="dangerBtn" onClick={()=>archive(row.id)}>Archive</button>
      </td>
    </tr>)}</tbody></table>
    {!tests.length&&<div className="empty">No admin-created tests yet. Existing portal tests are unchanged.</div>}

    {preview&&<div className="importReview"><h3>Preview</h3>{preview.map(q=><article className="reviewQ" key={q.id}><header><b>Q{q.id}</b></header><h3>{q.question}</h3>{q.options.map((o,i)=><div className={"reviewOption "+(i===q.answer?"correct":"")} key={i}><b>{String.fromCharCode(65+i)}</b>{o}</div>)}<p><b>Explanation:</b> {q.explanation||"—"}</p></article>)}<button type="button" className="outline" onClick={()=>setPreview(null)}>Close preview</button></div>}
    {statsFor?.stats&&<section className="publicAnalytics"><div><small>STARTED</small><b>{statsFor.stats.started}</b><span>{statsFor.title}</span></div><div><small>COMPLETED</small><b>{statsFor.stats.completed}</b><span>Submitted attempts</span></div><div><small>AVERAGE</small><b>{statsFor.stats.average}%</b><span>{statsFor.stats.passed} passed at {statsFor.passingPct}%</span></div></section>}
  </section>;
}
