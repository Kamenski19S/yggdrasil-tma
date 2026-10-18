import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {buildSync} from 'esbuild';import * as THREE from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const c=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(c).toString('base64'));}
const mine=await mod('src/muspelheimMineEntrance.ts'),ravine=await mod('src/muspelheimRavineCrossings.ts'),{rockWallLayout,rockWallBlocks}=await mod('src/muspelheimRockWalls.ts'),{expandMuspelheimTerrain,createTerrainSampler}=await mod('src/muspelheimTerrain.ts'),{carveSurtRavine}=await mod('src/muspelheimSurtRavine.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));const b=readFileSync('public/img/models/Muspelheim_Terrain_300m.glb');const terrain=(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;terrain.scale.set(1.75,1,1.75);expandMuspelheimTerrain(terrain);carveSurtRavine(terrain,ravine.ravinePitDepth);mine.carveMineApproach(terrain);const sample=createTerrainSampler(terrain),height=(x,z)=>mine.mineApproachFloorAt(x,z)??Math.max(sample(x,z)??-1000,ravine.ravineBridgeFloorAt(x,z)??-1000);
const load=THREE.TextureLoader.prototype.load;THREE.TextureLoader.prototype.load=()=>new THREE.Texture();const door=mine.createMineEntrance('');THREE.TextureLoader.prototype.load=load;
const walls=rockWallLayout(),rocks=[...ravine.ravineRockLayout(),...mine.mineApproachRocks()];
const blocked=(x,z,y)=>mine.mineApproachSideBlocks(x,y,z)||door.blocks(x,z,y)||rockWallBlocks(walls,x,z,2,y)||ravine.ravineRockBlocks(rocks,x,y,z);
for(const fps of [20,60,120]){
 let pos={x:mine.MINE_PATH[0].x,z:mine.MINE_PATH[0].z};
 function walkTo(target){for(let count=0;count<20000;count++){const d=Math.hypot(target.x-pos.x,target.z-pos.z);if(d<1e-5)return;const step=Math.min(29/fps,d),next={x:pos.x+(target.x-pos.x)/d*step,z:pos.z+(target.z-pos.z)/d*step},y=height(pos.x,pos.z);assert.ok(!blocked(next.x,next.z,y),'Body blocked on path '+JSON.stringify(next));assert.equal(ravine.classifyRavineStep(height,pos,next,ravine.isRavineAbyss),'walk','Fall or discontinuity at '+JSON.stringify(next));pos=next;}throw Error('Route did not finish');}
 for(const point of mine.MINE_PATH.slice(1))walkTo(point);
 walkTo({x:mine.MINE_DOOR.x,z:mine.MINE_DOOR.z-.3});
 assert.ok(door.blocks(mine.MINE_DOOR.x,mine.MINE_DOOR.z+.5,mine.MINE_DOOR.y)||door.opened,'Closed leaf is solid');
 door.open();door.update(1);walkTo({x:mine.MINE_DOOR.x,z:mine.MINE_DOOR.z+1});assert.ok(door.canEnter(pos.x,height(pos.x,pos.z),pos.z),'Walking across open threshold enters mine');
 assert.equal(height(pos.x,pos.z),height(mine.MINE_DOOR.x,mine.MINE_DOOR.z-1),'Threshold and landing are level');
}
for(let i=4;i<44;i++){const p=mine.MINE_PATH[i],angle=i/48*Math.PI;for(const side of [-1,1])assert.ok(mine.mineApproachSideBlocks(p.x+Math.cos(angle)*5.3*side,p.y,p.z-Math.sin(angle)*5.3*side),'Both spiral edges have continuous body collision');}
// Ordinary steep slopes never become a death trigger, including at the top edge.
let steep=0;for(let x=-500;x<-390;x+=2)for(let z=-170;z<-20;z+=2){const a={x,z},to={x,z:z+.2};if(ravine.classifyRavineStep(height,a,to)==='fall'&&!ravine.isRavineAbyss(to.x,to.z)){assert.equal(ravine.classifyRavineStep(height,a,to,ravine.isRavineAbyss),'blocked');steep++;}}
assert.ok(steep>50,'Regression includes the upper and lower bank drop-offs');
const cross=ravine.RAVINE_CROSSINGS[0],w=ravine.RAVINE_BRIDGE_WIDTH/2;const edge=n=>({x:cross.x-cross.tz*n,z:cross.z+cross.tx*n});assert.equal(ravine.classifyRavineStep(height,edge(w-.05),edge(w+.05),ravine.isRavineAbyss),'fall','The real abyss stays deadly');
assert.ok(!blocked(mine.MINE_RETURN.x,mine.MINE_RETURN.z,height(mine.MINE_RETURN.x,mine.MINE_RETURN.z)),'Return platform remains safe');
console.log({steep});console.log('Spiral edges, upper/lower bank drops, solid landing, closed door collision, automatic open-door crossing at 20/60/120 FPS and real abyss passed.');
