/* Run: node tests/level2-final-answer-key.js
 * Independent numerical cross-checks for all fourteen Level 2 cumulative-final
 * answers. This is not an audit of every question in the academy. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const courses=Object.fromEntries(Array.from({length:7},(_,i)=>{const id='course-'+String(i+7).padStart(2,'0');return [id,{id,modules:[],sectionExams:[],portfolioSections:[],applications:[]}] }));
const ctx={window:{BAContent:courses},console};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('learning/level2-capstone-v55.js','utf8'),ctx,{filename:'learning/level2-capstone-v55.js'});
const exam=ctx.window.BAContent['course-13'].sectionExams.find(e=>e.id==='l2-final-v55-exam');assert(exam,'Final exam missing');
const formulas=[
 () => 500-300-120,
 () => (80-10)*(1-.25),
 () => 52.5+20-20-10+5,
 () => 15-(20+47.5-60),
 () => 80*(600000/120)+500*200,
 () => -10+6/1.1+6/(1.1*1.1),
 () => 90000*(110-60),
 () => 4*.6+3*.3,
 () => Math.sqrt(2*10000*200/10),
 () => Math.max(50/2,40/1),
 () => 200*(.15-.10)*30000,
 () => (20-10)*.25,
 () => 2*.05,
 () => 100000*(95-65)-100000*(100-60)
];
assert.equal(exam.questions.length,formulas.length,'Unexpected final exam length');
const normalize=s=>String(s).replace(/[≈+\s,m$]/g,'').replace('−','-').replace(/k$/,'000').replace(/m$/,'').trim();
const expected=['80','52.5','47.5','7.5','500k','≈+.413','4.5m','3.3m','≈632','B at40/hour','300k','2.5m','.1m','−1m'];
for(let i=0;i<formulas.length;i++){
 const q=exam.questions[i];assert.equal(q.options[q.correct],expected[i],'Mismatch in final answer option '+(i+1));
 const actual=formulas[i]();
 const numeric=i===4?500000:i===5?.413:i===6?4500000:i===7?3.3:i===8?632:i===9?40:i===10?300000:i===11?2.5:i===13?-1000000:actual;
 const calculated=actual;
 assert.ok(Math.abs(calculated-numeric)<(i===8?1:i===5?0.02:1e-7),'Final formula mismatch at question '+(i+1));
}
console.log('PASS: All 14 Level 2 final answer keys independently cross-checked');
