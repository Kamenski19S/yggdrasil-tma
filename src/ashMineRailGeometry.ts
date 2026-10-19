import * as THREE from 'three';
/** Slice long metal faces before deformation; moving only their ends leaves straight chords. */
export function sliceRailsLongitudinal(source:THREE.BufferGeometry,maxLength:number){
 const p=source.getAttribute('position'),uv=source.getAttribute('uv'),normals=source.getAttribute('normal'),index=source.index;
 const positions:number[]=[],texcoords:number[]=[],normalValues:number[]=[],indices:number[]=[],vertices=new Map<string,number>();
 type Vertex=number[];
 const read=(i:number):Vertex=>[p.getX(i),p.getY(i),p.getZ(i),uv?.getX(i)??0,uv?.getY(i)??0,normals?.getX(i)??0,normals?.getY(i)??1,normals?.getZ(i)??0];
 const clip=(poly:Vertex[],plane:number,keepAbove:boolean)=>{const out:Vertex[]=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],insideA=keepAbove?a[2]>=plane-1e-7:a[2]<=plane+1e-7,insideB=keepAbove?b[2]>=plane-1e-7:b[2]<=plane+1e-7;if(insideA)out.push(a);if(insideA!==insideB){const t=(plane-a[2])/(b[2]-a[2]);out.push(a.map((v,k)=>v+(b[k]-v)*t));}}return out;};
 const add=(v:Vertex)=>{const key=v.map(x=>x.toFixed(6)).join(',');let i=vertices.get(key);if(i===undefined){i=positions.length/3;vertices.set(key,i);positions.push(...v.slice(0,3));texcoords.push(v[3],v[4]);normalValues.push(...v.slice(5,8));}indices.push(i);};
 const triangle=(a:Vertex,b:Vertex,c:Vertex)=>{const ab=new THREE.Vector3(b[0]-a[0],b[1]-a[1],b[2]-a[2]),ac=new THREE.Vector3(c[0]-a[0],c[1]-a[1],c[2]-a[2]);if(ab.cross(ac).lengthSq()<1e-14)return;add(a);add(b);add(c);};
 for(let i=0;i<(index?.count??p.count);i+=3){const tri=[0,1,2].map(j=>read(index?index.getX(i+j):i+j)),min=Math.min(...tri.map(v=>v[2])),max=Math.max(...tri.map(v=>v[2]));if(max-min<=maxLength){triangle(tri[0],tri[1],tri[2]);continue;}
  for(let cut=Math.floor(min/maxLength);cut<=Math.floor(max/maxLength);cut++){const poly=clip(clip(tri,cut*maxLength,true),(cut+1)*maxLength,false);for(let j=1;j<poly.length-1;j++)triangle(poly[0],poly[j],poly[j+1]);}
 }
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(texcoords,2));geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normalValues,3));geometry.setIndex(indices);geometry.computeBoundingBox();return geometry;
}
