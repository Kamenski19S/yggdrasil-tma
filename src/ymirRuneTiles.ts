import * as THREE from 'three';

export type YmirRune='perthro'|'ansuz';
export const YMIR_RUNE_TILES=[{id:'perthro' as const,label:'Пертр · освободить память Имира',height:8.5},{id:'ansuz' as const,label:'Ансуз · поговорить с Имиром',height:15}];
/** Mount each tile against the actual front surface, rather than the pillar's wider pedestal bounds. */
export function createYmirRuneTiles(pillar:THREE.Object3D,textures:Record<YmirRune,THREE.Texture>){
 pillar.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(pillar),center=bounds.getCenter(new THREE.Vector3()),root=new THREE.Group();root.name='Рунические плитки памяти Имира';
 const ray=new THREE.Raycaster(),front=new THREE.Vector3(0,0,1),gold=new THREE.Color('#ffe9ad');
 const tiles=YMIR_RUNE_TILES.map(spec=>{
  const texture=textures[spec.id];texture.colorSpace=THREE.SRGBColorSpace;
  // The supplied images include transparent padding and a narrow remnant at their left edge.
  texture.offset.set(.08,.19);texture.repeat.set(.9,.66);texture.needsUpdate=true;
  const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.04,depthWrite:false,toneMapped:false});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(5.7,5.7),material);mesh.name=spec.label;mesh.userData.rune=spec.id;
  ray.set(new THREE.Vector3(center.x,bounds.min.y+spec.height,bounds.max.z+10),new THREE.Vector3(0,0,-1));
  const hit=ray.intersectObject(pillar,true)[0];mesh.position.set(center.x,bounds.min.y+spec.height,(hit?.point.z??bounds.max.z)+.18);
  if(hit?.face){const normal=hit.face.normal.clone().transformDirection(hit.object.matrixWorld);if(normal.z>.5)mesh.quaternion.setFromUnitVectors(front,normal);}
  root.add(mesh);return mesh;
 });
 let time=0;
 return {root,tiles,update(dt:number,released:boolean){time+=dt;tiles.forEach((tile,i)=>{tile.material.color.copy(gold).lerp(new THREE.Color('#ffffff'),.65+.25*Math.sin(time*2+i));tile.material.opacity=i===1&&!released?.55:1;});},
  pick(camera:THREE.Camera,x:number,y:number,hero:THREE.Vector3):YmirRune|null{root.updateWorldMatrix(true,true);ray.setFromCamera(new THREE.Vector2(x,y),camera);const hit=ray.intersectObjects(tiles)[0];if(!hit||hero.distanceTo(hit.point)>32)return null;const wall=ray.intersectObject(pillar,true)[0];if(wall&&wall.distance<hit.distance-.3)return null;return hit.object.userData.rune as YmirRune;},
  dispose(){tiles.forEach(t=>{t.geometry.dispose();t.material.dispose();});},
 };
}
