export async function pdfToText(bytes:Uint8Array){
  const {extractText,getDocumentProxy}=await import("unpdf");
  const pdf=await getDocumentProxy(bytes);
  const out=await extractText(pdf,{mergePages:true});
  const text=Array.isArray(out.text)?out.text.join("\n"):String(out.text||"");
  return text.replace(/\f/g,"\n");
}
