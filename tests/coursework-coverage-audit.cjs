#!/usr/bin/env node
/* Read-only, reproducible five-level coursework coverage audit.
 * Usage: node tests/coursework-coverage-audit.cjs
 * Does not read or change student storage or production state.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const files=[...html.matchAll(/<script\s+src="(learning\/(?:level[^"?]+|five-level[^"?]+)\.js)(?:\?[^"]*)?"\s+defer><\/script>/g)].map(x=>x[1]);
const ctx={window:{BAContent:{}},console};
vm.createContext(ctx);
const failures=[];
for(const f of files){
  try {vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f,timeout:10000});}
  catch(e){failures.push({file:f,error:String(e.stack||e)});}
}
const courses=ctx.window.BAContent,rows=[];
const wordCount=v=>String(v||'').trim().split(/\s+/).filter(Boolean).length;
const safeArray=v=>Array.isArray(v)?v:[];
for(let i=1;i<=26;i++){
 const id='course-'+String(i).padStart(2,'0');
 const level=i<=6?1:i<=13?2:i<=20?3:i<=25?4:5;
 const c=courses[id];
 if(!c){rows.push({id,level,missing:true});continue;}
 const lessons=safeArray(c.modules).flatMap(m=>safeArray(m.lessons));
 const allLessonWords=lessons.reduce((n,l)=>n+wordCount(safeArray(l.body).join(' ')),0);
 const averageLessonWords=lessons.length?Math.round(allLessonWords/lessons.length):0;
 const veryBriefLessons=lessons.filter(l=>wordCount(safeArray(l.body).join(' '))<150);
 const exams=[c.practice,c.exam,c.advancedExam,...safeArray(c.sectionExams)].filter(Boolean);
 const required=exams.filter(e=>!e.optional);
 const assessmentQs=required.flatMap(e=>safeArray(e.questions));
 const ids=new Map(),duplicateIds=[],crossTypeIds=[];
 for(const [kind,items] of [['lesson',lessons],['application',safeArray(c.applications)],['portfolio',safeArray(c.portfolioSections)],['assessment',required]]){
  for(const x of items){
   if(!x?.id)continue;
   if(ids.has(x.id)){
    const first=ids.get(x.id);
    (first===kind?duplicateIds:crossTypeIds).push({id:x.id,first,second:kind});
   } else ids.set(x.id,kind);
  }
 }
 const longBrief=lessons.filter(l=>l.minutes>=90 && wordCount(safeArray(l.body).join(' '))<200);
 const emptyLessons=lessons.filter(l=>!safeArray(l.body).length || !l.example || !l.transfer);
 const invalidQuestions=assessmentQs.filter(q=>!q.id||!q.prompt||!Array.isArray(q.options)||!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length||!q.explanation);
 const seen=new Set(),repeats=[];
 for(const q of assessmentQs){
   const key=String(q.prompt||'').toLowerCase().replace(/\s+/g,' ').trim();
   if(key&&seen.has(key))repeats.push(q.id);else seen.add(key);
 }
 const minutes=lessons.reduce((n,x)=>n+(Number(x.minutes)||0),0)+safeArray(c.readings).reduce((n,x)=>n+(Number(x.minutes)||0),0)+safeArray(c.applications).reduce((n,x)=>n+(Number(x.minutes)||0),0)+safeArray(c.portfolioSections).reduce((n,x)=>n+(Number(x.minutes)||0),0)+[c.practice,c.exam,c.advancedExam,c.portfolio,c.portfolioExtension,...safeArray(c.sectionExams)].filter(x=>x&&!x.optional).reduce((n,x)=>n+(Number(x.minutes)||0),0);
 const optionalExamMinutes=exams.filter(x=>x.optional).reduce((n,x)=>n+(Number(x.minutes)||0),0);
 rows.push({id,level,missing:false,modules:safeArray(c.modules).length,lessons:lessons.length,words:allLessonWords,averageLessonWords,veryBriefLessonCount:veryBriefLessons.length,veryBriefLessonIds:veryBriefLessons.map(x=>x.id),optionalExamMinutes,assessedQuestions:assessmentQs.length,requiredExams:required.length,applications:safeArray(c.applications).length,portfolioSections:safeArray(c.portfolioSections).length,hasPortfolio:!!c.portfolio||!!c.portfolioExtension||!!safeArray(c.portfolioSections).length,assignedHours:Math.round(minutes/6)/10,longBrief:longBrief.map(x=>x.id),emptyLessons:emptyLessons.map(x=>x.id),invalidQuestions:invalidQuestions.map(x=>x.id||'<missing>'),duplicateIds,crossTypeIds,repeatedPrompts:repeats});
}
const summary={checkedOn:'Repository working tree at audit execution; not an academic certification',loadedContentFiles:files.length,loadErrors:failures,courses:rows.length,missingCourses:rows.filter(r=>r.missing).map(r=>r.id),totalLessons:rows.reduce((n,r)=>n+(r.lessons||0),0),totalTeachingWords:rows.reduce((n,r)=>n+(r.words||0),0),veryBriefLessons:rows.reduce((n,r)=>n+(r.veryBriefLessonCount||0),0),optionalExamHours:Math.round(rows.reduce((n,r)=>n+(r.optionalExamMinutes||0),0)/6)/10,totalRequiredExamQuestions:rows.reduce((n,r)=>n+(r.assessedQuestions||0),0),totalAssignedHours:Math.round(rows.reduce((n,r)=>n+(r.assignedHours||0),0)*10)/10,missingAssessments:rows.filter(r=>!r.missing&&r.requiredExams<1).map(r=>r.id),missingPortfolio:rows.filter(r=>!r.missing&&!r.hasPortfolio).map(r=>r.id),longBriefLessons:rows.reduce((n,r)=>n+(r.longBrief?.length||0),0),invalidQuestions:rows.reduce((n,r)=>n+(r.invalidQuestions?.length||0),0),duplicateIds:rows.reduce((n,r)=>n+(r.duplicateIds?.length||0),0),crossTypeIds:rows.reduce((n,r)=>n+(r.crossTypeIds?.length||0),0),repeatedPrompts:rows.reduce((n,r)=>n+(r.repeatedPrompts?.length||0),0)};
const report={summary,rows};
if(process.argv.includes('--json'))console.log(JSON.stringify(report,null,2));
else {
 console.log(JSON.stringify(summary,null,2));
 console.table(rows.map(({id,level,modules,lessons,words,requiredExams,assignedHours,longBrief,invalidQuestions})=>({id,level,modules,lessons,words,requiredExams,assignedHours,longBrief:longBrief?.length||0,invalidQuestions:invalidQuestions?.length||0})));
 console.log('For specific gaps, run with --json.');
}
if(failures.length||summary.missingCourses.length||summary.invalidQuestions||summary.duplicateIds||summary.missingAssessments.length||summary.missingPortfolio.length)process.exitCode=1;
// A clean automated audit does NOT establish textbook depth, equivalency or independent academic sign-off.
