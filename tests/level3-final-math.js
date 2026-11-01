/* Independent calculations for final Level 3 executive exam v79. */
const assert=require('node:assert/strict');const near=(actual,expected,tol=1e-8)=>assert.ok(Math.abs(actual-expected)<=tol,`Got ${actual}, expected ${expected}`);
near(150-135+3-9,9);
near(86000*31-80000*35,-134000);
near((120-40)/4,20);
near(150/1000-120/1000,.03);
near(Math.max(4,.3*10),4);
near(8*1.14,9.12);
near(60000*.02,1200);
near(60*(1-.25)+12-20-7,30);
near(8-5,3);
near(60/(60+240),.20);
near((22+5+10)-34,3);
const pv=(1-Math.pow(1.1,-4))/.1;near(pv,3.169865446,1e-8);
console.log('Level 3 independent final mathematics passed: 12 checks');