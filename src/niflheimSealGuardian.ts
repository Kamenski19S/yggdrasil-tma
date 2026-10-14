import * as THREE from 'three';
import {CAVE_FRONT_Z,CAVE_FLOOR_Y,CAVE_MOUTH_X,type createCaveSpace} from './niflheimCaveEntrance';
import {niflGroundY} from './niflheimMapData';

/** Scourger Rig by DM-913, CC BY 4.0. Visual-only first-seal guardian. */
export function installSealGuardian(scene:THREE.Scene,asset:{scene:THREE.Group;animations:THREE.AnimationClip[]},space:ReturnType<typeof createCaveSpace>,angle:number){
  const root=new THREE.Group();root.name='Страж Печати Мёртвого узла — Scourger';
  // Preview the guardian beside the seal rather than far out on the approach.
  // Leave the central doorway and the seal itself visible between its wings.
  const point=space.world(CAVE_MOUTH_X-5.2,CAVE_FLOOR_Y,CAVE_FRONT_Z+3.8);
  root.position.set(point.x,niflGroundY(point.x,point.z),point.z);root.rotation.y=angle;
  const model=asset.scene,box=new THREE.Box3().setFromObject(model);
  const size=box.getSize(new THREE.Vector3()),centre=box.getCenter(new THREE.Vector3()),scale=11.4/Math.max(.001,size.y);
  model.scale.setScalar(scale);model.position.set(-centre.x*scale,-box.min.y*scale,-centre.z*scale);
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;if(o instanceof THREE.SkinnedMesh)o.frustumCulled=false;}});
  root.add(model);scene.add(root);
  const mixer=new THREE.AnimationMixer(model),idle=asset.animations.find(a=>a.name==='Idle')||asset.animations[0];
  if(idle)mixer.clipAction(idle).play();root.visible=false;
  return {root,update(dt:number,near:boolean,closed:boolean){root.visible=near&&closed;if(root.visible)mixer.update(dt);},
    dispose(){mixer.stopAllAction();scene.remove(root);}};
}
