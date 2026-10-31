import * as THREE from 'three';
import {DecalGeometry} from 'three/examples/jsm/geometries/DecalGeometry.js';

export type YmirRune='perthro'|'ansuz';
export const YMIR_RUNE_TILES=[{id:'perthro' as const,label:'Пертр · освободить память Имира',height:11,x:-1.7},{id:'ansuz' as const,label:'Ансуз · поговорить с Имиром',height:11,x:1.7}];
/** Conform the marble inlays to the real curved stone, at Vicki's chest height. */
export function createYmirRuneTiles(pillar:THREE.Object3D,textures:Record<YmirRune,THREE.Texture>){
 pillar.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(pillar),center=bounds.getCenter(new THREE.Vector3()),root=new THREE.Group();root.name='Рунические вставки в камне Имира';
 const ray=new THREE.Raycaster(),projector=new THREE.Object3D();
 const tiles=YMIR_RUNE_TILES.map(spec=>{
  const texture=textures[spec.id];texture.colorSpace=THREE.SRGBColorSpace;texture.offset.set(.08,.19);texture.repeat.set(.9,.66);texture.needsUpdate=true;
  ray.set(new THREE.Vector3(center.x+spec.x,bounds.min.y+spec.height,bounds.max.z+10),new THREE.Vector3(0,0,-1));
  const hit=ray.intersectObject(pillar,true)[0];if(!hit||!(hit.object instanceof THREE.Mesh))throw Error('Missing stone surface for Ymir rune '+spec.id);
  const normal=hit.face!.normal.clone().transformDirection(hit.object.matrixWorld);projector.position.copy(hit.point);projector.lookAt(hit.point.clone().add(normal));
  const geometry=new DecalGeometry(hit.object,hit.point,projector.rotation,new THREE.Vector3(3.05,3.05,1.6));geometry.translate(-hit.point.x,-hit.point.y,-hit.point.z);
  const material=new THREE.MeshStandardMaterial({map:texture,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,roughness:.88,metalness:0,color:'#eee5d2',emissive:'#9b6519',emissiveMap:texture,emissiveIntensity:.13});
  // Feather the marble edge into the column instead of drawing the rim of a floating card.
  material.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec2 inlayUv;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\n inlayUv=uv;');
   shader.fragmentShader='varying vec2 inlayUv;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
    float edge=min(min(inlayUv.x,1.-inlayUv.x),min(inlayUv.y,1.-inlayUv.y));
    diffuseColor.a*=smoothstep(0.,.095,edge)*.94;
   `);
  };material.customProgramCacheKey=()=> 'ymir-conforming-marble-inlay-v1';
  const mesh=new THREE.Mesh(geometry,material);mesh.position.copy(hit.point);mesh.name=spec.label;mesh.userData.rune=spec.id;root.add(mesh);return mesh;
 });
 let time=0;
 return {root,tiles,update(dt:number,released:boolean){time+=dt;tiles.forEach((tile,i)=>{tile.material.emissiveIntensity=.12+.025*Math.sin(time*2+i);tile.material.opacity=i===1&&!released?.65:1;});},
  pick(camera:THREE.Camera,x:number,y:number,hero:THREE.Vector3):YmirRune|null{root.updateWorldMatrix(true,true);ray.setFromCamera(new THREE.Vector2(x,y),camera);const hit=ray.intersectObjects(tiles)[0];if(!hit||hero.distanceTo(hit.point)>32)return null;const wall=ray.intersectObject(pillar,true)[0];if(wall&&wall.distance<hit.distance-.03)return null;return hit.object.userData.rune as YmirRune;},
  dispose(){tiles.forEach(t=>{t.geometry.dispose();t.material.dispose();});},
 };
}
