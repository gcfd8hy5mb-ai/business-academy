/* Closing internal audit findings 1–3 without altering historic scores or exam IDs.
 * Ensures workload presentation is reconciled (not falsely 'credit verified'),
 * six long-form Level 1 seminars have substantive teaching, and five Level 4
 * independent optional assessments provide nonrepeated fresh problems.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {analyze}=require('../audits/build-full-curriculum-audit.cjs');
const a=analyze();
test('original workload targets and present assigned hours are both transparently displayed',()=>{
 const app=fs.readFileSync('app-v28.js','utf8');
 assert.match(app,/Current assigned workload and original course targets/);
 assert.match(app,/Current assigned workload:/);
 assert.match(app,/Original target:/);
 assert.match(app,/BAWorkloadAudit\.detail/);
 assert.match(app,/not measured study hours/);
 const targets=[365,590,690,480,180];
 assert.deepEqual([1,2,3,4,5].map(n=>a.totals['level'+n].plannedHours),targets);
 for(const n of [1,2,3,4,5]){
  const c=a.totals['level'+n];
  assert.ok(Number.isFinite(c.assignedHours)&&Number.isFinite(c.assignedMinusPlannedHours));
  assert.ok(Math.abs(c.assignedMinusPlannedHours-(c.assignedHours-c.plannedHours))<=.11);
 }
});
test('six Level 1 seminar lessons now have sufficient explanatory body for the allocated duration',()=>{
 for(let n=1;n<=6;n++){
  const course=a.courses[n-1];
  assert.equal(course.longLessonsWithShortBody,0,course.id+' long lesson insufficient');
  assert.ok(course.lessons>=10,'Earlier lesson sequence still intact');
 }
});
test('the new Level 4 independent exam bank has 20 distinct original questions',()=>{
 const html=fs.readFileSync('index.html','utf8');
 assert.ok(html.includes('level4-independent-transfer-v138.js'));
 const win={BAContent:{}};
 for(let n=21;n<=25;n++)win.BAContent['course-'+n]={id:'course-'+n,sectionExams:[]};
 new Function('window',fs.readFileSync('learning/level4-independent-transfer-v138.js','utf8'))(win);
 const ids=new Set(),prompts=new Set();
 for(let n=21;n<=25;n++){
  const e=win.BAContent['course-'+n].sectionExams[0];
  assert.equal(e.id,'c'+n+'-v138-independent-transfer');
  assert.equal(e.optional,true);
  assert.equal(e.minutes,0);
  assert.equal(e.questions.length,4);
  assert.ok(e.written.includes('joint two-variable stress'));
  for(const q of e.questions){
   assert.ok(!ids.has(q.id),'duplicate independent question ID '+q.id);ids.add(q.id);
   const p=q.prompt.trim().toLowerCase().replace(/\s+/g,' ');
   assert.ok(!prompts.has(p),'repeated independent prompt '+q.id);prompts.add(p);
   assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length);
   assert.ok(q.explanation.length>=60);
  }
 }
 assert.equal(ids.size,20);
 assert.equal(prompts.size,20);
});
test('independent Level 4 financial answers reconcile and case questions remain optional',()=>{
 const ctx={BAContent:{}};
 for(let n=21;n<=25;n++)ctx.BAContent['course-'+n]={sectionExams:[]};
 new Function('window',fs.readFileSync('learning/level4-independent-transfer-v138.js','utf8'))(ctx);
 const answer=(course,i)=>{const q=ctx.BAContent['course-'+course].sectionExams[0].questions[i];return q.options[q.correct]};
 assert.equal(answer(21,0),'450');
 assert.equal(answer(21,1),(11*(1/1.1+1/1.1**2+1/1.1**3)-15).toFixed(2));
 assert.equal(answer(21,2),'24');
 assert.equal(answer(22,0),(25*(1/1.1+1/1.1**2+1/1.1**3)-55).toFixed(2));
 assert.equal(answer(22,2),'19');
 assert.equal(answer(23,0),'120');
 assert.equal(answer(23,1),'20');
 assert.equal(answer(23,2),'3.00×');
 assert.equal(answer(24,0),'40000');
 assert.equal(answer(24,1),'20000');
 assert.equal(answer(24,2),'2');
 assert.equal(answer(25,0),'25');
 assert.equal(answer(25,1),'12');
 assert.equal(answer(25,2),'330000');
});
test('legacy Level 4 repetitions remain documented until academic review approves retirement',()=>{
 const flags=a.courses.filter(c=>c.level===4&&c.exactRepeatedQuestionPrompts>0);
 assert.ok(flags.length>0,'Do not silently erase or falsely claim historical assessments were rewritten');
 assert.ok(flags.every(x=>x.exactRepeatedQuestionPrompts<=3),'Excess repeated prompts beyond archived case bank');
 assert.equal(a.sourceFailures.length,0);
});
