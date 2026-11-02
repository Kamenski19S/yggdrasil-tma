import * as THREE from 'three';
import type {createRunicWard} from './runicCombinations';
export function createRunicWardVfx(){
 const root=new THREE.Group();root.name='Покров выбранного рунического сочетания';root.visible=false;
 const material=new THREE.MeshBasicMaterial({color:'#ffe5a2',transparent:true,opacity:.7,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false});
 const ring=new THREE.Mesh(new THREE.TorusGeometry(6.5,.13,6,48),material);ring.rotation.x=-Math.PI/2;ring.position.y=.3;root.add(ring);
 const halo=new THREE.Mesh(new THREE.IcosahedronGeometry(8,1),new THREE.MeshBasicMaterial({transparent:true,opacity:.12,wireframe:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));halo.position.y=7;root.add(halo);
 let time=0;
 return {root,update(dt:number,position:{x:number;y:number;z:number},ward:ReturnType<typeof createRunicWard>){
  time+=Math.max(0,dt);root.position.set(position.x,position.y,position.z);const recipe=ward.recipe;root.visible=!!recipe;
  if(recipe){material.color.set(recipe.color);halo.material.color.set(recipe.color);ring.rotation.z=time*.8;halo.rotation.y=time*.5;material.opacity=ward.remaining<.7?.3+.4*Math.sin(time*24)**2:.7;}
 },dispose(){root.removeFromParent();ring.geometry.dispose();halo.geometry.dispose();material.dispose();halo.material.dispose();}};
}
