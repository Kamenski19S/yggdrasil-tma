import * as THREE from 'three';
import {mineFrameAt,MINE_ROUTE_LENGTH} from './ashMinePath';
export const MINE_CRYSTAL_FILES=['Ash_Mine_Fluorite.glb','Ash_Mine_Rubies.glb','Ash_Mine_Crystal.glb','Ash_Mine_Red_Crystal.glb'];
const colors=['#a280e8','#ed3e76','#69cde9','#ff6955'];
type Deposit={position:THREE.Vector3;normal:THREE.Vector3;kind:number;size:number;surface:'floor'|'wall'|'ceiling'};
/** Static shared geometry, depth-tested halos and a small pool of nearby lights. */
export function createMineCrystals(sources:THREE.Object3D[],vault:THREE.Object3D,chamber:THREE.Object3D,floorAt:(x:number,z:number)=>number){
 const root=new THREE.Group();root.name='Кристаллы пола, стен и свода';const deposits:Deposit[]=[];
 vault.updateWorldMatrix(true,true);chamber.updateWorldMatrix(true,true);
 const ray=new THREE.Raycaster();
 const attach=(center:THREE.Vector3,direction:THREE.Vector3,kind:number,size:number,surface:Deposit['surface'],hall=false)=>{
  ray.set(center,direction.clone().normalize());ray.near=.1;ray.far=hall?85:40;
  const hits=ray.intersectObject(vault,true).concat(hall?ray.intersectObject(chamber,true):[]).sort((a,b)=>a.distance-b.distance);
  const hit=hits.find(h=>h.object instanceof THREE.Mesh&&h.distance>4);if(!hit)return;
  // Grow from the rock back toward the open space. Sink the base to conceal the join.
  const normal=direction.clone().normalize().negate();deposits.push({position:hit.point.clone(),normal,kind,size,surface});
 };
 for(let i=0,s=20;s<MINE_ROUTE_LENGTH-8;s+=15,i++){
  const f=mineFrameAt(s),side=i%2?1:-1,kind=i%4;
  const x=f.x+f.nx*side*(11.7+.5*Math.sin(i*2.3)),z=f.z+f.nz*side*(11.7+.5*Math.sin(i*2.3));
  deposits.push({position:new THREE.Vector3(x,floorAt(x,z),z),normal:new THREE.Vector3(0,1,0),kind,size:2.4+(i%3)*.65,surface:'floor'});
  attach(new THREE.Vector3(f.x,floorAt(f.x,f.z)+7,f.z),new THREE.Vector3(f.nx*side,.18+(i%3)*.17,f.nz*side),(kind+1)%4,3.2+(i%3)*.7,'wall');
  if(i%2===0)attach(new THREE.Vector3(f.x,8,f.z),new THREE.Vector3(f.nx*side*.2,1,f.nz*side*.2),(Math.floor(i/2)+2)%4,3.6+(i%3)*.6,'ceiling');
 }
 for(let i=0;i<16;i++){
  const z=-252-i*7.8,side=i%2?1:-1,center=new THREE.Vector3(24,12,z);
  attach(center,new THREE.Vector3(side,.2+(i%3)*.15,0),i%4,4+(i%3),'wall',true);
  if(i%2===0)attach(center,new THREE.Vector3(side*.22,1,0),(Math.floor(i/2)+1)%4,4.5,'ceiling',true);
  const x=24+side*(25+i%3*3),y=floorAt(x,z);if(Number.isFinite(y))deposits.push({position:new THREE.Vector3(x,y,z),normal:new THREE.Vector3(0,1,0),kind:(i+1)%4,size:3.1,surface:'floor'});
 }
 for(const deposit of deposits)deposit.size*=.5;
 const up=new THREE.Vector3(0,1,0),matrix=new THREE.Matrix4(),rotation=new THREE.Quaternion();
 for(let kind=0;kind<sources.length;kind++){
  const source=sources[kind];source.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(source),center=box.getCenter(new THREE.Vector3()),height=Math.max(.001,box.max.y-box.min.y),list=deposits.filter(d=>d.kind===kind);
  source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
   const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);geometry.translate(-center.x,-box.min.y,-center.z);geometry.scale(1/height,1/height,1/height);
   const materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>{
    const material=m instanceof THREE.MeshStandardMaterial?m.clone():new THREE.MeshStandardMaterial({map:(m as THREE.MeshBasicMaterial).map,color:(m as THREE.MeshBasicMaterial).color});
    material.emissive.set(colors[kind]);material.emissiveIntensity=kind===0?.25:.7;if(!material.emissiveMap&&material.map)material.emissiveMap=material.map;
    material.metalness=Math.min(material.metalness,.25);material.roughness=Math.max(material.roughness,.45);return material;
   });
   const mesh=new THREE.InstancedMesh(geometry,Array.isArray(o.material)?materials:materials[0],list.length);mesh.name='Вкрапления '+MINE_CRYSTAL_FILES[kind];mesh.raycast=()=>{};
   list.forEach((d,i)=>{rotation.setFromUnitVectors(up,d.normal);rotation.multiply(new THREE.Quaternion().setFromAxisAngle(up,i*2.399));matrix.compose(d.position.clone().addScaledVector(d.normal,-d.size*.22),rotation,new THREE.Vector3(d.size,d.size,d.size));mesh.setMatrixAt(i,matrix);});mesh.computeBoundingSphere();root.add(mesh);
  });
 }
 // Radial alpha instead of a solid disc; depth test keeps the halo behind opaque cave walls.
 const pixels=new Uint8Array(32*32*4);for(let y=0;y<32;y++)for(let x=0;x<32;x++){const i=(y*32+x)*4,r=Math.hypot((x-15.5)/15.5,(y-15.5)/15.5);pixels[i]=pixels[i+1]=pixels[i+2]=255;pixels[i+3]=Math.round(Math.max(0,1-r)**2*100);}
 const halo=new THREE.DataTexture(pixels,32,32);halo.needsUpdate=true;
 for(let kind=0;kind<4;kind++){const points=deposits.filter(d=>d.kind===kind).flatMap(d=>d.position.clone().addScaledVector(d.normal,d.size*.3).toArray()),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));const glow=new THREE.Points(geometry,new THREE.PointsMaterial({color:colors[kind],map:halo,size:4.5,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:true}));glow.raycast=()=>{};glow.name='Мягкое сияние кристаллов';root.add(glow);}
 const lights=Array.from({length:3},()=>{const light=new THREE.PointLight('#ffffff',0,18,1.6);root.add(light);return light;});
 const update=(hero:THREE.Vector3)=>{const nearest=deposits.map(d=>({d,distance:d.position.distanceToSquared(hero)})).sort((a,b)=>a.distance-b.distance);lights.forEach((light,i)=>{const next=nearest[i];if(!next||next.distance>55*55){light.intensity=0;return;}const d=next.d;light.position.copy(d.position).addScaledVector(d.normal,2);light.color.set(colors[d.kind]);light.intensity=24;});};
 return {root,deposits,lights,update};
}
