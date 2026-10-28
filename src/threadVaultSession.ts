const KEY='yggdrasil:muspelheim:thread-vault';
export type ThreadVaultVisit={x:number;z:number};
export function readThreadVaultVisit():ThreadVaultVisit|null{try{const p=JSON.parse(sessionStorage.getItem(KEY)||'null');return p&&Number.isFinite(p.x)&&Number.isFinite(p.z)&&p.x>=-58&&p.x<=58&&p.z>=-83&&p.z<=69?{x:p.x,z:p.z}:null;}catch{return null;}}
export function saveThreadVaultVisit(p:ThreadVaultVisit={x:0,z:43}){try{sessionStorage.setItem(KEY,JSON.stringify(p));}catch{}}
export function endThreadVaultVisit(){try{sessionStorage.removeItem(KEY);}catch{}}
