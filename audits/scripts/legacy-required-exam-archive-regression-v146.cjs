/* Historical required-assessment archive guard, v146.
 * Run: node audits/scripts/legacy-required-exam-archive-regression-v146.cjs
 * Archives are read-only evidence, not replacements for the live banks.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const base=path.resolve(__dirname,'../..'),read=path=>fs.readFileSync(require('node:path').join(base,path),'utf8');
const a=JSON.parse(read('audits/data/2026-11-04-required-level2-v58-exam-archive.json'));
const b=JSON.parse(read('audits/data/2026-11-04-required-level4-v104-exam-archive.json'));
const errors=[],assert=(ok,msg)=>{if(!ok)errors.push(msg)};
const make=(begin,end)=>{const root={BAContent:{}};for(let n=begin;n<=end;n++){const id='course-'+String(n).padStart(2,'0');root.BAContent[id]={id,modules:[],readings:[],sectionExams:[],portfolioSections:[],applications:[],outcomes:[]}}return root};
function load(root,rel){vm.runInNewContext(read(rel),{window:root},{filename:rel,timeout:5000})}
function same(a,b){return JSON.stringify(a)===JSON.stringify(b)}
const l2=make(7,13);load(l2,a.source.path);
assert(a.exams.length===7,'Level 2 expected 7 archived exams');
let level2Questions=0;
for(const item of a.exams){const live=l2.BAContent[item.courseId]?.sectionExams?.find(e=>e.id===item.definition.id);
 assert(Boolean(live),'Level 2 missing '+item.definition.id);
 if(live)assert(same(live,item.definition),'Level 2 historical definition altered: '+item.definition.id);
 level2Questions+=item.definition.questions.length;
}
assert(level2Questions===21,'Level 2 expected 21 archived questions');
const l4=make(21,25);
for(const item of b.sourceFiles)load(l4,item.path);
assert(b.affectedExams.length===20,'Level 4 expected 20 archived exams');
let l4Q=0,l4Appended=0;const promptCounts={};
for(const item of b.affectedExams){
 const live=l4.BAContent[item.courseId]?.sectionExams?.find(e=>e.id===item.examId);
 assert(Boolean(live),'Level 4 missing '+item.examId);
 if(live)assert(same(live,item.afterDefinition),'Level 4 historical definition altered: '+item.examId);
 assert(item.beforeQuestions<3,'Level 4 archive includes non-eligible source exam '+item.examId);
 const appended=item.afterDefinition.questions.filter(q=>q.id.includes('-v104-q'));
 assert(appended.length===2,'Level 4 expected two appended questions '+item.examId);
 assert(item.afterDefinition.questions.length===item.beforeQuestions+2,'Level 4 question count mismatch '+item.examId);
 assert(item.afterDefinition.minutes===item.beforeMinutes+25,'Level 4 duration extension changed '+item.examId);
 l4Q+=item.afterDefinition.questions.length;l4Appended+=appended.length;
 for(const q of appended)promptCounts[q.prompt]=(promptCounts[q.prompt]||0)+1;
}
assert(l4Q===75,'Level 4 expected 75 total archived questions');
assert(l4Appended===40,'Level 4 expected 40 appended question occurrences');
assert(Object.keys(promptCounts).length===10,'Level 4 expected ten distinct v104 prompts');
const duplicateOccurrences=Object.values(promptCounts).reduce((sum,count)=>sum+count-1,0);
assert(duplicateOccurrences===30,'Level 4 expected thirty repeated prompt occurrences');
const snapshotCopy=JSON.stringify({a,b});
const attempts=[{kind:'sectionExam-c21-v95-exam',score:80,answers:{'c21-v95-q1':0},at:'2025-01-01T00:00:00.000Z'}];
const before=JSON.stringify(attempts);
const liveExam=l4.BAContent['course-21'].sectionExams.find(e=>e.id==='c21-v95-exam');
assert(Boolean(liveExam),'Missing example required exam');
assert(JSON.stringify(attempts)===before,'Historical attempt unexpectedly edited');
assert(JSON.stringify({a,b})===snapshotCopy,'Archive metadata unexpectedly mutated');
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',level2Exams:a.exams.length,level2Questions,level4AffectedExams:b.affectedExams.length,level4ArchivedQuestions:l4Q,level4ReinforcementOccurrences:l4Appended,level4RepeatedPromptOccurrences:duplicateOccurrences,errors},null,2));
if(errors.length)process.exitCode=1;
