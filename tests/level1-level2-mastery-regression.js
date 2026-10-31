/* Run: node tests/level1-level2-mastery-regression.js
   Grading and local milestone requirements are self-assessed; this is not accreditation. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const env={window:{},module:{exports:{}},console};vm.createContext(env);
vm.runInContext(fs.readFileSync('learning/core.js','utf8'),env,{filename:'learning/core.js'});
const L=env.window.BALearning;
const make=id=>({id,modules:[{lessons:[{id:id+'-a'},{id:id+'-b'}]}],
 practice:{questions:[{id:id+'-p1',correct:0},{id:id+'-p2',correct:1}]},
 exam:{questions:[{id:id+'-e1',correct:0},{id:id+'-e2',correct:1}],rubric:['Methods','Interpretation']},
 portfolio:{rubric:['Evidence','Decision']},
 sectionExams:[{id:id+'-section',questions:[{id:id+'-s1',correct:0},{id:id+'-s2',correct:1}],rubric:['Calculations','Risk']}],
 portfolioSections:[{id:id+'-cap',rubric:['Analysis','Alternatives']}],
 applications:[{id:id+'-case',rubric:['Reasoning','Sources']}]});
for(const id of ['course-06','course-13']){
 const c=make(id),store=L.empty(),s=L.state(store,id);
 assert.equal(L.mastery(store,c).mastered,false,id+' starts incomplete');
 s.lessons=c.modules[0].lessons.map(l=>l.id);
 for(const kind of ['practice','exam','sectionExam-'+id+'-section']){
   s.answers[kind]={};const assessment=kind==='practice'?c.practice:kind==='exam'?c.exam:c.sectionExams[0];
   for(const q of assessment.questions)s.answers[kind][q.id]=q.correct;
   const attempt=L.grade(store,c,kind);assert.equal(attempt.score,100);
 }
 for(const key of ['exam','portfolio','sectionExam-'+id+'-section','portfolioSection-'+id+'-cap','application-'+id+'-case']){
   s.drafts[key]='An independently authored analysis';s.reviews[key]={0:3,1:4};
 }
 assert.equal(L.mastery(store,c).mastered,true,id+' passes with scores and review evidence');
 s.reviews['portfolioSection-'+id+'-cap'][1]=2;
 assert.equal(L.mastery(store,c).mastered,false,id+' must reject partial portfolio review');
 s.reviews['portfolioSection-'+id+'-cap'][1]=3;
 assert.equal(L.mastery(store,c).mastered,true);
 s.answers.exam[id+'-e1']=1;s.answers.exam[id+'-e2']=0;const failed=L.grade(store,c,'exam');
 assert.equal(failed.score,0);assert.equal(L.mastery(store,c).mastered,false,'Latest failed attempt must be counted');
 s.answers.exam[id+'-e1']=0;s.answers.exam[id+'-e2']=1;L.grade(store,c,'exam');
 assert.equal(L.mastery(store,c).mastered,true,'Passing retake should count');
 const before=JSON.stringify(store);const storage={getItem:key=>key===L.KEY?before:null};
 assert.equal(L.mastery(L.load(storage),c).mastered,true,'Saved proof should survive reload');
}
console.log('PASS: Level 1 and 2 objective grades, latest attempts, portfolio review gates, and persistence');
