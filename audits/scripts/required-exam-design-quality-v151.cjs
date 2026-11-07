/* v151: Exam candidate design-quality structural regression.
 * Run: node audits/scripts/required-exam-design-quality-v151.cjs
 * This is an internal QA screen, NOT independent faculty sign-off.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const dir=path.resolve(__dirname,'../..');
const draft=JSON.parse(fs.readFileSync(path.join(dir,'audits/data/2026-11-04-required-exam-candidates-v148.json'),'utf8'));
const policy=JSON.parse(fs.readFileSync(path.join(dir,'audits/data/2026-11-04-assessment-transition-policy-v150.json'),'utf8'));
const errors=[];
const test=(ok,message)=>{if(!ok)errors.push(message)};
test(draft.status==='NOT ACTIVE'&&policy.candidate.activated===false,'Candidate must never be activated by test or deploy');
test(draft.courses.length===12,'Twelve candidate courses expected');
let questionCount=0,groupCount=0,distractors=0,caseCount=0;const ids=new Set(),prompts=new Set();
for(const course of draft.courses){
 test(course.requiredCandidateApproval&&Object.values(course.requiredCandidateApproval).every(v=>v===false),'Unauthorized academic approval '+course.courseId);
 test(course.caseBackground?.length>110&&course.caseAssurance?.length>80,'Insufficient corporate-case context '+course.courseId);
 for(const exam of course.groups){
  groupCount++;caseCount++;
  test(exam.assessmentDesignStatus==='DRAFT_REVIEW_ONLY','Candidate incorrectly approved '+exam.id);
  test(exam.analyticalAssignment?.length>300,'Insufficient scenario-specific analytical task '+exam.id);
  test(exam.performanceRubric?.length===4&&exam.performanceRubric.reduce((s,r)=>s+r.maxPoints,0)===100,'Missing 100-point rubric '+exam.id);
  test(exam.minimumRequiredEvidence?.length>=4,'Missing evidence list '+exam.id);
  for(const q of exam.questions){
   questionCount++;
   test(!ids.has(q.id),'Duplicate question ID '+q.id);ids.add(q.id);
   test(!prompts.has(q.prompt),'Duplicate exact prompt '+q.id);prompts.add(q.prompt);
   const opts=q.options||[],correct=String(q.correctValue);
   test(opts.length===4&&new Set(opts).size===4,'Invalid option distinctness '+q.id);
   test(Number.isInteger(q.correct)&&opts[q.correct]===correct,'Wrong keyed answer '+q.id);
   const reasons=q.distractorRationales||{};
   test(Object.keys(reasons).length===3,'No three documented misconception rationales '+q.id);
   for(let i=0;i<opts.length;i++)if(i!==q.correct){
    distractors++;
    test(typeof reasons[opts[i]]==='string'&&reasons[opts[i]].length>=20,'Missing plausible mistake description '+q.id+':'+opts[i]);
    test(Number.isFinite(Number(opts[i]))&&Number(opts[i])!==q.correctValue,'Non-numeric/duplicate wrong option '+q.id);
   }
   const [a,b,c]=q.inputs;
   const n=vm.runInNewContext(q.model,{a,b,c,Math},{timeout:1000});
   test(Number.isFinite(n)&&Math.abs(n-q.correctValue)<.00006,'Miscomputed source answer '+q.id);
   test(q.independentTransfer?.length>170,'Transfer exercise too brief '+q.id);
  }
 }
}
test(questionCount===96,'Expected 96 candidate questions');
test(groupCount===27&&caseCount===27,'Expected 27 distinct examination case units');
test(distractors===288,'Expected three distractors for each question');
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',candidateActivation:false,examUnits:groupCount,uniqueQuestionIds:ids.size,distinctPromptTexts:prompts.size,misconceptionRationales:distractors,ungradedExecutiveCases:caseCount,errors},null,2));
if(errors.length)process.exitCode=1;
