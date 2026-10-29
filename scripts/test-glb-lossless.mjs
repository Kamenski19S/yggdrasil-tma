import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import * as THREE from 'three';
import {buildSync} from 'esbuild';
import {parseGlb,optimizeGlbLossless} from './optimize-glb-lossless.mjs';

const originalDir=process.argv[2],optimizedDir=process.argv[3]??'public/img/models';
assert(originalDir,'Pass the original models directory');
await MeshoptDecoder.ready;
function viewBytes(d,i){const v=d.json.bufferViews[i],e=v.extensions?.EXT_meshopt_compression;if(!e)return d.binary.subarray(v.byteOffset??0,(v.byteOffset??0)+v.byteLength);const out=new Uint8Array(e.count*e.byteStride);MeshoptDecoder.decodeGltfBuffer(out,e.count,e.byteStride,d.binary.subarray(e.byteOffset,e.byteOffset+e.byteLength),e.mode,e.filter);return Buffer.from(out);}
const files=fs.readdirSync(originalDir,{recursive:true}).filter(n=>n.endsWith('.glb')); let compressed=0,views=0,images=0;
for(const file of files){
 const before=parseGlb(fs.readFileSync(path.join(originalDir,file))),after=parseGlb(fs.readFileSync(path.join(optimizedDir,file)));
 if(!after.json.extensionsUsed?.includes('EXT_meshopt_compression')&&!after.json.extensionsUsed?.includes('EXT_texture_webp'))continue;
 for(const key of ['nodes','meshes','accessors','animations','skins','materials','samplers','scenes','scene','asset'])assert.deepEqual(JSON.parse(JSON.stringify(after.json[key]??null)),JSON.parse(JSON.stringify(before.json[key]??null)),file+': '+key+' unchanged');
 assert.equal(after.json.bufferViews.length,before.json.bufferViews.length);
 const changedImageViews=new Set();
 for(let i=0;i<(before.json.images??[]).length;i++){
  const old=before.json.images[i],next=after.json.images[i];
  if(old.mimeType!==next.mimeType){assert.equal(next.mimeType,'image/webp');changedImageViews.add(old.bufferView);const a=await sharp(viewBytes(before,old.bufferView)).ensureAlpha().raw().toBuffer({resolveWithObject:true}),b=await sharp(viewBytes(after,next.bufferView)).ensureAlpha().raw().toBuffer({resolveWithObject:true});assert.deepEqual(a.info,b.info);assert(a.data.equals(b.data),file+': texture pixels match exactly');images++;}
 }
 for(let i=0;i<before.json.bufferViews.length;i++){if(changedImageViews.has(i))continue;assert(viewBytes(before,i).equals(viewBytes(after,i)),file+': buffer view '+i+' restores byte-for-byte');views++;}
 if(after.json.extensionsUsed?.includes('EXT_meshopt_compression'))compressed++;
}
const code=buildSync({entryPoints:['src/modelLoader.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three','three/*']}).outputFiles[0].text.replaceAll(/from "(three[^\"]*)"/g,(_,p)=>`from ${JSON.stringify(import.meta.resolve(p))}`);
const {GLTFLoader}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const loader=new GLTFLoader();loader.register(()=>({name:'EXT_texture_webp',loadTexture:()=>Promise.resolve(new THREE.Texture())}));loader.register(()=>({name:'test-textures',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const selected=['Vika-3d-animated-optimized.glb','NPC_Ranger_Female_Rigged.glb','Muspelheim_Mimir.glb','Ash_Mine_Ocean_Guardian.glb','Ash_Mine_Dwarf_Worker.glb','Ash_Mine_Goblin_Helper.glb','Magical_Abandoned_Mine.glb','Muspelheim_Surt_Golem.glb','Angelic_Alliance_Chest_5m.glb'];
async function load(dir,file){const b=fs.readFileSync(path.join(dir,file));return loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');}
function snapshot(g){g.scene.updateMatrixWorld(true);const result=[];g.scene.traverse(o=>{const v={type:o.type,name:o.name,position:o.position.toArray(),quaternion:o.quaternion.toArray(),scale:o.scale.toArray()};if(o.isMesh){v.attributes=Object.fromEntries(Object.entries(o.geometry.attributes).map(([k,a])=>[k,Array.from(a.isInterleavedBufferAttribute?a.data.array:a.array)]));v.indices=o.geometry.index?Array.from(o.geometry.index.array):null;}if(o.isSkinnedMesh){v.bones=o.skeleton.bones.map(b=>b.name);v.inverses=o.skeleton.boneInverses.map(m=>m.toArray());}result.push(v);});return {result,clips:g.animations.map(c=>({name:c.name,duration:c.duration,tracks:c.tracks.map(t=>({name:t.name,times:Array.from(t.times),values:Array.from(t.values)}))}))};}
for(const file of selected){assert.deepEqual(JSON.parse(JSON.stringify(snapshot(await load(originalDir,file)))),JSON.parse(JSON.stringify(snapshot(await load(optimizedDir,file)))),file+': real Three.js geometry, skin and animations match');console.log('Loader parity:',file);}
const sample=fs.readFileSync(path.join(optimizedDir,selected[0])),again=await optimizeGlbLossless(sample);assert(sample.equals(again.output),'Build optimizer is idempotent');
console.log(JSON.stringify({files:files.length,compressed,verifiedBinaryViews:views,verifiedLosslessImages:images,loaderModels:selected.length}));
