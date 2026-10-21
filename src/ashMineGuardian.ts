import * as THREE from 'three';
import {OCEAN_GUARDIAN,type GuardianState} from './ashMineGuardianCombat';
import {capsuleContact,guardianAllowsMove,type GuardianCollider} from './ashMineGuardianCollision';
export const OCEAN_GUARDIAN_ASSET='Ash_Mine_Ocean_Guardian.glb';
export const OCEAN_GUARDIAN_CREDIT={title:'Ocean Creature',author:'bast_yy',url:'https://sketchfab.com/3d-models/ocean-creature-5c17cca6086e4910aa12e7d701ccd6a1'};
/** Skin weights keep the pink tint attached to the animated tentacles. */
function colorGuardian(source:THREE.Object3D){
 const slate=new THREE.Color('#a9bfd0'),pink=new THREE.Color('#efa2b4'),tint=new THREE.Color();
 source.traverse(o=>{
  if(!(o instanceof THREE.SkinnedMesh))return;
  const indices=o.geometry.getAttribute('skinIndex'),weights=o.geometry.getAttribute('skinWeight');
  if(!indices||!weights)return;
  o.geometry=o.geometry.clone();
  const colors=new Float32Array(indices.count*3);
  for(let i=0;i<indices.count;i++){
   let tentacle=0;
   for(let j=0;j<4;j++)if(o.skeleton.bones[indices.getComponent(i,j)]?.name.startsWith('Tentacle_'))tentacle+=weights.getComponent(i,j);
   tint.copy(slate).lerp(pink,THREE.MathUtils.clamp(tentacle,0,1));tint.toArray(colors,i*3);
  }
  o.geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const recolor=(original:THREE.Material)=>{
   const m=original.clone();
   if(m instanceof THREE.MeshStandardMaterial){m.vertexColors=true;m.color.set('#ffffff');m.emissiveMap=null;m.emissive.set('#8295ae');m.emissiveIntensity=.12;m.roughness=.7;m.metalness=0;}
   return m;
  };
  o.material=Array.isArray(o.material)?o.material.map(recolor):recolor(o.material);
 });
}
/** Animate the real skin. CCD reaches are applied after the authored swimming cycle. */
export function createOceanGuardian(source:THREE.Object3D,animations:THREE.AnimationClip[]){
 const root=new THREE.Group();root.name='Страж глубин — Ocean Creature';root.position.set(OCEAN_GUARDIAN.x,OCEAN_GUARDIAN.y,OCEAN_GUARDIAN.z);
 colorGuardian(source);
 const body=new THREE.Group();body.scale.setScalar(1.3);body.rotation.x=1;body.add(source);root.add(body);
 const mixer=new THREE.AnimationMixer(source);if(animations[0])mixer.clipAction(animations[0]).play();
 const rest:Array<{bone:THREE.Bone;p:THREE.Vector3;q:THREE.Quaternion}>=[],materials:Array<{material:THREE.MeshStandardMaterial;emissive:THREE.Color;intensity:number}>=[];
 source.traverse(o=>{if(o instanceof THREE.Bone)rest.push({bone:o,p:o.position.clone(),q:o.quaternion.clone()});if(o instanceof THREE.Mesh){o.frustumCulled=false;for(const material of Array.isArray(o.material)?o.material:[o.material])if(material instanceof THREE.MeshStandardMaterial)materials.push({material,emissive:material.emissive.clone(),intensity:material.emissiveIntensity});}});
 const chain=(first:string,last:string)=>{const start=source.getObjectByName(first),end=source.getObjectByName(last),bones:THREE.Object3D[]=[];for(let b=end;b;b=b.parent??undefined){if(b instanceof THREE.Bone)bones.unshift(b);if(b===start)return bones;}return [];};
 const left=chain('Tentacle_Left_Big_049','Tentacle_Left_Big_9_066'),right=chain('Tentacle_Right_Big_067','Tentacle_Right_Big_9_077');
 if(left.length<8||right.length<8)throw new Error('Ocean Creature tentacle rig is missing');
 const tentacles=[left,right,chain('Tentacle_Left_Front_06','Tentacle_Left_Front_7_017'),chain('Tentacle_Right_Front_018','Tentacle_Right_Front_7_025'),chain('Tentacle_Left_Mid_026','Tentacle_Left_Mid_7_039'),chain('Tentacle_Right_Mid_040','Tentacle_Right_Mid_7_048')];
 const spine=rest.map(r=>r.bone).filter(b=>/^Spine_/.test(b.name));
 let colliders:GuardianCollider[]=[],solid=true;
 const segment=(a:THREE.Object3D,b:THREE.Object3D,radius:number,kind:GuardianCollider['kind']):GuardianCollider=>({a:a.getWorldPosition(new THREE.Vector3()),b:b.getWorldPosition(new THREE.Vector3()),radius,kind});
 const bodyColliders=()=>spine.slice(1).map((bone,i)=>segment(spine[i],bone,i<4?3.6:i<8?2:1,'body'));
 const collectColliders=()=>{root.updateMatrixWorld(true);colliders=bodyColliders();for(const bones of tentacles)for(let i=1;i<bones.length;i++)colliders.push(segment(bones[i-1],bones[i],1.25-i/bones.length*.55,'tentacle'));};
 const point=new THREE.Vector3(),tip=new THREE.Vector3(),toward=new THREE.Vector3(),desired=new THREE.Vector3(),parentQ=new THREE.Quaternion(),delta=new THREE.Quaternion(),axis=new THREE.Vector3();
 const solve=(bones:THREE.Object3D[],target:THREE.Vector3)=>{
  root.updateMatrixWorld(true);
  for(let iteration=0;iteration<6;iteration++)for(let i=bones.length-2;i>=0;i--){const bone=bones[i];bone.getWorldPosition(point);bones[bones.length-1].getWorldPosition(tip);toward.copy(tip).sub(point);desired.copy(target).sub(point);if(toward.lengthSq()<1e-9||desired.lengthSq()<1e-9)continue;
   delta.setFromUnitVectors(toward.normalize(),desired.normalize());const angle=2*Math.acos(THREE.MathUtils.clamp(delta.w,-1,1));if(angle>.32){axis.set(delta.x,delta.y,delta.z).normalize();delta.setFromAxisAngle(axis,.32);}
   bone.parent!.getWorldQuaternion(parentQ);delta.premultiply(parentQ.clone().invert()).multiply(parentQ);bone.quaternion.premultiply(delta).normalize();bone.updateWorldMatrix(false,true);
  }
  root.updateMatrixWorld(true);return bones[bones.length-1].getWorldPosition(new THREE.Vector3());
 };
 const ripples=new THREE.Group();ripples.name='Круги на озере';root.add(ripples);
 for(let i=0;i<3;i++){const ring=new THREE.Mesh(new THREE.RingGeometry(3.5,3.65,48),new THREE.MeshBasicMaterial({color:'#65a6a9',transparent:true,opacity:.2,side:THREE.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.set(0,-1.12-OCEAN_GUARDIAN.y,4);ripples.add(ring);}
 const warning=new THREE.Mesh(new THREE.RingGeometry(3.2,3.45,48),new THREE.MeshBasicMaterial({color:'#ef7c55',transparent:true,opacity:.6,side:THREE.DoubleSide,depthWrite:false}));warning.rotation.x=-Math.PI/2;warning.visible=false;root.add(warning);
 let elapsed=0,deathTime=0,flash=0;const target=new THREE.Vector3(),other=new THREE.Vector3();
 const surface=(p:THREE.Vector3,hero:THREE.Vector3,hand:THREE.Vector3)=>{
  const axis=new THREE.Vector3(hero.x,THREE.MathUtils.clamp(p.y,hero.y+3,hero.y+11),hero.z),away=p.clone().sub(axis);
  if(away.length()<4.3){if(away.lengthSq()<1e-6)away.set(1,0,0);p.copy(axis).add(away.setLength(4.3));}
  away.copy(p).sub(hand);if(away.length()<1.8){if(away.lengthSq()<1e-6)away.set(1,0,0);p.copy(hand).add(away.setLength(1.8));}
  return p;
 };

 const resolveBody=(hero:THREE.Vector3)=>{
  root.updateMatrixWorld(true);
  // The creature yields into the lake when its swimming animation hits Vicki.
  for(let pass=0;pass<4;pass++){
   let shift=0;
   for(const c of bodyColliders()){const hit=capsuleContact(c,hero);if(hit.depth>0)shift=Math.max(shift,hit.depth+.08);}
   if(!shift)break;
   root.position.x+=shift;root.updateMatrixWorld(true);
  }
 };
 const resolveTentacles=(hero:THREE.Vector3)=>{
  // Constrain complete bone segments, including idle tentacles, after IK.
  for(let pass=0;pass<4;pass++)for(const bones of tentacles)for(let i=1;i<bones.length;i++){
   const c=segment(bones[i-1],bones[i],1.35-i/bones.length*.55,'tentacle'),hit=capsuleContact(c,hero);
   if(hit.depth<=0)continue;
   const end=c.b.clone().addScaledVector(hit.normal,hit.depth+.25);
   solve(bones.slice(0,i+1),end);
  }
 };
 const update=(dt:number,state:GuardianState,hero:THREE.Vector3,hand:THREE.Vector3,dead=false)=>{
  if(dt<=0)return {contact:false};elapsed+=dt;for(const r of rest){r.bone.position.copy(r.p);r.bone.quaternion.copy(r.q);}mixer.update(dt);
  flash=Math.max(0,flash-dt);for(const m of materials){m.material.emissive.copy(m.emissive);m.material.emissiveIntensity=m.intensity;if(flash>0){m.material.emissive.lerp(new THREE.Color('#e5ad57'),flash*2);m.material.emissiveIntensity=Math.max(m.intensity,.8);}}
  solid=!dead;
  if(dead){deathTime+=dt;root.position.y=OCEAN_GUARDIAN.y-14*THREE.MathUtils.smoothstep(deathTime,0,2.5);root.visible=deathTime<2.5;warning.visible=false;collectColliders();return {contact:false};}
  root.position.y=OCEAN_GUARDIAN.y+Math.sin(elapsed*1.3)*.22;
  const reaching=state.phase==='windup'||state.phase==='strike'||state.phase==='hold';root.position.x=THREE.MathUtils.lerp(root.position.x,OCEAN_GUARDIAN.x+(reaching?0:5),1-Math.exp(-5*dt));
  resolveBody(hero);
  ripples.children.forEach((o,i)=>{const t=(elapsed*.24+i/3)%1;o.scale.setScalar(1+t*2);(o as THREE.Mesh<THREE.BufferGeometry,THREE.MeshBasicMaterial>).material.opacity=(1-t)*.18;});
  const attacking=state.phase==='windup'||state.phase==='strike'||state.phase==='hold';warning.visible=state.phase==='windup';warning.position.set(state.target.x-root.position.x,state.target.y+.18-root.position.y,state.target.z-root.position.z);
  if(!attacking){resolveTentacles(hero);collectColliders();return {contact:false};}
  const handOffset=hand.clone().sub(hero);target.set(state.target.x,state.target.y,state.target.z);
  if(state.kind==='grab')target.add(handOffset);else target.y+=state.kind==='slam'?2.5:6;
  if(state.phase==='hold'){target.copy(state.kind==='grab'?hand:hero.clone().add(new THREE.Vector3(Math.cos(elapsed*2)*4.8,6,Math.sin(elapsed*2)*4.8)));}
  if(state.phase==='windup')target.y+=9;else if(state.phase==='strike')target.y+=9*(1-THREE.MathUtils.smoothstep(state.elapsed,0,.2));
  if(state.kind==='sweep'){target.x+=state.phase==='windup'?-6:6*Math.sin(Math.min(1,state.elapsed/.55)*Math.PI-Math.PI/2);}
  surface(target,hero,hand);const end=solve(left,target);other.copy(target);
  if(state.kind==='wrap'){other.set(hero.x-(target.x-hero.x),target.y,hero.z-(target.z-hero.z));surface(other,hero,hand);solve(right,other);}else if(state.kind==='slam'){other.x+=2;surface(other,hero,hand);solve(right,other);}
  const actual=state.kind==='grab'?hand:hero.clone().add(new THREE.Vector3(0,state.kind==='slam'?2.5:6,0));
  resolveTentacles(hero);collectColliders();left[left.length-1].getWorldPosition(end);return {contact:end.distanceTo(actual)<5.5||colliders.some(c=>c.kind==='tentacle'&&capsuleContact(c,hero).depth>-.45)};
 };
 const releaseVisual=()=>{warning.visible=false;};
 return {root,body,left,right,mixer,update,releaseVisual,canMove:(from:THREE.Vector3,to:THREE.Vector3)=>!solid||guardianAllowsMove(colliders,from,to),distanceTo:(hero:THREE.Vector3)=>Math.max(0,Math.min(...colliders.map(c=>2.6-capsuleContact(c,hero).depth))),get colliders(){return colliders;},flash:()=>{flash=.35;},dispose:()=>{mixer.stopAllAction();},get tip(){root.updateMatrixWorld(true);return left[left.length-1].getWorldPosition(new THREE.Vector3());}};
}
