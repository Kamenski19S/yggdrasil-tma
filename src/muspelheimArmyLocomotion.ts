import * as THREE from 'three';
/** Small, model-specific motions from bind pose; never reuse the hero's crouched combat transforms. */
export function createArmyLocomotion(model:THREE.Object3D,original:THREE.AnimationClip[]){
 model.updateWorldMatrix(true,true);
 const bones:THREE.Bone[]=[];model.traverse(o=>{if(o instanceof THREE.Bone)bones.push(o);});
 const duration=1.6,frames=41,times=Float32Array.from({length:frames},(_,i)=>i*duration/(frames-1));
 const rest=bones.map(b=>({bone:b,q:b.quaternion.clone(),p:b.position.clone(),axis:new THREE.Vector3(1,0,0).applyQuaternion(b.getWorldQuaternion(new THREE.Quaternion()).invert())}));
 const make=(walking:boolean)=>{
  const tracks:THREE.KeyframeTrack[]=[];
  for(const {bone,q,p,axis} of rest){
   const name=bone.name.replace('mixamorig',''),side=name.startsWith('Left')?1:-1,quats=new Float32Array(frames*4),positions=new Float32Array(frames*3);
   for(let i=0;i<frames;i++){
    const phase=times[i]/duration*Math.PI*2,wave=Math.sin(phase)*side;let angle=0;
    if(walking){
     if(name.endsWith('UpLeg'))angle=wave*.18;
     else if(name==='LeftLeg'||name==='RightLeg')angle=Math.max(0,-wave)*.23;
     else if(name.endsWith('Foot'))angle=-wave*.06;
     else if(name==='LeftArm'||name==='RightArm')angle=-wave*.09;
     else if(name.endsWith('ForeArm'))angle=-wave*.025;
    }
    q.clone().multiply(new THREE.Quaternion().setFromAxisAngle(axis,angle)).toArray(quats,i*4);
    p.toArray(positions,i*3);
   }
   tracks.push(new THREE.QuaternionKeyframeTrack(bone.name+'.quaternion',times,quats),new THREE.VectorKeyframeTrack(bone.name+'.position',times,positions));
  }
  return new THREE.AnimationClip(walking?'walk_loop':'idle',duration,tracks);
 };
 const idle=make(false),walk=make(true);
 // Correct the single root translation from the actual skinned soles, preserving the straight torso.
 const meshes:THREE.SkinnedMesh[]=[];model.traverse(o=>{if(o instanceof THREE.SkinnedMesh)meshes.push(o);});
 const hip=bones.find(b=>b.name==='mixamorigHips');
 if(hip&&meshes.length){
  const soleIds=meshes.map(mesh=>{const p=mesh.geometry.attributes.position;let min=Infinity;for(let i=0;i<p.count;i++)min=Math.min(min,p.getY(i));return Array.from({length:p.count},(_,i)=>i).filter(i=>p.getY(i)<min+.13);});
  const baseHip=hip.position.clone();
  for(const clip of [idle,walk]){
   const mixer=new THREE.AnimationMixer(model),action=mixer.clipAction(clip);action.setLoop(THREE.LoopOnce,1).play();action.clampWhenFinished=true;
   const track=clip.tracks.find(t=>t.name===hip.name+'.position')!;
   for(let frame=0;frame<frames;frame++){
    mixer.setTime(times[frame]);model.updateWorldMatrix(true,true);let low=Infinity;
    meshes.forEach((mesh,k)=>{mesh.skeleton.update();for(const i of soleIds[k]){const v=new THREE.Vector3().fromBufferAttribute(mesh.geometry.attributes.position,i);mesh.applyBoneTransform(i,v);v.applyMatrix4(mesh.matrixWorld);low=Math.min(low,v.y);}});
    if(Number.isFinite(low)){
     const parent=hip.parent!,world=parent.localToWorld(baseHip.clone()),corrected=parent.worldToLocal(world.add(new THREE.Vector3(0,-low,0)));
     corrected.toArray(track.values,frame*3);
    }
   }
   mixer.stopAllAction();mixer.uncacheRoot(model);
   for(const {bone,q,p} of rest){bone.quaternion.copy(q);bone.position.copy(p);}
   model.updateWorldMatrix(true,true);
  }
 }
 return original.filter(c=>c.name!=='idle'&&c.name!=='walk_loop').concat(idle,walk);
}
