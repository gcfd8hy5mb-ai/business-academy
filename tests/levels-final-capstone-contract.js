/* Run: node tests/levels-final-capstone-contract.js
   Ensure final exams and board submissions exist and remain stable after content assembly. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const scripts=[...html.matchAll(/<script\s+src="([^"]+)"[^>]*><\/script>/g)].map(m=>m[1].split('?')[0]).filter(x=>x.startsWith('learning/')&&!x.includes('workspace-'));
const ctx={window:{},console,module:{exports:{}}};vm.createContext(ctx);
for(const path of scripts)vm.runInContext(fs.readFileSync(path,'utf8'),ctx,{filename:path});
const catalog=ctx.window.BAContent,L=ctx.window.BALearning;
assert(catalog&&L,'Full course catalog required');
for(const [id,examId,capId] of [['course-06','l1-final-v39','l1-final-v39-board'],['course-13','l2-final-v55-exam','l2-final-v55-capstone']]){
 const c=catalog[id];assert(c,id+' missing');
 const exam=(c.sectionExams||[]).find(x=>x.id===examId);
 const cap=(c.portfolioSections||[]).find(x=>x.id===capId);
 assert(exam&&cap,id+' missing level finals');
 assert(exam.questions.length>=10,id+' final exam unexpectedly short');
 assert(cap.requirements?.length>=3,id+' final board deliverable unexpectedly weak');
 assert(cap.rubric?.length>=3,id+' final assessment lacks review criteria');
 const allIds=(c.modules||[]).flatMap(m=>m.lessons||[]).map(l=>l.id);
 assert.equal(new Set(allIds).size,allIds.length,id+' lesson IDs must be stable');
 const empty=L.empty();assert.equal(L.mastery(empty,c).mastered,false,id+' must not graduate with no evidence');
 const state=L.state(empty,id);state.lessons=allIds;
 assert.equal(L.mastery(empty,c).mastered,false,id+' must not graduate from lesson clicks');
 const names=['sectionExam-'+examId,'portfolioSection-'+capId];
 for(const key of names){state.drafts[key]='';state.reviews[key]={};}
 assert.equal(L.mastery(empty,c).mastered,false,id+' final board submission must remain required');
}
console.log('PASS: Level 1 and Level 2 final exam, board deliverable and locked mastery contracts');
