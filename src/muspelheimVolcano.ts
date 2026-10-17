import * as THREE from 'three';
export const VOLCANO_ASSET='Muspelheim_Volcano.glb';
export const VOLCANO_POSITION={x:-335,z:-342};
export const VOLCANO_SIZE={width:230,height:86,depth:182};
export const VOLCANO_CREDIT={title:'Rocky hell terrain',author:'Nicothin',url:'https://sketchfab.com/3d-models/rocky-hell-terrain-6a4c6f4bd2f24cb1a3f63adf426b2774'};
/** Preserve the imported hierarchy and texture; place the whole massif inside the rear-left wall. */
export function createMuspelheimVolcano(model:THREE.Object3D,groundY:number){
 model.updateWorldMatrix(true,true);
 const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 if(Math.min(size.x,size.y,size.z)<=0)throw new Error('Volcano has invalid bounds');
 const fit=new THREE.Group();fit.scale.set(VOLCANO_SIZE.width/size.x,VOLCANO_SIZE.height/size.y,VOLCANO_SIZE.depth/size.z);
 const offset=new THREE.Group();offset.position.set(-center.x,-bounds.min.y,-center.z);offset.add(model);fit.add(offset);
 const root=new THREE.Group();root.name='Volcano — rear left of Muspelheim';root.position.set(VOLCANO_POSITION.x,groundY,VOLCANO_POSITION.z);root.add(fit);
 model.traverse(o=>{if(o instanceof THREE.Mesh){o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial){m.metalness=0;m.roughness=1;}}});
 // The imported terrain has an uneven rim. Bury its highest outer edge, not only its lowest vertex.
 root.updateWorldMatrix(true,true);
 const v=new THREE.Vector3();let rimY=groundY;
 model.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position');
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);
   if(Math.abs(v.x-VOLCANO_POSITION.x)>=VOLCANO_SIZE.width*.45||Math.abs(v.z-VOLCANO_POSITION.z)>=VOLCANO_SIZE.depth*.45)rimY=Math.max(rimY,v.y);
  }
 });
 root.position.y-=Math.max(.5,rimY-groundY+1);root.updateWorldMatrix(true,true);
 const worldBounds=new THREE.Box3().setFromObject(root),ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
 const floorAt=(x:number,z:number)=>{
  if(x<worldBounds.min.x||x>worldBounds.max.x||z<worldBounds.min.z||z>worldBounds.max.z)return null;
  ray.set(new THREE.Vector3(x,worldBounds.max.y+1,z),down);
  return ray.intersectObject(root,true)[0]?.point.y??null;
 };
 return {root,floorAt};
}
