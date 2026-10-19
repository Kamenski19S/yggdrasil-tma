export type MineCheckpoint={active:boolean;x:number;z:number;hp:number;guards:Record<string,number>};
const KEY='yggdrasil:ash-mine-visit:v1';
let memory:MineCheckpoint|null=null;
export function readMineCheckpoint():MineCheckpoint|null{
 try{const raw=sessionStorage.getItem(KEY);if(raw){const data=JSON.parse(raw);if(data.active===true&&Number.isFinite(data.x)&&Number.isFinite(data.z)&&Number.isFinite(data.hp)&&data.hp>=-1&&data.guards&&typeof data.guards==='object'){memory=data;return {...data,guards:{...data.guards}};}}}catch{}
 return memory?.active?{...memory,guards:{...memory.guards}}:null;
}
export function writeMineCheckpoint(value:MineCheckpoint){memory={...value,guards:{...value.guards}};try{sessionStorage.setItem(KEY,JSON.stringify(memory));}catch{}}
export function beginMineVisit(){writeMineCheckpoint({active:true,x:0,z:12,hp:-1,guards:{}});}
export function endMineVisit(){memory=null;try{sessionStorage.removeItem(KEY);}catch{}}
