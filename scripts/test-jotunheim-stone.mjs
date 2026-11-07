import assert from 'node:assert/strict';import fs from 'node:fs';import * as THREE from 'three';
import {createServer} from 'vite';import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
const server=await createServer({server:{middlewareMode:true}});
async function geometry(path){
 const b=fs.readFileSync(path),n=b.readUInt32LE(12),j=JSON.parse(b.subarray(20,20+n));delete j.images;delete j.textures;delete j.materials;for(const m of j.meshes)for(const p of m.primitives)delete p.material;
 let t=Buffer.from(JSON.stringify(j));t=Buffer.concat([t,Buffer.alloc((4-t.length%4)%4,32)]);const h=Buffer.alloc(20);h.writeUInt32LE(0x46546c67);h.writeUInt32LE(2,4);h.writeUInt32LE(20+t.length+b.length-20-n,8);h.writeUInt32LE(t.length,12);h.writeUInt32LE(0x4e4f534a,16);const a=Buffer.concat([h,t,b.subarray(20+n)]);
 return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(a.buffer.slice(a.byteOffset,a.byteOffset+a.length),'')).scene;
}
try{
 const {JOTUNHEIM_STONE_ASSET,STONE_WALL_HEIGHT,STONE_WALL_EDGE,STONE_WALL_CREDIT,STONE_WALL_RUNS,jotunheimStoneBlocks:blocks,installJotunheimStoneBoundary}=await server.ssrLoadModule('/src/jotunheimStoneBoundary.ts');
 const {createJotunheimTerrain,JOTUNHEIM_SPAWN}=await server.ssrLoadModule('/src/jotunheimTerrain.ts');
 const {installJotunheimGateway,GATEWAY_SITE}=await server.ssrLoadModule('/src/jotunheimGateway.ts');
 const path='public/img/models/'+JOTUNHEIM_STONE_ASSET,bytes=fs.statSync(path).size;assert(bytes<3_500_000);
 const raw=fs.readFileSync(path),json=JSON.parse(raw.subarray(20,20+raw.readUInt32LE(12)));
 assert(json.asset.extras.author.includes(STONE_WALL_CREDIT.author));assert(json.asset.extras.license.includes('4.0'));assert.equal(json.asset.extras.source,STONE_WALL_CREDIT.sourceUrl);assert(json.asset.extras.modifications);
 const terrain=createJotunheimTerrain(await geometry('public/img/models/Jotunheim_Mountain_Range.glb'));
 const gate=installJotunheimGateway(await geometry('public/img/models/Jotunheim_Giant_Gateway.glb'),terrain);
 const model=await geometry(path),native=new THREE.Box3().setFromObject(model);console.log('Source dimensions',native.getSize(new THREE.Vector3()).toArray());
 const wall=installJotunheimStoneBoundary(model,terrain);let meshes=0,triangles=0,samples=0;
 wall.root.traverse(o=>{if(!o.isMesh)return;meshes++;const g=o.geometry,p=g.attributes.position;assert(p.array instanceof Float32Array);triangles+=(g.index?.count??p.count)/3;
  let maximumAbove=-Infinity;
  for(let i=0;i<p.count;i++)for(const a of ['position','normal','tangent']){const attr=g.getAttribute(a);if(attr)for(let c=0;c<attr.itemSize;c++)assert(Number.isFinite(attr.getComponent(i,c)),`Non-finite ${a}`);}
  for(let i=0;i<p.count;i+=41){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),floor=terrain.height(x,z);assert(Math.abs(x)<610&&Math.abs(z)<610);if(floor!=null){const above=y-floor;assert(above>=-8&&above<=STONE_WALL_HEIGHT+4,`Wall does not follow terrain: ${above}`);maximumAbove=Math.max(maximumAbove,above);samples++;}}
  assert(maximumAbove>STONE_WALL_HEIGHT*.65,'Each section must rise above the visible ground');
  const b=new THREE.Box3().setFromBufferAttribute(p);
  assert(!(b.min.z<580&&b.max.z>GATEWAY_SITE.z+69&&b.min.x< -110&&b.max.x> -170),'Wall intersects the entrance approach');
 });
 assert(meshes<=12);assert(triangles<200_000,`Triangle budget: ${triangles}`);assert(!blocks(JOTUNHEIM_SPAWN.x,JOTUNHEIM_SPAWN.z));
 for(let z=JOTUNHEIM_SPAWN.z;z>=GATEWAY_SITE.z-35;z-=.5)for(const dx of [-15,0,15]){assert(!blocks(GATEWAY_SITE.x+dx,z));assert(Number.isFinite(gate.height(GATEWAY_SITE.x+dx,z)));}
 for(let t=-580;t<=580;t++){
  assert(blocks(-581,t)&&blocks(581,t)&&blocks(t,-581)&&blocks(t,581));
  assert(blocks(-549,t)&&blocks(549,t)&&blocks(t,-549));
  if(t< -195||t> -85)assert(blocks(t,549));
 }
 for(const run of STONE_WALL_RUNS){
  const sections=wall.segments.filter(s=>s.side===run.side&&s.start>=run.start-.001&&s.end<=run.end+.001);assert(sections.length);
  assert.equal(sections[0].start,run.start);assert(Math.abs(sections.at(-1).end-run.end)<.0001);
  for(let i=1;i<sections.length;i++)assert(Math.abs(sections[i].start-sections[i-1].end)<.0001,'Uncovered fence join');
 }
 assert(wall.cameraHeight(0,-STONE_WALL_EDGE,12)>=12+STONE_WALL_HEIGHT);
 assert.equal(wall.cameraHeight(JOTUNHEIM_SPAWN.x,STONE_WALL_EDGE,12),12,'Camera must see the open entry');
 console.log(`PASS: ${(bytes/1e6).toFixed(2)} MB attributed GLB, ${meshes} wall sections, ${triangles} triangles, ${samples} terrain samples, closed perimeter and open spawn corridor.`);
}finally{await server.close();}
