import * as THREE from 'three';
import {SUMMIT_FLOOR_Y} from './muspelheimSummit';
export const SURT_THRONE_ASSET='Muspelheim_Surt_Throne.glb';
export const SURT_THRONE_POSITION={x:-315,z:-430};
export const SURT_THRONE_HEIGHT=22;
export const SURT_THRONE_CREDIT={title:'Demon King Throne – Dark Fantasy Gothic Chair',author:'UNREAL JOELAB',url:'https://sketchfab.com/3d-models/demon-king-throne-dark-fantasy-gothic-chair-83ccfc1c656644278655b113f4083700'};
export function createSurtThrone(model:THREE.Object3D){
 model.updateWorldMatrix(true,true);const b=new THREE.Box3().setFromObject(model),size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3()),scale=SURT_THRONE_HEIGHT/size.y;
 if(!Number.isFinite(scale)||scale<=0)throw Error('Invalid throne bounds');
 const offset=new THREE.Group();offset.position.set(-center.x,-b.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);
 const root=new THREE.Group();root.name='Surt throne by the inner rear doorway';root.position.set(SURT_THRONE_POSITION.x,SUMMIT_FLOOR_Y,SURT_THRONE_POSITION.z);root.add(fit);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.roughness=Math.max(.7,m.roughness);m.emissiveIntensity=Math.min(.7,m.emissiveIntensity);}}});root.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3().setFromObject(root);
 return {root,bounds,blocks:(x:number,z:number,padding=1.5)=>x>bounds.min.x-padding&&x<bounds.max.x+padding&&z>bounds.min.z-padding&&z<bounds.max.z+padding};
}
