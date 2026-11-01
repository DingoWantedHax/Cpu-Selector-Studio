const CACHE='clearlane-cpu-studio-public-v023';
const FILES=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', e => {e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('clearlane-cpu-studio-')).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch', e => {if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return; e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));}return r;}).catch(()=>caches.match(e.request)));});
