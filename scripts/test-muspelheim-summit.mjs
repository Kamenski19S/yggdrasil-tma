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
for(let i=0;i<128;i++){const a=i/128*Math.PI*2;assert.equal(f.floorAt(-315+90*Math.cos(a),-385+90*Math.sin(a)),null,'No paving or floor override on outer mountains');assert.ok(f.shore.radii[i]===82,'Paving and lava joints are confined to the cut summit terrace');}
let meshIndex=0;v.root.traverse(o=>{if(o instanceof THREE.Mesh)assert.deepEqual(Array.from(o.geometry.attributes.position.array),before[meshIndex++],'Original volcano vertices must remain unchanged');});
const stone=f.root.children[0],lava=f.root.children[2];assert.equal(lava.position.y,-.22);assert.ok(lava.material.fragmentShader.includes('bubble'));
const shader={uniforms:{},fragmentShader:'#include <map_fragment>'};stone.material.onBeforeCompile(shader,{});assert.ok(shader.fragmentShader.includes('discard'));
f.update(1);assert.equal(lava.material.uniforms.time.value,1);
console.log('Cut summit: terrace geometry stable, paving confined, courtyard covered, lava joints and animation passed',{freeCourtyardSamples:free,shoreRange:[Math.min(...f.shore.radii),Math.max(...f.shore.radii)]});

const yard=f.root.children[1],yardBounds=new THREE.Box3().setFromObject(yard);
for(const axis of ['x','z']){assert.ok(Math.abs(yardBounds.min[axis]-t.buildingBounds.min[axis])<1e-4);assert.ok(Math.abs(yardBounds.max[axis]-t.buildingBounds.max[axis])<1e-4);}
for(let x=t.buildingBounds.min.x;x<t.buildingBounds.max.x;x+=2)for(let z=t.buildingBounds.min.z;z<t.buildingBounds.max.z;z+=2)assert.equal(f.floorAt(x,z),SUMMIT_FLOOR_Y,'Every part of the castle uses the same paved floor');
v.root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;for(const material of Array.isArray(o.material)?o.material:[o.material]){const shader={uniforms:{},vertexShader:THREE.ShaderLib.standard.vertexShader,fragmentShader:THREE.ShaderLib.standard.fragmentShader};material.onBeforeCompile(shader,{});assert.equal(shader.vertexShader.split('varying vec3 castleRockPosition;').length-1,1,'Rock clipping must be injected once per material');assert.ok(shader.fragmentShader.includes('castleRockPosition.y>39.750000'));
assert.ok(shader.fragmentShader.includes(`castleRockPosition.x>=${t.buildingBounds.min.x.toFixed(6)}`));}}
);
console.log('Courtyard: full wall-to-wall paving, flat walk height, lava underlay and rock clipping restricted to castle bounds passed');

let perimeterChecks=0;
for(let i=0;i<360;i++){const a=i/360*Math.PI*2;
 const at=r=>({x:-315+r*Math.cos(a),z:-385+r*Math.sin(a)});
 for(let r=70;r<90;r+=.2){const p=at(r);if(r<=79)assert(!f.blocks(p.x,p.z,SUMMIT_FLOOR_Y),'Observation area stays open');if(r>=79.4)assert(f.blocks(p.x,p.z,SUMMIT_FLOOR_Y),'Walking cannot cross parapet onto volcanic slopes');perimeterChecks++;}
 const p=at(83);assert(!f.blocks(p.x,p.z,-60),'Summit edge cannot block the buried tunnel');
}
const keeper={x:-301,z:-366};assert.equal(f.floorAt(keeper.x,keeper.z),SUMMIT_FLOOR_Y);assert(!f.blocks(keeper.x,keeper.z,SUMMIT_FLOOR_Y));
assert.equal(f.floorAt(-265,-355),SUMMIT_FLOOR_Y,'Stair exit joins the observation terrace');assert(!f.blocks(-265,-355,SUMMIT_FLOOR_Y));
assert(f.root.children.some(o=>o.name==='Stone parapet around Surt observation terrace'));
console.log('Observation terrace perimeter, keeper and stair exit passed',perimeterChecks);
