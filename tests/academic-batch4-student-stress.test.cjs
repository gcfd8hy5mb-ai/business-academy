/* Batch 4: simulated student mastery under intentionally missing, wrong,
 * retaken and complete answers across all five levels.
 * This uses synthetic isolated memory, never Firebase or user data.
 */
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {catalog}=require('../audits/four-batch-curriculum-stress.cjs');
const ctx={window:{},Date,Math,JSON};
vm.runInNewContext(fs.readFileSync('learning/core-v110.js','utf8'),ctx);
const L=ctx.window.BALearning,rows=catalog();
function review(s,key,rubric){
 const list=rubric||[];
 if(!Array.isArray(list)||!list.length)return;
 s.drafts[key]='Original simulated learner analysis of assumptions, calculations, downside and recommendations.';
 s.reviews[key]=Object.fromEntries(list.map((_,i)=>[i,4]));
}
function answerAndGrade(store,c,kind,a,wrong=false){
 if(!a?.questions?.length)return null;
 const s=L.state(store,c.id);
 s.answers[kind]=Object.fromEntries(a.questions.map(q=>[q.id,wrong?(q.correct+1)%q.options.length:q.correct]));
 return L.grade(store,c,kind);
}
function fullStudent(store,c,skipOptional=true){
 const s=L.state(store,c.id);
 s.lessons=c.modules.flatMap(m=>m.lessons||[]).map(l=>l.id);
 if(c.practice)answerAndGrade(store,c,'practice',c.practice);
 if(c.exam){answerAndGrade(store,c,'exam',c.exam);review(s,'exam',c.exam.rubric);}
 if(c.advancedExam){answerAndGrade(store,c,'advancedExam',c.advancedExam);review(s,'advancedExam',c.advancedExam.rubric);}
 if(c.portfolio)review(s,'portfolio',c.portfolio.rubric);
 if(c.portfolioExtension)review(s,'portfolioExtension',c.portfolioExtension.rubric);
 for(const a of c.applications||[])review(s,'application-'+a.id,a.rubric);
 for(const a of c.portfolioSections||[])review(s,'portfolioSection-'+a.id,a.rubric);
 for(const a of c.sectionExams||[]){
  if(skipOptional&&a.optional)continue;
  answerAndGrade(store,c,'sectionExam-'+a.id,a);
  review(s,'sectionExam-'+a.id,a.rubric);
 }
 return s;
}
test('batch 4: unstarted learner is never awarded mastery in any of the 26 courses',()=>{
 const store=L.empty();
 for(const {id,c} of rows){
  const m=L.mastery(store,c);
  assert.equal(m.mastered,false,id+' awarded unearned mastery');
  assert.equal(m.done,0);
 }
});
test('batch 4: unanswered and intentionally incorrect objective exams do not produce passing mastery',()=>{
 const store=L.empty();
 let checked=0;
 for(const {id,c} of rows){
  const s=L.state(store,id),required=[c.exam,c.advancedExam,...(c.sectionExams||[]).filter(x=>!x.optional)].filter(x=>x?.questions?.length);
  for(const a of required){
   const kind=a===c.exam?'exam':a===c.advancedExam?'advancedExam':'sectionExam-'+a.id;
   const no=L.grade(store,c,kind);
   assert.equal(no,false,id+' incomplete '+kind+' incorrectly graded');
   const scored=answerAndGrade(store,c,kind,a,true);
   assert.equal(scored.score,0,id+' wrong answers incorrectly awarded credit');
   checked++;
  }
  assert.equal(L.mastery(store,c).mastered,false,id+' unstarted student passed');
 }
 assert.ok(checked>=26);
});
test('batch 4: fully simulated original written/evidence submissions satisfy course mastery without optional exams',()=>{
 const store=L.empty();
 const fail=[];
 for(const {id,c} of rows){
  fullStudent(store,c);
  const m=L.mastery(store,c);
  if(!m.mastered)fail.push({course:id,mastery:m});
 }
 console.log('BATCH4_FULL_STUDENT='+JSON.stringify({totalCourses:rows.length,mastered:rows.length-fail.length,failures:fail}));
 assert.deepEqual(fail,[],'Mastery path broken for synthetic fully completed coursework');
});
test('batch 4: missing a completed lesson or a written review blocks previously achieved mastery',()=>{
 const store=L.empty();
 for(const {id,c} of rows){
  const s=fullStudent(store,c);
  assert.equal(L.mastery(store,c).mastered,true,id+' initial full completion');
  s.lessons.pop();
  assert.equal(L.mastery(store,c).mastered,false,id+' skipped a lesson but remained mastered');
 }
});
test('batch 4: completed submitted grades are immutable across retry and export/import roundtrip',()=>{
 const store=L.empty(),course=rows.find(x=>x.c.exam?.questions?.length)?.c;
 assert.ok(course);
 const s=L.state(store,course.id),a=course.exam;
 const original=answerAndGrade(store,course,'exam',a);
 assert.equal(original.score,100);
 s.answers.exam={};
 assert.equal(L.latest(s,'exam').score,100,'Retry silently rewrote previous score');
 const raw=JSON.stringify(store),storage={getItem:()=>raw};
 const restored=L.load(storage),latest=L.latest(L.state(restored,course.id),'exam');
 assert.equal(latest.score,100);
 assert.equal(latest.assessmentSnapshot.keyFingerprint,original.assessmentSnapshot.keyFingerprint);
 assert.deepEqual(Object.keys(latest.answers),a.questions.map(q=>q.id));
});
