const {test,before,after}=require('node:test');
const {readFileSync}=require('node:fs');
const {initializeTestEnvironment,assertFails,assertSucceeds}=require('@firebase/rules-unit-testing');
const {doc,getDoc,setDoc,deleteDoc,serverTimestamp}=require('firebase/firestore');
let env;
before(async()=>{env=await initializeTestEnvironment({projectId:'business-law-rules-test',firestore:{rules:readFileSync('firebase/business-law-firestore.rules','utf8')}})});
after(async()=>{if(env)await env.cleanup()});
const path=(uid,academy='business')=>'users/'+uid+'/academies/'+academy+'/snapshots/progress-v1';
const payload=(academy='business')=>({raw:'{}',academy,schemaVersion:1,updatedAt:serverTimestamp()});
const user=(uid,verified=true)=>env.authenticatedContext(uid,{email_verified:verified}).firestore();
test('verified student can save own Business and Law records',async()=>{
 const db=user('owner');
 for(const academy of ['business','law'])await assertSucceeds(setDoc(doc(db,path('owner',academy)),payload(academy)));
});
test('different user cannot read or write another account',async()=>{
 const db=user('other');
 await assertFails(getDoc(doc(db,path('owner'))));
 await assertFails(setDoc(doc(db,path('owner')),payload()));
});
test('unverified and anonymous access denied',async()=>{
 await assertFails(setDoc(doc(user('owner',false),path('owner')),payload()));
 await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(),path('owner'))));
});
test('ethical-hacking documents inaccessible in this phase',async()=>{
 const db=user('owner');
 await assertFails(setDoc(doc(db,path('owner','ethical-hacking')),payload('ethical-hacking')));
});
test('invalid data and deletions denied',async()=>{
 const db=user('owner');
 await assertFails(setDoc(doc(db,path('owner')),{...payload(),updatedAt:'fake'}));
 await assertFails(deleteDoc(doc(db,path('owner'))));
});
