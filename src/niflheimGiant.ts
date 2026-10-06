import * as THREE from 'three';

// Pose the original rig; no scaling or sliding a rigid seated statue.
export function createNiflheimGiant(model:THREE.Group,space:{world(x:number,y:number,z:number):THREE.Vector3;inside(x:number,z:number):boolean},mouthX:number,floorY:number){
  model.traverse((o:any)=>{if(o.isSkinnedMesh)o.skeleton.pose();if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;}});
  model.updateMatrixWorld(true);
  const bones:THREE.Bone[]=[];model.traverse(o=>{if((o as THREE.Bone).isBone)bones.push(o as THREE.Bone);});
  const find=(name:string)=>bones.find(b=>b.name.replace(/[^a-zA-Z0-9_]/g,'').startsWith(name.replace(/[^a-zA-Z0-9_]/g,'')));
  const point=(b:THREE.Object3D)=>b.getWorldPosition(new THREE.Vector3());
  const left=find('shoulder.L_'),right=find('shoulder.R_');
  const forward=left&&right?point(right).sub(point(left)).setY(0).normalize().cross(new THREE.Vector3(0,1,0)):new THREE.Vector3(0,0,1);
  const facing=Math.atan2(forward.x,forward.z);
  model.rotation.y-=facing;model.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(model),scale=13.5/Math.max(.01,bounds.max.y-bounds.min.y);
  model.scale.multiplyScalar(scale);model.updateMatrixWorld(true);
  const centre=new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
  model.position.x-=centre.x;model.position.z-=centre.z;
  const root=new THREE.Group();root.name='Великан-хранитель';root.add(model);
  const seat=space.world(mouthX,floorY,-12),front=space.world(mouthX,floorY,-11).sub(seat).normalize();
  root.position.copy(seat);root.rotation.y=Math.atan2(front.x,front.z);
  const rest=bones.map(b=>({b,q:b.quaternion.clone()}));
  const origin=model.position.clone();
  const aim=(name:string,end:string,direction:THREE.Vector3)=>{
    const b=find(name),child=find(end);if(!b||!child)return;
    root.updateMatrixWorld(true);
    const current=point(child).sub(point(b)).normalize();
    const desired=direction.clone().normalize().applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion()));
    const parentQ=b.parent!.getWorldQuaternion(new THREE.Quaternion());
    const worldQ=new THREE.Quaternion().setFromUnitVectors(current,desired).multiply(b.getWorldQuaternion(new THREE.Quaternion()));
    b.quaternion.copy(parentQ.invert().multiply(worldQ));
  };
  const pose=(standing:number)=>{
    rest.forEach(({b,q})=>b.quaternion.copy(q));model.position.copy(origin);
    for(const [a,b] of [['spine_01','spine.001_02'],['spine.001_02','spine.002_00'],['spine.002_00','spine.003_03'],['spine.003_03','spine.004_04'],['spine.004_04','spine.005_05'],['spine.005_05','spine.006_06']])aim(a,b,new THREE.Vector3(0,1,0));
    // Align the chest from both shoulders after straightening the source rig.
    const chest=find('spine_01'),sl=find('shoulder.L_'),sr=find('shoulder.R_');
    if(chest&&sl&&sr){
      root.updateMatrixWorld(true);
      const across=point(sr).sub(point(sl)).setY(0).normalize();
      // The imported rig faces -Z when its shoulder axis points +X.
      const desired=new THREE.Vector3(-1,0,0).applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion()));
      const turn=new THREE.Quaternion().setFromUnitVectors(across,desired);
      const parent=chest.parent!.getWorldQuaternion(new THREE.Quaternion());
      chest.quaternion.copy(parent.invert().multiply(turn.multiply(chest.getWorldQuaternion(new THREE.Quaternion()))));
    }
    for(const side of ['L','R']){
      aim(`thigh.${side}_`,`shin.${side}_`,new THREE.Vector3(side==='L'?.07:-.07,-standing-.08,1-standing).normalize());
      aim(`shin.${side}_`,`foot.${side}_`,new THREE.Vector3(0,-1,0));
      aim(`foot.${side}_`,`toe.${side}_`,new THREE.Vector3(0,0,1));
      aim(`upper_arm.${side}_`,`forearm.${side}_`,new THREE.Vector3(side==='L'?.2:-.2,-1,.12));
      aim(`forearm.${side}_`,`hand.${side}_`,new THREE.Vector3(0,-1,(1-standing)*.65));
    }
    root.updateMatrixWorld(true);
    const feet=['L','R'].map(s=>find(`foot.${s}_`)).filter(Boolean) as THREE.Bone[];
    if(feet.length){const lowest=Math.min(...feet.map(b=>point(b).y));model.position.y+=seat.y+.32-lowest;}
    // Move off the front of the seat as the knees straighten.
    model.position.z+=standing*2.1;
    root.updateMatrixWorld(true);
  };
  pose(1);
  model.traverse((o:any)=>{if(o.isSkinnedMesh){o.skeleton.update();o.computeBoundingBox();}});
  const uprightBounds=new THREE.Box3().setFromObject(model);
  const fit=13.5/Math.max(.01,uprightBounds.max.y-uprightBounds.min.y);
  model.scale.multiplyScalar(fit);origin.multiplyScalar(fit);
  pose(0);
  const hip=find('thigh.L_'),seatHeight=hip?point(hip).y-seat.y-.35:3.5;
  const rock=new THREE.Mesh(new THREE.CylinderGeometry(1,.94,1,9,1),new THREE.MeshStandardMaterial({color:'#7c8990',roughness:1}));
  rock.name='Камень великана';rock.position.copy(seat).addScaledVector(front,-.75);rock.position.y+=seatHeight/2;rock.rotation.y=root.rotation.y;rock.scale.set(4.1,Math.max(1.6,seatHeight),1.85);rock.castShadow=true;rock.receiveShadow=true;
  let rising=false,elapsed=0,standing=false;
  return {root,rock,update(dt:number,pos:{x:number;z:number},active:boolean){
    if(!active)return false;
    if(!rising&&!standing&&space.inside(pos.x,pos.z)&&Math.hypot(pos.x-seat.x,pos.z-seat.z)<11)rising=true;
    if(rising){elapsed=Math.min(2.8,elapsed+dt);const t=elapsed/2.8;pose(t*t*(3-2*t));if(elapsed===2.8){rising=false;standing=true;}return true;}
    return false;
  },blocked(x:number,z:number){
    const dx=x-seat.x,dz=z-seat.z,along=dx*front.x+dz*front.z,across=dx*front.z-dz*front.x;
    return Math.abs(across)<4.6&&along>-3.2&&along<(standing?4.2:3.4);
  }};
}
