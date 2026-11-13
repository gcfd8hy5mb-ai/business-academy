'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const s=fs.readFileSync(require('node:path').join(__dirname,'../learning/level1-deep-method-v139.js'),'utf8');
test('six original long-form Level 1 seminars gain independent numerical explanation without changing identity',()=>{
 const BAContent={};
 for(let i=1;i<=6;i++){
   const id='course-'+String(i).padStart(2,'0'),lessonId='c'+String(i).padStart(2,'0')+'-v72-lesson';
   BAContent[id]={modules:[{id:'existing-module-'+i,lessons:[{id:lessonId,minutes:120,body:['Existing instructional text'],example:'Unchanged'}]}]};
 }
 const ctx={window:{BAContent}};vm.createContext(ctx);vm.runInContext(s,ctx,{timeout:10000});
 assert.equal(ctx.window.BAV139.existingLessonsDeepened,6);
 for(let i=1;i<=6;i++){
  const c=BAContent['course-'+String(i).padStart(2,'0')],l=c.modules[0].lessons[0];
  assert.equal(l.minutes,120);assert.equal(l.body[0],'Existing instructional text');
  assert.equal(l.example,'Unchanged');
  assert.equal(l.body.length,3);
  assert.ok(l.body.slice(1).join(' ').split(/\s+/).length>=200);
 }
 vm.runInContext(s,ctx,{timeout:10000});
 for(const c of Object.values(BAContent))assert.equal(c.modules[0].lessons[0].body.length,3);
});
