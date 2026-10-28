import * as THREE from 'three';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {CRATER_SMITH_POSITION,CRATER_WORKSHOP_Y,CRATER_WORKSHOP_RADIUS,CRATER_NECROMANCERS} from './muspelheimCraterLayout';
import {createNecromancerStrike} from './muspelheimNecromancerStrike';
export function createCraterActors(smithSource:THREE.Object3D,necroSource:THREE.Object3D,floor:(x:number,z:number)=>number|null){
 const root=new THREE.Group();root.name='Кузнец жерла и три некроманта';
 const fit=(model:THREE.Object3D,height:number,x:number,y:number,z:number,yaw:number)=>{model.traverse(o=>{if(o instanceof THREE.SkinnedMesh)o.frustumCulled=false;});model.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(model),s=height/(box.max.y-box.min.y),f=new THREE.Group();f.scale.setScalar(s);model.position.y-=box.min.y;f.add(model);const r=new THREE.Group();r.position.set(x,y,z);r.rotation.y=yaw;r.add(f);root.add(r);return {root:r,scale:s,model};};
 const stone=new THREE.MeshStandardMaterial({color:'#55515a',roughness:1}),disks:Array<{x:number;z:number;y:number;r:number}>=[];
 const pad=(x:number,z:number,y:number,r:number)=>{const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r+.4,10,24),stone);mesh.position.set(x,y-5,z);mesh.receiveShadow=true;root.add(mesh);disks.push({x,z,y,r});};
 pad(CRATER_SMITH_POSITION.x,CRATER_SMITH_POSITION.z,CRATER_WORKSHOP_Y,CRATER_WORKSHOP_RADIUS);
 const smith=fit(smithSource,9,CRATER_SMITH_POSITION.x,CRATER_WORKSHOP_Y+.04,CRATER_SMITH_POSITION.z,.18);
 const hammerHand=smithSource.getObjectByName('SmithL_Forearm') as THREE.Bone|undefined;
 if(!hammerHand)throw Error('Craftsman hammer palm missing');const hammerRest=hammerHand.quaternion.clone(),hammerAxis=new THREE.Vector3(1,0,.65).normalize().applyQuaternion(smith.root.quaternion).applyQuaternion(hammerHand.getWorldQuaternion(new THREE.Quaternion()).invert());const palm=smithSource.getObjectByName('SmithL_Palm')!,palmRest=palm.quaternion.clone(),palmAxis=new THREE.Vector3(1,0,.7).normalize();let forgeTime=0;
 const necromancers=CRATER_NECROMANCERS.map((site,i)=>{
  const ground=floor(site.x,site.z);if(ground==null)throw Error('Necromancer has no ground');const y=ground+.04;
  const model=clone(necroSource),f=fit(model,14,site.x,y,site.z,site.yaw),staff=model.getObjectByName('NecroStaff'),hand=model.getObjectByName('NecroRHand'),forearm=model.getObjectByName('NecroRForearm');if(!staff||!hand||!forearm)throw Error('Necromancer fitted skeleton missing');
  const staffY=staff.position.y,handY=hand.position.y,forearmY=forearm.position.y,strike=createNecromancerStrike({x:site.x,y,z:site.z},i*.25);
  return {...f,name:site.name,strike,groundY:y,update(dt:number,hero:{x:number;y:number;z:number},available=true,contact=true){const event=strike.update(dt,hero,available,contact);const lift=strike.lift;staff.position.y=staffY+lift;forearm.position.y=forearmY+lift*.28;hand.position.y=handY+lift*.72;return event;}};
 });
 const floorAt=(x:number,z:number)=>{let y:number|null=null;for(const d of disks)if(Math.hypot(x-d.x,z-d.z)<=d.r)y=Math.max(y??-Infinity,d.y);return y;};
 const blocks=(x:number,z:number,y:number,padding=2)=>necromancers.some(n=>Math.abs(y-n.groundY)<14&&Math.hypot(x-n.root.position.x,z-n.root.position.z)<2.2+padding)||Math.abs(y-CRATER_WORKSHOP_Y)<12&&Math.hypot(x-CRATER_SMITH_POSITION.x,z-CRATER_SMITH_POSITION.z)<2.2+padding;
 const nearSmith=(x:number,y:number,z:number)=>Math.hypot(x-CRATER_SMITH_POSITION.x,z-CRATER_SMITH_POSITION.z)<15&&Math.abs(y-CRATER_WORKSHOP_Y)<6;
 return {root,smith,necromancers,floorAt,blocks,nearSmith,get bodies(){return [...necromancers.map(n=>({x:n.root.position.x,y:n.groundY,z:n.root.position.z,radius:3.1,height:14,solid:true})),{x:smith.root.position.x,y:CRATER_WORKSHOP_Y,z:smith.root.position.z,radius:2.4,height:9,solid:true}];},
  update(dt:number){if(dt<=0)return;forgeTime=(forgeTime+dt)%1.8;const p=forgeTime/1.8,angle=p<.18?0:p<.34?THREE.MathUtils.smoothstep(p,.18,.34)*1.55:p<.4?1.55:(1-THREE.MathUtils.smoothstep(p,.4,.9))*1.55;hammerHand.quaternion.copy(hammerRest).multiply(new THREE.Quaternion().setFromAxisAngle(hammerAxis,angle*.23));palm.quaternion.copy(palmRest).multiply(new THREE.Quaternion().setFromAxisAngle(palmAxis,angle*.48));},
  dispose(){const skeletons=new Set<THREE.Skeleton>();root.traverse(o=>{if(o instanceof THREE.SkinnedMesh)skeletons.add(o.skeleton);});skeletons.forEach(s=>s.dispose());},
 };
}
