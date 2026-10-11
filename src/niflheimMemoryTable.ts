import * as THREE from 'three';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
export function createMemoryTable(scene:THREE.Scene,world:(x:number,y:number,z:number)=>THREE.Vector3){
  const root=new THREE.Group();root.position.copy(world(0,0,-5));root.name='Стол памяти';scene.add(root);
  const stone=new THREE.MeshStandardMaterial({color:'#899ba8',roughness:.95});
  const top=new THREE.Mesh(new THREE.CylinderGeometry(3,3.2,.55,24),stone);top.position.y=2.8;top.castShadow=true;top.receiveShadow=true;root.add(top);
  const foot=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.7,2.5,12),stone);foot.position.y=1.25;root.add(foot);
  let mixer:THREE.AnimationMixer|undefined;const capsules:THREE.Group[]=[];
  const fit=(model:THREE.Group,height:number)=>{const wrapper=new THREE.Group();wrapper.add(model);model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3());const scale=height/Math.max(size.y,.001);model.scale.multiplyScalar(scale);model.position.sub(new THREE.Vector3(centre.x,box.min.y,centre.z).multiplyScalar(scale));return wrapper;};
  return {root,
    addFlame(model:THREE.Group,clips:THREE.AnimationClip[]){const item=fit(model,8);item.position.y=3.08;root.add(item);mixer=new THREE.AnimationMixer(model);clips.forEach(c=>mixer!.clipAction(c).play());},
    addCapsule(model:THREE.Group){for(let i=0;i<6;i++){const item=fit(i===0?model:clone(model) as THREE.Group,2.1);const angle=i*Math.PI/3;item.position.set(Math.cos(angle)*4.1,3.8,Math.sin(angle)*4.1);item.rotation.y=-angle;root.add(item);capsules.push(item);}},
    update(dt:number,time:number){mixer?.update(dt);capsules.forEach((c,i)=>{c.position.y=3.8+Math.sin(time*.8+i*Math.PI/3)*.2;});},
    blocked(x:number,z:number){return Math.hypot(x-root.position.x,z-root.position.z)<3.5;},
    dispose(){mixer?.stopAllAction();if(mixer)mixer.uncacheRoot(mixer.getRoot());}
  };
}
