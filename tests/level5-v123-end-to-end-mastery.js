/* Level 5 v123: end-to-end state and milestone completion regression. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const sources=['core.js','level5-integrated-capstone-v117.js','level5-executive-integration-v118.js','level5-comprehensive-final-v119.js','level5-multidisciplinary-cases-v120.js','workspace-v40.js'];
const disk={};let listeners={};
function boot(){const window={BAContent:{},scrollTo(){}},ctx={window,localStorage:{getItem:k=>disk[k]||null,setItem:(k,v)=>{disk[k]=v}},document:{addEventListener:(k,f)=>{listeners[k]=f},getElementById:()=>null,querySelectorAll:()=>[]},htmlEscape:String,catalog:Array.from({length:26},(_,i)=>'Course '+(i+1)),coursePlans:Array.from({length:26},()=>({hours:120})),data:{},go(){},draw(){},console};vm.createContext(ctx);for(const s of sources)vm.runInContext(fs.readFileSync('learning/'+s,'utf8'),ctx);return ctx;}
function tab(t){for(const data of [{learnCourse:'course-26'},{learnTab:t}])listeners.click({target:{closest:()=>({dataset:data})}});}
let ctx=boot(),L=ctx.window.BALearning,store=L.load(ctx.localStorage),course=L.catalog(ctx.catalog,ctx.coursePlans,ctx.window.BAContent)[25],state=L.state(store,course.id);
tab('milestone');assert.match(ctx.window.BAWorkspace.render(),/milestone is incomplete/);
state.lessons=course.modules.flatMap(m=>m.lessons.map(l=>l.id));
for(const ex of course.sectionExams){state.attempts.push({kind:'sectionExam-'+ex.id,score:100});state.drafts['sectionExam-'+ex.id]='Independent executive analysis';state.reviews['sectionExam-'+ex.id]=ex.rubric.map(()=>4);}
for(const x of course.portfolioSections){state.drafts['portfolioSection-'+x.id]='Independent board dossier';state.reviews['portfolioSection-'+x.id]=x.rubric.map(()=>4);}
for(const x of course.applications){state.drafts['application-'+x.id]='Written corporate scenario';state.reviews['application-'+x.id]=x.rubric.map(()=>4);}
assert.equal(L.mastery(store,course).mastered,true,'All author-defined coursework should be completable');
ctx.localStorage.setItem(L.KEY,JSON.stringify(store));ctx=boot();L=ctx.window.BALearning;tab('milestone');assert.match(ctx.window.BAWorkspace.render(),/All local Level 5 self-assessed requirements are recorded/);
store=L.load(ctx.localStorage);course=L.catalog(ctx.catalog,ctx.coursePlans,ctx.window.BAContent)[25];state=L.state(store,course.id);
state.attempts.push({kind:'sectionExam-l5-v119-final-exam',score:75});ctx.localStorage.setItem(L.KEY,JSON.stringify(store));assert.equal(L.mastery(store,course).mastered,false,'Failed final retake blocks mastery');assert.match(ctx.window.BAWorkspace.render(),/milestone is incomplete/);
state.attempts.push({kind:'sectionExam-l5-v119-final-exam',score:88});assert.equal(L.mastery(store,course).mastered,true,'Passed retake restores mastery');
delete state.reviews['portfolioSection-l5-v119-final-capstone'];assert.equal(L.mastery(store,course).mastered,false,'Missing capstone rubric review blocks mastery');
console.log('Level 5 v123: incomplete, complete, persisted restart, failed retake, recovered retake and missing capstone gates passed.');
