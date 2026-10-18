import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {expandMuspelheimTerrain,createTerrainSampler}=await moduleAt('src/muspelheimTerrain.ts');
const {carveEntranceChasm}=await moduleAt('src/muspelheimChasm.ts');
const {carveSurtRavine,canWalkRavine,SURT_RAVINE_LINE,SURT_RAVINE_SITES}=await moduleAt('src/muspelheimSurtRavine.ts');
const {ravinePitDepth,ravineBridgeFloorAt,RAVINE_CROSSINGS,RAVINE_BRIDGE_LENGTH,RAVINE_BRIDGE_WIDTH,classifyRavineStep,bridgeLocal,ravineBridgeHeight,ravineRockLayout,ravineRockBlocks,createRavineCrossings,RAVINE_RESTART,ravineBridgeGapAt,crossesRavineGap}=await moduleAt('src/muspelheimRavineCrossings.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const b=readFileSync('public/img/models/Muspelheim_Terrain_300m.glb');
const root=(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.scale.set(1.75,1,1.75);
expandMuspelheimTerrain(root);carveEntranceChasm(root);carveSurtRavine(root,ravinePitDepth);
const sample=createTerrainSampler(root);
for(let z=-230;z<0;z+=.5)assert.ok(Math.abs(sample(-262.5-.0001,z)-sample(-262.5+.0001,z))<.01,'No cracks at sculpted GLB seam');
const {createMuspelheimVolcano}=await moduleAt('src/muspelheimVolcano.ts');
const vb=readFileSync('public/img/models/Muspelheim_Volcano.glb');
const volcano=createMuspelheimVolcano((await loader.parseAsync(vb.buffer.slice(vb.byteOffset,vb.byteOffset+vb.byteLength),'')).scene,0);
for(const p of SURT_RAVINE_LINE)if(p.x>-510&&p.z>-445)assert.ok((volcano.floorAt(p.x,p.z)??-1000)<sample(p.x,p.z)+1,'Volcano must not cover the ravine floor');
for(const p of SURT_RAVINE_SITES)for(let dx=-12;dx<=12;dx+=3)for(let dz=-12;dz<=12;dz+=3)assert.ok(sample(p.x+dx,p.z+dz)<-64,`Broad usable encounter floor: ${p.x+dx},${p.z+dz} = ${sample(p.x+dx,p.z+dz)}`);
assert.ok(Math.abs(sample(0,196)+48)<.001,'Entrance chasm preserved');
assert.ok(Math.abs(sample(-315,-385))<.001,'Volcano foundation preserved');
assert.ok(Math.abs(sample(300,-300))<.001,'Eastern world preserved');
const walkSample=(x,z)=>Math.max(sample(x,z)??-1000,ravineBridgeFloorAt(x,z)??-1000);
function walkLine(a,b){const n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.2);let from=a;for(let i=1;i<=n;i++){const to={x:THREE.MathUtils.lerp(a.x,b.x,i/n),z:THREE.MathUtils.lerp(a.z,b.z,i/n)};assert.equal(classifyRavineStep(walkSample,from,to),'walk',`Route blocked at ${JSON.stringify(to)}`);from=to;}}
walkLine({x:-365,z:30},{x:-365,z:-105});
walkLine({x:-365,z:-105},{x:-270,z:-125});
walkLine({x:-270,z:-125},{x:-270,z:-230});
// The bridges maintain the sole walkable crossing through both cuts.
for(let i=1;i<SURT_RAVINE_LINE.length;i++){const a=SURT_RAVINE_LINE[i-1],b=SURT_RAVINE_LINE[i];if(a.x>-510&&b.z>-445)walkLine(a,b);}
let rejected=0;for(let z=-185;z<-130;z+=.2)if(!canWalkRavine(sample,{x:-420,z},{x:-420,z:z+.2}))rejected++;
assert.ok(rejected>30,'Steep bank blocks climbing, even in short steps');
const rocks=ravineRockLayout();assert.ok(rocks.length>50);
assert.ok(sample(-420,-100)<-81,'Ravine is deeper');
for(const p of RAVINE_CROSSINGS){
 assert.ok(sample(p.x,p.z)<-170,'A genuine deep terrain cut under each bridge');
 for(let along=-42;along<=42;along+=.15){
  const point={x:p.x+p.tx*along,z:p.z+p.tz*along};
  assert.ok(!ravineRockBlocks(rocks,point.x,walkSample(point.x,point.z),point.z),'No wall rocks obstruct deck');
  const next={x:point.x+p.tx*.15,z:point.z+p.tz*.15};
  assert.equal(classifyRavineStep(walkSample,point,next),'walk','Continuous bridge deck and landings');
 }
 // Walking off either side starts a fall; the reverse cannot climb out of the abyss.
 for(const side of [-1,1]){
  const point=(n)=>({x:p.x-p.tz*n,z:p.z+p.tx*n});
  assert.equal(classifyRavineStep(walkSample,point(side*(RAVINE_BRIDGE_WIDTH/2-.05)),point(side*(RAVINE_BRIDGE_WIDTH/2+.05))),'fall');
  assert.equal(classifyRavineStep(walkSample,point(side*(RAVINE_BRIDGE_WIDTH/2+.05)),point(side*(RAVINE_BRIDGE_WIDTH/2-.05))),'blocked');
 }
}
for(let z=RAVINE_RESTART.z;z>-110;z-=.25)assert.ok(!ravineRockBlocks(rocks,RAVINE_RESTART.x,walkSample(RAVINE_RESTART.x,z),z),'Clear descent');
for(let z=-125;z>-230;z-=.25)assert.ok(!ravineRockBlocks(rocks,-270,walkSample(-270,z),z),'Clear ascent');
assert.equal(classifyRavineStep(walkSample,RAVINE_RESTART,RAVINE_RESTART),'walk');
const bridgeBytes=readFileSync('public/img/models/Muspelheim_Damaged_Rope_Bridge.glb');
const bridgeSource=(await loader.parseAsync(bridgeBytes.buffer.slice(bridgeBytes.byteOffset,bridgeBytes.byteOffset+bridgeBytes.byteLength),'')).scene;
const geometry=createRavineCrossings(bridgeSource);assert.equal(RAVINE_CROSSINGS.length,1);assert.equal(geometry.children.length,2);
assert.ok(bridgeBytes.length<700000,'Bridge is compressed below 700 KB');
let holes=0,boards=0;const crossing=RAVINE_CROSSINGS[0];
for(let along=-38;along<38;along+=.25)for(let across=-6;across<6;across+=.25){const x=crossing.x+crossing.tx*along-crossing.tz*across,z=crossing.z+crossing.tz*along+crossing.tx*across;if(ravineBridgeGapAt(x,z))holes++;else boards++;}
assert.ok(holes>0&&boards>holes,'Real damaged plank mask contains both boards and holes');

const sceneSource=readFileSync('src/Muspelheim3D.tsx','utf8');
assert.ok(sceneSource.includes("if(step==='fall')")&&sceneSource.includes('position.current={...RAVINE_RESTART}'));
assert.ok(!/localStorage|onTrial\(|onInstallCrystal\(/.test(sceneSource.slice(sceneSource.indexOf('if(falling&&!paused.current'),sceneSource.indexOf('if(respawnNotice>0'))),'Death never resets progression');
console.log({holes,boards});console.log('Long bridge, deadly falls, terrain gaps, clear ramps, basalt rocks and preserved quest state passed');
console.log('Surt ravine: actual GLB floor, broad sites, both approaches, connected curve, preserved foundations and cliff collision passed');
