/* Level 4 cohort transition, staged only. No automatic enrollment or cloud mutation.
 * The learning-v1 JSON remains the sole persisted/cloud-synced record.
 * Never overwrite archived grades, attempts, answers, or completed lessons.
 */
(function(root){
'use strict';
const VERSION='l4-required-v2',LEGACY='l4-legacy-v1';
const RELEASE_APPROVED=false; // Deliberate release gate. Owner + examiner + real-device checks required.
const ids=['course-21','course-22','course-23','course-24','course-25'];
function hasWork(store){
 if(!store||store.schema!==1||!store.courses||typeof store.courses!=='object')return true;
 return Object.values(store.courses).some(s=>s&&(
   (Array.isArray(s.lessons)&&s.lessons.length>0)||
   (Array.isArray(s.attempts)&&s.attempts.length>0)||
   Object.values(s.drafts||{}).some(v=>String(v||'').trim())||
   Object.values(s.answers||{}).some(a=>a&&Object.values(a).some(v=>v&&typeof v==='object'?Object.keys(v).length>0:v!==null&&v!==undefined))||
   Object.values(s.reviews||{}).some(a=>a&&Object.keys(a).length>0)
 ));
}
function pinned(store){
 const p=store&&store.level4ExamCohort;
 return p&&p.version===VERSION&&p.status==='approved'&&p.level===4?VERSION:LEGACY;
}
function pinNew(store,{approved=false}={}){
 if(!RELEASE_APPROVED||!approved)throw Error('Level 4 cohort rollout not authorized');
 if(hasWork(store)||store.level4ExamCohort)throw Error('Existing learner is locked to legacy assessment rules');
 store.level4ExamCohort={level:4,version:VERSION,status:'approved'};
 return store.level4ExamCohort;
}
function cohortFromRecords(records){
 try{
  const raw=records&&records['business-academy-learning-v1'];
  if(raw===null||raw===undefined)return LEGACY;
  const parsed=JSON.parse(raw);
  if(!parsed||parsed.schema!==1||!parsed.courses||typeof parsed.courses!=='object')return 'INVALID';
  if(parsed.level4ExamCohort&&pinned(parsed)!==VERSION)return 'INVALID';
  return pinned(parsed);
 }catch{return 'INVALID'}
}
function compatibleRecords(local,remote){
 const a=cohortFromRecords(local),b=cohortFromRecords(remote);
 return a!=='INVALID'&&b!=='INVALID'&&a===b;
}
function proposedRequired(course){
 if(!course||!ids.includes(course.id))return (course?.sectionExams||[]).filter(x=>!x.optional);
 const all=course.sectionExams||[],legacy=all.filter(x=>!x.optional);
 const replacement=all.find(x=>x.id==='c'+Number(course.id.slice(-2))+'-v138-independent-transfer');
 if(!replacement||!replacement.optional||!Array.isArray(replacement.questions)||replacement.questions.length<4)
  throw Error('Missing Level 4 independent candidate bank');
 const norm=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
 const counts=new Map();
 for(const exam of legacy)for(const q of exam.questions||[]){const p=norm(q.prompt);counts.set(p,(counts.get(p)||0)+1)}
 const kept=legacy.filter(exam=>(exam.questions||[]).every(q=>counts.get(norm(q.prompt))===1));
 // Do not enable release with an exam that omits the necessary final assessment.
 return {kept,retired:legacy.filter(e=>!kept.includes(e)),replacement:{...replacement,optional:false,minutes:replacement.suggestedMinutes||90}};
}
function required(store,course){
 const legacy=(course.sectionExams||[]).filter(x=>!x.optional);
 // No production change while rollout is unapproved. The pinned state alone cannot activate a gate.
 if(!RELEASE_APPROVED||pinned(store)!==VERSION||!ids.includes(course.id))return legacy;
 const proposed=proposedRequired(course);
 return [...proposed.kept,proposed.replacement];
}
const api={VERSION,LEGACY,RELEASE_APPROVED,pinned,pinNew,hasWork,required,proposedRequired,cohortFromRecords,compatibleRecords};
root.BAL4CohortPolicy=api;
if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
