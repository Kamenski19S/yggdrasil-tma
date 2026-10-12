import * as THREE from 'three';

// The source GLB has a valid skeleton, but no animation clips. Its two long
// drawn swords are separate skinned meshes in the exported T-pose.
export function prepareNineWorldStranger(model: THREE.Object3D) {
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
