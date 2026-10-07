import * as THREE from 'three';

// Katie Alois, Ice Castles NY; Svenja, Ice Glacier. Both CC BY 4.0.
export function createRootsIceCave(walls:THREE.Group,roof:THREE.Group,x:number,z:number,ground:(x:number,z:number)=>number){
  const floor=ground(x,z)-.2;
  const root=new THREE.Group();root.name='Ледяная пещера вокруг корней';root.position.set(x,floor,z);
  // Keep the broad footprint, but fit a low ceiling instead of a 38-unit tower.
  const wallHeight=14.8;
  walls.scale.set(18,1,18);walls.updateMatrixWorld(true);
  const wallBounds=new THREE.Box3().setFromObject(walls);
  walls.scale.y=wallHeight/Math.max(wallBounds.max.y-wallBounds.min.y,.001);
  walls.position.y=-wallBounds.min.y*walls.scale.y;walls.updateMatrixWorld(true);
  const segments:{ax:number;az:number;bx:number;bz:number}[]=[];
  const buckets=new Map<string,number[]>();
  const cell=4;
  const addSegment=(a:THREE.Vector3,b:THREE.Vector3)=>{
    const i=segments.push({ax:a.x,az:a.z,bx:b.x,bz:b.z})-1;
    for(let ix=Math.floor(Math.min(a.x,b.x)/cell);ix<=Math.floor(Math.max(a.x,b.x)/cell);ix++)for(let iz=Math.floor(Math.min(a.z,b.z)/cell);iz<=Math.floor(Math.max(a.z,b.z)/cell);iz++){
      const key=`${ix},${iz}`;const list=buckets.get(key)??[];list.push(i);buckets.set(key,list);
    }
  };
  walls.traverse(object=>{
    if(!(object instanceof THREE.Mesh))return;
    const geometry=object.geometry.clone(),positions=geometry.getAttribute('position'),index=geometry.getIndex();
    const keep:number[]=[];
    const count=index?.count??positions.count;
    for(let i=0;i<count;i+=3){
      const ids=[0,1,2].map(k=>index?index.getX(i+k):i+k);
      const p=ids.map(id=>new THREE.Vector3().fromBufferAttribute(positions,id).applyMatrix4(object.matrixWorld));
      const center=p[0].clone().add(p[1]).add(p[2]).multiplyScalar(1/3);
      // A broad south-facing doorway, over twice the hero's height.
      if(Math.abs(center.x)<9.5&&center.z>11&&center.y<11.5)continue;
      keep.push(...ids);
      const intersections:THREE.Vector3[]=[];
      for(let e=0;e<3;e++){
        const a=p[e],b=p[(e+1)%3];
        if((a.y<3.3)!==(b.y<3.3))intersections.push(a.clone().lerp(b,(3.3-a.y)/(b.y-a.y)));
      }
      if(intersections.length===2)addSegment(intersections[0],intersections[1]);
    }
    geometry.setIndex(keep);geometry.computeBoundingSphere();object.geometry.dispose();object.geometry=geometry;
    object.castShadow=true;object.receiveShadow=true;
  });
  roof.scale.set(14.5,1,17);roof.updateMatrixWorld(true);
  const roofBounds=new THREE.Box3().setFromObject(roof);
  roof.scale.y=1.3/Math.max(roofBounds.max.y-roofBounds.min.y,.001);
  roof.position.set(0,wallHeight-.6-roofBounds.min.y*roof.scale.y,0);roof.name='Ледяной свод';
  roof.traverse(object=>{if(object instanceof THREE.Mesh){object.castShadow=true;object.receiveShadow=true;}});
  root.add(walls,roof);
  const light=new THREE.PointLight('#a9ddff',95,70,2);light.position.set(0,10,8);root.add(light);
  const inside=(px:number,pz:number)=>Math.hypot((px-x)/23,(pz-z)/22)<1;
  const groundY=(px:number,pz:number)=>{
    const radius=Math.hypot((px-x)/29,(pz-z)/28);
    if(radius>=1.18)return undefined;
    const t=THREE.MathUtils.smoothstep(radius,1,1.18);
    return THREE.MathUtils.lerp(floor,ground(px,pz),t);
  };
  const blocked=(px:number,pz:number)=>{
    const lx=px-x,lz=pz-z,ix=Math.floor(lx/cell),iz=Math.floor(lz/cell);
    for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++)for(const id of buckets.get(`${ix+dx},${iz+dz}`)??[]){
      const s=segments[id],vx=s.bx-s.ax,vz=s.bz-s.az;
      const t=THREE.MathUtils.clamp(((lx-s.ax)*vx+(lz-s.az)*vz)/(vx*vx+vz*vz||1),0,1);
      if(Math.hypot(lx-s.ax-t*vx,lz-s.az-t*vz)<1.1)return true;
    }
    return false;
  };
  const camera=(px:number,pz:number)=>new THREE.Vector3(THREE.MathUtils.clamp(px,x-13,x+13),floor+9,THREE.MathUtils.clamp(pz+12,z-14,z+21));
  return {root,inside,groundY,blocked,camera};
}
