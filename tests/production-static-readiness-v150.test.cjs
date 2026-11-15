'use strict';
/* v150: deployment-artifact static smoke checks. This is NOT physical-device/browser testing. */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),html=read('index.html');
const scripts=[...html.matchAll(/<script\s+[^>]*src="([^"]+)"[^>]*><\/script>/g)].map(x=>x[1]);
const localScripts=scripts.map(x=>x.split('?')[0]).filter(x=>!/^https?:\/\//.test(x));
const css=[...html.matchAll(/<link\s+[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)].map(x=>x[1].split('?')[0]);
test('every locally referenced classic/ES-module script and stylesheet exists at its referenced path',()=>{
 assert.ok(localScripts.length>30,'unexpectedly sparse script manifest');
 for(const filename of [...localScripts,...css])assert.ok(fs.existsSync(path.join(root,filename)),'missing referenced asset '+filename);
});
test('production script loading orders curriculum and fairness checks before the active workspace',()=>{
 const i=target=>localScripts.findIndex(x=>x===target);
 for(const f of ['learning/core-v110.js','learning/content.js','learning/level1.js','learning/level1-short-lessons-depth-v142.js','learning/level4-assessment-errata-v143.js','learning/assessment-fairness-v148.js','learning/workspace-v46.js'])assert.ok(i(f)>=0,'missing '+f);
 assert.ok(i('learning/core-v110.js')<i('learning/content.js'));
 assert.ok(i('learning/content.js')<i('learning/level1.js'));
 assert.ok(i('learning/level1.js')<i('learning/level1-short-lessons-depth-v142.js'));
 assert.ok(i('learning/level4-assessment-errata-v143.js')<i('learning/assessment-fairness-v148.js'));
 assert.ok(i('learning/assessment-fairness-v148.js')<i('learning/workspace-v46.js'));
 assert.ok(i('learning/workload-audit-v130.js')<i('learning/workspace-v46.js'));
});
test('all locally referenced nonmodule JavaScript files parse in the current Node VM',()=>{
 let n=0;for(const raw of scripts){
  const filename=raw.split('?')[0];if(/^https?:\/\//.test(filename))continue;
  if(/type="module"/.test(html.slice(Math.max(0,html.indexOf(raw)-130),html.indexOf(raw))))continue;
  assert.doesNotThrow(()=>new vm.Script(read(filename),{filename}),filename);n++;
 }
 assert.ok(n>30);
});
test('production entry includes viewport configuration, app mount and explicit assessment resources',()=>{
 assert.match(html,/<meta\s+name="viewport"/);assert.match(html,/<div id="app"><\/div>/);assert.ok(localScripts.includes('learning/assessment-fairness-v148.js'));
 assert.ok(localScripts.includes('learning/level3-source-verified-cases-v145.js'));
 assert.ok(localScripts.includes('learning/level4-alternative-exams-v140.js'));
});
