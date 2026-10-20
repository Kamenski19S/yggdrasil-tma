import * as THREE from 'three';
export const MINE_DOOR_SCALE=1;
export const MINE_DOOR_CLEAR_HALF=4.1;
export const MINE_DOOR_BLOCK_HALF=10.4;
export const MINE_DOOR_ASSET='Ash_Mine_Dungeon_Door.glb';
export const MINE_DOOR_CREDIT={title:'Dungeon Door',author:'DJMaesen',url:'https://sketchfab.com/3d-models/dungeon-door-0507ef6c98664c4a8bc4eeb0f3c68fd9'};
/** The authored arch and its stone textures stay intact; only the wooden leaf slides. */
export function createSlidingMineDoor(_stone:THREE.Material){
 const root=new THREE.Group();root.name='Dungeon Door — вход в пепельную шахту';
 const frame=new THREE.Group(),leaf=new THREE.Group();frame.name='Каменная арка DJMaesen';leaf.name='Раздвижная створка Dungeon Door';root.add(frame,leaf);
 const slide={value:0};let opening=0,travel=13;
 const update=(value:number)=>{opening=THREE.MathUtils.clamp(value,0,1);leaf.position.x=-travel*opening*opening*(3-2*opening);slide.value=leaf.position.x;};
 const placeholder=new THREE.Mesh(new THREE.BoxGeometry(11.6,15.6,1),new THREE.MeshStandardMaterial({color:'#45382a',roughness:1}));placeholder.position.y=7.8;leaf.add(placeholder);
 const install=(source:THREE.Object3D)=>{
  placeholder.removeFromParent();placeholder.geometry.dispose();placeholder.material.dispose();
  source.updateWorldMatrix(true,true);
  // This model is authored facing X. Uniform scaling gives a 15.6-unit leaf for 14-unit Vicki.
  const orient=new THREE.Matrix4().makeRotationY(-Math.PI/2),scale=5.2;
  const door=source.getObjectByName('door');if(!door)throw new Error('Dungeon Door is missing its authored leaf');
  const bounds=new THREE.Box3().setFromObject(door,true).applyMatrix4(orient),center=bounds.getCenter(new THREE.Vector3());
  const normalize=new THREE.Matrix4().makeTranslation(-center.x*scale,-bounds.min.y*scale+.08,0).multiply(new THREE.Matrix4().makeScale(scale,scale,scale)).multiply(orient);
  let leafRight=-Infinity;
  source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
   let moving=false;for(let parent:THREE.Object3D|null=o;parent;parent=parent.parent)if(parent===door){moving=true;break;}
   const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld).applyMatrix4(normalize);
   if(moving){geometry.computeBoundingBox();leafRight=Math.max(leafRight,geometry.boundingBox!.max.x);}
   const materials=(Array.isArray(o.material)?o.material:[o.material]).map(original=>{
    const material=original.clone();material.side=THREE.DoubleSide;
    if(moving){
     // Clip the leaf as it disappears into the existing rock. No extra rectangular wall or frame.
     material.onBeforeCompile=(shader:Parameters<THREE.Material['onBeforeCompile']>[0])=>{shader.uniforms.mineDoorSlide=slide;shader.vertexShader='uniform float mineDoorSlide; varying float mineDoorX;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nmineDoorX=transformed.x+mineDoorSlide;');shader.fragmentShader='varying float mineDoorX;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(mineDoorX < -6.35 || mineDoorX > 6.35) discard;');};material.customProgramCacheKey=()=> 'dungeon-door-slide-v1';
    }
    return material;
   });
   const mesh=new THREE.Mesh(geometry,Array.isArray(o.material)?materials:materials[0]);mesh.name=o.name;mesh.castShadow=mesh.receiveShadow=true;(moving?leaf:frame).add(mesh);
  });
  travel=leafRight+7;update(opening);root.updateMatrixWorld(true);
 };
 return {root,frame,leaf,install,update,get opening(){return opening;}};
}
