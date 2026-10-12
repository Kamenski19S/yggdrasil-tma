import * as THREE from 'three';

/**
 * The exported character costume contains a 956-triangle cloth cape. Its
 * weights are exclusively attached to Bone_cape* joints, but the cloth shares
 * a skinned mesh with the dress. Cull those triangles instead of hiding the
 * entire costume or altering the original GLB.
 */
function removeWandererCape(model: THREE.Object3D) {
  const costume=model.getObjectByName('Object_9') as THREE.SkinnedMesh | undefined;
  if(!costume?.isSkinnedMesh)return 0;

  const capeJoints=new Set<number>();
  costume.skeleton.bones.forEach((bone,index)=>{
    if(/^Bone_cape/i.test(bone.name))capeJoints.add(index);
  });
  if(capeJoints.size===0)return 0;

  const original=costume.geometry;
  const skinIndex=original.getAttribute('skinIndex');
  const skinWeight=original.getAttribute('skinWeight');
  const positions=original.getAttribute('position');
  if(!skinIndex||!skinWeight||!positions)return 0;

  // The source cape has full (1.0) cape-bone weights at all of its vertices,
  // whereas the dress, hair and body have none. A >0.5 test cleanly splits
  // those triangles without cutting holes in the character's clothing.
  const capeVertex=new Uint8Array(positions.count);
  for(let v=0;v<positions.count;v++){
    const bones=[skinIndex.getX(v),skinIndex.getY(v),skinIndex.getZ(v),skinIndex.getW(v)];
    const weights=[skinWeight.getX(v),skinWeight.getY(v),skinWeight.getZ(v),skinWeight.getW(v)];
    let capeWeight=0;
    for(let k=0;k<4;k++)if(capeJoints.has(bones[k]))capeWeight+=weights[k];
    if(capeWeight>.5)capeVertex[v]=1;
  }

  const sourceIndex=original.index;
  const groups=original.groups.length
    ?original.groups
    :[{start:0,count:sourceIndex?.count??positions.count,materialIndex:0}];
  const kept:number[]=[];
  const newGroups:Array<{start:number;count:number;materialIndex:number}>=[];
  let removed=0;
  for(const group of groups){
    const start=kept.length;
    for(let i=group.start;i+2<group.start+group.count;i+=3){
      const a=sourceIndex?sourceIndex.getX(i):i;
      const b=sourceIndex?sourceIndex.getX(i+1):i+1;
      const c=sourceIndex?sourceIndex.getX(i+2):i+2;
      if(capeVertex[a]||capeVertex[b]||capeVertex[c]){
        removed++;continue;
      }
      kept.push(a,b,c);
    }
    newGroups.push({start,count:kept.length-start,materialIndex:group.materialIndex??0});
  }

  if(removed>0){
    const clean=original.clone();
    clean.setIndex(kept);
    clean.clearGroups();
    if(original.groups.length){
      for(const group of newGroups)clean.addGroup(group.start,group.count,group.materialIndex);
    }
    clean.computeBoundingSphere();
    costume.geometry=clean;
    console.info('[NINE WORLD WANDERER] Removed cape triangles:',removed);
  }
  return removed;
}

// The source GLB has a valid skeleton, but no animation clips. Its two long
// drawn swords are separate skinned meshes in the exported T-pose.
export function prepareNineWorldStranger(model: THREE.Object3D) {
  removeWandererCape(model);
  // Weapon meshes are hidden: no extra swords, scabbards or spears.
  const swordNames = new Set(['Object_14', 'Object_16']);
  let swordsHidden = 0;
  model.traverse(object => {
    if (swordNames.has(object.name)) {
      object.visible = false;
      swordsHidden++;
    }
  });

  model.updateWorldMatrix(true, true);
  const modelFacing = model.getWorldQuaternion(new THREE.Quaternion());
  const hips = model.getObjectByName('Bip001-Pelvis_04');
  const pelvisX = hips?.getWorldPosition(new THREE.Vector3()).x ?? 0;

  // Point the limb towards a natural resting direction without overwriting the
  // model's bind pose: the exact changes are applied to shoulder/elbow bones.
  const aimLimb = (jointName: string, childName: string, target: THREE.Vector3) => {
    const joint = model.getObjectByName(jointName);
    const child = model.getObjectByName(childName);
    if (!joint || !child || !joint.parent) return false;
    model.updateWorldMatrix(true, true);
    const from = joint.getWorldPosition(new THREE.Vector3());
    const to = child.getWorldPosition(new THREE.Vector3());
    const current = to.sub(from);
    if (current.lengthSq() < 1e-6) return false;
    const worldDelta = new THREE.Quaternion().setFromUnitVectors(current.normalize(), target.normalize());
    const parentWorld = joint.parent.getWorldQuaternion(new THREE.Quaternion());
    const localDelta = parentWorld.clone().invert().multiply(worldDelta).multiply(parentWorld);
    joint.quaternion.premultiply(localDelta);
    joint.updateMatrixWorld(true);
    return true;
  };

  for (const [upper, forearm, hand] of [
    ['Bip001-R-UpperArm_0118', 'Bip001-R-Forearm_0119', 'Bip001-R-Hand_0120'],
    ['Bip001-L-UpperArm_0141', 'Bip001-L-Forearm_0142', 'Bip001-L-Hand_0143']
  ]) {
    const shoulder = model.getObjectByName(upper);
    const side = shoulder && shoulder.getWorldPosition(new THREE.Vector3()).x < pelvisX ? -1 : 1;
    const upperTarget = new THREE.Vector3(side * .17, -.98, .07).applyQuaternion(modelFacing);
    const lowerTarget = new THREE.Vector3(side * .08, -.99, .12).applyQuaternion(modelFacing);
    aimLimb(upper, forearm, upperTarget);
    aimLimb(forearm, hand, lowerTarget);
  }

  model.updateWorldMatrix(true, true);
  // Do not include the floating sword meshes in the size/centering calculation.
  const bodyBounds = new THREE.Box3();
  model.traverse((object: THREE.Object3D) => {
    if (!(object as THREE.Mesh).isMesh || swordNames.has(object.name)) return;
    bodyBounds.union(new THREE.Box3().setFromObject(object));
  });

  // Subtle breathing/head movement instead of a completely motionless mannequin.
  const spine = model.getObjectByName('Bip001-Spine1_06');
  const neck = model.getObjectByName('Bip001-Neck_08');
  const spineRest = spine?.quaternion.clone(), neckRest = neck?.quaternion.clone();
  const breath = new THREE.Quaternion(), glance = new THREE.Quaternion();
  const swayAxis = new THREE.Vector3(0, 0, 1), neckAxis = new THREE.Vector3(0, 1, 0);
  const idle = (time: number) => {
    if (spine && spineRest) {
      spine.quaternion.copy(spineRest).multiply(breath.setFromAxisAngle(swayAxis, Math.sin(time * .0012) * .017));
    }
    if (neck && neckRest) {
      neck.quaternion.copy(neckRest).multiply(glance.setFromAxisAngle(neckAxis, Math.sin(time * .00045) * .035));
    }
  };

  return { bodyBounds, swordsHidden, idle };
}
