const KEY='yggdrasil:muspelheim:ash-lord';
const RETURN_KEY=KEY+':return';
export type AshLordReturn={x:number;z:number;y:number};
export function readAshLordVisit():{x:number;z:number}|null{try{const p=JSON.parse(sessionStorage.getItem(KEY)||'null');return p&&Number.isFinite(p.x)&&Number.isFinite(p.z)&&p.x>=-49.7&&p.x<=49.7&&p.z>=-77.7&&p.z<=69?{x:p.x,z:p.z}:null;}catch{return null;}}
export function saveAshLordVisit(p={x:0,z:43}){try{sessionStorage.setItem(KEY,JSON.stringify(p));}catch{}}
export function beginAshLordVisit(p:AshLordReturn){try{sessionStorage.setItem(RETURN_KEY,JSON.stringify(p));}catch{}saveAshLordVisit();}
export function readAshLordReturn():AshLordReturn|null{try{const p=JSON.parse(sessionStorage.getItem(RETURN_KEY)||'null');return p&&Number.isFinite(p.x)&&Number.isFinite(p.z)&&Number.isFinite(p.y)&&p.x>=270&&p.x<=330&&p.z>=-160&&p.z<=-60&&p.y>=0&&p.y<=100?{x:p.x,z:p.z,y:p.y}:null;}catch{return null;}}
export function endAshLordVisit(){try{sessionStorage.removeItem(KEY);sessionStorage.removeItem(RETURN_KEY);}catch{}}
