import * as THREE from 'three';

export type GuardianCollider={a:THREE.Vector3;b:THREE.Vector3;radius:number;kind:'body'|'tentacle'};
const HERO_RADIUS=2.6;
/** Closest points on two finite segments, including parallel and zero-length ones. */
export function capsuleContact(c:GuardianCollider,hero:THREE.Vector3){
 const a=c.a,b=c.b,p=new THREE.Vector3(hero.x,hero.y+3,hero.z),q=new THREE.Vector3(hero.x,hero.y+11,hero.z);
 const u=b.clone().sub(a),v=q.clone().sub(p),w=a.clone().sub(p),aa=u.dot(u),bb=u.dot(v),cc=v.dot(v),dd=u.dot(w),ee=v.dot(w);
 let s=aa>1e-9?THREE.MathUtils.clamp((bb*ee-cc*dd)/Math.max(1e-9,aa*cc-bb*bb),0,1):0;
 let t=(bb*s+ee)/cc;
 if(t<0){t=0;s=aa>1e-9?THREE.MathUtils.clamp(-dd/aa,0,1):0;}
 else if(t>1){t=1;s=aa>1e-9?THREE.MathUtils.clamp((bb-dd)/aa,0,1):0;}
 const obstacle=a.clone().addScaledVector(u,s),person=p.addScaledVector(v,t),normal=obstacle.clone().sub(person),distance=normal.length();
 if(distance>1e-6)normal.divideScalar(distance);else normal.set(1,0,0);
 return {depth:c.radius+HERO_RADIUS-distance,normal,obstacle,person};
}

/** Swept player collision; allow escaping an existing overlap, never moving deeper. */
export function guardianAllowsMove(colliders:GuardianCollider[],from:THREE.Vector3,to:THREE.Vector3){
 const steps=Math.max(1,Math.ceil(from.distanceTo(to)/.65)),p=new THREE.Vector3();
 for(const c of colliders){
  const initial=Math.max(0,capsuleContact(c,from).depth);
  for(let i=1;i<=steps;i++){
   p.lerpVectors(from,to,i/steps);
   if(capsuleContact(c,p).depth>Math.max(.02,initial+.005))return false;
  }
 }
 return true;
}
