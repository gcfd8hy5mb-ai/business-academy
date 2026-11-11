/* Verify every new Level 4 independent transfer question against independently
 * computed numerical or unambiguous governance expectation.
 * Never changes historic exam IDs, optional/required gates or student records.
 */
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const win={BAContent:{}};
for(let n=21;n<=25;n++)win.BAContent['course-'+n]={sectionExams:[]};
new Function('window',fs.readFileSync('learning/level4-independent-transfer-v138.js','utf8'))(win);
const annuity=(r,n)=>Array.from({length:n},(_,i)=>1/(1+r)**(i+1)).reduce((a,b)=>a+b,0);
const expected={
 21:[String(610-170+25-15),(11*annuity(.1,3)-15).toFixed(2),String(32-8),String(80-(90-35))],
 22:[(25*annuity(.1,3)-55).toFixed(2),'Recompute NPV; the joint downside can make the investment value destroying',String(84-(105-40)),'Exclude it as a sunk cost'],
 23:[String((.05*5e6-130000)/1000),String((.03*5e6-130000)/1000),((560-110)/150).toFixed(2)+'×','Independent internal audit'],
 24:[String(50000*8/60*30*.7-100000),String(50000*8/60*30*.7-120000),String(100*(1400/10000-1200/10000)),'Quality-adjusted cash results versus a credible control'],
 25:[String(110-(145-60)),String(12),String(.06*8e6-150000),'Secure permitted financing, resize or defer, or decline']
};
test('all 20 independent Level 4 answer keys reconcile to external formula/test assertions',()=>{
 let count=0;
 for(let n=21;n<=25;n++){
  const e=win.BAContent['course-'+n].sectionExams[0];
  assert.equal(e.id,'c'+n+'-v138-independent-transfer');
  assert.equal(e.optional,true);
  assert.equal(e.questions.length,4);
  for(let k=0;k<4;k++){
   const q=e.questions[k];
   assert.equal(q.options[q.correct],expected[n][k],q.id+' independently computed answer mismatch');
   assert.equal(new Set(q.options).size,q.options.length,q.id+' ambiguous duplicate options');
   assert.ok(q.explanation.length>=50,q.id+' missing explanation depth');
   count++;
  }
 }
 assert.equal(count,20);
});
test('discounted cash scenarios are mathematically robust under a joint adverse assumption',()=>{
 const original=25*annuity(.1,3)-55;
 const stress=21*annuity(.13,3)-55;
 assert.ok(original>0);
 assert.ok(stress<0);
 assert.ok(stress<original);
 assert.ok(Math.abs(original-7.171)<.01);
});
test('versioned optional assessment is idempotent and does not alter historic required exam sets',()=>{
 for(let n=21;n<=25;n++){
  const c=win.BAContent['course-'+n];
  c.sectionExams.unshift({id:'c'+n+'-legacy-required',optional:false,minutes:90,questions:[{id:'legacy-1',prompt:'Historic item unchanged',options:['a','b'],correct:0}]});
 }
 const before=JSON.stringify(Object.values(win.BAContent).map(c=>c.sectionExams[0]));
 new Function('window',fs.readFileSync('learning/level4-independent-transfer-v138.js','utf8'))(win);
 const after=JSON.stringify(Object.values(win.BAContent).map(c=>c.sectionExams[0]));
 assert.equal(after,before);
 for(let n=21;n<=25;n++)assert.equal(win.BAContent['course-'+n].sectionExams.length,2);
});
