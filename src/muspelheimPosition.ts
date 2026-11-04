export type MuspelheimPosition={x:number;z:number;y?:number};
const KEY='yggdrasil:muspelheim:last-position:v1';
export function validMuspelheimPosition(p:unknown):p is MuspelheimPosition{
 if(!p||typeof p!=='object')return false;const v=p as MuspelheimPosition;
 return Number.isFinite(v.x)&&Number.isFinite(v.z)&&Math.abs(v.x)<=600&&v.z>=-600&&v.z<=300&&(v.y===undefined||Number.isFinite(v.y)&&v.y>=-200&&v.y<=350);
}
export function readMuspelheimPosition():MuspelheimPosition|undefined{try{const p=JSON.parse(sessionStorage.getItem(KEY)||'null');return validMuspelheimPosition(p)?p:undefined;}catch{return undefined;}}
export function writeMuspelheimPosition(p:MuspelheimPosition){if(!validMuspelheimPosition(p))return;try{sessionStorage.setItem(KEY,JSON.stringify(p));}catch{}}
