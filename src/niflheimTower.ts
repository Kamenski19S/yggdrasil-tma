import * as THREE from 'three';

// Subtract a rectangular passage from the mesh while interpolating its UVs.
export function carveTowerPassage(mesh:THREE.Mesh,center:THREE.Vector3,floor:number,width=6,height=8.6){
  const source=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
  const attributes=Object.entries(source.attributes).sort(([a],[b])=>a==='position'?-1:b==='position'?1:0),stride=attributes.reduce((n,[,a])=>n+a.itemSize,0);
  const output:number[]=[];
  const planes:[[number,number,number],[number,number,number],[number,number,number],[number,number,number]]=[
    [0,1,center.x-width/2],[0,-1,-center.x-width/2],[1,1,floor-.08],[1,-1,-floor-height]
  ];
  const emit=(polygon:number[][])=>{for(let i=1;i<polygon.length-1;i++)output.push(...polygon[0],...polygon[i],...polygon[i+1]);};
  const split=(polygon:number[][],axis:number,sign:number,limit:number)=>{
    const inside:number[][]=[],outside:number[][]=[];
    for(let i=0;i<polygon.length;i++){
      const a=polygon[i],b=polygon[(i+1)%polygon.length],da=a[axis]*sign-limit,db=b[axis]*sign-limit;
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
    for(const [axis,sign,limit] of planes){if(!polygon.length)break;const parts=split(polygon,axis,sign,limit);emit(parts.outside);polygon=parts.inside;}
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
  const floor=bounds.min.y+.12,halfWidth=3,height=8.6;
  carveTowerPassage(standing,center,floor,halfWidth*2,height);
  const radius=Math.min(bounds.max.x-bounds.min.x,bounds.max.z-bounds.min.z)/2;
  const frontZ=center.z+Math.sqrt(Math.max(1,radius*radius-halfWidth*halfWidth))+.08,backZ=center.z-Math.sqrt(Math.max(1,radius*radius-halfWidth*halfWidth))-.08;
  const wood=new THREE.MeshStandardMaterial({color:'#403026',roughness:.95}),iron=new THREE.MeshStandardMaterial({color:'#343c43',metalness:.65,roughness:.55});
  const root=new THREE.Group();root.name='Двери разрушенной башни';scene.add(root);
  const add=(parent:THREE.Object3D,w:number,h:number,d:number,x:number,y:number,z:number,mat:THREE.Material)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  const makeDoor=(z:number,sealed:boolean)=>{
    const hinge=new THREE.Group();hinge.position.set(center.x-halfWidth,floor,z);root.add(hinge);
    for(let i=0;i<8;i++)add(hinge,halfWidth*2/8-.035,height,.32,(i+.5)*halfWidth*2/8,height/2,0,wood);
    for(const y of [1.2,height/2,height-1.2])add(hinge,halfWidth*2,.28,.43,halfWidth,y,0,iron);
    add(hinge,.22,.7,.65,halfWidth*2-.65,height*.44,.2,iron);
    const stone=Array.isArray(standing.material)?standing.material[0]:standing.material;
    for(const x of [-halfWidth-.35,halfWidth+.35])add(root,.7,height+.5,.85,center.x+x,floor+height/2,z,stone);
    add(root,halfWidth*2+1.4,.65,.85,center.x,floor+height+.18,z,stone);
    if(sealed){const bar=add(hinge,.3,height*.9,.5,halfWidth,height/2,0,iron);bar.rotation.z=.55;}
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
  return {canEnter,blocked,groundY,open:()=>{if(!opening)opening=.001;},update:(dt:number)=>{if(!opening)return false;opening+=dt;front.rotation.y=-Math.min(1,opening/.85)*Math.PI*.48;return opening>=1.1;},returnPosition:{x:center.x,z:frontZ+3.5},center,frontZ,backZ,floor,radius};
}
