import * as THREE from 'three';
import {SURT_THRONE_POSITION} from './muspelheimSurtThrone';
import {SUMMIT_FLOOR_Y} from './muspelheimSummit';
export const SURT_ACTOR_ASSET='Muspelheim_Surt_Golem.glb';
export const SURT_SWORD_ASSET='Muspelheim_Surt_Devil_Sword.glb';
export const SURT_HEIGHT=30;
export const SURT_TEST_GATE_OPEN=true;
export const SURT_CREDITS=[
 {title:'Character Free Golem Rock',author:'OSCAR CREATIVO',url:'https://sketchfab.com/3d-models/character-free-golem-rock-by-oscar-creativo-9383d3630e2945c5bdac5f7063308037'},
 {title:'FREE | Devil Sword',author:'nodgerty',url:'https://sketchfab.com/3d-models/free-devil-sword-db8b00e922024647bbdd7d124bd1d339'},
];
type Motion='seated'|'stand'|'rise'|'walk'|'attack';
type Phase='seated'|'rise'|'windup'|'slam'|'hold'|'standing';
const smooth=(t:number)=>THREE.MathUtils.smoothstep(t,0,1);
const vec=(x:number,y:number,z:number)=>new THREE.Vector3(x,y,z);
/** The source has 90 authored joints. Keep their skin; pose limbs with two-bone IK. */
export function createSurtActor(model:THREE.Object3D,sword:THREE.Object3D){
 const root=new THREE.Group();root.name='Сурт — мирная встреча у трона';
 model.updateMatrixWorld(true);model.traverse(o=>{if(o instanceof THREE.SkinnedMesh){o.skeleton.update();o.computeBoundingBox();}});const sourceBox=new THREE.Box3().setFromObject(model),scale=SURT_HEIGHT/(sourceBox.max.y-sourceBox.min.y);
 const fit=new THREE.Group();fit.scale.setScalar(scale);fit.position.y=-sourceBox.min.y*scale;fit.add(model);root.add(fit);root.updateWorldMatrix(true,true);
 const bone=(name:string)=>{const found=model.getObjectByName(name);if(!found)throw Error('Surt missing joint '+name);return found;};
 const hip=bone('CC_Base_Hip_02'),hand=bone('CC_Base_R_Hand_077');
 const joints={leftLeg:[bone('CC_Base_L_Thigh_04'),bone('CC_Base_L_Calf_05'),bone('CC_Base_L_Foot_06')],rightLeg:[bone('CC_Base_R_Thigh_019'),bone('CC_Base_R_Calf_020'),bone('CC_Base_R_Foot_00')],leftArm:[bone('CC_Base_L_Upperarm_050'),bone('CC_Base_L_Forearm_051'),bone('CC_Base_L_Hand_055')],rightArm:[bone('CC_Base_R_Upperarm_072'),bone('CC_Base_R_Forearm_073'),hand]};
 const rest:Array<{object:THREE.Object3D;position:THREE.Vector3;rotation:THREE.Quaternion;scale:THREE.Vector3}>=[];
 model.traverse(o=>{rest.push({object:o,position:o.position.clone(),rotation:o.quaternion.clone(),scale:o.scale.clone()});if(o instanceof THREE.SkinnedMesh)o.frustumCulled=false;if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
 const localPosition=(o:THREE.Object3D)=>root.worldToLocal(o.getWorldPosition(new THREE.Vector3()));
 const restHip=localPosition(hip),restFootLeft=localPosition(joints.leftLeg[2]),restFootRight=localPosition(joints.rightLeg[2]);
 const restRotations=new Map<THREE.Object3D,THREE.Quaternion>();for(const chain of Object.values(joints))restRotations.set(chain[2],chain[2].getWorldQuaternion(new THREE.Quaternion()));
 const rootQ=()=>root.getWorldQuaternion(new THREE.Quaternion());
 const setWorldRotation=(o:THREE.Object3D,q:THREE.Quaternion)=>{o.quaternion.copy(o.parent!.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(q));o.updateWorldMatrix(false,true);};
 const setRootRotation=(o:THREE.Object3D,q:THREE.Quaternion)=>setWorldRotation(o,rootQ().multiply(q));
 const aim=(o:THREE.Object3D,child:THREE.Object3D,target:THREE.Vector3)=>{const a=o.getWorldPosition(new THREE.Vector3()),from=child.getWorldPosition(new THREE.Vector3()).sub(a).normalize(),to=root.localToWorld(target.clone()).sub(a).normalize(),q=new THREE.Quaternion().setFromUnitVectors(from,to).multiply(o.getWorldQuaternion(new THREE.Quaternion()));setWorldRotation(o,q);};
 const ik=(chain:THREE.Object3D[],target:THREE.Vector3,pole:THREE.Vector3)=>{const [a,b,c]=chain,A=localPosition(a),B=localPosition(b),C=localPosition(c),l1=A.distanceTo(B),l2=B.distanceTo(C),d=THREE.MathUtils.clamp(A.distanceTo(target),Math.abs(l1-l2)+.001,l1+l2-.001),axis=target.clone().sub(A).normalize(),along=(l1*l1-l2*l2+d*d)/(2*d),bend=pole.clone().addScaledVector(axis,-pole.dot(axis)).normalize(),middle=A.clone().addScaledVector(axis,along).addScaledVector(bend,Math.sqrt(Math.max(0,l1*l1-along*along)));aim(a,b,middle);aim(b,c,target);setRootRotation(c,restRotations.get(c)!);};
 // A palm anchor is a real child of the authored hand, not a floating prop.
 const palm=new THREE.Group();palm.name='Surt right palm sword grip';
 const wrist=hand.getWorldPosition(new THREE.Vector3()),index=bone('CC_Base_R_Index1_081').getWorldPosition(new THREE.Vector3());palm.position.copy(hand.worldToLocal(wrist.clone().lerp(index,.65)));hand.add(palm);
 // Bake the sword's export transforms and align its long axis to local Y.
 sword.updateWorldMatrix(true,true);const sources:THREE.Mesh[]=[],cloud:THREE.Vector3[]=[];sword.traverse(o=>{if(o instanceof THREE.Mesh){sources.push(o);const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i+=3)cloud.push(new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld));}});
 const center=cloud.reduce((s,p)=>s.add(p),new THREE.Vector3()).multiplyScalar(1/cloud.length),cov=new THREE.Matrix3().set(0,0,0,0,0,0,0,0,0);for(const p of cloud){const v=p.clone().sub(center),e=cov.elements;for(let row=0;row<3;row++)for(let col=0;col<3;col++)e[col*3+row]+=v.getComponent(row)*v.getComponent(col);}
 let axis=vec(1,1,-.3).normalize();for(let i=0;i<30;i++)axis.applyMatrix3(cov).normalize();if(axis.y<0)axis.negate();let across=vec(0,0,1).addScaledVector(axis,-axis.z).normalize();for(let i=0;i<30;i++){across.applyMatrix3(cov);across.addScaledVector(axis,-across.dot(axis)).normalize();}const normal=across.clone().cross(axis).normalize();
 const frame=new THREE.Matrix4().makeBasis(across,axis,normal).transpose().multiply(new THREE.Matrix4().makeTranslation(-center.x,-center.y,-center.z));let minY=Infinity,maxY=-Infinity;for(const p of cloud){const y=p.clone().applyMatrix4(frame).y;minY=Math.min(minY,y);maxY=Math.max(maxY,y);}const swordScale=22/(maxY-minY),gripY=maxY-(maxY-minY)*.18;
 const swordGrip=new THREE.Group();swordGrip.name='Devil Sword rigidly bound to Surt palm';palm.add(swordGrip);let tip:THREE.Vector3|undefined;
 for(const source of sources){const geometry=source.geometry.clone().applyMatrix4(source.matrixWorld).applyMatrix4(frame);geometry.translate(0,-gripY,0);geometry.scale(swordScale,swordScale,swordScale);const p=geometry.getAttribute('position');for(let i=0;i<p.count;i++){const v=new THREE.Vector3().fromBufferAttribute(p,i);if(!tip||v.y<tip.y)tip=v;}geometry.computeBoundingBox();geometry.computeBoundingSphere();const materials=(Array.isArray(source.material)?source.material:[source.material]).map(m=>m.clone());for(const m of materials)if(m instanceof THREE.MeshStandardMaterial){m.metalness=Math.min(.8,m.metalness);m.roughness=Math.max(.38,m.roughness);}const mesh=new THREE.Mesh(geometry,Array.isArray(source.material)?materials:materials[0]);mesh.castShadow=true;swordGrip.add(mesh);}
 const bladeTip=tip!,bladeLength=bladeTip.length(),bladeAxis=bladeTip.clone().normalize();
 const sparkCount=96,sparkPositions=new Float32Array(sparkCount*3),sparkVelocities=new Float32Array(sparkCount*3),sparkGeometry=new THREE.BufferGeometry();sparkGeometry.setAttribute('position',new THREE.BufferAttribute(sparkPositions,3));
 const sparkMaterial=new THREE.PointsMaterial({color:'#ffd16b',size:.58,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});const sparks=new THREE.Points(sparkGeometry,sparkMaterial);sparks.name='Искры от удара меча Сурта';sparks.frustumCulled=false;root.add(sparks);
 const flash=new THREE.PointLight('#ffbd55',0,35,2);root.add(flash);const ring=new THREE.Mesh(new THREE.RingGeometry(.3,1,48),new THREE.MeshBasicMaterial({color:'#ffcb79',side:THREE.DoubleSide,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));ring.rotation.x=-Math.PI/2;root.add(ring);
 let phase:Phase='seated',elapsed=0,away=0,sparkTime=10,impactCount=0;const impactPoint=new THREE.Vector3();
 const swordTip=()=>swordGrip.localToWorld(bladeTip.clone());
 function pose(rise:number,lift:number,time:number,walking=false){
  for(const r of rest){r.object.position.copy(r.position);r.object.quaternion.copy(r.rotation);r.object.scale.copy(r.scale);}root.updateWorldMatrix(true,true);
  const step=walking?Math.sin(time*3.7):0,hipTarget=vec(restHip.x,THREE.MathUtils.lerp(9.3,restHip.y,rise)+(walking?.2*Math.sin(time*7.4):.045*Math.sin(time*1.5)),7*rise);
  hip.position.copy(hip.parent!.worldToLocal(root.localToWorld(hipTarget)));hip.updateWorldMatrix(false,true);
  const left=restFootLeft.clone(),right=restFootRight.clone();left.z=right.z=THREE.MathUtils.lerp(6.5,7+restFootLeft.z,rise);
  if(walking){left.z+=step*2.2;right.z-=step*2.2;left.y+=Math.max(0,Math.cos(time*3.7))*1.2;right.y+=Math.max(0,-Math.cos(time*3.7))*1.2;}
  ik(joints.leftLeg,left,vec(0,0,1));ik(joints.rightLeg,right,vec(0,0,1));
  const rightTarget=vec(-10,THREE.MathUtils.lerp(12.5,14,rise),THREE.MathUtils.lerp(4,12,rise)+(walking?step*2:0)).lerp(vec(-8,25,9),lift),leftTarget=vec(10,THREE.MathUtils.lerp(12.5,13,rise),THREE.MathUtils.lerp(4,9,rise)-(walking?step*2:0));
  ik(joints.rightArm,rightTarget,vec(-1,.1,0));ik(joints.leftArm,leftTarget,vec(1,.1,0));
  for(const name of ['CC_Base_R_Index2_082','CC_Base_R_Index3_083']){const finger=model.getObjectByName(name);if(finger)finger.rotateX(.28);}root.updateWorldMatrix(true,true);
  const gripRoot=localPosition(palm),vertical=Math.min(bladeLength-.1,Math.max(.1,gripRoot.y)),forward=Math.sqrt(Math.max(.1,bladeLength*bladeLength-vertical*vertical)),groundDirection=vec(0,-vertical,forward).normalize(),direction=groundDirection.lerp(vec(.05,.94,.34).normalize(),lift).normalize();
  const desired=rootQ().multiply(new THREE.Quaternion().setFromUnitVectors(bladeAxis,direction));swordGrip.quaternion.copy(palm.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(desired));const parentScale=palm.getWorldScale(new THREE.Vector3());swordGrip.scale.set(1/parentScale.x,1/parentScale.y,1/parentScale.z);swordGrip.updateWorldMatrix(false,true);root.updateMatrixWorld(true);
 }
 function emitImpact(){impactPoint.copy(root.worldToLocal(swordTip()));impactPoint.y=.15;for(let i=0;i<sparkCount;i++){sparkPositions.set(impactPoint.toArray(),i*3);const angle=i*2.399963,speed=5+(i%13)*.8;sparkVelocities.set([Math.cos(angle)*speed,8+(i%9)*1.4,Math.sin(angle)*speed],i*3);}sparkGeometry.attributes.position.needsUpdate=true;sparkTime=0;impactCount++;flash.position.copy(impactPoint).add(vec(0,2,0));ring.position.copy(impactPoint);}
 root.position.set(SURT_THRONE_POSITION.x,SUMMIT_FLOOR_Y,SURT_THRONE_POSITION.z);pose(0,0,0);
 const update=(dt:number,hero?:THREE.Vector3,visible=true)=>{
  let impact=false,started=false;if(dt<=0)return {impact,started};elapsed+=dt;
  const localHero=hero?root.worldToLocal(hero.clone()):null,near=visible&&localHero&&Math.abs(localHero.y)<6&&localHero.z>8&&localHero.z<38&&Math.abs(localHero.x)<23;
  if(phase==='seated'&&near){phase='rise';elapsed=0;started=true;}
  if(phase==='rise'&&elapsed>=2.8){phase='windup';elapsed=0;}if(phase==='windup'&&elapsed>=1.2){phase='slam';elapsed=0;}
  const rise=phase==='seated'?0:phase==='rise'?smooth(elapsed/2.8):1,lift=phase==='windup'?smooth(elapsed/1.2):phase==='slam'?1-smooth(elapsed/.38):0;
  pose(rise,lift,elapsed);
  if(phase==='slam'&&elapsed>=.38){emitImpact();impact=true;phase='hold';elapsed=0;}
  if(phase==='hold'&&elapsed>=1){phase='standing';elapsed=0;}
  if(phase==='standing'){away=hero&&hero.distanceTo(root.position)>80?away+dt:0;if(away>8){phase='seated';elapsed=away=0;}}
  sparkTime+=dt;if(sparkTime<1.2){for(let i=0;i<sparkCount;i++){sparkPositions[i*3]+=sparkVelocities[i*3]*dt;sparkPositions[i*3+1]+=sparkVelocities[i*3+1]*dt;sparkPositions[i*3+2]+=sparkVelocities[i*3+2]*dt;sparkVelocities[i*3+1]-=28*dt;}sparkGeometry.attributes.position.needsUpdate=true;}sparkMaterial.opacity=Math.max(0,1-sparkTime/1.2);flash.intensity=70*Math.max(0,1-sparkTime/.3);(ring.material as THREE.MeshBasicMaterial).opacity=.7*Math.max(0,1-sparkTime/.5);ring.scale.setScalar(1+Math.min(1,sparkTime)*6);
  return {impact,started};
 };
 return {root,hand,palm,swordGrip,swordTip,bladeLength,sparks,impactPoint,update,get phase(){return phase;},get impactCount(){return impactCount;},
  greetingView(hero:THREE.Vector3){if(phase==='seated'||phase==='standing'||hero.distanceTo(root.position)>60)return null;const position=vec(THREE.MathUtils.clamp(hero.x+4,root.position.x-14,root.position.x+14),SUMMIT_FLOOR_Y+18,Math.min(hero.z+18,-387));const target=vec(root.position.x,SUMMIT_FLOOR_Y+14,root.position.z+9);return {position,target,yaw:Math.atan2(position.x-target.x,position.z-target.z)};},
  previewMotion(motion:Motion,time=0){pose(motion==='seated'?0:motion==='rise'?smooth(time/2.8):1,motion==='attack'?(time%2<1?smooth(time%2):1-smooth(time%2-1)):0,time,motion==='walk');},
  blocks(x:number,z:number,footY:number,padding=2){return footY<SUMMIT_FLOOR_Y+SURT_HEIGHT&&footY+14>SUMMIT_FLOOR_Y&&((x-root.position.x)/(8+padding))**2+((z-root.position.z-7)/(6+padding))**2<1;},
  dispose(){const skeletons=new Set<THREE.Skeleton>();model.traverse(o=>{if(o instanceof THREE.SkinnedMesh)skeletons.add(o.skeleton);});skeletons.forEach(s=>s.dispose());sparkGeometry.dispose();sparkMaterial.dispose();ring.geometry.dispose();(ring.material as THREE.Material).dispose();},
 };
}
