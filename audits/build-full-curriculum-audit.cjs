/* Full five-level Business Academy source-composition inventory.
 * Read-only: executes content scripts in the same order as index.html.
 * No Firebase, DOM, browser storage, student submissions, or graduation state.
 * node audits/build-full-curriculum-audit.cjs [--json]
 */
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const levelOf=n=>n<=6?1:n<=13?2:n<=20?3:n<=25?4:5;
const normalize=x=>String(x||'').toLowerCase().trim().replace(/\s+/g,' ');
const sum=xs=>xs.reduce((a,b)=>a+b,0);
function analyze(){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const paths=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(m=>m[1].split('?')[0]);
 const scripts=paths.filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const win={BAContent:{}};
 const failures=[];
 for(const file of scripts){
  try{new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(win);}
  catch(e){failures.push({file,message:String(e.message||e)});}
 }
 try{new Function('window',fs.readFileSync(path.join(root,'learning/workload-audit-v130.js'),'utf8'))(win);}
 catch(e){failures.push({file:'learning/workload-audit-v130.js',message:String(e.message||e)});}
 const courses=[];
 for(let n=1;n<=26;n++){
  const id='course-'+String(n).padStart(2,'0'),c=win.BAContent[id];
  if(!c){courses.push({id,level:levelOf(n),missing:true,issues:[{severity:'critical',type:'missing-course'}]});continue;}
  const mods=c.modules||[],ls=mods.flatMap(m=>m.lessons||[]);
  const tests=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
  const questions=tests.flatMap(x=>x.questions||[]),drills=(c.numericDrills||[]).flatMap(d=>d.questions||[]);
  const read=c.readings||[],apps=c.applications||[],portfolio=c.portfolioSections||[];
  const wk=win.BAWorkloadAudit?.detail(c);
  const issues=[];
  function duplicates(ids,kind){
   const seen=new Set();
   for(const v of ids){if(!v)issues.push({severity:'high',type:'missing-'+kind+'-id'});else if(seen.has(v))issues.push({severity:'high',type:'duplicate-'+kind+'-id',id:v});else seen.add(v);}
  }
  duplicates(ls.map(x=>x.id),'lesson');
  duplicates(tests.map(x=>x.id).filter(Boolean),'assessment');
  duplicates(questions.map(x=>x.id),'assessment-question');
  duplicates(drills.map(x=>x.id),'numeric-question');
  for(const l of ls){
   if(!Number.isFinite(l.minutes)||l.minutes<=0)issues.push({severity:'medium',type:'lesson-minutes',id:l.id});
   if(!Array.isArray(l.body)||l.body.length===0)issues.push({severity:'high',type:'lesson-body-missing',id:l.id});
  }
  for(const q of questions){
   if(!Array.isArray(q.options)||q.options.length<2||!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length)issues.push({severity:'critical',type:'invalid-answer-key',id:q.id});
   else if(new Set(q.options.map(normalize)).size!==q.options.length)issues.push({severity:'medium',type:'duplicate-choices',id:q.id});
   if(!String(q.explanation||'').trim())issues.push({severity:'high',type:'missing-answer-explanation',id:q.id});
  }
  for(const q of drills)if(!Number.isFinite(q.v))issues.push({severity:'critical',type:'invalid-numeric-target',id:q.id});
  const promptCounts=new Map();for(const q of questions){const k=normalize(q.prompt);if(k)promptCounts.set(k,(promptCounts.get(k)||0)+1);}
  const repeated=[...promptCounts].filter(([,count])=>count>1).map(([prompt,count])=>({prompt:prompt.slice(0,130),count}));
  const longShort=ls.filter(l=>l.minutes>=90&&Array.isArray(l.body)&&l.body.join(' ').split(/\s+/).filter(Boolean).length<200);
  const required=tests.filter(e=>!e.optional),optional=tests.filter(e=>e.optional);
  const assignedMinutes=wk?.total||0;
  courses.push({
   id,level:levelOf(n),status:c.status||null,
   learningOutcomes:(c.outcomes||[]).length,modules:mods.length,lessons:ls.length,
   requiredExams:required.length,optionalExams:optional.length,
   gradedQuestions:questions.length,numericDrills:(c.numericDrills||[]).length,numericQuestions:drills.length,
   applications:apps.length,portfolioSections:portfolio.length,corePortfolio:Boolean(c.portfolio),
   sourceReadings:read.length,readingsWithUrl:read.filter(x=>/^https:\/\//.test(x.url||'')).length,
   assignedMinutes,assignedHours:Math.round(assignedMinutes/60*10)/10,
   longLessonsWithShortBody:longShort.length,exactRepeatedQuestionPrompts:repeated.length,
   examplesOfShortLongLessons:longShort.slice(0,4).map(x=>({id:x.id,title:x.title})),
   examplesOfRepeatedPrompts:repeated.slice(0,3),
   issues
  });
 }
 const totals={};
 for(const lv of [1,2,3,4,5]){
  const subset=courses.filter(x=>x.level===lv);
  totals['level'+lv]={courses:subset.length,lessons:sum(subset.map(x=>x.lessons||0)),
   assessedQuestions:sum(subset.map(x=>x.gradedQuestions||0)),numericQuestions:sum(subset.map(x=>x.numericQuestions||0)),
   assignedHours:Math.round(sum(subset.map(x=>x.assignedMinutes||0))/60*10)/10,
   sourceReadings:sum(subset.map(x=>x.sourceReadings||0)),
   issues:sum(subset.map(x=>x.issues.length)),
   missingCourses:subset.filter(c=>c.missing).length,
   longLessonsWithShortBody:sum(subset.map(x=>x.longLessonsWithShortBody||0)),
   repeatedPrompts:sum(subset.map(x=>x.exactRepeatedQuestionPrompts||0))};
 }
 return {snapshotDate:'2026-11-09',scope:'All 26 authored courses; content scripts in production order; no real learner data',
  scriptsExecuted:scripts.length,sourceFailures:failures,courses,totals,
  notes:[
   'This is static authored-content inspection, not independent subject-matter verification.',
   'Assigned hours are planned metadata durations, not measured study time or earned credit.',
   'An exact repeated prompt is a review flag; it does not automatically prove question invalidity.',
   'Source URLs are counted, not individually checked for reachability, licensing or correctness.',
   'Written assessment quality and attainment require independently marked original student submissions.',
   'Course inclusion and automated test passage do not establish accreditation or MBA equivalency.'
  ]};
}
if(require.main===module){
 const result=analyze();
 if(process.argv.includes('--json'))process.stdout.write(JSON.stringify(result,null,2)+'\n');
 else{
  const lines=['# Full five-level curriculum audit — internal snapshot','','**Scope:** 26 courses, five levels; metadata and authored assessment integrity only. Not a degree or accreditation finding.','',
  '| Level | Courses | Lessons | Objective questions | Numeric questions | Assigned hours* | Integrity flags | Short-body long lessons | Repeated prompts |',
  '|---|---:|---:|---:|---:|---:|---:|---:|---:|'];
  for(let lv=1;lv<=5;lv++){const d=result.totals['level'+lv];lines.push('| '+lv+' | '+d.courses+' | '+d.lessons+' | '+d.assessedQuestions+' | '+d.numericQuestions+' | '+d.assignedHours+' | '+d.issues+' | '+d.longLessonsWithShortBody+' | '+d.repeatedPrompts+' |');}
  lines.push('','*Assigned study time: sum of authored metadata minutes, not observed study, credit or independently reviewed teaching duration.*','','## Open issue register','');
  if(result.sourceFailures.length)for(const x of result.sourceFailures)lines.push('- **Source load failure:** '+x.file+' — '+x.message);
  for(const c of result.courses)for(const issue of c.issues)lines.push('- **'+c.id+' / '+issue.severity+' / '+issue.type+'** '+(issue.id||''));
  lines.push('','## Academic judgment required','');
  for(const note of result.notes)lines.push('- '+note);
  process.stdout.write(lines.join('\n')+'\n');
 }
}
module.exports={analyze};
