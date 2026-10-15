import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const server=await createServer({root:fileURLToPath(new URL('../',import.meta.url)),server:{middlewareMode:true}});
try{
 const {pickEncounter,dangerouslyLowHp}=await server.ssrLoadModule('/src/niflheimCombat.ts');
 const threats=[{id:'a',role:'orc',distance:4},{id:'b',role:'orc',distance:5},{id:'c',role:'troll',distance:8},{id:'d',role:'undead',distance:10},{id:'far',role:'undead',distance:30}];
 assert.deepEqual(pickEncounter(threats,()=>.9),['a']);
 const rng=(...values)=>()=>values.shift();
 assert.deepEqual(pickEncounter(threats,rng(.1,.1)),['a','c']);
 assert.deepEqual(pickEncounter(threats,rng(.1,.9)),['a','c','d']);
 assert.deepEqual(pickEncounter([],()=>0),[]);
 assert.deepEqual(pickEncounter([{id:'far',role:'orc',distance:13}],()=>0),[]);
 assert.deepEqual(pickEncounter(threats.slice(0,2),()=>0),['a','b']);
 assert(dangerouslyLowHp(15,100));assert(dangerouslyLowHp(1,100));assert(!dangerouslyLowHp(16,100));assert(!dangerouslyLowHp(0,100));assert(!dangerouslyLowHp(1,0));
 // Parse skin and all eight clips using the actual runtime loader. Images are validated by the preparation script.
 globalThis.self=globalThis;globalThis.createImageBitmap=async()=>({width:512,height:512,close(){}});
 globalThis.ProgressEvent=class {constructor(type,options){this.type=type;Object.assign(this,options);}};
 const bytes=await readFile(new URL('../public/img/models/Niflheim_Cave_Troll_Lite.glb',import.meta.url));
 assert(bytes.length<4000000);
 const asset=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 assert.deepEqual(asset.animations.map(a=>a.name),['idle','idle_break','walk','run','attack1','attack2','take_damage','death']);
 let skins=0,triangles=0;asset.scene.traverse(o=>{if(o.isSkinnedMesh)skins++;if(o.isMesh)triangles+=o.geometry.index.count/3;});assert(skins>0);assert.equal(triangles,10467);
 const mixer=new THREE.AnimationMixer(asset.scene);
 const poses=[];
 for(const clip of asset.animations){
  assert(clip.duration>0&&clip.duration<4.1,clip.name+' must start at zero');
  mixer.stopAllAction();const action=mixer.clipAction(clip);action.play();mixer.update(clip.duration*.5);asset.scene.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(asset.scene);assert(Number.isFinite(box.min.x+box.min.y+box.max.z),clip.name+' finite skin pose');
  const pose=[];asset.scene.traverse(o=>{if(o.isBone)pose.push(...o.quaternion.toArray());});poses.push(pose);
 }
 assert.notDeepEqual(poses[0],poses[4],'Attack animation must move the rig');
 assert.notDeepEqual(poses[4],poses[5],'Two native attacks must remain distinct');
 console.log('PASS: solo/pair/triple mixed encounters, range and group caps, exact 15% warning, GLTF runtime parse, 10467 triangles, skin and all 8 animated poses.');
}finally{await server.close();}
