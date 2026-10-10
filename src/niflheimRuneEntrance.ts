import * as THREE from 'three';

export function fitRuneEntrance(model:THREE.Group,groundY:number,z:number){
  model.updateMatrixWorld(true);
  const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
  const scale=10.8/size.x;
  model.scale.set(scale,scale*.65,scale);model.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());
  model.position.set(-center.x,groundY-box.min.y-.08,z-center.z);
  model.name='Рунические входные врата';
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  return model;
}
