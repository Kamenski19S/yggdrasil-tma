import assert from 'node:assert/strict';import fs from 'node:fs';import * as THREE from 'three';import {createServer} from 'vite';import {readGlbGeometry} from './lib/read-glb-geometry.mjs';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {createJotunheimTerrain,JOTUNHEIM_SPAWN}=await server.ssrLoadModule('/src/jotunheimTerrain.ts');
 const {installJotunheimWaterfalls,WATERFALL_SITES,WATERFALL_CLIFF_ASSET}=await server.ssrLoadModule('/src/jotunheimWaterfalls.ts');
 const terrain=createJotunheimTerrain(await readGlbGeometry('public/img/models/Jotunheim_Mountain_Range.glb'));
 const before=terrain.height(JOTUNHEIM_SPAWN.x,JOTUNHEIM_SPAWN.z),models=[];let bytes=0;
 for(const s of WATERFALL_SITES){
  const file='public/img/models/'+s.asset,b=fs.readFileSync(file),j=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));bytes+=b.length;
  assert(j.asset.extras.author.includes(s.author));assert(j.asset.extras.license.includes('4.0'));assert.equal(j.asset.extras.source,s.sourceUrl);assert(!j.animations?.length);models.push(await readGlbGeometry(file));
 }
 assert(bytes<4_000_000);
 const cliff=await readGlbGeometry('public/img/models/'+WATERFALL_CLIFF_ASSET),result=installJotunheimWaterfalls(models,cliff,terrain);
 assert.equal(terrain.height(JOTUNHEIM_SPAWN.x,JOTUNHEIM_SPAWN.z),before,'Entrance terrain must remain unchanged');
 const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);let samples=0;
 for(let i=0;i<result.sites.length;i++){
  const s=result.sites[i],p=result.viewpoints[i];assert(Number.isFinite(terrain.height(p.x,p.z)));assert((p.z-s.z)*s.front>s.depth*.5);assert(p.z<548&&Math.abs(p.x)<548);
  const group=result.root.children[i*4],bounds=new THREE.Box3().setFromObject(group);assert(Math.abs(bounds.max.y-bounds.min.y-s.height)<.01);assert(bounds.max.y>terrain.height(s.x,s.z)+50,'Waterfall must remain above the terrain');
  for(let x=s.x-s.width*.7;x<=s.x+s.width*.7;x+=s.width/8)for(let z=s.z-s.depth*.6;z<=s.z+s.depth*.8;z+=s.depth/8){
   ray.set(new THREE.Vector3(x,1500,z),down);const expected=ray.intersectObject(result.root,true)[0]?.point.y??null,actual=result.height(x,z,null);assert.equal(actual===null,expected===null);
   if(expected!=null){assert(Math.abs(actual-expected)<.001,`${x},${z}: ${actual} != ${expected}`);samples++;}
  }
 }
 result.root.traverse(o=>{if(o instanceof THREE.Mesh){const p=o.geometry.attributes.position;for(let i=0;i<p.count;i+=23)for(let c=0;c<3;c++)assert(Number.isFinite(p.getComponent(i,c)));}});
 console.log(`PASS: three static attributed scans, ${(bytes/1e6).toFixed(2)} MB, ${samples} camera/walking heights match visible rock triangles, entry unchanged, all viewpoints on terrain.`);
}finally{await server.close();}
