import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
export const YMIR_PILLAR_ASSET='Muspelheim_Ymir_Memory_Pillar.glb';
export const YMIR_PILLAR_POSITION={x:-120,z:25};
export const YMIR_PILLAR_HEIGHT=64;
export const YMIR_PILLAR_CREDIT={title:'Fire Pillar',author:'Lazanja',url:'https://sketchfab.com/3d-models/fire-pillar-c1cf417e440f411aae02c28d61ec2cc5'};
/** Monument of Ymir's lost memory, with open ground reserved around it for a future trial. */
export function createYmirMemoryPillar(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);const original=new THREE.Box3().setFromObject(model),center=original.getCenter(new THREE.Vector3()),scale=YMIR_PILLAR_HEIGHT/(original.max.y-original.min.y);
 const offset=new THREE.Group();offset.position.set(-center.x,-original.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.add(offset);
 const root=new THREE.Group();root.name='Утраченная память Имира';root.position.set(YMIR_PILLAR_POSITION.x,groundY-.5,YMIR_PILLAR_POSITION.z);root.add(fit);root.updateWorldMatrix(true,true);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.roughness=.85;m.metalness=0;if(m.map)m.map.anisotropy=4;}}});
 const points=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()],normal=new THREE.Vector3(),edge=new THREE.Vector3();
 type Triangle={v:THREE.Vector3[];low:number;high:number};const cells=new Map<string,Triangle[]>(),cellSize=5;
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){for(let k=0;k<3;k++)points[k].fromBufferAttribute(p,ids?ids.getX(i+k):i+k).applyMatrix4(o.matrixWorld);
   normal.crossVectors(edge.subVectors(points[1],points[0]),normal.subVectors(points[2],points[0])).normalize();
   const low=Math.min(...points.map(v=>v.y)),high=Math.max(...points.map(v=>v.y));
   if(Math.abs(normal.y)>.72)continue;
   const triangle={v:points.map(v=>v.clone()),low,high};
   for(let x=Math.floor(Math.min(...points.map(v=>v.x))/cellSize);x<=Math.floor(Math.max(...points.map(v=>v.x))/cellSize);x++)for(let z=Math.floor(Math.min(...points.map(v=>v.z))/cellSize);z<=Math.floor(Math.max(...points.map(v=>v.z))/cellSize);z++){const key=`${x},${z}`,bucket=cells.get(key);if(bucket)bucket.push(triangle);else cells.set(key,[triangle]);}
  }
 });
 const bounds=new THREE.Box3().setFromObject(root),roofAt=createMeshHeightSampler(root);
 const blocks=(x:number,z:number,footY:number,padding=2)=>{
  if(x<bounds.min.x-padding||x>bounds.max.x+padding||z<bounds.min.z-padding||z>bounds.max.z+padding||footY>bounds.max.y)return false;
  const candidates=new Set<Triangle>();for(let cx=Math.floor((x-padding)/cellSize);cx<=Math.floor((x+padding)/cellSize);cx++)for(let cz=Math.floor((z-padding)/cellSize);cz<=Math.floor((z+padding)/cellSize);cz++)for(const t of cells.get(`${cx},${cz}`)??[])candidates.add(t);
  for(const t of candidates)for(const y of [footY+4.5,footY+10,footY+13.5]){if(y<t.low||y>t.high)continue;const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=t.v[k],b=t.v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cuts.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cuts.length!==2)continue;const [a,b]=cuts,dx=b.x-a.x,dz=b.z-a.z,f=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/Math.max(1e-8,dx*dx+dz*dz),0,1);if(Math.hypot(x-a.x-f*dx,z-a.z-f*dz)<padding)return true;}
  return false;
 };
 return {root,bounds,roofAt,blocks};
}
