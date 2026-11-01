/* Level 3 graduation dashboard and route contracts. */
const fs=require('node:fs'),assert=require('node:assert/strict'),vm=require('node:vm');
const s=fs.readFileSync('learning/workspace-v40.js','utf8');
for(const token of ["function level3Milestone()","c.id==='course-20'?level3Milestone()","['course-06','course-13','course-20'].includes(c.id)","'Level 3 Final'","all.length===7&&coursesDone===7&&examPassed&&examWritten&&capReviewed","'l3-final-v77-exam'","'l3-final-v77-capstone'"])assert.ok(s.includes(token),'Missing Level 3 milestone contract: '+token);
assert.ok(s.includes("c.id==='course-13'?level2Milestone()"),'Level 2 graduation route lost');
assert.ok(s.includes("level1Milestone()"),'Level 1 graduation route lost');
for(const id of ['l1-final-v39','l2-final-v55-exam','l3-final-v77-exam'])assert.ok(s.includes("'"+id+"'"),'Missing exam focus '+id);
for(const id of ['l1-final-v39-board','l2-final-v55-capstone','l3-final-v77-capstone'])assert.ok(s.includes("'"+id+"'"),'Missing portfolio focus '+id);
assert.ok(s.includes(".includes(b.id))-Number("),'Final sections must be sorted to top');
new vm.Script(s,{filename:'workspace-v40.js'});
console.log('Level 3 final dashboard and legacy graduation routes verified');
