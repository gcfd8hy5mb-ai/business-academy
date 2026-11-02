/* Firebase cloud bridge for existing academy accounts. No automatic first-device overwrite. */
import {initializeApp,getApps} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendEmailVerification,signOut} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import {getFirestore,doc,getDoc,runTransaction,serverTimestamp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const cfg=window.ACADEMY_FIREBASE_CONFIG;
const app=getApps().find(a=>a.name==='business-academy')||initializeApp(cfg,'business-academy');
const auth=getAuth(app),db=getFirestore(app);
const keys=['business-academy-learning-v1','business-academy-v1'];
let user=null,reference=null,revision=null,linked=false,busy=false,timer=null;
const box=document.createElement('aside');box.id='ba-cloud-panel';box.setAttribute('aria-live','polite');
box.style.cssText='position:fixed;right:10px;bottom:12px;z-index:9999;width:min(345px,calc(100vw - 20px));max-height:60vh;overflow:auto;padding:12px;border:1px solid #a58b55;border-radius:12px;background:#22252a;color:#f5e9d5;box-shadow:0 12px 30px #0008;font:13px system-ui';
document.body.append(box);
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
   box.append(button('Inspect cloud save',inspect));
   box.append(button('Enable cloud saves',connect));
 }else{
   box.append(button('Sync now',sync));
   box.append(button('Download backup',backup));
 }
 box.append(button('Sign out',()=>signOut(auth)));
}
function readLocal(){const o={};for(const k of keys)o[k]=localStorage.getItem(k);return o}
function backup(){const blob=new Blob([JSON.stringify({savedAt:new Date().toISOString(),records:readLocal()},null,2)],{type:'application/json'}),a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download='business-academy-device-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000)}
function validPayload(v){return v&&typeof v==='object'&&keys.every(k=>v[k]===null||typeof v[k]==='string')}
function location(){return doc(db,'users',user.uid,'academies','business','snapshots','progress-v1')}
async function inspect(){if(!user?.emailVerified)return;try{reference=location();const s=await getDoc(reference);status(s.exists()?'Cloud progress exists ('+(s.data().revision||'unknown revision')+'). Connect to compare or restore.':'No cloud progress yet. Device progress stays unchanged until you enable saving.')}catch(e){status('Cloud unavailable: '+(e.code||e.message))}}
async function connect(){
 if(!user?.emailVerified||busy)return;busy=true;
 try{
   reference=location();const existing=await getDoc(reference);
   backup();
   if(existing.exists()){
     const d=existing.data(),payload=JSON.parse(d.raw||'null');
     if(!validPayload(payload)){status('Cloud record format unrecognized. No local changes made.');return}
     if(JSON.stringify(payload)!==JSON.stringify(readLocal())){
       const restore=confirm('Cloud coursework already exists. A device backup was downloaded. Press OK to RESTORE CLOUD data onto this device, or Cancel to leave both copies untouched.'); 
       if(!restore){status('Cloud and iPhone data differ. Nothing overwritten.');return}
       for(const k of keys){if(payload[k]!==null)localStorage.setItem(k,payload[k])}
       revision=Number(d.revision)||0;linked=true;localStorage.setItem('ba-cloud-link-'+user.uid,String(revision));status('Cloud restored. Reloading…');locationReload();return;
     }
     revision=Number(d.revision)||0;
   }else{
     const ok=confirm('A downloadable iPhone backup was prepared. Start storing your Business Academy progress in this Firebase account?');
     if(!ok){status('Not connected. iPhone data is unchanged.');return}
     revision=0;
   }
   linked=true;localStorage.setItem('ba-cloud-link-'+user.uid,String(revision));
   await sync();render();
 }catch(e){linked=false;status('Cloud connection failed: '+(e.code||e.message))}
 finally{busy=false}
}
function locationReload(){window.location.reload()}
async function sync(){
 if(!user?.emailVerified||!linked||!reference)return;
 const owner=user.uid,payload=readLocal(),expect=revision;
 try{
   status('Saving to cloud…');
   const next=await runTransaction(db,async tx=>{
      const snap=await tx.get(reference),latest=snap.exists()?Number(snap.data().revision)||0:0;
      if(latest!==expect)throw Error('Cloud changed on another device. Automatic overwrite stopped.');
      if(auth.currentUser?.uid!==owner)throw Error('Account changed');
      tx.set(reference,{academy:'business',schemaVersion:1,revision:latest+1,raw:JSON.stringify(payload),updatedAt:serverTimestamp()});
      return latest+1;
   });
   if(auth.currentUser?.uid!==owner)throw Error('Account changed after save');
   revision=next;localStorage.setItem('ba-cloud-link-'+owner,String(next));status('Saved to Firebase cloud');
 }catch(e){status('Saved on this device only. '+(e.message||e.code))}
}
window.addEventListener('ba-progress-saved',()=>{if(linked){clearTimeout(timer);timer=setTimeout(sync,1200)}});
window.addEventListener('online',()=>{if(linked)sync()});
onAuthStateChanged(auth,async next=>{
 clearTimeout(timer);user=next;linked=false;reference=null;revision=null;
 render();if(user?.emailVerified){status('Signed in. Inspect or enable cloud saving before uploading progress.')}
});
