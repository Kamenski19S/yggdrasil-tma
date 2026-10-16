import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {expandMuspelheimTerrain,createTerrainSampler,clampMuspelheimPosition,MAIN_WORLD,WORLD_OUTLINE,muspelheimMapPoint}=await moduleAt('src/muspelheimTerrain.ts');
const {carveEntranceChasm,chasmDepth,BRIDGE_SPAWN}=await moduleAt('src/muspelheimChasm.ts');
const {rockWallLayout,rockWallBlocks}=await moduleAt('src/muspelheimRockWalls.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const b=readFileSync('public/img/models/Muspelheim_Terrain_300m.glb');
const root=(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.scale.set(1.75,1,1.75);root.updateWorldMatrix(true,true);
let original;root.traverse(o=>{if(!original&&o instanceof THREE.Mesh)original=o;});
const oldPositions=original.geometry.attributes.position.array.slice(),oldUV=original.geometry.attributes.uv.array.slice();
expandMuspelheimTerrain(root);
assert.deepEqual(original.geometry.attributes.position.array,oldPositions,'Entrance vertices must remain unchanged');assert.deepEqual(original.geometry.attributes.uv.array,oldUV,'Entrance UVs must remain unchanged');
let triangles=0;root.traverse(o=>{if(o instanceof THREE.Mesh)triangles+=o.geometry.index.count/3;});assert.ok(triangles<90000);
const sample=createTerrainSampler(root);for(let x=-510;x<=510;x+=17)for(let z=-445;z<=95;z+=17)assert.ok(Math.abs(sample(x,z))<.001,`Missing floor at ${x},${z}`);
for(const x of [-262.5,262.5])for(let z=-260;z<=100;z+=3)for(const offset of [-.001,0,.001])assert.ok(Math.abs(sample(x+offset,z))<.001,'Side seam must remain walkable');
for(let x=-510;x<=510;x+=13)for(const offset of [-.001,0,.001])assert.ok(Math.abs(sample(x,-262.5+offset))<.001,'North seam must remain walkable');
assert.equal(sample(400,200),null);assert.equal(sample(530,0),null);assert.equal(sample(0,-470),null);
assert.deepEqual(clampMuspelheimPosition(600,-600),{x:522,z:-455.75});assert.deepEqual(clampMuspelheimPosition(400,108),{x:400,z:107});
carveEntranceChasm(root);const carved=createTerrainSampler(root);assert.ok(Math.abs(carved(0,196)+48)<.001);assert.equal(chasmDepth(0,196),-48);assert.deepEqual(BRIDGE_SPAWN,{x:0,z:218});
assert.ok(Math.abs(carved(0,140))<.001);assert.ok(Math.abs(carved(400,0))<.001);
// World-aligned UVs must match on all added sections, with the original texel density.
root.updateWorldMatrix(true,true);const inv=original.matrixWorld.clone().invert(),p=original.geometry.attributes.position,uv=original.geometry.attributes.uv,v=new THREE.Vector3(),side=Math.sqrt(p.count);
root.traverse(o=>{if(!(o instanceof THREE.Mesh)||o===original)return;const q=o.geometry.attributes.position,t=o.geometry.attributes.uv;for(let i=0;i<q.count;i++){v.fromBufferAttribute(q,i).applyMatrix4(o.matrixWorld).applyMatrix4(inv);const gx=(v.x-p.getX(0))/(p.getX(1)-p.getX(0)),gz=(v.z-p.getZ(0))/(p.getZ(side)-p.getZ(0));assert.ok(Math.abs(t.getX(i)-(uv.getX(0)+gx*(uv.getX(1)-uv.getX(0))+gz*(uv.getX(side)-uv.getX(0))))<1e-5);assert.ok(Math.abs(t.getY(i)-(uv.getY(0)+gx*(uv.getY(1)-uv.getY(0))+gz*(uv.getY(side)-uv.getY(0))))<1e-5);}});
const rocks=rockWallLayout({x:0,z:130,halfWidth:20.5});assert.equal(rockWallBlocks(rocks,400,0),false);assert.equal(rockWallBlocks(rocks,-400,0),false);assert.equal(rockWallBlocks(rocks,0,-380),false);assert.equal(rockWallBlocks(rocks,BRIDGE_SPAWN.x,BRIDGE_SPAWN.z),false);
for(let i=0;i<WORLD_OUTLINE.length;i++){const a=WORLD_OUTLINE[i],b=WORLD_OUTLINE[(i+1)%WORLD_OUTLINE.length],length=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let d=0;d<=length;d++)assert.ok(rockWallBlocks(rocks,a[0]+(b[0]-a[0])*d/length,a[1]+(b[1]-a[1])*d/length),'New perimeter gap');}
for(const [x,z] of WORLD_OUTLINE){const p=muspelheimMapPoint(x,z);assert.ok(p.x>=12&&p.x<=288&&p.y>=12&&p.y<208);}
console.log('Expanded land: fixed entrance/UVs, continuous walkable seams, unchanged chasm, sealed perimeter, map bounds and texel density passed.',{triangles,rocks:rocks.length,mainWidth:MAIN_WORLD.maxX-MAIN_WORLD.minX});
