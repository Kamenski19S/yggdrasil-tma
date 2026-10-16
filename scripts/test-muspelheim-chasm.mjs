import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSync} from 'esbuild';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
const code=buildSync({entryPoints:['src/muspelheimChasm.ts'],bundle:true,write:false,format:'esm',platform:'node',external:['three']}).outputFiles[0].text.replaceAll('from "three"',`from ${JSON.stringify(import.meta.resolve('three'))}`);
const {createEntranceBridge,carveEntranceChasm,chasmDepth,chasmBlocks,BRIDGE_SPAWN,BRIDGE_ASSET,createChasmLava}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const loader=new GLTFLoader();loader.register(()=>({name:'texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const b=readFileSync('public/img/models/'+BRIDGE_ASSET),g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
const texture=new THREE.Texture();const bridge=createEntranceBridge(g.scene,texture),box=new THREE.Box3().setFromObject(bridge.group);
console.log('Bridge bounds',box.min.toArray(),box.max.toArray(),'deck range',Math.min(...bridge.profile),Math.max(...bridge.profile),'nonzero',bridge.profile.filter(x=>x!==0).length);
assert.ok(bridge.floorAt(BRIDGE_SPAWN.x,BRIDGE_SPAWN.z)>-1);
const ray=new THREE.Raycaster();for(const x of [-5.5,0,5.5])for(let z=162;z<=230;z+=1){ray.set(new THREE.Vector3(x,20,z),new THREE.Vector3(0,-1,0));assert.ok(ray.intersectObject(bridge.group,true).length,`No visible deck at ${x},${z}`);}
let old=bridge.floorAt(0,158);for(let z=158.25;z<=234;z+=.25){const y=bridge.floorAt(0,z);assert.ok(Number.isFinite(y));assert.ok(Math.abs(y-old)<1.5,`Deck jump at ${z}: ${old} -> ${y}`);old=y;}
assert.equal(chasmDepth(0,190),-48);assert.ok(chasmDepth(0,150)===0);assert.ok(chasmDepth(240,190)===0);
assert.equal(chasmBlocks(8,190),true);assert.equal(chasmBlocks(0,190),false);assert.equal(bridge.floorAt(8,190),null);
const terrain=new THREE.Mesh(new THREE.PlaneGeometry(300,300,150,150).rotateX(-Math.PI/2));terrain.scale.set(1.75,1,1.75);carveEntranceChasm(terrain);assert.equal(terrain.geometry.boundingBox.min.y,-48);
const lava=createChasmLava();assert.equal(lava.mesh.position.y,-45.5);lava.update(1);assert.equal(lava.mesh.material.uniforms.time.value,1);
assert.ok(b.length<1000000);assert.equal(g.asset.extras.author.includes('adventurer'),true);
bridge.group.traverse(o=>{if(o instanceof THREE.Mesh){for(const m of Array.isArray(o.material)?o.material:[o.material]){assert.equal(m.map,texture);assert.equal(m.normalMap,null);assert.equal(m.roughnessMap,null);const shader={vertexShader:THREE.ShaderLib.standard.vertexShader,fragmentShader:THREE.ShaderLib.standard.fragmentShader};m.onBeforeCompile(shader);assert.match(shader.fragmentShader,/bridgePosition.xz\/16/);assert.match(shader.vertexShader,/bridgeNormal=normal/);}}});
console.log('Chasm depth, bridge deck continuity, spawn, edge protection, flowing lava and model credit passed');
