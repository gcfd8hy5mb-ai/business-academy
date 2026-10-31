/* Run from repository root: node tests/level1-level2-completion-audit.js
   Structural academic evidence audit; does not certify degree equivalence. */
'use strict';
const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const scripts=[...html.matchAll(/<script\s+src="([^"]+)"[^>]*><\/script>/g)].map(x=>x[1].split('?')[0]).filter(s=>s.startsWith('learning/')&&s.endsWith('.js')&&!s.includes('/workspace-'));
const context={window:{},console,module:{exports:{}}};vm.createContext(context);
for(const path of scripts){assert(fs.existsSync(path),'Missing script '+path);vm.runInContext(fs.readFileSync(path,'utf8'),context,{filename:path});}
const catalog=context.window.BAContent||{};const failures=[];const report=[];
for(let n=1;n<=13;n++){const id='course-'+String(n).padStart(2,'0'),c=catalog[id];if(!c){failures.push('Missing '+id);continue;}
 const lessons=(c.modules||[]).flatMap(m=>m.lessons||[]), exams=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
 const questions=exams.flatMap(e=>e.questions||[]), portfolio=[c.portfolio,c.portfolioExtension,...(c.portfolioSections||[])].filter(Boolean), applications=c.applications||[];
 const ids=lessons.map(l=>l.id); if(new Set(ids).size!==ids.length)failures.push(id+' duplicate lesson IDs');
 if(!lessons.length)failures.push(id+' has no lessons');
 for(const q of questions){if(!q||!Array.isArray(q.options)||q.options.length<2||!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length)failures.push(id+' invalid objective key '+(q?.id||'?'));
 if(!q?.explanation)failures.push(id+' missing explanation '+(q?.id||'?'));}
 const keyList=questions.map(q=>q.id);if(new Set(keyList).size!==keyList.length)failures.push(id+' repeated question ID');
 for(const l of lessons){if(!l.id||!l.title||!Array.isArray(l.body)||!l.body.join(' ').trim())failures.push(id+' incomplete lesson '+(l.id||'?'));if(!Number.isFinite(l.minutes)||l.minutes<=0)failures.push(id+' invalid lesson workload '+l.id);}
 for(const e of exams){if(!Number.isFinite(e.minutes)||e.minutes<=0)failures.push(id+' invalid exam workload '+(e.id||'?'));for(const q of e.questions||[]){if(!Array.isArray(q?.options)||q.options[q.correct]===undefined||!String(q.options[q.correct]).trim())failures.push(id+' empty correct answer '+q.id);if(new Set((q?.options||[]).map(v=>String(v).trim())).size!==(q?.options||[]).length)failures.push(id+' duplicate answer options '+q.id);}}
 for(const item of [...portfolio,...applications]){if(!item.id&&!([c.portfolio,c.portfolioExtension].includes(item)))failures.push(id+' portfolio or application missing stable ID');if(!Array.isArray(item.rubric)||!item.rubric.length)failures.push(id+' missing review rubric '+(item.id||'base'));if(!Number.isFinite(item.minutes)||item.minutes<=0)failures.push(id+' invalid written workload '+(item.id||'base'));}
 if(!exams.length)failures.push(id+' has no exams');
 if(!portfolio.length)failures.push(id+' has no portfolio');
 const minutes=lessons.reduce((a,l)=>a+(l.minutes||0),0)+exams.reduce((a,e)=>a+(e.minutes||0),0)+[...portfolio,...applications,...(c.readings||[])].reduce((a,v)=>a+(v.minutes||0),0);
 report.push({course:id,level:n<=6?1:2,lessons:lessons.length,questions:questions.length,examinations:exams.length,portfolios:portfolio.length,applications:applications.length,estimatedHours:Number((minutes/60).toFixed(1)),shortBodies:lessons.filter(l=>Array.isArray(l.body)&&l.body.join(' ').trim().length<550).length});
}
for(const [id,section,portfolio] of [['course-06','l1-final-v39','l1-final-v39-board'],['course-13','l2-final-v55-exam','l2-final-v55-capstone']]){
 const c=catalog[id];if(c){if(!(c.sectionExams||[]).some(e=>e.id===section))failures.push(id+' missing final exam');if(!(c.portfolioSections||[]).some(p=>p.id===portfolio))failures.push(id+' missing capstone');}
}
const core=context.window.BALearning;assert(core,'Learning core absent');const empty=core.empty();assert.equal(core.load({getItem:()=>null}).schema,1);assert.equal(core.score([{id:'a',correct:0},{id:'b',correct:1}],{a:0,b:1}),100);
assert.equal(core.score([{id:'a',correct:0},{id:'b',correct:1}],{a:1,b:0}),0);
const sample={id:'course-07',modules:[{lessons:[{id:'sample'}]}],practice:{questions:[{id:'q',correct:0}]},exam:{questions:[{id:'e',correct:1}],rubric:['reasoning']},portfolio:{rubric:['reasoning']}};
assert.equal(core.mastery(empty,sample).mastered,false,'Unsubmitted work must not count as mastery');
const s=core.state(empty,'course-07');s.lessons=['sample'];s.answers.practice.q=0;s.answers.exam={e:1};core.grade(empty,sample,'practice');core.grade(empty,sample,'exam');s.drafts.exam='analysis';s.reviews.exam={0:3};s.drafts.portfolio='evidence';s.reviews.portfolio={0:3};assert.equal(core.mastery(empty,sample).mastered,true,'All requirements should permit self-assessed mastery');
console.log(JSON.stringify({audit:'Levels 1 and 2',scripts:scripts.length,courseInventory:report,failures},null,2));if(failures.length)process.exitCode=1;
