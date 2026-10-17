import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const code=buildSync({entryPoints:['src/muspelheimSurtTower.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createSurtTower}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const loader=new GLTFLoader();loader.register(()=>({name:'textures',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const data=readFileSync('public/img/models/Muspelheim_Surt_Tower.glb');
async function tower(){return createSurtTower((await loader.parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'')).scene);}
for(const fps of [20,60,120])for(const side of [1,-1]){
 const t=await tower(),{x,z}=t.door;
 assert.ok(t.gateTriangles>100);assert.equal(t.blocks(x,z),true);
 for(let i=0;i<fps;i++)t.updateProximity(1/fps,x,z+side*12);assert.equal(t.opening,0,'Door stays shut until Vicki is within arm reach');
 for(let i=0;i<fps;i++)t.updateProximity(1/fps,x,z+side*5);assert.equal(t.opening,1);assert.equal(t.blocks(x,z),false);
 for(let step=0;step<=20;step++){const pz=z+side*(5-step*.5);t.updateProximity(1/fps,x,pz);assert.equal(t.blocks(x,pz),false,'Vicki can pass through the actual doorway');}
 for(let i=0;i<fps;i++)t.updateProximity(1/fps,x,z-side*3);assert.equal(t.opening,1,'Door must not close on Vicki in the threshold');
 for(let i=0;i<fps*2;i++)t.updateProximity(1/fps,x,z-side*12);assert.equal(t.opening,0,'Door closes behind Vicki once clear');assert.equal(t.blocks(x,z),true);
 for(let i=0;i<fps;i++)t.updateProximity(1/fps,x,z-side*5);assert.equal(t.opening,1,'Door opens again for exit');
}
console.log('Surt gate: separated textured leaves, arm-reach trigger, safe passage, closing behind and reopening from inside at 20/60/120 FPS passed');

const t=await tower(),ray=new THREE.Raycaster();for(let i=0;i<60;i++)t.updateProximity(1/60,t.door.x,t.door.z+5);
for(const y of [44,48,53]){ray.set(new THREE.Vector3(t.door.x,y,t.door.z+5),new THREE.Vector3(0,0,-1));ray.far=10;const hits=ray.intersectObject(t.root,true);console.log('open doorway ray',y,hits.map(h=>({name:h.object.name,distance:h.distance})));assert.equal(hits.length,0,'The visible open gate must have a clear geometric passage');}
