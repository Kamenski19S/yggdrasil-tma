import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createMuspelheimVolcano}=await moduleAt('src/muspelheimVolcano.ts');
const {createSurtTower,SURT_TOWER_POSITION,SURT_TOWER_CREDIT}=await moduleAt('src/muspelheimSurtTower.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'textures',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
async function load(file){const b=readFileSync('public/img/models/'+file);assert.equal(b.readUInt32LE(8),b.length);return {bytes:b,gltf:await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')};}
const volcano=createMuspelheimVolcano((await load('Muspelheim_Volcano.glb')).gltf.scene,0);
const asset=await load('Muspelheim_Surt_Tower.glb');assert.ok(asset.bytes.length<4e6);
const doc=JSON.parse(asset.bytes.subarray(20,20+asset.bytes.readUInt32LE(12)));assert.equal(doc.asset.extras.source,SURT_TOWER_CREDIT.url);
const triangles=doc.meshes.reduce((sum,m)=>sum+m.primitives.reduce((n,p)=>n+doc.accessors[p.indices].count/3,0),0);assert.ok(triangles<45000);
const tower=createSurtTower(asset.gltf.scene,volcano.floorAt),b=tower.buildingBounds;
assert.ok(b.min.z>-435&&b.max.z<-350&&b.min.x>-400&&b.max.x<-200,'Building stays on rear summit, before the back wall');
assert.ok(tower.floorY>45&&tower.floorY<70,'Foundation is anchored high on the volcano');
assert.ok(Math.abs(b.min.y-(tower.floorY-.3))<1e-5,'Castle base must sit in the foundation');
assert.equal(tower.floorAt(0,218),null);assert.equal(tower.blocks(0,218),false);assert.equal(tower.blocks(SURT_TOWER_POSITION.x,SURT_TOWER_POSITION.z),true);
const mesh=tower.root.getObjectByName('Summit rock foundation'),positions=mesh.geometry.attributes.position;
for(let i=1;i<positions.count;i+=2){const x=positions.getX(i),z=positions.getZ(i),terrain=Math.max(0,volcano.floorAt(x,z)??0);assert.ok(positions.getY(i+1)<=terrain-.99,'Foundation skirt must reach into rock');assert.ok(positions.getY(i)>=terrain-.01,'Foundation top must be above its edge support');}
console.log('Surt tower: optimized GLB/credit, rear summit placement, grounded base, continuous support and building collision passed',{bytes:asset.bytes.length,triangles,floorY:tower.floorY,bounds:[b.min.toArray(),b.max.toArray()]});
if(process.env.TOWER_PREVIEW){const meshes=[];for(const root of [volcano.root,tower.root])root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.attributes.position,v=new THREE.Vector3();meshes.push({kind:root===tower.root?'tower':'volcano',vertices:Array.from({length:p.count},(_,i)=>v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld).toArray()),indices:Array.from(o.geometry.index.array)});});writeFileSync(process.env.TOWER_PREVIEW,JSON.stringify(meshes));}
