const TARGET='yggdrasil:world-recovery-target';
const RECOVERY_WINDOW=60_000;
export type LoadedWorld='midgard'|'niflheim'|'muspelheim'|'underground';

/** Retry a stale deployment once with fresh HTML; never clear the player's save. */
export async function loadWorld<T>(world:LoadedWorld,loader:()=>Promise<T>):Promise<T>{
 try{
  const module=await loader();
  try{sessionStorage.removeItem('yggdrasil:world-retry:'+world);}catch{}
  return module;
 }catch(error){
  const message=error instanceof Error?error.message:String(error);
  if(!/fetch dynamically imported|importing a module|loading dynamically imported|preload CSS|load failed/i.test(message))throw error;
  const key='yggdrasil:world-retry:'+world,now=Date.now();
  try{
   const previous=Number(sessionStorage.getItem(key))||0;
   if(previous&&now-previous<RECOVERY_WINDOW)throw error;
   sessionStorage.setItem(key,String(now));
   sessionStorage.setItem(TARGET,world);
  }catch{throw error;}
  const fresh=new URL(window.location.href);
  fresh.searchParams.set('worldVersion',String(now));
  window.location.replace(fresh.toString());
  return new Promise<T>(()=>{}); // Navigation replaces this suspended application.
 }
}
export function consumeWorldRecovery():LoadedWorld|null{
 try{
  const world=sessionStorage.getItem(TARGET);sessionStorage.removeItem(TARGET);
  return world==='midgard'||world==='niflheim'||world==='muspelheim'||world==='underground'?world:null;
 }catch{return null;}
}
