import * as THREE from 'three';
import type {createJotunheimTerrain} from './jotunheimTerrain';
export const JOTUNHEIM_GATEWAY_ASSET='Jotunheim_Giant_Gateway.glb';
export const GATEWAY_SITE={x:-140,z:180};
export const GATEWAY_VIEW={x:-140,z:286};
const EDGES=[927,939,951,965,980,996,1013,1031,1051,1072,1094,1118,1143,1170,1199,1231,1253];
const TREAD=5.4,LENGTH=16*TREAD,LANDING=32.6;
const smooth=(n:number)=>{const t=THREE.MathUtils.clamp(n,0,1);return t*t*(3-2*t);};
/** Align the entrance to a rising slope and clear the stone stairs and doorway. */
export function installJotunheimGateway(model:THREE.Object3D,terrain:ReturnType<typeof createJotunheimTerrain>){
 const baseY=terrain.height(GATEWAY_SITE.x,GATEWAY_SITE.z+LENGTH)??0;
 model.position.set(GATEWAY_SITE.x,baseY,GATEWAY_SITE.z);model.updateMatrixWorld(true);
 const point=new THREE.Vector3(),inverse=new THREE.Matrix4();
 terrain.root.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  inverse.copy(object.matrixWorld).invert();const positions=object.geometry.getAttribute('position');
  for(let i=0;i<positions.count;i++){
   point.fromBufferAttribute(positions,i).applyMatrix4(object.matrixWorld);const x=point.x-GATEWAY_SITE.x,z=point.z-GATEWAY_SITE.z;
   if(z< -50||z>LENGTH+30||Math.abs(x)>100)continue;
   const width=z<0?64:36+THREE.MathUtils.clamp(z/LENGTH,0,1)*26;
   const blend=smooth((width+28-Math.abs(x))/28)*smooth((z+50)/24)*smooth((LENGTH+30-z)/22);
   if(blend<=0)continue;
   const target=baseY+(z<0?LANDING:LANDING*(1-THREE.MathUtils.clamp(z/LENGTH,0,1)))-.35;
   point.y=THREE.MathUtils.lerp(point.y,target,blend);point.applyMatrix4(inverse);positions.setXYZ(i,point.x,point.y,point.z);
  }
  positions.needsUpdate=true;object.geometry.computeVertexNormals();object.geometry.computeBoundingBox();object.geometry.computeBoundingSphere();
 });
 terrain.rebuild();
 const local=(x:number,z:number)=>({x:x-GATEWAY_SITE.x,z:z-GATEWAY_SITE.z});
 function height(x:number,z:number):number|null{
  const p=local(x,z);
  if(p.z>=0&&p.z<LENGTH&&Math.abs(p.x)<25.5+p.z*.30-2){const step=Math.min(15,Math.floor(p.z/TREAD));return baseY+(1253-EDGES[step])*.1;}
  if(p.z>=-22&&p.z<=0&&Math.abs(p.x)<13)return baseY+LANDING;
  return terrain.height(x,z);
 }
 function blocks(x:number,z:number){
  const p=local(x,z),ax=Math.abs(p.x);
  if(p.z>=-10&&p.z<=10&&ax>=13&&ax<=65)return true;
  if(p.z>=0&&p.z<=LENGTH){const edge=25.5+p.z*.30;return ax>=edge-2&&ax<=edge+10;}
  return false;
 }
 function onStairs(x:number,z:number){const p=local(x,z);return p.z>=-22&&p.z<=LENGTH+2&&Math.abs(p.x)<58;}
 return {root:model,height,blocks,onStairs,baseY};
}
