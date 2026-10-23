import * as THREE from 'three';
import {createMeshHeightSampler} from './muspelheimSurface';
export const ICE_SANCTUARY_ASSET='Muspelheim_Ice_Sanctuary.glb';
export const ICE_SANCTUARY_POSITION={x:-444,z:15};
export const ICE_SANCTUARY_SIZE={width:96,height:70,depth:52};
export const ICE_SANCTUARY_CREDIT={title:'Masonic Temple from a George Washington painting',author:'timantworms',url:'https://sketchfab.com/3d-models/masonic-temple-from-a-george-washington-painting-08c8b2852ead4e0c871136235f793f6a'};
export function iceSanctuaryContains(x:number,z:number,margin=0){return Math.abs(x-ICE_SANCTUARY_POSITION.x)<50+margin&&Math.abs(z-ICE_SANCTUARY_POSITION.z)<28+margin;}
export function recoverInIceSanctuary(hp:number,maxHp:number,seconds=1){return hp<=0?0:Math.min(maxHp,hp+Math.max(1,Math.ceil(maxHp*.05))*Math.max(0,seconds));}
export function createIceSanctuary(model:THREE.Object3D,groundY=0){
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);
 const fit=new THREE.Group();fit.scale.set(96/size.x,70/size.y,52/size.z);fit.add(offset);
 const root=new THREE.Group();root.name='Ледяное святилище у западной стены';root.position.set(ICE_SANCTUARY_POSITION.x,groundY-4.8,ICE_SANCTUARY_POSITION.z);root.rotation.y=Math.PI;root.add(fit);root.updateWorldMatrix(true,true);
 const materials=new Map<THREE.Material,THREE.MeshStandardMaterial>();
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;o.geometry.computeVertexNormals();o.receiveShadow=true;const apply=(source:THREE.Material)=>{if(materials.has(source))return materials.get(source)!;const m=(source as THREE.MeshStandardMaterial).clone();m.color.set('#a0d7f0');m.metalness=.05;m.roughness=.38;m.emissive.set('#3286ad');m.emissiveIntensity=.3;
  m.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 icePosition;varying vec3 iceNormal;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    icePosition=(modelMatrix*vec4(position,1.)).xyz;iceNormal=normalize(mat3(modelMatrix)*normal);
   `);
   shader.fragmentShader='varying vec3 icePosition;varying vec3 iceNormal;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
    vec3 ip=icePosition;
    float vein=pow(.5+.5*sin(ip.y*1.9+sin(ip.x*.7+ip.z*.8)*2.2),18.);
    float grain=.5+.5*sin(ip.x*9.1+sin(ip.z*8.4)+ip.y*11.3);
    float frost=clamp(smoothstep(.2,.85,iceNormal.y)*.8+grain*.15,0.,1.);
    diffuseColor.rgb=mix(vec3(.15,.46,.67),vec3(.77,.92,1.),frost);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.64,.89,1.),vein*.45);
    roughnessFactor=mix(.28,.85,frost);
   `);
   shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
    float iceEdge=pow(1.-abs(dot(normal,normalize(vViewPosition))),3.);
    totalEmissiveRadiance+=vec3(.035,.16,.24)+iceEdge*vec3(.08,.3,.42);
   `);
  };m.customProgramCacheKey=()=> 'muspelheim-frosted-ice-sanctuary-v1';materials.set(source,m);return m;};o.material=Array.isArray(o.material)?o.material.map(apply):apply(o.material);});
 type Tri={v:THREE.Vector3[];lo:number;hi:number};const walls=new Map<string,Tri[]>(),floor:number[]=[],a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),ids=o.geometry.index,count=ids?.count??p.count;
  for(let i=0;i<count;i+=3){a.fromBufferAttribute(p,ids?ids.getX(i):i).applyMatrix4(o.matrixWorld);b.fromBufferAttribute(p,ids?ids.getX(i+1):i+1).applyMatrix4(o.matrixWorld);c.fromBufferAttribute(p,ids?ids.getX(i+2):i+2).applyMatrix4(o.matrixWorld);const n=b.clone().sub(a).cross(c.clone().sub(a)).normalize(),lo=Math.min(a.y,b.y,c.y),hi=Math.max(a.y,b.y,c.y);
   if(n.y>.5&&hi<groundY+25)floor.push(...a.toArray(),...b.toArray(),...c.toArray());
   if(Math.abs(n.y)>.6||hi<groundY+1)continue;const tri={v:[a.clone(),b.clone(),c.clone()],lo,hi};
   for(let x=Math.floor((Math.min(a.x,b.x,c.x)-3)/4);x<=Math.floor((Math.max(a.x,b.x,c.x)+3)/4);x++)for(let z=Math.floor((Math.min(a.z,b.z,c.z)-3)/4);z<=Math.floor((Math.max(a.z,b.z,c.z)+3)/4);z++){const key=`${x},${z}`,list=walls.get(key);if(list)list.push(tri);else walls.set(key,[tri]);}
  }
 });
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(floor,3));const mesh=new THREE.Mesh(geo),floorAt=createMeshHeightSampler(mesh);geo.dispose();(mesh.material as THREE.Material).dispose();
 const blocks=(x:number,z:number,footY:number,radius=2)=>{if(!iceSanctuaryContains(x,z))return false;for(const t of walls.get(`${Math.floor(x/4)},${Math.floor(z/4)}`)??[]){if(t.hi<footY+4.5||t.lo>footY+14)continue;for(const y of [footY+4.5,footY+9,footY+13]){const cuts:THREE.Vector3[]=[];for(let k=0;k<3;k++){const a=t.v[k],b=t.v[(k+1)%3];if((a.y<=y&&b.y>y)||(b.y<=y&&a.y>y))cuts.push(a.clone().lerp(b,(y-a.y)/(b.y-a.y)));}if(cuts.length!==2)continue;const [a,b]=cuts,dx=b.x-a.x,dz=b.z-a.z,q=THREE.MathUtils.clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz||1),0,1);if(Math.hypot(x-a.x-dx*q,z-a.z-dz*q)<radius)return true;}}return false;};
 const resting=(x:number,z:number,y:number)=>{const floor=floorAt(x,z);return iceSanctuaryContains(x,z)&&floor!=null&&Math.abs(y-Math.max(groundY,floor))<1;};
 return {root,floorAt,blocks,resting};
}
