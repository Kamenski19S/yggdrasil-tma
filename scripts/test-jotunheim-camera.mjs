import assert from 'node:assert/strict';import * as THREE from 'three';import {createServer} from 'vite';import {readGlbGeometry} from './lib/read-glb-geometry.mjs';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {jotunheimCameraPose}=await server.ssrLoadModule('/src/jotunheimCamera.ts');
 // Reproduce the failure: a high bank behind the hero formerly lifted the
 // camera hundreds of units, then collapsed its horizontal boom to a few units.
 for(const floor of [(x,z)=>0,(x,z)=>z>10?180:0,(x,z)=>Math.abs(x)>10?150:0])for(const yaw of [0,.5,1.5,3]){
  const hero={x:0,y:.08,z:0},p=jotunheimCameraPose(hero,yaw,floor);
  assert(p.position.y-hero.y<=25.001,'Camera must never gain satellite height');
  assert(p.distance>=26,'A clear horizontal escape should keep a usable boom');
  const pitch=Math.atan2(p.position.y-p.target.y,Math.hypot(p.position.x-p.target.x,p.position.z-p.target.z));assert(pitch<Math.PI/6,'Look direction should open the horizon');
 }
 const {createJotunheimTerrain}=await server.ssrLoadModule('/src/jotunheimTerrain.ts'),{installJotunheimWaterfalls,WATERFALL_SITES,WATERFALL_CLIFF_ASSET}=await server.ssrLoadModule('/src/jotunheimWaterfalls.ts');
 const terrain=createJotunheimTerrain(await readGlbGeometry('public/img/models/Jotunheim_Mountain_Range.glb')),models=[];for(const s of WATERFALL_SITES)models.push(await readGlbGeometry('public/img/models/'+s.asset));
 const falls=installJotunheimWaterfalls(models,await readGlbGeometry('public/img/models/'+WATERFALL_CLIFF_ASSET),terrain),sample=(x,z)=>falls.height(x,z,terrain.height(x,z));
 assert.equal(WATERFALL_SITES[2].yaw,Math.PI,'Third scan must face outward after half turn');
 assert(falls.root.children[11].position.z>WATERFALL_SITES[2].z,'Third rear cap must rotate with the scan');
 assert(falls.viewpoints[2].yaw===Math.PI&&falls.viewpoints[2].z<WATERFALL_SITES[2].z,'Inspection must face the new open side');
 let checked=0;
 for(const [i,point] of falls.viewpoints.entries())for(const aspect of [390/700,945/1450]){
  const hero={...point,y:sample(point.x,point.z)+.08},p=jotunheimCameraPose(hero,point.yaw,sample),camera=new THREE.PerspectiveCamera(p.fov,aspect,.5,3500);camera.position.set(p.position.x,p.position.y,p.position.z);camera.lookAt(p.target.x,p.target.y,p.target.z);camera.updateMatrixWorld();
  const foot=new THREE.Vector3(hero.x,hero.y,hero.z).project(camera),head=new THREE.Vector3(hero.x,hero.y+19.25,hero.z).project(camera),height=Math.abs(head.y-foot.y)/2;
  assert(height>.30&&height<.80,`Hero screen fraction at waterfall ${i+1}: ${height}`);assert(Math.abs(foot.y)<1&&Math.abs(head.y)<1,'Full hero must remain in frame');
  assert(p.position.y-hero.y<=25.001);console.log(`Waterfall ${i+1}, aspect ${aspect.toFixed(2)}: hero ${(height*100).toFixed(1)}%, boom ${p.distance.toFixed(1)}, camera +${(p.position.y-hero.y).toFixed(1)}`);checked++;
 }
 console.log(`PASS: low collision camera on cliffs and ${checked} portrait views, no satellite lift, third waterfall rotated outward.`);
}finally{await server.close();}
