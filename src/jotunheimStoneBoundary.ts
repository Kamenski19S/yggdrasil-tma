import * as THREE from 'three';
import type {createJotunheimTerrain} from './jotunheimTerrain';

export const JOTUNHEIM_STONE_ASSET='Jotunheim_Dunga_Stone.glb';
export const STONE_WALL_CREDIT={title:'Dunga Stone',author:'Francesco Coldesina',authorUrl:'https://sketchfab.com/topfrank2013',sourceUrl:'https://sketchfab.com/3d-models/dunga-stone-506e4d2755cb4c64bb9d863636c41486',licenseUrl:'https://creativecommons.org/licenses/by/4.0/'};
export const STONE_WALL_HEIGHT=28,STONE_WALL_EDGE=577,STONE_WALL_LIMIT=548;
export type StoneWallRun={side:number;start:number;end:number};
/** Four sides, with the only opening centred on the existing gateway. */
export const STONE_WALL_RUNS:StoneWallRun[]=[
 {side:0,start:-577,end:577},{side:1,start:-577,end:577},
 {side:2,start:-577,end:-205},{side:2,start:-75,end:577},
 {side:3,start:-577,end:577},
];
export function jotunheimStoneBlocks(x:number,z:number){
 if(!Number.isFinite(x)||!Number.isFinite(z)||Math.abs(x)>580||Math.abs(z)>580)return true;
 if(Math.abs(x)>STONE_WALL_LIMIT||z< -STONE_WALL_LIMIT)return true;
 return z>STONE_WALL_LIMIT&&(x< -195||x> -85);
}
/** Reuse the scanned wall texture, baking each section onto the real terrain.
 * Vertices retain their height above the local ground, so even mountain slopes
 * get a continuous wall instead of a long horizontal slab floating in space. */
export function installJotunheimStoneBoundary(model:THREE.Object3D,terrain:ReturnType<typeof createJotunheimTerrain>){
 const root=new THREE.Group();root.name='Dunga Stone — Francesco Coldesina — CC BY 4.0';
 model.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
 const scale=STONE_WALL_HEIGHT/Math.max(.001,size.y),nativeLength=size.x*scale,halfDepth=size.z*scale/2;
 const sources:THREE.Mesh[]=[];model.traverse(o=>{if(o instanceof THREE.Mesh)sources.push(o);});
 const point=new THREE.Vector3(),rotation=new THREE.Matrix4(),groundCache=new Map<string,number>();
 function ground(x:number,z:number){
  const key=Math.round(x*4)+','+Math.round(z*4);const cached=groundCache.get(key);if(cached!==undefined)return cached;
  let y=terrain.height(x,z);
  if(y==null)for(const factor of [.98,.95,.9]){y=terrain.height(x*factor,z*factor);if(y!=null)break;}
  const result=y??0;groundCache.set(key,result);return result;
 }
 const segments:{side:number;start:number;end:number}[]=[];
 for(const run of STONE_WALL_RUNS){
  const count=Math.max(1,Math.round((run.end-run.start)/nativeLength)),length=(run.end-run.start)/count;
  const yaw=run.side===0?0:run.side===1?-Math.PI/2:run.side===2?Math.PI:Math.PI/2;
  rotation.makeRotationY(yaw);
  for(let i=0;i<count;i++){
   // A tiny overlap hides the scan's irregular end edges at repeated joins.
   const start=run.start+i*length,end=start+length,mid=(start+end)/2;
   const cx=run.side===0||run.side===2?mid:run.side===1?STONE_WALL_EDGE:-STONE_WALL_EDGE;
   const cz=run.side===1||run.side===3?mid:run.side===0?-STONE_WALL_EDGE:STONE_WALL_EDGE;
   segments.push({side:run.side,start,end});
   for(const source of sources){
    const geometry=source.geometry.clone();
    // Quantized GLBs may use normalized integer attributes. World-space baking
    // needs writable floats so coordinates cannot overflow their source buffers.
    for(const [name,attribute] of Object.entries(geometry.attributes)){
     const data=new Float32Array(attribute.count*attribute.itemSize);
     for(let k=0;k<attribute.count;k++)for(let c=0;c<attribute.itemSize;c++)data[k*attribute.itemSize+c]=attribute.getComponent(k,c);
     geometry.setAttribute(name,new THREE.Float32BufferAttribute(data,attribute.itemSize));
    }
    geometry.applyMatrix4(source.matrixWorld);const positions=geometry.getAttribute('position');
    for(let k=0;k<positions.count;k++){
     point.fromBufferAttribute(positions,k);
     const elevation=(point.y-bounds.min.y)*scale;
     point.set((point.x-center.x)*(length+(i>0?1:0))/size.x,0,(point.z-center.z)*scale).applyMatrix4(rotation);
     point.x+=cx;point.z+=cz;point.y=ground(point.x,point.z)+elevation-3.5;
     positions.setXYZ(k,point.x,point.y,point.z);
    }
    positions.needsUpdate=true;geometry.computeVertexNormals();if(geometry.index&&geometry.getAttribute('uv'))geometry.computeTangents();
    geometry.computeBoundingBox();geometry.computeBoundingSphere();
    const mesh=new THREE.Mesh(geometry,source.material);mesh.name=`Dunga Stone perimeter ${run.side}:${i}`;root.add(mesh);
   }
  }
 }
 // Camera rays see the wall as solid even at small holes in the scan.
 function cameraHeight(x:number,z:number,floor:number|null){
  for(const run of STONE_WALL_RUNS){
   const cross=run.side===0?z+STONE_WALL_EDGE:run.side===1?x-STONE_WALL_EDGE:run.side===2?z-STONE_WALL_EDGE:x+STONE_WALL_EDGE;
   const along=run.side===0||run.side===2?x:z;
   if(Math.abs(cross)<=halfDepth+2&&along>=run.start-1&&along<=run.end+1)return (floor??ground(x,z))+STONE_WALL_HEIGHT;
  }
  return floor;
 }
 return {root,segments,halfDepth,cameraHeight};
}
