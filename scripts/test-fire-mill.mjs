import assert from 'node:assert/strict';
import {createServer} from 'vite';
import * as THREE from 'three';
const server=await createServer({server:{middlewareMode:true}});
try{
 const {applyFireWheelMaterial}=await server.ssrLoadModule('/src/fireMillWheel.ts');
 const root=new THREE.Group(),geometry=new THREE.TorusGeometry(3,.2,8,32),original=new THREE.MeshStandardMaterial();let disposed=false;original.addEventListener('dispose',()=>disposed=true);
 root.add(new THREE.Mesh(geometry,original));const before=new THREE.Box3().setFromObject(root);const finish=applyFireWheelMaterial(root);finish.update(3);assert(new THREE.Box3().setFromObject(root).equals(before));assert.equal(root.children[0].geometry,geometry);assert(disposed);assert(finish.material.metalness>.7);
 const {createSceneSuspension}=await server.ssrLoadModule('/src/sceneSuspension.ts');
 let losses=0,restores=0,sleeps=0,resumes=0;const renderer={domElement:new EventTarget(),forceContextLoss(){losses++;},forceContextRestore(){restores++;},getContext:()=>({isContextLost:()=>false})};
 const state=createSceneSuspension(renderer,()=>sleeps++,()=>resumes++);
 assert(state.update(false));for(let i=0;i<100;i++)assert.equal(state.update(true,false),false);assert.equal(losses,0);assert.equal(sleeps,1);assert(state.update(false));assert.equal(resumes,1);assert.equal(restores,0);
 for(let i=0;i<5;i++){assert(!state.update(true,false));assert(state.update(false));}assert.equal(losses,0);assert.equal(resumes,6);state.dispose();finish.material.dispose();geometry.dispose();
 console.log('PASS: fire finish preserves wheel geometry/size; repeated mill suspension preserves GPU resources, stops frames, and resumes once per visit.');
}finally{await server.close();}
