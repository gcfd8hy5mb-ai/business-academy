/* Run node tests/level1-final-answer-key.js.
 * Recompute each answer in the Level 1 cumulative final independently. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx={window:{BAContent:{'course-06':{modules:[],sectionExams:[],portfolioSections:[]}}},console};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('learning/level1-final-v39.js','utf8'),ctx,{filename:'learning/level1-final-v39.js'});
const exam=ctx.window.BAContent['course-06'].sectionExams.find(x=>x.id==='l1-final-v39');
assert(exam,'Level 1 comprehensive exam missing');
const cases=[
 [54-450*.10,'$9M',.001],
 [-120+70/1.1+70/(1.1**2),'$1.49M',.02],
 [600-600*.55-180,'$90M',.001],
 [540-540*.55-180,'$63M',.001],
 [95+20-25+10,'$100M',.001],
 [100-65,'$35M',.001],
 [250*.015,'$3.75M',.001],
 [(65-40)*(1.02-1.12),'−$2.5M',.001],
 [20/.25-20,'$60M',.001],
 [52+68-47,'73 days',.001],
 [18+10,'A+C',.001],
 [.6*50+.4*(-30),'$18M',.001]
];
assert.equal(exam.questions.length,cases.length,'Unexpected Level 1 final question count');
for(let i=0;i<cases.length;i++){
 const [numeric,option,tolerance]=cases[i],q=exam.questions[i];
 assert.equal(q.options[q.correct],option,'Level 1 final keyed option '+(i+1));
 const target=[9,1.49,90,63,100,35,3.75,-2.5,60,73,28,18][i];
 assert.ok(Math.abs(numeric-target)<=tolerance,'Level 1 final calculated answer '+(i+1));
}
assert.ok(18+10>16+10,'Capital rationing should favor A+C over B+C');
console.log('PASS: 12 independent Level 1 cumulative final answer calculations and keys');
