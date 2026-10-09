import * as THREE from 'three';

export function fitRuneEntrance(model:THREE.Group,groundY:number,z:number){
  model.updateMatrixWorld(true);
  const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
  model.scale.setScalar(10.8/size.x);model.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());
  model.position.set(-center.x,groundY-box.min.y-.08,z-center.z);
  model.name='Рунические входные врата';
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  return model;
}

export function addBlueEntranceTorches(scene:THREE.Scene,source:THREE.Group,groundY:number,z:number){
  source.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(source),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  const scale=2.6/size.y;
  const fixture=new THREE.Group();source.position.sub(center);fixture.add(source);fixture.scale.setScalar(scale);
  source.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;const mats=Array.isArray(o.material)?o.material:[o.material];for(const material of mats)if(material instanceof THREE.MeshStandardMaterial){material.emissive.set('#249fff');material.emissiveIntensity=.6;}}});
  for(const side of [-1,1]){
    const torch=fixture.clone(true);torch.name='Синий факел входных врат';torch.position.set(side*4.6,groundY+6.1,z+1.8);scene.add(torch);
    // Lightweight blue flame: shared geometry/material, no shadow-casting lights.
    const flame=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),new THREE.MeshBasicMaterial({color:'#61caff',transparent:true,opacity:.85,depthWrite:false}));
    flame.scale.set(.8,2.6,.8);flame.position.set(side*4.6,groundY+7.2,z+1.9);scene.add(flame);
    const light=new THREE.PointLight('#369dff',6,5,2);light.position.copy(flame.position);scene.add(light);
  }
}
