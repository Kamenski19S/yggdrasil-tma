import {mineFrameAt,MINE_ROUTE_LENGTH,TUNNEL_HALF_WIDTH} from './ashMinePath';
import type {WallTrapSite} from './wallWeaponTraps';
export function mineArrowTrapSites(floor:(x:number,z:number)=>number,walkable:(x:number,z:number)=>boolean):WallTrapSite[]{
 const start=mineFrameAt(42),middle=mineFrameAt(MINE_ROUTE_LENGTH*.56),targets=[start,middle,{x:28,z:-337.5,tx:0,tz:-1}];
 return targets.map((target,i)=>{let x=target.x,z=target.z,found=false;for(let radius=0;radius<=24&&!found;radius+=2)for(let k=0;k<(radius?12:1)&&!found;k++){const xx=target.x+Math.cos(k*Math.PI/6)*radius,zz=target.z+Math.sin(k*Math.PI/6)*radius;if(walkable(xx,zz)){x=xx;z=zz;found=true;}}
  const y=floor(x,z),nx=-target.tz,nz=target.tx;
  const distance=(side:number)=>{if(i<2)return TUNNEL_HALF_WIDTH;for(let d=4;d<=100;d+=2)if(!walkable(x+nx*d*side,z+nz*d*side))return d;return 72;};
  return {x,y,z,tx:target.tx,tz:target.tz,left:distance(-1),right:distance(1)};
 });
}
