/* Academic QA v139 — independent answer regression on 12 v79 advanced-final and 7 v87 board-final questions.
 * Run: node audits/scripts/level3-final-math-regression-v139.cjs
 * No learner progress or grading rules are modified. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../..'),failures=[];
const check=(ok,label)=>{if(!ok)failures.push(label)};
const course20={id:'course-20',modules:[],sectionExams:[{id:'l3-final-v77-exam',questions:[],minutes:120}],portfolioSections:[],applications:[],readings:[]};
const window={BAContent:{'course-20':course20}};
const read=name=>fs.readFileSync(path.join(root,'learning',name),'utf8');
vm.runInNewContext(read('level3-final-depth-v79.js'),{window},{timeout:5000});
vm.runInNewContext(read('level3-integrated-final-v87.js'),{window},{timeout:5000});
const advanced=course20.sectionExams.find(e=>e.id==='l3-final-v77-exam').questions;
const board=course20.sectionExams.find(e=>e.id==='l3-v87-integrated-exam').questions;
check(advanced.length===12,'Expected 12 advanced final questions');
check(board.length===7,'Expected 7 second final questions');
for(const q of [...advanced,...board])check(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,'Invalid exam answer index '+q.id);
const independentAdvanced=[
 [()=>150-135+3-9,'$9m'],
 [()=>86000*31-80000*35,'−$134,000'],
 [()=>(120-40)/4,'20 units'],
 [()=>(150/1000-120/1000)*100,'3 percentage points'],
 [()=>Math.max(4,.3*10),'$4m'],
 [()=>8*1.14,'$9.12m'],
 [()=>60000*.02,'1,200'],
 [()=>60*.75+12-20-7,'$30m'],
 [()=>8-5,'$3m'],
 [()=>60/(60+240)*100,'20%'],
 [()=>34-(22+5+10),'Buy, saves $3'],
 [()=>1,'Risk-adjusted cash-flow case, validated evidence, control owners and stop triggers']
];
const expectedAdv=[9,-134000,20,3,4,9.12,1200,30,3,20,-3,1];
independentAdvanced.forEach(([calc,option],i)=>{
 const q=advanced[i];if(!q)return;const actual=calc();
 check(Math.abs(actual-expectedAdv[i])<.00001,'Independent advanced final arithmetic inconsistent at index '+i);
 check(q.options[q.correct]===option,'Legacy advanced final answer differs from reconstructed model: '+q.id)
});
const valueForBoard=[
 [()=>40*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4)-115,'About +$11.79m',11.7946],
 [()=>100000*32-300000-80000*40,'Decreases $300,000',-300000],
 [()=>{let mx=0;for(let a=0;a<=6;a++)for(let b=0;b<=10;b++)if(3*a+2*b<=30)mx=Math.max(mx,a*90+b*55);return mx},'$870',870],
 [()=>(160/1000-130/1000)*100,'3 percentage points',3],
 [()=>5/(5+5+2)*100,'About 41.67%',41.6666667],
 [()=>(9-5)*1.12,'$4.48m',4.48],
 [()=>50000*8-(180000+50000*.1*12+90000),'$70,000',70000]
];
valueForBoard.forEach(([calc,option,expected],i)=>{
 const q=board[i];if(!q)return;
 check(Math.abs(calc()-expected)<.02,'Independent board-final calculation fails '+i);
 check(q.options[q.correct]===option,'Board-final answer choice mismatch '+q.id)
});
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',advancedQuestions:advanced.length,integratedBoardQuestions:board.length,recomputedNumericAnswers:18,invalidCorrectIndices:[...advanced,...board].filter(q=>q.correct<0||q.correct>=q.options.length).length,failures},null,2));
if(failures.length)process.exitCode=1;
