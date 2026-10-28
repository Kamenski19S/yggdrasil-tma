import * as THREE from 'three';
import {FORGE_RETURN} from './muspelheimForge';

export const ROAD_WIDTH=15;
export const ROAD_BOUNDS={minX:-525,maxX:525,minZ:-458.75,maxZ:140};
type RoadPoint={x:number;z:number};
type RoadRoute={id:string;name:string;points:readonly (readonly [number,number])[]};
/** Roads now join the current entrances. No painted route climbs Surt's sealed bank. */
export const ROAD_ROUTES:readonly RoadRoute[]=[
 {id:'gate',name:'Первые врата — развилка',points:[[0,140],[0,95],[0,25]]},
 {id:'west',name:'Западная дорога',points:[[0,25],[-60,0],[-140,0],[-210,0]]},
 {id:'ymir',name:'Память Имира',points:[[-60,0],[-88,25],[-100,25]]},
 {id:'norns',name:'Колодец трёх норн',points:[[-140,0],[-161,-28]]},
 {id:'vault',name:'Хранилище тёмных нитей',points:[[-210,0],[-240,-20],[-274,-20]]},
 {id:'sanctuary',name:'Ледяное святилище',points:[[-210,0],[-255,12],[-265,61.5],[-325,61.5],[-365,45],[-385,15]]},
 {id:'ravine',name:'Подход к ущелью',points:[[-365,45],[-365,26]]},
 {id:'forge',name:'Кузница',points:[[0,95],[65,95],[FORGE_RETURN.x,FORGE_RETURN.z]]},
 {id:'east',name:'Крепость Пепельного легиона',points:[[0,25],[60,15],[140,2],[240,2],[240,-15]]},
 {id:'ash-volcano',name:'Подножье пепельного вулкана',points:[[0,25],[0,-70],[0,-100]]},
 {id:'fortress-east',name:'Восточные врата крепости',points:[[480,-85],[420,-85],[390,-107.5]]},
 {id:'crater',name:'Восточный вулкан',points:[[240,2],[280,15],[325,15],[375,40],[450,55],[480,-20],[480,-85],[480,-190],[415,-220],[340,-240]]},
];

/** Small, bounded corner rounds stay inside the route's control polygon. */
const junctions=new Set(ROAD_ROUTES.flatMap(r=>[r.points[0],r.points[r.points.length-1]]).map(p=>p.join(',')));
function roundRoad(points:RoadRoute['points']):RoadPoint[]{
 const output:RoadPoint[]=[];
 const line=(a:RoadPoint,b:RoadPoint)=>{const count=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/2));for(let i=1;i<=count;i++)output.push({x:THREE.MathUtils.lerp(a.x,b.x,i/count),z:THREE.MathUtils.lerp(a.z,b.z,i/count)});};
 const p=points.map(([x,z])=>({x,z}));output.push(p[0]);let previous=p[0];
 for(let i=1;i<p.length-1;i++){
  const a=p[i-1],b=p[i],c=p[i+1];if(junctions.has(`${b.x},${b.z}`)){line(previous,b);previous=b;continue;}const ab=Math.hypot(b.x-a.x,b.z-a.z),bc=Math.hypot(c.x-b.x,c.z-b.z),radius=Math.min(7,ab*.2,bc*.2);
  const entry={x:b.x+(a.x-b.x)*radius/ab,z:b.z+(a.z-b.z)*radius/ab},exit={x:b.x+(c.x-b.x)*radius/bc,z:b.z+(c.z-b.z)*radius/bc};line(previous,entry);
  const count=Math.max(4,Math.ceil(radius));for(let k=1;k<=count;k++){const t=k/count,u=1-t;output.push({x:u*u*entry.x+2*u*t*b.x+t*t*exit.x,z:u*u*entry.z+2*u*t*b.z+t*t*exit.z});}previous=exit;
 }
 line(previous,p[p.length-1]);return output;
}
const lines=ROAD_ROUTES.map(route=>roundRoad(route.points));
export function roadLines(){return lines;}
// One mask drives the ground, air glow, map and road patrols.
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
 texture.name='Muspelheim roads to current location entrances';return texture;
}
