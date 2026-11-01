
'use strict';
const DRIVER_NAMES=["Mario","Luigi","Peach","Daisy","Yoshi","Toad","Toadette","Koopa Troopa","Bowser","Donkey Kong","Wario","Waluigi","Rosalina","Metal Mario","Pink Gold Peach","Lakitu","Shy Guy","Baby Mario","Baby Luigi","Baby Peach","Baby Daisy","Baby Rosalina","Larry","Lemmy","Wendy","Ludwig","Iggy","Roy","Morton","Mii","Tanooki Mario","Link","Villager (Male)","Isabelle","Cat Peach","Dry Bowser","Villager (Female)","Gold Mario","Dry Bones","Bowser Jr.","King Boo","Inkling Girl","Inkling Boy","Breath of the Wild Link","Birdo","Kamek","Petey Piranha","Wiggler","Diddy Kong","Funky Kong","Peachette","Pauline"];
const KARTS=[{"id":0,"name":"Standard Kart","stock":true},{"id":1,"name":"Pipe Frame","stock":true},{"id":2,"name":"Mach 8","stock":true},{"id":3,"name":"Steel Driver","stock":true},{"id":4,"name":"Cat Cruiser","stock":true},{"id":5,"name":"Circuit Special","stock":true},{"id":6,"name":"Tri-Speeder","stock":true},{"id":7,"name":"Badwagon","stock":true},{"id":8,"name":"Prancer","stock":true},{"id":9,"name":"Biddybuggy","stock":true},{"id":10,"name":"Landship","stock":true},{"id":11,"name":"Sneeker","stock":true},{"id":12,"name":"Sports Coupe","stock":true},{"id":13,"name":"Gold Standard","stock":true},{"id":14,"name":"Standard Bike","stock":true},{"id":15,"name":"Comet","stock":true},{"id":16,"name":"Sport Bike","stock":true},{"id":17,"name":"The Duke","stock":true},{"id":18,"name":"Flame Rider","stock":true},{"id":19,"name":"Varmint","stock":true},{"id":20,"name":"Mr. Scooty","stock":true},{"id":21,"name":"Jet Bike","stock":true},{"id":22,"name":"Yoshi Bike","stock":true},{"id":23,"name":"Standard ATV","stock":true},{"id":24,"name":"Wild Wiggler","stock":true},{"id":25,"name":"Teddy Buggy","stock":true},{"id":26,"name":"GLA","stock":true},{"id":27,"name":"W 25 Silver Arrow","stock":true},{"id":28,"name":"300 SL Roadster","stock":true},{"id":29,"name":"Blue Falcon","stock":true},{"id":30,"name":"Tanooki Kart","stock":true},{"id":31,"name":"B Dasher","stock":true},{"id":32,"name":"Master Cycle","stock":true},{"id":33,"name":"Streetle","stock":true},{"id":34,"name":"P-Wing","stock":true},{"id":35,"name":"City Tripper","stock":true},{"id":36,"name":"Bone Rattler","stock":true},{"id":37,"name":"Koopa Clown","stock":true},{"id":38,"name":"Splat Buggy","stock":true},{"id":39,"name":"Inkstriker","stock":true},{"id":40,"name":"Master Cycle Zero","stock":true},{"id":41,"name":"Blue Seven","stock":false},{"id":42,"name":"Bruiser","stock":false},{"id":43,"name":"Gold Mantis","stock":false},{"id":44,"name":"Wildfire GT","stock":false},{"id":45,"name":"Cloud 9","stock":false},{"id":64,"name":"Lunar Cruiser","stock":false},{"id":65,"name":"Barrel Train","stock":false},{"id":66,"name":"Birthday Girl","stock":false},{"id":67,"name":"Bullet Blaster","stock":false},{"id":68,"name":"Super Blooper","stock":false},{"id":69,"name":"Koopa Dasher","stock":false},{"id":70,"name":"Sky Dasher","stock":false},{"id":71,"name":"Mushmellow","stock":false},{"id":72,"name":"Poltergust 4000","stock":false},{"id":73,"name":"Royale","stock":false},{"id":74,"name":"Zucchini","stock":false},{"id":75,"name":"Cheep Charger","stock":false},{"id":76,"name":"Cheep Diver","stock":false},{"id":77,"name":"Clanky Kart","stock":false},{"id":78,"name":"Heartbreaker GT","stock":false},{"id":79,"name":"Soda Jet","stock":false},{"id":80,"name":"Ghost Ride","stock":false},{"id":81,"name":"Trickster","stock":false},{"id":82,"name":"Garden Blitz","stock":false},{"id":83,"name":"Banana Master","stock":false},{"id":84,"name":"Double-Decker","stock":false},{"id":85,"name":"Dozer Dasher","stock":false},{"id":86,"name":"Offroader","stock":false},{"id":87,"name":"Paintster","stock":false},{"id":88,"name":"Rambi Rider","stock":false},{"id":89,"name":"Surf Sailor","stock":false},{"id":90,"name":"Cact-X","stock":false},{"id":91,"name":"Dreadfin","stock":false},{"id":92,"name":"Koopa King","stock":false},{"id":93,"name":"DK Jumbo","stock":false},{"id":94,"name":"Jet Cruiser","stock":false},{"id":95,"name":"Big Horn","stock":false},{"id":96,"name":"Parade Kart","stock":false},{"id":97,"name":"Comet","stock":false},{"id":98,"name":"Standard DS","stock":false},{"id":99,"name":"Brute","stock":false},{"id":100,"name":"Super Zoomer","stock":false},{"id":101,"name":"Boolevard","stock":false},{"id":102,"name":"Standard DX","stock":false},{"id":103,"name":"Cucumber","stock":false,"native":47},{"id":104,"name":"Dry Bomber","stock":false,"native":48},{"id":105,"name":"Egg Monster","stock":false,"native":49},{"id":106,"name":"Iron Galleon","stock":false,"native":50},{"id":107,"name":"Golden Goliath","stock":false,"native":51},{"id":108,"name":"Abyss Voyager","stock":false,"native":52},{"id":109,"name":"Doom Reaper","stock":false,"native":53},{"id":110,"name":"Dark Reaper","stock":false,"native":54},{"id":111,"name":"Land Smasher","stock":false,"native":55},{"id":112,"name":"Pulse Rose","stock":false,"native":56},{"id":113,"name":"Speedster Rally","stock":false,"native":57},{"id":114,"name":"Speedster Lightning RS","stock":false,"native":58},{"id":115,"name":"Shooting Star","stock":false,"native":59},{"id":116,"name":"Bulldozer","stock":false,"native":60},{"id":117,"name":"Sparky","stock":false,"native":61},{"id":118,"name":"Ink Hatcher","stock":false,"native":62,"staged":true,"category":"kart"}];
const TIRE_NAMES=['Standard','Monster','Roller','Slim','Slick','Metal','Button','Off-Road','Sponge','Wood','Cushion','Blue Standard','Hot Monster','Azure Roller','Crimson Slim','Cyber Slick','Retro Off-Road','Gold Tires','GLA Tires','Triforce Tires','Leaf Tires','Ancient Tires'];
const GLIDER_NAMES=['Super Glider','Cloud Glider','Wario Wing','Waddle Wing','Peach Parasol','Parachute','Parafoil','Flower Glider','Bowser Kite','Plane Glider','MKTV Parasol','Gold Glider','Hylian Kite','Paper Glider','Paraglider'];
const LEGACY_BODY_HOOK=[12, 0, 86, 227, 13, 0, 0, 42, 12, 192, 152, 229, 52, 0, 92, 227, 10, 0, 0, 42, 4, 0, 152, 229, 134, 0, 32, 224, 7, 0, 0, 226, 140, 1, 128, 224, 28, 192, 143, 226, 0, 192, 156, 229, 12, 192, 143, 224, 0, 0, 220, 231, 255, 0, 80, 227, 0, 0, 0, 10, 30, 255, 47, 225, 5, 1, 153, 231, 30, 255, 47, 225, 156, 75, 117, 0];
const HOOK=[12, 0, 86, 227, 18, 0, 0, 42, 12, 192, 152, 229, 52, 0, 92, 227, 15, 0, 0, 42, 4, 0, 152, 229, 134, 0, 32, 224, 7, 0, 0, 226, 140, 1, 128, 224, 128, 0, 128, 224, 44, 192, 159, 229, 12, 192, 143, 224, 0, 192, 140, 224, 0, 0, 220, 229, 255, 0, 80, 227, 4, 0, 0, 10, 1, 16, 220, 229, 4, 16, 136, 229, 2, 16, 220, 229, 8, 16, 136, 229, 30, 255, 47, 225, 5, 1, 153, 231, 30, 255, 47, 225, 156, 75, 117, 0];
const BUILD='6A85262F21B903649BD7C62628D26E43';
const CAVE=0x694c30,DATA=0xde9800,SITES=[0x54806c,0x54811c];
const EARLY=[41,42,43,44,45,64,65,66],LATER=[71,72,73,74,75,76,77,78];
// Native retail vehicle categorisation. ClearLane bodies deliberately remain grouped by project generation.
const ATV_IDS=new Set([23,24,25,36,38,39]);
const BIKE_IDS=new Set([14,15,16,17,18,19,20,21,22,32,35,40]);
const VEHICLE_GROUPS=[
 ['ATVs',k=>k.stock&&ATV_IDS.has(k.id)],
 ['Bikes',k=>k.stock&&BIKE_IDS.has(k.id)],
 ['Karts',k=>k.stock&&!ATV_IDS.has(k.id)&&!BIKE_IDS.has(k.id)],
 ['Old ClearLane · Blue Seven–Sky Dasher',k=>!k.stock&&k.id<=70],
 ['New ClearLane · Mushmellow–Standard DX',k=>!k.stock&&k.id>=71&&k.id<=102],
 ['ClearLane expansion · Cucumber–Ink Hatcher',k=>!k.stock&&k.id>=103&&k.id<=118],
 ['Future additions · staged',k=>!!k.staged&&k.id>118]
];
let vehicleFilter='';
function vehicleMatches(k,label,q){if(!q)return true;const categoryTerms={'atv':'ATVs','atvs':'ATVs','bike':'Bikes','bikes':'Bikes','kart':'Karts','karts':'Karts','old clearlane':'Old ClearLane · Blue Seven–Sky Dasher','new clearlane':'New ClearLane · Mushmellow–Standard DX','100 card':'ClearLane expansion · Cucumber–Ink Hatcher','100-card':'ClearLane expansion · Cucumber–Ink Hatcher','101 card':'ClearLane expansion · Cucumber–Ink Hatcher','101-card':'ClearLane expansion · Cucumber–Ink Hatcher','future':'Future additions · staged','staged':'Future additions · staged'};if(categoryTerms[q])return label===categoryTerms[q];return [k.name,'body'+k.id,String(k.id)].some(t=>t.toLowerCase().includes(q));}
function updateVehicleFilter(){
 vehicleFilter=$('vehicleSearch').value.trim().toLowerCase();
 let matching=0;
 for(const [label,select] of VEHICLE_GROUPS){matching+=KARTS.filter(k=>select(k)&&vehicleMatches(k,label,vehicleFilter)).length;}
 $('vehicleSearchCount').textContent=vehicleFilter
  ? matching+' matching vehicle'+(matching===1?'':'s')+' · Existing selections are preserved while filtering.'
  : KARTS.length+' vehicles · ATVs → Bikes → Karts → old ClearLane → new ClearLane → 100-card extension'+(STAGED_CATALOG.bodies.length?' → future staged':'');
 const current=profiles[activeDriver];
 for(let i=0;i<8;i++){
  const s=document.querySelector('#eight select[aria-label="Kart '+(i+1)+'"]');
  if(s)fillVehicleOptions(s,current.bodies[i]);
 }
}
function fillVehicleOptions(s,selectedId){
 s.replaceChildren();
 const current=byID.get(selectedId);
 const visible=VEHICLE_GROUPS.some(([label,pred])=>pred(current)&&vehicleMatches(current,label,vehicleFilter));
 // Keep an existing selection in the dropdown even when the search doesn't match it.
 if(!visible&&current){const group=document.createElement('optgroup');group.label='Current selection (preserved)';const option=document.createElement('option');option.value=String(selectedId);option.textContent=current.name+' [BODY'+selectedId+']'+(current.staged?(current.id===118?' · CPU PENDING':' · STAGED'):'');group.append(option);s.append(group);}
 for(const [label,pred] of VEHICLE_GROUPS){const matches=KARTS.filter(k=>pred(k)&&vehicleMatches(k,label,vehicleFilter));if(!matches.length)continue;const group=document.createElement('optgroup');group.label=label;
  for(const k of matches){const option=document.createElement('option');option.value=String(k.id);option.textContent=k.name+' [BODY'+k.id+']'+(k.staged?(k.id===118?' · CPU PENDING':' · STAGED'):'');group.append(option);}
  s.append(group);
 }
 s.value=String(selectedId);
}

const allowed=new Set(KARTS.map(x=>x.id));
const byID=new Map(KARTS.map(x=>[x.id,x]));
const $=id=>document.getElementById(id);
const COPY=a=>a.map(x=>x);
let updateRuntimeGate=()=>{};
const STORAGE_KEY="clearlane.cpu8.profiles."+BUILD+".v1";
let saveAvailable=false,pendingIps=null;
let profiles=DRIVER_NAMES.map(()=>({mode:'custom',bodies:COPY(EARLY),tires:Array(8).fill(0),gliders:Array(8).fill(0)}));
let activeDriver=0;
function name(id){const k=byID.get(id);return k?(k.stock?'Original MK8DX':k.staged?'Staged addition':'ClearLane')+' / '+k.name+' [BODY'+id+']':'Unknown '+id;}
function render(){
 const p=profiles[activeDriver];$('driver').value=String(activeDriver);$('policy').value=p.mode;
 const area=$('eight');area.replaceChildren();
 for(let i=0;i<8;i++){
  const label=document.createElement('div');label.className='comboCard';
  const n=document.createElement('strong');n.textContent='Combination '+(i+1);label.append(n);
  const s=document.createElement('select');s.setAttribute('aria-label','Kart '+(i+1));
  fillVehicleOptions(s,p.bodies[i]);s.disabled=p.mode!=='custom';
  s.onchange=()=>{p.bodies[i]=Number(s.value);afterChange();};
  const title=document.createElement('span');title.textContent='Vehicle — matched with the tyre and glider below';label.append(title,s);
  const pair=document.createElement('div');pair.className='row';
  for(const [kind,values] of [['tires',TIRE_NAMES],['gliders',GLIDER_NAMES]]){
    const group=document.createElement('label');const sub=document.createElement('span');sub.textContent=kind==='tires'?'Tyres — matched to kart':'Glider — matched to kart';group.append(sub);
    const sel=document.createElement('select');sel.setAttribute('aria-label',kind+' '+(i+1));
    values.forEach((name,id)=>{const o=document.createElement('option');o.value=String(id);o.textContent=name+' [ID'+id+']'+(id>=(kind==='tires'?BASE_TIRE_COUNT:BASE_GLIDER_COUNT)?' · STAGED':'');sel.append(o);});
    sel.value=String(p[kind][i]);sel.disabled=p.mode!=='custom';sel.onchange=()=>{p[kind][i]=Number(sel.value);afterChange();};group.append(sel);pair.append(group);
  }label.append(pair);area.append(label);
 }
 refreshSummary();renderTable();updateRuntimeGate();
}
function refreshSummary(){const count=profiles.filter(p=>p.mode==='custom').length;
 $('summary').textContent=count+' custom CPU drivers; '+(52-count)+' Nintendo default. '+KARTS.length+' vehicles, '+TIRE_NAMES.length+' tyres, '+GLIDER_NAMES.length+' gliders ('+(STAGED_CATALOG.bodies.length+STAGED_CATALOG.tires.length+STAGED_CATALOG.gliders.length)+' future entries staged).';
}
function setStatus(msg,success=false){$('status').textContent=msg;$('status').className='stats'+(success?' success':'');}
$('vehicleSearch').addEventListener('input',updateVehicleFilter);
$('findVehicle').onclick=()=>{if(!$('vehicleSearch').value.trim())$('vehicleSearch').focus();else document.querySelector('#eight select[aria-label="Kart 1"]')?.focus();};
$('clearVehicleSearch').onclick=()=>{$('vehicleSearch').value='';updateVehicleFilter();$('vehicleSearch').focus();};
// Driver choices are now authored in HTML for iOS offline previews; do not append duplicates.
$('driver').onchange=()=>{activeDriver=Number($('driver').value);render();persist();};
$('policy').onchange=()=>{profiles[activeDriver].mode=$('policy').value;render();persist();};
$('early').onclick=()=>{profiles[activeDriver].bodies=COPY(EARLY);profiles[activeDriver].mode='custom';render();persist();};
$('later').onclick=()=>{profiles[activeDriver].bodies=COPY(LATER);profiles[activeDriver].mode='custom';render();persist();};
$('copyall').onclick=()=>{const p=profiles[activeDriver];profiles=profiles.map(()=>({mode:p.mode,bodies:COPY(p.bodies),tires:COPY(p.tires),gliders:COPY(p.gliders)}));render();persist();setStatus('Copied this driver’s choices to all 52.');};
$('clearall').onclick=()=>{if(!confirm('Set all 52 characters back to Nintendo choice? Your browser save will also change. Export a JSON backup first if you want to keep this configuration.'))return;profiles.forEach(p=>p.mode='nintendo');render();persist();setStatus('Nintendo choices restored for all 52 profiles.');};
function download(filename,bytes,mime){const b=bytes instanceof Uint8Array?bytes:new TextEncoder().encode(bytes),url=URL.createObjectURL(new Blob([b],{type:mime||'application/octet-stream'}));const a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);}
$('save').onclick=()=>{download('ClearLane_CPU_8Kart_Profiles.json',JSON.stringify({version:9,build:BUILD,activeDriver,profiles},null,2),'application/json');setStatus('Saved all 52 eight-choice profiles.',true);};
$('load').onclick=()=>$('file').click();
$('file').onchange=async()=>{const f=$('file').files[0];$('file').value='';if(!f)return;try{
 const data=JSON.parse(await f.text());let imported;
 if([8,9].includes(data.version)&&data.build===BUILD)imported=data.profiles.map(p=>({...p,tires:p.tires||Array(8).fill(0),gliders:p.gliders||Array(8).fill(0)}));
 else if(data.profileVersion===3&&data.buildId===BUILD&&data.roster){imported=DRIVER_NAMES.map((_,id)=>{const p=data.roster[String(id)];return p?.mode==='custom'?{mode:'custom',bodies:p.combos.slice(0,8).map(c=>c.vehicles),tires:p.combos.slice(0,8).map(c=>c.tires),gliders:p.combos.slice(0,8).map(c=>c.gliders)}:{mode:'nintendo',bodies:COPY(EARLY),tires:Array(8).fill(0),gliders:Array(8).fill(0)};});}
 else throw Error('Only v0.8/v0.9 JSON or prior Studio v3 roster JSON is supported.');
 validate(imported);profiles=imported.map(p=>({mode:p.mode,bodies:COPY(p.bodies),tires:COPY(p.tires),gliders:COPY(p.gliders)}));if(Number.isSafeInteger(data.activeDriver)&&data.activeDriver>=0&&data.activeDriver<52)activeDriver=data.activeDriver;render();persist();setStatus('Imported all profiles, and saved locally; review before exporting.',true);
 }catch(e){setStatus('Import refused: '+e.message);}};
function validate(ps){if(!Array.isArray(ps)||ps.length!==52)throw Error('Exactly 52 original driver profiles required.');for(let i=0;i<52;i++){const p=ps[i];if(!p||!['custom','nintendo'].includes(p.mode)||!Array.isArray(p.bodies)||p.bodies.length!==8)throw Error('Driver '+i+' needs eight choices.');for(const id of p.bodies)if(!Number.isSafeInteger(id)||!allowed.has(id))throw Error('Unregistered BODY'+id+' on driver '+i);for(const [key,max] of [['tires',TIRE_NAMES.length],['gliders',GLIDER_NAMES.length]]){if(!Array.isArray(p[key])||p[key].length!==8||p[key].some(v=>!Number.isSafeInteger(v)||v<0||v>=max))throw Error('Invalid '+key+' combinations on driver '+i);}}}
function u16be(v){return [(v>>>8)&255,v&255];}
function u32be(v){return [(v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255];}
function u32le(v){return [v&255,(v>>>8)&255,(v>>>16)&255,(v>>>24)&255];}
// Logical BODY 103..117 are the 15 added compact cards, published as native 47..61.
// Only the experimental P847 100-card backend may use this byte encoding.
function encodeCPU100Body(logical){if(logical===118||logical>118)throw Error('No verified CPU runtime encoder for logical BODY'+logical+'. Save JSON instead.');return logical>=103&&logical<=117?logical-56:logical;}
function decodeCPU100Body(native,rosterCount=100){return native>=47&&native<=(rosterCount===101?62:61)?native+56:native;}
function hasCompactCPU100Choices(){return profiles.some(p=>p.mode==='custom'&&p.bodies.some(v=>v>=103&&v<=117));}
function compilePresetBytes(ps){
 validate(ps);assertRuntimeSelections(ps);
 // 52 drivers × 8 choices × [BODY, TYRE, GLIDER]. 0xFF marks Nintendo fallback.
 const payload=new Uint8Array(52*8*3).fill(255);
 for(let i=0;i<52;i++)if(ps[i].mode==='custom')for(let j=0;j<8;j++){
  const at=(i*8+j)*3;
  payload[at]=encodeCPU100Body(ps[i].bodies[j]);payload[at+1]=ps[i].tires[j];payload[at+2]=ps[i].gliders[j];
 }
 return payload;
}
// Native CLCP format retained from v0.13 for backward-compatible JSON and presets.
function crc32(bytes){let c=0xffffffff;for(const v of bytes){c^=v;for(let j=0;j<8;j++)c=(c>>>1)^((c&1)?0xedb88320:0);}return(c^0xffffffff)>>>0;}
function makeNativeProfile(){
 const payload=compilePresetBytes(profiles),length=payload.length;
 if(length!==1248)throw Error('Unexpected CPU profile size.');
 const header=Uint8Array.from([67,76,67,80,1,52,8,3,length&255,(length>>>8)&255,0,0,0,0,0,0]);
 const checksum=crc32(payload);
 header.set(u32le(checksum),12);
 const combined=new Uint8Array(header.length+payload.length);
 combined.set(header);combined.set(payload,header.length);
 return combined;
}
// v0.14 P753: retain the exact 100-kart publisher and CPU helper from the owner-supplied
// P753 merged module. Only the CLCP profile and one verified BODY-bound CMP may change.
const P753_MODULE_SHA='709ddfa000e15917aebb5b7403bf7481e52275ee62284567319acfe41824fb71';
const P753_PROTECTED_SHA='a7fb450db80f485e4f13ca77b295e94234caf97ab1351fb8da9e3650adf81bad';
const P753_BYTES=19660, MODULE_BASE=0x1535000, MODULE_HOOK=0x1538f04;
const PROFILE_FILE=0x4704, PROFILE_SIZE=1264, CMP_FILE=0x100+0x3f04+0x70;
const CPU_SITES=[0x54806c,0x54811c];
let loadedModule=null, moduleRequestId=0;
const asciiAt=(b,i,n)=>String.fromCharCode(...b.slice(i,i+n));
function readLE(b,i){return (b[i]|b[i+1]<<8|b[i+2]<<16|b[i+3]<<24)>>>0;}
function setLE(b,i,n){b.set(u32le(n),i);}
function hexDigest(b){return Array.from(b,x=>x.toString(16).padStart(2,'0')).join('');}
async function sha256Bytes(b){if(!globalThis.crypto?.subtle)throw Error('Secure SHA-256 is unavailable; use local Chrome or Edge.');return new Uint8Array(await crypto.subtle.digest('SHA-256',b));}
async function shaHex(b){return hexDigest(await sha256Bytes(b));}
function armBranch(from,to){const delta=to-(from+8);if(delta%4||delta<-(1<<25)||delta>=(1<<25))throw Error('ARM32 branch out of range.');return (0xeb000000|((delta>>2)&0xffffff))>>>0;}
function decodeBranch(from,word){let n=(word&0xffffff)<<2;if(n&0x2000000)n-=0x4000000;return from+8+n;}
function combined(...chunks){const len=chunks.reduce((n,x)=>n+x.length,0),out=new Uint8Array(len);let pos=0;for(const c of chunks){out.set(c,pos);pos+=c.length;}return out;}
async function immutableFingerprint(b){return shaHex(combined(b.slice(0,0xa0),b.slice(0x100,CMP_FILE),b.slice(CMP_FILE+4,PROFILE_FILE),b.slice(PROFILE_FILE+PROFILE_SIZE)));}
function validateProfileBytes(b){if(b.length!==PROFILE_SIZE||asciiAt(b,0,4)!=='CLCP'||b[4]!==1||b[5]!==52||b[6]!==8||b[7]!==3||readLE(b,8)!==1248||readLE(b,12)!==crc32(b.slice(16)))throw Error('CLCP profile size/header/checksum mismatch.');}
async function verifyP753Module(b){
 if(b.length!==P753_BYTES||asciiAt(b,0,4)!=='NSO0')throw Error('Not a P753 merged subsdk2. The original 82-kart CPU module is not compatible.');
 const checks=[[0x10,0x100,0,0x4000],[0x20,0x4100,0x4000,0xaf4],[0x30,0x4bf4,0x5000,0xd8]];
 for(const [at,fo,mo,size] of checks)if(readLE(b,at)!==fo||readLE(b,at+4)!==mo||readLE(b,at+8)!==size)throw Error('Unexpected P753 NSO segment layout.');
 if(readLE(b,0x100+0x3f04)!==0xe7990105||![0xe3500063,0xe3500066].includes(readLE(b,CMP_FILE)))throw Error('CPU helper entry or BODY limit does not match audited P753 code.');
 validateProfileBytes(b.slice(PROFILE_FILE,PROFILE_FILE+PROFILE_SIZE));
 for(const [at,hash] of [[0x10,0xa0],[0x20,0xc0],[0x30,0xe0]]){
   const data=b.slice(readLE(b,at),readLE(b,at)+readLE(b,at+8));
   if(hexDigest(await sha256Bytes(data))!==hexDigest(b.slice(hash,hash+32)))throw Error('Invalid NSO segment SHA-256 at 0x'+at.toString(16));
 }
 const protectedHash=await immutableFingerprint(b);
 if(protectedHash!==P753_PROTECTED_SHA)throw Error('This file modifies protected P753 code/data or is a different module. Export locked.');
 return await shaHex(b);
}
async function createModifiedModule(original,profile){
 await verifyP753Module(original);
 validateProfileBytes(profile);
 const buf=original.slice();buf.set(profile,PROFILE_FILE);
 if(![0xe3500063,0xe3500066].includes(readLE(buf,CMP_FILE)))throw Error('Unexpected CPU bound instruction.');
 setLE(buf,CMP_FILE,0xe3500066); // CMP R0,#102: enable BODY100–102 from the actual 100-kart roster.
 for(const [offset,hashOff] of [[0x10,0xa0],[0x20,0xc0],[0x30,0xe0]]){
  const start=readLE(buf,offset),size=readLE(buf,offset+8);
  buf.set(await sha256Bytes(buf.slice(start,start+size)),hashOff);
 }
 if(await immutableFingerprint(buf)!==P753_PROTECTED_SHA)throw Error('Protected kart code changed; refusing export.');
 await verifyP753Module(buf);
 if(!bytesEqual(buf.slice(PROFILE_FILE,PROFILE_FILE+PROFILE_SIZE),profile)||readLE(buf,CMP_FILE)!==0xe3500066)throw Error('CPU profile/BODY bound round-trip failed.');
 return buf;
}
function makeRelocatedIPS(){const a=[73,80,83,51,50];for(const at of CPU_SITES){const w=armBranch(at,MODULE_HOOK);if(decodeBranch(at,w)!==MODULE_HOOK)throw Error('CPU ARM32 hook address mismatch.');a.push(...u32be(at+0x100),...u16be(4),...u32le(w));}a.push(69,69,79,70);return Uint8Array.from(a);}
function le16(v){return [v&255,(v>>>8)&255];}
function zipPair(entries){let locals=[],centrals=[],cursor=0;const encoder=new TextEncoder();
 for(const {filename,data} of entries){const n=encoder.encode(filename),c=crc32(data),size=data.length;
  const lh=[...u32le(0x04034b50),...le16(20),0,0,0,0,0,0,0,0,...u32le(c),...u32le(size),...u32le(size),...le16(n.length),0,0,...n,...data];
  const ch=[...u32le(0x02014b50),...le16(20),...le16(20),0,0,0,0,0,0,0,0,...u32le(c),...u32le(size),...u32le(size),...le16(n.length),0,0,0,0,0,0,0,0,...u32le(0),...u32le(cursor),...n];
  locals.push(lh);centrals.push(ch);cursor+=lh.length;
 }
 const centralLen=centrals.reduce((a,b)=>a+b.length,0);
 const footer=[...u32le(0x06054b50),0,0,0,0,...le16(entries.length),...le16(entries.length),...u32le(centralLen),...u32le(cursor),0,0];
 return Uint8Array.from([...locals.flat(),...centrals.flat(),...footer]);
}
$('moduleFile').onchange=async()=>{
 const f=$('moduleFile').files[0];$('moduleFile').value='';const req=++moduleRequestId;loadedModule=null;$('export').disabled=true;
 if(!f)return;
 try{
  if(f.size!==P753_BYTES)throw Error('Expected 19,660-byte P753 subsdk2. The P518/P521 modules are incompatible.');
  const bytes=new Uint8Array(await f.arrayBuffer()),sha=await verifyP753Module(bytes);
  if(req!==moduleRequestId)return;
  loadedModule=bytes;$('export').disabled=false;
  $('moduleStatus').textContent='P753 verified ('+sha.slice(0,12)+'…). Protected 100-kart code intact; export unlocked. Previous v0.14 outputs are also accepted.';
  setStatus('Verified the exact P753 kart+CPU code. Your loaded JSON selections may now be exported.',true);
 }catch(e){if(req!==moduleRequestId)return;$('moduleStatus').textContent='Export LOCKED: '+e.message;setStatus('Module refused: '+e.message);}
};
$('exportProfile').onclick=()=>{try{const data=makeNativeProfile();download('ClearLane_CPU_52_Drivers_8_Full_Combinations.clcp',data,'application/octet-stream');setStatus('Saved '+data.length+'-byte matched profile; it is a backup, not an installable IPS.',true);}catch(e){setStatus('Native export refused: '+e.message);}};
$('export').onclick=async()=>{
 try{
  if(!loadedModule)throw Error('Choose the exact verified P753 merged subsdk2 first.');
  const profile=makeNativeProfile(),module=await createModifiedModule(loadedModule,profile),ips=makeRelocatedIPS();
  const patchname='atmosphere/exefs_patches/CPU_BlueSeven_303/'+BUILD+'.ips';
  const note='ClearLane CPU Customiser v0.14 P753 — EXPERIMENTAL\n\nThis is a CPU-profile update for the EXACT verified P753 merged 100-kart build only.\nIt preserves the existing kart publication and model/name code.\nCPU selector BODY validation expands from max99 to max102.\nDo NOT install together with old CPU Picker, CPU Random Colours or another subsdk2.\nBack up your working files and only test one offline race.\nNot Eden/Switch verified. For a return to earlier working configuration, restore your own original paired files.\n';
  const zip=zipPair([{filename:'atmosphere/contents/0100152000022000/exefs/subsdk2',data:module},{filename:patchname,data:ips},{filename:'READ_FIRST.txt',data:new TextEncoder().encode(note)}]);
  download('ClearLane_CPU_P753_85Karts_Update.zip',zip,'application/zip');
  setStatus('Exported P753 100-kart-safe CPU configuration (subsdk2 + matching IPS). Saved profiles and other game assets unchanged. Experimental until one race passes.',true);
 }catch(e){setStatus('MTP export REFUSED: '+e.message);}
};
function persist(){
 try{localStorage.setItem(STORAGE_KEY,JSON.stringify({version:9,build:BUILD,activeDriver,profiles}));saveAvailable=true;$('autosaveStatus').textContent='Autosaved in this browser. Use Save configuration JSON for a portable backup.';$('autosaveStatus').className='stats success';}
 catch(e){saveAvailable=false;$('autosaveStatus').textContent='Browser storage unavailable: changes remain until you close the tab. Use Save configuration JSON to keep them.';$('autosaveStatus').className='stats';}
}
function restore(){
 try{
  const raw=localStorage.getItem(STORAGE_KEY);
  if(raw){const data=JSON.parse(raw);if(data.build!==BUILD||![8,9].includes(data.version))throw Error('Save version mismatch');validate(data.profiles);profiles=data.profiles.map(p=>({mode:p.mode,bodies:COPY(p.bodies),tires:COPY(p.tires),gliders:COPY(p.gliders)}));if(Number.isSafeInteger(data.activeDriver)&&data.activeDriver>=0&&data.activeDriver<52)activeDriver=data.activeDriver;$('autosaveStatus').textContent='Restored your previously saved 52-driver loadouts from this browser.';$('autosaveStatus').className='stats success';saveAvailable=true;return;}
  localStorage.setItem(STORAGE_KEY,JSON.stringify({version:9,build:BUILD,activeDriver,profiles}));saveAvailable=true;$('autosaveStatus').textContent='Automatic browser saving is enabled. First-time defaults loaded.';$('autosaveStatus').className='stats success';
 }catch(e){saveAvailable=false;$('autosaveStatus').textContent='Cannot restore automatic browser save ('+e.message+'). Use JSON backup to preserve your choices.';$('autosaveStatus').className='stats';}
}
function afterChange(){refreshSummary();renderTable();persist();updateRuntimeGate();}
function cartLabel(id){return byID.has(id)?byID.get(id).name+' [BODY'+id+']'+(byID.get(id).staged?(id===118?' · CPU PENDING':' · STAGED'):''):'Unknown BODY'+id;}
function allTableRows(){const rows=[];for(let d=0;d<52;d++){const p=profiles[d];if(p.mode==='nintendo'){rows.push({d,mode:'Nintendo default',choice:'—',kart:'Game default',tire:'Game default',glider:'Game default'});continue;}for(let i=0;i<8;i++)rows.push({d,mode:'Custom',choice:String(i+1),kart:cartLabel(p.bodies[i]),tire:TIRE_NAMES[p.tires[i]],glider:GLIDER_NAMES[p.gliders[i]]});}return rows;}
function renderTable(){
 const q=$('searchTable').value.trim().toLowerCase(),mode=$('tableMode').value;
 const rows=allTableRows().filter(row=>{
  if(mode==='custom'&&row.mode!=='Custom'||mode==='nintendo'&&row.mode!=='Nintendo default')return false;
  return !q||[DRIVER_NAMES[row.d],row.mode,row.choice,row.kart,row.tire,row.glider].join(' ').toLowerCase().includes(q);
 });
 const tbody=$('rosterTable');tbody.replaceChildren();
 for(const r of rows){const tr=document.createElement('tr');const name=document.createElement('td');const btn=document.createElement('button');btn.className='textbutton';btn.textContent=DRIVER_NAMES[r.d];btn.title='Edit '+DRIVER_NAMES[r.d];btn.onclick=()=>{activeDriver=r.d;render();persist();window.scrollTo({top:0,behavior:'smooth'});};name.append(btn);tr.append(name);for(const v of [r.mode,r.choice,r.kart,r.tire,r.glider]){const c=document.createElement('td');c.textContent=v;tr.append(c);}tbody.append(tr);}
 const custom=profiles.filter(p=>p.mode==='custom').length,chosen=new Set(profiles.filter(p=>p.mode==='custom').flatMap(p=>p.bodies));
 const kpis=[rows.length+' displayed rows',custom+' custom drivers',(52-custom)+' Nintendo drivers',chosen.size+' unique selected karts'];
 $('tableSummary').replaceChildren();kpis.forEach(s=>{const span=document.createElement('span');span.textContent=s;$('tableSummary').append(span);});
}
$('searchTable').oninput=renderTable;$('tableMode').onchange=renderTable;
$('downloadCSV').onclick=()=>{
 const quote=v=>'"'+String(v).replaceAll('"','""')+'"';
 const rows=[['Driver ID','Character','Mode','Preset','Kart','Tyres','Glider'],...allTableRows().map(r=>[r.d,DRIVER_NAMES[r.d],r.mode,r.choice,r.kart,r.tire,r.glider])];
 download('ClearLane_CPU_52_Drivers_8_Loadouts.csv','\ufeff'+rows.map(r=>r.map(quote).join(',')).join('\r\n'),'text/csv;charset=utf-8');setStatus('Downloaded your complete loadout table as CSV.',true);
};
// IPS32 (header IPS32 / trailer EEOF) and traditional IPS (PATCH / EOF),
// with strict bounds and no code execution, URL access, or auto-application.
function parseIps(bytes){
 if(bytes.length>4*1024*1024)throw Error('File exceeds 4 MiB inspection limit.');
 const ascii=(at,len)=>String.fromCharCode(...bytes.slice(at,at+len));
 const ips32=ascii(0,5)==='IPS32',ips24=ascii(0,5)==='PATCH';
 if(!ips32&&!ips24)throw Error('Not IPS32 or standard IPS.');
 const end=ips32?'EEOF':'EOF';let pos=5;const records=[];
 while(pos<bytes.length){
  if(ascii(pos,end.length)===end){pos+=end.length;if(pos!==bytes.length)throw Error('Unexpected bytes after '+end+' marker.');return {format:ips32?'IPS32':'IPS',records};}
  if(records.length>=20000)throw Error('Too many IPS records.');
  const count=ips32?4:3;
  if(pos+count+2>bytes.length)throw Error('Truncated IPS record header.');
  let offset=0;for(let i=0;i<count;i++)offset=offset*256+bytes[pos++];
  const len=bytes[pos++]*256+bytes[pos++];
  let data;
  if(len===0){if(pos+3>bytes.length)throw Error('Truncated RLE data.');const repeat=bytes[pos++]*256+bytes[pos++];const value=bytes[pos++];if(!repeat)throw Error('Zero-length RLE record.');data=new Uint8Array(repeat);data.fill(value);}
  else{if(pos+len>bytes.length)throw Error('Truncated IPS record data.');data=bytes.slice(pos,pos+len);pos+=len;}
  if(offset+data.length>0x100000000)throw Error('IPS range extends past address space.');
  records.push({offset,data});
 }
 throw Error('Missing '+end+' end marker.');
}
function bytesEqual(a,b){return a.length===b.length&&a.every((x,i)=>x===b[i]);}
function recordsAt(p){const dict=new Map();let overlap=false;for(const r of p.records){if(dict.has(r.offset))overlap=true;dict.set(r.offset,r);}const sorted=[...p.records].sort((a,b)=>a.offset-b.offset);for(let i=1;i<sorted.length;i++)if(sorted[i].offset<sorted[i-1].offset+sorted[i-1].data.length)overlap=true;return {dict,overlap};}
function expectedHook(s){const delta=CAVE-s-8;return Uint8Array.from(u32le((0xeb000000|((delta>>2)&0xffffff))>>>0));}
function classifyIps(p){
 const {dict,overlap}=recordsAt(p);const offset=at=>dict.get(at+0x100)?.data;
 const ipsNew=makeRelocatedIPS(),ipsOldTarget=0x1538e98;
 const isExactHook=target=>p.format==='IPS32'&&!overlap&&p.records.length===2&&SITES.every(s=>bytesEqual(offset(s)||[],Uint8Array.from(u32le(armBranch(s,target)))));
 if(isExactHook(MODULE_HOOK))return {title:'Recognised P753 merged CPU Picker IPS',message:'The two hooks target the P753 100-kart CPU helper. The IPS contains no 52-driver presets; import your saved JSON to recover settings. Existing settings have not changed.'};
 if(isExactHook(ipsOldTarget))return {title:'Recognised older P518 CPU Picker IPS',message:'Old CPU hooks target subsdk2+0x3E98, which is incompatible with P753. Do not install with the new 100-kart module. Load your saved JSON; no settings changed.'};
 const sitesMatch=p.format==='IPS32'&&!overlap&&p.records.length===4&&SITES.every(s=>bytesEqual(offset(s)||[],expectedHook(s)));
 // This exact-match requirement prevents unrelated patches from overwriting personal profiles.
 if(sitesMatch&&bytesEqual(offset(CAVE)||[],Uint8Array.from(HOOK))){
  const raw=offset(DATA);if(raw?.length===52*8*3){
   const imported=profiles.map(x=>({mode:x.mode,bodies:COPY(x.bodies),tires:COPY(x.tires),gliders:COPY(x.gliders)}));
   for(let d=0;d<52;d++){
    const records=Array.from({length:8},(_,j)=>Array.from(raw.slice((d*8+j)*3,(d*8+j)*3+3)));
    if(records.every(c=>c.every(v=>v===255))){imported[d].mode='nintendo';continue;}
    if(records.some(c=>c.some(v=>v===255)))throw Error('Partial Nintendo sentinel for driver '+d+'.');
    imported[d].mode='custom';imported[d].bodies=records.map(c=>decodeCPU100Body(c[0]));imported[d].tires=records.map(c=>c[1]);imported[d].gliders=records.map(c=>c[2]);
   }
   validate(imported);
   return {title:'Recognised legacy ClearLane v0.11 complete eight-combination IPS',message:'Recovered all 52 driver modes and all eight matched BODY, tyre and glider slots from this IPS32. Click Apply to restore the complete profile. File validity does not prove game compatibility or patch memory safety.',imported,fullCombo:true};
  }
 }
 // Prior v0.8–v0.10 BODY-only IPS remains importable, preserving the current tyres/gliders.
 if(sitesMatch){
  const cave=Uint8Array.from(LEGACY_BODY_HOOK),signed=(DATA-(CAVE+0x2c+8))|0;cave.set(u32le(signed),0x48);
  if(bytesEqual(offset(CAVE)||[],cave)){
   const raw=offset(DATA);if(raw?.length===416){
    const imported=profiles.map(x=>({mode:x.mode,bodies:COPY(x.bodies),tires:COPY(x.tires),gliders:COPY(x.gliders)}));
    for(let d=0;d<52;d++){
     const choices=Array.from(raw.slice(d*8,d*8+8));if(choices.every(v=>v===255)){imported[d].mode='nintendo';continue;}
     if(choices.some(v=>!allowed.has(v)))throw Error('Unsupported BODY ID in profile for driver '+d+'.');
     imported[d].mode='custom';imported[d].bodies=choices;
    }
    validate(imported);
    return {title:'Recognised legacy eight-BODY-only profile',message:'Recovered 52 drivers × 8 BODY slots. Existing saved tyre and glider values stay unchanged because this older IPS did not contain them.',imported,fullCombo:false};
   }
  }
 }
 const bs=Uint8Array.from([41,0,160,227]);
 if(p.format==='IPS32'&&p.records.length===2&&SITES.every(s=>bytesEqual(offset(s)||[],bs)))return {title:'Recognised Blue Seven CPU test',message:'This patch makes CPUs use Blue Seven (BODY41). It has no per-character eight-combination profiles to restore. Your saved configuration has not changed.'};
 const fixedCave=Uint8Array.from([0x0c,0x00,0x56,0xe3,0x02,0x00,0x00,0x2a,0x0c,0xc0,0x8f,0xe2,0x06,0x00,0xdc,0xe7,0x1e,0xff,0x2f,0xe1,0x05,0x01,0x99,0xe7,0x1e,0xff,0x2f,0xe1,0x29,0x2a,0x2b,0x2c,0x2d,0x29,0x2a,0x2b,0x2c,0x2d,0x29,0x2a]);
 if(p.format==='IPS32'&&!overlap&&p.records.length===3&&SITES.every(s=>bytesEqual(offset(s)||[],expectedHook(s)))&&bytesEqual(offset(0x694c30+0x100-0x100)||[],fixedCave))return {title:'Recognised five-kart CPU test',message:'This is the working BODY41–45 CPU-slot test, not a 52-driver eight-preset file. It contains no customisable per-character eight-combination data. Your saved configuration has not changed.'};
 if(p.format==='IPS32'&&p.records.length>60&&p.records.every(r=>r.offset>=0x547000&&r.offset<0x550000&&r.data.length===4))return {title:'Recognised CPU four-choice instruction patch',message:'This edits individual original CPU-choice instructions. It does not contain eight-preset profiles in our editor format, so it can be inspected but cannot be imported as 52 complete loadouts. Your settings are unchanged.'};
 return {title:'Unrecognised '+p.format+' patch',message:'This patch cannot be safely converted to editor profiles. No changes were made. IPS files contain patch records, not necessarily vehicle assignments, and may be unrelated mods.'+(overlap?' Overlapping patch records were detected.':'')};
}
$('importIps').onclick=()=>$('ipsFile').click();
$('ipsFile').onchange=async()=>{
 const f=$('ipsFile').files[0];$('ipsFile').value='';if(!f)return;pendingIps=null;$('ipsReport').hidden=false;$('applyIps').hidden=true;
 try{const p=parseIps(new Uint8Array(await f.arrayBuffer())),result=classifyIps(p);pendingIps=result.imported||null;
 $('ipsTitle').textContent=result.title;$('ipsDetails').textContent=result.message;
 $('ipsRecordList').textContent='File: '+f.name+' | '+p.format+' | '+p.records.length+' records\n'+p.records.slice(0,20).map(r=>'0x'+r.offset.toString(16).toUpperCase().padStart(8,'0')+' : '+r.data.length+' bytes').join('\n')+(p.records.length>20?'\n… '+(p.records.length-20)+' further records':'');
 $('applyIps').hidden=!pendingIps;setStatus(result.title+(pendingIps?' — click Apply to use recovered loadouts.':' — settings were not changed.'),!!pendingIps);
 }catch(e){$('ipsTitle').textContent='IPS import refused';$('ipsDetails').textContent=e.message;$('ipsRecordList').textContent='No settings changed.';setStatus('IPS import refused: '+e.message);}
};
$('applyIps').onclick=()=>{if(!pendingIps)return;profiles=pendingIps.map(p=>({mode:p.mode,bodies:COPY(p.bodies),tires:COPY(p.tires),gliders:COPY(p.gliders)}));pendingIps=null;render();persist();$('ipsReport').hidden=true;setStatus('Restored selected IPS profiles and autosaved. v0.11 imports restore all 3 parts; older BODY-only IPS imports preserve the current tyres/gliders.',true);};
$('dismissIps').onclick=()=>{$('ipsReport').hidden=true;pendingIps=null;};


// ===== v0.17 forward-compatible staged part catalogue =====
const BASE_KARTS=KARTS.map(k=>({...k})),BASE_TIRE_NAMES=[...TIRE_NAMES],BASE_GLIDER_NAMES=[...GLIDER_NAMES];
const BASE_TIRE_COUNT=BASE_TIRE_NAMES.length,BASE_GLIDER_COUNT=BASE_GLIDER_NAMES.length;
const CATKEY='clearlane.cpu8.future.catalog.v17.'+BUILD;
let STAGED_CATALOG={schema:'clearlane-part-catalog-v1',build:BUILD,bodies:[],tires:[],gliders:[]};
function cleanCatalog(raw,allowDelta=false){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error('Catalogue must be an object.');
 const source=raw.partCatalog||raw.extensions?.partCatalog||raw;
 if(source.schema!=='clearlane-part-catalog-v1'||source.build!==BUILD)throw Error('Catalogue schema/Build ID mismatch.');
 const out={schema:'clearlane-part-catalog-v1',build:BUILD,bodies:[],tires:[],gliders:[]};
 for(const kind of ['bodies','tires','gliders']){
  const a=source[kind]||[];if(!Array.isArray(a)||a.length>300)throw Error('Invalid '+kind+' array or more than 300 entries.');
  for(const e of a){
   if(!e||typeof e!=='object'||!Number.isSafeInteger(e.id)||e.id<0||e.id>65535||typeof e.name!=='string'||!e.name.trim()||e.name.trim().length>70)throw Error('Invalid '+kind+' part name/ID.');
   // v0.22 may have staged Ink Hatcher manually. It is now a protected base ID.
   if(kind==='bodies'&&e.id===118&&e.name.trim().toLowerCase()==='ink hatcher')continue;
   if(kind==='bodies'&&(e.id<=118||BASE_KARTS.some(k=>k.id===e.id)))throw Error('BODY118 is reserved for Ink Hatcher; custom vehicles must use BODY119 or higher.');
   if(kind==='tires'&&e.id<BASE_TIRE_COUNT || kind==='gliders'&&e.id<BASE_GLIDER_COUNT)throw Error('Original tyre/glider IDs cannot be replaced.');
   const category=kind==='bodies'?(e.category||'kart'):'part';
   if(kind==='bodies'&&!['kart','bike','atv'].includes(category))throw Error('Vehicle category must be kart/bike/atv.');
   if(out[kind].some(x=>x.id===e.id))throw Error('Duplicate '+kind+' ID '+e.id);
   out[kind].push({id:e.id,name:e.name.trim(),...(kind==='bodies'?{category}:{})});
  }
  out[kind].sort((a,b)=>a.id-b.id);
  if(!allowDelta&&kind!=='bodies')for(let i=0;i<out[kind].length;i++)if(out[kind][i].id!==(kind==='tires'?BASE_TIRE_COUNT:BASE_GLIDER_COUNT)+i)throw Error(kind+' staged IDs must be contiguous starting after the original entries.');
 }
 return out;
}
function applyCatalog(raw){
 const c=cleanCatalog(raw);
 KARTS.splice(0,KARTS.length,...BASE_KARTS,...c.bodies.map(x=>({id:x.id,name:x.name,stock:false,staged:true,category:x.category})));
 TIRE_NAMES.splice(0,TIRE_NAMES.length,...BASE_TIRE_NAMES,...c.tires.map(x=>x.name));
 GLIDER_NAMES.splice(0,GLIDER_NAMES.length,...BASE_GLIDER_NAMES,...c.gliders.map(x=>x.name));
 allowed.clear();byID.clear();for(const k of KARTS){allowed.add(k.id);byID.set(k.id,k);}
 STAGED_CATALOG=c;
}
function mergeCatalog(added){
 const a=cleanCatalog(added,true),c=JSON.parse(JSON.stringify(STAGED_CATALOG));
 for(const kind of ['bodies','tires','gliders'])for(const row of a[kind]){
  const old=c[kind].find(x=>x.id===row.id);
  if(old){if(old.name!==row.name||(kind==='bodies'&&old.category!==row.category))throw Error('Existing '+kind+' ID'+row.id+' has a different definition.');}
  else c[kind].push(row);
 }
 return cleanCatalog(c);
}
function stagePartsInUse(){const used=[];for(let d=0;d<profiles.length;d++){const p=profiles[d];if(p.mode!=='custom')continue;for(let j=0;j<8;j++){
 const b=p.bodies[j],t=p.tires[j],g=p.gliders[j];
 if(b===118||byID.get(b)?.staged||b>254)used.push(DRIVER_NAMES[d]+' combo'+(j+1)+' BODY'+b);
 if(t>=BASE_TIRE_COUNT)used.push(DRIVER_NAMES[d]+' combo'+(j+1)+' tyre'+t);
 if(g>=BASE_GLIDER_COUNT)used.push(DRIVER_NAMES[d]+' combo'+(j+1)+' glider'+g);
 }}return used;
}
function assertRuntimeSelections(ps){
 for(let d=0;d<ps.length;d++)if(ps[d].mode==='custom')for(let j=0;j<8;j++){
  const b=ps[d].bodies[j],t=ps[d].tires[j],g=ps[d].gliders[j];
  if(b===118||byID.get(b)?.staged||b>254||t>=BASE_TIRE_COUNT||g>=BASE_GLIDER_COUNT)
   throw Error('Cannot export staged/unregistered CPU part: '+DRIVER_NAMES[d]+' preset '+(j+1)+', BODY'+b+', tyre'+t+', glider'+g+'. Save JSON until runtime mapping is verified.');
 }
}
function persistCatalog(){try{localStorage.setItem(CATKEY,JSON.stringify(STAGED_CATALOG));}catch(e){$('catalogStatus').textContent='Browser storage blocked: export complete JSON to keep your staged catalogue.';}}
function restoreCatalog(){try{const a=localStorage.getItem(CATKEY);if(a)applyCatalog(JSON.parse(a));}catch(e){$('catalogStatus').textContent='Staged catalogue restore failed: '+e.message+'; import your saved JSON backup.';}}
function catalogStatus(s){$('catalogStatus').textContent=s;}
function renderCatalog(){
 $('catalogCount').textContent=KARTS.length+' vehicles · '+TIRE_NAMES.length+' tyres · '+GLIDER_NAMES.length+' gliders, '+(STAGED_CATALOG.bodies.length+STAGED_CATALOG.tires.length+STAGED_CATALOG.gliders.length)+' staged';
 const root=$('catalogRows');root.replaceChildren();
 for(const kind of ['bodies','tires','gliders'])for(const part of STAGED_CATALOG[kind]){
  const tr=document.createElement('tr');for(const label of [kind==='bodies'?part.category.toUpperCase():kind==='tires'?'Tyre':'Glider',kind==='bodies'?'BODY'+part.id:'ID'+part.id,part.name]){const td=document.createElement('td');td.textContent=label;tr.append(td);}
  const action=document.createElement('td'),remove=document.createElement('button');remove.textContent='Remove';remove.className='textbutton';remove.title='Remove only if unused in every CPU preset';remove.onclick=()=>{try{const c=JSON.parse(JSON.stringify(STAGED_CATALOG));c[kind]=c[kind].filter(x=>x.id!==part.id);if(kind!=='bodies'&&c[kind].some(x=>x.id>part.id))throw Error('Remove the last added '+kind+' first to avoid shifting IDs.');
   // Test for references to this exact ID before removal.
   if(profiles.some(p=>p.bodies?.includes(part.id)&&kind==='bodies' || p[kind]?.includes(part.id)&&kind!=='bodies'))throw Error('Part is used in a saved CPU preset. Replace it before removing.');
   applyCatalog(c);persistCatalog();render();renderCatalog();updateRuntimeGate();catalogStatus('Removed unused '+part.name+'.');}catch(e){catalogStatus('Removal refused: '+e.message);}};action.append(remove);tr.append(action);root.append(tr);
 }
 if(root.children.length===0){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=4;td.textContent='No future parts staged yet.';tr.append(td);root.append(tr);}
}
function renderAllCatalog(){render();renderCatalog();updateVehicleFilter();updateRuntimeGate();}
$('catalogKind').onchange=()=>{$('catalogCategory').disabled=$('catalogKind').value!=='bodies';$('catalogId').placeholder=$('catalogKind').value==='bodies'?'Next BODY':'Auto';};
$('catalogImport').onclick=()=>$('catalogFile').click();
$('catalogFile').onchange=async()=>{const f=$('catalogFile').files[0];$('catalogFile').value='';if(!f)return;try{if(f.size>500000)throw Error('Catalogue exceeds 500 KB.');const data=JSON.parse(await f.text());const merged=mergeCatalog(data);applyCatalog(merged);persistCatalog();renderAllCatalog();catalogStatus('Imported staged parts. No game files modified.');}catch(e){catalogStatus('Catalogue import refused: '+e.message);}};
$('catalogExport').onclick=()=>{download('ClearLane_Future_Part_Catalogue.json',JSON.stringify(STAGED_CATALOG,null,2),'application/json');catalogStatus('Exported current staged catalogue.');};
$('catalogTemplate').onclick=()=>{const sample={schema:'clearlane-part-catalog-v1',build:BUILD,bodies:[{id:119,name:'Example future kart',category:'kart'}],tires:[{id:22,name:'Example future tyre'}],gliders:[{id:15,name:'Example future glider'}]};download('ClearLane_Future_Parts_TEMPLATE.json',JSON.stringify(sample,null,2),'application/json');catalogStatus('Template downloaded. Replace example names/IDs with real published values before using.');};
$('catalogAdd').onclick=()=>{try{
 const kind=$('catalogKind').value,n=$('catalogName').value.trim(),raw=$('catalogId').value.trim();
 const id=raw===''?(kind==='bodies'?Math.max(118,...STAGED_CATALOG.bodies.map(x=>x.id))+1:(kind==='tires'?TIRE_NAMES.length:GLIDER_NAMES.length)):Number(raw);
 const row={id,name:n,...(kind==='bodies'?{category:$('catalogCategory').value}:{})},c={schema:'clearlane-part-catalog-v1',build:BUILD,bodies:[],tires:[],gliders:[]};c[kind].push(row);
 // For sequential types, the imported single-item template is allowed only at the next unused ID.
 if(kind!=='bodies'&&id!==(kind==='tires'?TIRE_NAMES.length:GLIDER_NAMES.length))throw Error('The next '+kind+' ID must be '+(kind==='tires'?TIRE_NAMES.length:GLIDER_NAMES.length)+'.');
 // Normalize a single addition separately, since tyre/glider ID starts at the current end.
 {const v=mergeCatalog(c);applyCatalog(v);}
 persistCatalog();$('catalogName').value='';$('catalogId').value='';renderAllCatalog();catalogStatus('Added '+n+' as '+kind+' ID'+id+' (staging only).');
 }catch(e){catalogStatus('Cannot add part: '+e.message);}};
restoreCatalog();

restore();render();renderCatalog();

// ===== Unified studio v0.16: preserve old v0.8/v0.9 JSON and P753 loadout engine =====
(function(){'use strict';
const EXTKEY='clearlane.cpu8.unified.ext.v16.'+BUILD;
const ORIGINAL=[1,1,1,1,1,.85,.85,.85,1.1,1.1,1.1,1.1,1.1,1,1,.85,.85,.85,.85,.85,.85,.85,.85,.85,.85,1,1,1.1,1.1,1,1,1.1,1,.85,1,1.1,1,1,.85,.85,1.1,1,1,1.1,1,1,1.1,1,1,1.1,1,1.1,1];
const FRAME_FLOAT={'0.85':[0x9a,0x99,0x59,0x3f],'1':[0,0,0x80,0x3f],'1.1':[0xcd,0xcc,0x8c,0x3f]};
const COLOUR_NAMES=[[4,'Yoshi',9],[16,'Shy Guy',9],[44,'Birdo',9],[41,'Inkling Girl',3],[42,'Inkling Boy',3]];
function stockFrames(){const targets={};for(let i=5;i<=51;i++)if(i!==29)targets[i]=ORIGINAL[i];return {shared:1,targets};}
function requestedFrames(){const s=stockFrames();s.shared=1.1;for(let i=5;i<=51;i++)if(i!==29)s.targets[i]=([18,19,20].includes(i)||ORIGINAL[i]>=1)?1.1:1;return s;}
let frame=requestedFrames(),colours={4:false,16:false,44:false,41:false,42:false};
let activeVerified=null;
$('runtime100Confirm').addEventListener('change',()=>updateRuntimeGate());
function sizeLabel(n){return n===.85?'Small':n===1?'Medium':'Large';}
function saneFrame(x){if(!x||typeof x!=='object'||!x.targets||typeof x.targets!=='object'||Array.isArray(x.targets))throw Error('Driver-frame profile missing targets.');
 if(x.buildId&&x.buildId!==BUILD)throw Error('Different frame-profile Build ID.');
 const s=stockFrames();if(x.shared!==undefined){if(![1,1.1].includes(Number(x.shared)))throw Error('Shared frame must be Medium or Large.');s.shared=Number(x.shared);}
 for(const [key,v] of Object.entries(x.targets)){if(!/^(?:[5-9]|[1-4][0-9]|5[01])$/.test(key)||Number(key)===29||![.85,1,1.1].includes(Number(v)))throw Error('Invalid or protected frame ID '+key);s.targets[key]=Number(v);}
 return s;}
function safeColours(x){const out={4:false,16:false,44:false,41:false,42:false};if(x===undefined)return out;if(!x||typeof x!=='object'||Array.isArray(x))throw Error('Invalid random-colour settings.');for(const [id] of COLOUR_NAMES){const v=x[id]===undefined?false:x[id];if(typeof v!=='boolean')throw Error('Invalid colour toggle for driver '+id);out[id]=v;}return out;}
function notifyUnified(s){$('unifiedStatus').textContent=s;setStatus(s,true);}
function persistExtra(){try{localStorage.setItem(EXTKEY,JSON.stringify({frame,randomColours:colours}));}catch(e){} }
function restoreExtra(){try{const raw=localStorage.getItem(EXTKEY);if(raw){const x=JSON.parse(raw);frame=saneFrame(x.frame);colours=safeColours(x.randomColours);}}catch(e){$('unifiedStatus').textContent='Stored extended settings invalid: '+e.message+'. Original defaults retained; import a backup JSON.';}}

// ===== v0.21 — safe offline VS/Battle team planning =====
// Preferences are keyed by existing DRIVER_NAMES indices, NOT runtime racer slots.
// No retail main/subsdk2 team assignment patch is proven or included.
const TEAM_SCHEMA='clearlane-cpu-team-preferences-v1';
const TEAM_KEY='clearlane.cpu8.teams.v21.'+BUILD;
const TEAM_VALUES=['nintendo','red','blue'];
function emptyTeamMode(){return {playerTeam:'red',assignments:Array(52).fill('nintendo')};}
function emptyTeamSettings(){return {schema:TEAM_SCHEMA,build:BUILD,modes:{vs:emptyTeamMode(),battle:emptyTeamMode()}};}
function parseTeamSettings(input){
 if(!input||typeof input!=='object'||Array.isArray(input)||input.schema!==TEAM_SCHEMA||input.build!==BUILD||!input.modes||typeof input.modes!=='object')throw Error('Not a ClearLane 3.0.3 teammate configuration.');
 const out=emptyTeamSettings();
 for(const mode of ['vs','battle']){
  const m=input.modes[mode];
  if(!m||typeof m!=='object'||!['red','blue'].includes(m.playerTeam)||!Array.isArray(m.assignments)||m.assignments.length!==52||m.assignments.some(v=>!TEAM_VALUES.includes(v)))throw Error('Invalid '+mode.toUpperCase()+' team roster. Expected 52 Nintendo/Red/Blue entries.');
  out.modes[mode]={playerTeam:m.playerTeam,assignments:m.assignments.slice()};
 }
 return out;
}
let teamSettings=emptyTeamSettings();
let selectedTeamMode='vs';
function teamPending(){return ['vs','battle'].some(m=>teamSettings.modes[m].assignments.some(v=>v!=='nintendo'));}
function persistTeams(){try{localStorage.setItem(TEAM_KEY,JSON.stringify(teamSettings));$('teamStatus').textContent='Team preferences saved in this browser. Export JSON for a portable backup.';}catch(e){$('teamStatus').textContent='Browser storage unavailable. Export your team JSON before closing this page.';}}
function restoreTeams(){try{const raw=localStorage.getItem(TEAM_KEY);if(raw)teamSettings=parseTeamSettings(JSON.parse(raw));}catch(e){$('teamStatus').textContent='Could not restore teams: '+e.message+'. Nintendo defaults loaded.';}}
function teamCurrentIndex(){const n=Number($('driver').value);return Number.isInteger(n)&&n>=0&&n<52?n:activeDriver;}
function showTeamCurrent(){const id=teamCurrentIndex();$('teamCurrentName').textContent=DRIVER_NAMES[id]+' · Driver ID '+id;$('teamCurrentChoice').value=teamSettings.modes[selectedTeamMode].assignments[id];}
function renderTeams(){
 const m=teamSettings.modes[selectedTeamMode];$('teamMode').value=selectedTeamMode;$('teamPlayerSide').value=m.playerTeam;
 let r=0,b=0;
 for(let i=0;i<52;i++){const v=m.assignments[i];if(v==='red')r++;if(v==='blue')b++;$('team-driver-'+i).value=v;}
 $('teamCounts').textContent='Red '+r+' · Blue '+b+' · Nintendo default '+(52-r-b)+' · Your team '+m.playerTeam.toUpperCase();
 $('teamModeNote').textContent=selectedTeamMode==='vs'?'VS Race: configure Teams in the actual game. These preferences apply only to drivers who appear in the race.':'Battle Mode: preferences remain separate from VS Race. Renegade Roundup must preserve its two-team gameplay and alternating roles.';
 showTeamCurrent();
 const q=$('teamSearch').value.trim().toLowerCase();
 for(let i=0;i<52;i++){$('team-driver-'+i).closest('tr').hidden=q&&!((DRIVER_NAMES[i]+' '+i).toLowerCase().includes(q));}
}
function teamsChanged(){persistTeams();renderTeams();updateRuntimeGate();}
$('teamMode').onchange=()=>{selectedTeamMode=$('teamMode').value;renderTeams();};
$('teamPlayerSide').onchange=()=>{teamSettings.modes[selectedTeamMode].playerTeam=$('teamPlayerSide').value;teamsChanged();};
$('teamCurrentChoice').onchange=()=>{teamSettings.modes[selectedTeamMode].assignments[teamCurrentIndex()]=$('teamCurrentChoice').value;teamsChanged();};
for(let i=0;i<52;i++)$('team-driver-'+i).onchange=()=>{teamSettings.modes[selectedTeamMode].assignments[i]=$('team-driver-'+i).value;teamsChanged();};
$('driver').addEventListener('change',showTeamCurrent);
$('teamSearch').addEventListener('input',renderTeams);
$('teamSetDefault').onclick=()=>{if(!confirm('Restore Nintendo team assignments for this mode only?'))return;teamSettings.modes[selectedTeamMode].assignments.fill('nintendo');teamsChanged();};
$('teamCopyMode').onclick=()=>{const other=selectedTeamMode==='vs'?'battle':'vs';if(!confirm('Copy '+(selectedTeamMode==='vs'?'VS Race':'Battle Mode')+' assignments to '+(other==='vs'?'VS Race':'Battle Mode')+'?'))return;teamSettings.modes[other]={playerTeam:teamSettings.modes[selectedTeamMode].playerTeam,assignments:teamSettings.modes[selectedTeamMode].assignments.slice()};teamsChanged();$('teamStatus').textContent='Copied team preferences to '+other.toUpperCase()+'.';};
$('teamSave').onclick=()=>{download('ClearLane_VS_Battle_CPU_Teams_v021.json',JSON.stringify(teamSettings,null,2),'application/json');$('teamStatus').textContent='Downloaded standalone VS/Battle teammate backup. This is not an IPS or game installation.';};
$('teamSaveComplete').onclick=()=>saveAll();
$('teamImport').onclick=()=>$('teamFile').click();
$('teamFile').onchange=async()=>{const f=$('teamFile').files[0];$('teamFile').value='';if(!f)return;try{if(f.size>250000)throw Error('Team JSON is too large.');const raw=JSON.parse(await f.text());const incoming=raw.extensions?.teamAssignments??raw;const imported=parseTeamSettings(incoming);teamSettings=imported;teamsChanged();$('teamStatus').textContent='Imported VS Race and Battle Mode teammate settings. Original CPU kart combinations remain unchanged.';}catch(e){$('teamStatus').textContent='Team import refused: '+e.message+'; existing settings unchanged.';}};

function allJSON(){return {version:9,build:BUILD,activeDriver,profiles,extensions:{schema:'clearlane-cpu-studio-v17',partCatalog:STAGED_CATALOG,frame:{format:'clearlane-mk8dx-303-driver-size-v1',buildId:BUILD,shared:frame.shared,targets:{...frame.targets}},randomColours:{...colours},teamAssignments:parseTeamSettings(teamSettings),teamRuntimeStatus:'CONFIG_ONLY_NOT_HOOKED',randomRuntimeStatus:'CONFIG_ONLY_NOT_HOOKED'}};}
function renderColours(){const root=$('colourToggles');root.replaceChildren();for(const [id,name,n] of COLOUR_NAMES){const label=document.createElement('label');label.className='toggle';const check=document.createElement('input');check.type='checkbox';check.checked=colours[id];check.setAttribute('aria-label','Random '+name+' CPU colours');check.onchange=()=>{colours[id]=check.checked;persistExtra();renderColours();renderRandomGate();};const span=document.createElement('span');span.textContent=name+' · '+n+' appearances';label.append(check,span);root.append(label);}}
function renderRandomGate(){const on=COLOUR_NAMES.filter(([id])=>colours[id]).map(([,n])=>n);const button=$('export');button.disabled=!(loadedModule && activeVerified && activeVerified.rosterCount===100 && $('runtime100Confirm').checked)||on.length>0||stagePartsInUse().length>0||teamPending();const n=on.length?on.join(', '):'None';$('colourPreview').textContent='Selected random drivers: '+n+'\nIMPORTANT: colour choices save to JSON but are not installed without a new verified rebuilt-subSDK2 colour hook. Full CPU ZIP export is blocked while any colour toggle is ON.';}
updateRuntimeGate=()=>{const uses=stagePartsInUse(),random=COLOUR_NAMES.some(([id])=>colours[id]);$('export').disabled=!(loadedModule&&activeVerified&&activeVerified.rosterCount===100&&$('runtime100Confirm').checked)||uses.length>0||random||teamPending();
 $('catalogStatus').textContent=uses.length?uses.length+' active future selections; game ZIP locked until these part IDs have a verified runtime backend. Example: '+uses[0]:STAGED_CATALOG.bodies.length+STAGED_CATALOG.tires.length+STAGED_CATALOG.gliders.length?'Future parts available for planning. Game ZIP stays limited to the existing CPU-verified roster of 100 karts, 22 tyres and 15 gliders.':'Ink Hatcher is available for JSON planning (BODY118). CPU ZIP still requires a supported 100-card module and cannot include BODY118.';};
function sampleColours(){const lines=COLOUR_NAMES.map(([id,name,n])=>name+': '+(colours[id]?'variant '+Math.floor(Math.random()*n)+' of '+n:'Nintendo original colour'));$('colourPreview').textContent=lines.join('\n')+'\nPreview only — does not modify a game file.';}
function frameValue(i){return i<=4?frame.shared:(i===29||i===52?ORIGINAL[i]:frame.targets[i]);}
function renderFrames(){const root=$('frameRows');root.replaceChildren();$('sharedFrame').value=String(frame.shared);const q=$('frameSearch').value.trim().toLowerCase();let modified=0,shown=0;
 for(let i=0;i<53;i++){if(i!==29&&i!==52&&frameValue(i)!==ORIGINAL[i])modified++;let nm=i===52?'Mii (secondary)':i===29?'Mii (primary)':DRIVER_NAMES[i];if(q&&!nm.toLowerCase().includes(q)&&!String(i).includes(q))continue;shown++;
  const item=document.createElement('div');item.className='frame-row';const name=document.createElement('span');name.textContent=nm+' #'+i;const orig=document.createElement('small');orig.textContent=sizeLabel(ORIGINAL[i])+' →';const slot=document.createElement('div');if(i===29||i===52){slot.textContent='Protected Mii';slot.className='tinycap';}else if(i<=4){slot.textContent=sizeLabel(frame.shared)+' (shared)';slot.className='tinycap';}else{const s=document.createElement('select');for(const [v,n] of [['0.85','Small'],['1','Medium'],['1.1','Large']]){const op=document.createElement('option');op.value=v;op.textContent=n;s.append(op);}s.value=String(frame.targets[i]);s.setAttribute('aria-label','Frame size for '+nm);s.onchange=()=>{frame.targets[i]=Number(s.value);persistExtra();renderFrames();};slot.append(s);}item.append(name,orig,slot);root.append(item);}
 $('frameSummary').textContent=modified+' modified · '+shown+' visible · Miis locked';}
function frameRecords(){let out=[];if(frame.shared===1.1)out.push({offset:0x186c98,data:new Uint8Array([0x3c,0x8a,0x9f,0xed])});for(let i=5;i<=51;i++)if(i!==29 && frame.targets[i]!==ORIGINAL[i])out.push({offset:0xd9f450+(i-5)*4,data:new Uint8Array(FRAME_FLOAT[String(frame.targets[i])])});return out.sort((a,b)=>a.offset-b.offset);}
function ipsFrame(){const rec=frameRecords();if(!rec.length)throw Error('Frame sizes are all Nintendo defaults, so no patch is needed.');const r=[80,65,84,67,72];for(const {offset,data} of rec){r.push((offset>>>16)&255,(offset>>>8)&255,offset&255,0,data.length,...data);}r.push(69,79,70);return new Uint8Array(r);}
function frameReadme(){return 'ClearLane CPU Studio v0.16 — Driver Frame Size (main IPS only)\nTarget: MK8DX retail 3.0.3, '+BUILD+'\nThis patch edits main at established driver-size table offsets and optional shared fallback instruction. Miis untouched.\nOnly install on retail Build ID above, with no existing frame-size IPS. Not independently verified against P828 patched main; backup/rollback before testing.\nFor Atmosphere copy atmosphere/exefs_patches; for Eden use EDEN_MOD_DATA folder.\nDisable old Driver Frame Size TEST01 or similar IPS.\n';}
function exportFrameZip(){const ips=ipsFrame();const enc=new TextEncoder();const zip=zipPair([{filename:'atmosphere/exefs_patches/ClearLane_FrameSize_v016/'+BUILD+'.ips',data:ips},{filename:'EDEN_MOD_DATA/ClearLane_FrameSize_v016/exefs/'+BUILD+'.ips',data:ips},{filename:'README_FRAME_SIZE.txt',data:enc.encode(frameReadme())}]);download('ClearLane_FrameSize_Only_v015_MTP.zip',zip,'application/zip');notifyUnified('Frame-size-only ZIP prepared. Install ONE layout, not both. Review the README and keep your current main/subsdk2.');}
// Modern-module proof: exact known CPU helper opcode window, verified CLCP pointer, and valid NSO segments.
const REFHELPER=Uint8Array.from('050199e7ff5f2de90c4098e5340054e31f00002a80509fe505508fe0005095e5000055e31a00000a000095e5000050e31700000a540080e2675dc5eba05ea0e1844185e0844084e050609fe506608fe0046086e00000d6e50110d6e50220d6e52d0050e30300009a400050e30800003a630050e30600008a150051e30400008a0e0052e30200008a041088e5082088e500008de5ff5fbde81eff2fe1e4fa9dffbc060000'.match(/../g).map(h=>parseInt(h,16)));
function moduleSegments(b){if(asciiAt(b,0,4)!=='NSO0'||b.length<0x4500)throw Error('Not an expected uncompressed NSO0 subsdk2.');const segs=[];for(const h of [0x10,0x20,0x30]){const fo=readLE(b,h),rva=readLE(b,h+4),size=readLE(b,h+8);if(!size||fo<0x100||fo+size>b.length||size>0x200000)throw Error('Compressed, truncated or unexpected NSO segment at 0x'+h.toString(16));segs.push({fo,rva,size,hash:h===0x10?0xa0:h===0x20?0xc0:0xe0});}for(let i=0;i<segs.length;i++)for(let j=i+1;j<segs.length;j++){const a=segs[i],c=segs[j];if(a.fo<c.fo+c.size&&c.fo<a.fo+a.size)throw Error('NSO segments overlap.');}return segs;}
// The P847 build has 100 published menu cards and a 42-entry compact name/model registry.
// We verify these independent A32 opcode and resource witnesses before enabling CPU writing.
function verify100CardRegistry(b,text){const rd=rva=>readLE(b,text.fo+rva);const expected=[
 [0x2100,0xe35c002a,'name guard42'],[0x2128,0xe35c002a,'icon guard42'],
 [0x2438,0xe35c002a,'model guard42'],[0x3cdc,0xe35c0064,'owner count100'],
 [0x3ce0,0x83a0c064,'owner upper100'],[0x3e6c,0xe35b0064,'other owner count100'],
 [0x3e70,0x83a0b064,'other owner upper100']];
 for(const [at,word,label] of expected)if(rd(at)!==word)throw Error('Not audited P847 100-card registry ('+label+', +0x'+at.toString(16)+').');
 const view=b.slice(text.fo,text.fo+text.size),decoder=new TextDecoder('utf-16le');
 for(const term of ['Shooting Star','Bulldozer','Sparky']){
  const encoded=new Uint8Array(term.length*2);for(let i=0;i<term.length;i++)encoded[i*2]=term.charCodeAt(i);
  if(!hasByteSequence(view,encoded))throw Error('100-card name registry missing '+term+'.');
 }
 const enc=new TextEncoder();for(const key of ['K_Sst','K_Bdz','K_Spk'])if(!hasByteSequence(view,enc.encode(key)))throw Error('100-card resource registry missing '+key+'.');
 // At +0x3FC4, +0x3FD8, +0x3FEC the P846 compact registry guard allows 15 native rows.
 for(const at of [0x3fc4,0x3fd8,0x3fec])if(rd(at)!==0xe35c000f)throw Error('Compact resource limit mismatch at +0x'+at.toString(16)+'.');
}
function hasByteSequence(hay,needle){outer:for(let i=0;i<=hay.length-needle.length;i++){for(let j=0;j<needle.length;j++)if(hay[i+j]!==needle[j])continue outer;return true;}return false;}
async function inspectModule(b){const segs=moduleSegments(b);for(const s of segs){const digest=await sha256Bytes(b.slice(s.fo,s.fo+s.size));if(!bytesEqual(digest,b.slice(s.hash,s.hash+32)))throw Error('NSO SHA-256 segment mismatch; corrupted or unsupported module.');}
 const text=segs[0];if(text.rva!==0||text.size!==0x5000)throw Error('Expected P847 100-card ARM32 .text size 0x5000, not an older P753/97-card module.');
 verify100CardRegistry(b,text);
 const code=b.slice(text.fo+0x3f04,text.fo+0x3f04+164);if(code.length!==164)throw Error('CPU helper truncated.');
 for(let i=0;i<0x9c;i++){if((i>=0x60&&i<0x64)||(i>=0x70&&i<0x74))continue;if(code[i]!==REFHELPER[i])throw Error('CPU helper differs at +0x'+i.toString(16)+'; protected code may have moved.');}
 const low=readLE(code,0x60),cmp=readLE(code,0x70);
 if(![0xe350002d,0xe350003d].includes(low))throw Error('CPU helper native row guard is not original45 or audited experimental61.');
 if(![0xe3500063,0xe3500066].includes(cmp))throw Error('CPU helper max BODY bound is not 99/102.');
 let hits=[];for(let p=0;p+1264<=b.length;p++)if(b[p]===67&&b[p+1]===76&&b[p+2]===67&&b[p+3]===80){try{validateProfileBytes(b.slice(p,p+1264));hits.push(p);}catch(e){}}
 if(hits.length!==1)throw Error('Expected one valid CLCP profile; got '+hits.length+'.');const profileFile=hits[0];const containing=segs.filter(s=>profileFile>=s.fo&&profileFile+1264<=s.fo+s.size);if(containing.length!==1)throw Error('CLCP not contained in exactly one NSO segment.');const profileRva=containing[0].rva+(profileFile-containing[0].fo);
 const rel=readLE(code,0xa0)|0;if(((0x3f58+rel)>>>0)!==profileRva+16)throw Error('CPU helper CLCP pointer does not target profile payload.');
 // ARM32 hooks must remain at the known call sites; exact user's main/other active IPS still require an external compatibility check.
 const sha=await shaHex(b);return {segs,profileFile,profileRva,cmp,low,sha,sourceSize:b.length,rosterCount:100};}
async function modifyCompatibleModule(original,proof){const dst=original.slice();const patch=makeNativeProfile();dst.set(patch,proof.profileFile);
 // The original P753 CPU compiler enables BODY100-102. For rebuilt modules only change this if the known helper bound is 99.
 if(proof.cmp===0xe3500063)setLE(dst,proof.segs[0].fo+0x3f04+0x70,0xe3500066);
 // New compact CPU route accepts native physical BODY47..61 (editor IDs103..117).
 if(proof.low===0xe350002d)setLE(dst,proof.segs[0].fo+0x3f04+0x60,0xe350003d);
 for(const s of proof.segs)dst.set(await sha256Bytes(dst.slice(s.fo,s.fo+s.size)),s.hash);
 const newProof=await inspectModule(dst);if(newProof.profileFile!==proof.profileFile||!bytesEqual(dst.slice(proof.profileFile,proof.profileFile+1264),patch))throw Error('CPU profile round-trip validation failed.');
 // Prove only hashes, exact CPU profile and optional bound CMP changed.
 const validBytes=new Uint8Array(original.length);for(const s of proof.segs)validBytes.fill(1,s.hash,s.hash+32);validBytes.fill(1,proof.profileFile,proof.profileFile+1264);if(proof.cmp===0xe3500063)validBytes.fill(1,proof.segs[0].fo+0x3f04+0x70,proof.segs[0].fo+0x3f04+0x74);if(proof.low===0xe350002d)validBytes.fill(1,proof.segs[0].fo+0x3f04+0x60,proof.segs[0].fo+0x3f04+0x64);
 for(let p=0;p<original.length;p++)if(original[p]!==dst[p]&&!validBytes[p])throw Error('Protected subsdk2 byte changed at 0x'+p.toString(16));return dst;}
// Exact user-supplied P855-lineage 101-card binary: safe READ-ONLY CPU preset recovery.
// Never publish or embed the user's Nintendo executable in this public website.
const OWNER_101_SUBSDK2_SHA='9bad845681c288e5ca2018dbee1513d06325a61f5540e7e70c82800caf607758';
async function inspect101Readonly(b){
 if(await shaHex(b)!==OWNER_101_SUBSDK2_SHA)throw Error('101-kart module has not been verified against the supplied P855-lineage source. Profiles are not imported.');
 const segs=moduleSegments(b);
 for(const s of segs)if(!bytesEqual(await sha256Bytes(b.slice(s.fo,s.fo+s.size)),b.slice(s.hash,s.hash+32)))throw Error('Invalid NSO segment SHA-256.');
 const text=segs[0];if(text.rva!==0||text.size!==0x5000)throw Error('101-kart module .text layout differs.');
 const rd=rva=>readLE(b,text.fo+rva);
 const expected=[[0x2100,0xe35c002b],[0x2128,0xe35c002b],[0x2438,0xe35c002b],[0x3cdc,0xe35c0065],[0x3ce0,0x83a0c065],[0x3e6c,0xe35b0065],[0x3e70,0x83a0b065],[0x3fc4,0xe35c0010],[0x3fd8,0xe35c0010],[0x3fec,0xe35c0010]];
 for(const [at,word] of expected)if(rd(at)!==word)throw Error('P855 101-kart registry mismatch at 0x'+at.toString(16));
 const view=b.slice(text.fo,text.fo+text.size);const enc=new TextEncoder();
 for(const key of ['K_Sst','K_Bdz','K_Spk','K_Inh'])if(!hasByteSequence(view,enc.encode(key)))throw Error('P855 model key missing: '+key);
 for(const name of ['Shooting Star','Bulldozer','Sparky','Ink Hatcher']){
  const bytes=new Uint8Array(name.length*2);for(let i=0;i<name.length;i++)bytes[2*i]=name.charCodeAt(i);
  if(!hasByteSequence(view,bytes))throw Error('P855 name registry missing: '+name);
 }
 const code=b.slice(text.fo+0x3f04,text.fo+0x3f04+164);
 for(let i=0;i<0x9c;i++){if((i>=0x60&&i<0x64)||(i>=0x70&&i<0x74))continue;if(code[i]!==REFHELPER[i])throw Error('P855 CPU helper differs from verified baseline.');}
 const low=readLE(code,0x60),cmp=readLE(code,0x70);
 if(low!==0xe350002d||cmp!==0xe3500063)throw Error('P855 source CPU bounds differ.');
 const profileFile=0x5704;
 validateProfileBytes(b.slice(profileFile,profileFile+1264));
 const r=segs.find(s=>profileFile>=s.fo && profileFile+1264<=s.fo+s.size);
 if(!r)throw Error('P855 CLCP profile not in NSO data.');
 const profileRva=r.rva+profileFile-r.fo;
 const rel=readLE(code,0xa0)|0;
 if(((0x3f58+rel)>>>0)!==profileRva+16)throw Error('P855 CPU payload pointer is invalid.');
 return {segs,profileFile,profileRva,sha:OWNER_101_SUBSDK2_SHA,rosterCount:101,readonly:true};
}
function importModuleProfiles(b,proof){const block=b.slice(proof.profileFile+16,proof.profileFile+1264);const imported=[];for(let d=0;d<52;d++){const a=Array.from({length:8},(_,i)=>Array.from(block.slice((d*8+i)*3,(d*8+i)*3+3)));if(a.every(v=>v.every(x=>x===255))){imported.push({mode:'nintendo',bodies:COPY(EARLY),tires:Array(8).fill(0),gliders:Array(8).fill(0)});continue;}if(a.some(v=>v.some(x=>x===255)))throw Error('Mixed Nintendo/default sentinel for driver '+d);imported.push({mode:'custom',bodies:a.map(v=>decodeCPU100Body(v[0],proof.rosterCount)),tires:a.map(v=>v[1]),gliders:a.map(v=>v[2])});}validate(imported);return imported;}
// Load a current rebuilt module if the unchanged CPU hook and exact CLCP pointer survive; do not make a blind offset-based patch.
$('moduleFile').onchange=async()=>{const f=$('moduleFile').files[0];$('moduleFile').value='';activeVerified=null;loadedModule=null;$('export').disabled=true;if(!f)return;try{if(f.size>4*1024*1024)throw Error('Unexpectedly large subsdk2.');const b=new Uint8Array(await f.arrayBuffer());let proof;
 try{proof=await inspectModule(b);}catch(e){proof=await inspect101Readonly(b);}
 loadedModule=b;activeVerified=proof;
 if(proof.readonly){
  $('runtime100Confirm').checked=false;$('runtime100Confirm').disabled=true;
  $('moduleStatus').textContent='Verified your EXACT P855-lineage 101-kart subsdk2 ('+proof.sha.slice(0,16)+'…). 52 × 8 CLCP presets are available for READ-ONLY IMPORT below. Game ZIP export is disabled: the 101st kart runtime and external CPU IPS are not yet verified.';
  $('export').disabled=true;renderRandomGate();updateRuntimeGate();notifyUnified('101-kart module verified. Use “Read presets from loaded subsdk2” to restore all 416 selections, after backing up your existing JSON.');return;
 }
 $('runtime100Confirm').disabled=false;
 const note='Verified CPU helper and CLCP: profile at file+0x'+proof.profileFile.toString(16)+', RVA+0x'+proof.profileRva.toString(16)+', module SHA256 '+proof.sha+'.';$('moduleStatus').textContent=note+' P847 100-card registry and CPU helper verified. Experimental native 47–61 routing.';$('export').disabled=true;renderRandomGate();updateRuntimeGate();notifyUnified('P847 100-card static verification passed. Physical 47–61 CPU mapping remains experimental until a full offline race test.');}
 catch(e){$('moduleStatus').textContent='Module export BLOCKED: '+e.message;notifyUnified('subsdk2 refused: '+e.message);}};
$('export').onclick=async()=>{try{if(!loadedModule||!activeVerified||activeVerified.rosterCount!==100)throw Error('Only a verified P847 100-card module may use this experimental exporter. The supplied P855 101-card module is READ-ONLY.');if(!$('runtime100Confirm').checked)throw Error('Confirm that your ACTUAL installed module is the P847 100-card baseline. The P855 101-card Ink Hatcher module must not be replaced by this export.');assertRuntimeSelections(profiles);if(COLOUR_NAMES.some(([id])=>colours[id]))throw Error('Random CPU colours selected. Runtime colour hook has not been verified for rebuilt subsdk2; no partly applied ZIP is allowed. Disable colours for CPU+frame export or save your all-settings JSON.');if(teamPending())throw Error('Custom VS/Battle team preferences selected. The retail team hook is not yet implemented; save JSON instead of installing an incomplete CPU ZIP.');
 const module=await modifyCompatibleModule(loadedModule,activeVerified),ips=makeRelocatedIPS(),enc=new TextEncoder(),entries=[{filename:'atmosphere/contents/0100152000022000/exefs/subsdk2',data:module},{filename:'atmosphere/exefs_patches/ClearLane_CPU100_v016/'+BUILD+'.ips',data:ips}];const sizes=frameRecords();if(sizes.length)entries.push({filename:'atmosphere/exefs_patches/ClearLane_FrameSize_v016/'+BUILD+'.ips',data:ipsFrame()});
 const note='ClearLane CPU Studio v0.24 - P847 100-CARD EXPERIMENT ONLY - NOT FOR P855 101-CARD SYSTEMS\nMK8DX retail 3.0.3 '+BUILD+'\n\nCPU 52×8 matched preset table compiled against P847 100-card module. BODY103–117 are encoded into native physical BODY47–61 and the original low-range CPU helper guard is raised from 45 to 61. Other module code/data are preserved. Two retail CPU BL hooks included; do not use old CPU IPS with this. Frame-size patch included only if settings differ from Nintendo. Miis untouched.\n\nRANDOM COLOURS NOT ENABLED. This build refuses to export when any random toggle is on. Do not assume JSON controls are runtime colours.\n\nBack up your actual installed subsdk2, main and IPS. Disable other subsdk2-based mods and old CPU and frame-size IPS. Switch MTP: merge the atmosphere tree into SD. This ZIP is for Switch MTP; do not mix with an Eden separate release without adapting the layout.\n\nOriginal module SHA256 '+activeVerified.sha+'\nNew module SHA256 '+await shaHex(module)+'\nNo menu.sarc, Parts.bin, Performance.bin, CSS, alts, wheel or minimap edits.\nOffline checks pass; game compatibility is not established. Roll back with your original matched executable files if race/menu fails.\n';entries.push({filename:'README_FIRST.txt',data:enc.encode(note)},{filename:'ClearLane_All_Settings_Backup.json',data:enc.encode(JSON.stringify(allJSON(),null,2))});download('ClearLane_CPU100_P847_Experimental_v024.zip',zipPair(entries),'application/zip');notifyUnified('Generated guarded 100-card experimental MTP ZIP. Physical 47–61 CPU routing is NOT in-game verified. Backup current subsdk2 and test cautiously. Colours stay off.');}
 catch(e){notifyUnified('Full export refused: '+e.message);}};
$('moduleBackupProfile').onclick=()=>{try{if(!loadedModule||!activeVerified)throw Error('Load a verified P847 100-card or exact P855-lineage 101-card subsdk2 first.');if(!confirm('Replace all 52 edited CPU profiles with the '+activeVerified.rosterCount+'-kart module presets? Export a full JSON backup first.'))return;const imported=importModuleProfiles(loadedModule,activeVerified);profiles=imported;render();persist();notifyUnified('Recovered 52×8 matched CPU presets from verified '+activeVerified.rosterCount+'-kart subsdk2 and saved locally. Game runtime is unchanged.');}catch(e){notifyUnified('Module profile import refused: '+e.message);}};
$('enableColours').onclick=()=>{COLOUR_NAMES.forEach(([id])=>colours[id]=true);persistExtra();renderColours();renderRandomGate();};
$('disableColours').onclick=()=>{COLOUR_NAMES.forEach(([id])=>colours[id]=false);persistExtra();renderColours();renderRandomGate();};
$('previewColours').onclick=sampleColours;
$('sharedFrame').onchange=()=>{frame.shared=Number($('sharedFrame').value)===1.1?1.1:1;persistExtra();renderFrames();};
$('frameSearch').oninput=renderFrames;
$('framePreset').onclick=()=>{frame=requestedFrames();persistExtra();renderFrames();notifyUnified('Requested frame preset restored, including three large-frame babies and locked Miis.');};
$('frameStock').onclick=()=>{frame=stockFrames();persistExtra();renderFrames();notifyUnified('All sizes set to Nintendo defaults; Miis untouched.');};
$('exportFrameIPS').onclick=()=>{try{download('ClearLane_Driver_FrameSize_303_v015.ips',ipsFrame(),'application/octet-stream');notifyUnified('Exported real 3.0.3 frame-size IPS. Disable previous frame-size patch before testing.');}catch(e){notifyUnified(e.message);}};
$('exportFrameZip').onclick=()=>{try{exportFrameZip();}catch(e){notifyUnified(e.message);}};
function saveAll(){download('ClearLane_CPU8_Teams_FutureParts_v021.json',JSON.stringify(allJSON(),null,2),'application/json');notifyUnified('Saved full v0.21 JSON: 416 CPU combinations, future parts, colours, frames, VS Race and Battle teammates.');}
$('saveUnified').onclick=saveAll;$('save').onclick=saveAll;
// Existing Studio v3 / v0.8 / v0.9 imports remain available, without changing prior values if an invalid file is selected.
$('file').onchange=async()=>{const f=$('file').files[0];$('file').value='';if(!f)return;try{if(f.size>2000000)throw Error('JSON file is too large.');const data=JSON.parse(await f.text());let imported;
 if([8,9].includes(data.version)&&data.build===BUILD)imported=data.profiles.map(p=>({...p,tires:p.tires||Array(8).fill(0),gliders:p.gliders||Array(8).fill(0)}));
 else if(data.profileVersion===3&&data.buildId===BUILD&&data.roster){imported=DRIVER_NAMES.map((_,id)=>{const p=data.roster[String(id)];return p?.mode==='custom'?{mode:'custom',bodies:p.combos.slice(0,8).map(c=>c.vehicles),tires:p.combos.slice(0,8).map(c=>c.tires),gliders:p.combos.slice(0,8).map(c=>c.gliders)}:{mode:'nintendo',bodies:COPY(EARLY),tires:Array(8).fill(0),gliders:Array(8).fill(0)};});}
 else throw Error('Only Studio v3, v0.8/v0.9, and v0.15–0.17 JSON formats are supported.');
 let newFrame=frame,newColours=colours,newCatalog=STAGED_CATALOG,newTeams=teamSettings;
 if(data.extensions!==undefined){if(!data.extensions||!['clearlane-cpu-studio-v15','clearlane-cpu-studio-v16','clearlane-cpu-studio-v17'].includes(data.extensions.schema))throw Error('Unknown extensions schema.');newFrame=saneFrame(data.extensions.frame);newColours=safeColours(data.extensions.randomColours);if(data.extensions.partCatalog)newCatalog=mergeCatalog(data.extensions.partCatalog);if(data.extensions.teamAssignments!==undefined)newTeams=parseTeamSettings(data.extensions.teamAssignments);}
 // Temporarily load candidate catalog for validation, and undo it on any failure.
 const before=STAGED_CATALOG;try{applyCatalog(newCatalog);validate(imported);}catch(e){applyCatalog(before);throw e;}
 profiles=imported.map(p=>({mode:p.mode,bodies:COPY(p.bodies),tires:COPY(p.tires),gliders:COPY(p.gliders)}));frame=newFrame;colours=newColours;teamSettings=newTeams;
 if(Number.isSafeInteger(data.activeDriver)&&data.activeDriver>=0&&data.activeDriver<52)activeDriver=data.activeDriver;
 persistCatalog();render();renderCatalog();persist();persistExtra();renderFrames();renderColours();renderRandomGate();persistTeams();renderTeams();updateRuntimeGate();
 notifyUnified('Imported CPU profiles, part catalogue, frames, colours and any included VS/Battle teammate settings. Game team hooks remain unimplemented.');
 }catch(e){notifyUnified('JSON import refused; previous configuration preserved: '+e.message);}};
restoreExtra();restoreTeams();renderColours();renderFrames();renderRandomGate();renderTeams();updateRuntimeGate();
$('mobileInitStatus').hidden=true;
})();

// Register the PWA after the UI has loaded; network-first caching prevents stale deployments.
if('serviceWorker' in navigator && location.protocol === 'https:') {window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));}
