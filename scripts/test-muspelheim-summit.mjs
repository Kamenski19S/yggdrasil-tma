import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
async function moduleAt(path){const code=buildSync({entryPoints:[path],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));}
const {createMuspelheimVolcano}=await moduleAt('src/muspelheimVolcano.ts');
const {createSurtTower}=await moduleAt('src/muspelheimSurtTower.ts');
const {clearSummitBowl,createSummitFloor,SUMMIT_FLOOR_Y}=await moduleAt('src/muspelheimSummit.ts');
const loader=new GLTFLoader();loader.register(()=>({name:'textures',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
async function load(file){const b=readFileSync('public/img/models/'+file);return (await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const v=createMuspelheimVolcano(await load('Muspelheim_Volcano.glb'),0);clearSummitBowl(v.root);
const t=createSurtTower(await load('Muspelheim_Surt_Tower.glb'));
const original=THREE.TextureLoader.prototype.load;THREE.TextureLoader.prototype.load=function(url,onLoad){const texture=new THREE.Texture();queueMicrotask(()=>onLoad?.(texture));return texture;};
const f=createSummitFloor('',4);await f.ready;THREE.TextureLoader.prototype.load=original;
assert.equal(f.floorAt(0,218),null);assert.equal(f.floorAt(-315,-500),null);
let free=0;for(let x=-335;x<=-295;x+=4)for(let z=-430;z<=-390;z+=4){assert.equal(f.floorAt(x,z),SUMMIT_FLOOR_Y);assert.ok((v.floorAt(x,z)??0)<SUMMIT_FLOOR_Y,'No rock protrudes through courtyard');if(!t.blocks(x,z))free++;}
assert.ok(free>30,'The castle courtyard must not be blocked as one solid box');
for(let x=-375;x<=-255;x+=10)for(let z=-445;z<=-325;z+=10)if(Math.hypot(x+315,z+385)<=78)assert.equal(f.floorAt(x,z),SUMMIT_FLOOR_Y);
const stone=f.root.children[0],lava=f.root.children[1];assert.ok(lava.position.y<SUMMIT_FLOOR_Y&&lava.position.y>SUMMIT_FLOOR_Y-.5);assert.ok(lava.material.fragmentShader.includes('bubble'));
const shader={uniforms:{},fragmentShader:'#include <map_fragment>'};stone.material.onBeforeCompile(shader,{});assert.ok(shader.fragmentShader.includes('discard'));
f.update(1);assert.equal(lava.material.uniforms.time.value,1);
console.log('Summit lava/paving: full bowl and courtyard coverage, exposed lava joints, animation, cleared rocks and open interior passed',{freeCourtyardSamples:free});

let maxStep=0;
for(let angle=0;angle<Math.PI;angle+=Math.PI/12){let last=null;for(let radius=116;radius>=68;radius-=.5){const x=-315+radius*Math.cos(angle),z=-385+radius*Math.sin(angle),y=Math.max(v.floorAt(x,z)??0,f.floorAt(x,z)??0);if(last!==null)maxStep=Math.max(maxStep,Math.abs(y-last));last=y;}}
console.log({maxStep});assert.ok(maxStep<3,'The rim must meet the walkable paving without a blocking height step');console.log('Approach maximum half-unit height step',maxStep);
