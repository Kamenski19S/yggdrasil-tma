import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {buildSync} from 'esbuild';import * as T from 'three';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createCanyonRidge,CANYON_RIDGE_ASSET,CANYON_RIDGE_CREDIT,CANYON_RIDGE_LAYOUT}=await mod('src/muspelheimCanyonRidge.ts'),{expandMuspelheimTerrain,createTerrainSampler}=await mod('src/muspelheimTerrain.ts'),{carveSurtRavine,SURT_RAVINE_LINE}=await mod('src/muspelheimSurtRavine.ts'),{ravinePitDepth,ravineBridgeFloorAt,RAVINE_CROSSINGS,classifyRavineStep,ravineFrame}=await mod('src/muspelheimRavineCrossings.ts'),{carveMineApproach}=await mod('src/muspelheimMineEntrance.ts'),{createRavineLava}=await mod('src/muspelheimRavineLava.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'stub',loadTexture:()=>Promise.resolve(new T.Texture())}));async function load(name){const b=readFileSync('public/img/models/'+name);return (await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const {surtPassRidgeProtection}=await mod('src/muspelheimSurtPassLayout.ts');const {createSurtPass,SURT_PASS_ASSET}=await mod('src/muspelheimSurtPass.ts');const pass=createSurtPass(await load(SURT_PASS_ASSET));
const bytes=readFileSync('public/img/models/'+CANYON_RIDGE_ASSET),d=JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)));
assert.ok(bytes.length<500000);assert.equal(d.asset.extras.source,CANYON_RIDGE_CREDIT.url);assert.ok(d.materials[0].pbrMetallicRoughness.baseColorTexture);assert.ok(!d.extensionsUsed?.includes('KHR_materials_pbrSpecularGlossiness'));
const terrain=await load('Muspelheim_Terrain_300m.glb');terrain.scale.set(1.75,1,1.75);expandMuspelheimTerrain(terrain);carveSurtRavine(terrain,ravinePitDepth);carveMineApproach(terrain);const base=createTerrainSampler(terrain),lava=createRavineLava();
const ridge=createCanyonRidge(await load(CANYON_RIDGE_ASSET),base,lava),box=new T.Box3().setFromObject(ridge.root),sample=(x,z)=>Math.max(base(x,z)??-1000,ridge.floorAt(x,z)??-1000,ravineBridgeFloorAt(x,z)??-1000,pass.floorAt(x,z)??-1000);

assert.equal(ridge.root.children.length,8,'The same asset covers both canyon sections');
assert.ok(new Set(CANYON_RIDGE_LAYOUT.map(p=>p.height)).size>=5,'Varied summit heights');
let raised=0,edgeCount=0;const targets=[];
for(const section of ridge.root.children){let peak=null;section.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position,e=o.geometry.attributes.ridgeEdge;for(let i=0;i<p.count;i++){
 const x=p.getX(i),z=p.getZ(i),y=p.getY(i),delta=y-base(x,z);assert.ok(Number.isFinite(y));
 if(e.getX(i)>.999){assert.ok(delta<.03,`Edges buried: ${section.name} x=${x} z=${z} edge=${e.getX(i)} delta=${delta}`);edgeCount++;}
 if(delta>4&&ravineFrame(x,z).distance<24){raised++;if(!peak||delta>peak.delta)peak={x,z,y,delta};}
 }});if(peak){assert.ok(peak.delta>5,'Uncovered copies retain elevated summits');targets.push(peak);}else assert(surtPassRidgeProtection(CANYON_RIDGE_LAYOUT[ridge.root.children.indexOf(section)].x,CANYON_RIDGE_LAYOUT[ridge.root.children.indexOf(section)].z)<1,'Only the tower passage may replace a summit');}
assert.ok(raised>100&&edgeCount>100);
for(const p of RAVINE_CROSSINGS)for(let t=-42;t<=42;t+=2){const x=p.x+p.tx*t,z=p.z+p.tz*t;assert.ok((ridge.floorAt(x,z)??-Infinity)<=Math.max(base(x,z),ravineBridgeFloorAt(x,z))+.01,'Bridge and approaches unchanged');}
for(let z=-125;z>=-225;z-=1)assert.ok((ridge.floorAt(-270,z)??-Infinity)<=base(-270,z)+.01,'Ascent remains clear');
for(let z=20;z>=-110;z-=1)assert.ok((ridge.floorAt(-365,z)??-Infinity)<=base(-365,z)+.01,'Descent remains clear');
// Explore the real combined triangle surface at walking resolution. Start at the
// descent and verify the connected paths reach every crater's highest walkable point.
const grid=1.5,key=(x,z)=>`${x},${z}`,visited=new Set(),queue=[];const start={x:Math.round(-365/grid),z:Math.round(-105/grid)};
queue.push(start);visited.add(key(start.x,start.z));let cursor=0;
while(cursor<queue.length){const a=queue[cursor++],from={x:a.x*grid,z:a.z*grid};for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){
 const b={x:a.x+dx,z:a.z+dz},k=key(b.x,b.z),to={x:b.x*grid,z:b.z*grid};if(visited.has(k)||to.x< -520||to.x> -25||to.z< -453||to.z> -50)continue;
 if(ravineFrame(to.x,to.z).distance>64)continue;
 if(classifyRavineStep(sample,from,to,(x,z)=>ravinePitDepth(x,z)<-28)!=='walk')continue;
 visited.add(k);queue.push(b);
}}
for(const p of [...targets,...CANYON_RIDGE_LAYOUT.map(p=>p.crater).filter(p=>surtPassRidgeProtection(p.x,p.z)>.999)]){let reached=false;for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++)if(visited.has(key(Math.round(p.x/grid)+dx,Math.round(p.z/grid)+dz)))reached=true;assert.ok(reached,`Reachable summit or crater ${JSON.stringify(p)}`);}
// Inspect the complete bank-to-bank sections, including the former flat
// side lanes. A low detour cannot cross these sections anywhere along a wall.
let fullWidthChecks=0;for(const patch of [CANYON_RIDGE_LAYOUT[0],...CANYON_RIDGE_LAYOUT.slice(2)]){
 const g=patch.gatePoint;if(surtPassRidgeProtection(g.x,g.z)<.999)continue;const level=base(g.x,g.z)+patch.pass-3;
 for(let cross=-64;cross<=64;cross+=.5){const x=g.x+g.nx*cross,z=g.z+g.nz*cross;const h=sample(x,z);assert.ok(h>=level,`No flat bypass at station ${patch.station}, cross ${cross}: ${h} < ${level}`);fullWidthChecks++;}
}
const ray=new T.Raycaster(),down=new T.Vector3(0,-1,0);let checks=0;
for(const section of CANYON_RIDGE_LAYOUT)for(const dx of [-12,0,12])for(const dz of [-9,0,9]){const x=section.x+dx,z=section.z+dz;ray.set(new T.Vector3(x,box.max.y+2,z),down);const expected=ray.intersectObject(ridge.root,true)[0]?.point.y??null,actual=ridge.floorAt(x,z);if(expected==null)assert.equal(actual,null);else {assert.ok(Math.abs(expected-actual)<.001);checks++;}}
assert.ok(checks>30);lava.dispose();console.log('Canyon chain: eight varied copies, buried seams, clear bridge/ramps, connected walkable summits and exact triangle heights passed.',{copies:CANYON_RIDGE_LAYOUT.length,raised,checks,reachableCells:visited.size,fullWidthChecks,heights:targets.map(p=>+p.delta.toFixed(1))});
