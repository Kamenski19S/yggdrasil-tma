import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createMuspelheimVolcano}=await moduleAt('src/muspelheimVolcano.ts');
const {createSurtTower}=await moduleAt('src/muspelheimSurtTower.ts');
const {createSummitFloor,SUMMIT_FLOOR_Y}=await moduleAt('src/muspelheimSummit.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'textures',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
async function load(file){const b=readFileSync('public/img/models/'+file);return (await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const v=createMuspelheimVolcano(await load('Muspelheim_Volcano.glb'),0);
const t=createSurtTower(await load('Muspelheim_Surt_Tower.glb'));
const original=THREE.TextureLoader.prototype.load;THREE.TextureLoader.prototype.load=function(url,onLoad){const texture=new THREE.Texture();queueMicrotask(()=>onLoad?.(texture));return texture;};
const before=[];v.root.traverse(o=>{if(o instanceof THREE.Mesh)before.push(Array.from(o.geometry.attributes.position.array));});
const f=createSummitFloor('',4,v.root,t.buildingBounds);await f.ready;THREE.TextureLoader.prototype.load=original;
assert.equal(f.floorAt(0,218),null);assert.equal(f.floorAt(-315,-500),null);
let free=0;for(let x=-335;x<=-295;x+=4)for(let z=-430;z<=-390;z+=4){assert.equal(f.floorAt(x,z),SUMMIT_FLOOR_Y);if(!t.blocks(x,z))free++;}
assert.ok(free>30,'The castle courtyard must not be blocked as one solid box');
for(let i=0;i<128;i++){const a=i/128*Math.PI*2;assert.equal(f.floorAt(-315+90*Math.cos(a),-385+90*Math.sin(a)),null,'No paving or floor override on outer mountains');assert.ok(f.shore.radii[i]<=65,'Lava must stop at the inner crater wall');}
let meshIndex=0;v.root.traverse(o=>{if(o instanceof THREE.Mesh)assert.deepEqual(Array.from(o.geometry.attributes.position.array),before[meshIndex++],'Original volcano vertices must remain unchanged');});
const stone=f.root.children[0],lava=f.root.children[2];assert.equal(lava.position.y,-.22);assert.ok(lava.material.fragmentShader.includes('bubble'));
const shader={uniforms:{},fragmentShader:'#include <map_fragment>'};stone.material.onBeforeCompile(shader,{});assert.ok(shader.fragmentShader.includes('discard'));
f.update(1);assert.equal(lava.material.uniforms.time.value,1);
console.log('Crater only: original mountain geometry preserved, shoreline confined, courtyard covered, lava joints and animation passed',{freeCourtyardSamples:free,shoreRange:[Math.min(...f.shore.radii),Math.max(...f.shore.radii)]});
