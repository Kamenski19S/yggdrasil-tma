import * as THREE from 'three';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
// The downloaded cape already has skin weights. Its own bones animate the hem;
// the guardian's chest carries the garment through idle, attack and death poses.
export function attachGuardianCape(actor:THREE.Group,guardian:THREE.Object3D,source:THREE.Object3D,guardianScale:number,color=0x742934){
 const cape=clone(source);cape.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3();
 cape.traverse((part:any)=>{if(part.isMesh){part.geometry.computeBoundingBox();bounds.union(part.geometry.boundingBox.clone().applyMatrix4(part.matrixWorld));}});
 const center=bounds.getCenter(new THREE.Vector3());
 const factor=1.10/(bounds.max.y-bounds.min.y);
 cape.scale.multiplyScalar(factor);cape.position.set(-center.x*factor,-bounds.max.y*factor,-bounds.max.z*factor);
 const hem:Array<{bone:THREE.Bone;rest:THREE.Quaternion;phase:number}>=[];
 cape.traverse((part:any)=>{
  if(part.isMesh){part.castShadow=true;part.receiveShadow=true;part.frustumCulled=false;
   part.material=new THREE.MeshStandardMaterial({color,roughness:.96,metalness:0,side:THREE.DoubleSide});
  }
  if(part.isBone&&/^Bone(003|007|010)_/.test(part.name))hem.push({bone:part,rest:part.quaternion.clone(),phase:hem.length*.7});
 });
 const mount=new THREE.Group();mount.name='GuardianCape';mount.position.set(0,1.47,-.13);mount.add(cape);
 // Loading can finish during an attack. Use the skeleton's bind pose rather
 // than preserving the animated chest transform at the instant of attachment.
 const restGuardian=clone(guardian);
 restGuardian.traverse((part:any)=>{if(part.isSkinnedMesh)part.skeleton.pose();});
 restGuardian.updateWorldMatrix(true,true);
 const restChest=restGuardian.getObjectByName('Chest')||restGuardian.getObjectByName('Torso');
 const chest=guardian.getObjectByName('Chest')||guardian.getObjectByName('Torso');
 if(chest&&restChest){
  const chestInModel=new THREE.Matrix4().copy(restGuardian.matrixWorld).invert().multiply(restChest.matrixWorld);
  mount.updateMatrix();
  const local=chestInModel.invert().multiply(mount.matrix);
  local.decompose(mount.position,mount.quaternion,mount.scale);
  chest.add(mount);
 }else guardian.add(mount);
 // Rebind in the fitted rest pose: the imported inverse bind matrices do not
 // match this garment's joint rest transforms after mounting.
 actor.updateWorldMatrix(true,true);
 cape.traverse((part:any)=>{if(part.isSkinnedMesh){part.skeleton.boneInverses=part.skeleton.boneInverses.map((matrix:THREE.Matrix4)=>matrix.clone());part.bind(part.skeleton);}});
 return {mount,hem,update(time:number,fallen=false){for(const h of hem){h.bone.quaternion.copy(h.rest);if(!fallen){h.bone.rotateX(Math.sin(time*.0019+h.phase)*.045);h.bone.rotateZ(Math.sin(time*.0014+h.phase)*.025);}}}};
}
