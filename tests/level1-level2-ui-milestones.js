/* node tests/level1-level2-ui-milestones.js
 * Guard the actual student dashboard against accidental removal of the
 * all-course milestone requirement. This is a source contract check, not a
 * substitute for browser acceptance testing. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const source=fs.readFileSync('learning/workspace-v40.js','utf8');
for(const [functionName,requiredCourses,finalId,capId] of [
 ['level1Milestone',6,'l1-final-v39','l1-final-v39-board'],
 ['level2Milestone',7,'l2-final-v55-exam','l2-final-v55-capstone']
]){
 const start=source.indexOf('function '+functionName+'()');
 const end=source.indexOf('\nfunction ',start+9);
 assert(start>=0,'Missing student milestone '+functionName);
 const body=source.slice(start,end<0?source.length:end);
 assert(body.includes('coursesDone=== '+requiredCourses)||body.includes('coursesDone==='+requiredCourses),'All courses must gate '+functionName);
 assert(body.includes(finalId),'Cumulative final missing from '+functionName);
 assert(body.includes(capId),'Executive capstone missing from '+functionName);
 assert(body.includes('examPassed')&&body.includes('examWritten')&&body.includes('cap'),'Written and objective evidence missing from '+functionName);
}
console.log('PASS: Both UI milestones require their full level, final examination, written work and capstone.');
