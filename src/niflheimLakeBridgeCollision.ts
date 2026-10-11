type Point={x:number;z:number};
const inside=(p:Point)=>Math.abs(p.x+72)>3.05&&Math.abs(p.x+72)<4.7&&p.z>-12.5&&p.z<23.5;
/** Side rails and the broken end are solid; the shore entrance remains open. */
export function lakeBridgeBlocked(from:Point,to:Point,loaded:boolean){
  if(!loaded)return false;
  const steps=Math.max(1,Math.ceil(Math.hypot(to.x-from.x,to.z-from.z)/.15));
  // Allow an older saved position in a rail to move back onto the deck or away.
  if(inside(from)&&!inside(to))return false;
  for(let i=1;i<=steps;i++){
    const p={x:from.x+(to.x-from.x)*i/steps,z:from.z+(to.z-from.z)*i/steps};
    if(inside(p))return true;
    // Until repaired, do not let Vika step off the incomplete end into the gap.
    if(Math.abs(p.x+72)<4.7&&p.z>22.65&&p.z<23.5)return true;
  }
  return false;
}
