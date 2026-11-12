/* Internal academic examiner calibration data — NOT loaded by the public application.
 * All sample marks are simulated training examples, not real student or examiner grades.
 * Retains the existing optional exam IDs; does not grade, persist or certify anyone.
 */
'use strict';
const criteria=[
 {id:'quant',label:'Quantitative reconstruction and accuracy',max:30},
 {id:'stress',label:'Two-variable downside, alternatives and thresholds',max:25},
 {id:'evidence',label:'Evidence, causal inference and limitations',max:20},
 {id:'governance',label:'Executive governance and practical feasibility',max:15},
 {id:'synthesis',label:'Independent synthesis and clear communication',max:10}
];
const courses={
 'course-07':{
  examId:'c07-v128-independent-exam',discipline:'Accounting and control',
  anchors:[{result:97,unit:'USD millions CFO',calculation:'104+16-19-12+8'},{result:40,unit:'USD millions goodwill',calculation:'360-(445-125)'}],
  transfer:'Increase receivable collection days and fair-value liabilities jointly while separately identifying their cash and goodwill effects.',
  diagnostic:'Acquisition fair-value liabilities affect goodwill; slower collections affect working capital and liquidity. They are not automatically the same transaction.',
  evidence:'Auditable receivable aging, acquisition fair-value workings, dates, policy basis and documented financing restrictions.',
  challenge:'Distinguish cash conversion from noncash goodwill; stress debt headroom and offer a staged or negotiated acquisition alternative.'
 },
 'course-08':{
  examId:'c08-v128-independent-exam',discipline:'Corporate finance and capital allocation',
  anchors:[{result:2.76,unit:'USD millions NPV, rounded to 2 decimals',calculation:'-42+18/1.1+18/(1.1**2)+18/(1.1**3)'},{result:365,unit:'USD millions equity value',calculation:'510-175+30'}],
  transfer:'Increase discount rate and reduce yearly receipts simultaneously; show the reserve-aware affordability condition.',
  diagnostic:'Do not treat enterprise value as cash or undiscounted receipts as NPV; distinguish investment approval from financing feasibility.',
  evidence:'Year-end cash timing, discount-rate provenance, restricted cash, debt covenants and a quantified competing investment.',
  challenge:'Fictional joint stress: 16 in annual receipts, 12% discount rate, no terminal proceeds, resulting NPV approximately -3.57 million.'
 },
 'course-09':{
  examId:'c09-v128-independent-exam',discipline:'Performance management and reporting',
  anchors:[{result:71500,unit:'USD unfavorable variable cost variance',calculation:'26000*(33.75-31)'},{result:15.5,unit:'USD millions residual income',calculation:'43-250*0.11'}],
  transfer:'Combine a unit-cost increase and sales-volume decline; separate allocated overhead from avoidable costs.',
  diagnostic:'A positive EBIT figure can coexist with weak residual income, and a cost variance cannot alone prove managerial causation.',
  evidence:'Volume, price, unit cost, invested-capital definition, hurdle rate and applicable cost-allocation policy.',
  challenge:'Compute the joint contribution change and identify the incremental return needed to justify capacity commitments.'
 },
 'course-10':{
  examId:'c10-v128-independent-exam',discipline:'Operational investment and liquidity',
  anchors:[{result:16,unit:'USD millions funding gap',calculation:'121-(170-65)'},{result:65,unit:'USD millions undiscounted 5-year cash contributions',calculation:'13*5'}],
  transfer:'Delay customer cash collections and reduce expected annual contribution together; calculate a cash-floor threshold.',
  diagnostic:'65 million undiscounted receipts is not NPV and does not prove the 121 million investment is value creating.',
  evidence:'Monthly cash-flow timing, minimum operating cash, covenant headroom, project milestones and a comparable phased option.',
  challenge:'Stress receivables and contribution together, separating book profit, cash conversion and debt-service timing.'
 },
 'course-11':{
  examId:'c11-v128-independent-exam',discipline:'Analytics, experimentation and forecasting',
  anchors:[{result:4,unit:'percentage-point conversion uplift',calculation:'(240/1500-180/1500)*100'},{result:50,unit:'percent relative MAE deterioration',calculation:'(27-18)/18*100'}],
  transfer:'Combine a demand miss with model-quality deterioration; test whether forecast precision improves realizable contribution.',
  diagnostic:'Conversion-rate differences are not automatic causal proof; precision and mean absolute error evaluate different metrics.',
  evidence:'Randomization, selection and leakage checks, denominator, measurement window, confidence and business cost of errors.',
  challenge:'Design a holdout or rollout gate that separates inference uncertainty from a projected financial return.'
 },
 'course-12':{
  examId:'c12-v128-independent-exam',discipline:'Workforce investment and retention',
  anchors:[{result:597000,unit:'USD modeled annual net benefit',calculation:'38*24000-315000'},{result:6,unit:'percentage-point attrition reduction',calculation:'13-7'}],
  transfer:'Reduce causal departures avoided and raise implementation cost jointly; derive a break-even departures threshold.',
  diagnostic:'The original 38 avoided departures are a model assumption, not established causal outcomes or guaranteed realized cash savings.',
  evidence:'Attrition cohorts, replacement-cost components, credible control group, employee experience and spending realization.',
  challenge:'Evaluate the minimum avoided departures at a revised program cost and describe a fair employee-impact safeguard.'
 },
 'course-13':{
  examId:'c13-v128-independent-exam',discipline:'Managerial economics and capacity',
  anchors:[{result:490000,unit:'USD total contribution',calculation:'14000*(94-59)'},{result:8000,unit:'whole break-even units',calculation:'352000/(110-66)'}],
  transfer:'Cut selling price, raise unit cost and limit capacity; rank products by contribution per binding machine hour.',
  diagnostic:'Revenue is not contribution and aggregate unit margin is not the optimal bottleneck allocation.',
  evidence:'Demand elasticity, relevant costs, feasible production mix, external customer commitments and contract restrictions.',
  challenge:'Quantify a scarce-resource shadow price, credible competitor response and board stop trigger.'
 }
};
const sampleReviews=[
 {id:'c08-sample-strong',courseId:'course-08',synthetic:true,band:'strong',scores:{quant:27,stress:22,evidence:17,governance:13,synthesis:9},
  evidence:'NPV and equity bridge are traceable; 12%/16m joint stress produces negative NPV. Compares staged investment and deferral but needs independent verification of covenant and forecast sources.',
  sampleExcerpt:'The three-year $18m receipts give $2.76m positive NPV at 10%, but $16m receipts at 12% produce approximately -$3.57m. I recommend a staged approval only after verifying available cash above the reserve and debt covenants.',
  reviewerStatus:'SYNTHETIC_CALIBRATION_ONLY'},
 {id:'c08-sample-borderline',courseId:'course-08',synthetic:true,band:'developing',scores:{quant:25,stress:10,evidence:11,governance:7,synthesis:7},
  evidence:'Two baseline calculations are correct but no recomputed joint downside, explicit cash reserve threshold or quantified alternative is provided.',
  sampleExcerpt:'NPV is $2.76m and equity value is $365m, so approve the project. Higher rates may reduce NPV, and the board should monitor cash.',
  reviewerStatus:'SYNTHETIC_CALIBRATION_ONLY'},
 {id:'c08-sample-insufficient',courseId:'course-08',synthetic:true,band:'insufficient',scores:{quant:8,stress:2,evidence:4,governance:3,synthesis:5},
  evidence:'Conflates enterprise value and investable cash; misses discounting and offers no downside, alternative or governance control.',
  sampleExcerpt:'Invest because $18m per year over three years exceeds $42m and enterprise value is $510m, so the company can afford it without risk.',
  reviewerStatus:'SYNTHETIC_CALIBRATION_ONLY'}
];
function validateScorecard(scores){
 if(!scores||typeof scores!=='object'||Array.isArray(scores))return false;
 const keys=Object.keys(scores).sort(),required=criteria.map(c=>c.id).sort();
 return JSON.stringify(keys)===JSON.stringify(required)&&criteria.every(c=>Number.isInteger(scores[c.id])&&scores[c.id]>=0&&scores[c.id]<=c.max);
}
function total(scores){
 if(!validateScorecard(scores))throw new Error('Invalid criterion scores');
 return criteria.reduce((n,c)=>n+scores[c.id],0);
}
// This is purely a data-validation utility; never assigns grades to student work.
module.exports={version:1,scope:'internal-review-only',criteria,courses,sampleReviews,validateScorecard,total};
