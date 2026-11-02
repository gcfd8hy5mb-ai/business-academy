/* v94: never tell students an assessment was saved when browser storage rejected it. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const files=['core.js','level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js','level3-integrated-final-v87.js','level3-completion-seminars-v90.js','workspace-v40.js'];
const handlers={};const win={BAContent:{},scrollY:0,scrollTo(){}};
const storage={getItem:()=>null,setItem:()=>{throw new Error('QuotaExceededError')}};
const ctx={window:win,localStorage:storage,document:{addEventListener:(k,f)=>handlers[k]=f,getElementById:()=>null,querySelectorAll:()=>[]},htmlEscape:String,catalog:Array.from({length:26},(_,i)=>'Course '+i),coursePlans:Array.from({length:26},()=>({hours:120})),data:{},go(){},draw(){},console};vm.createContext(ctx);
for(const name of files)vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
const click=dataset=>handlers.click({target:{closest:()=>({dataset})}}),change=(dataset,value)=>handlers.change({target:{dataset,value}});
click({learnCourse:'course-20'});
const course=win.BAContent['course-20'],exam=course.sectionExams.find(x=>x.id==='l3-v87-integrated-exam'),kind='sectionExam-'+exam.id;
for(const q of exam.questions)change({learnAnswer:kind+':'+q.id},String(q.correct));
click({learnGrade:kind});
const html=win.BAWorkspace.render();
assert.ok(html.includes('NOT saved to this device'),'Submission must show persistence failure');
assert.ok(html.includes('Could not save'),'Preservation warning must remain visible');
assert.ok(!html.includes('Submitted result: 100%. Saved.'),'Never claim saved on failed write');
console.log('Level 3 v94: browser storage failure is accurately disclosed after grading.');
