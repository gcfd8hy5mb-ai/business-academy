/* Independent-of-UI academic structural checks for original Level 1 and Level 2 starter data.
 * Scope is intentionally narrow: the initial 8 courses, before subsequent extension scripts.
 * Passing is not certification or review of every later lesson.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
global.window={BAContent:{}};
require('../learning/level1.js');
require('../learning/level2.js');
const content=global.window.BAContent;
const ids=Array.from({length:8},(_,i)=>'course-'+String(i+1).padStart(2,'0'));
const allLessons=ids.flatMap(id=>content[id].modules.flatMap(m=>m.lessons));
const assessments=c=>[c.practice,c.exam,...(c.sectionExams||[])].filter(Boolean);

test('all 8 initial courses load with authored objectives and readings',()=>{
 assert.deepEqual(Object.keys(content).sort(),ids);
 for(const id of ids){
  const c=content[id];
  assert.ok(c.outcomes.length>=3,id+' learning objectives');
  assert.ok(c.modules.length>=3,id+' modules');
  assert.ok(c.readings.some(r=>/^https:\/\//.test(r.url)),id+' linked source material');
  assert.ok(c.portfolio&&c.portfolio.rubric.length>=3,id+' assessed portfolio');
 }
});
test('initial lessons have unique IDs and usable conceptual, example, transfer, tutoring material',()=>{
 const seen=new Set();
 for(const lesson of allLessons){
  assert.ok(lesson.id&&!seen.has(lesson.id),'unique lesson ID: '+lesson.id);
  seen.add(lesson.id);
  assert.ok(Number.isFinite(lesson.minutes)&&lesson.minutes>0,lesson.id+' assigned time');
  assert.ok(Array.isArray(lesson.body)&&lesson.body.length>=3,lesson.id+' teaching paragraphs');
  assert.ok(typeof lesson.example==='string'&&lesson.example.length>40,lesson.id+' worked example');
  assert.ok(typeof lesson.transfer==='string'&&lesson.transfer.length>30,lesson.id+' transfer task');
  assert.ok(lesson.tutor?.question,lesson.id+' tutoring prompt');
 }
});
test('base assessment banks have unambiguous option keys, explanations and distinct IDs',()=>{
 for(const id of ids){
  const c=content[id],qIds=new Set();
  for(const a of assessments(c)){
   assert.ok(a.questions.length>=5,id+' question bank');
   assert.ok(Number.isFinite(a.minutes)&&a.minutes>0,id+' exam duration');
   for(const q of a.questions){
    assert.ok(q.id&&!qIds.has(q.id),id+' duplicate question '+q.id);
    qIds.add(q.id);
    assert.ok(typeof q.prompt==='string'&&q.prompt.length>10,q.id+' prompt');
    assert.ok(Array.isArray(q.options)&&q.options.length>=3,q.id+' choices');
    assert.equal(new Set(q.options).size,q.options.length,q.id+' distinct choices');
    assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id+' answer key');
    assert.ok(typeof q.explanation==='string'&&q.explanation.length>15,q.id+' rationale');
   }
  }
 }
});
test('sample numeric teaching-answer keys independently reconcile',()=>{
 const get=(course,q)=>content[course].exam.questions[q];
 // 120 / 800 = 15%; 115 / 920 = 12.5%.
 assert.equal(get('course-01',1).options[get('course-01',1).correct],'15% to 12.5%');
 assert.equal(120/800*100,15);assert.equal(115/920*100,12.5);
 // Multiplicative rates do not reverse: 100 * 1.2 * 0.8 = 96.
 assert.equal(get('course-02',0).options[get('course-02',0).correct],'96');
 assert.equal(100*1.2*0.8,96);
 // Break-even = fixed cost / per-unit contribution.
 assert.equal(get('course-03',0).options[get('course-03',0).correct],'300,000');
 assert.equal(12000000/(100-60),300000);
 // 120 - 2P = 20 + 2P, P = 25, Q = 70.
 assert.equal(get('course-05',0).options[get('course-05',0).correct],'70');
 assert.equal(20+2*((120-20)/4),70);
 // Net leverage = (debt - eligible cash) / EBITDA.
 assert.equal(get('course-06',1).options[get('course-06',1).correct],'2.5×');
 assert.equal((480-80)/160,2.5);
 // Five-year straight-line depreciation with residual value.
 assert.equal(get('course-07',1).options[get('course-07',1).correct],'18');
 assert.equal((100-10)/5,18);
 // Standard labor cost vs actual cost; no favorable/unfavorable inversion.
 assert.equal(get('course-08',1).options[get('course-08',1).correct],'5,200 unfavorable');
 assert.equal(1600*22-500*3*20,5200);
});
