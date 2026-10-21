import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildSync} from 'esbuild';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(file){const c=buildSync({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {createAshMineLayout,MINE_LAKE_LIMIT_Z,MINE_TREASURE}=await mod('src/ashMineLayout.ts');
T.TextureLoader.prototype.load=()=>new T.Texture();
const loader=new GLTFLoader();loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));
async function load(name){const b=fs.readFileSync('public/img/models/'+name);return (await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.length),'')).scene;}
const layout=createAshMineLayout('');layout.install(await load('Magical_Abandoned_Mine.glb'),await load('Ash_Mine_Track.glb'));
assert.equal(layout.walkable(26,-320,false),true,'Vicki can enter the water while the guardian lives');
assert.equal(layout.walkable(26,MINE_LAKE_LIMIT_Z+.05,false),true,'The shallow approach reaches the two metre boundary');
assert.equal(layout.walkable(26,MINE_LAKE_LIMIT_Z-.05,false),false,'The next step is blocked before victory');
assert.equal(layout.walkable(MINE_TREASURE.x,MINE_TREASURE.z,false),false,'The far bank and gold cannot bypass the guardian');
for(let x=-40;x<=90;x+=5)assert.equal(layout.walkable(x,MINE_LAKE_LIMIT_Z-1,false),false,'No route around the living guardian along another bank');
let previous=layout.floorAt(26,-304);
for(let z=-304;z>=-346;z-=.25){
 assert.equal(layout.walkable(26,z,true),true,'Victory opens a continuous crossing to the gold');
 const y=layout.floorAt(26,z);assert.ok(y>=-4.17,'Vicki wades instead of falling to the lake bottom');assert.ok(Math.abs(y-previous)<.6,'The banks and wading floor have no teleporting height steps');previous=y;
}
assert.equal(layout.walkable(MINE_TREASURE.x,MINE_TREASURE.z,true),true,'The gold bank is accessible after victory');
const {createGuardianState,stepGuardian,releaseGuardian,OCEAN_GUARDIAN:G}=await mod('src/ashMineGuardianCombat.ts');
for(const fps of [20,60,120]){
 const state=createGuardianState(),hero={x:G.shoreX,y:layout.floorAt(G.shoreX,-320),z:-320};let first=null,starts=[],lastImpact=-1;
 for(let frame=0;frame<fps*12;frame++){
  const t=frame/fps,r=stepGuardian(state,1/fps,hero,false);
  if(r.started)starts.push(t);
  if(r.impact){first??=t;assert.ok(t-lastImpact>.3,'Each fast strike deals damage once');lastImpact=t;}
  if(state.phase==='hold')releaseGuardian(state);
 }
 assert.ok(first<2.7,'The first attack arrives promptly, including in water');
 assert.ok(starts.length>=4,'The creature keeps attacking without long pauses');
 assert.ok(starts[2]-starts[1]<3.3,'A full attack cycle is noticeably faster than the former 4.85 seconds');
}
console.log('Lake: shallow entry, two metre gate, no shore bypass, continuous crossing after victory, gold access; faster attacks at 20/60/120 FPS passed.');
