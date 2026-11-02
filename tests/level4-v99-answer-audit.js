const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{'course-25':{modules:[],sectionExams:[],portfolioSections:[]}}}};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('learning/level4-comprehensive-final-v99.js','utf8'),ctx);
const c=ctx.window.BAContent['course-25'],q=c.sectionExams.find(x=>x.id==='l4-final-v99-exam').questions;
assert.equal(q.length,10);assert.equal(new Set(q.map(x=>x.id)).size,10);
for(const x of q){assert.equal(x.options.length,4);assert.ok(x.explanation.length>35);}
const expected=['No: only $80m is deployable','About +$8.36m','Project A alone, $12m','$340,000','$120,000','+$11m'];
expected.forEach((v,i)=>assert.equal(q[i].options[q[i].correct],v));
assert.equal(120-40,80);
assert.ok(Math.abs(78+8*(1-1.1**-4)/.1-10-85-8.36)<.02);
assert.equal((.14-.05)*6000000-200000,340000);
assert.equal(50000*12/60*35*.6-90000,120000);
assert.equal(.65*55+.35*15-30,11);
assert.ok(c.portfolioSections.some(x=>x.id==='l4-final-v99-capstone'));
console.log('Level 4 final: ten answer keys, five numerical results and capstone verified.');
