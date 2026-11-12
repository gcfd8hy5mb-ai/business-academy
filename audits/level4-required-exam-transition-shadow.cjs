/* Shadow-only migration planning for Level 4 duplicated legacy mandatory exams.
 * Builds a report; it NEVER changes any course, store, grade or grading rules.
 * Changes to required exams need explicit release approval and real device tests.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
function validateReplacementBank(legacy,replacement,id){
 const normalize=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
 if(!replacement||!replacement.optional)throw Error('No optional replacement for '+id);
 const questions=replacement.questions;
 if(!Array.isArray(questions)||!questions.length)throw Error('Missing replacement questions in '+id);
 const legacyIDs=new Set(legacy.map(e=>String(e.id)));
 const legacyQuestionIDs=new Set(legacy.flatMap(e=>(e.questions||[]).map(q=>String(q.id))));
 const legacyPrompts=new Set(legacy.flatMap(e=>(e.questions||[]).map(q=>normalize(q.prompt))));
 const introducedQuestionIds=questions.map(q=>String(q.id||''));
 const introducedPrompts=questions.map(q=>normalize(q.prompt));
 if(!replacement.id||legacyIDs.has(String(replacement.id)))throw Error('Replacement exam ID collides with required exam in '+id);
 if(introducedQuestionIds.some(qid=>!qid||legacyQuestionIDs.has(qid)) ||
    new Set(introducedQuestionIds).size!==introducedQuestionIds.length)
  throw Error('Unsafe replacement question ID in '+id);
 if(introducedPrompts.some(prompt=>!prompt||legacyPrompts.has(prompt)) ||
    new Set(introducedPrompts).size!==introducedPrompts.length)
  throw Error('Reused or blank replacement question prompt in '+id);
 return {introducedQuestionIds,legacyIDs};
}
function plan(root=path.resolve(__dirname,'..')){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(x=>x[1].split('?')[0]).filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const win={BAContent:{}};
 for(const file of scripts)new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(win);
 const courses=[];
 const normalize=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
 for(let n=21;n<=25;n++){
  const id='course-'+n,c=win.BAContent[id];
  if(!c)throw Error('Missing '+id);
  const legacy=(c.sectionExams||[]).filter(e=>!e.optional);
  const replacement=(c.sectionExams||[]).find(e=>e.id==='c'+n+'-v138-independent-transfer');
  const validated=validateReplacementBank(legacy,replacement,id);
  const seen=new Map(),duplicate=[];
  for(const exam of legacy)for(const q of exam.questions||[]){
   const p=normalize(q.prompt);
   if(seen.has(p))duplicate.push({questionId:q.id,examId:exam.id,matchedExamId:seen.get(p).examId,matchedQuestionId:seen.get(p).id});
   else seen.set(p,{id:q.id,examId:exam.id});
  }
  const {introducedQuestionIds,legacyIDs}=validated;
  const proposal={
   course:id,legacyRequiredExamCount:legacy.length,
   repeatedLegacyPromptOccurrences:duplicate.length,
   duplicateExamples:duplicate.slice(0,5),
   replacementExamId:replacement.id,
   replacementQuestionIds:introducedQuestionIds,
   replacementIdsDisjointFromLegacy:true,
   replacementPromptsDisjointFromLegacy:true,
   newExamQuestionCount:replacement.questions.length,
   compatibleWithExistingAttempts:legacy.every(e=>e.questions.every(q=>q.id&&Number.isInteger(q.correct))),
   transitionDecision:'NOT_APPROVED_NOT_APPLIED',
   design:{
    existingLearner:'Keep pinned legacy required exam IDs, grade snapshots, completion and credential evidence unchanged.',
    newLearner:'Only after owner signoff, separately version admission/cohort rules; require a new independent exam bank instead of legacy repeated banks.',
    rollback:'Revert cohort policy for newly enrolled learners without rewriting any attempts; explicitly grandfather pre-release attempts and rubrics.',
    requiredTests:['Historical key fingerprint equality','Existing 80% threshold and written rubric preserved','New cohort can graduate using new required assessments','Legacy learner is not forced to retake completed exams','Multi-device version pin persists','Offline merge and cloud conflict resolution','Backward compatible exports']
   },
   legacyRequiredIds:[...legacyIDs]
  };
  courses.push(proposal);
 }
 return {mode:'SHADOW_REPORT_ONLY',cohortPinningImplemented:false,productionRulesChanged:false,
  filesExamined:scripts.length,courses,
  blockers:['Cohort/version pin model and Firebase sync need design and testing','Independent examiner must approve replacement content and threshold','User authorization and iPhone/desktop acceptance are required before enabling the new gate']};
}
if(require.main===module){
 const result=plan();
 if(process.argv.includes('--json'))console.log(JSON.stringify(result,null,2));
 else{
  console.log('# Level 4 required exam migration shadow audit\n');
  console.log('**No grading, student progress, or required exam policy was changed.**\n');
  for(const c of result.courses){
   console.log('## '+c.course);
   console.log('Legacy required exams: '+c.legacyRequiredExamCount);
   console.log('Reused prompt occurrences: '+c.repeatedLegacyPromptOccurrences);
   console.log('Fresh optional replacement: '+c.replacementExamId+' ('+c.newExamQuestionCount+' items)');
   console.log('Transition: '+c.transitionDecision+'\n');
  }
  console.log('## Gate blockers\n');
  for(const b of result.blockers)console.log('- '+b);
 }
}
module.exports={plan,validateReplacementBank};
