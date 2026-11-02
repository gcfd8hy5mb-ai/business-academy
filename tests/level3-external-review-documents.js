/* Level 3 independent-review documentation integrity. No external grading is simulated. */
const fs=require('node:fs'),assert=require('node:assert/strict');
const read=p=>fs.readFileSync(p,'utf8');
const handoff=read('docs/level3-reviewer-handoff-v1.md');
const faculty=read('docs/level3-independent-faculty-assessment-packet-v1.md');
const submission=read('docs/level3-review-submission-template.md');
const scorecard=read('docs/level3-external-grader-scorecard.md');
const names=['Corporate Finance','Competitive Strategy','Managerial Economics','Business Analytics','Entrepreneurship','International Business','Technology'];
for(let n=14;n<=20;n++){
 assert.match(handoff,new RegExp('\\| '+n+' \\|'),'Missing reviewer tracking row for '+n);
 assert.match(faculty,new RegExp('Course '+n+'\\s*[—-]'),'Missing subject-specific evaluation brief '+n);
}
for(const name of names)assert.ok(handoff.includes(name),'Missing named discipline '+name);
for(const [name,weight] of [['technical accuracy',30],['reasoning',25],['research',20],['governance',15],['communication',10]]){
 assert.ok(faculty.toLowerCase().includes(name),'Faculty packet missing '+name);
 assert.ok(scorecard.toLowerCase().includes(name),'Scorecard missing '+name);
 assert.ok(scorecard.includes(String(weight)),'Scorecard missing weight '+weight);
}
assert.match(submission,/reproducible/i);
assert.match(submission,/provenance/i);
assert.match(submission,/assistance disclosure/i);
assert.match(scorecard,/second reviewer/i);
assert.match(handoff,/no qualified reviewer assignments/i);
assert.match(scorecard,/not university credit/i);
assert.match(handoff,/not confer course credit/i);
console.log('Level 3 reviewer handoff, seven briefs, scoring categories and evidence limitations verified.');
