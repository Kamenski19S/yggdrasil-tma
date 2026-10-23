import * as THREE from 'three';
import type {HeroWeapon} from './core';
export type HeroLoadout={weapon:HeroWeapon;shieldAsset:string;shieldEquipped:boolean};
type EquipmentOptions={load:(asset:string)=>Promise<THREE.Object3D>;weaponAsset:(weapon:HeroWeapon)=>string;prepare:(item:THREE.Object3D,asset:string,weapon:HeroWeapon,isShield:boolean)=>void;dispose:(item:THREE.Object3D)=>void};
/** Swap complete loadouts atomically; late responses cannot restore an older selection. */
export function createMuspelheimHeroEquipment(model:THREE.Object3D,options:EquipmentOptions){
 const bone=(suffix:string)=>{let result:THREE.Object3D|undefined;model.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith(suffix))result=o;});return result;};
 const hand=bone('RightHand'),arm=bone('LeftForeArm');
 let generation=0,alive=true,mounts:THREE.Group[]=[];
 const release=()=>{for(const mount of mounts){mount.removeFromParent();options.dispose(mount);}mounts=[];};
 return {
  async update(state:HeroLoadout){
   const request=++generation;if(!alive)return false;
   if(!hand||state.shieldEquipped&&!arm)throw Error('Vicki equipment bones are missing');
   const specs=[{asset:options.weaponAsset(state.weapon),parent:hand,shield:false},...(state.shieldEquipped?[{asset:state.shieldAsset,parent:arm!,shield:true}]:[])];
   const loaded=await Promise.allSettled(specs.map(spec=>options.load(spec.asset)));
   const items=loaded.flatMap(result=>result.status==='fulfilled'?[result.value]:[]);
   if(!alive||request!==generation){items.forEach(options.dispose);return false;}
   const failure=loaded.find(result=>result.status==='rejected');if(failure){items.forEach(options.dispose);throw failure.reason;}
   const next:THREE.Group[]=[];
   try{for(let i=0;i<specs.length;i++){
    const spec=specs[i],item=items[i];options.prepare(item,spec.asset,state.weapon,spec.shield);
    if(spec.shield&&spec.asset==='Shield_Round.glb')item.scale.z=.22;
    item.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(item),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
    const span=spec.shield?Math.max(size.x,size.y,size.z):size.y;if(span<.001)throw Error('Empty equipment model: '+spec.asset);
    item.position.set(-center.x,spec.shield?-center.y:-box.min.y,-center.z);
    const mount=new THREE.Group();mount.name=spec.shield?'Vicki equipped shield':'Vicki equipped '+state.weapon;mount.scale.setScalar((spec.shield?.38:state.weapon==='spear'?.82:.57)/span);mount.position.set(0,spec.shield?.075:-.065,spec.shield?-.016:.015);
    if(spec.shield)mount.rotation.y=Math.PI;else mount.rotation.x=-.2;mount.add(item);next.push(mount);
   }}catch(error){items.forEach(options.dispose);throw error;}
   release();mounts=next;mounts.forEach((mount,i)=>specs[i].parent.add(mount));return true;
  },
  dispose(){alive=false;generation++;release();}
 };
}
