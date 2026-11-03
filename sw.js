/* Business Academy service worker v159: favor fresh HTML; never alter learning storage. */
const CACHE='ba-shell-v159';
const ASSETS=['./style.css?v=23','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('ba-starter-')||key.startsWith('ba-shell-')).filter(key=>key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')){
  event.respondWith(fetch(new Request(event.request,{cache:'no-store'})).catch(()=>caches.match(event.request)));
  return;
 }
 event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
