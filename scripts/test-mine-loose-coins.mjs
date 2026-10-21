import assert from 'node:assert/strict';import fs from 'node:fs';import {buildSync} from 'esbuild';import * as T from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(file){const c=buildSync({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {mineCoinPlacements,createLooseMineCoins,LOOSE_COIN_ASSET}=await mod('src/ashMineLooseCoins.ts'),{createAshMineLayout}=await mod('src/ashMineLayout.ts');
T.TextureLoader.prototype.load=()=>new T.Texture();const loader=new GLTFLoader();loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));
async function load(name){const b=fs.readFileSync('public/img/models/'+name);return (await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.length),'')).scene;}
const layout=createAshMineLayout('');layout.install(await load('Magical_Abandoned_Mine.glb'),await load('Ash_Mine_Track.glb'));
const placements=mineCoinPlacements(layout.dryFloorAt,(x,z)=>layout.walkable(x,z,true));
assert.ok(placements.length>500&&placements.length<1500,'Many small coins, with a bounded render budget');
assert.deepEqual(placements,mineCoinPlacements(layout.dryFloorAt,(x,z)=>layout.walkable(x,z,true)),'Scatter is stable across reloads');
assert.ok(placements.some(c=>c.z< -340),'Coins reach the treasure bank');assert.ok(placements.some(c=>c.z> -30),'Coins start near the entrance');
const groups=new Map();for(const c of placements){assert.ok(layout.walkable(c.x,c.z,true));const y=layout.dryFloorAt(c.x,c.z);assert.notEqual(y,null,'No coins on water');assert.ok(c.y>=y&&c.y-y<.4,'Coins rest on the floor');assert.ok(c.diameter>=.3&&c.diameter<=.46);groups.set(c.group,(groups.get(c.group)??0)+1);}
assert.ok(Math.max(...groups.values())>=20&&Math.min(...groups.values())<=7,'Dense heaps and sparse patches coexist');
const source=await load(LOOSE_COIN_ASSET),coins=createLooseMineCoins(source,placements);let instanceCount=0,draws=0;const matrix=new T.Matrix4();
coins.traverse(o=>{if(!o.isInstancedMesh)return;draws++;instanceCount+=o.count;assert.ok(o.material.metalness===1&&o.material.roughness<.3);const box=new T.Box3().setFromBufferAttribute(o.geometry.attributes.position),size=box.getSize(new T.Vector3());assert.ok(size.y<.1&&Math.abs(Math.max(size.x,size.z)-1)<.001,'Original relief is flattened and uniformly normalized');for(let i=0;i<o.count;i++){o.getMatrixAt(i,matrix);const worldBox=box.clone().applyMatrix4(matrix);assert.ok(worldBox.max.y-worldBox.min.y<.05,'Coins lie flat');}assert.ok(o.boundingSphere&&Number.isFinite(o.boundingSphere.radius));});
assert.equal(instanceCount,placements.length,'One instanced copy per placement');assert.ok(draws<75,'Patch-level culling uses few draw calls');
console.log(`Loose coins: ${placements.length} dry grounded coins, ${draws} instanced patches, tiny diameter, flat relief, dense/sparse scatter and treasure-bank coverage passed.`);
