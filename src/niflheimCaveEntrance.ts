import * as THREE from 'three';
import {addEntrancePowder} from './niflheimEntrancePowder';

export const CAVE_FRONT_Z=9;

// Cut triangles at the entrance plane, interpolating normals and UVs at the rim.
export function trimCaveFront(source:THREE.BufferGeometry){
  const g=source.index?source.toNonIndexed():source.clone();
  const names=Object.keys(g.attributes),outputs:Record<string,number[]>={};
  names.forEach(n=>outputs[n]=[]);
  type Vertex=Record<string,number[]>;
  const read=(i:number):Vertex=>Object.fromEntries(names.map(n=>{
    const a=g.getAttribute(n);return[n,Array.from({length:a.itemSize},(_,k)=>a.getComponent(i,k))];
  }));
  const interpolate=(a:Vertex,b:Vertex):Vertex=>{
    const t=(CAVE_FRONT_Z-a.position[2])/(b.position[2]-a.position[2]);
    return Object.fromEntries(names.map(n=>[n,a[n].map((v,k)=>v+(b[n][k]-v)*t)]));
  };
  for(let i=0;i<g.getAttribute('position').count;i+=3){
    const triangle=[read(i),read(i+1),read(i+2)],polygon:Vertex[]=[];
    for(let j=0;j<3;j++){
      const a=triangle[j],b=triangle[(j+1)%3],insideA=a.position[2]<=CAVE_FRONT_Z,insideB=b.position[2]<=CAVE_FRONT_Z;
      if(insideA)polygon.push(a);
      if(insideA!==insideB)polygon.push(interpolate(a,b));
    }
    for(let j=1;j<polygon.length-1;j++)for(const v of [polygon[0],polygon[j],polygon[j+1]])for(const n of names)outputs[n].push(...v[n]);
  }
  const result=new THREE.BufferGeometry();
  for(const n of names)result.setAttribute(n,new THREE.Float32BufferAttribute(outputs[n],g.getAttribute(n).itemSize));
  result.normalizeNormals();result.computeBoundingBox();result.computeBoundingSphere();g.dispose();return result;
}

export function reshapeCaveEntrance(model:THREE.Object3D,stone:THREE.MeshStandardMaterial){
  model.traverse((o:any)=>{if(o.isMesh){const old=o.geometry;o.geometry=trimCaveFront(old);old.dispose();}});
  const frame=new THREE.Group();frame.name='Three monolith entrance';
  const rock=stone.clone();rock.name='floor';rock.color.set('#87949b');rock.roughness=1;
  const geometry=new THREE.DodecahedronGeometry(1,1);
  const add=(x:number,y:number,z:number,sx:number,sy:number,sz:number,tilt:number)=>{
    const block=new THREE.Mesh(geometry,rock);block.position.set(x,y,z);block.scale.set(sx,sy,sz);block.rotation.z=tilt;block.castShadow=true;block.receiveShadow=true;frame.add(block);
  };
  add(-4.9,11.7,CAVE_FRONT_Z+.35,2.6,7.2,2.6,-.055);
  add(4.9,11.7,CAVE_FRONT_Z+.35,2.6,7.2,2.6,.06);
  add(0,18,CAVE_FRONT_Z+.35,8.2,2.5,3.1,-.025);
  addEntrancePowder(frame);rock.dispose();model.add(frame);
}
