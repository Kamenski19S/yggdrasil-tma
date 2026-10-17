import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const code=buildSync({entryPoints:['src/muspelheimVolcano.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createMuspelheimVolcano,VOLCANO_POSITION,VOLCANO_SIZE,VOLCANO_CREDIT}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const b=readFileSync('public/img/models/Muspelheim_Volcano.glb');assert.equal(b.readUInt32LE(8),b.length);assert.ok(b.length<2e6);
const doc=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));assert.equal(doc.asset.extras.author,'Nicothin (https://sketchfab.com/juhyt80)');assert.equal(doc.asset.extras.source,VOLCANO_CREDIT.url);
let triangles=0;for(const m of doc.meshes)for(const p of m.primitives){const ids=doc.accessors[p.indices];triangles+=ids.count/3;assert.ok(doc.accessors[p.attributes.POSITION].count<65536);}
assert.ok(triangles<40000);
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const model=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
const volcano=createMuspelheimVolcano(model.scene,0),bounds=new THREE.Box3().setFromObject(volcano.root),size=bounds.getSize(new THREE.Vector3());
for(const [value,target] of [[size.x,VOLCANO_SIZE.width],[size.y,VOLCANO_SIZE.height],[size.z,VOLCANO_SIZE.depth]])assert.ok(Math.abs(value-target)<1e-5);
assert.ok(bounds.min.x>-490&&bounds.max.x<0&&bounds.min.z>-435&&bounds.max.z<-100,'Massif stays inside rear-left walls, away from entry');
assert.ok(size.x<=182.01&&size.z<=182.01&&bounds.max.y<65,'Volcano must be smaller and sunk into the ground');
volcano.root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.attributes.position,v=new THREE.Vector3();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);if(Math.abs(v.x-VOLCANO_POSITION.x)>=VOLCANO_SIZE.width*.45||Math.abs(v.z-VOLCANO_POSITION.z)>=VOLCANO_SIZE.depth*.45)assert.ok(v.y<=-.99,'Every outer rim vertex must sit below the ground');}});
assert.equal(volcano.floorAt(0,218),null);assert.equal(volcano.floorAt(-500,-300),null);
let hits=0;for(let x=bounds.min.x+10;x<bounds.max.x;x+=20)for(let z=bounds.min.z+10;z<bounds.max.z;z+=20){const y=volcano.floorAt(x,z);if(y!==null){assert.ok(Number.isFinite(y)&&y>=bounds.min.y-.01&&y<=bounds.max.y+.01);hits++;}}
assert.ok(hits>50,'Walking height must cover the imported surface');
console.log('Volcano: optimized GLB, credit, bounds, rear-left wall clearance and walking surface passed', {bytes:b.length,triangles,hits,center:VOLCANO_POSITION});
if(process.env.VOLCANO_PREVIEW){const meshes=[];volcano.root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.attributes.position,v=new THREE.Vector3();const vertices=Array.from({length:p.count},(_,i)=>v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld).toArray());meshes.push({vertices,indices:Array.from(o.geometry.index.array)});});writeFileSync(process.env.VOLCANO_PREVIEW,JSON.stringify(meshes));}
