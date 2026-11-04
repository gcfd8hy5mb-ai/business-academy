/* QA v143 — Legacy Level 4 executive and comprehensive-final assessment regression.
 * Run node audits/scripts/level4-executive-final-regression-v143.cjs
 * Read-only: original exams and student records are never changed. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const base=path.resolve(__dirname,'../..'),checks=[["c21-v95-q1","14*((1-1.1**-5)/.1)-32",21.071,"About $21.07m"],["c22-v95-q1","(47-35)+(34-25)",21,"Projects A and B: $21m"],["c23-v95-q1","(.08-.03)*12000000-300000",300000,"$300,000"],["c24-v95-q1","60000*10/60*36-210000",150000,"$150,000"],["c25-v95-q1","15",15,"Initiative A alone: $15m"],["c21-v97-q","12*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4+1/1.1**5)-25",20.489,"20.49"],["c22-v97-q","10+8",18,"18"],["c23-v97-q",".06*8000000-220000",260000,"260000"],["c24-v97-q","90000*8/60*30*.5-100000",80000,"80000"],["c25-v97-q",".7*90+.3*25-50",20.5,"20.5"],["l4-final-v99-q1","120-40",80,"No: only $80m is deployable"],["l4-final-v99-q2","78+8*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4)-10-85",8.359,"About +$8.36m"],["l4-final-v99-q3","12",12,"Project A alone, $12m"],["l4-final-v99-q4","(.14-.05)*6000000-200000",340000,"$340,000"],["l4-final-v99-q5","50000*12/60*35*.6-90000",120000,"$120,000"],["l4-final-v99-q6",".65*55+.35*15-30",11,"+$11m"]],errors=[];
const window={BAContent:{}};
for(let n=21;n<=25;n++)window.BAContent['course-'+n]={id:'course-'+n,modules:[],readings:[],sectionExams:[],applications:[],portfolioSections:[],outcomes:[]};
const sources=['level4-executive-studios-v95.js','level4-advanced-seminars-v96.js','level4-executive-dilemmas-v97.js','level4-integrated-board-v98.js','level4-comprehensive-final-v99.js'];
for(const file of sources)vm.runInNewContext(fs.readFileSync(path.join(base,'learning',file),'utf8'),{window},{timeout:5000});
const questions=Object.values(window.BAContent).flatMap(c=>c.sectionExams.flatMap(e=>e.questions));
const ids=new Set();for(const q of questions){if(ids.has(q.id))errors.push('Duplicate ID '+q.id);ids.add(q.id);if(!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length)errors.push('Invalid choice '+q.id);if(!q.explanation)errors.push('Missing feedback '+q.id)}
if(questions.length!==45)errors.push('Expected 45 Level 4 questions; found '+questions.length);
for(const [id,expression,expected,choice] of checks){
 const q=questions.find(x=>x.id===id);
 if(!q){errors.push('Missing '+id);continue}
 const computed=vm.runInNewContext(expression,{Math},{timeout:1000});
 const tol=Math.max(.012,Math.abs(expected)*.00002);
 if(!Number.isFinite(computed)||Math.abs(computed-expected)>tol)errors.push('Independent model failed '+id+' '+computed+' vs '+expected);
 if(q.options[q.correct]!==choice)errors.push('Keyed option changed '+id);
}
const byCourse=Object.fromEntries(Object.entries(window.BAContent).map(([id,c])=>[id,c.sectionExams.reduce((n,e)=>n+e.questions.length,0)]));
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',questions:questions.length,independentCalculations:checks.length,levels:'4',byCourse,failures:errors},null,2));
if(errors.length)process.exitCode=1;
