/* Level 3 v91: ensure mixed-generation lessons/readings render without missing tutor and URL fields. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync('learning/workspace-v40.js','utf8');
new vm.Script(src,{filename:'workspace-v40.js'});
assert.ok(src.includes('const guide=l.tutor||'),'Tutor fallback required');
assert.ok(src.includes('l.tutor?.steps'),'Tutor navigation must tolerate missing metadata');
assert.ok(src.includes('r.task||r.description'),'Readings must support both authored formats');
assert.ok(src.includes('r.url||'),'Readings need URL fallback');
const files=['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js','level3-integrated-final-v87.js','level3-completion-seminars-v90.js'];
const ctx={window:{BAContent:{}}};vm.createContext(ctx);for(const name of files)vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
let lessons=0,minutes=0,missingTutor=0,readingAlt=0;
for(let n=14;n<=20;n++){const c=ctx.window.BAContent['course-'+n];assert.ok(c);
for(const m of c.modules)for(const l of m.lessons){lessons++;minutes+=l.minutes;missingTutor+=!l.tutor;}
for(const r of c.readings){readingAlt+=!r.url&&!!r.description;assert.ok(r.url||/https:\/\//.test(r.description||''),'Reading with no usable source '+n);}
}
assert.equal(lessons,181);assert.ok(missingTutor>0);assert.ok(readingAlt>0);
console.log('Level 3 v91: '+lessons+' lessons, '+missingTutor+' lessons need tutor fallback, '+readingAlt+' alternative reading links; syntax and content verified.');
