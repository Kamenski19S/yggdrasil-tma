import * as THREE from 'three';
import {NIFL_SOURCE} from './niflheimMapData';

// Keep the outdoor dragon at a fixed landmark, visible without a flight timer.
export function createDragonFlyover(scene:THREE.Scene,model:THREE.Group,clips:THREE.AnimationClip[],ground:(x:number,z:number)=>number){
  const root=new THREE.Group();root.name='Нидхёгг — на багровом камне';root.visible=false;
  model.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3());
  model.scale.multiplyScalar(14/Math.max(size.x,size.y,size.z,.01));
  root.add(model);scene.add(root);
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=false;}});
  const mixer=new THREE.AnimationMixer(model),clip=clips.find(c=>c.name==='Idle Sit');
  if(clip){mixer.clipAction(clip).play();mixer.update(0);}
  model.updateMatrixWorld(true);bounds.setFromObject(model);
  const center=bounds.getCenter(new THREE.Vector3());
  model.position.sub(new THREE.Vector3(center.x,bounds.min.y,center.z));
  root.position.set(NIFL_SOURCE.x,ground(NIFL_SOURCE.x,NIFL_SOURCE.z),NIFL_SOURCE.z);
  const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
  let seated=false,animationDebt=0;
  return {root,update(dt:number,_camera:THREE.Camera,enabled:boolean){
    if(!seated){
      const stone=scene.getObjectByName('Багровый лёд Хвергельмира');
      if(!stone)return;
      stone.updateMatrixWorld(true);const rockBounds=new THREE.Box3().setFromObject(stone);
      const rockCenter=rockBounds.getCenter(new THREE.Vector3());
      ray.set(new THREE.Vector3(rockCenter.x,rockBounds.max.y+5,rockCenter.z),down);
      const hit=ray.intersectObject(stone,true)[0];
      root.position.set(rockCenter.x,(hit?.point.y??rockBounds.max.y)+.08,rockCenter.z);
      seated=true;root.visible=true;
    }
    if(!enabled)return;
    animationDebt+=dt;
    if(animationDebt>=1/30){mixer.update(animationDebt);animationDebt=0;}
  },dispose(){mixer.stopAllAction();mixer.uncacheRoot(model);}};
}
