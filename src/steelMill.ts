import * as THREE from 'three';
export const STEEL_MILL_ASSET='Niflheim_Steel_Water_Wheel.glb';
export function steelMillMaterial(dark=false){
 return new THREE.MeshStandardMaterial({color:dark?'#4b5868':'#a0b0c0',metalness:.78,roughness:dark?.42:.35});
}
/** Center on the axle, fit a six-unit diameter, and align the shaft with the house. */
export function prepareSteelWheel(model:THREE.Group){
 model.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 const scale=6/Math.max(size.x,size.y,.001);model.position.sub(center).multiplyScalar(scale);model.scale.multiplyScalar(scale);model.rotation.y=Math.PI/2;
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});model.updateMatrixWorld(true);return model;
}
/** Structural beams turn to steel while windows, masonry and roof keep their materials. */
export function steelMillHouseFrame(root:THREE.Object3D){
 const steel=steelMillMaterial();let changed=false;
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const materials=Array.isArray(o.material)?o.material:[o.material];
  const adapted=materials.map(m=>{const name=(o.name+' '+m.name).toLowerCase();if(!/frame|beam|post|rail|brace|batten|ridge|timber/.test(name)||/glass|window/.test(name))return m;changed=true;return steel;});
  o.material=Array.isArray(o.material)?adapted:adapted[0];
 });if(!changed)steel.dispose();
}
