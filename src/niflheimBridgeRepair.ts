import * as THREE from 'three';
// Keep all three stones on the approach bank: never require crossing the broken bridge to repair it.
export const BRIDGE_PARTS=[{id:'west',name:'Западный камень опоры',x:-84,z:-16},{id:'east',name:'Восточный камень опоры',x:-62,z:-16},{id:'north',name:'Северный камень опоры',x:-72,z:-22}];
export function createBridgeRepair(scene:THREE.Scene,bridge:THREE.Group,ground:(x:number,z:number)=>number,restored:boolean){
 bridge.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3().setFromObject(bridge),north=bounds.min.z,oldLength=bounds.max.z-north;
 const initialScale=bridge.scale.z,initialZ=bridge.position.z;
 const fit=(progress:number)=>{
  const factor=1+6.85/Math.max(.01,oldLength)*progress;
  bridge.scale.z=initialScale*factor;
  bridge.position.z=north+(initialZ-north)*factor;
 };
 const parts=BRIDGE_PARTS.map(p=>{const stone=new THREE.Mesh(new THREE.IcosahedronGeometry(.65,0),new THREE.MeshStandardMaterial({color:'#99becb',emissive:'#245a71',emissiveIntensity:.4,roughness:.8}));stone.position.set(p.x,ground(p.x,p.z)+.65,p.z);scene.add(stone);return stone;});let progress=restored?1:0;fit(progress);
 return {ready:()=>progress===1,near(x:number,z:number,found:string[]){return BRIDGE_PARTS.find(p=>!found.includes(p.id)&&Math.hypot(x-p.x,z-p.z)<4);},update(dt:number,complete:boolean,found:string[]){parts.forEach((p,i)=>p.visible=!found.includes(BRIDGE_PARTS[i].id)&&!complete);const old=progress;if(complete){progress=Math.min(1,progress+dt/2);fit(progress);}return old<1&&progress===1;}};
}
