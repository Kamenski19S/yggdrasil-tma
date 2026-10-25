import type * as THREE from 'three';
import {createShadowAssassin} from './muspelheimShadowAssassin';
import {SURT_PASS_POSITION} from './muspelheimSurtPassLayout';
export const ORC_WARCHIEF_ASSET='Muspelheim_Orc_Warchief.glb';
/** Canyon landing after the far tower and final stair of the stone bridge. */
export const ORC_WARCHIEF_POSITION={x:SURT_PASS_POSITION.x,z:SURT_PASS_POSITION.z-92};
export const ORC_WARCHIEF_CREDIT={title:'Orc Warchief with Iron Crown and Cleaver',author:'Pigcraft',url:'https://sketchfab.com/3d-models/orc-warchief-with-iron-crown-and-cleaver-2df6bfe33e7145cc953838f7eccd677b'};
export function createOrcWarchief(model:THREE.Object3D,clips:THREE.AnimationClip[],floorAt:(x:number,z:number)=>number|null,clock=Date.now){
 const at=ORC_WARCHIEF_POSITION,y=floorAt(at.x,at.z);if(y==null||!Number.isFinite(y))throw Error('Orc landing has no ground');
 const actor=createShadowAssassin(model,clips,y,clock,{position:at,height:18,radius:4.4,name:'Орочий вождь',cooldownKey:'yggdrasil:muspelheim:orc-warchief:defeatedAt'});
 actor.root.rotation.y=0;return actor;
}
