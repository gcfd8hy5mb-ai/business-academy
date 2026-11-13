'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const text=fs.readFileSync(require('node:path').join(__dirname,'../learning/level4-alternative-exams-v140.js'),'utf8');
function load(){
 const BAContent={};for(let i=21;i<=25;i++){BAContent['course-'+i]={sectionExams:[{id:'c'+i+'-v104-legacy',questions:[{id:'historic-'+i,prompt:'Legacy unchanged',options:['A','B'],correct:0}]}]};}
 const ctx={window:{BAContent}};vm.createContext(ctx);vm.runInContext(text,ctx,{timeout:10000});return ctx;
}
test('five optional alternative exam forms have 35 distinct non-legacy questions',()=>{
 const ctx=load(),ids=new Set(),prompts=new Set();assert.equal(ctx.window.BAL4V140.distinctQuestions,35);
 for(let i=21;i<=25;i++){
  const exams=ctx.window.BAContent['course-'+i].sectionExams;
  assert.equal(exams.length,2);assert.equal(exams[0].questions.length,1);assert.equal(exams[0].questions[0].prompt,'Legacy unchanged');
  const e=exams[1];assert.equal(e.optional,true);assert.equal(e.minutes,120);assert.equal(e.questions.length,7);
  for(const q of e.questions){assert.ok(q.id&&!ids.has(q.id));ids.add(q.id);const p=q.prompt.toLowerCase().trim();assert.ok(!prompts.has(p));prompts.add(p);assert.ok(q.correct>=0&&q.correct<4);assert.equal(q.options.length,4);assert.ok(q.explanation.length>55);assert.ok(q.remediation.length>50);}
 }
 assert.equal(ids.size,35);assert.equal(prompts.size,35);
});
test('replaying v140 is idempotent and never changes existing grades or exams',()=>{
 const ctx=load();const before=JSON.stringify(ctx.window.BAContent['course-21'].sectionExams[0]);
 vm.runInContext(text,ctx,{timeout:10000});
 assert.equal(ctx.window.BAContent['course-21'].sectionExams.length,2);
 assert.equal(JSON.stringify(ctx.window.BAContent['course-21'].sectionExams[0]),before);
});
test('independently reconciles numerical alternatives',()=>{
 assert.equal(310-90+24-14,230);
 assert.ok(Math.abs(12*(1-1/1.1**4)/.1-27-11.04)<.02);
 assert.ok(Math.abs(18*(1-1/1.1**3)/.1-45+.237)<.01);
 assert.ok(Math.abs(6*(1-1/1.1**5)/.1-20-2.7447)<.01);
 assert.ok(Math.abs(((.14-.06)*3e6-150000)-90000)<1e-6);
 assert.equal(36000*(10/60)*30*.4-45000,27000);
 assert.equal(.7*14+.3*(-8),7.4);
});
