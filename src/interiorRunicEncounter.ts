import * as THREE from 'three';
import {createGateMagic} from './muspelheimGateMagic';
import type {Element} from './elementalMagic';
/** Stationary, visible, non-homing spells; shrine keepers remain in their authored places. */
export function createInteriorRunicEncounter(kind:'vault'|'lord'){
 const root=new THREE.Group();root.name='Испытание хранителя';
 const geometry=new THREE.IcosahedronGeometry(.8,1),haloGeometry=new THREE.SphereGeometry(1.4,10,8);
 const sites: Array<{x:number;z:number;element:Element}>=kind==='vault'?[{x:22,z:-8,element:'shadow'}]:[{x:13,z:-32,element:'fire'},{x:-14,z:-32,element:'shadow'}];
 const casters=sites.map((site,i)=>{
  const material=new THREE.MeshBasicMaterial({color:site.element==='fire'?'#ff692b':'#b16aff',toneMapped:false});
  const glow=new THREE.MeshBasicMaterial({color:material.color,transparent:true,opacity:.25,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
  const charge=new THREE.Mesh(haloGeometry,glow);charge.position.set(site.x,14,site.z);charge.visible=false;root.add(charge);
  const magic=createGateMagic({...site,y:0},{},{notice:60,charge:1.1+i*.35,speed:38,pause:2+i*.5,recover:1});
  return {site,material,glow,charge,magic,meshes:new Map<number,THREE.Group>()};
 });
 return {root,update(dt:number,hero:{x:number;y:number;z:number},enabled:boolean,onThreat:(element:Element)=>void){
  const hits:Element[]=[];
  if(dt<=0)return hits;
  for(const c of casters){
   const event=c.magic.step(dt,hero,enabled&&hero.z<43,{x:c.site.x,y:14,z:c.site.z},true,()=>0);
   if(event.started)onThreat(c.site.element);if(event.impact)hits.push(c.site.element);
   c.charge.visible=c.magic.stage==='charge';c.charge.scale.setScalar(1.3+.35*Math.sin(performance.now()*.015));
   const active=new Set(c.magic.projectiles.map(p=>p.id));for(const [id,mesh]of c.meshes)if(!active.has(id)){root.remove(mesh);c.meshes.delete(id);}
   for(const p of c.magic.projectiles){let mesh=c.meshes.get(p.id);if(!mesh){mesh=new THREE.Group();mesh.add(new THREE.Mesh(geometry,c.material),new THREE.Mesh(haloGeometry,c.glow));root.add(mesh);c.meshes.set(p.id,mesh);}mesh.position.set(p.x,p.y,p.z);}
  }return hits;
 },dispose(){root.removeFromParent();geometry.dispose();haloGeometry.dispose();casters.forEach(c=>{c.material.dispose();c.glow.dispose();c.meshes.clear();});}};
}
