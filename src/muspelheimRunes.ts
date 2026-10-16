import * as THREE from 'three';
// Stroke geometry keeps the glyphs sharp without fonts, images or extra lights.
const GLYPHS=[
 [[0,-1,0,1],[0,.8,.7,.3],[0,.1,.7,-.4]],
 [[-.6,-1,-.6,1],[-.6,1,.6,.4],[.6,.4,.6,-1]],
 [[0,-1,0,1],[0,.8,.65,.15],[.65,.15,0,-.4]],
 [[0,-1,0,1],[0,1,-.6,.3],[0,1,.6,.3]],
 [[-.65,-1,.65,1],[-.65,1,.65,-1]],
 [[0,-1,0,1],[-.65,.8,.65,-.2]],
 [[0,-1,0,1],[0,.2,-.6,.8],[0,.2,.6,.8]],
 [[0,1,-.65,0],[-.65,0,0,-1],[0,-1,.65,0],[.65,0,0,1]],
];
export function createGatewayRunes(surfaceAt?:(x:number,y:number,side:number)=>number){
 const group=new THREE.Group();group.name='Procedural blue rune circle';
 function geometry(width:number){
  const vertices:number[]=[],indices:number[]=[];
  for(const side of [-1,1])for(let i=0;i<24;i++){
   const angle=i*Math.PI*2/24,c=Math.cos(angle),s=Math.sin(angle),depth=surfaceAt?.(c*21,16+s*21,side)??side*4.3;
   for(const [ax,ay,bx,by] of GLYPHS[i%GLYPHS.length]){
    const length=Math.hypot(bx-ax,by-ay),nx=-(by-ay)/length*width/2,ny=(bx-ax)/length*width/2,start=vertices.length/3;
    for(const [x,y] of [[ax+nx,ay+ny],[ax-nx,ay-ny],[bx+nx,by+ny],[bx-nx,by-ny]]){
     // Local up points out from the circle, following the fixed stone ring.
     vertices.push(c*21+c*y-s*x,16+s*21+s*y+c*x,depth);
    }
    indices.push(start,start+1,start+2,start+2,start+1,start+3);
   }
  }
  const result=new THREE.BufferGeometry();result.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));result.setIndex(indices);return result;
 }
 const glow=new THREE.MeshBasicMaterial({color:'#249aff',transparent:true,opacity:.24,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide,toneMapped:false});
 const core=new THREE.MeshBasicMaterial({color:'#91e9ff',side:THREE.DoubleSide,toneMapped:false});
 const halo=new THREE.Mesh(geometry(.65),glow),glyphs=new THREE.Mesh(geometry(.17),core);halo.name='Blue rune glow';glyphs.name='Blue rune strokes';group.add(halo,glyphs);
 let time=0;return {group,update(dt:number){time+=dt;glow.opacity=.23+Math.sin(time*1.5)*.045;}};
}
