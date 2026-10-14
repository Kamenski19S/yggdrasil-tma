import * as THREE from 'three';
import {CAVE_FLOOR_Y,CAVE_FRONT_Z,CAVE_MOUTH_X,type createCaveSpace} from './niflheimCaveEntrance';

// First visual placement only. The lord and resource transaction are not enabled yet.
export const FIRST_SEAL={
 id:'shelter',name:'Печать Мёртвого узла',location:'Приют хранителей',drops:17000,steel:5,
 runes:[{id:'algizGuard',name:'Альгиз',symbol:'ᛉ',amount:1},{id:'nauthizEndurance',name:'Наутиз',symbol:'ᚾ',amount:1}],
 lordFlag:'niflheim:seal:shelter:lordDefeated',openedFlag:'niflheim:seal:shelter:opened'
} as const;
export const firstSealOpened=(done:readonly string[])=>done.includes(FIRST_SEAL.openedFlag);
export function createFirstSeal(model:THREE.Group,space:ReturnType<typeof createCaveSpace>,angle:number){
 const root=new THREE.Group();root.name='Первая печать — Приют хранителей';
 root.position.copy(space.world(CAVE_MOUTH_X,CAVE_FLOOR_Y+3.15,CAVE_FRONT_Z+.8));root.rotation.y=angle;
 const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());
 model.position.sub(centre);const scale=4.5/size.y;model.scale.setScalar(scale);model.position.multiplyScalar(scale);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;const materials=Array.isArray(o.material)?o.material:[o.material];for(const m of materials)if(m instanceof THREE.MeshStandardMaterial){m.emissiveIntensity=1.15;m.metalness=Math.min(m.metalness,.35);}}});
 root.add(model);
 const veil=new THREE.Mesh(new THREE.PlaneGeometry(8.1,7.4),new THREE.MeshBasicMaterial({color:'#240b36',transparent:true,opacity:.2,side:THREE.DoubleSide,depthWrite:false}));veil.position.set(0,.4,-.15);root.add(veil);
 const light=new THREE.PointLight('#a52555',12,10,2);light.position.z=.6;root.add(light);
 return {root,
  near(x:number,z:number){return Math.hypot(x-root.position.x,z-root.position.z)<8;},
  blocked(from:{x:number;z:number},to:{x:number;z:number}){
   const a=space.local(from.x,from.z),b=space.local(to.x,to.z),plane=CAVE_FRONT_Z+.8;
   // Permit old saves inside the cave to leave; stop outside-to-inside entry.
   return a.z>plane&&b.z<=plane&&Math.abs(b.x-CAVE_MOUTH_X)<3.8;
  },
  update(time:number,opened:boolean){root.visible=!opened;(veil.material as THREE.MeshBasicMaterial).opacity=.18+Math.sin(time*1.6)*.035;light.intensity=12+Math.sin(time*1.6)*2;}
 };
}
