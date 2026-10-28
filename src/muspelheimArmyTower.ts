import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
export const ARMY_TOWER_ASSET='Muspelheim_Surt_Army_Tower.glb';
export const ARMY_TOWER_POSITION={x:300,z:-110};
export const ARMY_TOWER_HEIGHT=100;
export const ARMY_TOWER_YAW=0;
export const ARMY_TOWER_CREDIT={title:'Steps to erewhon',author:'local.yany',url:'https://sketchfab.com/3d-models/steps-to-erewhon-d454558505bf485f877dfae1fc9b5817'};
/** The commander's residence sits inside the rear court, with its staircase facing the parade ground. */
export function createArmyTower(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);const original=new THREE.Box3().setFromObject(model),center=original.getCenter(new THREE.Vector3()),scale=ARMY_TOWER_HEIGHT/(original.max.y-original.min.y);
 const offset=new THREE.Group();offset.position.set(-center.x,-original.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);
 const root=new THREE.Group();root.name='Резиденция Владыки Пепельного легиона';root.position.set(ARMY_TOWER_POSITION.x,groundY-2.8,ARMY_TOWER_POSITION.z);root.rotation.y=ARMY_TOWER_YAW;root.add(fit);root.updateWorldMatrix(true,true);
 const leaves:THREE.Object3D[]=[];model.traverse(o=>{if(/^steDoor0[12]$/.test(o.name))leaves.push(o);if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.metalness=0;m.roughness=.96;m.color.set('#b2aaa4');}}});
 const floorVertices:number[]=[],points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()],normal=new THREE.Vector3(),edge=new THREE.Vector3();
 type Triangle={v:THREE.Vector3[];low:number;high:number};const cells=new Map<string,Triangle[]>(),cellSize=5;
 const doorBounds=new THREE.Box3();for(const leaf of leaves)doorBounds.union(new THREE.Box3().setFromObject(leaf));
 const landingY=doorBounds.min.y-.3;
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){for(let k=0;k<3;k++)points[k].fromBufferAttribute(p,ids?ids.getX(i+k):i+k).applyMatrix4(o.matrixWorld);
   normal.crossVectors(edge.subVectors(points[1],points[0]),normal.subVectors(points[2],points[0])).normalize();
   const low=Math.min(...points.map(v=>v.y)),high=Math.max(...points.map(v=>v.y));
   // Roofs and parapets cannot become walking surfaces.
   if(normal.y>.4&&high<=landingY+3&&/Steps|Rocks|Terrain|WoodFloor/i.test(o.name))floorVertices.push(...points.flatMap(v=>v.toArray()));
   if(Math.abs(normal.y)>.72)continue;
   const triangle={v:points.map(v=>v.clone()),low,high};
   for(let x=Math.floor(Math.min(...points.map(v=>v.x))/cellSize);x<=Math.floor(Math.max(...points.map(v=>v.x))/cellSize);x++)for(let z=Math.floor(Math.min(...points.map(v=>v.z))/cellSize);z<=Math.floor(Math.max(...points.map(v=>v.z))/cellSize);z++){const key=`${x},${z}`,bucket=cells.get(key);if(bucket)bucket.push(triangle);else cells.set(key,[triangle]);}
  }
 });
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(floorVertices,3));const floorMesh=new THREE.Mesh(geometry),floorAt=createMeshHeightSampler(floorMesh);geometry.dispose();(floorMesh.material as THREE.Material).dispose();
 const bounds=new THREE.Box3().setFromObject(root),roofAt=createMeshHeightSampler(root);
 const blocks=(x:number,z:number,footY:number,padding=2)=>{
  if(x<bounds.min.x-padding||x>bounds.max.x+padding||z<bounds.min.z-padding||z>bounds.max.z+padding||footY>bounds.max.y)return false;
  const candidates=new Set<Triangle>();for(let cx=Math.floor((x-padding)/cellSize);cx<=Math.floor((x+padding)/cellSize);cx++)for(let cz=Math.floor((z-padding)/cellSize);cz<=Math.floor((z+padding)/cellSize);cz++)for(const t of cells.get(`${cx},${cz}`)??[])candidates.add(t);
  for(const t of candidates)for(const y of [footY+4.5,footY+10]){if(y<t.low||y>t.high)continue;const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=t.v[k],b=t.v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cuts.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cuts.length!==2)continue;const [a,b]=cuts,dx=b.x-a.x,dz=b.z-a.z,f=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/Math.max(1e-8,dx*dx+dz*dz),0,1);if(Math.hypot(x-a.x-f*dx,z-a.z-f*dz)<padding)return true;}
  return false;
 };
 const doorCenter=doorBounds.getCenter(new THREE.Vector3());
 const nearDoor=(x:number,z:number,y:number)=>Math.hypot(x-doorCenter.x,z-doorCenter.z)<12&&Math.abs(y-landingY)<4;
 return {root,bounds,leaves,doorBounds,landingY,floorAt,roofAt,blocks,nearDoor};
}
