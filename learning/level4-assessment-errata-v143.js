/* v143: transparent academic erratum for the historical optional v105 M&A assessment.
 * Historical IDs, grading keys, scores and submissions are intentionally left intact.
 * Students are directed to a separate, mathematically correct, optional form.
 */
(function(){'use strict';
 const c=window.BAContent['course-21'];if(!c)throw Error('Missing Level 4 M&A course');
 const old=(c.sectionExams||[]).find(e=>e.id==='c21-v105-independent');
 if(!old)throw Error('Expected legacy independent examination');
 const legacyQuestion=old.questions.find(q=>q.id==='c21-v105-independent-q3');
 if(!legacyQuestion||!legacyQuestion.prompt.includes('$9m of annual operational savings'))throw Error('Historical question changed: re-audit before applying erratum');
 if(legacyQuestion.options[legacyQuestion.correct]!=='$6m')throw Error('Historical keyed answer changed: re-audit');
 const note='ACADEMIC ERRATUM v143: Historical question 3 has a flawed answer key. If $9m of operational savings ALREADY INCLUDES the $3m also listed in IT, the unique consolidated benefit is $9m (not $6m). Historic scores remain unchanged. Use the optional corrected assessment (v143) for valid independent practice.';
 if(!String(old.instructions||'').includes('ACADEMIC ERRATUM v143'))old.instructions=[old.instructions||'',note].filter(Boolean).join(' ');
 const id='c21-v143-corrected-evidence';
 if(!c.sectionExams.some(e=>e.id===id)){
  const rows=[
  ['Operations forecasts $9m annual savings, including $3m also reported by IT. Without any other savings, what distinct annual total belongs in the consolidated synergy model?',['$12m','$9m','$6m','$3m'],1,'The $3m is a subset of $9m, not an additional saving. Counting the operating total once produces $9m.'],
  ['A quoted enterprise value is $330m, financial debt $70m, freely available cash $20m and separately identified debt-like obligations $15m. Assuming no other adjustments, equity consideration equals?',['$265m','$245m','$280m','$315m'],0,'Equity value equals EV less financial debt, plus excess cash, less previously omitted debt-like obligations: 330−70+20−15=$265m.'],
  ['A new synergy creates $8m year-end cash for four years at 10% and needs $10m today. What is the approximate synergy NPV?',['$32.00m','+$15.36m','+$22.00m','−$10.00m'],1,'The 4-year annuity factor at 10% is about 3.169865: 8×3.169865−10≈$15.36m.'],
  ['An acquisition costs $210m, while target standalone PV is $185m, independent synergy PV is $35m and current integration spending is $8m. What is estimated incremental NPV?',['+$10m','−$2m','+$2m','+$35m'],2,'Total modeled value is 185+35−8−210=$2m, before unmodeled transaction and financing risks.'],
  ['A division has independently normalized recurring EBITDA $25m and its quoted enterprise value is $250m. Which multiple follows?',['8×','10×','12×','25×'],1,'EV/EBITDA=250/25=10×. No conclusion about appropriate bid price follows without cash flow, growth and risk evidence.']
  ];
  c.sectionExams.push({id,title:'Corrected independent M&A evidence and synergy accounting (v143)',optional:true,minutes:120,instructions:'Fictional scenarios. Corrected alternative to historical v105 question 3; preserves all historical attempts and does not change graduation requirements.',questions:rows.map((q,i)=>({id:id+'-q'+(i+1),prompt:q[0],options:q[1],correct:q[2],explanation:q[3],remediation:'Identify which benefits are subsets, model cash timing and reconcile independent valuation components before selecting an answer.'})),written:'Write a 700–1,000-word board diligence note: reconcile synergy owners, timing, overlapping initiatives, and a financing downside. Explain why historical v105 question 3 was wrongly keyed.',rubric:['Avoid double counting and derive each numeric result','Identify primary evidence and assumption boundaries','Evaluate a feasible competing decision','Provide governance challenge and reversal threshold']});
 }
 window.BAV143={historicalQuestionPreserved:true,originalGradingPreserved:true,correctedOptionalExam:id,erratum:'v105 optional M&A question 3'};
})();