/* Academic QA v142: Level 1 integrated final (v39), 12 independently evaluated answer choices.
 * Run: node audits/scripts/level1-final-regression-v142.cjs
 * Does not alter learner grades, state or assessment definitions. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../..');
const checks=[["54-450*.10","$9M"],["70/1.1+70/1.1**2-120","$1.49M"],["600-600*.55-180","$90M"],["540-540*.55-180","$63M"],["95+20-25+10","$100M"],["100-65","$35M"],["250*.015","$3.75M"],["(65-40)*(1.02-1.12)","−$2.5M"],["20/.25-20","$60M"],["52+68-47","73 days"],["18+10","A+C"],[".6*50+.4*(-30)","$18M"]];
const w={BAContent:{'course-06':{modules:[],sectionExams:[],readings:[],applications:[],portfolioSections:[]}}};
vm.runInNewContext(fs.readFileSync(path.join(root,'learning/level1-final-v39.js'),'utf8'),{window:w},{timeout:5000});
const q=w.BAContent['course-06'].sectionExams.find(e=>e.id==='l1-final-v39')?.questions||[];
const failures=[];
if(q.length!==checks.length)failures.push('Expected twelve questions; found '+q.length);
const allNumeric=checks.map(([expression])=>vm.runInNewContext(expression,{Math},{timeout:1000}));
for(let i=0;i<q.length;i++){const item=q[i],expected=checks[i];if(!expected)continue;
 if(item.options[item.correct]!==expected[1])failures.push('Answer mismatch '+item.id+': '+item.options[item.correct]);
 if(!Number.isInteger(item.correct)||item.correct<0||item.correct>=item.options.length||!item.explanation)failures.push('Invalid answer metadata '+item.id);
 if(!Number.isFinite(allNumeric[i]))failures.push('Invalid independent computation '+item.id);
}
if(Math.abs(allNumeric[1]-1.4876033)>.02)failures.push('NPV arithmetic mismatch');
if(Math.abs(allNumeric[7]-(-2.5))>.0001)failures.push('FX impact mismatch');
if(Math.abs(allNumeric[10]-28)>.0001)failures.push('Capital allocation NPV mismatch');
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',level1FinalQuestions:q.length,numericalCalculations:allNumeric.length,failures},null,2));
if(failures.length)process.exitCode=1;
