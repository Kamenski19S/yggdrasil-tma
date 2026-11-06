import assert from 'node:assert/strict';import fs from 'node:fs';import * as THREE from 'three';
import {createServer} from 'vite';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
const server=await createServer({server:{middlewareMode:true}});
async function geometry(path){
 const b=fs.readFileSync(path),n=b.readUInt32LE(12),j=JSON.parse(b.subarray(20,20+n));delete j.images;delete j.textures;delete j.materials;for(const m of j.meshes)for(const p of m.primitives)delete p.material;
 let t=Buffer.from(JSON.stringify(j));t=Buffer.concat([t,Buffer.alloc((4-t.length%4)%4,32)]);const h=Buffer.alloc(20);h.writeUInt32LE(0x46546c67);h.writeUInt32LE(2,4);h.writeUInt32LE(20+t.length+b.length-20-n,8);h.writeUInt32LE(t.length,12);h.writeUInt32LE(0x4e4f534a,16);const a=Buffer.concat([h,t,b.subarray(20+n)]);
 return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(a.buffer.slice(a.byteOffset,a.byteOffset+a.length),'')).scene;
}
try{
 const {JOTUNHEIM_BONE_ASSETS,installJotunheimBoundary,jotunheimBoundaryBlocks:blocks}=await server.ssrLoadModule('/src/jotunheimBoundary.ts');
 const {createJotunheimTerrain,JOTUNHEIM_SPAWN}=await server.ssrLoadModule('/src/jotunheimTerrain.ts');
 const {installJotunheimGateway,GATEWAY_SITE,GATEWAY_SCALE}=await server.ssrLoadModule('/src/jotunheimGateway.ts');
 let bytes=0;const models={};
 for(const [kind,file] of Object.entries(JOTUNHEIM_BONE_ASSETS)){
  const path='public/img/models/'+file;bytes+=fs.statSync(path).size;models[kind]=await geometry(path);
  const box=new THREE.Box3().setFromObject(models[kind]);assert(box.max.z-box.min.z>.025,'GLBs must have solid depth');
  models[kind].traverse(o=>{if(!o.isMesh)return;const g=o.geometry,p=g.attributes.position,edges=new Map(),keys=Array.from({length:p.count},(_,i)=>[p.getX(i),p.getY(i),p.getZ(i)].map(n=>Math.round(n*1e7)).join(','));
   for(let i=0;i<p.count;i++)for(const n of [p.getX(i),p.getY(i),p.getZ(i)])assert(Number.isFinite(n));
   for(let i=0;i<g.index.count;i+=3){const ids=[0,1,2].map(k=>g.index.getX(i+k));for(let k=0;k<3;k++){const a=ids[k],b=ids[(k+1)%3],key=[keys[a],keys[b]].sort().join(';');edges.set(key,(edges.get(key)??0)+1);}}
   for(const [e,n] of edges)assert(n>=2&&n%2===0,`Every exported edge must be sealed: ${kind} ${e}: ${n}`);
  });
 }
 assert(bytes<2_500_000,'Boundary assets must stay below 2.5 MB');
 const terrain=createJotunheimTerrain(await geometry('public/img/models/Jotunheim_Mountain_Range.glb'));
 installJotunheimGateway(await geometry('public/img/models/Jotunheim_Giant_Gateway.glb'),terrain);
 const boundary=installJotunheimBoundary(models,terrain);let calls=0,triangles=0;
 boundary.root.traverse(o=>{if(o.isInstancedMesh){calls++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3*o.count;for(const v of o.instanceMatrix.array)assert(Number.isFinite(v));}});
 assert(calls<=24);assert(triangles<250_000,`Too much boundary geometry: ${triangles}`);
 assert(!blocks(JOTUNHEIM_SPAWN.x,JOTUNHEIM_SPAWN.z));
 for(let z=JOTUNHEIM_SPAWN.z;z>=GATEWAY_SITE.z-100;z--)for(const dx of [-15,0,15])assert(!blocks(GATEWAY_SITE.x+dx,z),'Entrance must remain open');
 for(let t=-580;t<=580;t++){
  assert(blocks(-581,t)&&blocks(581,t)&&blocks(t,-581)&&blocks(t,581),'No escape beyond the original map');
  assert(blocks(-553,t)&&blocks(553,t)&&blocks(t,-553),'No escape through gaps in the north/east/west fence');
  if(t< -200||t> -80)assert(blocks(t,553),'South fence must remain closed outside the entrance');
 }
 // The scaled doorway, stair rails and the entire spawn corridor have no fence in front of them.
 boundary.root.updateMatrixWorld(true);
 boundary.root.traverse(o=>{if(!o.isInstancedMesh||o.name.startsWith('Distant'))return;const m=new THREE.Matrix4();
  for(let i=0;i<o.count;i++){o.getMatrixAt(i,m);const b=new THREE.Box3().setFromBufferAttribute(o.geometry.attributes.position).applyMatrix4(m);
   assert(!(b.min.z<580&&b.max.z>GATEWAY_SITE.z+68&&b.min.x< -110&&b.max.x> -170),`${o.name} obstructs the starting corridor`);
  }
 });
 console.log(`PASS: 5 sealed GLBs, ${(bytes/1e6).toFixed(2)} MB, ${boundary.placements.length} bone sections, ${calls} instanced batches, ${Math.round(triangles)} triangles, continuous border and clear entry.`);
}finally{await server.close();}
