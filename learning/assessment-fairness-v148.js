/* v148: read-only fairness review of one historical M&A assessment mistake.
 * No writes, auto-grade changes, mastery changes, or student data extraction.
 */
(function(root){'use strict';
const EXAM='c21-v105-independent', KIND='sectionExam-'+EXAM, QUESTION='c21-v105-independent-q3';
function inspect(store,course){
 const s=store?.courses?.['course-21'];const legacy=(course?.sectionExams||[]).find(a=>a.id===EXAM);
 if(!legacy)return {status:'assessment-not-found',affected:[],preserved:true};
 const q=(legacy.questions||[]).find(x=>x.id===QUESTION);
 if(!q)return {status:'question-not-found',affected:[],preserved:true};
 const credited=q.options?.indexOf('$6m'),valid=q.options?.indexOf('$9m');
 if(credited<0||valid<0||credited===valid)return {status:'key-version-unknown',affected:[],preserved:true};
 const attempts=(s?.attempts||[]).filter(a=>a?.kind===KIND);
 const affected=attempts.map((a,index)=>{
  const response=a.answers?.[QUESTION],hasAnswer=Number.isInteger(response)&&response>=0&&response<q.options.length;
  const label=hasAnswer?q.options[response]:null;
  const fingerprint=typeof a.assessmentSnapshot?.keyFingerprint==='string'?a.assessmentSnapshot.keyFingerprint:null;
  const snapshotIds=a.assessmentSnapshot?.questionIds;
  const included=Array.isArray(snapshotIds)?snapshotIds.includes(QUESTION):null;
  const classification=included===false?'not-in-snapshot':!hasAnswer?'answer-unavailable':label==='$9m'?'possible-under-credit':label==='$6m'?'possible-over-credit':'scoring-unaffected-by-disputed-answer';
  return {attemptIndex:index,submittedAt:typeof a.at==='string'?a.at:null,recordedScore:Number.isFinite(a.score)?a.score:null,classification,hasSnapshot:!!fingerprint,questionPresentInSnapshot:included,requiresReview:['possible-under-credit','possible-over-credit','answer-unavailable'].includes(classification)};
 });
 const flagged=affected.filter(x=>x.requiresReview);
 return {status:'review-needed',attemptCount:attempts.length,flaggedCount:flagged.length,affected,remedy:'Preserve original attempt and grade. Require explicit human review and documented scoring policy before any credit correction. Never recompute earlier grades from current keys.',preserved:true};
}
const api={inspect,EXAM,KIND,QUESTION};root.BAAssessmentFairnessV148=api;
if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
