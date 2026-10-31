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
assert.equal(questions,35,'Expected all 35 authored numeric questions');
const previous={schema:1,courses:{'course-07':{lessons:['existing-id'],answers:{practice:{},exam:{}},attempts:[{kind:'practice',score:100}],drafts:{portfolio:'existing work'},reviews:{portfolio:{0:4}}}}};
const storage={getItem:key=>key===L.KEY?JSON.stringify(previous):null};
const loaded=L.load(storage);
assert.equal(loaded.courses['course-07'].lessons[0],'existing-id');
assert.equal(loaded.courses['course-07'].attempts[0].score,100);
assert.equal(loaded.courses['course-07'].drafts.portfolio,'existing work');
assert.equal(loaded.courses['course-07'].reviews.portfolio[0],4);
console.log('PASS: 35 numerical questions, input validation and legacy progress preservation');
