import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const code=buildSync({entryPoints:['src/muspelheimEastVolcano.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createEastVolcano,EAST_VOLCANO_POSITION,EAST_VOLCANO_WIDTH,EAST_VOLCANO_CREDIT}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const b=readFileSync('public/img/models/Muspelheim_East_Volcano.glb'),d=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));
assert.equal(b.readUInt32LE(8),b.length);assert.ok(b.length<2e6);assert.equal(d.asset.extras.source,EAST_VOLCANO_CREDIT.url);assert.match(d.asset.extras.license,/CC-BY-4.0/);
const triangles=d.meshes.flatMap(m=>m.primitives).reduce((sum,p)=>sum+d.accessors[p.indices].count/3,0);assert.ok(triangles<20000);
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
const volcano=createEastVolcano(g.scene),bounds=new THREE.Box3().setFromObject(volcano.root),size=bounds.getSize(new THREE.Vector3());
assert.ok(Math.abs(Math.max(size.x,size.z)-EAST_VOLCANO_WIDTH)<.001);assert.ok(size.y>45&&size.y<55,'Uniform scaling preserves authored proportions');
assert.ok(bounds.min.x>200&&bounds.max.x<450&&bounds.min.z> -420&&bounds.max.z< -180,'New location fits the right plain, clear of the western ravine and boundary');
const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);let hits=0;
for(let x=bounds.min.x+2;x<bounds.max.x;x+=7)for(let z=bounds.min.z+2;z<bounds.max.z;z+=9){
 ray.set(new THREE.Vector3(x,bounds.max.y+5,z),down);const expected=ray.intersectObject(volcano.root,true)[0]?.point.y??null,actual=volcano.floorAt(x,z);
 if(expected==null)assert.equal(actual,null);else {assert.ok(Math.abs(actual-expected)<.001,`Triangle lookup agrees with real model at ${x},${z}`);hits++;}
}
assert.ok(hits>250);assert.equal(volcano.floorAt(0,218),null);assert.equal(volcano.floorAt(-315,-385),null);
let skirt=0;volcano.root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.attributes.position,v=new THREE.Vector3();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);if(Math.abs(v.x-EAST_VOLCANO_POSITION.x)>EAST_VOLCANO_WIDTH*.46||Math.abs(v.z-EAST_VOLCANO_POSITION.z)>EAST_VOLCANO_WIDTH*.46){assert.ok(v.y<=-.799,'The outer skirt is buried');skirt++;}}});assert.ok(skirt>0);
console.log('Eastern volcano: author preserved, optimized size, uniform scale, buried skirt, separate right location and exact walking heights passed.',{bytes:b.length,triangles,hits,height:size.y});
