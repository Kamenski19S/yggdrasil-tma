import * as THREE from 'three';

// The source GLB has a valid skeleton, but no animation clips. Its two long
// drawn swords are separate skinned meshes in the exported T-pose.
export function prepareNineWorldStranger(model: THREE.Object3D) {
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

// Two low-cost leather scabbards. The exported unsheathed blades remain hidden;
// the hilts are visible above each sheath for a clear neutral silhouette.
export function makeNineWorldStrangerScabbards(height: number, facingY: number) {
  const scabbards = new THREE.Group();
  scabbards.rotation.y = facingY;
  const leather = new THREE.MeshStandardMaterial({ color: 0x47231d, roughness: .82 });
  const trim = new THREE.MeshStandardMaterial({ color: 0xaa8542, metalness: .6, roughness: .37 });
  const handle = new THREE.MeshStandardMaterial({ color: 0x21191c, roughness: .78 });
  const silver = new THREE.MeshStandardMaterial({ color: 0xbfc5ce, metalness: .75, roughness: .3 });

  for (const side of [-1, 1]) {
    const sheath = new THREE.Group();
    sheath.position.set(side * height * .135, height * .48, .11);
    sheath.rotation.z = side * .14;
    const length = height * .265;
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(.073, .035, length, 8), leather);
    tube.position.y = -length * .5;
    sheath.add(tube);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(.053, .14, 8), trim);
    tip.rotation.z = Math.PI;
    tip.position.y = -length - .055;
    sheath.add(tip);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(.041, .041, .37, 8), handle);
    hilt.position.y = .205;
    sheath.add(hilt);
    const crossguard = new THREE.Mesh(new THREE.BoxGeometry(.26, .055, .10), silver);
    crossguard.position.y = .02;
    sheath.add(crossguard);
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(.067, 8, 6), trim);
    pommel.position.y = .42;
    sheath.add(pommel);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(.082, .082, .09, 8), trim);
    collar.position.y = -.075;
    sheath.add(collar);
    scabbards.add(sheath);
  }
  return scabbards;
}
