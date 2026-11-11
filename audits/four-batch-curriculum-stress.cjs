/* Four-batch, all-five-level curricular stress audit, v1.
 * Read-only execution of actual scripts in the same order as index.html.
 * DOES NOT mark questions academically accurate, fabricate student outcomes,
 * alter grades, or claim human sign-off.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
function catalog(){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const src=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(x=>x[1].split('?')[0]);
 const scripts=src.filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const win={BAContent:{}};
 for(const file of scripts)new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(win);
 return Array.from({length:26},(_,i)=>{const n=i+1,id='course-'+String(n).padStart(2,'0');if(!win.BAContent[id])throw Error('Missing '+id);return {n,id,level:n<=6?1:n<=13?2:n<=20?3:n<=25?4:5,c:win.BAContent[id]};});
}
const norm=t=>String(t||'').toLowerCase().trim().replace(/\s+/g,' ');
const body=l=>Array.isArray(l.body)?l.body.join(' '):String(l.body||'');
const words=s=>String(s||'').trim().split(/\s+/).filter(Boolean).length;
function audit(){
 const rows=catalog();
 const all=[],levelSummary=[];
 for(const {n,id,level,c} of rows){
  const lessons=(c.modules||[]).flatMap(m=>m.lessons||[]);
  const exams=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
  const required=exams.filter(e=>!e.optional),optional=exams.filter(e=>e.optional);
  const q=exams.flatMap(e=>(e.questions||[]).map(x=>({exam:e,question:x})));
  const requiredQ=required.flatMap(e=>e.questions||[]);
  const drills=(c.numericDrills||[]).flatMap(x=>x.questions||[]);
  const casework=[...(c.applications||[]),...(c.portfolioSections||[]),...(c.portfolio?[c.portfolio]:[]),...(c.portfolioExtension?[c.portfolioExtension]:[])];
  const weakExplanations=q.filter(({question:x})=>words(x.explanation)<7).map(({question:x})=>x.id);
  const invalidNumeric=drills.filter(x=>!Number.isFinite(x.v)).map(x=>x.id);
  const sharedPrompts=new Map(),requiredRepeats=[];
  for(const e of required)for(const x of e.questions||[]){
   const key=norm(x.prompt);
   if(sharedPrompts.has(key))requiredRepeats.push({id:x.id,exam:e.id,original:sharedPrompts.get(key)});
   else sharedPrompts.set(key,x.id);
  }
  const missingLessonInfo=lessons.filter(l=>!l.title||!Array.isArray(l.body)||!l.body.length).map(l=>l.id);
  const longWithoutExample=lessons.filter(l=>l.minutes>=90&&!l.example&&!/example|worked|calculat|sensitivity|model/i.test(body(l))).map(l=>l.id);
  const caseWithoutRubric=casework.filter(x=>!Array.isArray(x.rubric)||!x.rubric.length).map(x=>x.id||x.title);
  const qWithLessonLinks=q.filter(({question:x})=>x.lessonId);
  const lessonIds=new Set(lessons.map(l=>l.id));
  const brokenQuestionLinks=qWithLessonLinks.filter(({question:x})=>!lessonIds.has(x.lessonId)).map(({question:x})=>({id:x.id,lessonId:x.lessonId}));
  const readingRecords=c.readings||[],linkable=readingRecords.filter(r=>/^https:\/\//.test(r.url||''));
  const level5Checkpoints=level===5?lessons.filter(l=>body(l).includes('EVIDENCE CHECKPOINT')).length:null;
  all.push({
   course:id,level,lessonCount:lessons.length,requiredExamCount:required.length,optionalExamCount:optional.length,
   assessedQuestionCount:q.length,requiredQuestionCount:requiredQ.length,numericQuestionCount:drills.length,
   writtenCaseCount:casework.length,sourceReadings:readingRecords.length,directReadingLinks:linkable.length,
   lessonWordMedian:lessons.length?([...lessons].map(l=>words(body(l))).sort((a,b)=>a-b))[Math.floor(lessons.length/2)]:0,
   withWorkedExamples:lessons.filter(l=>Boolean(l.example)).length,
   withTransfer:lessons.filter(l=>Boolean(l.transfer)).length,
   withTutor:lessons.filter(l=>Boolean(l.tutor)).length,
   longWithoutExample,mustInvestigateMissingLessonInfo:missingLessonInfo,
   weakExplanations,invalidNumeric,requiredRepeatedOccurrences:requiredRepeats.length,requiredRepeatedSamples:requiredRepeats.slice(0,8),
   casesWithoutRubric:caseWithoutRubric,brokenQuestionLinks,
   level5EvidenceCheckpoints:level5Checkpoints,
   manualReview:{
    mathematics:'INDEPENDENT FORMULA_RECALCULATION_ONLY_FOR_SELECTED_BANKS',
    examDifficulty:'REQUIRES_QUALIFIED_EXAMINER',
    teachingDepth:'REQUIRES_QUALIFIED_EXAMINER',
    caseFacts:'REQUIRES_DOCUMENT_LEVEL_VERIFICATION',
    actualLearning:'REQUIRES_REAL_STUDENT_WORK'
   }
  });
 }
 for(let lv=1;lv<=5;lv++){
  const x=all.filter(v=>v.level===lv);
  levelSummary.push({level:lv,courses:x.length,lessons:x.reduce((a,b)=>a+b.lessonCount,0),
   assessedQuestions:x.reduce((a,b)=>a+b.assessedQuestionCount,0),
   numericQuestions:x.reduce((a,b)=>a+b.numericQuestionCount,0),
   writtenCases:x.reduce((a,b)=>a+b.writtenCaseCount,0),
   directReadingLinks:x.reduce((a,b)=>a+b.directReadingLinks,0),
   withTransfer:x.reduce((a,b)=>a+b.withTransfer,0),
   withWorkedExamples:x.reduce((a,b)=>a+b.withWorkedExamples,0),
   medianCourseLessonWords:x.map(v=>v.lessonWordMedian),
   requiredRepeatedOccurrences:x.reduce((a,b)=>a+b.requiredRepeatedOccurrences,0),
   longLessonsWithoutExplicitExample:x.reduce((a,b)=>a+b.longWithoutExample.length,0),
   shortExplanations:x.reduce((a,b)=>a+b.weakExplanations.length,0)});
 }
 const totals={courses:all.length,lessons:levelSummary.reduce((a,b)=>a+b.lessons,0),
  assessedQuestions:levelSummary.reduce((a,b)=>a+b.assessedQuestions,0),
  numericQuestions:levelSummary.reduce((a,b)=>a+b.numericQuestions,0),
  capstoneEvidenceCheckpoints:all.find(x=>x.level===5).level5EvidenceCheckpoints,
  requiredRepeatedOccurrences:levelSummary.reduce((a,b)=>a+b.requiredRepeatedOccurrences,0),
  brokenQuestionLinks:all.reduce((a,b)=>a+b.brokenQuestionLinks.length,0),
  casesWithoutRubric:all.reduce((a,b)=>a+b.casesWithoutRubric.length,0),
  invalidNumericTargets:all.reduce((a,b)=>a+b.invalidNumeric.length,0)};
 return {scope:'All five levels, four academic and simulation stress-test workstreams',mode:'READ_ONLY',totals,levels:levelSummary,courses:all,
  limitations:['No full numerical-bank mathematical proof from syntax inspection','Text length cannot establish academic level or student learning','Course case URLs are pointers, not verified primary-page citations','Actual learner performance and written marking need human data','Device and cloud testing not performed by this code']};
}
if(require.main===module){
 const a=audit();
 if(process.argv.includes('--json'))console.log(JSON.stringify(a,null,2));
 else{
  const rows=['# Four-batch comprehensive five-level curriculum stress audit','','Structural evidence and risk register only. No independent academic sign-off.','',
  '| Level | Courses | Lessons | Questions | Numeric | Cases | Transfer | Explicit examples | Source links | Repeated required occurrences | Long lessons without explicit example |',
  '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|'];
  for(const x of a.levels)rows.push('| '+x.level+' | '+x.courses+' | '+x.lessons+' | '+x.assessedQuestions+' | '+x.numericQuestions+' | '+x.writtenCases+' | '+x.withTransfer+' | '+x.withWorkedExamples+' | '+x.directReadingLinks+' | '+x.requiredRepeatedOccurrences+' | '+x.longLessonsWithoutExplicitExample+' |');
  rows.push('','## Case, numerical and pedagogy review queue','');
  for(const c of a.courses){
   const flags=[];
   if(c.weakExplanations.length)flags.push(c.weakExplanations.length+' short answer explanations');
   if(c.longWithoutExample.length)flags.push(c.longWithoutExample.length+' long lessons without explicit worked-example cue');
   if(c.requiredRepeatedOccurrences)flags.push(c.requiredRepeatedOccurrences+' required-question repeats');
   if(c.brokenQuestionLinks.length)flags.push(c.brokenQuestionLinks.length+' broken lesson pointers');
   if(c.casesWithoutRubric.length)flags.push(c.casesWithoutRubric.length+' written task rubrics missing');
   if(flags.length)rows.push('- '+c.course+': '+flags.join('; '));
  }
  rows.push('','## Expert validation limits',...a.limitations.map(s=>'- '+s));
  console.log(rows.join('\n'));
 }
}
module.exports={catalog,audit};
