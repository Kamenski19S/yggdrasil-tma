export type MinePoint={x:number;z:number};
const controls:MinePoint[]=[{x:0,z:36},{x:0,z:-96},{x:84,z:-96},{x:84,z:-192},{x:24,z:-192},{x:24,z:-240}];
const points:MinePoint[]=[controls[0]];
function line(end:MinePoint){const a=points[points.length-1],length=Math.hypot(end.x-a.x,end.z-a.z),n=Math.ceil(length);for(let i=1;i<=n;i++)points.push({x:a.x+(end.x-a.x)*i/n,z:a.z+(end.z-a.z)*i/n});}
for(let i=1;i<controls.length-1;i++){
 const a=controls[i-1],b=controls[i],c=controls[i+1],ab=Math.hypot(b.x-a.x,b.z-a.z),bc=Math.hypot(c.x-b.x,c.z-b.z),r=Math.min(24,ab*.4,bc*.4),ix=(b.x-a.x)/ab,iz=(b.z-a.z)/ab,ox=(c.x-b.x)/bc,oz=(c.z-b.z)/bc;
 const entry={x:b.x-ix*r,z:b.z-iz*r},exit={x:b.x+ox*r,z:b.z+oz*r},center={x:entry.x+ox*r,z:entry.z+oz*r};line(entry);
 const start=Math.atan2(entry.z-center.z,entry.x-center.x),end=Math.atan2(exit.z-center.z,exit.x-center.x),delta=Math.atan2(Math.sin(end-start),Math.cos(end-start)),n=Math.ceil(Math.abs(delta)*r);
 for(let j=1;j<=n;j++){const angle=start+delta*j/n;points.push({x:center.x+Math.cos(angle)*r,z:center.z+Math.sin(angle)*r});}
}
line(controls[controls.length-1]);
export const MINE_ROUTE=points;
const distances=[0];for(let i=1;i<points.length;i++)distances.push(distances[i-1]+Math.hypot(points[i].x-points[i-1].x,points[i].z-points[i-1].z));
export const MINE_ROUTE_LENGTH=distances[distances.length-1];
const tangents=points.map((_,i)=>{const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],len=Math.hypot(b.x-a.x,b.z-a.z);return {x:(b.x-a.x)/len,z:(b.z-a.z)/len};});
export function mineFrameAt(s:number){s=Math.max(0,Math.min(MINE_ROUTE_LENGTH,s));let lo=0,hi=distances.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(distances[mid]>s)hi=mid;else lo=mid;}const a=points[lo],b=points[hi],len=distances[hi]-distances[lo],t=(s-distances[lo])/len,ax=tangents[lo].x+(tangents[hi].x-tangents[lo].x)*t,az=tangents[lo].z+(tangents[hi].z-tangents[lo].z)*t,norm=Math.hypot(ax,az),tx=ax/norm,tz=az/norm;return {x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t,tx,tz,nx:-tz,nz:tx,s};}
export function mineRouteFrame(x:number,z:number){let best=Infinity,bestS=0,px=points[0].x,pz=points[0].z;for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],dx=b.x-a.x,dz=b.z-a.z,len=distances[i]-distances[i-1],t=Math.max(0,Math.min(1,((x-a.x)*dx+(z-a.z)*dz)/(len*len))),qx=a.x+dx*t,qz=a.z+dz*t,d=Math.hypot(x-qx,z-qz);if(d<best){best=d;bestS=distances[i-1]+len*t;px=qx;pz=qz;}}const f=mineFrameAt(bestS);return {...f,distance:best,offset:(x-px)*f.nx+(z-pz)*f.nz};}
export function mineTunnelFloor(x:number,z:number){const endFade=Math.min(1,Math.max(0,(-z+28)/14),Math.max(0,(z+240)/12));return endFade*(.26*Math.sin(z*.13)+.22*Math.sin(x*.1)*Math.cos(z*.08));}
export const TUNNEL_HALF_WIDTH=17.5,TUNNEL_HEIGHT=26;
export function tunnelWalkable(x:number,z:number,radius=1.8){if(z>38||z< -242)return false;return mineRouteFrame(x,z).distance+radius<15;}
