import * as THREE from 'three';import assert from 'node:assert/strict';import fs from 'node:fs';import {createServer} from 'vite';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
const server=await createServer({server:{middlewareMode:true}});
async function geometry(path){const b=fs.readFileSync(path),n=b.readUInt32LE(12),j=JSON.parse(b.subarray(20,20+n));delete j.images;delete j.textures;delete j.materials;for(const m of j.meshes)for(const p of m.primitives)delete p.material;let t=Buffer.from(JSON.stringify(j));t=Buffer.concat([t,Buffer.alloc((4-t.length%4)%4,32)]);const h=Buffer.alloc(20);h.writeUInt32LE(0x46546c67);h.writeUInt32LE(2,4);h.writeUInt32LE(20+t.length+b.length-20-n,8);h.writeUInt32LE(t.length,12);h.writeUInt32LE(0x4e4f534a,16);const a=Buffer.concat([h,t,b.subarray(20+n)]);return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(a.buffer.slice(a.byteOffset,a.byteOffset+a.length),'')).scene;}
try{
 const {createJotunheimTerrain}=await server.ssrLoadModule('/src/jotunheimTerrain.ts'),{installJotunheimGateway,GATEWAY_SITE,GATEWAY_VIEW,GATEWAY_SCALE}=await server.ssrLoadModule('/src/jotunheimGateway.ts');
 const terrain=createJotunheimTerrain(await geometry('public/img/models/Jotunheim_Mountain_Range.glb'));const original=terrain.height(400,400),gate=installJotunheimGateway(await geometry('public/img/models/Jotunheim_Giant_Gateway.glb'),terrain);assert.equal(terrain.height(400,400),original);
 let last=gate.height(GATEWAY_VIEW.x,GATEWAY_VIEW.z),count=0;for(let z=GATEWAY_VIEW.z;z>=GATEWAY_SITE.z-35;z-=.5){const y=gate.height(GATEWAY_SITE.x,z);assert(Number.isFinite(y));assert(!gate.blocks(GATEWAY_SITE.x,z));assert(Math.abs(y-last)<=3.5,`Unwalkable step at z=${z}: ${y-last}`);assert(y>=terrain.height(GATEWAY_SITE.x,z)-.1,`Buried stairs at z=${z}`);last=y;count++;}
 assert(gate.blocks(GATEWAY_SITE.x+20,GATEWAY_SITE.z));assert(!gate.blocks(GATEWAY_SITE.x,GATEWAY_SITE.z));assert(gate.onStairs(GATEWAY_SITE.x,GATEWAY_SITE.z+40));

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
 // A real level terrace, wide enough to turn and walk beyond the doorway.
 for(const dx of [-8,0,8])for(let dz=-10;dz>=-65;dz-=1){
  const y=terrain.height(GATEWAY_SITE.x+dx,GATEWAY_SITE.z+dz);
  assert(Math.abs(y-(gate.baseY+32.6*GATEWAY_SCALE.y))<.05,`Uneven rear terrace at ${dx},${dz}: ${y}`);
 }
 const bounds=new THREE.Box3().setFromObject(gate.root);assert(bounds.max.y-bounds.min.y>75&&bounds.max.y-bounds.min.y<90);assert(5.4*GATEWAY_SCALE.z>=4,'Treads must retain foot room');
 assert(580-bounds.max.z<50,'Stair foot must be close to the playable edge');assert(GATEWAY_VIEW.z>bounds.max.z+15&&GATEWAY_VIEW.z<=580,'Spawn must be at the boundary in front of the stairs');
 // Both the lintel and the foot of the stairs fit a portrait camera from the entry shortcut.
 const {terrainSafeCameraPosition}=await server.ssrLoadModule('/src/muspelheimCamera.ts');
 for(const aspect of [600/920,945/1450,390/700])for(const z of [GATEWAY_VIEW.z,GATEWAY_SITE.z+45,GATEWAY_SITE.z+10]){
 const x=GATEWAY_SITE.x,y=gate.height(x,z),weight=gate.cameraWeight(x,z),distance=38+90*weight*Math.max(1,.65/aspect),camera=new THREE.PerspectiveCamera(48+7*weight,aspect,.5,3500);
 const cp=terrainSafeCameraPosition({x,y:y+10,z},{x,y:y+25+10*weight,z:z+distance},gate.height,5);
 camera.position.set(cp.x,cp.y,cp.z);camera.lookAt(x,y+8+gate.cameraLift(x,z),z-24);camera.updateMatrixWorld();
 for(const px of [bounds.min.x,bounds.max.x])for(const py of [gate.baseY+32.6*GATEWAY_SCALE.y,bounds.max.y]){
  const p=new THREE.Vector3(px,py,GATEWAY_SITE.z).project(camera);
  assert(Math.abs(p.x)<.96&&Math.abs(p.y)<.82,`Arch clipped at z=${z}, aspect=${aspect}: ${p.x},${p.y}`);
 }
 }
 // Both sides use the same carved material, with no second staircase.
 const rear=[];gate.root.traverse(o=>{if(o.name==='Jotunheim_Rear_Carved_Facade')rear.push(o);});assert(rear.length>0);
 for(const m of rear){const b=new THREE.Box3().setFromObject(m);assert(b.max.z<GATEWAY_SITE.z-6);assert(b.min.y>=gate.baseY+32.6*GATEWAY_SCALE.y-.001);}
 const upward=new THREE.Raycaster(),up=new THREE.Vector3(0,1,0);let ceilingSamples=0;
 for(const dx of [-2,0,2])for(let dz=-16;dz<=10;dz+=2){
  const floor=gate.height(GATEWAY_SITE.x+dx,GATEWAY_SITE.z+dz);
  upward.set(new THREE.Vector3(GATEWAY_SITE.x+dx,floor+1,GATEWAY_SITE.z+dz),up);
  const ceiling=upward.intersectObject(gate.root,true)[0]?.point.y;
  if(ceiling!=null){ceilingSamples++;assert(ceiling-floor>=19.25+5,`Insufficient headroom at ${dx},${dz}: ${ceiling-floor}`);}
 }
 assert(ceilingSamples>=10,`Only ${ceilingSamples} ceiling samples hit real geometry`);
 console.log(`PASS: ${count} consecutive entrance path samples, step heights, clear doorway, pillar collision and unchanged distant terrain.`);
}finally{await server.close();}
