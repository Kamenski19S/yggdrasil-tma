import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {createJotunheimTerrain,JOTUNHEIM_SPAWN,JOTUNHEIM_NORTH,JOTUNHEIM_SOUTH}=await server.ssrLoadModule('/src/jotunheimTerrain.ts');
 const input=fs.readFileSync('public/img/models/Jotunheim_Mountain_Range.glb'),length=input.readUInt32LE(12),json=JSON.parse(input.subarray(20,20+length));
 assert(input.length<1_000_000);assert.equal(json.asset.extras.author,'solararchitect (https://sketchfab.com/solararchitect)');
 // Decode geometry with the production loader, excluding browser-only image decoding.
 delete json.images;delete json.textures;delete json.materials;for(const mesh of json.meshes)for(const p of mesh.primitives)delete p.material;
 let text=Buffer.from(JSON.stringify(json));text=Buffer.concat([text,Buffer.alloc((4-text.length%4)%4,32)]);const bin=input.subarray(20+length),header=Buffer.alloc(20);header.writeUInt32LE(0x46546c67);header.writeUInt32LE(2,4);header.writeUInt32LE(20+text.length+bin.length,8);header.writeUInt32LE(text.length,12);header.writeUInt32LE(0x4e4f534a,16);const glb=Buffer.concat([header,text,bin]);
 const asset=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(glb.buffer.slice(glb.byteOffset,glb.byteOffset+glb.length),'');const terrain=createJotunheimTerrain(asset.scene);
 assert(Math.abs(terrain.bounds.min.y)<1e-6);assert(Math.abs(terrain.bounds.max.x-terrain.bounds.min.x-1200)<1e-6);
 assert(Math.abs(terrain.bounds.max.z-terrain.bounds.min.z-1440)<1e-4,'Length must increase by 20%, width and height unchanged');
 assert(Math.abs(terrain.bounds.min.z-JOTUNHEIM_NORTH)<1e-4);assert(Math.abs(terrain.bounds.max.z-JOTUNHEIM_SOUTH)<1e-4,'Keep the entrance boundary fixed');
 assert(Number.isFinite(terrain.height(JOTUNHEIM_SPAWN.x,JOTUNHEIM_SPAWN.z)));assert.equal(terrain.height(1000,0),null);
 const ray=new THREE.Raycaster(),direction=new THREE.Vector3(0,-1,0);let checked=0;
 for(let x=-550;x<=550;x+=55)for(let z=JOTUNHEIM_NORTH+50;z<=550;z+=55){ray.set(new THREE.Vector3(x,1000,z),direction);const expected=ray.intersectObject(terrain.root,true)[0]?.point.y??null,actual=terrain.height(x,z);assert.equal(actual===null,expected===null);if(expected!==null){assert(Math.abs(actual-expected)<1e-4,`${x},${z}: ${actual} != ${expected}`);checked++;}}
 // Starting view must permit a continuous walk away from the map edge.
 let previous=terrain.height(0,480);for(let z=479;z>=380;z--){const y=terrain.height(0,z);assert(y!==null);assert(Math.abs(y-previous)<2.7);previous=y;}
 console.log(`PASS: ${checked} terrain heights match GLB raycasts, spawn and entry walk are valid, borders reject missing ground, credits retained, model below 1 MB.`);
}finally{await server.close();}
