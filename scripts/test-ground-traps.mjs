import assert from 'node:assert/strict';import {buildSync} from 'esbuild';
const code=buildSync({entryPoints:['src/muspelheimGroundTraps.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replace(/from "three"/g,`from ${JSON.stringify(import.meta.resolve('three'))}`);const {groundTrapLayout,createGroundTraps}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const floor=(x,z)=>Math.abs(x)>500||z>95||z< -435?null:0;
const allowed=(x,y,z)=>floor(x,z)!=null&&Math.hypot(x+430,z-50)>75&&!(x>100&&x<190&&z> -50)&&!(x< -100&&z< -350);
const layout=groundTrapLayout(floor,allowed);assert.equal(layout.length,30);for(const kind of ['fire','sand'])assert.equal(layout.filter(t=>t.kind===kind).length,15);assert.deepEqual(layout,groundTrapLayout(floor,allowed),'Locations are stable across sessions');for(const a of layout){assert(allowed(a.x,a.y,a.z));for(const b of layout)if(a!==b)assert(Math.hypot(a.x-b.x,a.z-b.z)>=24);}
const traps=createGroundTraps(layout,floor);assert(traps.root.children.every(o=>!o.visible),'No trap reveals itself before contact');
const fire=layout.find(t=>t.kind==='fire'),hero={x:fire.x,y:fire.y,z:fire.z};assert.equal(traps.update(.08,hero).fireHits,1,'Standing on a fire trap ignites it immediately');assert.equal(traps.update(.08,hero).fireHits,0,'Damage cannot repeat every frame');assert.equal(traps.update(0,hero).fireHits,0);assert.equal(traps.update(1.4,hero).fireHits,1);assert.equal(traps.update(.5,{...hero,x:hero.x+12}).fireHits,0,'Leaving the burning patch avoids more damage');
const sand=layout.find(t=>t.kind==='sand'),foot={x:sand.x,y:sand.y,z:sand.z};assert(traps.update(.08,foot).caught);assert(traps.captured);const first=traps.sinkPose();traps.update(0,foot);assert.deepEqual(traps.sinkPose(),first,'Pause freezes sinking');for(let i=0;i<23;i++)assert(!traps.update(.1,foot).swallowed);assert(traps.sinkPose().y< -14,'Vicki sinks below the ground with her head');let swallowed=0;for(let i=0;i<10;i++)swallowed+=Number(traps.update(.1,foot).swallowed);assert.equal(swallowed,1,'Exactly one respawn event');assert(!traps.captured);assert(!traps.update(.1,foot).caught,'Pit has a cooldown');traps.reset();assert(traps.root.children.every(o=>!o.visible));assert(!traps.captured);
console.log('PASS: 15 fire + 15 sand traps, deterministic spaced valid placement, hidden until stepped on, immediate ignition, periodic damage and escape, paused sinking, full submersion, one respawn and cooldown.');
// Each enemy has independent burn time and damage cadence; hero is elsewhere.
const make=()=>createGroundTraps([{x:0,y:0,z:0,kind:'fire',radius:5,age:-1,cooldown:0,damageTime:0}],()=>0);
const outside={x:30,y:0,z:30};
const victim=(x=0,y=0)=>({position:{x,y,z:0},hp:420,hits:0,stuns:0,hurt(d){if(this.hp<=0)return false;this.hp=Math.max(0,this.hp-d);this.hits++;return true;},stun(){this.stuns++;}});
const field=make(),a=victim(),b=victim(30),high=victim(0,20);
let ev=field.update(.1,outside,[a,b,high]);assert.equal(a.hp,280);assert.equal(a.stuns,1);assert.equal(b.hp,420);assert.equal(high.hp,420);assert(!ev.fireStarted);assert.equal(ev.fireHits,0);
field.update(0,outside,[a]);assert.equal(a.hp,280,'Pause freezes enemy burning');
field.update(.5,outside,[a]);assert.equal(a.hp,280,'Enemy damage has a cooldown');
a.position.x=30;field.update(1,outside,[a]);assert.equal(a.hp,280,'Escaping prevents damage');
a.position.x=0;field.update(.1,outside,[a]);assert.equal(a.hp,140,'Re-entry burns immediately');
for(let i=0;i<22;i++)field.update(.1,outside,[a]);assert.equal(a.hp,0,'Remaining in flames kills');
const hits=a.hits;field.update(.1,outside,[a]);assert.equal(a.hits,hits,'Dead enemies take no repeat hits');
const late=make(),initialVictim=victim();late.update(2.5,outside,[initialVictim]);const entrant=victim();late.update(.1,outside,[entrant]);assert.equal(entrant.hp,280,'Late entrant gets its own escape window');
ev=late.update(.1,{x:0,y:0,z:0},[entrant]);assert(ev.fireStarted);assert(!ev.fireFatal,'Hero entering enemy-activated fire gets time to escape');assert.equal(ev.fireHits,1);
console.log('PASS: enemies activate fire, immediate damage/stun, independent escape windows, death, pause, height and distance checks; hero can enter enemy-activated fire.');
