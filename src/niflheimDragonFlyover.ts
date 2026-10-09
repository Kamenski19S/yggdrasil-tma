import * as THREE from 'three';
import {NIFL_SOURCE} from './niflheimMapData';

// Low flights start and finish at the visible crimson-stone landmark.
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
  const sit=clip?mixer.clipAction(clip):undefined,flyClip=clips.find(c=>c.name==='Fly'),fly=flyClip?mixer.clipAction(flyClip):undefined;
  const origin=new THREE.Vector3(),direction=new THREE.Vector3();
  let seated=false,animationDebt=0,elapsed=0,nextFlight=20,flightTime=-1,route:THREE.CatmullRomCurve3|undefined,routeIndex=0;
  const switchAction=(from:THREE.AnimationAction|undefined,to:THREE.AnimationAction|undefined)=>{
    from?.fadeOut(.5);to?.reset().fadeIn(.5).play();
  };
  return {root,update(dt:number,_camera:THREE.Camera,enabled:boolean){
    if(!seated){
      const stone=scene.getObjectByName('Багровый лёд Хвергельмира');
      if(!stone)return;
      stone.updateMatrixWorld(true);const rockBounds=new THREE.Box3().setFromObject(stone);
      const rockCenter=rockBounds.getCenter(new THREE.Vector3());
      ray.set(new THREE.Vector3(rockCenter.x,rockBounds.max.y+5,rockCenter.z),down);
      const hit=ray.intersectObject(stone,true)[0];
      root.position.set(rockCenter.x,(hit?.point.y??rockBounds.max.y)+.08,rockCenter.z);
      origin.copy(root.position);seated=true;root.visible=true;
    }
    if(!enabled)return;
    elapsed+=dt;
    if(flightTime<0&&elapsed>=nextFlight&&fly){
      nextFlight=elapsed+180;flightTime=0;switchAction(sit,fly);
      const side=routeIndex++%2===0?1:-1;
      route=new THREE.CatmullRomCurve3([
        origin.clone(),origin.clone().add(new THREE.Vector3(side*7,4,8)),
        origin.clone().add(new THREE.Vector3(side*24,6,24)),
        origin.clone().add(new THREE.Vector3(-side*16,5,36)),
        origin.clone().add(new THREE.Vector3(-side*12,4,10)),origin.clone()
      ],false,'centripetal');
    }
    if(flightTime>=0&&route){
      flightTime+=dt;
      if(flightTime>=28){
        flightTime=-1;root.position.copy(origin);root.rotation.set(0,0,0);switchAction(fly,sit);
      }else{
        const t=flightTime/28;route.getPointAt(t,root.position);route.getTangentAt(t,direction);
        root.rotation.set(-Math.asin(THREE.MathUtils.clamp(direction.y,-1,1)),Math.atan2(direction.x,direction.z),Math.sin(t*Math.PI*2)*.06);
      }
    }
    animationDebt+=dt;
    if(animationDebt>=1/30){mixer.update(animationDebt);animationDebt=0;}
  },dispose(){mixer.stopAllAction();mixer.uncacheRoot(model);}};
}
