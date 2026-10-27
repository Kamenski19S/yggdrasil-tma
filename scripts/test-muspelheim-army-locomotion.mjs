import assert from 'node:assert/strict';import fs from 'node:fs';import *as T from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';import {buildSync} from 'esbuild';
const code=buildSync({entryPoints:['src/muspelheimArmyLocomotion.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);const {createArmyLocomotion}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const loader=new GLTFLoader();loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));
for(const asset of ['Muspelheim_Female_Assassin.glb','Muspelheim_Army_Elf.glb','Muspelheim_Army_Shadow.glb']){
 const b=fs.readFileSync('public/img/models/'+asset),g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');g.scene.updateMatrixWorld(true);
 const originalWalk=g.animations.find(c=>c.name==='walk_loop'),bones=[],meshes=[];g.scene.traverse(o=>{if(o.isBone)bones.push(o);if(o.isSkinnedMesh)meshes.push(o);});const rest=bones.map(b=>({bone:b,q:b.quaternion.clone(),p:b.position.clone()})),bind=meshes.map(m=>Array.from({length:m.geometry.attributes.position.count},(_,i)=>new T.Vector3().fromBufferAttribute(m.geometry.attributes.position,i)));
 const clips=createArmyLocomotion(g.scene,g.animations),walk=clips.find(c=>c.name==='walk_loop');assert.notEqual(walk,originalWalk);assert.equal(walk.duration,1.6);for(const {bone,q,p} of rest){assert(bone.quaternion.equals(q));assert(bone.position.distanceTo(p)<1e-8);}
 const mixer=new T.AnimationMixer(g.scene),action=mixer.clipAction(walk);action.setLoop(T.LoopOnce,1).play();action.clampWhenFinished=true;let maxStretch=0;
 for(let frame=0;frame<=40;frame++){
  mixer.setTime(frame/40*walk.duration);g.scene.updateMatrixWorld(true);let low=Infinity;
  for(const {bone,q} of rest){const angle=bone.quaternion.clone().normalize().angleTo(q.clone().normalize());assert(angle<.24,asset+' never takes the old extreme combat bend');if(/Spine|Neck|Head/.test(bone.name))assert(angle<.0001,'Torso/head remain upright');}
  meshes.forEach((m,k)=>{m.skeleton.update();const p=m.geometry.attributes.position;for(let i=0;i<p.count;i++){const v=new T.Vector3().fromBufferAttribute(p,i);m.applyBoneTransform(i,v);maxStretch=Math.max(maxStretch,v.distanceTo(bind[k][i]));v.applyMatrix4(m.matrixWorld);low=Math.min(low,v.y);}});
  assert(Math.abs(low)<.015,asset+' soles stay on the ground: '+low);
 }
 assert(maxStretch<.34,asset+' skin stays close to its own bind pose: '+maxStretch);
 for(const t of walk.tracks){const n=t.getValueSize();for(let i=0;i<n;i++)assert(Math.abs(t.values[i]-t.values[t.values.length-n+i])<1e-6,'Walk loops without a pose jump');}
 console.log(asset+': upright torso, bounded joints, grounded soles, smooth loop, maximum skin displacement '+maxStretch.toFixed(3));
}
