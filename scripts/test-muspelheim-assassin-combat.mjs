import assert from 'node:assert/strict';
import {buildSync} from 'esbuild';
import {readFileSync} from 'node:fs';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const c=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {createAssassinCombat,ASSASSIN_COMBAT:C}=await mod('src/muspelheimAssassinCombat.ts');
const home={x:0,y:0,z:0},floor=()=>0,hero={x:25,y:0,z:0};
const npc=createAssassinCombat(home);
for(let i=0;i<100;i++)assert(!npc.step(.1,{x:90,y:0,z:0},true,floor).impact);assert.equal(npc.phase,'idle');
for(let i=0;i<100;i++)npc.step(.1,{...hero,y:-82},true,floor);assert.equal(npc.phase,'idle','Cannot see Vicki through canyon floor');
let impacts=0,started=false;for(let i=0;i<50;i++){const e=npc.step(.1,hero,true,floor);impacts+=+e.impact;started||=e.started;}
assert(started&&impacts>=1&&impacts<=3);assert(npc.position.x>0&&npc.position.x<hero.x-4,'Chases without overlapping Vicki');
const frozen=JSON.stringify({p:npc.position,hp:npc.hp,phase:npc.phase});for(let i=0;i<100;i++)assert(!npc.step(0,hero,true,floor).impact);assert.equal(JSON.stringify({p:npc.position,hp:npc.hp,phase:npc.phase}),frozen);
npc.reset();const close={x:8,y:0,z:0};while(npc.phase!=='attack')npc.step(.1,close,true,floor);for(let i=0;i<20;i++)assert(!npc.step(.1,{x:25,y:0,z:0},true,floor).impact,'Can dodge committed swing');
npc.reset();while(npc.phase!=='attack')npc.step(.1,close,true,floor);for(let i=0;i<15;i++)assert(!npc.step(.1,close,true,floor,()=>false).impact,'No strike through walls');
npc.reset();for(let i=0;i<30;i++)npc.step(.1,hero,true,()=>null);assert.deepEqual(npc.position,home,'Cannot walk into a wall or missing floor');
npc.reset();for(let i=0;i<10;i++)npc.step(.1,hero,true,floor);for(let i=0;i<100;i++)assert(!npc.step(.1,{x:90,y:0,z:0},true,floor).impact);assert.equal(npc.phase,'idle');assert.deepEqual(npc.position,home);assert.equal(npc.hp,C.maxHp);
assert(npc.hurt(100));assert.equal(npc.hp,C.maxHp-100);npc.hurt(10000);assert.equal(npc.phase,'dead');assert(!npc.hurt(10));for(let i=0;i<50;i++)assert(!npc.step(.1,close,true,floor).impact);
globalThis.window={};
const {incomingCombatDamage}=await mod('src/combatStats.ts');const stats={maxHp:200,attack:40,runeAttack:30,defense:10,shieldDefense:5,multiplier:1};assert(incomingCombatDamage(C.attack,stats,true)<incomingCombatDamage(C.attack,stats));
const loader=new GLTFLoader();loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));const b=readFileSync('public/img/models/Muspelheim_Shadow_Assassin.glb');const g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
const {createShadowAssassin}=await mod('src/muspelheimShadowAssassin.ts');const actor=createShadowAssassin(g.scene,g.animations);const near={x:actor.root.position.x+8,y:0,z:actor.root.position.z};let attackSeen=false;
for(let i=0;i<20;i++){const e=actor.update(.1,near,true,floor);attackSeen||=e.started;}assert(attackSeen);assert(actor.mixer.existingAction(g.animations.find(c=>c.name==='sword_attack')),'Uses actual rig attack clip');
let mesh;g.scene.traverse(o=>{if(o.isSkinnedMesh)mesh=o;});const before=mesh.skeleton.bones.map(b=>b.quaternion.toArray());actor.update(0,near,true,floor);assert.deepEqual(mesh.skeleton.bones.map(b=>b.quaternion.toArray()),before);
actor.hurt(10000);actor.update(.1,near,true,floor);assert(actor.mixer.existingAction(g.animations.find(c=>c.name==='fall')));assert(!actor.blocks(near.x-8,near.z,0),'Defeated body does not trap Vicki');actor.reset();assert.equal(actor.combat.hp,C.maxHp);assert(actor.blocks(actor.root.position.x,actor.root.position.z,0));actor.dispose();
console.log('Assassin passed: proximity pursuit, timed/dodgeable hits, wall and height checks, pause, blocked terrain, leash reset, death, shield damage and real GLB attack/fall clips.');
