import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {createMuspelheimForge,forgeWorldPoint,forgeResumePosition,FORGE_RETURN}=await server.ssrLoadModule('/src/muspelheimForge.ts');
 const {createSceneSuspension}=await server.ssrLoadModule('/src/sceneSuspension.ts');
 const source=new THREE.Group();const material=new THREE.MeshStandardMaterial();const shell=new THREE.Mesh(new THREE.BoxGeometry(50,30,40),material);shell.position.y=15;source.add(shell);
 const vertices=[];for(let i=0;i<60;i++)vertices.push(-2,3,16,2,3,16,0,5,16);
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));source.add(new THREE.Mesh(geometry,material));
 const forge=createMuspelheimForge(source),threshold=forgeWorldPoint(0,17.8*1.1);
 forge.open();assert.equal(forge.update(1,threshold.x,threshold.z),true);assert.equal(forge.canEnter(threshold.x,threshold.z),true);
 let transitioningForge=true,position=threshold;const renderer={domElement:new EventTarget(),forceContextLoss(){},forceContextRestore(){},getContext:()=>({isContextLost:()=>false})};
 const suspension=createSceneSuspension(renderer,()=>{},()=>{position=forgeResumePosition(transitioningForge,threshold);forge.cancelRequest();transitioningForge=false;});
 assert.equal(suspension.update(true,false),false);assert.equal(suspension.update(false,false),true);assert.deepEqual(position,FORGE_RETURN);
 for(let frame=0;frame<120;frame++){assert.equal(forge.update(1/60,position.x,position.z),false,'return must not request another forge entry');assert.equal(forge.canEnter(position.x,position.z),false,'exit point must be outside the entrance trigger');}
 const millPoint={x:-158,z:-59,y:4.25};assert.equal(forgeResumePosition(false,millPoint),millPoint,'mill and other scene returns keep their own positions');
 forge.open();assert.equal(forge.update(1,position.x,position.z),true,'a new deliberate door action may re-enter');
 suspension.dispose();console.log('Forge exit: stale threshold position corrected, no re-entry for 120 frames, explicit re-entry and mill return preserved.');
}finally{await server.close();}
