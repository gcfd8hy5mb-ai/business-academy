/* node tests/level1-level2-final-math.js
Independent arithmetic checks for selected core corporate models across both levels.
This is a focused audit, not verification of every authored answer. */
'use strict';
const assert=require('node:assert/strict');
const close=(actual,expected,label,tol=0.015)=>assert.ok(Math.abs(actual-expected)<=tol, label+': expected '+expected+' got '+actual);
const sum=(...x)=>x.reduce((a,b)=>a+b,0);
// Financial accounting: purchase accounting, operating cash flows, and economic profit.
close(240-(310-105),35,'Acquisition goodwill');
close(sum(95,18,-24,-11,9),87,'Indirect operating cash flow');
close(150*(1-.25)/900*100,12.5,'ROIC percent');
close(150*(1-.25)-900*.1,22.5,'Residual economic profit');
// Managerial accounting: transfer opportunity costs, capacity and variances.
close((33-30)*4000,12000,'Variable spending variance');
close(120/4,30,'Product X per bottleneck hour');
close(75/2,37.5,'Product Y per bottleneck hour');
close(45+(80-45),80,'Capacity-constrained transfer price');
// Marketing: CLV timing, randomized lift and contribution.
close(120*.8/(1.1-.8)-90,230,'Discounted acquisition CLV');
close((260/2000-220/2000)*100,2,'Absolute conversion lift points');
close((260-200)*45-2000,700,'Incremental campaign net contribution');
// Sales: discounting and deal reserve.
close(-1+2.5/1.1+2.5/1.1**2,3.33884,'Two-year contract NPV');
close(8-1.4+.5,7.1,'Negotiated deal contribution');
// Operations: EOQ, capacity-constrained freight and safety-stock model.
close(Math.sqrt(2*24000*120/6),979.7959,'EOQ');
close(600*4+400*7,5200,'Least-cost variable transport');
close(150*4+1.645*30*Math.sqrt(4),698.7,'95% cycle-service reorder point');
// Leadership: retention economics and treatment-control difference.
close(40*22000-700000,180000,'Modeled retention net benefit');
close((12-18)-(14-16),-4,'Turnover DiD percentage points');
// Tax and compliance: hypothetical arithmetic only.
close(60*.25+40*.18,22.2,'Illustrative current tax in millions');
close((.07-.02)*7000000-240000,110000,'Discretionary control net expected benefit');
console.log('PASS: 20 independent arithmetic assertions; broader academic verification still required.');
