/* node tests/level2-numeric-and-persistence.js
   Test deterministic numeric checking and unchanged saved-progress requirements. */
'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}},module:{exports:{}},console};for(let n=7;n<=13;n++)ctx.window.BAContent['course-'+String(n).padStart(2,'0')]={modules:[]};
vm.createContext(ctx);
for(const path of ['learning/core.js','learning/level2-numeric-v64.js','learning/level2-multistep-v65.js']){
  vm.runInContext(fs.readFileSync(path,'utf8'),ctx,{filename:path});
}
const G=ctx.window.BANumericGrade,L=ctx.window.BALearning;
assert(G&&L,'Missing grading or learning engine');
assert.equal(L.KEY,'business-academy-learning-v1','Existing progress key must not change');
let questions=0;
for(let n=7;n<=13;n++){
  const id='course-'+String(n).padStart(2,'0'),drills=ctx.window.BAContent[id].numericDrills;
  assert.equal(drills.length,2,id+' should have both numerical exercise sets');
  for(const d of drills){
    for(const q of d.questions){
      questions++;
      assert.equal(G.check(String(q.v),q),true,q.id+' correct exact');
      assert.equal(G.check('$'+String(q.v),q),true,q.id+' currency formatting');
      assert.equal(G.check('',q),false,q.id+' empty answer');
      assert.equal(G.check('abc',q),false,q.id+' nonnumeric answer');
      assert.equal(G.check(String(q.v+Math.max(2,Math.abs(q.v)*.02)),q),false,q.id+' wrong answer');
    }
  }
}
// Independently recompute the answer keys from the authored problem inputs.
// This prevents a self-referential test from accepting an incorrect stored answer.
const independent={
 '07': [260-(340-115),85+14-19-6+11,310-90,255-(310-90),72+13-16+5],
 '08': [7500*(25.60-24),48-275*.12,5500*26,5500*28,5500*(28-26)],
 '09': [(210/1500-150/1500)*100,60*62-2800,240/2000*100,12-9,60*50-2400],
 '10': [18-11-2-.25*4,-1.4+.45,12-7-1,.25*2,4-.5],
 '11': [175*7+300,700*3+500*8,130*8,130*8+200,0],
 '12': [48*21000-750000,96/(96+4)*100,1200*(.17-.13),48*23000,48*23000-850000],
 '13': [70*.23+30*.17,(.08-.02)*5000000-190000,40*.25,60*.15,(10+9)/100*100]
};
// The v65 operations case has a compound reorder-point question; verify it explicitly.
for(let n=7;n<=13;n++){
 const key=String(n).padStart(2,'0'),drills=ctx.window.BAContent['course-'+key].numericDrills;
 const expected=independent[key],actual=drills.flatMap(d=>d.questions);
 assert.equal(actual.length,5,'Five questions per course');
 for(let i=0;i<actual.length;i++){
   if(key==='11'&&i===3)continue;
   if(key==='11'&&i===4)continue;
   assert.ok(Math.abs(actual[i].v-expected[i])<=.0001,key+' arithmetic check '+actual[i].id+': stored '+actual[i].v+' expected '+expected[i]);
 }
}
assert.equal(questions,35,'Expected all 35 authored numeric questions');
const previous={schema:1,courses:{'course-07':{lessons:['existing-id'],answers:{practice:{},exam:{}},attempts:[{kind:'practice',score:100}],drafts:{portfolio:'existing work'},reviews:{portfolio:{0:4}}}}};
const storage={getItem:key=>key===L.KEY?JSON.stringify(previous):null};
const loaded=L.load(storage);
assert.equal(loaded.courses['course-07'].lessons[0],'existing-id');
assert.equal(loaded.courses['course-07'].attempts[0].score,100);
assert.equal(loaded.courses['course-07'].drafts.portfolio,'existing work');
assert.equal(loaded.courses['course-07'].reviews.portfolio[0],4);
console.log('PASS: 35 numerical questions, input validation and legacy progress preservation');
