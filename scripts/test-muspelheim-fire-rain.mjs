import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';import * as T from 'three';
const code=buildSync({entryPoints:['src/muspelheimFireRain.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createFireRainState,createFireRain,fireStrikeDamage,fireHits,fireTrajectory,isSurtTerritory,inFireWorld,FIRE_RAIN}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
let seed=234567;const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
const floor=(x,z)=>x*.02+z*.005;
const state=createFireRainState(floor,()=>false,random),hero={x:150,z:-70,y:floor(150,-70)};let impacts=0,maxShots=0;const regions=new Set();
for(let i=0;i<4000;i++){state.update(.05,hero,()=>impacts++);maxShots=Math.max(maxShots,state.shots.length);for(const s of state.shots){assert(inFireWorld(s.x,s.z));assert(!isSurtTerritory(s.x,s.z,FIRE_RAIN.radius));assert.equal(s.y,floor(s.x,s.z));regions.add(`${s.x<0?'W':'E'}${s.z< -150?'N':s.z>110?'entrance':'S'}`);}}
assert(maxShots<=FIRE_RAIN.pool);assert(impacts>15);assert(regions.size>=5,'Global shots cover all map quarters and entrance');
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
// Rendering adapter: projected warnings follow uneven ground and stop on pause.
const fx=createFireRain(new T.Texture(),floor,()=>false),camera=new T.PerspectiveCamera();camera.position.set(150,25,-30);camera.lookAt(150,0,-70);camera.updateMatrixWorld();
for(let i=0;i<165;i++)fx.update(.05,new T.Vector3(hero.x,hero.y,hero.z),vent,camera,()=>{});
const visible=fx.root.children.filter(p=>p.visible);assert(visible.length>0);
for(const p of visible){const ring=p.children[1],a=ring.geometry.attributes.position;for(let i=0;i<a.count;i++)assert(Math.abs(a.getY(i)-floor(ring.position.x+a.getX(i),ring.position.z+a.getZ(i))-.35)<.001);}
fx.reset();assert(fx.root.children.every(p=>!p.visible));fx.dispose();fx.dispose();
console.log('Fire rain passed',{impacts,maxShots,regions:[...regions],armorPiercingDamage:fireStrikeDamage(500)});
