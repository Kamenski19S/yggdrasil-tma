import * as THREE from 'three';

// Snow follows the actual stone surface; the ray misses each open ice joint.
export function addEntranceSnow(frame:THREE.Object3D,snowAsset:THREE.Object3D,scene:THREE.Scene,groundY:number){
  let source:THREE.Mesh|undefined;
  snowAsset.traverse((o:any)=>{if(o.isMesh&&!source)source=o;});
  if(!source)return;
  const geometry=source.geometry;geometry.computeBoundingBox();
  const bounds=geometry.boundingBox!,size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  const ray=new THREE.Raycaster(),middle=new THREE.Vector3(0,3.6+groundY,130);
  frame.updateMatrixWorld(true);
  for(let i=0;i<=18;i++){
    const angle=i/18*Math.PI,outward=new THREE.Vector3(Math.cos(angle),Math.sin(angle),0);
    ray.set(middle.clone().addScaledVector(outward,8),outward.clone().negate());
    const hit=ray.intersectObject(frame,true).find(h=>(h.object as THREE.Mesh).material instanceof THREE.MeshStandardMaterial&&((h.object as THREE.Mesh).material as THREE.Material).name==='floor');
    if(!hit)continue;
    const patch=new THREE.Mesh(geometry,source.material);patch.name='Oval snow covering';
    patch.scale.set(2.05/size.x,.7/size.y,3.5/size.z);
    const tangent=new THREE.Vector3(-outward.y,outward.x,0),basis=new THREE.Matrix4().makeBasis(tangent,outward,new THREE.Vector3(0,0,-1));
    patch.quaternion.setFromRotationMatrix(basis);
    const offset=new THREE.Vector3(-center.x*patch.scale.x,-bounds.min.y*patch.scale.y-.15,-center.z*patch.scale.z).applyQuaternion(patch.quaternion);
    patch.position.copy(hit.point).add(offset);scene.add(patch);
  }
}
