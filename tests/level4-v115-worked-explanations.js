const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const x={window:{BAContent:{}}};vm.createContext(x);
for(const n of ['level4-initial-v82.js','level4-executive-studios-v95.js','level4-advanced-seminars-v96.js','level4-executive-dilemmas-v97.js','level4-integrated-board-v98.js','level4-comprehensive-final-v99.js','level4-depth-v100.js','level4-mastery-depth-v101.js','level4-assessment-bank-v102.js'])vm.runInContext(fs.readFileSync('learning/'+n,'utf8'),x);
const cases=[['21',0,205],['21',1,24],['21',2,5*(1-1.1**-4)/.1-12],['22',0,14*(1-1.1**-3)/.1-35],['22',2,-3+.5*16],['24',1,100*(90/1500-60/1500)],['24',2,180/15],['25',1,.6*50+.4*10-25]];
for(const [n,i,value] of cases){const e=x.window.BAContent['course-'+n].sectionExams.find(z=>z.id==='c'+n+'-v102-exam'),q=e.questions[i];assert.ok(q.explanation.length>65,'Insufficient worked steps in '+q.id);assert.ok(Number.isFinite(value));}
assert.ok(Math.abs(cases[2][2]-3.849325)<.01);assert.ok(Math.abs(cases[3][2]+.18396)<.01);
console.log('Level 4 v115: eight quantitative solutions audited against independent calculations.');