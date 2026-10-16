import * as THREE from 'three';

// Editable sketch coordinates, viewed from above: bottom tip meets the first gateway.
// Each row is one cubic Bezier: start, two handles, end. Shared ends make junctions.
export const ROAD_CURVES = [
 [703,1285,735,1160,760,1130,733,1040],
 [733,1040,710,875,625,885,564,905],
 [564,905,465,929,284,1016,341,911],
 [341,911,310,838,330,780,215,747],
 [215,747,80,700,66,810,77,904],
 [77,904,100,1060,226,1080,367,1150],
 [341,911,395,800,414,660,304,596],
 [304,596,226,551,211,476,219,401],
 [219,401,241,267,478,185,707,69],
 [742,1076,835,914,854,912,795,754],
 [795,754,666,661,670,648,683,529],
 [683,529,709,339,778,266,862,143],
 [795,754,667,727,524,735,489,630],
 [489,630,423,449,443,406,569,248],
 [795,754,738,669,773,597,864,581],
 [864,581,1046,562,1113,525,1218,299],
 [962,570,1075,620,1159,627,1061,736],
 [1061,736,943,860,970,884,1006,966],
 [1006,966,1034,1033,1061,1103,1078,1143],
] as const;
export const ROAD_WIDTH=10;
export const ROAD_BOUNDS={minX:-525,maxX:525,minZ:-458.75,maxZ:140};
export function roadWorldPoint(x:number,y:number){return {x:(x-703)*.8,z:-420+y*550/1285};}
export function roadLines(){return ROAD_CURVES.map(c=>Array.from({length:65},(_,i)=>{
 const t=i/64,u=1-t;
 return roadWorldPoint(u*u*u*c[0]+3*u*u*t*c[2]+3*u*t*t*c[4]+t*t*t*c[6],u*u*u*c[1]+3*u*u*t*c[3]+3*u*t*t*c[5]+t*t*t*c[7]);
}));}
// A single mask joins every branch without overlapping transparent road meshes.
// Ground shading reads it in world coordinates, so the road follows future terrain edits.
export function createRoadMask(){
 const canvas=document.createElement('canvas');canvas.width=2048;canvas.height=1168;
 const context=canvas.getContext('2d');if(!context)throw Error('Road mask canvas is unavailable');
 const b=ROAD_BOUNDS,sx=canvas.width/(b.maxX-b.minX),sz=canvas.height/(b.maxZ-b.minZ);
 context.fillStyle='#000';context.fillRect(0,0,canvas.width,canvas.height);
 context.scale(sx,sz);context.translate(-b.minX,-b.minZ);
 context.strokeStyle='#fff';context.lineWidth=ROAD_WIDTH;context.lineCap='round';context.lineJoin='round';
 for(const line of roadLines()){context.beginPath();line.forEach((p,i)=>i?context.lineTo(p.x,p.z):context.moveTo(p.x,p.z));context.stroke();}
 const texture=new THREE.CanvasTexture(canvas);texture.flipY=false;
 texture.generateMipmaps=false;texture.minFilter=texture.magFilter=THREE.LinearFilter;
 texture.name='Editable Muspelheim road layout';return texture;
}
