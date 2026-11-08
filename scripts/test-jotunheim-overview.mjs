import assert from 'node:assert/strict';import * as THREE from 'three';import {createServer} from 'vite';import {readGlbGeometry} from './lib/read-glb-geometry.mjs';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {createJotunheimTerrain}=await server.ssrLoadModule('/src/jotunheimTerrain.ts'),{installJotunheimWaterfalls,WATERFALL_SITES,WATERFALL_CLIFF_ASSET}=await server.ssrLoadModule('/src/jotunheimWaterfalls.ts'),{fitJotunheimOverview}=await server.ssrLoadModule('/src/jotunheimOverview.ts');
 const terrain=createJotunheimTerrain(await readGlbGeometry('public/img/models/Jotunheim_Mountain_Range.glb')),models=[];for(const s of WATERFALL_SITES)models.push(await readGlbGeometry('public/img/models/'+s.asset));
 const falls=installJotunheimWaterfalls(models,await readGlbGeometry('public/img/models/'+WATERFALL_CLIFF_ASSET),terrain),bounds=new THREE.Box3().setFromObject(terrain.root).union(new THREE.Box3().setFromObject(falls.root));
 let views=0;
 for(const [width,height] of [[390,700],[945,1450],[1280,720],[700,390]]){
  const camera=new THREE.OrthographicCamera();fitJotunheimOverview(camera,bounds,width/height,height);
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
   const p=new THREE.Vector3(x,y,z).project(camera);assert(Math.abs(p.x)<.93&&Math.abs(p.y)<.95,'The full world must fit inside the map');assert(p.z> -1&&p.z<1,'No far-plane clipping');assert((1-p.y)*height/2>Math.min(160,height*.40),'Map must stay below the top controls');
  }views++;
 }
 const mesh=falls.foundations;assert(mesh.userData.seams>20,'Open scan cuts must have stone support');assert(mesh.children.length<250,'Foundation instance budget');let contacts=0;
 const sourceGeometries=new Set();falls.root.children[1].traverse(o=>{if(o instanceof THREE.Mesh)sourceGeometries.add(o.geometry);});mesh.traverse(o=>{if(o instanceof THREE.Mesh)assert(sourceGeometries.has(o.geometry),'Foundations must reuse the existing cliff GLB geometry');});
 for(const c of mesh.userData.contacts){assert(c.bottom<=c.floor-11.9,'Every rock foundation must extend below its terrain footprint');contacts++;}
 assert(contacts>20,'The exposed cuts need overlapping rock support');
 console.log(`PASS: complete world visible in ${views} portrait/landscape map views; ${mesh.userData.seams} sealed scan edges, ${contacts} buried rock foundations.`);
}finally{await server.close();}
