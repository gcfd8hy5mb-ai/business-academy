/* Level 4 v138 — new independent optional executive transfer assessment.
 * Historical required c21–c25 v95–v104 exams remain byte-for-byte unchanged,
 * including repeated legacy prompts and archived attempt fingerprints.
 * Distinct IDs and fresh problems avoid relying on previously memorized items.
 * Optional: must not change required mastery, credits or historic grades.
 */
(function(){'use strict';
const problemSets=[
 {n:'21',name:'Acquisition integration and economic value',written:'A fictional multinational board considers acquiring an industrial services platform. Reconcile enterprise to equity value, separately value uncertain synergies, stress both integration costs and revenue retention, compare deferral and staged integration, and set verifiable funding and regulatory conditions.',
  questions:[
   ['A buyer offers $610m enterprise value. The target has $170m financial debt, $25m unrestricted excess cash and $15m additional debt-like liabilities not included in EV. What is equity consideration in USD millions?',['470','430','450','610'],2,'Equity=610−170+25−15=$450m. Exclude only liabilities not already counted and validate transaction closing adjustments.'],
   ['Post-acquisition savings are $11m at each of three year-ends, discounted at 10%; integration costs $15m immediately. What is modeled net synergy value in USD millions, rounded to two decimals?',['12.36','27.36','−3.64','15.00'],0,'PV of savings is 11×(1/1.1+1/1.1²+1/1.1³)≈27.36; subtract $15m integration cash for $12.36m.'],
   ['A proposed acquisition has $32m modeled NPV, but $8m of synergy was double counted and no other correction is required. What corrected NPV in USD millions follows?',['40','16','8','24'],3,'Remove the duplicated $8m once from $32m modeled value to obtain $24m. Also check whether dependent synergies share costs.'],
   ['The buyer has $90m unrestricted cash, must retain $35m as liquidity, and needs $80m in closing cash. What extra financing is required in USD millions?',['45','25','55','10'],1,'Cash deployable above reserve is 90−35=55; closing cash need 80 leaves a $25m funding gap before fees.']
  ]},
 {n:'22',name:'Capital allocation and project reversibility',written:'Prepare an investment-committee model of a capacity-expansion proposal with correlated demand and construction-cost stress, cash floors, staged funding, and a justified capital hurdle.',
  questions:[
   ['An investment costs $55m today and pays $25m at each of three year-ends. At a 10% discount rate, what is NPV in USD millions, rounded to two decimals?',['7.17','−7.17','20.00','62.17'],0,'NPV=−55+25×(1/1.1+1/1.1²+1/1.1³)≈$7.17m. Confirm receipt dates and project-specific risk.'],
   ['The same initial investment costs $55m, but annual cash falls to $21m and the discount rate increases to 13%. Which decision interpretation is correct?',['The original positive NPV guarantees approval','Lower cash and higher discounting increase project NPV','Recompute NPV; the joint downside can make the investment value destroying','Prior feasibility expense must be added as a new cash outflow'],2,'Annual receipts fall at the same time that future cash is discounted more heavily. NPV must be recomputed, not inferred from the base case.'],
   ['Treasury holds $105m cash, protects a $40m operating reserve, and faces an $84m immediate project payment. What funding shortfall remains in USD millions?',['9','19','29','44'],1,'Available cash=105−40=$65m, so the $84m commitment requires $19m of compliant additional funding.'],
   ['A $5m feasibility study was completed and paid for two years before the current project approval. With no new follow-on study spending, how should its historic payment affect incremental NPV?',['Treat it as today’s capex','Deduct it annually','Add it to annual depreciation cash','Exclude it as a sunk cost'],3,'Past committed spending cannot change with the present go/no-go decision, though future remediation and incremental fees can.']
  ]},
 {n:'23',name:'Board risk and internal assurance',written:'Develop a risk-committee case comparing incident-control returns, reserve liquidity, incident correlation, and independent audit assurance under a joint stressed loss and cost scenario.',
  questions:[
   ['A $130,000 annual control reduces incident likelihood by 5 percentage points on a $5m loss severity. What is expected annual net benefit, in USD thousands?',['250','120','130','−120'],1,'Expected avoided loss=5%×$5m=$250k; subtract annual control cost $130k for $120k net benefit.'],
   ['If the same control reduces likelihood by only 3 percentage points rather than 5, with annual cost unchanged, what is expected annual net benefit, in USD thousands?',['20','150','−20','130'],0,'Expected avoided loss falls to 3%×$5m=$150k. Less $130k cost leaves only $20k, before risk correlation.'],
   ['A corporate risk committee reports $560m of debt, $110m of unrestricted excess cash and $150m EBITDA. What is simplified net leverage?',['4.47×','2.27×','3.00×','0.73×'],2,'Net leverage=(560−110)/150=3.00 times. Covenant definitions may differ and require contractual review.'],
   ['The business owner designed a control and wants to certify its independent effectiveness after implementation. Who should supply third-line assurance?',['The control owner','The software vendor','The procurement team','Independent internal audit'],3,'Independent internal audit provides third-line assurance. Operational ownership remains with business management.']
  ]},
 {n:'24',name:'Transformation cash realization and evaluation',written:'Test a digital transformation proposal under a joint implementation delay and cash-realization shock, with quality and employee-impact controls and an alternative pilot.',
  questions:[
   ['Automation saves 8 minutes across 50,000 cases each year. Labor is $30/hour, 70% of capacity value converts to cash, and recurring platform expense is $100,000. Annual modeled net cash benefit in USD?',['40000','140000','100000','240000'],0,'Realized annual benefit=50,000×8/60×$30×70%=$140,000. Subtract $100,000 platform expense to reach $40,000.'],
   ['If platform cost rises from $100,000 to $120,000 while other assumptions remain unchanged, what is annual modeled net cash benefit in USD?',['40000','140000','−20000','20000'],3,'Gross realized savings stay $140,000, but increased support expense of $120,000 reduces net benefit to $20,000.'],
   ['In a randomized pilot, treatment succeeds in 1,400 of 10,000 tasks and control in 1,200 of 10,000. What absolute performance increase in percentage points is observed?',['14','2','20','12'],1,'Treatment is 14%, control 12%; the difference is 2 percentage points, not a 20-point change.'],
   ['A rollout reduces reported processing time but increases rework and customer complaints. Which evidence should govern expansion?',['Raw minutes saved only','Number of dashboards created','Quality-adjusted cash results versus a credible control','Gross automation coverage'],2,'The board needs cash-realized incremental benefits and service-quality outcomes against a relevant comparison, not only activity metrics.']
  ]},
 {n:'25',name:'C-suite capital and liquidity tradeoffs',written:'Integrate liquidity protection, constrained capital allocation, expected risk reduction and debt covenant compliance into a one-page executive recommendation and linked quantitative model.',
  questions:[
   ['A corporate treasury has $145m unrestricted cash, requires a $60m reserve, and faces a $110m immediate investment. What financing gap remains, in USD millions?',['15','25','35','50'],1,'Deployable cash=145−60=$85m; investment of $110m requires $25m extra financing before transaction costs.'],
   ['A board has an indivisible $70m investment budget. Project A costs $42m and creates $12m NPV; B costs $35m and creates $11m NPV. Neither can be divided. Maximum feasible project NPV in USD millions?',['23','11','12','0'],2,'A+B costs $77m and breaches the budget. A alone produces $12m NPV, greater than B’s $11m.'],
   ['Annual incident probability can be reduced by 6 percentage points on $8m severity, at $150,000 annual control cost. What is expected annual net benefit in USD?',['330000','480000','150000','−330000'],0,'Modeled expected loss avoided=0.06×$8m=$480,000; less $150,000 annual control cost leaves $330,000.'],
   ['An economically attractive proposal requires borrowing beyond a binding covenant. Which board action is responsible?',['Approve the project and cure later','Book planned savings as current cash','Ignore the covenant if expected NPV is positive','Secure permitted financing, resize or defer, or decline'],3,'Projected value does not override debt agreements. Test lawful financing options and decision thresholds before authorization.']
  ]}
];
for(const item of problemSets){
 const c=window.BAContent['course-'+item.n];
 if(!c)throw Error('Missing Level 4 course '+item.n);
 c.sectionExams ||= [];
 const id='c'+item.n+'-v138-independent-transfer';
 if(c.sectionExams.some(e=>e.id===id))continue;
 c.sectionExams.push({
  id,title:'Independent executive transfer — '+item.name,optional:true,minutes:0,suggestedMinutes:90,
  instructions:'Optional independent assessment (suggested 90 minutes, excluded from required graduation hours). The numerical checks are auto-scored; the written decision case is self-assessed pending qualified external review.',
  questions:item.questions.map((q,i)=>({id:id+'-q'+(i+1),prompt:q[0],options:q[1],correct:q[2],explanation:q[3],remediation:'Independently reconstruct the fictional inputs, computation, timing, decision constraint and alternate action.'})),
  written:item.written+' Give a worked joint two-variable stress, a quantitatively feasible counterproposal, a cash-floor test, actual-versus-fictional source separation and a board reversal threshold. External human grading has not occurred.',
  rubric:['Numerical model and unit accuracy','Reproducible joint downside and decision threshold','Alternative feasible strategy and liquidity','Source and inference integrity','Board governance, ethics and clear rationale']
 });
}
window.BAL4V138={courses:5,optionalExams:5,questions:20,legacyBankUnchanged:true,certified:false};
})();