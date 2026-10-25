import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';import * as T from 'three';
const code=buildSync({entryPoints:['src/muspelheimFireRain.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createFireRainState,createFireRain,fireStrikeDamage,fireHits,fireTrajectory,isSurtTerritory,inFireWorld,FIRE_RAIN,fireCrossesIceSanctuary}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
let seed=234567;const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
const floor=(x,z)=>x*.02+z*.005;
const state=createFireRainState(floor,()=>false,random),hero={x:150,z:-70,y:floor(150,-70)};let impacts=0,maxShots=0;const regions=new Set();
for(let i=0;i<4000;i++){state.update(.05,hero,()=>impacts++);maxShots=Math.max(maxShots,state.shots.length);for(const s of state.shots){assert(inFireWorld(s.x,s.z));assert(!isSurtTerritory(s.x,s.z,FIRE_RAIN.radius));assert.equal(s.y,floor(s.x,s.z));assert(!fireCrossesIceSanctuary(s.x,s.z));regions.add(`${s.x<0?'W':'E'}${s.z< -150?'N':s.z>110?'entrance':'S'}`);}}
assert(maxShots<=FIRE_RAIN.pool);assert(regions.size>=5,'Global shots cover all map quarters and entrance');
// With identical seeds, movement or another hero location cannot change
// any projectile destination, age or launch time.
const seeded=()=>{let n=9898;return ()=>((n=(Math.imul(n,1664525)+1013904223)>>>0)/4294967296);};
const moving=createFireRainState(floor,()=>false,seeded()),standing=createFireRainState(floor,()=>false,seeded());
for(let i=0;i<1000;i++){moving.update(.05,{x:Math.sin(i*.1)*400,z:-100+i%160,y:0},()=>{});standing.update(.05,{x:200,z:20,y:0},()=>{});assert.deepEqual(moving.shots,standing.shots);}
// The whole ice sanctuary is immune even to a forced direct strike.
for(let x=-490;x<=-398;x+=4)for(let z=-10;z<=40;z+=4){assert(!fireHits({x,z,y:0},{x,z,y:0}));assert(fireCrossesIceSanctuary(x,z));}
const direct=createFireRainState(floor,()=>false,seeded());let directHits=0;
direct.shots.push({...hero,age:0,duration:.01,impacted:false,seed:0});direct.update(.02,hero,()=>directHits++);direct.update(.02,hero,()=>directHits++);assert.equal(directHits,1,'Exactly one impact damage event');
const before=JSON.stringify(state.shots);for(let i=0;i<200;i++)state.update(0,hero,()=>assert.fail('Paused hit'));assert.equal(JSON.stringify(state.shots),before);
state.reset();assert.equal(state.shots.length,0);for(let i=0;i<150;i++)state.update(.05,hero,()=>assert.fail('Respawn grace'));assert.equal(state.shots.length,0);
// The entire Surt footprint and outer apron are protected, even on a direct hit.
for(let x=-500;x<=-130;x+=10)for(let z=-450;z<=-200;z+=10){assert(isSurtTerritory(x,z));assert(!fireHits({x,z,y:0},{x,z,y:0}));}
assert(!inFireWorld(500,200));assert(!inFireWorld(0,300));assert(inFireWorld(0,218));
assert.equal(fireStrikeDamage(100),18);assert.equal(fireStrikeDamage(500),90);assert.equal(fireStrikeDamage(20),12);
// One impact only, dodge by distance or by another floor; direct health damage
// is independent of arbitrarily high equipped armor/shield values.
assert(fireHits({x:150,z:-70,y:hero.y},hero));assert(!fireHits({x:150,z:-70,y:hero.y},{...hero,x:160}));assert(!fireHits({x:150,z:-70,y:hero.y},{...hero,y:hero.y+10}));
const vent=new T.Vector3(0,112,-174.375),shot={x:200,z:50,y:0};assert(fireTrajectory(vent,shot,0).distanceTo(vent)<1e-5);assert.equal(fireTrajectory(vent,shot,1).y,2);assert(fireTrajectory(vent,shot,.5).y>vent.y);
// Rendering adapter: visible fire remains, with no meshes or ground warnings.
const fx=createFireRain(new T.Texture(),floor,()=>false),camera=new T.PerspectiveCamera();camera.position.set(150,25,-30);camera.lookAt(150,0,-70);camera.updateMatrixWorld();
for(let i=0;i<165;i++)fx.update(.05,new T.Vector3(hero.x,hero.y,hero.z),vent,camera,()=>{});
const visible=fx.root.children.filter(p=>p.visible);assert(visible.length>0);
for(const p of fx.root.children){assert.equal(p.children.length,1);assert(p.children[0].isSprite,'Only flight/impact sprites; no landing markers');}
const positions=visible.map(p=>p.children[0].position.toArray());fx.update(0,new T.Vector3(hero.x,hero.y,hero.z),vent,camera,()=>assert.fail('Paused hit'));assert.deepEqual(visible.map(p=>p.children[0].position.toArray()),positions);
fx.reset();assert(fx.root.children.every(p=>!p.visible));fx.dispose();fx.dispose();
console.log('Fire rain passed',{impacts,maxShots,regions:[...regions],armorPiercingDamage:fireStrikeDamage(500)});
