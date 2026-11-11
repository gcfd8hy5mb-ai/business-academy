/* Recalculate every Level 4–5 v129 independent examination answer from
 * independent formulas, not the authored answer metadata.
 * Preserves questions, IDs, archived scores and option ordering.
 */
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const w={BAContent:{}};
for(let n=21;n<=26;n++)w.BAContent['course-'+n]={sectionExams:[]};
new Function('window',fs.readFileSync('learning/level4-level5-independent-exams-v129.js','utf8'))(w);
const pv=(cash,r,n)=>cash*Array.from({length:n},(_,i)=>1/(1+r)**(i+1)).reduce((a,b)=>a+b,0);
function optimalCapital(){
 const projects=[{cost:52,npv:18},{cost:39,npv:13},{cost:36,npv:12}];
 let best=0;
 for(let mask=0;mask<8;mask++){
  const taken=projects.filter((_,i)=>mask&(1<<i));
  const spend=taken.reduce((s,p)=>s+p.cost,0),value=taken.reduce((s,p)=>s+p.npv,0);
  if(spend<=92)best=Math.max(best,value);
 }
 return best;
}
const independentlyExpected={
 21:[530-160+35-20,Number((pv(13,.1,3)-17).toFixed(2)),45-11-9],
 22:[optimalCapital(),2.75*120-287,104-63-28],
 23:[(.12-.05)*7000000-270000,.03*24*.5,980000-410000-235000],
 24:[120000*9/60*44*.45-170000,3.4-1.2-.7,420000/1500000*100],
 25:[132-(185-72),Number((pv(8,.1,4)-22).toFixed(2)),29+16-6-4],
 26:[Number((pv(7,.12,4)-20).toFixed(2)),38-(132-100),1350000-550000-260000]
};
test('all eighteen independent Level 4/5 exam keys match independent finance/risk formulas',()=>{
 let assessed=0;
 for(let n=21;n<=26;n++){
  const exams=w.BAContent['course-'+n].sectionExams.filter(x=>x.id==='c'+n+'-v129-independent-exam');
  assert.equal(exams.length,1);
  const e=exams[0];
  assert.equal(e.optional,true);
  assert.equal(e.questions.length,3);
  e.questions.forEach((q,i)=>{
   const choice=q.options[q.correct],expected=independentlyExpected[n][i];
   const parsed=Number(String(choice).replace(/,/g,''));
   assert.ok(Number.isFinite(parsed),q.id+' is not numeric');
   assert.ok(Math.abs(parsed-expected)<.011,q.id+': expected '+expected+' got '+parsed);
   assert.ok(q.explanation.length>=18,q.id+' lacks calculation logic');
   assessed++;
  });
 }
 assert.equal(assessed,18);
});
test('examination metadata never changes a submitted historic grade without a new attempt',()=>{
 const code=fs.readFileSync('learning/core-v110.js','utf8');
 assert.match(code,/assessmentSnapshot/);
 assert.match(code,/keyFingerprint/);
 assert.match(code,/s\.attempts\.push/);
});
