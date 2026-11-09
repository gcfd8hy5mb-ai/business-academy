/* Level 4 v104: extend short section assessments without changing existing question IDs. */
(function(){'use strict';const cases=[
['21',[['A target has EV $210m, debt $40m and cash $12m. What equity price follows?',['$182m','$262m','$170m','$210m'],0,'210−40+12=182.'],['A promised synergy appears in both operations and IT forecasts. What should the investment committee do?',['Add both','Count once after reconciling owners and cash flows','Ignore all synergies','Increase revenue to offset duplication'],1,'Consolidated benefits should be recognized once.']]],
['22',[['An investment requires $30m now and yields discounted cash inflows of $39m. NPV?',['$69m','−$9m','+$9m','$39m'],2,'39−30=9.'],['A sunk feasibility study was completed last year. Should it enter new project NPV?',['Always','Only when the CFO prefers','As an added recurring charge','No, unless it changes future cash flows'],3,'Already-incurred sunk expenditures do not vary with the current choice.']]],
['23',[['A $100k annual control reduces incident probability by 4 percentage points on $4m loss exposure. Expected annual net gain?',['$60k','$160k','$100k','$260k'],0,'.04×4m−.1m=.06m.'],['Which role provides independent third-line assurance?',['Procurement lead','Internal audit','First-line product manager','Vendor account representative'],1,'Internal audit is the independent third line.']]],
['24',[['20,000 tasks save 15 minutes each at $28/hour. Cash realization is 50%, annual software cost $30k. Net benefit?',['$140k','$70k','$40k','$110k'],2,'20000×15/60×28×.5−30000=40000.'],['Which measurement most directly guards against a false transformation success?',['Presentation slide count','Employee headcount alone','Gross minutes saved alone','Pilot quality and fully realized costs against a control'],3,'A credible evaluation measures quality and actual economic impact.']]],
['25',[['The firm has $80m cash and a $30m reserve. A decision requires $60m cash. Shortfall?',['$10m','$20m','$30m','None'],0,'Deployable cash is 50m; shortage 10m.'],['A projected investment has attractive expected NPV but violates a debt covenant. Board action?',['Ignore the covenant','Arrange compliant funding, resize or decline','Recognize future synergy as cash','Approve unconditionally'],1,'Economic attractiveness does not override enforceable financing limits.']]]];
// Each short exam receives a distinct independently solvable transfer problem.
 // Historic question IDs and correct-option indices remain unchanged so saved attempts remain mapped.
function variant(n,examIndex,topic,base){
 const k=examIndex+1;
 if(n==='21'){
  if(topic===0){const ev=225+15*k,debt=45+5*k,cash=10+2*k,value=ev-debt+cash;return ['An acquisition committee evaluates target '+k+' at $'+ev+'m EV, $'+debt+'m debt and $'+cash+'m unrestricted excess cash. Assuming no other closing adjustments, what is the implied equity consideration?', ['$'+value+'m','$'+(value+80)+'m','$'+(value-12)+'m','$'+ev+'m'],0,'EV-to-equity bridge = '+ev+'−'+debt+'+'+cash+'='+value+'m. Check debt-like items and transaction fees separately.'];}
  return ['During integration review '+k+', the operating team and technology team each claim the same customer-service savings in their independently prepared synergy forecasts. What should the investment committee do before authorizing spending?', ['Recognize both forecasts without reconciliation','Count the cash saving once after checking scope, owners, and timing','Discard all synergy evidence without review','Record the same saving as new revenue'],1,'A shared operating benefit cannot create cash twice. Reconcile operating drivers, dependencies, timing and ownership to prevent double counting.'];
 }
 if(n==='22'){
  if(topic===0){const cost=30+4*k,pv=39+7*k,npv=pv-cost;return ['A capital project in decision round '+k+' costs $'+cost+'m today and has discounted future net cash inflows worth $'+pv+'m. What is the project NPV?', ['$'+(pv+cost)+'m','−$'+npv+'m','+$'+npv+'m','$'+pv+'m'],2,'NPV equals discounted future inflows minus present investment: '+pv+'−'+cost+'=+'+npv+'m, before omitted terminal or financing effects.'];}
  return ['For capital review '+k+', management presents a feasibility report paid for in a prior period. No new cash expenditure arises if the board chooses the project now. Should that historic report expenditure be included as a future incremental NPV cash outflow?', ['Always include prior expenditures','Only if a senior executive requests it','Treat the past expenditure as recurring project capex','No, unless a separate future cash flow changes with today’s decision'],3,'A past irreversible cost is not incremental to a current decision. New remediation or follow-on spending may be relevant if future cash differs by choice.'];
 }
 if(n==='23'){
  if(topic===0){const pp=4+k,loss=4,cost=100+10*k,avoided=pp*40,net=avoided-cost;return ['An enterprise risk committee '+k+' proposes an annual $'+cost+'k control. It reduces incident likelihood by '+pp+' percentage points on a $4m modeled incident severity. What is the annual expected net benefit, in thousands of dollars?', ['$'+net+'k','$'+avoided+'k','$'+cost+'k','$'+(avoided+cost)+'k'],0,'Annual modeled risk reduction is '+pp+'% × $4m = $'+avoided+'k; subtract annual cost of $'+cost+'k to get $'+net+'k. Assumptions are hypothetical.'];}
  return ['Following incident-response review '+k+', the board needs independent third-line assurance regarding the effectiveness of management’s risk controls. Which function should perform this independent evaluation?', ['The vendor selling the control','Independent internal audit','The operating manager who owns the control','The procurement employee who approved the invoice'],1,'Internal audit provides independent third-line assurance; management and risk-control owners remain responsible for designing and operating controls.'];
 }
 if(n==='24'){
  if(topic===0){const tasks=20000+1000*k,minutes=15+k,cost=30000+2000*k,gross=tasks*minutes/60*28*.5,net=gross-cost;const usd=x=>'$'+Math.round(x).toLocaleString('en-US');return ['Transformation pilot '+k+' processes '+tasks.toLocaleString('en-US')+' annual tasks. Automation saves '+minutes+' minutes per task, labor costs $28/hour and only 50% of time is cash-realizable. Annual software support costs '+usd(cost)+'. What is annual expected net cash benefit, to the nearest dollar?', [usd(gross),usd(gross*.5),usd(net),usd(net+cost)],2,'Realizable annual labor value = tasks × minutes ÷ 60 × $28 × 50% = '+usd(gross)+'; subtract '+usd(cost)+' support for net '+usd(net)+'. Confirm actual cash realization.'];}
  return ['A digital operations pilot '+k+' reports substantial task-time savings, but customer complaint rates and employee rework may have increased. Which monitoring approach best tests whether the transformation really improved performance?', ['Count presentation slides produced','Use only the number of employees in the pilot','Report only gross minutes saved','Compare quality and cash-realized total costs with a comparable control'],3,'Demonstrated transformation value needs a credible comparison, observed service quality and actual cash costs, not just gross activity metrics.'];
 }
 if(n==='25'){
  if(topic===0){const cash=80+5*k,reserve=30+2*k,spend=60+6*k,gap=spend-(cash-reserve);return ['Executive allocation scenario '+k+' has $'+cash+'m unrestricted cash, a $'+reserve+'m required liquidity floor, and a proposed $'+spend+'m cash commitment. What is the incremental funding shortfall while protecting the floor?', ['$'+gap+'m','$'+(gap+10)+'m','$'+reserve+'m','No shortfall'],0,'Deployable cash = '+cash+'−'+reserve+'='+(cash-reserve)+'m. The commitment exceeds deployable cash by $'+gap+'m; test actual draw timing and covenants.'];}
  return ['In board scenario '+k+', a strategic investment has a positive modeled NPV but the planned borrowing would breach a binding debt covenant. What action preserves board oversight and financing compliance?', ['Approve regardless of covenant terms','Obtain compliant financing, resize, defer or decline the investment','Recognize unearned future synergy as cash today','Ignore financing constraints until after contract signature'],1,'Economic value alone does not remove a covenant restriction; directors need a feasible, compliant financing and execution plan.'];
 }
 return base;
}
for(const [n,questions] of cases){
 const c=window.BAContent['course-'+n];
 if(!c)throw Error('Course '+n+' absent');
 const short=c.sectionExams.filter(e=>e.id.startsWith('c'+n+'-')&&e.questions.length<3);
 for(let examIndex=0;examIndex<short.length;examIndex++){
  const exam=short[examIndex];
  for(let i=0;i<questions.length;i++){
   const q=variant(n,examIndex,i,questions[i]),id=exam.id+'-v104-q'+(i+1);
   if(exam.questions.some(x=>x.id===id))throw Error('Duplicate question '+id);
   exam.questions.push({id,prompt:q[0],options:q[1],correct:q[2],explanation:q[3],remediation:'Rework the specific fictional scenario with units, a downside and an independently calculated alternative.'});
  }
  exam.minutes+=25;
 }
}
window.BAL4V104={courses:5,questionsAdded:40};})();