/* Level 2 optional assessment compatibility: no alteration of historic learner evidence. */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const scripts=['learning/level2-numeric-v64.js','learning/level2-multistep-v65.js','learning/level2-hr-independent-v71.js','learning/level2-independent-exams-v128.js'];
const context={BAContent:{}};
for(let n=7;n<=13;n++){
 const id='course-'+String(n).padStart(2,'0');
 context.BAContent[id]={id,numericDrills:[{id:id+'-historic',questions:[{id:'historic-question',p:'Existing practice',v:1,e:'Original evidence'}]}],sectionExams:[]};
}
for(const path of scripts)new Function('window',fs.readFileSync(path,'utf8'))(context);
test('v64 appends drills without deleting previously authored practices',()=>{
 for(const c of Object.values(context.BAContent)){
  assert.ok(c.numericDrills.some(d=>d.id===c.id+'-historic'),c.id+' lost existing drill');
  assert.equal(c.numericDrills.filter(d=>d.id==='c'+c.id.slice(-2)+'-v64-numeric').length,1);
 }
 const before=Object.values(context.BAContent).map(c=>c.numericDrills.length);
 new Function('window',fs.readFileSync(scripts[0],'utf8'))(context);
 assert.deepEqual(Object.values(context.BAContent).map(c=>c.numericDrills.length),before,'Reload should not duplicate a drill');
});
test('v64 numeric parser and grading check reject nonnumeric and inaccurate submissions',()=>{
 const grade=context.BANumericGrade;
 assert.equal(grade.parse('$1,234.5'),1234.5);
 assert.equal(grade.parse('bad'),null);
 assert.equal(grade.parse('Infinity'),null);
 assert.equal(grade.check('35',{v:35,tolerance:.001}),true);
 assert.equal(grade.check('36',{v:35,tolerance:.001}),false);
});
test('v65 and v128 optional assessments have distinct IDs, valid numeric targets and answer keys',()=>{
 for(const c of Object.values(context.BAContent)){
  const drillIds=c.numericDrills.map(x=>x.id);
  assert.equal(new Set(drillIds).size,drillIds.length,c.id+' duplicate drill IDs');
  const examIds=c.sectionExams.map(x=>x.id);
  assert.equal(new Set(examIds).size,examIds.length,c.id+' duplicate optional exam IDs');
  for(const drill of c.numericDrills)for(const q of drill.questions||[]){
   assert.ok(q.id&&Number.isFinite(q.v),c.id+' invalid numeric drill');
  }
  for(const exam of c.sectionExams)for(const q of exam.questions||[]){
   assert.ok(q.id&&Array.isArray(q.options)&&Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,c.id+' invalid exam answer');
  }
 }
});
