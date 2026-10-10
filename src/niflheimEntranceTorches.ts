import * as THREE from 'three';

export function addEntranceTorches(scene:THREE.Scene,source:THREE.Group,supports:THREE.Box3[],groundY:number){
  source.updateMatrixWorld(true);
  const height=new THREE.Box3().setFromObject(source).getSize(new THREE.Vector3()).y;
  for(const support of supports){
    const torch=source.clone(true);
    torch.scale.multiplyScalar(2.4/height);
    torch.updateMatrixWorld(true);
    const box=new THREE.Box3().setFromObject(torch),center=box.getCenter(new THREE.Vector3());
    // The rear mounting plate sits against the south face of each stone pillar.
    torch.position.add(new THREE.Vector3(support.getCenter(new THREE.Vector3()).x-center.x,groundY+1.8-box.min.y,support.max.z-.5-box.min.z));
    torch.name='Настенный факел входных врат';
    torch.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;}});
    scene.add(torch);
    const glow=new THREE.PointLight(0xffbb55,2,6,2);
    glow.position.set(support.getCenter(new THREE.Vector3()).x,groundY+3.9,support.max.z+.1);
    scene.add(glow);
  }
}
