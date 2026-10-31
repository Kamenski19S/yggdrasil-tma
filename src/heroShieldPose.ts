import * as THREE from 'three';
/** A reversible overlay on the animated left arm; never accumulates bone rotations. */
export function createHeroShieldPose(model:THREE.Object3D){
 const bones=['LeftArm','LeftForeArm'].map(suffix=>{let found:THREE.Object3D|undefined;model.traverse(o=>{if(o.name.replace(/[^a-zA-Z0-9]/g,'').endsWith(suffix))found=o;});return found;});
 const base=bones.map(b=>b?.quaternion.clone());let lift=0;
 const facing=new THREE.Vector3(),normal=new THREE.Vector3(),world=new THREE.Quaternion(),parent=new THREE.Quaternion(),delta=new THREE.Quaternion();
 return {restore(){bones.forEach((b,i)=>{if(b&&base[i])b.quaternion.copy(base[i]!);});},apply(dt:number,guarding:boolean){bones.forEach((b,i)=>{if(b&&base[i])base[i]!.copy(b.quaternion);});lift=THREE.MathUtils.clamp(lift+(guarding?dt/.15:-dt/.2),0,1);if(lift){bones[0]?.rotateX(-lift*.855);bones[0]?.rotateY(-lift*.45);bones[0]?.rotateZ(lift*.495);bones[1]?.rotateX(-lift*.135);
    const fore=bones[1];if(fore?.parent){model.getWorldDirection(facing).negate();fore.getWorldQuaternion(world);normal.set(0,0,1).applyQuaternion(world);delta.setFromUnitVectors(normal,facing);world.premultiply(delta);fore.parent.getWorldQuaternion(parent).invert();world.premultiply(parent);fore.quaternion.slerp(world,lift);}
}},get raised(){return lift;}};
}
