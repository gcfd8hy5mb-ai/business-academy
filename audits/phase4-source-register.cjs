/* Five-level external reference and source-evidence register.
 * This inventories authored links and their context; it does NOT assert
 * URLs are live, licensed, academically validated, or original sources.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
function manifest(root=path.resolve(__dirname,'..')){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(m=>m[1].split('?')[0]).filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const w={BAContent:{}};
 for(const file of scripts)new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(w);
 const rows=[],linkIssues=[];
 for(let n=1;n<=26;n++){
  const id='course-'+String(n).padStart(2,'0'),c=w.BAContent[id];
  if(!c)throw Error('Missing authored course '+id);
  const readings=c.readings||[];
  for(let i=0;i<readings.length;i++){
   const r=readings[i],url=String(r.url||''),title=String(r.title||r.description||'Untitled reading').slice(0,180);
   const current={course:id,index:i,id:r.id||null,title,url,
    linked:!!url,publicationDate:r.publicationDate||r.date||null,
    sourceType:!url?'unlinked-learning-activity':/sec\.gov\/Archives\//i.test(url)?'issuer-primary-filing':/\.gov\//i.test(url)?'government-source':/ifrs\.org|fasb\.org/i.test(url)?'standards-source':/investor|ir\.|sec\.gov\/edgar/i.test(url)?'issuer-or-filing-landing':/ocw\.mit\.edu/i.test(url)?'open-course-material':'other-link',
    linkCheck:'NOT_CHECKED',licenseCheck:'NOT_CHECKED',factCheck:'NOT_CHECKED'};
   if(url&&!/^https:\/\//.test(url))linkIssues.push({course:id,index:i,reason:'not-HTTPS',url});
   if(url&&url.includes(' '))linkIssues.push({course:id,index:i,reason:'contains-whitespace',url});
   rows.push(current);
  }
 }
 const rollup=[];
 for(let level=1;level<=5;level++){
  const inLevel=rows.filter(r=>{const n=Number(r.course.slice(-2));return level===(n<=6?1:n<=13?2:n<=20?3:n<=25?4:5)});
  rollup.push({level,readingRecords:inLevel.length,directLinks:inLevel.filter(r=>r.linked).length,
   undatedLinks:inLevel.filter(r=>r.linked&&!r.publicationDate).length,
   genericOrUnspecifiedSources:inLevel.filter(r=>r.linked&&['other-link','issuer-or-filing-landing'].includes(r.sourceType)).length});
 }
 return {snapshot:'2026-11-10',coverage:'Authored c.readings records, all 26 courses; does not include every external link embedded in lesson text',
   reviewState:'LINKS_NOT_NETWORK_VERIFIED',sourceRows:rows,issues:linkIssues,levels:rollup,
   reviewerRequirements:[
    'Open each linked record, verify the exact document and publication date, and archive a permitted citation to the relevant page.',
    'Mark a generic landing page as an entry point, not proof that the assigned claim appears in a source.',
    'Verify copyright/license and accessibility separately before embedding or distributing full materials.',
    'Cross-check the taught assertion against a dated authoritative document, and mark any hypothetical model inputs explicitly.',
    'Use published company filing numbers only for the correct issuer, period, scale, segment and accounting definition.'
   ]};
}
if(require.main===module){
 const m=manifest();
 if(process.argv.includes('--json'))console.log(JSON.stringify(m,null,2));
 else{
  console.log('# Five-level source and evidence register\n');
  console.log('**Not independently checked for URL reachability, licensing or factual accuracy.**\n');
  console.log('| Level | Reading records | Direct links | Links missing explicit date | Generic/unspecified sources |');
  console.log('|---|---:|---:|---:|---:|');
  for(const s of m.levels)console.log('| '+s.level+' | '+s.readingRecords+' | '+s.directLinks+' | '+s.undatedLinks+' | '+s.genericOrUnspecifiedSources+' |');
  console.log('\n## Linked sources for reviewers\n');
  for(const r of m.sourceRows.filter(x=>x.linked))console.log('- **'+r.course+'** '+r.title+' ('+r.sourceType+'): '+r.url+(r.publicationDate?' ['+r.publicationDate+']':' [date not explicitly recorded]'));
  console.log('\n## Verification required\n');
  for(const x of m.reviewerRequirements)console.log('- '+x);
 }
}
module.exports={manifest};
