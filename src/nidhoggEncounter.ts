import * as THREE from 'three';

// The model faces +Z. Keep its animated skeleton inside a separate world anchor.
export function createNidhoggEncounter(model:THREE.Group,clips:THREE.AnimationClip[],groundAt:(x:number,z:number)=>number,onPhase:(text:string)=>void){
  const anchor=new THREE.Group();anchor.name='Нидхёгг — встреча у корней';
  model.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3());
  const scale=Math.min(10/Math.max(size.y,.01),22/Math.max(size.x,size.z,.01));
  model.scale.multiplyScalar(scale);model.updateMatrixWorld(true);
  bounds.setFromObject(model);const center=bounds.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-bounds.min.y,-center.z);anchor.add(model);
  const mixer=new THREE.AnimationMixer(model);
  const action=(name:string)=>{const clip=clips.find(c=>c.name===name);return clip?mixer.clipAction(clip):undefined;};
  const stand=action('Idle Stand'),fly=action('Fly'),sit=action('Idle Sit');
  let current=stand;stand?.play();
  const change=(next:THREE.AnimationAction|undefined)=>{if(next&&next!==current){current?.fadeOut(.45);next.reset().fadeIn(.45).play();current=next;}};
  const origin=new THREE.Vector3(-8,0,-35),air=new THREE.Vector3(0,12,-35),landing=new THREE.Vector3();
  anchor.position.copy(origin);anchor.rotation.y=Math.PI;
  let phase:'roots'|'takeoff'|'circle'|'landing'|'seated'='roots',time=0,chew=0;
  let neck:THREE.Object3D|undefined,jaw:THREE.Object3D|undefined;
  model.traverse(o=>{if(o.name==='DEF-neck.004_012')neck=o;if(o.name==='DEF-Teeth_Bottom_016')jaw=o;});
  const neckBase=neck?.quaternion.clone(),jawBase=jaw?.quaternion.clone(),offset=new THREE.Quaternion(),axis=new THREE.Vector3(1,0,0);
  const collision=new THREE.Box3();
  const updateCollision=()=>collision.setFromCenterAndSize(new THREE.Vector3(anchor.position.x,anchor.position.y+5,anchor.position.z),new THREE.Vector3(18,14,18));
  updateCollision();
  const smooth=(t:number)=>{t=THREE.MathUtils.clamp(t,0,1);return t*t*(3-2*t);};
  return {anchor,mixer,collision,get flying(){return phase==='takeoff'||phase==='circle'||phase==='landing';},
    update(dt:number,hero:{x:number;z:number},ready:boolean){
      if(neck&&neckBase)neck.quaternion.copy(neckBase);
      if(jaw&&jawBase)jaw.quaternion.copy(jawBase);
      mixer.update(dt);
      if(phase==='roots'){
        origin.y=groundAt(origin.x,origin.z);anchor.position.copy(origin);chew+=dt;
        // Small additive movements preserve the source idle and all skin weights.
        if(neck&&neckBase)neck.quaternion.multiply(offset.setFromAxisAngle(axis,.07*Math.sin(chew*3.6)));
        if(jaw&&jawBase)jaw.quaternion.multiply(offset.setFromAxisAngle(axis,.10*(.5+.5*Math.sin(chew*7.2))));
        updateCollision();
        if(ready&&Math.hypot(hero.x-origin.x,hero.z-origin.z)<27){
          landing.set(THREE.MathUtils.clamp(hero.x,-10,10),0,THREE.MathUtils.clamp(hero.z-19,-46,-30));landing.y=groundAt(landing.x,landing.z);
          phase='takeoff';time=0;change(fly);onPhase('Нидхёгг отпускает корни и расправляет крылья…');
        }
        return;
      }
      if(phase==='seated')return;
      time+=dt;
      if(phase==='takeoff'){
        const t=smooth(time/3);anchor.position.lerpVectors(origin,air,t);anchor.rotation.y=THREE.MathUtils.lerp(Math.PI,Math.PI/2,t);
        if(time>=3){phase='circle';time=0;onPhase('Нидхёгг кружит над логовом.');}
      }else if(phase==='circle'){
        const angle=Math.min(time/8,1)*Math.PI*2;
        anchor.position.set(14*Math.sin(angle),12+Math.sin(angle)*1.2,-31-9*Math.cos(angle));
        anchor.rotation.y=Math.atan2(14*Math.cos(angle),11*Math.sin(angle));anchor.rotation.z=-.08;
        if(time>=8){phase='landing';time=0;onPhase('Дракон опускается перед Викой…');}
      }else{
        const t=smooth(time/3.5);anchor.position.lerpVectors(air,landing,t);anchor.rotation.z*=Math.exp(-dt*5);anchor.rotation.y=THREE.MathUtils.lerp(Math.PI/2,0,t);
        if(time>=3.5){phase='seated';anchor.position.copy(landing);anchor.rotation.set(0,0,0);change(sit??stand);updateCollision();onPhase('Нидхёгг сел перед Викой.');}
      }
    }
  };
}
