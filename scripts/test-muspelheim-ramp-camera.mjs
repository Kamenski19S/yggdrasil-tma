import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';import {buildSync} from 'esbuild';import * as THREE from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const c=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {expandMuspelheimTerrain,createTerrainSampler}=await mod('src/muspelheimTerrain.ts');const {carveSurtRavine}=await mod('src/muspelheimSurtRavine.ts');const {ravinePitDepth}=await mod('src/muspelheimRavineCrossings.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));const b=readFileSync('public/img/models/Muspelheim_Terrain_300m.glb');const root=(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.scale.set(1.75,1,1.75);expandMuspelheimTerrain(root);carveSurtRavine(root,ravinePitDepth);const sample=createTerrainSampler(root);
const {terrainSafeCameraPosition}=await mod('src/muspelheimCamera.ts');
assert.deepEqual(terrainSafeCameraPosition({x:0,y:12,z:0},{x:0,y:20,z:32},()=>0),{x:0,y:20,z:32},'Flat ground keeps the original framing');
let oldUnderground=0,checked=0;
function verify(focus,camera){
 const length=Math.hypot(camera.x-focus.x,camera.z-focus.z),steps=Math.max(1,Math.ceil(length/.15));
 for(let i=1;i<=steps;i++){
  const t=i/steps,x=focus.x+(camera.x-focus.x)*t,z=focus.z+(camera.z-focus.z)*t,h=sample(x,z);
  if(h!=null)assert.ok(focus.y+(camera.y-focus.y)*t>=h+2.5,`Camera crosses terrain at ${x},${z}: y=${focus.y+(camera.y-focus.y)*t}, terrain=${h}, t=${t}, focus=${JSON.stringify(focus)}, camera=${JSON.stringify(camera)}`);
 }
 checked++;
}
for(const x of [-365,-270])for(let z=-225;z<=30;z+=1)for(let angle=0;angle<Math.PI*2;angle+=Math.PI/8){
 const y=sample(x,z),focus={x,y:y+12,z},desired={x:x+Math.sin(angle)*32,y:y+20,z:z+Math.cos(angle)*32};
 if((sample(desired.x,desired.z)??-1000)>desired.y)oldUnderground++;
 verify(focus,terrainSafeCameraPosition(focus,desired,sample));
}
for(const fps of [20,60,120]){
 let camera={x:-365,y:20,z:62};
 for(let frame=0;frame<fps*9;frame++){
  const z=30-frame*18/fps,y=sample(-365,z),focus={x:-365,y:y+12,z};
  const target=terrainSafeCameraPosition(focus,{x:-365,y:y+20,z:z+32},sample),alpha=1-Math.exp(-4.5/fps);
  camera={x:camera.x+(target.x-camera.x)*alpha,y:camera.y+(target.y-camera.y)*alpha,z:camera.z+(target.z-camera.z)*alpha};
  camera=terrainSafeCameraPosition(focus,camera,sample);verify(focus,camera);
 }
}
assert.ok(oldUnderground>100,'Regression reproduces cameras below the original ramp');
console.log({oldUnderground,checked});console.log('Sculpted ramps: camera and sight line stay above terrain in all directions and at 20/60/120 FPS; flat framing preserved.');
