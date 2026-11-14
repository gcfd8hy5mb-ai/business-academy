'use strict';
/* v153 historical filing provenance and grading invariance. No network during CI. */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),content=fs.readFileSync(path.join(root,'learning/level3-source-verified-cases-v145.js'),'utf8');
function boot(){const c={};for(let n=14;n<=20;n++)c['course-'+n]={modules:[{lessons:[{id:'c'+n+'-v85-evidence',minutes:120,body:['original verified lesson material'],example:'original example'}]}],sectionExams:[{id:'exam-'+n,questions:[{id:'q-'+n,options:['a','b'],correct:0}]}]};const ctx={window:{BAContent:c}};vm.createContext(ctx);vm.runInContext(content,ctx,{timeout:10000});return ctx;}
test('Adobe–Figma evidence distinguishes 2023 termination agreement from later verified December 20 settlement',()=>{
 const c=boot().window.BAContent['course-16'],text=c.modules[0].lessons[0].body.join('\n');
 assert.match(text,/Item 1\.02 \(termination\)/);assert.match(text,/December 17, 2023/);
 assert.match(text,/December 20, 2023/);assert.match(text,/Figma.s subsequent audited 2025 Form 10-K reports receipt/);
 assert.match(text,/fig-20251231\.htm/);assert.match(text,/adbe-20231217\.htm/);
 assert.doesNotMatch(text,/later financial filing is needed to confirm the date/);
 assert.match(text,/Neither proves the abandoned merger would have created shareholder value/);
});
test('seven historical labs each preserve evidence chronology and original graded artifacts',()=>{
 const ctx=boot(),c=ctx.window.BAContent,expected={14:'msft-20250630.htm',15:'ex991_q423.htm',16:'adbe-20231217.htm',17:'ex991_q423.htm',18:'abnb-20211231.htm',19:'d537928d8k.htm',20:'faa-halts-boeing-max-production-expansion'};
 for(let n=14;n<=20;n++){const course=c['course-'+n],l=course.modules[0].lessons[0],body=l.body.join(' ');
 assert.equal(l.id,'c'+n+'-v85-evidence');assert.equal(l.minutes,120);assert.equal(l.body[0],'original verified lesson material');
 assert.ok(body.includes(expected[n]));assert.match(body,/INFERENCE LIMIT/);
 assert.equal(course.sectionExams[0].questions[0].correct,0);
 }
});
test('source annotations are idempotent and cannot change pre-existing attempts or progress',()=>{
 const x=boot();for(let n=14;n<=20;n++){const c=x.window.BAContent['course-'+n];c.syntheticProgress={attempts:[{score:83,answers:{x:2}}],lessons:['preserved-lesson']};}
 const before=JSON.stringify(Object.fromEntries(Object.entries(x.window.BAContent).map(([k,c])=>[k,{progress:c.syntheticProgress,exams:c.sectionExams}])));
 vm.runInContext(content,x,{timeout:10000});const after=JSON.stringify(Object.fromEntries(Object.entries(x.window.BAContent).map(([k,c])=>[k,{progress:c.syntheticProgress,exams:c.sectionExams}])));
 assert.equal(after,before);for(let n=14;n<=20;n++)assert.equal(x.window.BAContent['course-'+n].modules[0].lessons[0].body.length,6);
});
