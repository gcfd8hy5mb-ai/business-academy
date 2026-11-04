/* Candidate-examination validation v149: 96 questions, 27 exam units, no live activation.
 * Run: node audits/scripts/required-exam-candidates-regression-v149.cjs
 */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const draft=read('audits/data/2026-11-04-required-exam-candidates-v148.json');
const l2=read('audits/data/2026-11-04-required-level2-v58-exam-archive.json');
const l4=read('audits/data/2026-11-04-required-level4-v104-exam-archive.json');
const errors=[],assert=(valid,msg)=>{if(!valid)errors.push(msg)};
assert(draft.status==='NOT ACTIVE','Exam candidates must remain explicitly inactive');
assert(draft.courses.length===12,'Expected twelve course candidate groups');
const all=new Set(),perCourse={};let exams=0,questions=0;
for(const course of draft.courses){
 const oldCount=course.level===2?l2.exams.filter(e=>e.courseId===course.courseId).length:l4.affectedExams.filter(e=>e.courseId===course.courseId).length;
 const oldQuestions=course.level===2?l2.exams.filter(e=>e.courseId===course.courseId).reduce((n,e)=>n+e.definition.questions.length,0):l4.affectedExams.filter(e=>e.courseId===course.courseId).reduce((n,e)=>n+e.afterDefinition.questions.length,0);
 assert(course.groups.length===oldCount,'Incomplete exam-unit parity '+course.courseId);
 const q=course.groups.flatMap(e=>e.questions);
 assert(q.length>=oldQuestions,'Insufficient question parity '+course.courseId);
 for(const exam of course.groups){
  exams++;
  assert(exam.rubric?.length>=4&&exam.written?.length>60,'Missing substantial independent writing rubric '+exam.id);
  for(const item of exam.questions){
   questions++;
   assert(!all.has(item.id),'Duplicate candidate ID '+item.id);all.add(item.id);
   assert(item.prompt.length>38&&item.explanation?.length>25&&item.independentTransfer?.length>40,'Insufficient learning directions '+item.id);
   assert(item.options?.length===4&&new Set(item.options).size===4,'Non-distinct answer options '+item.id);
   assert(Number.isInteger(item.correct)&&item.correct>=0&&item.correct<4,'Invalid correct index '+item.id);
   assert(Number(item.options[item.correct])===item.correctValue,'Key/value mismatch '+item.id);
   const [a,b,c]=item.inputs;
   const modelValue=vm.runInNewContext(item.model,{a,b,c,Math},{timeout:1000});
   assert(Number.isFinite(modelValue)&&Math.abs(modelValue-item.correctValue)<.000055,'Calculated value inconsistent '+item.id);
  }
 }
 perCourse[course.courseId]={previous:oldQuestions,candidate:q.length,units:course.groups.length};
}
assert(exams===27,'Expected 27 candidate exam units');
assert(questions===96,'Expected 96 distinct candidate questions');
assert(draft.courses.filter(c=>c.level===2).length===7,'Expected seven Level 2 candidate courses');
assert(draft.courses.filter(c=>c.level===4).length===5,'Expected five Level 4 candidate courses');
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',migrationActivated:false,courseCount:draft.courses.length,examUnits:exams,questions,perCourse,errors},null,2));
if(errors.length)process.exitCode=1;
