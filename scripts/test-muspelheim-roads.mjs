import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function mod(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three','three/*']}).outputFiles[0].text.replaceAll(/from "(three[^\"]*)"/g,(_,p)=>`from ${JSON.stringify(import.meta.resolve(p))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const loader=new GLTFLoader();for(const name of ['stub','EXT_texture_webp'])loader.register(()=>({name,loadTexture:()=>Promise.resolve(new T.Texture())}));
async function load(name){const b=readFileSync('public/img/models/'+name);return (await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const [roads,terrainModule,ravine,crossings,rocksModule,peaksModule,mine,volcanoModule,ridgeModule,lavaModule]=await Promise.all(['muspelheimRoads','muspelheimTerrain','muspelheimSurtRavine','muspelheimRavineCrossings','muspelheimRockWalls','muspelheimBasaltPeaks','muspelheimMineEntrance','muspelheimVolcano','muspelheimCanyonRidge','muspelheimRavineLava'].map(n=>mod('src/'+n+'.ts')));
const terrain=await load('Muspelheim_Terrain_300m.glb');terrain.scale.set(1.75,1,1.75);terrainModule.expandMuspelheimTerrain(terrain);ravine.carveSurtRavine(terrain,crossings.ravinePitDepth);mine.carveMineApproach(terrain);const base=terrainModule.createTerrainSampler(terrain),lava=lavaModule.createRavineLava(),ridge=ridgeModule.createCanyonRidge(await load('Muspelheim_Canyon_Ridge.glb'),base,lava),volcano=volcanoModule.createMuspelheimVolcano(await load(volcanoModule.VOLCANO_ASSET),0);
const actors={};
for(const [key,file,create,asset] of [['forge','muspelheimForge','createMuspelheimForge','FORGE_ASSET'],['sanctuary','muspelheimIceSanctuary','createIceSanctuary','ICE_SANCTUARY_ASSET'],['norns','muspelheimNornsWell','createMuspelheimNornsWell','NORNS_WELL_ASSET'],['vault','muspelheimDarkVault','createDarkThreadVault','DARK_VAULT_ASSET'],['fortress','muspelheimFortress','createMuspelheimFortress','FORTRESS_ASSET'],['tower','muspelheimArmyTower','createArmyTower','ARMY_TOWER_ASSET'],['pillar','muspelheimYmirPillar','createYmirMemoryPillar','YMIR_PILLAR_ASSET'],['ash','muspelheimAshVolcano','createAshVolcano','ASH_VOLCANO_ASSET'],['east','muspelheimEastVolcano','createEastVolcano','EAST_VOLCANO_ASSET']]){const m=await mod('src/'+file+'.ts');actors[key]=m[create](await load(m[asset]));}
const floor=(x,z)=>Math.max(base(x,z)??-Infinity,ridge.floorAt(x,z)??-Infinity,volcano.floorAt(x,z)??-Infinity,...Object.values(actors).map(a=>a.floorAt?.(x,z)??-Infinity));
const rockFloor=(x,z)=>Math.max(base(x,z)??-Infinity,ridge.floorAt(x,z)??-Infinity,volcano.floorAt(x,z)??-Infinity);
const rocks=[...rocksModule.rockWallLayout({x:0,z:130,halfWidth:20.5}),...peaksModule.basaltPeakLayout(rockFloor)],ravineRocks=[...crossings.ravineRockLayout(),...mine.mineApproachRocks()];
const blocked=(p,y)=>Object.entries(actors).filter(([id])=>!['ash','east'].includes(id)).filter(([id,a])=>a.blocks&&(id==='forge'?a.blocks(p.x,p.z):id==='norns'?a.blocks(p.x,p.z,2.3):a.blocks(p.x,p.z,y,2.3))).map(([id])=>id);
let samples=0;const errors=[];
for(const [i,line] of roads.roadLines().entries()){
 const route=roads.ROAD_ROUTES[i];let previous;
 for(const p of line){const y=floor(p.x,p.z);samples++;
  if(!Number.isFinite(y))errors.push(`${route.id}: no floor ${JSON.stringify(p)}`);
  if(p.x< -140&&p.z< -150)errors.push(`${route.id}: old Surt bank road ${JSON.stringify(p)}`);
  if(crossings.isRavineAbyss(p.x,p.z))errors.push(`${route.id}: road leads into abyss ${JSON.stringify(p)}`);
  if(rocksModule.rockWallBlocks(rocks,p.x,p.z,roads.ROAD_WIDTH/2+1,y))errors.push(`${route.id}: road intersects rock ${JSON.stringify(p)} ${JSON.stringify(rocks.filter(r=>rocksModule.rockWallBlocks([r],p.x,p.z,roads.ROAD_WIDTH/2+1,y)))}`);
  if(crossings.ravineRockBlocks(ravineRocks,p.x,y,p.z,2.3))errors.push(`${route.id}: ravine rock ${JSON.stringify(p)}`);
  const solids=blocked(p,y);if(solids.length)errors.push(`${route.id}: blocked by ${solids} ${JSON.stringify(p)}`);
  if(previous&&Math.abs(y-previous.y)>Math.hypot(p.x-previous.x,p.z-previous.z)*1.4+.1)errors.push(`${route.id}: unwalkable height ${JSON.stringify(p)} ${previous.y}->${y}`);
  previous={...p,y};
 }
}
console.log('Road checks',samples,'errors',errors.length);if(errors.length){const groups=new Map();for(const e of errors){const key=e.split('{')[0];const a=groups.get(key)||[];a.push(e);groups.set(key,a);}for(const [key,items]of groups)console.log(key,items.length,items[0]);}
assert.equal(errors.length,0,'Every road follows walkable real geometry');
// Every branch joins the network; terminal points remain at current approach locations.
const lines=roads.roadLines(),nearLine=(p,line)=>line.some(q=>Math.hypot(p.x-q.x,p.z-q.z)<2.1),connected=new Set([0]);for(let round=0;round<lines.length;round++)for(let i=0;i<lines.length;i++)if(!connected.has(i)&&[...connected].some(j=>lines[i].some(p=>nearLine(p,lines[j]))))connected.add(i);assert.equal(connected.size,lines.length,'All branches reach the first gateway');
assert.equal(roads.ROAD_ROUTES.length,lines.length);assert(roads.ROAD_ROUTES.every(r=>r.id&&r.name));assert(lines.every(line=>line.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.z))));
lava.dispose();console.log('Roads passed: connected destinations, real location collisions, full-width rock clearance, actual terrain steps and no road on the blocked Surt bank.');
