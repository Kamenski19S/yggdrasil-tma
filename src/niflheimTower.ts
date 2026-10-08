import * as THREE from 'three';
import {BASE} from './core';

// Subtract a passage with an optional arched crown while interpolating its UVs.
export function carveTowerPassage(mesh:THREE.Mesh,center:THREE.Vector3,floor:number,width=6,height=8.6,archRise=0){
  const source=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
  const attributes=Object.entries(source.attributes).sort(([a],[b])=>a==='position'?-1:b==='position'?1:0),stride=attributes.reduce((n,[,a])=>n+a.itemSize,0);
  const output:number[]=[];
  const planes:[number,number,number][]=[
    [1,0,center.x-width/2],[-1,0,-center.x-width/2],[0,1,floor-.08],[0,-1,-floor-height]
  ];
  if(archRise>0)for(let i=0;i<24;i++){
    const a=i*Math.PI/24,b=(i+1)*Math.PI/24;
    const x1=center.x+width/2*Math.cos(a),y1=floor+height-archRise+archRise*Math.sin(a);
    const x2=center.x+width/2*Math.cos(b),y2=floor+height-archRise+archRise*Math.sin(b);
    const nx=-(y2-y1),ny=x2-x1;planes.push([nx,ny,nx*x1+ny*y1]);
  }
  const emit=(polygon:number[][])=>{for(let i=1;i<polygon.length-1;i++)output.push(...polygon[0],...polygon[i],...polygon[i+1]);};
  const split=(polygon:number[][],nx:number,ny:number,limit:number)=>{
    const inside:number[][]=[],outside:number[][]=[];
    for(let i=0;i<polygon.length;i++){
      const a=polygon[i],b=polygon[(i+1)%polygon.length],da=a[0]*nx+a[1]*ny-limit,db=b[0]*nx+b[1]*ny-limit;
      (da>=0?inside:outside).push(a);
      if((da>=0)!==(db>=0)){
        const t=da/(da-db),v=a.map((value,k)=>value+(b[k]-value)*t);inside.push(v);outside.push(v);
      }
    }
    return {inside,outside};
  };
  for(let i=0;i<source.getAttribute('position').count;i+=3){
    let polygon:number[][]=[];
    for(let v=i;v<i+3;v++){const data:number[]=[];for(const [,a] of attributes)for(let k=0;k<a.itemSize;k++)data.push(a.array[v*a.itemSize+k]);polygon.push(data);}
    for(const [nx,ny,limit] of planes){if(!polygon.length)break;const parts=split(polygon,nx,ny,limit);emit(parts.outside);polygon=parts.inside;}
  }
  const geometry=new THREE.BufferGeometry();let offset=0;
  for(const [name,a] of attributes){const values:number[]=[];for(let i=0;i<output.length;i+=stride)for(let k=0;k<a.itemSize;k++)values.push(output[i+offset+k]);geometry.setAttribute(name,new THREE.Float32BufferAttribute(values,a.itemSize));offset+=a.itemSize;}
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();source.dispose();mesh.geometry.dispose();mesh.geometry=geometry;
}

export function installTowerEntrance(scene:THREE.Scene,tower:THREE.Object3D,standing:THREE.Mesh,ground:(x:number,z:number)=>number){
  tower.updateMatrixWorld(true);
  // Bake into world coordinates so the cut, doors and collisions share one frame.
  const geometry=standing.geometry.clone().applyMatrix4(standing.matrixWorld);standing.geometry.dispose();standing.geometry=geometry;
  scene.add(standing);standing.position.set(0,0,0);standing.rotation.set(0,0,0);standing.scale.set(1,1,1);standing.updateMatrix();
  const bounds=new THREE.Box3().setFromObject(standing),center=bounds.getCenter(new THREE.Vector3());
  const floor=bounds.min.y+.12,artWidth=6.6,artHeight=8.25,halfWidth=artWidth*.265,height=artHeight*.86,archRise=artHeight*.22;
  carveTowerPassage(standing,center,floor,halfWidth*2,height,archRise);
  const radius=Math.min(bounds.max.x-bounds.min.x,bounds.max.z-bounds.min.z)/2;
  const frontZ=center.z+Math.sqrt(Math.max(1,radius*radius-halfWidth*halfWidth))+.08,backZ=center.z-Math.sqrt(Math.max(1,radius*radius-halfWidth*halfWidth))-.08;
  const root=new THREE.Group();root.name='Двери разрушенной башни';scene.add(root);
  const art=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.72,metalness:.15,alphaTest:.15,side:THREE.DoubleSide});
  const stone=new THREE.MeshStandardMaterial({color:'#6f7378',roughness:.95}),silver=new THREE.MeshStandardMaterial({color:'#73818b',metalness:.7,roughness:.55});
  let active=true;
  new THREE.TextureLoader().load(`${BASE}img/models/nidhogg_silver_dragon_door.webp`,texture=>{if(!active){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;art.map=texture;art.needsUpdate=true;});
  const outline=(w:number,h:number,rise:number)=>{
    const shape=new THREE.Shape();shape.moveTo(-w/2,0);shape.lineTo(w/2,0);shape.lineTo(w/2,h-rise);shape.absellipse(0,h-rise,w/2,rise,0,Math.PI,false,0);shape.lineTo(-w/2,0);return shape;
  };
  const leafShape=outline(halfWidth*2,height,archRise),frameShape=outline(artWidth,artHeight,artHeight*.36);
  // Leave the masonry fixed while the silver leaf turns around its left hinge.
  frameShape.holes.push(new THREE.Path(leafShape.getPoints(48)));
  const artwork=(shape:THREE.Shape)=>{
    const geometry=new THREE.ShapeGeometry(shape,48),positions=geometry.getAttribute('position'),uv=geometry.getAttribute('uv');
    for(let i=0;i<positions.count;i++)uv.setXY(i,(positions.getX(i)+artWidth/2)/artWidth,positions.getY(i)/artHeight);
    return geometry;
  };
  const makeDoor=(z:number,sealed:boolean)=>{
    const assembly=new THREE.Group();assembly.name=sealed?'Серебряная дверь у границы':'Серебряная дверь — вход Вики';assembly.position.set(center.x,floor,z);if(sealed)assembly.rotation.y=Math.PI;root.add(assembly);
    const frame=new THREE.Mesh(new THREE.ExtrudeGeometry(frameShape,{depth:.38,bevelEnabled:false,curveSegments:48}),stone);frame.position.z=-.3;frame.castShadow=frame.receiveShadow=true;assembly.add(frame);
    const frameArt=new THREE.Mesh(artwork(frameShape),art);frameArt.position.z=.085;assembly.add(frameArt);
    const hinge=new THREE.Group();hinge.position.x=-halfWidth;assembly.add(hinge);
    const leaf=new THREE.Mesh(new THREE.ExtrudeGeometry(leafShape,{depth:.22,bevelEnabled:false,curveSegments:48}).translate(halfWidth,0,0),silver);leaf.position.z=-.13;leaf.castShadow=leaf.receiveShadow=true;hinge.add(leaf);
    const leafArt=new THREE.Mesh(artwork(leafShape).translate(halfWidth,0,0),art);leafArt.position.z=.095;hinge.add(leafArt);
    return hinge;
  };
  const front=makeDoor(frontZ,false);makeDoor(backZ,true);
  const canEnter=(x:number,z:number)=>Math.abs(x-center.x)<halfWidth+1&&z>=frontZ+.55&&z<frontZ+5;
  let opening=0;
  const colliders:THREE.Mesh[]=[];tower.traverse(o=>{if(o instanceof THREE.Mesh)colliders.push(o);});colliders.push(standing);
  colliders.forEach(m=>{for(const material of Array.isArray(m.material)?m.material:[m.material])material.side=THREE.DoubleSide;});
  const colliderBounds=colliders.map(m=>new THREE.Box3().setFromObject(m).expandByScalar(1));
  const ray=new THREE.Raycaster(),origin=new THREE.Vector3(),direction=new THREE.Vector3();
  const blocked=(from:{x:number;z:number},to:{x:number;z:number})=>{
    if(Math.abs(to.x-center.x)<halfWidth+.6&&((Math.abs(to.z-frontZ)<.75)||(Math.abs(to.z-backZ)<.75)))return true;
    if(Math.hypot(to.x-center.x,to.z-center.z)>radius+5&&!colliderBounds.some(b=>to.x>=b.min.x&&to.x<=b.max.x&&to.z>=b.min.z&&to.z<=b.max.z))return false;
    for(const y of [1,3,5.5]){
      const base=groundY(to.x,to.z)??ground(to.x,to.z);
      for(let i=0;i<8;i++){direction.set(Math.cos(i*Math.PI/4),0,Math.sin(i*Math.PI/4));origin.set(to.x,base+y,to.z);ray.set(origin,direction);ray.far=.65;if(ray.intersectObjects(colliders,false).length)return true;}
      direction.set(to.x-from.x,0,to.z-from.z);const distance=direction.length();if(distance>.0001){ray.set(new THREE.Vector3(from.x,base+y,from.z),direction.normalize());ray.far=distance+.65;if(ray.intersectObjects(colliders,false).length)return true;}
    }
    return false;
  };
  const groundY=(x:number,z:number)=>{
    const distance=Math.hypot(x-center.x,z-center.z);if(distance>radius+4)return undefined;
    return THREE.MathUtils.lerp(floor,ground(x,z),THREE.MathUtils.smoothstep(distance,radius+1,radius+4));
  };
  return {canEnter,blocked,groundY,dispose:()=>{active=false;},open:()=>{if(!opening)opening=.001;},update:(dt:number)=>{if(!opening)return false;opening+=dt;front.rotation.y=-Math.min(1,opening/.85)*Math.PI*.48;return opening>=1.1;},returnPosition:{x:center.x,z:frontZ+3.5},center,frontZ,backZ,floor,radius};
}
