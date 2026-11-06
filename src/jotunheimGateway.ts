import * as THREE from 'three';
import type {createJotunheimTerrain} from './jotunheimTerrain';
export const JOTUNHEIM_GATEWAY_ASSET='Jotunheim_Giant_Gateway.glb';
export const GATEWAY_SITE={x:-140,z:465};
export const GATEWAY_VIEW={x:-140,z:559};
// Reduce the arch while retaining deep treads for Vicki's feet.
export const GATEWAY_SCALE={x:.42,y:.42,z:.8};
const EDGES=[927,939,951,965,980,996,1013,1031,1051,1072,1094,1118,1143,1170,1199,1231,1253];
const TREAD=5.4,LENGTH=16*TREAD,LANDING=32.6*GATEWAY_SCALE.y;
const smooth=(n:number)=>{const t=THREE.MathUtils.clamp(n,0,1);return t*t*(3-2*t);};
// The source mountain has large triangles. Add vertices only around the entrance,
// preserving interpolated UVs, so the visible ground can hold a level terrace.
function refineEntrance(mesh:THREE.Mesh){
 const source=mesh.geometry,entries=Object.entries(source.attributes),offsets:number[]=[];
 let stride=0;for(const [,attribute] of entries){offsets.push(stride);stride+=attribute.itemSize;}
 const output:number[][]=entries.map(()=>[]),world=new THREE.Vector3();
 const vertex=(index:number)=>{const values:number[]=[];for(const [,a] of entries)for(let c=0;c<a.itemSize;c++)values.push(a.getComponent(index,c));return values;};
 const pi=offsets[entries.findIndex(([name])=>name==='position')];
 const position=(v:number[])=>world.set(v[pi],v[pi+1],v[pi+2]).applyMatrix4(mesh.matrixWorld).clone();
 const emit=(v:number[])=>entries.forEach(([,a],i)=>{for(let c=0;c<a.itemSize;c++)output[i].push(v[offsets[i]+c]);});
 function triangle(a:number[],b:number[],c:number[],depth=0){
  const p=[position(a),position(b),position(c)],xs=p.map(v=>v.x-GATEWAY_SITE.x),zs=p.map(v=>v.z-GATEWAY_SITE.z);
  const nearby=Math.min(...xs)<60&&Math.max(...xs)>-60&&Math.min(...zs)<105&&Math.max(...zs)>-235;
  const lengths=p.map((v,i)=>{const w=p[(i+1)%3];return (v.x-w.x)**2+(v.z-w.z)**2;}),edge=lengths.indexOf(Math.max(...lengths));
  if(nearby&&lengths[edge]>16&&depth<20){
   const vs=[a,b,c],u=vs[edge],v=vs[(edge+1)%3],w=vs[(edge+2)%3],mid=u.map((n,i)=>(n+v[i])/2);
   triangle(u,mid,w,depth+1);triangle(mid,v,w,depth+1);
  }else{emit(a);emit(b);emit(c);}
 }
 const result=new THREE.BufferGeometry(),count=source.index?.count??source.getAttribute('position').count;
 for(const group of source.groups.length?source.groups:[{start:0,count,materialIndex:0}]){
  const start=output[0].length/entries[0][1].itemSize;
  for(let i=group.start;i<group.start+group.count;i+=3)triangle(...[0,1,2].map(j=>vertex(source.index?source.index.getX(i+j):i+j)) as [number[],number[],number[]]);
  result.addGroup(start,output[0].length/entries[0][1].itemSize-start,group.materialIndex);
 }
 entries.forEach(([name,a],i)=>result.setAttribute(name,new THREE.Float32BufferAttribute(output[i],a.itemSize)));
 mesh.geometry=result;source.dispose();
}
/** Shape the actual textured GLB into stairs, a rear landing and a gradual hill exit. */
export function installJotunheimGateway(model:THREE.Object3D,terrain:ReturnType<typeof createJotunheimTerrain>){
 const baseY=terrain.height(GATEWAY_SITE.x,GATEWAY_SITE.z+LENGTH*GATEWAY_SCALE.z)??0;
 model.scale.set(GATEWAY_SCALE.x,GATEWAY_SCALE.y,GATEWAY_SCALE.z);
 model.position.set(GATEWAY_SITE.x,baseY,GATEWAY_SITE.z);model.updateMatrixWorld(true);
 const local=(x:number,z:number)=>({x:(x-GATEWAY_SITE.x)/GATEWAY_SCALE.x,z:(z-GATEWAY_SITE.z)/GATEWAY_SCALE.z});
 const point=new THREE.Vector3(),inverse=new THREE.Matrix4();
 terrain.root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  refineEntrance(object);
  inverse.copy(object.matrixWorld).invert();const positions=object.geometry.getAttribute('position');
  for(let i=0;i<positions.count;i++){
   point.fromBufferAttribute(positions,i).applyMatrix4(object.matrixWorld);const {x,z}=local(point.x,point.z);
   if(z< -280||z>LENGTH+36||Math.abs(x)>110)continue;
   const width=z<0?44:40+THREE.MathUtils.clamp(z/LENGTH,0,1)*26;
   // A level landing continues behind the arch; farther downhill it merges into the original hill.
   const blend=smooth((width+36-Math.abs(x))/36)*smooth((z+280)/190)*smooth((LENGTH+36-z)/28);
   if(blend<=0)continue;
   const target=baseY+(z<0?LANDING:LANDING*(1-THREE.MathUtils.clamp(z/LENGTH,0,1))-.5);
   point.y=THREE.MathUtils.lerp(point.y,target,blend);point.applyMatrix4(inverse);positions.setXYZ(i,point.x,point.y,point.z);
  }
  positions.needsUpdate=true;object.geometry.computeVertexNormals();object.geometry.computeBoundingBox();object.geometry.computeBoundingSphere();
 });
 terrain.rebuild();
 function height(x:number,z:number):number|null{
  const p=local(x,z);
  if(p.z>=0&&p.z<LENGTH&&Math.abs(p.x)<25.5+p.z*.30-2){const step=Math.min(15,Math.floor(p.z/TREAD));return baseY+(1253-EDGES[step])*.1*GATEWAY_SCALE.y;}
  // Only the real stone landing uses a flat collision surface. The rear exit follows the deformed GLB.
  if(p.z>=-8&&p.z<=0&&Math.abs(p.x)<13)return baseY+LANDING;
  return terrain.height(x,z);
 }
 function blocks(x:number,z:number){
  const p=local(x,z),ax=Math.abs(p.x);
  if(p.z>=-10&&p.z<=10&&ax>=13&&ax<=65)return true;
  if(p.z>=0&&p.z<=LENGTH){const edge=25.5+p.z*.30;return ax>=edge-2&&ax<=edge+10;}
  return false;
 }
 function onStairs(x:number,z:number){const p=local(x,z);return p.z>=-10&&p.z<=LENGTH+2&&Math.abs(p.x)<58;}
 // Blend into a wider, higher view on both sides, including the upper stairs.
 function cameraWeight(x:number,z:number){const p=local(x,z);return smooth((130-Math.abs(p.x))/65)*smooth((p.z+160)/90)*smooth((190-p.z)/65);}
 function cameraLift(x:number,z:number){return 12*cameraWeight(x,z);}
 return {root:model,height,blocks,onStairs,cameraLift,cameraWeight,baseY};
}
