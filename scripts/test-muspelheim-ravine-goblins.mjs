import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three','three/*']}).outputFiles[0].text.replaceAll(/from "(three[^\"]*)"/g,(_,p)=>`from ${JSON.stringify(import.meta.resolve(p))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const loader=new GLTFLoader();loader.setMeshoptDecoder(MeshoptDecoder);loader.register(()=>({name:'EXT_texture_webp',loadTexture:()=>Promise.resolve(new T.Texture())}));loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));
async function load(name){const b=readFileSync('public/img/models/'+name);return loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');}
const {createRavineGoblins,RAVINE_GOBLIN_HEIGHT}=await mod('src/muspelheimRavineGoblins.ts');
const {expandMuspelheimTerrain,createTerrainSampler}=await mod('src/muspelheimTerrain.ts');
const {carveSurtRavine,canWalkRavine}=await mod('src/muspelheimSurtRavine.ts');
const {ravinePitDepth,isRavineAbyss}=await mod('src/muspelheimRavineCrossings.ts');
const terrain=(await load('Muspelheim_Terrain_300m.glb')).scene;terrain.scale.set(1.75,1,1.75);expandMuspelheimTerrain(terrain);carveSurtRavine(terrain,ravinePitDepth);const floor=createTerrainSampler(terrain);
const source=await load('Ash_Mine_Goblin_Helper.glb'),before=[];source.scene.traverse(o=>{if(o.isMesh)before.push(o.material);});
const goblins=createRavineGoblins(source.scene,source.animations,floor,(a,b)=>!isRavineAbyss(b.x,b.z)&&canWalkRavine(floor,a,b),()=>true);
assert.equal(goblins.actors.length,18);assert.equal(RAVINE_GOBLIN_HEIGHT,7.6);assert.equal(goblins.bodies.length,18);
for(const a of goblins.actors){assert.equal(a.actor.root.scale.x,2);assert(!isRavineAbyss(a.home.x,a.home.z));assert(Math.abs(a.home.y-floor(a.home.x,a.home.z))<.001);assert(!a.actor.root.getObjectByName('Object_76'));}
const actor=goblins.actors[0],hero={x:actor.home.x+12,y:actor.home.y,z:actor.home.z},start=goblins.actors.map(a=>a.actor.root.position.clone());
let hits=0;for(let i=0;i<110;i++)hits+=goblins.update(.04,hero,true).hits;assert(hits>0,'Magma magic damages a stationary hero');
assert(goblins.actors.filter((a,i)=>a.actor.root.position.distanceTo(start[i])>1).length>10,'Goblins run throughout the ravine');
const positions=goblins.actors.map(a=>a.actor.root.position.clone());goblins.update(0,hero,true);assert(goblins.actors.every((a,i)=>a.actor.root.position.equals(positions[i])),'Paused simulation freezes patrols');
goblins.reset();const near=goblins.actors[0].home;Object.assign(hero,{x:near.x+12,y:near.y,z:near.z});
assert.match(goblins.protect(),/2,5/);assert.match(goblins.protect(),/восстанавливается/);
let blocked=0;hits=0;for(let i=0;i<58;i++){const e=goblins.update(.04,hero,true);blocked+=e.blocked;hits+=e.hits;}assert(blocked>0,'Magical barrier absorbs spells');assert.equal(hits,0);
const target=goblins.hud(hero);assert(target);assert.match(goblins.cast(hero,77),/77/);assert.equal(goblins.hud(hero).hp,target.hp-77);assert.match(goblins.cast(hero,77),/восстанавливается/);
for(const a of goblins.actors){assert(!isRavineAbyss(a.home.x,a.home.z));assert(Math.abs(a.home.y-floor(a.home.x,a.home.z))<.001);}
const after=[];source.scene.traverse(o=>{if(o.isMesh)after.push(o.material);});assert.deepEqual(after,before,'Mine source materials preserved');
const blockedWorld=createRavineGoblins(source.scene,source.animations,floor,(a,b)=>!isRavineAbyss(b.x,b.z)&&canWalkRavine(floor,a,b),()=>false);
assert.match(blockedWorld.cast(hero,100),/нет видимой цели/);let wallHits=0;for(let i=0;i<160;i++)wallHits+=blockedWorld.update(.04,hero,true).hits;assert.equal(wallHits,0,'No magic through walls');
const scene=readFileSync('src/Muspelheim3D.tsx','utf8');assert.match(scene,/playerFire.cast\(hero,live.current.combatStats.runeAttack\)/);assert.match(scene,/goblinEvent.damage/);assert(!scene.includes('ravineGoblins.hurt'),'Physical weapon targets exclude goblins');
const {createCanyonRidge}=await mod('src/muspelheimCanyonRidge.ts'),{createRavineLava}=await mod('src/muspelheimRavineLava.ts'),{basaltPeakLayout}=await mod('src/muspelheimBasaltPeaks.ts'),{rockWallBlocks}=await mod('src/muspelheimRockWalls.ts'),{ravineRockLayout,ravineRockBlocks}=await mod('src/muspelheimRavineCrossings.ts');
const lava=createRavineLava(),ridge=createCanyonRidge((await load('Muspelheim_Canyon_Ridge.glb')).scene,floor,lava),fullFloor=(x,z)=>Math.max(floor(x,z)??-Infinity,ridge.floorAt(x,z)??-Infinity),peaks=basaltPeakLayout(fullFloor),ravineRocks=ravineRockLayout();
const navigable=(a,b)=>!isRavineAbyss(b.x,b.z)&&!rockWallBlocks(peaks,b.x,b.z,2,b.y)&&!ravineRockBlocks(ravineRocks,b.x,b.y,b.z,2)&&canWalkRavine(fullFloor,a,b);
const full=createRavineGoblins(source.scene,source.animations,fullFloor,navigable,()=>true);assert.equal(full.actors.length,18,'All spawns fit the ridge, peaks and ravine rocks');for(let i=0;i<120;i++)full.update(.04,{x:500,y:0,z:0},false);for(const a of full.actors)assert(navigable(a.home,a.home),'Patrol remains on valid terrain');full.dispose();lava.dispose();
goblins.dispose();blockedWorld.dispose();console.log('Ravine goblins passed: 18 safe real-terrain spawns, 2x height, patrols, pauses, magical damage, ward, cooldowns, wall occlusion, source preservation and physical-weapon exclusion.');
