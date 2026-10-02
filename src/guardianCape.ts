import * as THREE from 'three';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
// The downloaded cape already has skin weights. Its own bones animate the hem;
// the guardian's chest carries the garment through idle, attack and death poses.
export function attachGuardianCape(actor:THREE.Group,guardian:THREE.Object3D,source:THREE.Object3D,guardianScale:number,color=0x742934){
 const cape=clone(source);cape.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3().setFromObject(cape),center=bounds.getCenter(new THREE.Vector3());
 const factor=guardianScale*1.10/(bounds.max.y-bounds.min.y);
 cape.scale.multiplyScalar(factor);cape.position.set(-center.x*factor,-bounds.max.y*factor,-bounds.max.z*factor);
 const hem:Array<{bone:THREE.Bone;rest:THREE.Quaternion;phase:number}>=[];
 cape.traverse((part:any)=>{
  if(part.isMesh){part.castShadow=true;part.receiveShadow=true;part.frustumCulled=false;
   part.material=new THREE.MeshStandardMaterial({color,roughness:.96,metalness:0,side:THREE.DoubleSide});
  }
  if(part.isBone&&/^Bone(003|007|010)_/.test(part.name))hem.push({bone:part,rest:part.quaternion.clone(),phase:hem.length*.7});
 });
 const mount=new THREE.Group();mount.name='GuardianCape';mount.position.set(0,1.47*guardianScale,-.13*guardianScale);mount.add(cape);actor.add(mount);
 actor.updateWorldMatrix(true,true);
 const chest=guardian.getObjectByName('Chest')||guardian.getObjectByName('Torso');
 if(chest)chest.attach(mount);
 return {mount,hem,update(time:number,fallen=false){for(const h of hem){h.bone.quaternion.copy(h.rest);if(!fallen){h.bone.rotateX(Math.sin(time*.0019+h.phase)*.045);h.bone.rotateZ(Math.sin(time*.0014+h.phase)*.025);}}}};
}
