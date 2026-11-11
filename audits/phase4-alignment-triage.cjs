/* Triage the 22 apparent no-MCQ alignment gaps by inspecting whether the
 * same outcome also has authored, required written case or portfolio evidence.
 * Maintains original "not externally reviewed" status for all 84 outcomes.
 */
'use strict';
const {generate}=require('./phase4-outcome-mapping.cjs');
function triage(){
 const {outcomes}=generate();
 const flagged=outcomes.filter(o=>o.status==='MANUAL_ALIGNMENT_REQUIRED');
 const records=flagged.map(x=>({
  course:x.course,code:x.code,outcome:x.outcome,
  reason:x.candidateRequiredQuestions.length===0?'NO_LEXICAL_REQUIRED_MCQ':'NO_QUALIFYING_LESSON_OR_MCQ_MATCH',
  lessonEvidence:x.candidateLessons.map(l=>l.id),
  writtenCaseEvidence:x.candidateWrittenTasks.map(w=>w.id),
  candidateAssessmentType:x.candidateWrittenTasks.length?'REQUIRED_WRITTEN_CASE_OR_PORTFOLIO':'NONE_IDENTIFIED',
  nextReviewerAction:x.candidateWrittenTasks.length
    ?'Inspect the case or portfolio rubric for direct measurement; independently mark original work; do not require MCQ coverage for synthesis-only outcomes.'
    :'Author and independently verify an objective or written direct assessment with a rubric.',
  independentApproval:'PENDING'
 }));
 return {totalOutcomeCount:outcomes.length,originalManualTriage:flagged.length,
  casesWithCandidateRequiredWrittenEvidence:records.filter(r=>r.writtenCaseEvidence.length&&r.lessonEvidence.length).length,
  noCandidateWrittenEvidence:records.filter(r=>!r.writtenCaseEvidence.length||!r.lessonEvidence.length).length,
  records,
  limitation:'Written case candidate links are lexical matches and mastery-required assignments. They do not show actual student competency or independent marking.'};
}
if(require.main===module){
 const r=triage();
 if(process.argv.includes('--json'))console.log(JSON.stringify(r,null,2));
 else{
  console.log('# Business Academy — Manual outcome alignment triage\n');
  console.log('Previously flagged: '+r.originalManualTriage+'. With candidate lesson and required written case: '+r.casesWithCandidateRequiredWrittenEvidence+'. No candidate written evidence: '+r.noCandidateWrittenEvidence+'.\n');
  console.log('**No outcome has been externally reviewed; matching IDs alone do not establish attainment.**\n');
  for(const v of r.records){
   console.log('## '+v.code+': '+v.outcome);
   console.log('Candidate lessons: '+(v.lessonEvidence.join(', ')||'none'));
   console.log('Candidate required written cases: '+(v.writtenCaseEvidence.join(', ')||'none'));
   console.log('Action: '+v.nextReviewerAction+'\n');
  }
 }
}
module.exports={triage};
