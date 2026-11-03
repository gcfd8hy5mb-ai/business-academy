/* Firebase cloud bridge for existing academy accounts. No automatic first-device overwrite. */
import {initializeApp,getApps} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendEmailVerification,signOut} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import {getFirestore,doc,getDoc,runTransaction,serverTimestamp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const cfg=window.ACADEMY_FIREBASE_CONFIG;
const app=getApps().find(a=>a.name==='business-academy')||initializeApp(cfg,'business-academy');
const auth=getAuth(app),db=getFirestore(app);
const keys=['business-academy-learning-v1','business-academy-v1'];
let user=null,reference=null,revision=null,linked=false,busy=false,timer=null,saving=false,queued=false,sessionGeneration=0,lastSynced=null,needsReview=false;
const box=document.createElement('aside');box.id='ba-cloud-panel';box.setAttribute('aria-live','polite');
box.style.cssText='position:fixed;right:10px;bottom:12px;z-index:9999;width:min(345px,calc(100vw - 20px));max-height:48vh;overflow:auto;padding:12px;border:1px solid #a58b55;border-radius:12px;background:#22252a;color:#f5e9d5;box-shadow:0 12px 30px #0008;font:13px system-ui';
box.style.cssText='display:none;position:fixed;inset:50% auto auto 50%;transform:translate(-50%,-50%);z-index:100001;width:min(410px,calc(100vw - 32px));max-height:min(76vh,700px);overflow:auto;box-sizing:border-box;padding:20px;border:1px solid #a58b55;border-radius:16px;background:#22252a;color:#f5e9d5;box-shadow:0 20px 60px #000c;font:14px system-ui';
const overlay=document.createElement('div');overlay.id='ba-cloud-overlay';overlay.style.cssText='display:none;position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.68)';
document.body.append(overlay,box);
function openCloudSettings(){document.body.classList.add('ba-cloud-settings-open');overlay.style.display='block';box.style.display='block';render()}
function closeCloudSettings(){document.body.classList.remove('ba-cloud-settings-open');overlay.style.display='none';box.style.display='none'}
overlay.addEventListener('click',closeCloudSettings);
document.addEventListener('click',e=>{if(e.target.closest('[data-cloud-settings-open]'))openCloudSettings()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCloudSettings()});
function status(text){const el=box.querySelector('[data-status]');if(el)el.textContent=text;}
function button(label,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.style.cssText='margin:4px;padding:8px 11px;background:#d5b86e;color:#242424;border:0;border-radius:7px;font-weight:650';b.onclick=fn;return b;}
function heading(s){const h=document.createElement('strong');h.textContent=s;box.append(h);}
function paragraph(s){const p=document.createElement('p');p.textContent=s;p.dataset.status='';p.style.margin='8px 0';box.append(p);}
function render(){
 box.replaceChildren();heading('Business Academy · Cloud saving');
 if(!user){
   paragraph('Saved on this iPhone. Sign in to connect your student account.');
   const email=document.createElement('input'),pass=document.createElement('input');email.placeholder='Email';pass.placeholder='Password';email.type='email';pass.type='password';
   for(const el of [email,pass]){el.style.cssText='display:block;width:97%;box-sizing:border-box;margin:5px 0;padding:9px;border-radius:6px';box.append(el)}
   box.append(button('Sign in',async()=>{try{status('Signing in…');await signInWithEmailAndPassword(auth,email.value.trim(),pass.value)}catch(e){status('Sign-in failed: '+(e.code||e.message))}}));
   box.append(button('Create account',async()=>{try{status('Creating account…');const c=await createUserWithEmailAndPassword(auth,email.value.trim(),pass.value);await sendEmailVerification(c.user);await signOut(auth);status('Verify your email, then sign in.')}catch(e){status(e.code||e.message)}}));
   return;
 }
 paragraph((user.email||'Student')+(linked?' · cloud link enabled':' · local progress preserved'));
 if(!user.emailVerified){status('Verify your email before syncing.');box.append(button('Sign out',()=>signOut(auth)));return}
 if(!linked){
   box.append(button('Compare iPhone & cloud saves',reviewVersions));
    box.append(button('Inspect cloud save',reviewVersions));
   box.append(button('Review cloud/device versions',reviewVersions));
   if(!needsReview)box.append(button('Enable cloud saves',connect));
 }else{
   box.append(button('Sync now',sync));
   box.append(button('Download backup',backup));
 }
 box.append(button('Sign out',()=>signOut(auth)));
 box.append(button('Close Settings',closeCloudSettings));
}
function readLocal(){const o={};for(const k of keys)o[k]=localStorage.getItem(k);return o}
function snapshot(){return JSON.stringify(readLocal())}
function linkKey(uid){return 'ba-cloud-link-'+uid}
function cloudPayload(docData){try{const p=JSON.parse(docData.raw||'null');return validPayload(p)?p:null}catch{return null}}
function canonical(value){if(Array.isArray(value))return value.map(canonical);if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k])]));return value}
function canonicalJSON(value){try{return JSON.stringify(canonical(JSON.parse(value)))}catch{return value}}
function sameRecords(a,b){return keys.every(k=>canonicalJSON(a[k])===canonicalJSON(b[k]))}
function saveBackupFile(filename,records){const blob=new Blob([JSON.stringify({savedAt:new Date().toISOString(),records},null,2)],{type:'application/json'}),a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000)}
async function resumeLink(account,generation){
 if(!account.emailVerified||!localStorage.getItem(linkKey(account.uid)))return;
 try{
  const ref=doc(db,'users',account.uid,'academies','business','snapshots','progress-v1');
  const saved=await getDoc(ref);
  if(generation!==sessionGeneration||auth.currentUser?.uid!==account.uid)return;
  if(!saved.exists()){status('No cloud copy found. Your device progress is safe. Use Enable cloud saves to reconnect.');return}
  const data=saved.data(),remote=cloudPayload(data),current=snapshot();
  if(!remote){status('Existing cloud copy is unreadable. No device data changed.');return}
  if(!sameRecords(remote,readLocal())){needsReview=true;render();status('Cloud and iPhone differ. Sync paused; choose Review cloud/device versions. No progress was overwritten.');return}
  const remoteRevision=Number(data.revision);
  if(!Number.isSafeInteger(remoteRevision)||remoteRevision<1){status('Cloud record needs a safe migration. No data changed.');return}
  reference=ref;revision=remoteRevision;lastSynced=current;linked=true;needsReview=false;render();status('Cloud connected · progress matches this device');
 }catch(e){if(generation===sessionGeneration)status('Cloud reconnect failed: '+(e.code||e.message)+'. Local work remains available.')}
}

function backup(){saveBackupFile('business-academy-device-backup.json',readLocal())}
function validPayload(v){return v&&typeof v==='object'&&keys.every(k=>v[k]===null||typeof v[k]==='string')}
function location(){return doc(db,'users',user.uid,'academies','business','snapshots','progress-v1')}
async function inspect(){return reviewVersions()}
async function reviewVersions(){
 if(!user?.emailVerified||busy)return;
 busy=true;const owner=user.uid,gen=sessionGeneration;
 try{
   const ref=location(),snap=await getDoc(ref);
   if(owner!==auth.currentUser?.uid||gen!==sessionGeneration)return;
   if(!snap.exists()){needsReview=false;render();status('No cloud progress found; you can enable first-time cloud saving.');return}
   const data=snap.data(),remote=cloudPayload(data),local=readLocal(),remoteRev=Number(data.revision);
   if(!remote||!Number.isSafeInteger(remoteRev)||remoteRev<1){status('Cloud record is not in the expected format. Your iPhone data is unchanged.');return}
   if(sameRecords(remote,local)){
     reference=ref;revision=remoteRev;lastSynced=snapshot();linked=true;needsReview=false;render();status('Cloud connected · progress matches this device');return;
   }
   needsReview=true;render();
   status('Two different progress versions found. No automatic upload or restore. Cloud revision: '+remoteRev+'.');
    const comparison=document.createElement('div');comparison.style.cssText='margin:9px 0;padding:10px;border:1px solid #a58b55;border-radius:8px;background:#181a1e';
    const compTitle=document.createElement('strong');compTitle.textContent='iPhone vs Firebase — detailed read-only comparison';comparison.append(compTitle);
    const addLine=(parent,value)=>{const p=document.createElement('p');p.style.cssText='margin:7px 0;overflow-wrap:anywhere';p.textContent=value;parent.append(p)};
    const labelValue=v=>{if(v===undefined)return '(missing)';if(v===null)return '(empty)';if(Array.isArray(v))return '['+v.length+' items]';if(typeof v==='object')return '{'+Object.keys(v).length+' fields}';const s=String(v);return s.length>110?s.slice(0,110)+'…':s};
    function differences(left,right,path,out,limit=60){
      if(out.length>=limit)return;
      if(JSON.stringify(canonical(left))===JSON.stringify(canonical(right)))return;
      if(left&&right&&typeof left==='object'&&typeof right==='object'&&Array.isArray(left)===Array.isArray(right)){
        const fields=Array.isArray(left)?Array.from({length:Math.max(left.length,right.length)},(_,i)=>String(i)):Array.from(new Set([...Object.keys(left),...Object.keys(right)])).sort();
        for(const name of fields){if(out.length>=limit)break;differences(left[name],right[name],path+(Array.isArray(left)?'['+name+']':'.'+name),out,limit)}
      }else out.push({path,iphone:labelValue(left),cloud:labelValue(right)});
    }
    for(const k of keys){
      const left=local[k],right=remote[k],equal=canonicalJSON(left)===canonicalJSON(right);
      const section=document.createElement('details');section.style.cssText='margin-top:9px;border-top:1px solid #585044;padding-top:7px';
      const summary=document.createElement('summary');summary.style.cssText='cursor:pointer;font-weight:650;overflow-wrap:anywhere';summary.textContent=k+' · '+(equal?'Same':'Different');section.append(summary);
      if(left===null&&right===null)addLine(section,'No saved data on either side.');
      else if(equal)addLine(section,'Saved values match.');
      else {
        try{
          const l=left===null?null:JSON.parse(left),r=right===null?null:JSON.parse(right),found=[];
          differences(l,r,'progress',found);
          addLine(section,'Differences found: '+found.length+(found.length===60?' or more':'')+'.');
          for(const d of found){const detail=document.createElement('p');detail.style.cssText='margin:8px 0;padding:7px;background:#282b31;border-radius:5px;overflow-wrap:anywhere';detail.textContent=d.path+' | iPhone: '+d.iphone+' | Firebase: '+d.cloud;section.append(detail)}
        }catch{addLine(section,'Saved values differ. One or both are not readable as JSON. Download backups before choosing a version.')}
      }
      comparison.append(section);
    }
    box.append(comparison);
    const details=document.createElement('p');details.textContent='Compare the versions first. Choose which version to keep only after downloading both backups. Your iPhone and cloud may contain different lessons, drafts, or exam results.';box.append(details);
   box.append(button('Download both backups',()=>{
     saveBackupFile('business-academy-iphone-before-review.json',local);
     saveBackupFile('business-academy-cloud-before-review.json',remote);
     status('Backup downloads requested. Verify they appear in Files/Downloads before choosing a version.');
   }));
   box.append(button('Keep iPhone version',async()=>{
     if(!confirm('This will replace the current CLOUD progress with the copy on this iPhone. Download BOTH backups first. Continue?'))return;
     if(!confirm('Confirm again: keep this iPhone progress and REPLACE the existing cloud copy?'))return;
     try{
       status('Updating cloud after checking its revision…');
       const newRevision=await runTransaction(db,async tx=>{
         const latest=await tx.get(ref);
         if(!latest.exists()||Number(latest.data().revision)!==remoteRev)throw Error('Cloud changed since review. Review again before saving.');
         if(auth.currentUser?.uid!==owner)throw Error('Account changed');
         tx.set(ref,{academy:'business',schemaVersion:1,revision:remoteRev+1,raw:JSON.stringify(local),updatedAt:serverTimestamp()});
         return remoteRev+1;
       });
       if(auth.currentUser?.uid!==owner||gen!==sessionGeneration)return;
       reference=ref;revision=newRevision;lastSynced=snapshot();
       linked=true;needsReview=false;localStorage.setItem(linkKey(owner),String(newRevision));render();status('Saved iPhone version to Firebase cloud');
     }catch(e){status('Cloud not changed: '+(e.code||e.message))}
   }));
   box.append(button('Restore cloud to iPhone',()=>{
     if(!confirm('This will REPLACE this iPhone’s progress with the cloud version. Download BOTH backups first. Continue?'))return;
     if(!confirm('Confirm again: replace iPhone progress with the cloud version and reload?'))return;
     if(auth.currentUser?.uid!==owner)return;
     for(const k of keys){if(remote[k]===null)localStorage.removeItem(k);else localStorage.setItem(k,remote[k])}
     localStorage.setItem(linkKey(owner),String(remoteRev));locationReload();
   }));
 }catch(e){status('Review failed; no changes made: '+(e.code||e.message))}
 finally{busy=false}
}
async function connect(){
 if(!user?.emailVerified||busy)return;busy=true;
 try{
   reference=location();const existing=await getDoc(reference);
   if(existing.exists()){
     const d=existing.data(),payload=cloudPayload(d);
     if(!payload){status('Cloud record format unrecognized. No local changes made.');return}
     if(!sameRecords(payload,readLocal())){
       needsReview=true;render();status('Different cloud and iPhone progress found. Select Review cloud/device versions to make a backed-up choice.');return;
     }
     revision=Number(d.revision)||0;
     if(revision<1){status('Invalid cloud revision; no changes made.');return}
     linked=true;needsReview=false;lastSynced=snapshot();render();status('Cloud connected · progress matches this device');return;
   }
   backup();
   const ok=confirm('A downloadable iPhone backup was prepared. Start storing your Business Academy progress in this Firebase account?');
   if(!ok){status('Not connected. iPhone data is unchanged.');return}
   revision=0;linked=true;lastSynced=null;
   const saved=await sync();
   if(!saved){linked=false;revision=null;render();status('Cloud upload failed. Your progress remains on this iPhone. Check Firestore security rules; then retry.');return}
   render();status('Saved to Firebase cloud');
 }catch(e){linked=false;status('Cloud connection failed: '+(e.code||e.message))}
 finally{busy=false}
}
function locationReload(){window.location.reload()}
async function sync(){
 if(!user?.emailVerified||!linked||!reference)return false;
 if(saving){queued=true;return false}
 saving=true;
 const owner=user.uid,ref=reference,copy=snapshot(),expect=revision;
 try{
   status('Saving to cloud…');
   const next=await runTransaction(db,async tx=>{
      const snap=await tx.get(ref),latest=snap.exists()?Number(snap.data().revision)||0:0;
      if(latest!==expect)throw Error('Cloud changed on another device. Automatic overwrite stopped.');
      if(auth.currentUser?.uid!==owner)throw Error('Account changed');
      tx.set(ref,{academy:'business',schemaVersion:1,revision:latest+1,raw:copy,updatedAt:serverTimestamp()});
      return latest+1;
   });
   if(auth.currentUser?.uid!==owner)return false;
   revision=next;lastSynced=copy;localStorage.setItem(linkKey(owner),String(next));status('Saved to Firebase cloud');return true;
 }catch(e){status('Saved on this device only. '+(e.message||e.code));return false}
 finally{
   saving=false;
   if(queued&&linked&&auth.currentUser?.uid===owner){
     queued=false;
     if(snapshot()!==lastSynced){clearTimeout(timer);timer=setTimeout(sync,1200)}
   }else queued=false;
 }
}
window.addEventListener('ba-progress-saved',()=>{if(linked){clearTimeout(timer);timer=setTimeout(sync,1200)}});
window.addEventListener('online',()=>{if(linked)sync()});
onAuthStateChanged(auth,async next=>{
 clearTimeout(timer);sessionGeneration++;const generation=sessionGeneration;
 user=next;linked=false;reference=null;revision=null;lastSynced=null;queued=false;needsReview=false;
 render();if(user?.emailVerified){
   status('Checking saved cloud connection…');
   await resumeLink(user,generation);
   if(generation===sessionGeneration&&!linked&&!box.querySelector('[data-status]')?.textContent?.includes('differ')&&!localStorage.getItem(linkKey(user.uid)))status('Signed in. Inspect or enable cloud saving before uploading progress.');
 }
});
