import * as THREE from 'three';
import {createLakeDescendingCave} from './niflheimLakeCave';

// Katie Alois, Ice Castles NY; Svenja, Ice Glacier. Both CC BY 4.0.
export function createRootsIceCave(walls:THREE.Group,x:number,z:number,ground:(x:number,z:number)=>number){
  const floor=ground(x,z)-.2;
  const root=new THREE.Group();root.name='Ледяная пещера вокруг корней';root.position.set(x,floor,z);
  // Reuse the snowy mountain and its open chamber, shortened along the passage.
  const room=createLakeDescendingCave(walls,ground);
  room.root.position.set(0,3,16.25);room.root.scale.x=.65;
  root.add(room.root);root.updateMatrixWorld(true);
  const segments:{ax:number;az:number;bx:number;bz:number}[]=[];
  const buckets=new Map<string,number[]>(),cell=4;
  const addSegment=(a:THREE.Vector3,b:THREE.Vector3)=>{
    const i=segments.push({ax:a.x,az:a.z,bx:b.x,bz:b.z})-1;
    for(let ix=Math.floor(Math.min(a.x,b.x)/cell);ix<=Math.floor(Math.max(a.x,b.x)/cell);ix++)for(let iz=Math.floor(Math.min(a.z,b.z)/cell);iz<=Math.floor(Math.max(a.z,b.z)/cell);iz++){
      const key=`${ix},${iz}`,list=buckets.get(key)??[];list.push(i);buckets.set(key,list);
    }
  };
  const inside=room.inside;
  const groundY=(px:number,pz:number)=>{const y=room.groundY(px,pz);return y===undefined?undefined:y+floor;};
  const blocked=(px:number,pz:number)=>{
    if(room.blocked({x:px,z:pz},{x:px+.01,z:pz}))return true;
    const lx=px-x,lz=pz-z,ix=Math.floor(lx/cell),iz=Math.floor(lz/cell);
    for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++)for(const id of buckets.get(`${ix+dx},${iz+dz}`)??[]){
      const s=segments[id],vx=s.bx-s.ax,vz=s.bz-s.az;
      const t=THREE.MathUtils.clamp(((lx-s.ax)*vx+(lz-s.az)*vz)/(vx*vx+vz*vz||1),0,1);
      if(Math.hypot(lx-s.ax-t*vx,lz-s.az-t*vz)<1.1)return true;
    }
    return false;
  };
  const camera=(px:number,pz:number)=>room.camera(px,pz).add(new THREE.Vector3(0,floor,0));
  const addIceberg=(iceberg:THREE.Group)=>{
    iceberg.name='Малый багровый айсберг — место будущего осколка';
    const bounds=new THREE.Box3().setFromObject(iceberg),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
    const scale=11/Math.max(size.x,size.z,.001);
    iceberg.scale.setScalar(scale);
    iceberg.position.set(-1-center.x*scale,-bounds.min.y*scale,-9-center.z*scale);
    iceberg.updateMatrixWorld(true);
    const crimson=new THREE.Color('#9b163b'),ice=new THREE.Color('#d5efff');
    iceberg.traverse(object=>{
      if(!(object instanceof THREE.Mesh))return;
      const geometry=object.geometry,p=geometry.getAttribute('position');
      const colors=new Float32Array(p.count*3);
      for(let i=0;i<p.count;i++){
        const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(object.matrixWorld);
        const nx=(v.x+1)/5.5,nz=(v.z+9)/5.5,ny=v.y/Math.max(size.y*scale,.001);
        // Two irregular crimson patches leave most of the original ice blue.
        const a=Math.hypot((nx-.4)/.5,(nz+.1)/.65,(ny-.55)/.8);
        const b=Math.hypot((nx+.55)/.38,(nz-.4)/.5,(ny-.3)/.65);
        const edge=Math.min(a,b)+.12*Math.sin(v.x*2.2+v.y*1.8)*Math.sin(v.z*2);
        const tint=ice.clone().lerp(crimson,1-THREE.MathUtils.smoothstep(edge,.72,1.05));
        tint.toArray(colors,i*3);
      }
      geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
      const materials=Array.isArray(object.material)?object.material:[object.material];
      const tinted=materials.map(material=>{
        const m=material.clone() as THREE.MeshStandardMaterial;
        m.vertexColors=true;m.color.set('#ffffff');m.needsUpdate=true;return m;
      });
      object.material=Array.isArray(object.material)?tinted:tinted[0];
      object.castShadow=true;object.receiveShadow=true;
      // Respect the open centre: collision follows ice walls rather than a solid box.
      const index=geometry.getIndex(),count=index?.count??p.count;
      for(let i=0;i<count;i+=3){
        const vertices=[0,1,2].map(k=>new THREE.Vector3().fromBufferAttribute(p,index?index.getX(i+k):i+k).applyMatrix4(object.matrixWorld));
        const hit:THREE.Vector3[]=[];
        for(let e=0;e<3;e++){
          const a=vertices[e],b=vertices[(e+1)%3];
          if((a.y<1.8)!==(b.y<1.8))hit.push(a.clone().lerp(b,(1.8-a.y)/(b.y-a.y)));
        }
        if(hit.length===2)addSegment(hit[0],hit[1]);
      }
    });
    root.add(iceberg);
  };
  return {root,inside,groundY,blocked,camera,addIceberg};
}
