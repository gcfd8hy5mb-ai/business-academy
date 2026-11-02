/* Prepared cloud-sync transport. Does nothing until configured by authenticated app code.
 * Never embed a service-role key. Local data remains authoritative until a safe merge is confirmed.
 */
(function(root){
'use strict';
function create(config){
  if(!config||!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(config.url||''))throw Error('Validated Supabase project URL required');
  if(!config.publishableKey||typeof config.accessToken!=='function'||typeof config.userId!=='function')throw Error('Authentication adapter required');
  const endpoint=config.url+'/rest/v1/business_academy_progress';
  async function request(method,query,body,extra){
    const token=await config.accessToken(),uid=await config.userId();
    if(!token||!uid)throw Error('Sign in before syncing progress');
    const res=await fetch(endpoint+(query||''),{method,headers:{apikey:config.publishableKey,Authorization:'Bearer '+token,'Content-Type':'application/json',Accept:'application/json',...(extra||{})},body:body===undefined?undefined:JSON.stringify(body)});
    if(!res.ok)throw Error('Cloud progress request failed ('+res.status+')');
    return res.status===204?null:await res.json();
  }
  async function read(){
    const uid=await config.userId();
    if(!uid)throw Error('Sign in before syncing progress');
    const rows=await request('GET','?user_id=eq.'+encodeURIComponent(uid)+'&select=user_id,learning,legacy,revision,updated_at');
    return rows[0]||null;
  }
  async function createFirst(learning,legacy){
    const uid=await config.userId();if(!uid)throw Error('Sign in before syncing progress');
    return request('POST','',{user_id:uid,learning,legacy:legacy||{},revision:1},{Prefer:'return=representation'});
  }
  async function updateKnownRevision(revision,learning,legacy){
    const uid=await config.userId();
    if(!uid||!Number.isSafeInteger(revision)||revision<1)throw Error('Valid authenticated revision required');
    const result=await request('PATCH','?user_id=eq.'+encodeURIComponent(uid)+'&revision=eq.'+revision,
      {learning,legacy:legacy||{},revision:revision+1,updated_at:new Date().toISOString()},{Prefer:'return=representation'});
    if(result.length!==1)throw Error('Cloud progress conflict: remote data changed. Reload and merge before saving');
    return result[0];
  }
  return {read,createFirst,updateKnownRevision};
}
root.BACloudTransport={create};
})(typeof window!=='undefined'?window:globalThis);
