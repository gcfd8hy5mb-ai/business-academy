'use strict';
/* v149: production-order, five-level student-evidence and grading regressions.
 * Uses synthetic in-memory student records only. No cloud or device writes.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
function boot(){
 const html=read('index.html'),files=[...html.matchAll(/<script\s+src="(learning\/(?:level[^"?]+|five-level[^"?]+)\.js)(?:\?[^"]*)?"\s+defer><\/script>/g)].map(m=>m[1]);
 const ctx={window:{BAContent:{}},console};vm.createContext(ctx);
 for(const file of files)vm.runInContext(read(file),ctx,{filename:file,timeout:10000});
 vm.runInContext(read('learning/assessment-fairness-v148.js'),ctx,{filename:'assessment-fairness-v148.js',timeout:10000});
 vm.runInContext(read('learning/core-v110.js'),ctx,{filename:'core-v110.js',timeout:10000});
 return {L:ctx.window.BALearning,content:ctx.window.BAContent,ctx,files};
}
function htmlScriptIncludesFairness(){return read('index.html').includes('src="learning/assessment-fairness-v148.js?v=148"')}
const courseId=i=>'course-'+String(i).padStart(2,'0');
function student(L){const backing=new Map();return {backing,storage:{getItem:k=>backing.get(k)||null,setItem:(k,v)=>backing.set(k,v),removeItem:k=>backing.delete(k)}};}
function correctAnswers(exam){return Object.fromEntries((exam.questions||[]).map(q=>[q.id,q.correct]));}
test('every level has real production-loaded courses and no blank initial student mastery',()=>{
 const {L,content,files}=boot();assert.ok(files.includes('learning/level4-assessment-errata-v143.js'));assert.ok(htmlScriptIncludesFairness(),'fairness module must be loaded by the production page');
 const store=L.empty();for(let n=1;n<=26;n++){const id=courseId(n),c=content[id];assert.ok(c,'missing '+id);assert.ok(c.modules.flatMap(m=>m.lessons||[]).length>0);assert.equal(L.mastery(store,{id,...c}).mastered,false,id+' must not auto-complete');}
});
test('original Level 4 exam attempt, answers, key snapshot, and progress survive local storage reload',()=>{
 const {L,content}=boot(),{storage}=student(L),c={id:'course-21',...content['course-21']},db=L.empty(),s=L.state(db,c.id);
 const exam=c.sectionExams.find(x=>x.id==='c21-v105-independent');assert.ok(exam?.questions?.length);
 const kind='sectionExam-'+exam.id;s.answers[kind]=correctAnswers(exam);const original=L.grade(db,c,kind);
 assert.equal(original.score,100);assert.equal(original.assessmentSnapshot.questionCount,exam.questions.length);
 assert.equal(original.assessmentSnapshot.questionIds.length,exam.questions.length);assert.match(original.assessmentSnapshot.keyFingerprint,/^fnv1a32-[0-9a-f]{8}$/);
 s.lessons=['synthetic-completed-lesson'];s.drafts['exam']='Synthetic student text';s.reviews['exam']={'0':4};
 const frozen=JSON.stringify(original);storage.setItem(L.KEY,JSON.stringify(db));
 const restored=L.load(storage);const rs=L.state(restored,c.id);
 assert.equal(rs.attempts.length,1);assert.equal(JSON.stringify(rs.attempts[0]),frozen);assert.deepEqual(Array.from(rs.lessons),['synthetic-completed-lesson']);assert.equal(rs.drafts.exam,'Synthetic student text');
 assert.equal(L.latest(rs,kind).score,100);
 const optional=c.sectionExams.find(x=>x.id==='c21-v143-corrected-evidence');assert.equal(optional.optional,true);
 assert.ok(!L.mastery(restored,c).mastered,'optional tests must not bypass required coursework');
});
test('a historical wrongly keyed optional attempt is never retroactively regraded on read',()=>{
 const {L,content,ctx}=boot(),c={id:'course-21',...content['course-21']},db=L.empty(),s=L.state(db,c.id),exam=c.sectionExams.find(x=>x.id==='c21-v105-independent'),kind='sectionExam-'+exam.id;
 s.answers[kind]=correctAnswers(exam);const q=exam.questions.find(x=>x.id==='c21-v105-independent-q3');assert.ok(q);
 s.answers[kind][q.id]=q.options.indexOf('$9m');
 const original=L.grade(db,c,kind),before=JSON.stringify(db),report=ctx.window.BAAssessmentFairnessV148.inspect(db,c);
 assert.ok(report.flaggedCount>=1);assert.equal(report.affected[0].classification,'possible-under-credit');assert.equal(JSON.stringify(db),before);
 assert.equal(L.latest(s,kind).score,original.score);assert.equal(q.options[q.correct],'$6m','historical grade key must be untouched');
});
test('incomplete submissions cannot create attempts or grant exam credit',()=>{
 const {L,content}=boot(),c={id:'course-26',...content['course-26']},db=L.empty(),s=L.state(db,c.id);
 const exam=c.sectionExams.find(e=>!e.optional&&e.questions?.length>1);
 assert.ok(exam,'requires multiquestion Level 5 exam');
 const kind='sectionExam-'+exam.id;s.answers[kind]={[exam.questions[0].id]:exam.questions[0].correct};
 assert.equal(L.grade(db,c,kind),false);assert.equal(s.attempts.length,0);
 assert.equal(L.mastery(db,c).mastered,false);
 s.answers[kind]=correctAnswers(exam);const a=L.grade(db,c,kind);
 assert.equal(a.score,100);assert.equal(s.attempts.length,1);assert.equal(L.mastery(db,c).mastered,false,'single exam cannot bypass written and lesson work');
});
test('grading on every level retains distinct original question IDs and does not affect other courses',()=>{
 const {L,content}=boot(),db=L.empty();
 for(const n of [1,7,14,21,26]){
  const id=courseId(n),c={id,...content[id]},exam=(c.sectionExams||[]).find(e=>!e.optional&&e.questions?.length);
  assert.ok(exam,'missing required exam for '+id);
  const kind='sectionExam-'+exam.id,st=L.state(db,id);st.answers[kind]=correctAnswers(exam);
  const result=L.grade(db,c,kind);assert.equal(result.score,100,id);assert.equal(result.assessmentSnapshot.questionCount,exam.questions.length);
  assert.equal(new Set(result.assessmentSnapshot.questionIds).size,exam.questions.length);
 }
 assert.equal(Object.keys(db.courses).length,5);for(const c of Object.values(db.courses))assert.equal(c.attempts.length,1);
});
test('damaged or obsolete saved state falls back safely while valid grades still reload',()=>{
 const {L}=boot();const s=student(L).storage;
 for(const value of ['not-json','{}','{"schema":2,"courses":{}}','{"schema":1,"courses":[]}']){s.setItem(L.KEY,value);assert.equal(Object.keys(L.load(s).courses).length,0);}
 const source=L.empty();L.state(source,'course-01').lessons.push('lesson-on-device');
 s.setItem(L.KEY,JSON.stringify(source));const restored=L.load(s);assert.deepEqual(Array.from(L.state(restored,'course-01').lessons),['lesson-on-device']);
});
