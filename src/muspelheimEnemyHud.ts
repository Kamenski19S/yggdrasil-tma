import * as THREE from 'three';
type Point={x:number;y:number;z:number};
type HudEnemy={combatEnabled:boolean;root:THREE.Object3D;body:{height:number};combat:{hp:number;position:Point}};
/** Combat state alone is not evidence that the player can see an enemy. */
export function selectVisibleEnemy<T extends HudEnemy>(enemies:T[],hero:Point,camera:THREE.Camera,clear:(enemy:T)=>boolean):T|undefined{
 camera.updateWorldMatrix(true,false);
 const near=(e:T)=>Math.hypot(e.combat.position.x-hero.x,e.combat.position.z-hero.z);
 return enemies.filter(e=>{
  if(!e.combatEnabled||e.combat.hp<=0||!e.root.visible||near(e)>42||Math.abs(e.combat.position.y-hero.y)>6)return false;
  const torso=new THREE.Vector3(e.combat.position.x,e.combat.position.y+e.body.height*.55,e.combat.position.z).project(camera);
  return Math.abs(torso.x)<=1&&Math.abs(torso.y)<=1&&torso.z>=-1&&torso.z<=1&&clear(e);
 }).sort((a,b)=>near(a)-near(b))[0];
}
