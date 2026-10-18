import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {expandMuspelheimTerrain,createTerrainSampler}=await moduleAt('src/muspelheimTerrain.ts');
const {carveEntranceChasm}=await moduleAt('src/muspelheimChasm.ts');
const {carveSurtRavine,canWalkRavine,SURT_RAVINE_LINE,SURT_RAVINE_SITES}=await moduleAt('src/muspelheimSurtRavine.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const b=readFileSync('public/img/models/Muspelheim_Terrain_300m.glb');
const root=(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.scale.set(1.75,1,1.75);
expandMuspelheimTerrain(root);carveEntranceChasm(root);carveSurtRavine(root);
const sample=createTerrainSampler(root);
for(let z=-230;z<0;z+=.5)assert.ok(Math.abs(sample(-262.5-.0001,z)-sample(-262.5+.0001,z))<.01,'No cracks at sculpted GLB seam');
const {createMuspelheimVolcano}=await moduleAt('src/muspelheimVolcano.ts');
const vb=readFileSync('public/img/models/Muspelheim_Volcano.glb');
const volcano=createMuspelheimVolcano((await loader.parseAsync(vb.buffer.slice(vb.byteOffset,vb.byteOffset+vb.byteLength),'')).scene,0);
for(const p of SURT_RAVINE_LINE)if(p.x>-510&&p.z>-445)assert.ok((volcano.floorAt(p.x,p.z)??-1000)<sample(p.x,p.z)+1,'Volcano must not cover the ravine floor');
for(const p of SURT_RAVINE_SITES)for(let dx=-18;dx<=18;dx+=3)for(let dz=-18;dz<=18;dz+=3)assert.ok(sample(p.x+dx,p.z+dz)<-64,`Broad usable encounter floor: ${p.x+dx},${p.z+dz} = ${sample(p.x+dx,p.z+dz)}`);
assert.ok(Math.abs(sample(0,196)+48)<.001,'Entrance chasm preserved');
assert.ok(Math.abs(sample(-315,-385))<.001,'Volcano foundation preserved');
assert.ok(Math.abs(sample(300,-300))<.001,'Eastern world preserved');
function walkLine(a,b){const n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.2);let from=a;for(let i=1;i<=n;i++){const to={x:THREE.MathUtils.lerp(a.x,b.x,i/n),z:THREE.MathUtils.lerp(a.z,b.z,i/n)};assert.ok(canWalkRavine(sample,from,to),`Route blocked at ${JSON.stringify(to)}`);from=to;}}
walkLine({x:-365,z:30},{x:-365,z:-105});
walkLine({x:-365,z:-105},{x:-270,z:-125});
walkLine({x:-270,z:-125},{x:-270,z:-230});
// Floor remains connected around the bend; no impassable triangulation seams.
for(let i=1;i<SURT_RAVINE_LINE.length;i++){const a=SURT_RAVINE_LINE[i-1],b=SURT_RAVINE_LINE[i];if(a.x>-510&&b.z>-445)walkLine(a,b);}
let rejected=0;for(let z=-185;z<-130;z+=.2)if(!canWalkRavine(sample,{x:-420,z},{x:-420,z:z+.2}))rejected++;
assert.ok(rejected>30,'Steep bank blocks climbing, even in short steps');
console.log('Surt ravine: actual GLB floor, broad sites, both approaches, connected curve, preserved foundations and cliff collision passed');
