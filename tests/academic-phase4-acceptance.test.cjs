/* Phase 4 acceptance: persistence, grading, mastery and optional exam workloads.
 * Isolated Node test; does NOT access real Firebase accounts or iPhone/desktop UI.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync('learning/core-v110.js','utf8');
const sandbox={window:{},Date,Math,JSON};
vm.runInNewContext(source,sandbox,{filename:'learning/core-v110.js'});
const L=sandbox.window.BALearning;
function memoryStorage(){
 const kv=new Map();
 return {getItem:k=>kv.has(k)?kv.get(k):null,setItem:(k,v)=>kv.set(k,String(v)),removeItem:k=>kv.delete(k),raw:kv};
}
function fixture(){
 return {id:'course-26',modules:[{id:'final-m',lessons:[{id:'final-1',minutes:100,body:['Capstone lesson']},{id:'final-2',minutes:80,body:['Executive synthesis']}]}],
 readings:[{minutes:45}],practice:{id:'p',minutes:30,questions:[{id:'p1',prompt:'Base',options:['Incorrect','Correct','Other'],correct:1}]},
 exam:{id:'e',minutes:45,questions:[{id:'e1',prompt:'Stress',options:['Yes','No','Maybe'],correct:0}],rubric:['Finance','Governance']},
 advancedExam:{id:'a',minutes:35,questions:[{id:'a1',prompt:'Board',options:['A','B','C'],correct:2}],rubric:['Cross-functional']},
 applications:[{id:'case',minutes:60,rubric:['Model']}],portfolio:{minutes:50,rubric:['Original evidence']},portfolioSections:[{id:'portfolio-s',minutes:40,rubric:['Final brief']}],
 sectionExams:[{id:'required',minutes:50,questions:[{id:'r1',prompt:'Reconcile',options:['X','Y','Z'],correct:0}],rubric:['Reasoning']},
 {id:'optional',minutes:150,optional:true,questions:[{id:'o1',prompt:'Extension',options:['X','Y','Z'],correct:0}],rubric:['Optional']}]
 };
}
test('model and public workspace retain existing schema, save key and cloud-event handshake',()=>{
 assert.equal(L.KEY,'business-academy-learning-v1');
 const workspace=fs.readFileSync('learning/workspace-v46.js','utf8');
 assert.match(workspace,/localStorage\.setItem\(L\.KEY,JSON\.stringify\(store\)\)/);
 assert.match(workspace,/ba-progress-saved/);
 assert.match(workspace,/Could not save/);
 assert.match(workspace,/data-learn-grade/);
 const html=fs.readFileSync('index.html','utf8');
 assert.match(html,/firebase-config\.js/);
 assert.match(html,/learning\/workspace-v46\.js/);
});
test('workload includes required work and excludes optional exam minutes',()=>{
 const c=fixture();
 const expected=180+45+30+45+35+60+50+40+50;
 assert.equal(L.workload(c).minutes,expected);
 c.sectionExams[1].minutes=9999;
 assert.equal(L.workload(c).minutes,expected,'Optional work cannot inflate mandatory requirements');
 assert.equal(L.workload(c).hours,Math.round(expected/60*10)/10);
});
test('incomplete exam does not grade; complete exam records an immutable-attempt snapshot',()=>{
 const c=fixture(),s=L.empty();
 assert.equal(L.grade(s,c,'exam'),false);
 assert.equal(L.state(s,c.id).attempts.length,0);
 L.state(s,c.id).answers.exam.e1=0;
 const attempt=L.grade(s,c,'exam');
 assert.equal(attempt.score,100);
 assert.equal(attempt.kind,'exam');
 assert.equal(attempt.assessmentSnapshot.questionCount,1);
 assert.equal(attempt.assessmentSnapshot.questionIds[0],'e1');
 assert.match(attempt.assessmentSnapshot.keyFingerprint,/^fnv1a32-/);
 assert.notEqual(attempt.answers,L.state(s,c.id).answers.exam);
 L.state(s,c.id).answers.exam.e1=1;
 assert.equal(attempt.score,100,'A prior result must not mutate after a selection change');
 assert.equal(L.latest(L.state(s,c.id),'exam').score,100);
});
test('saved course progress survives storage round-trip and section exam retrieval',()=>{
 const c=fixture(),storage=memoryStorage(),original=L.load(storage);
 const s=L.state(original,c.id);
 s.lessons=['final-1'];
 s.answers['sectionExam-required']={r1:0};
 const recorded=L.grade(original,c,'sectionExam-required');
 assert.equal(recorded.score,100);
 storage.setItem(L.KEY,JSON.stringify(original));
 const restored=L.load(storage);
 assert.equal(L.state(restored,c.id).lessons[0],'final-1');
 assert.equal(L.latest(L.state(restored,c.id),'sectionExam-required').score,100);
 assert.equal(L.state(restored,c.id).attempts.length,1);
 assert.equal(L.load({getItem:()=>'{bad-json'}).schema,1);
});
test('mandatory mastery requires written submissions, rubrics and lessons; optional exams do not gate it',()=>{
 const c=fixture(),store=L.empty(),s=L.state(store,c.id);
 const grade=(key,qId,answer)=>{s.answers[key]={[qId]:answer};assert.ok(L.grade(store,c,key));};
 grade('practice','p1',1);grade('exam','e1',0);grade('advancedExam','a1',2);grade('sectionExam-required','r1',0);
 assert.equal(L.mastery(store,c).mastered,false);
 s.lessons=['final-1','final-2'];
 for(const [key,count] of [['portfolio',1],['exam',2],['advancedExam',1],['application-case',1],['portfolioSection-portfolio-s',1],['sectionExam-required',1]]){
  s.drafts[key]='Independent substantive model, analysis and proposed board decision.';
  s.reviews[key]=Array.from({length:count},()=>4);
 }
 assert.equal(L.mastery(store,c).mastered,true,'Optional exam has not been submitted');
 assert.equal(L.mastery(store,c).sections,true);
 const previous=L.latest(s,'exam');
 assert.equal(previous.score,100);
 s.lessons.pop();
 assert.equal(L.mastery(store,c).mastered,false,'A missing required lesson blocks completion');
 s.lessons.push('final-2');
 s.reviews.exam[0]=2;
 assert.equal(L.mastery(store,c).mastered,false,'Incomplete written self-review blocks completion');
});
test('workspace describes assigned hours honestly and preserves progress navigation UI',()=>{
 const text=fs.readFileSync('learning/workspace-v46.js','utf8');
 assert.match(text,/assigned hours across lessons, readings, required assessments/);
 assert.match(text,/optional exams excluded/);
 assert.match(text,/Original course target/);
 assert.doesNotMatch(text,/This does not fulfill the original/);
 assert.match(text,/data-learn-focus/);
 assert.match(text,/desktopLessonLayout/);
});
