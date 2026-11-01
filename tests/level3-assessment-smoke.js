/* Level 3 assessment availability, IDs and answer-key position regression. */
const fs=require('node:fs');const assert=require('node:assert/strict');const vm=require('node:vm');
const files=['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js'];
const ctx={window:{BAContent:{}}};vm.createContext(ctx);for(const f of files)vm.runInContext(fs.readFileSync('learning/'+f,'utf8'),ctx,{filename:f});
let questionCount=0;
for(let n=14;n<=20;n++){
 const c=ctx.window.BAContent['course-'+n];assert.ok(c,'Missing course '+n);
 const lessons=c.modules.flatMap(m=>m.lessons);assert.ok(lessons.length>=13);assert.equal(new Set(lessons.map(x=>x.id)).size,lessons.length,'Duplicate lesson ID');
 assert.ok(c.practice?.questions?.length>=4,'Mastery would be impossible: practice missing in '+n);
 assert.ok(c.sectionExams?.length>=3);assert.ok(c.portfolioSections?.length>=3);
 const kinds=[...c.sectionExams.map(x=>x.questions),c.practice.questions];
 for(const questions of kinds){assert.ok(questions.length>=3);for(const q of questions){assert.equal(typeof q.prompt,'string');assert.ok(q.options.length>=3);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,'Invalid answer key '+q.id);assert.ok(q.explanation,'Missing explanation '+q.id);questionCount++;}}
 const positions=new Set(c.sectionExams.flatMap(x=>x.questions.map(q=>q.correct)));assert.ok(positions.size>=3,'Unbalanced answers '+n);
}
const final=ctx.window.BAContent['course-20'];assert.ok(final.sectionExams.some(x=>x.id==='l3-final-v77-exam'));assert.ok(final.portfolioSections.some(x=>x.id==='l3-final-v77-capstone'));
const html=fs.readFileSync('index.html','utf8');assert.ok(html.includes('learning/level3-mastery-v78.js?v=78'));
console.log('Level 3 assessment regression passed:',questionCount,'questions checked across seven courses');
