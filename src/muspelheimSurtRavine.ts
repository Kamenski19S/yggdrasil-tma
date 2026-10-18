import * as THREE from 'three';

// An open, asymmetric fault from the west boundary to the rear boundary.
// The broad floor is reserved for future encounters; the volcano is on its inner bank.
const axis=new THREE.CatmullRomCurve3([
 new THREE.Vector3(-560,0,-90),new THREE.Vector3(-420,0,-100),
 new THREE.Vector3(-285,0,-120),new THREE.Vector3(-155,0,-165),
 new THREE.Vector3(-75,0,-255),new THREE.Vector3(-65,0,-365),
 new THREE.Vector3(-85,0,-495),
],false,'centripetal');
export const SURT_RAVINE_LINE=axis.getPoints(160).map(p=>({x:p.x,z:p.z}));
export const SURT_RAVINE_DEPTH=82;
export const SURT_RAVINE_SITES=[{x:-420,z:-100},{x:-315,z:-114},{x:-75,z:-255}] as const;
function distanceToAxis(x:number,z:number){
 let distance=Infinity;
 for(let i=1;i<SURT_RAVINE_LINE.length;i++){
  const a=SURT_RAVINE_LINE[i-1],b=SURT_RAVINE_LINE[i],dx=b.x-a.x,dz=b.z-a.z;
  const t=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz),0,1);
  distance=Math.min(distance,Math.hypot(x-a.x-t*dx,z-a.z-t*dz));
 }
 return distance;
}
export function surtRavineDepth(x:number,z:number){
 const d=distanceToAxis(x,z);
 const variation=4*Math.sin(x*.025+z*.011)+2*Math.sin(z*.063);
 let depth=-SURT_RAVINE_DEPTH*(1-THREE.MathUtils.smoothstep(d,32+variation,59+variation));
 // Cut a long southern approach into the bank, with tapered shoulders.
 const descent=1-THREE.MathUtils.smoothstep(Math.abs(x+365),13,30);
 if(z>=-110&&z<=30)depth=THREE.MathUtils.lerp(depth,-SURT_RAVINE_DEPTH*(1-THREE.MathUtils.smoothstep(z,-110,30)),descent);
 // A separate northern ascent leads toward the volcano after traversing the floor.
 const ascent=1-THREE.MathUtils.smoothstep(Math.abs(x+270),13,29);
 if(z<-125&&z>-230){const ramp=-SURT_RAVINE_DEPTH*THREE.MathUtils.smoothstep(z,-225,-125);depth=THREE.MathUtils.lerp(depth,ramp,ascent);}
 return depth;
}
/** Sculpt the loaded GLB and its expanded grid in world space; the live sampler
 * then uses these exact triangles for walking, including both approaches. */
export function carveSurtRavine(root:THREE.Object3D,extraDepth:(x:number,z:number)=>number=()=>0){
 root.updateWorldMatrix(true,true);
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const p=o.geometry.getAttribute('position'),v=new THREE.Vector3(),inverse=o.matrixWorld.clone().invert();
  for(let i=0;i<p.count;i++){
   v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);
   v.y+=surtRavineDepth(v.x,v.z)+extraDepth(v.x,v.z);v.applyMatrix4(inverse);p.setXYZ(i,v.x,v.y,v.z);
  }
  p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();
 });
}
/** Check actual triangle slopes so slow frames cannot let Vicki walk up cliffs. */
export function canWalkRavine(sample:(x:number,z:number)=>number|null,from:{x:number,z:number},to:{x:number,z:number}){
 if(Math.min(surtRavineDepth(from.x,from.z),surtRavineDepth(to.x,to.z))>-.1)return true;
 const length=Math.hypot(to.x-from.x,to.z-from.z),steps=Math.max(1,Math.ceil(length/.4));
 let previous=sample(from.x,from.z);if(previous==null)return false;
 for(let i=1;i<=steps;i++){
  const y=sample(THREE.MathUtils.lerp(from.x,to.x,i/steps),THREE.MathUtils.lerp(from.z,to.z,i/steps));
  if(y==null||Math.abs(y-previous)>length/steps*1.4+.002)return false;
  previous=y;
 }
 return true;
}
