/* Level 4 v105: real workspace navigation, persistence, restart, and retake acceptance. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const files=['core.js','level4-initial-v82.js','level4-executive-studios-v95.js','level4-advanced-seminars-v96.js','level4-executive-dilemmas-v97.js','level4-integrated-board-v98.js','level4-comprehensive-final-v99.js','level4-depth-v100.js','level4-mastery-depth-v101.js','level4-assessment-bank-v102.js','level4-primary-source-readings-v103.js','level4-short-exam-reinforcement-v104.js','workspace-v40.js'];
const disk={};
const storage={getItem:k=>disk[k]??null,setItem:(k,v)=>{disk[k]=v}};
function launch(){const handlers={};const window={BAContent:{},scrollY:0,scrollTo(){}};
 const document={addEventListener:(k,fn)=>{handlers[k]=fn},getElementById:()=>null,querySelectorAll:()=>[]};
 const ctx={window,document,localStorage:storage,htmlEscape:String,catalog:Array.from({length:26},(_,i)=>'Course '+(i+1)),coursePlans:Array.from({length:26},()=>({hours:120})),data:{},go(){},draw(){},console};
 vm.createContext(ctx);for(const name of files)vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
 return {window,handlers,click:dataset=>handlers.click({target:{closest:()=>({dataset})}}),input:(dataset,value)=>handlers.input({target:{dataset,value}}),change:(dataset,value,checked)=>handlers.change({target:{dataset,value,checked}})};
}
let app=launch();app.click({learnCourse:'course-25'});
// Regression: direct answer selection must initialize an unseen exam's answer map.
const course=app.window.BAContent['course-25'],firstLesson=course.modules[0].lessons[0].id;
app.change({learnLesson:firstLesson},'on',true);
const draft='portfolioSection-l4-final-v99-capstone',content='Executive evidence and sensitivity. '.repeat(1000);
app.input({learnDraft:draft},content);
const exam=course.sectionExams.find(x=>x.id==='l4-final-v99-exam'),kind='sectionExam-'+exam.id;
for(const q of exam.questions)app.change({learnAnswer:kind+':'+q.id},String(q.correct));
app.click({learnGrade:kind});
app.click({learnTab:'lessons'});app.click({learnTab:'portfolio'});app.click({learnTab:'exam'});
let s=app.window.BALearning.load(storage).courses['course-25'];
assert.ok(s.lessons.includes(firstLesson));assert.equal(s.drafts[draft],content);assert.equal(s.attempts.at(-1).score,100);
app=null;let reopened=launch();reopened.click({learnCourse:'course-25'});
reopened.click({learnTab:'portfolio'});
assert.ok(reopened.window.BAWorkspace.render().includes(content.slice(0,80)),'Written evidence not restored in portfolio');
reopened.click({learnTab:'exam'});
assert.ok(reopened.window.BAWorkspace.render().includes('Last submitted result: 100%'),'Exam feedback not restored');
reopened.click({learnRetry:kind});s=reopened.window.BALearning.load(storage).courses['course-25'];
assert.equal(s.feedback[kind],false);assert.equal(s.attempts.at(-1).score,100);
assert.ok(s.lessons.includes(firstLesson));assert.equal(s.drafts[draft],content);
console.log('Level 4 v105: navigation, 30k character evidence, restart, exam history and retake persisted.');
