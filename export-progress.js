// Export-only coursework backup. Never mutates browser storage.
(()=>{'use strict';
const academy="business",keys=["business-academy-v1"];
function run(){
 if(document.getElementById('academy-backup-export'))return;
 const button=document.createElement('button');
 button.id='academy-backup-export';button.type='button';button.textContent='Export coursework backup';
 button.style.cssText='position:fixed;left:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:9998;border:1px solid #aa9153;border-radius:12px;background:#24292b;color:#f4dfa5;padding:9px 11px;font:600 12px system-ui';
 button.addEventListener('click',()=>{
  try{
   const records={};
   for(const key of keys){const raw=localStorage.getItem(key);if(raw!==null)records[key]=raw;}
   if(!Object.keys(records).length){alert('No saved coursework found in this browser.');return;}
   const payload={format:'academy-progress-transfer',version:1,academy,exportedAt:new Date().toISOString(),records};
   const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
   const url=URL.createObjectURL(blob),a=document.createElement('a');
   a.href=url;a.download=academy+'-progress-transfer.json';document.body.appendChild(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(url),60000);
   alert('Coursework backup created. Keep the JSON file private. No saved progress was modified.');
  }catch(error){alert('Could not export coursework: '+error.message);}
 });
 document.body.appendChild(button);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();