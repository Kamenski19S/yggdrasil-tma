import * as THREE from 'three';
import {ISA_SLOTS} from './isaWallPuzzle';
/** The two outer tracks go around the assembled triangle rather than through its center. */
export function isaSlideRoute(from:number,to:number){
 const a=ISA_SLOTS[from],b=ISA_SLOTS[to],outer=(from===1&&(to===3||to===4))||(to===1&&(from===3||from===4));
 const points=[new THREE.Vector3(a.x,a.y,-.04)];
 if(outer){const side=(from===3||to===3)?-1:1;const bend=[new THREE.Vector3(side*3.9,3.6,-.04),new THREE.Vector3(side*4.8,.5,-.04)];if(from!==1)bend.reverse();points.push(...bend);}
 points.push(new THREE.Vector3(b.x,b.y,-.04));
 return new THREE.CatmullRomCurve3(points,false,'centripetal');
}
