import * as THREE from 'three';

export function createLakeDescendingCave(model:THREE.Group,ground:(x:number,z:number)=>number){
  const root=new THREE.Group();root.name='Длинная пещера — спуск у озера';
  model.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(model);
  const centre=bounds.getCenter(new THREE.Vector3());
  model.position.set(-bounds.min.x,-bounds.min.y,-centre.z);
  const slope=new THREE.Group();slope.add(model);slope.scale.setScalar(2);slope.rotation.z=-.18;
  root.add(slope);root.rotation.y=Math.PI/2;root.position.set(-92,ground(-92,24),24);
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material]){m.side=THREE.DoubleSide;m.needsUpdate=true;}}});
  root.updateMatrixWorld(true);
  const local=(x:number,z:number)=>root.worldToLocal(new THREE.Vector3(x,root.position.y,z));
  const length=(bounds.max.x-bounds.min.x)*2*Math.cos(.18),width=(bounds.max.z-bounds.min.z);
  const inside=(x:number,z:number)=>{const p=local(x,z);return p.x>0&&p.x<length&&Math.abs(p.z)<width-.5;};
  // A narrow stone ramp joins the scanned floor gaps into a continuous descent.
  const rampGeometry=new THREE.BufferGeometry();
  rampGeometry.setAttribute('position',new THREE.Float32BufferAttribute([0,-.03,-2.5,0,-.03,2.5,length,-length*Math.tan(.18)-.03,-2.5,length,-length*Math.tan(.18)-.03,2.5],3));
  rampGeometry.setIndex([0,1,2,2,1,3]);rampGeometry.computeVertexNormals();
  const ramp=new THREE.Mesh(rampGeometry,new THREE.MeshStandardMaterial({color:'#6c655b',roughness:1,side:THREE.DoubleSide}));ramp.name='Каменный спуск';root.add(ramp);root.updateMatrixWorld(true);
  const expected=(x:number,z:number)=>root.position.y-local(x,z).x*Math.tan(.18);
  const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
  const groundY=(x:number,z:number)=>{
    if(!inside(x,z))return undefined;
    ray.set(new THREE.Vector3(x,expected(x,z)+2.5,z),down);ray.far=8;
    const hit=ray.intersectObject(root,true).find(h=>h.face&&h.face.normal.clone().transformDirection(h.object.matrixWorld).y>.3);
    return hit?.point.y;
  };
  const blocked=(from:{x:number;z:number},next:{x:number;z:number})=>{
    if(!inside(next.x,next.z))return inside(from.x,from.z)&&local(from.x,from.z).x>2;
    const y=groundY(next.x,next.z),old=groundY(from.x,from.z)??ground(from.x,from.z);
    return y===undefined||y-old>.85||old-y>1.4;
  };
  return {root,inside,groundY,blocked,terrainY:(x:number,z:number)=>inside(x,z)?expected(x,z)-1:undefined,
    camera:(x:number,z:number)=>new THREE.Vector3(x,(groundY(x,z)??expected(x,z))+4.8,z+7)};
}
