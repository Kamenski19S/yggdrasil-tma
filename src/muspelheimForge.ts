import * as THREE from 'three';
export const FORGE_ASSET='Muspelheim_Forge.glb';
export const FORGE_POSITION={x:140,z:50};
export const FORGE_SCALE=1.3*.85;
export const FORGE_YAW=-Math.PI*.8;
const facingCos=Math.cos(FORGE_YAW),facingSin=Math.sin(FORGE_YAW);
export function forgeWorldPoint(x:number,z:number){return {x:FORGE_POSITION.x+FORGE_SCALE*(facingCos*x+facingSin*z),z:FORGE_POSITION.z+FORGE_SCALE*(-facingSin*x+facingCos*z)};}
export const FORGE_RETURN=forgeWorldPoint(0,36);
export const FORGE_CREDIT={title:'Fantasy Building',author:'-X-ScornGames',url:'https://sketchfab.com/3d-models/fantasybuilding-8e0fbb61f9db460f90cceff61db71522'};
/** The uploaded building has one fused shell. Separate its original wooden leaf. */
export function createMuspelheimForge(source:THREE.Object3D){
 source.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3().setFromObject(source),center=bounds.getCenter(new THREE.Vector3()),scale=50/(bounds.max.x-bounds.min.x);
 const root=new THREE.Group();root.name='Muspelheim forge';root.position.set(FORGE_POSITION.x,-.6*FORGE_SCALE,FORGE_POSITION.z);root.scale.setScalar(FORGE_SCALE);root.rotation.y=FORGE_YAW;
 const hinge=new THREE.Group();hinge.name='Original forge door hinge';hinge.position.set(-7.2*1.1,0,17.8*1.1);root.add(hinge);
 let doorTriangles=0;
 source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
  const geo=o.geometry.clone().applyMatrix4(o.matrixWorld);geo.translate(-center.x,-bounds.min.y,-center.z);geo.scale(scale,scale,scale);
  const p=geo.getAttribute('position'),ids=geo.index,solid:number[]=[],door:number[]=[],v=new THREE.Vector3();
  for(let i=0;i<(ids?.count??p.count);i+=3){const tri=[0,1,2].map(k=>ids?ids.getX(i+k):i+k);
   const leaf=tri.every(j=>{v.fromBufferAttribute(p,j);return Math.abs(v.x)<6.9&&v.y>2.5&&v.y<24&&v.z>12.8&&v.z<(v.y<11?22.5:v.y<13?19:17.8-.2*(v.y-13));});
   (leaf?door:solid).push(...tri);if(leaf)doorTriangles++;
  }
  geo.scale(1.1,1.1,1.1);
  const materials=(Array.isArray(o.material)?o.material:[o.material]).map(m=>{const material=(m as THREE.MeshStandardMaterial).clone();material.metalness=.08;material.roughness=.9;material.emissiveIntensity=.18;return material;});
  if(door.length){const leaf=geo.clone();leaf.setIndex(door);leaf.translate(-hinge.position.x,0,-hinge.position.z);leaf.computeBoundingBox();leaf.computeBoundingSphere();hinge.add(new THREE.Mesh(leaf,materials.length===1?materials[0]:materials));}
  geo.setIndex(solid);geo.computeBoundingBox();geo.computeBoundingSphere();root.add(new THREE.Mesh(geo,materials.length===1?materials[0]:materials));
  o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();
 });
 if(doorTriangles<50)throw Error('Forge wooden door could not be separated');
 const doorZ=17.8*1.1;
 const backing=new THREE.Mesh(new THREE.BoxGeometry(13.8,14.4,.3),new THREE.MeshStandardMaterial({color:'#352416',roughness:1}));backing.position.set(7.2*1.1,11,-1.2);hinge.add(backing);
 const portal=new THREE.Mesh(new THREE.PlaneGeometry(14.8,23.2),new THREE.MeshBasicMaterial({color:'#100b08',side:THREE.DoubleSide}));portal.position.set(0,14.5,17.5*1.1);portal.visible=false;root.add(portal);
 // A shallow stone approach covers the raised threshold without a large step.
 const ramp=new THREE.BufferGeometry();ramp.setAttribute('position',new THREE.Float32BufferAttribute([-7,.7,doorZ+10,7,.7,doorZ+10,-7,3,doorZ-1,7,3,doorZ-1],3));ramp.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1.4,0,0,1.1,1.4,1.1],2));ramp.setIndex([0,1,2,2,1,3]);ramp.computeVertexNormals();const rampMaterial=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:1,side:THREE.DoubleSide});const approach=new THREE.Mesh(ramp,rampMaterial);approach.name='Stone-paved forge approach';root.add(approach);
 let opening=0,requested=false;
 const local=(x:number,z:number)=>{const dx=x-FORGE_POSITION.x,dz=z-FORGE_POSITION.z;return {x:(facingCos*dx-facingSin*dz)/FORGE_SCALE,z:(facingSin*dx+facingCos*dz)/FORGE_SCALE};};
 const near=(x:number,z:number)=>{const p=local(x,z);return Math.abs(p.x)<14&&p.z>doorZ-2&&p.z<doorZ+20;};
 const floorAt=(x:number,z:number)=>{const p=local(x,z);return Math.abs(p.x)<=7&&p.z>=doorZ-1&&p.z<=doorZ+10? FORGE_SCALE*(.1+2.3*THREE.MathUtils.clamp((doorZ+10-p.z)/11,0,1)):null;};
 const blocks=(x:number,z:number,padding=2)=>{const p=local(x,z);padding/=FORGE_SCALE;
  if(p.z>doorZ-2&&Math.abs(p.x)<6.8*1.1-padding)return p.z<doorZ+3&&opening<.95;
  return Math.abs(p.x)<26+padding&&p.z>-26-padding&&p.z<25+padding;
 };
 return {root,hinge,doorTriangles,setRampTexture:(texture:THREE.Texture)=>{rampMaterial.map=texture;rampMaterial.needsUpdate=true;},near,floorAt,blocks,open:()=>{requested=true;},get opening(){return opening;},get entering(){return requested;},
  canEnter:(x:number,z:number)=>{const p=local(x,z);return opening>=.99&&Math.abs(p.x)<5&&p.z<doorZ+1&&p.z>doorZ-3;},
  update:(dt:number,x:number,z:number)=>{if(requested&&!near(x,z))requested=false;const target=requested||near(x,z);opening=THREE.MathUtils.clamp(opening+(target?1:-1)*dt/.85,0,1);portal.visible=opening>.06;hinge.rotation.y=-opening*opening*(3-2*opening)*Math.PI*.56;return requested&&opening>=.99;}
 };
}
