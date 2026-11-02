/* v106: never tell students an assessment was saved when browser storage rejected it. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const files=['core.js','level4-initial-v82.js','level4-executive-studios-v95.js','level4-advanced-seminars-v96.js','level4-executive-dilemmas-v97.js','level4-integrated-board-v98.js','level4-comprehensive-final-v99.js','level4-depth-v100.js','level4-mastery-depth-v101.js','level4-assessment-bank-v102.js','level4-primary-source-readings-v103.js','level4-short-exam-reinforcement-v104.js','workspace-v40.js'];
const handlers={};const win={BAContent:{},scrollY:0,scrollTo(){}};
const storage={getItem:()=>null,setItem:()=>{throw new Error('QuotaExceededError')}};
const ctx={window:win,localStorage:storage,document:{addEventListener:(k,f)=>handlers[k]=f,getElementById:()=>null,querySelectorAll:()=>[]},htmlEscape:String,catalog:Array.from({length:26},(_,i)=>'Course '+i),coursePlans:Array.from({length:26},()=>({hours:120})),data:{},go(){},draw(){},console};vm.createContext(ctx);
for(const name of files)vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
const click=dataset=>handlers.click({target:{closest:()=>({dataset})}}),change=(dataset,value)=>handlers.change({target:{dataset,value}});
click({learnCourse:'course-25'});
const course=win.BAContent['course-25'],exam=course.sectionExams.find(x=>x.id==='l4-final-v99-exam'),kind='sectionExam-'+exam.id;
for(const q of exam.questions)change({learnAnswer:kind+':'+q.id},String(q.correct));
click({learnGrade:kind});
const html=win.BAWorkspace.render();
assert.ok(html.includes('NOT saved to this device'),'Submission must show persistence failure');
assert.ok(html.includes('Could not save'),'Preservation warning must remain visible');
assert.ok(!html.includes('Submitted result: 100%. Saved.'),'Never claim saved on failed write');
console.log('Level 4 v106: browser storage failure is accurately disclosed after grading.');
