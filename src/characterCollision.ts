export type CharacterBody={x:number;y:number;z:number;radius:number;height:number;solid:boolean};
export type WalkPoint={x:number;z:number};
const EPS=.002;
export function bodyAt(body:CharacterBody,root:{x:number;y:number;z:number},next:{x:number;y:number;z:number}):CharacterBody{return {...body,x:body.x+next.x-root.x,y:next.y,z:body.z+next.z-root.z};}
export function bodiesOverlap(a:CharacterBody,b:CharacterBody){return a.solid&&b.solid&&a.y<b.y+b.height&&a.y+a.height>b.y&&Math.hypot(a.x-b.x,a.z-b.z)<a.radius+b.radius-EPS;}
/** A moving NPC must not cross the player's body even if its endpoint is clear. */
export function bodyPathBlocked(from:CharacterBody,to:CharacterBody,other:CharacterBody){
 if(!from.solid||!other.solid)return false;
 const dx=to.x-from.x,dz=to.z-from.z,length=dx*dx+dz*dz;
 const startDistance=Math.hypot(from.x-other.x,from.z-other.z),endDistance=Math.hypot(to.x-other.x,to.z-other.z);
 // A restored position may already overlap. Always permit a move out of that overlap.
 if(bodiesOverlap(from,other)&&endDistance>startDistance+EPS)return false;
 const t=length?Math.max(0,Math.min(1,((other.x-from.x)*dx+(other.z-from.z)*dz)/length)):0;
 return bodiesOverlap({...from,x:from.x+dx*t,z:from.z+dz*t,y:from.y+(to.y-from.y)*t},other);
}
/** Swept upright circles with tangential sliding. Collision is independent of combat and visibility. */
export function moveAgainstBodies(from:WalkPoint,to:WalkPoint,y:number,height:number,radius:number,bodies:readonly CharacterBody[]):WalkPoint{
 let p={...from},remaining={x:to.x-from.x,z:to.z-from.z};
 for(let pass=0;pass<4&&Math.hypot(remaining.x,remaining.z)>1e-7;pass++){
  let time=1,normal:{x:number;z:number}|undefined;
  const a=remaining.x*remaining.x+remaining.z*remaining.z;
  for(const body of bodies){
   if(!body.solid||y>=body.y+body.height||y+height<=body.y)continue;
   const mx=p.x-body.x,mz=p.z-body.z,r=radius+body.radius,c=mx*mx+mz*mz-r*r,b=mx*remaining.x+mz*remaining.z;
   if(c<0&&b>=0)continue;
   const discriminant=b*b-a*c;if(discriminant<0)continue;
   const t=c<=0?0:(-b-Math.sqrt(discriminant))/a;if(t<0||t>time||t>1)continue;
   const nx=mx+remaining.x*t,nz=mz+remaining.z*t,n=Math.hypot(nx,nz),fallback=Math.sqrt(a);
   const candidate=n>1e-8?{x:nx/n,z:nz/n}:{x:-remaining.x/fallback,z:-remaining.z/fallback};
   if(remaining.x*candidate.x+remaining.z*candidate.z>=-1e-8)continue;
   time=t;normal=candidate;
  }
  if(!normal){p={x:p.x+remaining.x,z:p.z+remaining.z};break;}
  const length=Math.sqrt(a),travel=Math.max(0,time-EPS/length);p={x:p.x+remaining.x*travel,z:p.z+remaining.z*travel};
  remaining={x:remaining.x*(1-time),z:remaining.z*(1-time)};const into=remaining.x*normal.x+remaining.z*normal.z;
  if(into<0){remaining.x-=normal.x*into;remaining.z-=normal.z*into;}
 }
 return p;
}
