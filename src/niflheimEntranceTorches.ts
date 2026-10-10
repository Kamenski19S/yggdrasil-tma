import * as THREE from 'three';

export function addEntranceTorches(scene:THREE.Scene,source:THREE.Group,supports:THREE.Box3[],groundY:number){
  source.updateMatrixWorld(true);
  const height=new THREE.Box3().setFromObject(source).getSize(new THREE.Vector3()).y;
  for(const support of supports){
    const torch=source.clone(true);
    torch.scale.multiplyScalar(4.8/height);
    const side=support.getCenter(new THREE.Vector3()).x<0?-1:1;
    torch.rotation.y+=side*Math.PI/2;
    torch.updateMatrixWorld(true);
    const box=new THREE.Box3().setFromObject(torch),center=box.getCenter(new THREE.Vector3());
    // Mount the bracket on the outer side of each pillar, facing away from the opening.
    const bracket=torch.getObjectByName('torch_torch_0');
    const mountBox=bracket?new THREE.Box3().setFromObject(bracket):box;
    const face=side<0?support.min.x+.5:support.max.x-.5;
    torch.position.add(new THREE.Vector3(face-(side<0?mountBox.max.x:mountBox.min.x),groundY+1.4-box.min.y,support.getCenter(new THREE.Vector3()).z-center.z));
    torch.name='Настенный факел входных врат';
    torch.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;}});
    scene.add(torch);
    const glow=new THREE.PointLight(0xffbb55,2,6,2);
    glow.position.set(face+side*.8,groundY+5.7,support.getCenter(new THREE.Vector3()).z);
    scene.add(glow);
  }
}
