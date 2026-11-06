import * as THREE from 'three';import assert from 'node:assert/strict';import fs from 'node:fs';import {createServer} from 'vite';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
const server=await createServer({server:{middlewareMode:true}});
async function geometry(path){const b=fs.readFileSync(path),n=b.readUInt32LE(12),j=JSON.parse(b.subarray(20,20+n));delete j.images;delete j.textures;delete j.materials;for(const m of j.meshes)for(const p of m.primitives)delete p.material;let t=Buffer.from(JSON.stringify(j));t=Buffer.concat([t,Buffer.alloc((4-t.length%4)%4,32)]);const h=Buffer.alloc(20);h.writeUInt32LE(0x46546c67);h.writeUInt32LE(2,4);h.writeUInt32LE(20+t.length+b.length-20-n,8);h.writeUInt32LE(t.length,12);h.writeUInt32LE(0x4e4f534a,16);const a=Buffer.concat([h,t,b.subarray(20+n)]);return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(a.buffer.slice(a.byteOffset,a.byteOffset+a.length),'')).scene;}
try{
 const {createJotunheimTerrain}=await server.ssrLoadModule('/src/jotunheimTerrain.ts'),{installJotunheimGateway,GATEWAY_SITE,GATEWAY_VIEW,GATEWAY_SCALE}=await server.ssrLoadModule('/src/jotunheimGateway.ts');
 const terrain=createJotunheimTerrain(await geometry('public/img/models/Jotunheim_Mountain_Range.glb'));const original=terrain.height(400,400),gate=installJotunheimGateway(await geometry('public/img/models/Jotunheim_Giant_Gateway.glb'),terrain);assert.equal(terrain.height(400,400),original);
 let last=gate.height(GATEWAY_VIEW.x,GATEWAY_VIEW.z),count=0;for(let z=GATEWAY_VIEW.z;z>=GATEWAY_SITE.z-35;z-=.5){const y=gate.height(GATEWAY_SITE.x,z);assert(Number.isFinite(y));assert(!gate.blocks(GATEWAY_SITE.x,z));assert(Math.abs(y-last)<=3.5,`Unwalkable step at z=${z}: ${y-last}`);assert(y>=terrain.height(GATEWAY_SITE.x,z)-.1,`Buried stairs at z=${z}`);last=y;count++;}
 assert(gate.blocks(GATEWAY_SITE.x+30,GATEWAY_SITE.z));assert(!gate.blocks(GATEWAY_SITE.x,GATEWAY_SITE.z));assert(gate.onStairs(GATEWAY_SITE.x,GATEWAY_SITE.z+40));

 // The complete rear exit must follow the visible deformed landscape, without an invisible bridge or a cliff.
 const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
 for(const offset of [-3.5,0,3.5]){
  let previous=gate.height(GATEWAY_SITE.x+offset,GATEWAY_SITE.z-8*GATEWAY_SCALE.z);
  for(let z=GATEWAY_SITE.z-8*GATEWAY_SCALE.z-.25;z>=GATEWAY_SITE.z-170;z-=.25){
   const x=GATEWAY_SITE.x+offset,y=gate.height(x,z);assert(Number.isFinite(y));assert(!gate.blocks(x,z));
   assert(Math.abs(y-previous-.08)<=.25*2.5+.2,`Blocked rear exit at ${x},${z}: ${y-previous}`);
   assert.equal(y,terrain.height(x,z),'Rear exit must use the physical GLB');
   ray.set(new THREE.Vector3(x,1000,z),down);const visible=ray.intersectObject(terrain.root,true)[0]?.point.y;
   assert(Math.abs(y-visible)<.0001,'Rear exit collision diverges from rendered hill');previous=y;
  }
 }
 const bounds=new THREE.Box3().setFromObject(gate.root);assert(bounds.max.y-bounds.min.y<70);assert(5.4*GATEWAY_SCALE.z>=4,'Treads must retain foot room');
 assert(580-bounds.max.z<50,'Stair foot must be close to the playable edge');assert(GATEWAY_VIEW.z+38<=600,'Entry camera must stay on the landscape');
 // Both the lintel and the foot of the stairs fit a portrait camera from the entry shortcut.
 const {terrainSafeCameraPosition}=await server.ssrLoadModule('/src/muspelheimCamera.ts');
 const y=gate.height(GATEWAY_VIEW.x,GATEWAY_VIEW.z),camera=new THREE.PerspectiveCamera(48,600/920,.5,3500);
 const cp=terrainSafeCameraPosition({x:GATEWAY_VIEW.x,y:y+10,z:GATEWAY_VIEW.z},{x:GATEWAY_VIEW.x,y:y+25,z:GATEWAY_VIEW.z+38},gate.height,5);
 camera.position.set(cp.x,cp.y,cp.z);camera.lookAt(GATEWAY_VIEW.x,y+8+gate.cameraLift(GATEWAY_VIEW.x,GATEWAY_VIEW.z),GATEWAY_VIEW.z-24);camera.updateMatrixWorld();
 for(const p of [new THREE.Vector3(GATEWAY_SITE.x,bounds.max.y,GATEWAY_SITE.z),new THREE.Vector3(GATEWAY_SITE.x,gate.baseY,bounds.max.z)]){p.project(camera);assert(Math.abs(p.y)<.95,`Entrance clipped vertically: ${p.y}`);}
 console.log(`PASS: ${count} consecutive entrance path samples, step heights, clear doorway, pillar collision and unchanged distant terrain.`);
}finally{await server.close();}
