/* Targeted authoring quality scan for numeric answer precision and ambiguous distractors.
 * Flags only, does not silently alter existing exam fingerprints, scores or IDs.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
function scan(root=path.resolve(__dirname,'..')){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(x=>x[1].split('?')[0])
 .filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const w={BAContent:{}};
 for(const file of scripts)new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(w);
 const findings=[],totals={questions:0,explicitTwoDecimal:0,correctChoicePrecisionFlags:0,ambiguousDuplicateOptions:0,missingExplanations:0};
 for(let n=1;n<=26;n++){
  const course='course-'+String(n).padStart(2,'0'),c=w.BAContent[course];
  if(!c)throw Error('Missing '+course);
  const exams=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
  for(const exam of exams)for(const q of exam.questions||[]){
   totals.questions++;
   const correct=q.options?.[q.correct];
   const duplicateOptions=q.options?.length!==new Set((q.options||[]).map(x=>String(x).trim().toLowerCase())).size;
   const expectedPrecision=/round(?:ed|ing)?\s+to\s+(?:2|two)\s+decimals?(?:\s+places?)?/i.test(q.prompt||'');
   if(expectedPrecision)totals.explicitTwoDecimal++;
   const normalizedCorrect=String(correct??'').replace(/[$,%\s]/g,'').replace(/,/g,'').replace(/[−]/g,'-');
   const decimalLike=/^-?\d+\.\d+$/.test(normalizedCorrect);
   const precisionFlag=expectedPrecision&&decimalLike&&!/^-?\d+\.\d{2}$/.test(normalizedCorrect);
   if(precisionFlag){totals.correctChoicePrecisionFlags++;findings.push({course,exam:exam.id||'base',id:q.id,type:'two-decimal-answer-format',prompt:q.prompt,correct});}
   if(duplicateOptions){totals.ambiguousDuplicateOptions++;findings.push({course,exam:exam.id||'base',id:q.id,type:'duplicate-answer-options'});}
   if(!String(q.explanation||'').trim()){totals.missingExplanations++;findings.push({course,exam:exam.id||'base',id:q.id,type:'missing-explanation'});}
  }
 }
 return {snapshot:'2026-11-10',source:'current full catalog in production order',totals,findings,
  limitation:'Checks textual precision, duplicate normalized options and presence of explanations, not full numerical correctness, independent exam validity or human academic sign-off'};
}
if(require.main===module){
 const data=scan();
 if(process.argv.includes('--json'))console.log(JSON.stringify(data,null,2));
 else{
  console.log('# Numeric assessment formatting and response quality audit\n');
  console.log('Total assessed questions: '+data.totals.questions);
  console.log('Explicit two-decimal questions: '+data.totals.explicitTwoDecimal);
  console.log('Correct-answer precision flags: '+data.totals.correctChoicePrecisionFlags);
  console.log('Duplicate-choice flags: '+data.totals.ambiguousDuplicateOptions);
  console.log('Missing explanations: '+data.totals.missingExplanations+'\n');
  for(const f of data.findings)console.log('- '+f.course+' / '+f.exam+' / '+f.id+' / '+f.type+(f.correct?' / answer '+f.correct:''));
  console.log('\n'+data.limitation);
 }
}
module.exports={scan};
