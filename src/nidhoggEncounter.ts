import * as THREE from 'three';

// The model faces +Z. Keep its animated skeleton inside a separate world anchor.
export function createNidhoggEncounter(model:THREE.Group,clips:THREE.AnimationClip[],groundAt:(x:number,z:number)=>number,onPhase:(text:string)=>void){
  const anchor=new THREE.Group();anchor.name='Нидхёгг — встреча у корней';
  model.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3());
  const scale=Math.min(10/Math.max(size.y,.01),22/Math.max(size.x,size.z,.01));
  model.scale.multiplyScalar(scale);model.updateMatrixWorld(true);
  bounds.setFromObject(model);const center=bounds.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-bounds.min.y,-center.z);anchor.add(model);
  const mixer=new THREE.AnimationMixer(model);
  const action=(name:string)=>{const clip=clips.find(c=>c.name===name);return clip?mixer.clipAction(clip):undefined;};
  const sit=action('Idle Sit')??action('Idle Stand');sit?.play();mixer.update(0);
  model.updateMatrixWorld(true);bounds.setFromObject(model);
  model.position.y-=bounds.min.y;
  anchor.position.set(-12,groundAt(-12,-48),-48);anchor.rotation.y=0;
  const collision=new THREE.Box3();
  const updateCollision=()=>collision.setFromCenterAndSize(new THREE.Vector3(anchor.position.x,anchor.position.y+5,anchor.position.z),new THREE.Vector3(18,14,18));
  updateCollision();
  return {anchor,mixer,collision,get flying(){return false;},
    update(dt:number,_hero:{x:number;z:number},_ready:boolean){
      mixer.update(dt);anchor.position.y=groundAt(anchor.position.x,anchor.position.z);updateCollision();
    }
  };
}
