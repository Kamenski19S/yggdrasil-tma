import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {transformSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const ground=transformSync(readFileSync('src/muspelheimTerrain.ts','utf8'),{loader:'ts',format:'esm'}).code.replace('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const groundURL='data:text/javascript;base64,'+Buffer.from(ground).toString('base64');
const source=transformSync(readFileSync('src/muspelheimRockWalls.ts','utf8'),{loader:'ts',format:'esm'}).code.replace('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`).replace('from "./muspelheimTerrain"',`from ${JSON.stringify(groundURL)}`);
const {rockWallLayout,rockWallBlocks,moveAlongRockWalls,makeBasaltWall,ROCK_ASSETS,ROCK_CREDITS}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const layout=rockWallLayout({x:0,z:130,halfWidth:20.5});assert.equal(layout.length,108);assert.equal(rockWallBlocks(layout,0,0),false);assert.equal(rockWallBlocks(layout,0,192.5),false);
for(let i=-262.5;i<=262.5;i+=1){assert.ok(rockWallBlocks(layout,i,262.5));assert.ok(rockWallBlocks(layout,i,-262.5));assert.ok(rockWallBlocks(layout,262.5,i));assert.ok(rockWallBlocks(layout,-262.5,i));}
for(let angle=0;angle<Math.PI*2;angle+=.01){let p={x:0,z:0};for(let i=0;i<1300;i++)p=moveAlongRockWalls(layout,p,{x:p.x+Math.cos(angle)*.9,z:p.z+Math.sin(angle)*.9});assert.ok(Math.abs(p.x)<250&&Math.abs(p.z)<250);assert.ok(!rockWallBlocks(layout,p.x,p.z));}
assert.ok(new Set(layout.map(r=>r.height)).size>20);
let bytes=0,triangles=0;
for(const asset of ROCK_ASSETS){const b=readFileSync('public/img/models/'+asset);assert.equal(b.readUInt32LE(8),b.length);const d=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));bytes+=b.length;for(const m of d.meshes)for(const p of m.primitives){triangles+=d.accessors[p.indices].count/3;assert.equal(d.accessors[p.indices].componentType,5123);}assert.equal(d.asset.extras.license.startsWith('CC-BY-4.0'),true);assert.ok(ROCK_CREDITS.some(c=>d.asset.extras.author.startsWith(c.author)));assert.ok(d.images.every(i=>i.mimeType==='image/jpeg'));}
const loader=new GLTFLoader();loader.register(()=>({name:'test-texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
let instanceCount=0;
for(let kind=0;kind<ROCK_ASSETS.length;kind++){
 const data=readFileSync('public/img/models/'+ROCK_ASSETS[kind]);const model=await loader.parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
 const wall=makeBasaltWall(model.scene,kind,layout,8);wall.traverse(o=>{if(o instanceof THREE.InstancedMesh){instanceCount+=o.count;const size=o.geometry.boundingBox.getSize(new THREE.Vector3());assert.ok(size.distanceTo(new THREE.Vector3(1,1,1))<1e-5);assert.ok(o.geometry.boundingBox.min.y>-1e-5);}});
}
assert.equal(instanceCount,layout.length);
assert.ok(bytes<3e6);assert.ok(triangles<=21000);
console.log('Rock walls: perimeter sealed at 1-unit intervals, radial walking blocked, spawn clear, heights varied, GLBs/credits valid.',{bytes,triangles});
