/* Level 3 v86 independent model audit: calculations reconstructed without copying lesson solution text.
   This is a broader sampled numeric review, not certification of all authored mathematics. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
const sources=['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js'];
for(const name of sources)vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
const pv=(rate,years)=>(1-(1+rate)**(-years))/rate;
let checks=0;function near(label,actual,expected,tolerance=.015){assert.ok(Number.isFinite(actual)&&Math.abs(actual-expected)<=tolerance,label+': got '+actual+', expected '+expected);checks++;}
function keyed(n,id,value){const e=ctx.window.BAContent['course-'+n].sectionExams.find(x=>x.id===id);assert.ok(e,'Missing exam '+id);const q=e.questions[0];assert.equal(q.options[q.correct],value,'Wrong keyed answer '+id);checks++;}
const math=[
 ['FCFF introductory example',100*.75+20-35-10,50],
 ['Corporate WACC',.6*.11+.4*.06*(1-.25),.084],
 ['Terminal value in year five',80*1.025/(.09-.025),1261.5384615],
 ['Year-five terminal value discounted to present',80*1.025/(.09-.025)/1.09**5,819.91344118],
 ['Adjusted present value',90-100+14-5,-1],
 ['Enterprise common equity bridge',8*24-54-4,134],
 ['Working capital investment',(260-200)*.18,10.8],
 ['M&A integration NPV',210+48-15-6-240,-3],
 ['Covenant proposed leverage',(240+35)/60,4.5833333333],
 ['Strategy competitor retaliation contribution',108000*(128-85)-3000000,1644000],
 ['Strategy five-forces input squeeze',90000*(2-6),-360000],
 ['Strategy entry expected NPV',.35*7+.65*1-4,-.9],
 ['Strategy product differentiation delta',46000*(44+32-18)-50000*44,468000],
 ['Strategy platform subsidy delta',420000*(5-2-1)-300000*(5-1),-360000],
 ['Strategy v80 price break-even unit growth',23/19-1,.2105263158],
 ['Cournot symmetric output',(120-30)/3,30],
 ['Economics procurement blend',.7*(900+.01*2000)+.3*(700+.12*2000),926],
 ['Economics two-part tariff contribution delta',1100*((120-80)*12+900)-1000*((200-80)*12),78000],
 ['Economics outsource opportunity saving',28+6+9-40,3],
 ['Analytics forecast MAE',(10+20+10)/3,13.3333333333],
 ['Analytics forecast MAPE',(10/100+20/120+10/80)/3,.1305555556],
 ['Analytics Bayes alert posterior',(.8*.1)/(.8*.1+.2*.9),.3076923077],
 ['Analytics treatment heterogeneity',((180+60)-(140+90))/2000,.005],
 ['Analytics net retained trial effect',((280-42)-(240-12))*80,800],
 ['Venture preferred payout',Math.max(12,.3*36),12],
 ['Venture staged runway cash',9-3*.6-3*.75,4.95],
 ['Venture founder dilution',7/(7+3+2.5),.56],
 ['International hedge settlement',10*1.12,11.2],
 ['International operating FX contribution at lower rate',(50-36)*1.15-8,8.1],
 ['International subsidiary NPV',6*pv(.10,3)-15,-.0788896],
 ['International v81 FX exposure',80000*(150-90)*1.05/1e6-2,3.04],
 ['AI first-year savings',100000*2-85000-60000,55000],
 ['AI expected resilience net',.12*.4*4000000-180000,12000],
 ['AI human referral economic benefit',100000*18-6000*18-400000,1292000],
 ['AI v81 operating net',120000*5-(260000+120000*.1*9+90000),142000],
 ['Final v79 APV',150-135+3-9,9],
 ['Final v79 pricing contribution',86000*31-80000*35,-134000],
 ['Final v79 monopoly output',(120-40)/4,20],
 ['Final v79 average treatment lift',150/1000-120/1000,.03],
 ['Final v79 preference',Math.max(4,.3*10),4],
 ['Final v79 foreign currency contract',8*1.14,9.12],
 ['Final v79 false negative count',60000*.02,1200],
 ['Final v79 FCFF',60*(1-.25)+12-20-7,30],
 ['Final v79 business unit exit cash lost',8-5,3],
 ['Final v79 positive predictive value',60/(60+240),.2],
 ['Final v79 outsourcing saving',22+5+10-34,3],
 ['New v83 finance APV',13*pv(.11,4)+6/1.11**4-42+2-4,.28417981],
 ['New v83 strategy pricing delta',150000*1.18*(75-51)-150000*(80-51),-102000],
 ['New v83 analytics net campaign',((375-75)-(350-25))*60-2000,-3500],
 ['New v83 venture fully diluted',8/(8+2+2+1.5)*100,59.25925926],
 ['New v83 net euro forward',(9-5)*1.14,4.56],
 ['New v83 AI referral break-even',(150000*4-285000-75000)/(150000*10)*100,16],
];
for(const [label,actual,expected] of math)near(label,actual,expected);
const financeSource=fs.readFileSync('learning/level3-advanced-v73.js','utf8');
assert.ok(financeSource.includes('Present value at year zero is terminal value/(1.09^5)≈$819.91m.'),'Level 3 worked terminal value must match independently discounted result');checks++;
let optimum={value:-Infinity,a:-1,b:-1};for(let a=0;a<=10;a++)for(let b=0;b<=16;b++)if(3*a+2*b<=44){const v=85*a+55*b;if(v>optimum.value)optimum={value:v,a,b};}
near('Integer optimal contribution',optimum.value,1235,0);assert.deepEqual([optimum.a,optimum.b],[10,7]);checks++;
const keyLabels=['About +$0.28m','−$102,000','10 A and 7 B; $1,235','−$3,500','About 59.26%','$4.56m','16%'];
for(let n=14;n<=20;n++)keyed(n,'c'+n+'-v83-exam',keyLabels[n-14]);
const final=ctx.window.BAContent['course-20'].sectionExams.find(e=>e.id==='l3-final-v77-exam');
assert.ok(final&&final.questions.length===16);checks++;
console.log('Level 3 v86 independently reconstructed sampled models: '+checks+' checks passed across finance, strategy, economics, analytics, venture, international and technology.');
