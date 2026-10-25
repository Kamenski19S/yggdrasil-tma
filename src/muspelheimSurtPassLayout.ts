import * as THREE from 'three';
/** Longitudinal crossing in the final eastern arm of the canyon. */
export const SURT_PASS_POSITION={x:-65,z:-350};
export const SURT_PASS_SCALE={along:4,across:6,height:6.5};
export const SURT_PASS_BASE_Y=-82.6;
export function surtPassLocal(x:number,z:number){return {along:SURT_PASS_POSITION.z-z,across:x-SURT_PASS_POSITION.x};}
export function surtPassPitDepth(x:number,z:number){const p=surtPassLocal(x,z);return -140*(1-THREE.MathUtils.smoothstep(Math.abs(p.along),24,32))*(1-THREE.MathUtils.smoothstep(Math.abs(p.across),42,58));}
/** Keep the complete bridge, both towers and their stair approaches clear of ridge overlays. */
export function surtPassRidgeProtection(x:number,z:number){const p=surtPassLocal(x,z);return 1-(1-THREE.MathUtils.smoothstep(Math.abs(p.along),62,78))*(1-THREE.MathUtils.smoothstep(Math.abs(p.across),65,80));}
export function surtPassWalkHeight(along:number){
 const a=Math.abs(along);if(a>75)return null;
 const h=a<=36?5.4-2.9*(a/36)**2:a<=58?2.5:2.5*(75-a)/17;
 return SURT_PASS_BASE_Y+h*SURT_PASS_SCALE.height+.12;
}
