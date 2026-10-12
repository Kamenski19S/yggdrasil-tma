import * as THREE from 'three';
// Keep all three stones on the approach bank: never require crossing the broken bridge to repair it.
export const BRIDGE_PARTS=[{id:'west',name:'Западный камень опоры',x:-84,z:-16},{id:'east',name:'Восточный камень опоры',x:-62,z:-16},{id:'north',name:'Северный камень опоры',x:-72,z:-22}];
export function createBridgeRepair(scene:THREE.Scene,deck:number,ground:(x:number,z:number)=>number,restored:boolean){
 const extension=new THREE.Group();extension.position.set(-72,deck,22.65);scene.add(extension);const mat=new THREE.MeshStandardMaterial({color:'#88959a',roughness:.95});
 const slab=new THREE.Mesh(new THREE.BoxGeometry(6.1,.5,6.85),mat);slab.position.set(0,-.25,3.425);slab.receiveShadow=true;extension.add(slab);
 for(const side of [-1,1]){const rail=new THREE.Mesh(new THREE.BoxGeometry(.35,1.3,6.85),mat);rail.position.set(side*3.4,.65,3.425);rail.castShadow=true;extension.add(rail);}
 const parts=BRIDGE_PARTS.map(p=>{const stone=new THREE.Mesh(new THREE.IcosahedronGeometry(.65,0),new THREE.MeshStandardMaterial({color:'#99becb',emissive:'#245a71',emissiveIntensity:.4,roughness:.8}));stone.position.set(p.x,ground(p.x,p.z)+.65,p.z);scene.add(stone);return stone;});let progress=restored?1:0;extension.visible=restored;
 return {ready:()=>progress===1,near(x:number,z:number,found:string[]){return BRIDGE_PARTS.find(p=>!found.includes(p.id)&&Math.hypot(x-p.x,z-p.z)<4);},update(dt:number,complete:boolean,found:string[]){parts.forEach((p,i)=>p.visible=!found.includes(BRIDGE_PARTS[i].id)&&!complete);const old=progress;if(complete){extension.visible=true;progress=Math.min(1,progress+dt/2);extension.position.y=deck-(1-progress)*2;}return old<1&&progress===1;}};
}
