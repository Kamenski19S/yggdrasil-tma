import * as THREE from 'three';

export function createLakeDescendingCave(model:THREE.Group,ground:(x:number,z:number)=>number){
  const root=new THREE.Group();root.name='Длинная пещера — спуск у озера';
  model.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(model);
  const centre=bounds.getCenter(new THREE.Vector3());
  model.position.set(-bounds.min.x,-bounds.min.y,-centre.z);
  const slope=new THREE.Group();slope.add(model);slope.scale.set(1.7,4,3.2);slope.rotation.z=-.18;
  root.add(slope);root.rotation.y=Math.PI/2;root.position.set(-86,ground(-86,96),96);
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material]){m.side=THREE.DoubleSide;m.needsUpdate=true;}}});
  root.updateMatrixWorld(true);
  const local=(x:number,z:number)=>root.worldToLocal(new THREE.Vector3(x,root.position.y,z));
  const length=(bounds.max.x-bounds.min.x)*1.7*Math.cos(.18),width=(bounds.max.z-bounds.min.z)*1.6;
  const inside=(x:number,z:number)=>{const p=local(x,z);return p.x>0&&p.x<length&&Math.abs(p.z)<width-.5;};
  // A narrow stone ramp joins the scanned floor gaps into a continuous descent.
  const rampGeometry=new THREE.BufferGeometry();
  rampGeometry.setAttribute('position',new THREE.Float32BufferAttribute([0,-.03,-4,0,-.03,4,length,-length*Math.tan(.18)-.03,-4,length,-length*Math.tan(.18)-.03,4],3));
  rampGeometry.setIndex([0,1,2,2,1,3]);rampGeometry.computeVertexNormals();
  const ramp=new THREE.Mesh(rampGeometry,new THREE.MeshStandardMaterial({color:'#6c655b',roughness:1,side:THREE.DoubleSide}));ramp.name='Каменный спуск';root.add(ramp);root.updateMatrixWorld(true);
  const expected=(x:number,z:number)=>root.position.y-local(x,z).x*Math.tan(.18);
  const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
  const groundY=(x:number,z:number)=>{
    if(!inside(x,z))return undefined;
    const p=local(x,z);if(Math.abs(p.z)<3.8)return expected(x,z)-.03;
    ray.set(new THREE.Vector3(x,expected(x,z)+2.5,z),down);ray.far=8;
    const hit=ray.intersectObject(root,true).find(h=>h.face&&h.face.normal.clone().transformDirection(h.object.matrixWorld).y>.3);
    return hit?.point.y;
  };
  const blocked=(from:{x:number;z:number},next:{x:number;z:number})=>{
    if(!inside(next.x,next.z))return inside(from.x,from.z)&&local(from.x,from.z).x>2;
    const y=groundY(next.x,next.z),old=groundY(from.x,from.z)??ground(from.x,from.z);
    return y===undefined||y-old>.85||old-y>1.4;
  };
  const addMountain=(mountain:THREE.Group)=>{
    mountain.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(mountain),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
    const shell=new THREE.Group();shell.name='Снежная гора вокруг пещеры';
    mountain.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
      const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld),p=geometry.getAttribute('position');
      for(let i=0;i<p.count;i++)p.setXYZ(i,(p.getX(i)-center.x)/Math.max(size.x,.001)*(length+18)+length*.5,(p.getY(i)-box.min.y)/Math.max(size.y,.001)*26-4,(p.getZ(i)-center.z)/Math.max(size.z,.001)*42);
      const index=geometry.getIndex(),keep:number[]=[];
      for(let i=0;i<(index?.count??p.count);i+=3){
        const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);
        const xs=ids.map(id=>p.getX(id)),ys=ids.map(id=>p.getY(id)),zs=ids.map(id=>p.getZ(id));
        // Remove shell triangles crossing the mouth, including its approach.
        const mouth=Math.min(...xs)<13&&Math.max(...xs)>-10&&Math.min(...zs)<8&&Math.max(...zs)>-8&&Math.min(...ys)<13;
        const floor=Math.min(...xs)<length&&Math.max(...xs)>0&&Math.min(...zs)<5&&Math.max(...zs)>-5&&Math.max(...ys)<3;
        if(!mouth&&!floor)keep.push(...ids);
      }
      geometry.setIndex(keep);geometry.computeVertexNormals();geometry.computeBoundingSphere();
      const mats=(Array.isArray(o.material)?o.material:[o.material]).map(m=>{const copy=m.clone();copy.side=THREE.FrontSide;return copy;});
      const mesh=new THREE.Mesh(geometry,Array.isArray(o.material)?mats:mats[0]);mesh.receiveShadow=true;shell.add(mesh);o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();
    });
    root.add(shell);root.updateMatrixWorld(true);
  };
  return {root,addMountain,inside,groundY,blocked,terrainY:(x:number,z:number)=>inside(x,z)?expected(x,z)-1:undefined,
    camera:(x:number,z:number)=>new THREE.Vector3(x,(groundY(x,z)??expected(x,z))+4.8,z+7)};
}
