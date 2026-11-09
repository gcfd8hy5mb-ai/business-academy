/* Advanced Level 3–5 learning outcomes and independent financial answer-key checks. */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const win={BAContent:{}};
for(let i=14;i<=26;i++){
 const id='course-'+String(i).padStart(2,'0');
 win.BAContent[id]={id,modules:[],applications:[],portfolioSections:[],sectionExams:[],numericDrills:[]};
}
for(const filename of ['learning/level3-advanced-v73.js','learning/level4-level5-independent-exams-v129.js']){
 new Function('window',fs.readFileSync(filename,'utf8'))(win);
}
test('six advanced Level 3 subject areas declare measurable course outcomes',()=>{
 const names=['Competitive','economics','analytic','venture','international','technology'];
 for(let i=15;i<=20;i++){
  const c=win.BAContent['course-'+i];
  assert.ok(Array.isArray(c.outcomes)&&c.outcomes.length>=3,'course-'+i+' lacks new outcomes');
  assert.ok(c.outcomes.every(x=>x.length>=65),'course-'+i+' outcome too vague');
  const all=c.outcomes.join(' ').toLowerCase();
  assert.ok(all.includes(names[i-15].toLowerCase()),'course-'+i+' subject mismatch');
 }
});
test('Level 4–5 independent exams preserve stable IDs and valid answer keys',()=>{
 for(let n=21;n<=26;n++){
  const c=win.BAContent['course-'+n],e=c.sectionExams.find(x=>x.id==='c'+n+'-v129-independent-exam');
  assert.ok(e,'course-'+n+' independent exam missing');
  assert.equal(e.optional,true);
  assert.equal(e.questions.length,3);
  for(const q of e.questions){
   assert.ok(q.id&&q.prompt&&q.explanation,'Question incomplete');
   assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id+' invalid answer');
  }
 }
});
test('three discounted investment questions honor their two-decimal answer instructions',()=>{
 const cases=[
  {course:21,number:1,result:13*(1/1.1+1/1.1**2+1/1.1**3)-17},
  {course:25,number:1,result:8*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4)-22},
  {course:26,number:0,result:7*(1/1.12+1/1.12**2+1/1.12**3+1/1.12**4)-20}
 ];
 for(const x of cases){
  const q=win.BAContent['course-'+x.course].sectionExams.find(e=>e.id.endsWith('v129-independent-exam')).questions[x.number];
  assert.match(q.prompt,/round(ed)? to (2|two) decimals?/i,q.id+' wording changed');
  assert.equal(q.options[q.correct],x.result.toFixed(2),q.id+' rounded answer');
  assert.ok(q.options.every(x=>/^-?\d+\.\d{2}$/.test(x)),q.id+' options not consistently rounded');
 }
});
test('new Level 3 learning outcome definitions are safe on repeated source load',()=>{
 const c=win.BAContent['course-15'],original=c.outcomes;
 new Function('window',fs.readFileSync('learning/level3-advanced-v73.js','utf8'))(win);
 assert.deepEqual(c.outcomes,original,'Outcome statements overwritten on repeated execution');
});
