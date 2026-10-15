import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/examples/jsm/utils/SkeletonUtils.js';
globalThis.window={};globalThis.self=globalThis;
globalThis.createImageBitmap=async()=>({width:512,height:512,close(){}});
globalThis.ProgressEvent=class {constructor(type,options){Object.assign(this,options);}};
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
try{
 const {installSealGuardian}=await server.ssrLoadModule('/src/niflheimSealGuardian.ts');
 const seals=await server.ssrLoadModule('/src/niflheimSeals.ts');
 const {DEF}=await server.ssrLoadModule('/src/core.tsx');
 const parse=async name=>{const b=await readFile(new URL('../public/img/models/'+name,import.meta.url));return new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');};
 const guardian=await parse('Scourger_Rig_Optimized.glb');
 assert(guardian.animations.some(c=>c.name==='Plunge Attack'));
 for(const def of seals.NIFLHEIM_SEALS){
  const scene=new THREE.Scene(),actor=installSealGuardian(scene,{scene:cloneSkeleton(guardian.scene),animations:guardian.animations},{world:(x,y,z)=>new THREE.Vector3(x,y,z)},0);
  actor.moveTo(def.x,def.z,def.angle,5);
  const target={x:def.x+6,z:def.z+5};let hp=10000,hits=0,peak=5,lastHit=-Infinity;
  for(let t=0;t<12;t+=.05){
   const impact=actor.update(.05,true,true,false,target);peak=Math.max(peak,actor.root.position.y);
   if(impact){assert(t-lastHit>3,def.id+' must finish the plunge before the next strike');lastHit=t;hits++;hp-=seals.sealGuardianDamage(1000,def);assert(Math.abs(actor.root.position.y-5)<.001,def.id+' damage lands at ground level');}
  }
  assert(peak>8,def.id+' visibly takes off');assert(hits>=2,def.id+' repeats its aerial attack');assert(hp<10000);
  const beforePause=actor.root.position.clone();for(let i=0;i<100;i++)assert.equal(actor.update(.05,true,true,true,target),false);assert(actor.root.position.equals(beforePause),'Bag pauses animation and impact together');
  actor.defeat();for(let i=0;i<60;i++)assert.equal(actor.update(.05,false,true,false,target),false);assert(!actor.root.visible);
  const done=seals.NIFLHEIM_SEALS.filter(s=>s.order<def.order).map(s=>seals.sealOpenedFlag(s.id));
  let save={...structuredClone(DEF),done,immortalityDrops:2000000,runeSteel:1000};
  for(const r of def.runes){save.runes.push(r.id);save.lootCounts[r.id]=100;}
  assert.equal(seals.applyNiflheimSealEvent(save,'open:'+def.id),save,'Cannot remove a ring before defeating its guardian');
  save=seals.applyNiflheimSealEvent(save,'guardianDefeated:'+def.id);assert(!seals.sealOpened(save.done,def.id),'Victory keeps the ring closed until payment');
  const paid=seals.applyNiflheimSealEvent(save,'open:'+def.id);assert(seals.sealOpened(paid.done,def.id));assert.equal(seals.applyNiflheimSealEvent(paid,'open:'+def.id),paid);
  actor.dispose();
 }
 const vicki=await parse('Vika-3d-animated-optimized.glb'),mixer=new THREE.AnimationMixer(vicki.scene);
 const sword=vicki.animations.find(c=>c.name==='sword_attack');assert(sword);
 let hand;vicki.scene.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith('RightHand'))hand=o;});assert(hand,'Weapon has a right-hand mount');
 vicki.scene.updateMatrixWorld(true);const rest=hand.getWorldQuaternion(new THREE.Quaternion());
 mixer.clipAction(sword).reset().play();mixer.update(.4);vicki.scene.updateMatrixWorld(true);
 assert(rest.angleTo(hand.getWorldQuaternion(new THREE.Quaternion()))>.01,'Native sword attack visibly moves the weapon hand');
 console.log('PASS: all 15 guardians take off, land, damage repeatedly, pause for bag, stop on death; rings require victory and payment; Vicki native sword attack moves her weapon hand.');
}finally{await server.close();}
