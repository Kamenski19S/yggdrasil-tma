import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {buildSync} from 'esbuild';import * as T from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const c=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const {createMuspelheimFortress,FORTRESS_ASSET,FORTRESS_POSITION:at,FORTRESS_LAYOUT,FORTRESS_GATES,FORTRESS_SIZE}=await mod('src/muspelheimFortress.ts');const loader=new GLTFLoader();loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));async function load(name){const b=readFileSync('public/img/models/'+name);return(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const bytes=readFileSync('public/img/models/'+FORTRESS_ASSET),doc=JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)));assert(bytes.length<1000000);assert.match(doc.asset.extras.author,/EqualizerX/);assert.match(doc.asset.extras.license,/CC-BY-4.0/);assert(!doc.nodes.some(n=>/Text/i.test(n.name)));assert.equal(doc.meshes.length,5);assert.equal(doc.materials[0].alphaMode,'MASK');assert(doc.images.some(i=>i.mimeType==='image/png'),'Atlas transparency retained');
const fort=createMuspelheimFortress(await load(FORTRESS_ASSET));assert.equal(fort.root.children.length,FORTRESS_LAYOUT.length+1);const texture=new T.Texture();fort.setPavingTexture(texture);assert.equal(fort.root.getObjectByName('Fortress stone courtyard').material.map,texture);
const ground=(x,z)=>Math.max(0,fort.floorAt(x,z)??0);
assert(FORTRESS_SIZE.width*FORTRESS_SIZE.depth>132*88*4.5,'Territory is nearly five times the original courtyard area');
// Every complete gate passage has Vicki's body width and head clearance.
const ray=new T.Raycaster();
for(const gate of FORTRESS_GATES){
 const x=at.x+gate.x,z=at.z+gate.z,dx=Math.sin(gate.yaw),dz=Math.cos(gate.yaw);
 for(let distance=-24;distance<=24;distance+=.5){const px=x+dx*distance,pz=z+dz*distance,y=ground(px,pz);assert(y<1,'Overhead gate roofs never become floors');assert(!fort.blocks(px,pz,y,2),`Gate blocked at ${px},${pz}`);}
 ray.set(new T.Vector3(x,1,z),new T.Vector3(0,1,0));const hit=ray.intersectObject(fort.root,true).find(h=>h.point.y>2);assert(!hit||hit.point.y>14,'Doorway has head clearance');
}
// Check joins along all four expanded walls, allowing only the three intended doors.
for(const [axis,fixed,lo,hi] of [['x',92.5,-150,150],['x',-92.5,-150,150],['z',-150,-92.5,92.5],['z',150,-92.5,92.5]]){
 for(let t=lo;t<=hi;t+=1){const x=axis==='x'?t:fixed,z=axis==='z'?t:fixed;if(FORTRESS_GATES.some(g=>Math.hypot(g.x-x,g.z-z)<12))continue;
 assert(Array.from({length:41},(_,i)=>i-20).some(offset=>fort.blocks(at.x+x+(axis==='z'?offset:0),at.z+z+(axis==='x'?offset:0),0,2)),`Unintended perimeter gap ${x},${z}`);}
}
const {createArmyTower,ARMY_TOWER_ASSET}=await mod('src/muspelheimArmyTower.ts');const tower=createArmyTower(await load(ARMY_TOWER_ASSET));
assert(tower.bounds.min.x>at.x-FORTRESS_SIZE.width/2+20&&tower.bounds.max.x<at.x+FORTRESS_SIZE.width/2-20);
assert(tower.bounds.min.z>at.z-FORTRESS_SIZE.depth/2+10&&tower.bounds.max.z<at.z+FORTRESS_SIZE.depth/2-10,'Entire residence including its stair is inside the walls');
const floor=(x,z)=>Math.max(ground(x,z),tower.floorAt(x,z)??0);
const blocked=(x,z,y)=>fort.blocks(x,z,y,1.6)||tower.blocks(x,z,y,1.6);
const {BASALT_PEAK_SITES:peaks}=await mod('src/muspelheimBasaltPeaks.ts');
const peakBlocks=(x,z)=>peaks.some(p=>Math.abs(x-p.x)<p.width/2+2&&Math.abs(z-p.z)<p.depth/2+2);
const queue=[{x:at.x,z:at.z+FORTRESS_SIZE.depth/2+25}],seen=new Set([`${queue[0].x},${queue[0].z}`]);let cursor=0,nearDoor=false;const door=tower.doorBounds.getCenter(new T.Vector3());
while(cursor<queue.length){const p=queue[cursor++],y=floor(p.x,p.z);if(Math.hypot(p.x-door.x,p.z-door.z)<10&&Math.abs(y-tower.landingY)<4){nearDoor=true;break;}
 for(const [dx,dz] of [[2,0],[-2,0],[0,2],[0,-2]]){const x=p.x+dx,z=p.z+dz,key=`${x},${z}`;if(seen.has(key)||x<at.x-165||x>at.x+165||z<at.z-110||z>at.z+130)continue;const nextY=floor(x,z);if(Math.abs(nextY-y)>=3||blocked(x,z,nextY)||peakBlocks(x,z))continue;seen.add(key);queue.push({x,z});}}
assert(nearDoor,'Vicki can enter from outside, cross the courtyard and climb to the commander door with both colliders active');
const {expandMuspelheimTerrain,createTerrainSampler}=await mod('src/muspelheimTerrain.ts'),{carveSurtRavine}=await mod('src/muspelheimSurtRavine.ts'),{ravinePitDepth}=await mod('src/muspelheimRavineCrossings.ts'),{BASALT_PEAK_SITES}=await mod('src/muspelheimBasaltPeaks.ts');const terrain=await load('Muspelheim_Terrain_300m.glb');terrain.scale.set(1.75,1,1.75);expandMuspelheimTerrain(terrain);carveSurtRavine(terrain,ravinePitDepth);const base=createTerrainSampler(terrain);for(let x=fort.bounds.min.x;x<=fort.bounds.max.x;x+=5)for(let z=fort.bounds.min.z;z<=fort.bounds.max.z;z+=5)assert(Math.abs(base(x,z))<.01,'All foundations rest on upper ground');for(const p of BASALT_PEAK_SITES)for(let x=p.x-p.width/2-2;x<=p.x+p.width/2+2;x+=2)for(let z=p.z-p.depth/2-2;z<=p.z+p.depth/2+2;z+=2)assert(!fort.blocks(x,z,0,2),`Peak ${p.x},${p.z} intersects masonry at ${x},${z}`);
const {createEastVolcano,EAST_VOLCANO_ASSET}=await mod('src/muspelheimEastVolcano.ts');const east=createEastVolcano(await load(EAST_VOLCANO_ASSET));for(let x=at.x-150;x<=at.x+150;x+=3)assert((east.floorAt(x,at.z-92.5)??0)<1,'Rear wall leaves the volcanic slope outside');
const {createMuspelheimForge,FORGE_ASSET}=await mod('src/muspelheimForge.ts');const forge=createMuspelheimForge(await load(FORGE_ASSET)),forgeBox=new T.Box3().setFromObject(forge.root);assert(forgeBox.min.z>fort.bounds.max.z+2,'Forge remains outside with a clear gap from the front wall');
console.log('Expanded fortress passed: closed wall joins, 3 walkable gates, tower fully inside, combined navigation from plaza to commander door, flat foundations and existing peak clearance.');
