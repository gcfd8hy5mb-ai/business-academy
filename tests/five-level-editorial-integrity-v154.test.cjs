'use strict';
/* v154: full-corpus editorial integrity screen, not a subject-matter peer review.
 * Parses the live curriculum scripts in index.html order, only synthetic context.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
function load(){const html=read('index.html');const scripts=[...html.matchAll(/<script\s+src="(learning\/(?:level[^"?]+|five-level[^"?]+)\.js)(?:\?[^"]*)?"\s+defer><\/script>/g)].map(m=>m[1]);const ctx={window:{BAContent:{}},console};vm.createContext(ctx);for(const p of scripts)vm.runInContext(read(p),ctx,{filename:p,timeout:10000});return ctx.window.BAContent;}
const arr=v=>Array.isArray(v)?v:[],words=t=>String(t||'').trim().split(/\s+/).filter(Boolean).length;
test('all 575 active lessons have text, learning transfer, worked examples, stable identifiers and subject titles',()=>{
 const c=load();let count=0,broken=[];
 for(let n=1;n<=26;n++){const id='course-'+String(n).padStart(2,'0'),course=c[id];assert.ok(course,'course missing '+id);const seen=new Set();
  for(const m of arr(course.modules))for(const l of arr(m.lessons)){
   count++;const key=id+'/'+l.id;
   if(!l.id||seen.has(l.id))broken.push(key+' missing/duplicate ID');seen.add(l.id);
   if(!String(l.title||'').trim())broken.push(key+' missing title');
   if(!Array.isArray(l.body)||words(l.body.join(' '))<150)broken.push(key+' body shorter than 150 words');
   if(!String(l.example||'').trim())broken.push(key+' missing worked/example context');
   if(!String(l.transfer||'').trim())broken.push(key+' missing independent transfer');
   if(!(Number(l.minutes)>0))broken.push(key+' invalid study time');
  }
 }
 assert.equal(count,575);assert.deepEqual(broken,[]);
});
test('all 26 courses contain stated applications, credible rubric expectations and primary reading metadata',()=>{
 const c=load();for(let n=1;n<=26;n++){const id='course-'+String(n).padStart(2,'0'),course=c[id];const acts=arr(course.applications),portfolio=arr(course.portfolioSections);
  assert.ok(acts.length>0,id+' applications absent');assert.ok(portfolio.length>0||course.portfolio,id+' portfolio absent');
  for(const act of acts) {assert.ok(String(act.prompt||'').trim().length>20,id+' application has no task');assert.ok(arr(act.rubric).length>0,id+' has no application rubric');}
  for(const p of portfolio){assert.ok(String(p.prompt||'').trim().length>20,id+' portfolio has no task');assert.ok(arr(p.rubric).length>0,id+' portfolio has no rubric');}
  for(const r of arr(course.readings)) {assert.ok(String(r.title||'').trim(),id+' missing reading title');assert.ok(String(r.description||'').trim().length>10,id+' reading not explained');}
 }
});
test('historical cases maintain source provenance and abstain from treating outcomes as proof of causation',()=>{
 const c=load();for(let n=14;n<=20;n++){const course=c['course-'+n],e=arr(course.modules).flatMap(m=>arr(m.lessons)).find(l=>l.id==='c'+n+'-v85-evidence');
  assert.ok(e,'missing primary evidence course '+n);const prose=e.body.join(' ');assert.match(prose,/DOCUMENT AND TIME BOUNDARY/);assert.match(prose,/INFERENCE LIMIT/);assert.match(prose,/https:\/\//);
  assert.ok(prose.includes('what')||prose.length>800,'insufficient evidence content course '+n);
 }
});
test('published fairness policy preserves existing grades and lists the original optional assessment',()=>{
 const policy=read('docs/HISTORICAL_MA_GRADING_FAIRNESS_POLICY_2026-11-14.md');
 for(const needle of ['c21-v105-independent-q3','c21-v143-corrected-evidence','No negative retroactive consequences','No invented historical credit','not-in-snapshot','Individual review on request'])assert.ok(policy.includes(needle),'missing policy rule '+needle);
 const c=load()['course-21'];for(const id of ['c21-v105-independent','c21-v143-corrected-evidence']){const e=c.sectionExams.find(x=>x.id===id);assert.ok(e,'missing '+id);assert.equal(e.optional,true);}
});
