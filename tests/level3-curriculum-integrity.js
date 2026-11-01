/* Level 3 full authored-content and graduation contract audit. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const paths=['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js'];
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const p of paths)vm.runInContext(fs.readFileSync('learning/'+p,'utf8'),ctx,{filename:p});
let lessons=0,questions=0,work=0;
const all=new Set();
for(let n=14;n<=20;n++){
 const key='course-'+n,c=ctx.window.BAContent[key];assert.ok(c,key);
 const seen=new Set(),uniq=(prefix,id)=>{assert.equal(typeof id,'string');assert.ok(id.length>0);const k=prefix+':'+id;assert.ok(!seen.has(k),'Duplicate '+key+' '+k);seen.add(k);};
 const modules=c.modules||[];assert.ok(modules.length>=4,key+' missing modules');
 for(const m of modules){uniq('module',m.id);for(const l of m.lessons||[]){uniq('lesson',l.id);assert.ok(Number.isFinite(l.minutes)&&l.minutes>=20);assert.ok(Array.isArray(l.body)&&l.body.length>=2);lessons++;}}
 assert.ok(c.practice?.questions?.length>=4,key+' missing required practice');
 assert.ok((c.sectionExams||[]).length>=3,key+' missing assessment');
 assert.ok((c.portfolioSections||[]).length>=3,key+' missing portfolio');
 assert.ok((c.applications||[]).length>=3,key+' missing applications');
 for(const [kind,sets] of [['practice',[c.practice]],['sectionExam',c.sectionExams],['baseExam',c.exam?[c.exam]:[]],['advancedExam',c.advancedExam?[c.advancedExam]:[]]]){
 for(const a of sets){uniq(kind,a.id||kind);if(!a.questions)continue;assert.ok(a.questions.length>0);for(const q of a.questions){uniq('question',q.id);assert.ok(q.prompt?.trim());assert.ok(q.options?.length>=3);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length);assert.ok(q.explanation?.trim());assert.equal(new Set(q.options).size,q.options.length,'Duplicate option '+q.id);questions++;}if(kind==='sectionExam')assert.equal(a.rubric?.length,4);}
 }
 for(const [type,collection] of [['application',c.applications||[]],['portfolioSection',c.portfolioSections||[]]])for(const a of collection){uniq(type,a.id);assert.ok(a.prompt?.length>20);assert.ok(a.rubric?.length>=4);work++;}
 assert.ok(c.readings&&Array.isArray(c.readings));
 all.add(key);
}
assert.equal(all.size,7);
const final=ctx.window.BAContent['course-20'];assert.equal(final.sectionExams.find(x=>x.id==='l3-final-v77-exam').questions.length,16);
assert.ok(final.portfolioSections.some(x=>x.id==='l3-final-v77-capstone'));for(let n=14;n<=20;n++){const c=ctx.window.BAContent['course-'+n];const e=c.sectionExams.find(x=>x.id==='c'+n+'-v80-exam');assert.equal(e.questions.length,3);assert.ok(c.modules.some(m=>m.id==='c'+n+'-v80-module'));const v81=c.sectionExams.find(x=>x.id==='c'+n+'-v81-exam');assert.equal(v81.questions.length,3);assert.ok(v81.questions[0].prompt.length>25);assert.equal(v81.questions[0].options.length,4);assert.ok(v81.questions[0].options.every(x=>typeof x==='string'&&x.trim().length>0));assert.ok(c.applications.some(a=>a.id==='c'+n+'-v80-app'));}
assert.ok(lessons>=123&&questions>=170&&work>=78);
console.log('Level 3 audited:',all.size,'courses,',lessons,'lessons,',questions,'questions,',work,'written work items.');
