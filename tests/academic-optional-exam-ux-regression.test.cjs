/* Safeguard explicit distinction between legacy required and new optional exams.
 * Historical stored grades and mandatory graduation prerequisites are unchanged.
 */
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ui=fs.readFileSync('learning/workspace-v46.js','utf8');
const src=fs.readFileSync('learning/level4-independent-transfer-v138.js','utf8');
const context={window:{},Date,Math,JSON};
vm.runInNewContext(fs.readFileSync('learning/core-v110.js','utf8'),context);
const L=context.window.BALearning;
test('five independent Level 4 assessments show realistic practice time without extending assigned hours',()=>{
 const content={BAContent:{}};
 for(let n=21;n<=25;n++)content.BAContent['course-'+n]={sectionExams:[]};
 new Function('window',src)(content);
 for(let n=21;n<=25;n++){
  const e=content.BAContent['course-'+n].sectionExams[0];
  assert.equal(e.optional,true);
  assert.equal(e.minutes,0);
  assert.equal(e.suggestedMinutes,90);
  assert.equal(e.questions.length,4);
 }
});
test('workspace explicitly labels optional exams as not needed for course mastery',()=>{
 assert.match(ui,/optional independent exams do not gate mastery/);
 assert.match(ui,/Optional independent practice/);
 assert.match(ui,/minutes optional practice/);
 assert.match(ui,/Required examination/);
 assert.match(ui,/a\.suggestedMinutes/);
 assert.doesNotMatch(ui,/New section examinations: /);
});
test('old required exams remain mandatory but optional exams do not create new graduation requirements',()=>{
 const course={id:'course-21',modules:[{lessons:[{id:'l-1',minutes:1}]}],readings:[],
  exam:{questions:[{id:'base1',correct:0,options:['yes','no']}],rubric:['Analysis'],minutes:1},
  portfolio:{rubric:['Case'],minutes:1},
  sectionExams:[
   {id:'archived-required',minutes:30,questions:[{id:'q1',options:['A','B'],correct:0}],rubric:['Decision']},
   {id:'c21-v138-independent-transfer',optional:true,minutes:0,suggestedMinutes:90,questions:[{id:'new1',options:['A','B'],correct:0}],rubric:['Independent']}
  ]};
 const s=L.empty(),st=L.state(s,course.id);
 st.lessons=['l-1'];st.drafts.exam='Reasoned solution';st.reviews.exam={0:4};st.drafts.portfolio='Case study';st.reviews.portfolio={0:4};
 st.drafts['sectionExam-archived-required']='Analytical memo';st.reviews['sectionExam-archived-required']={0:4};
 st.answers.exam={base1:0};st.answers['sectionExam-archived-required']={q1:0};
 assert.ok(L.grade(s,course,'exam'));assert.ok(L.grade(s,course,'sectionExam-archived-required'));
 assert.equal(L.mastery(s,course).mastered,true,'Never force an opt-in optional exam');
 assert.equal(L.workload(course).minutes,33,'Optional suggested time must not inflate assigned hours');
 assert.equal(st.attempts.length,2);
});
