import * as THREE from 'three';

type Vertex={p:THREE.Vector3;uv:THREE.Vector2};
// Split at the doorway planes rather than discarding whole mountain triangles.
function split(poly:Vertex[],axis:'x'|'y'|'z',value:number,sign:number){
  const inside:Vertex[]=[],outside:Vertex[]=[];
  for(let i=0;i<poly.length;i++){
    const a=poly[i],b=poly[(i+1)%poly.length],da=(a.p[axis]-value)*sign,db=(b.p[axis]-value)*sign;
    (da>=0?inside:outside).push(a);
    if((da>=0)!==(db>=0)){
      const t=da/(da-db),v={p:a.p.clone().lerp(b.p,t),uv:a.uv.clone().lerp(b.uv,t)};
      inside.push(v);outside.push(v);
    }
  }
  return {inside,outside};
}

export function createLakeDescendingCave(mountain:THREE.Group,ground:(x:number,z:number)=>number){
  const root=new THREE.Group();root.name='Снежная гора — внутренний зал';
  root.rotation.y=Math.PI/2;root.position.set(-86,ground(-86,96),96);
  mountain.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(mountain),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  const planes:[ 'x'|'y'|'z',number,number][]=[['x',-24,1],['x',14,-1],['y',-5,1],['y',7.6,-1],['z',-3.5,1],['z',3.5,-1]];
  mountain.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
    const source=o.geometry.clone().applyMatrix4(o.matrixWorld),p=source.getAttribute('position'),uv=source.getAttribute('uv'),idx=source.getIndex();
    const positions:number[]=[],uvs:number[]=[];
    const emit=(poly:Vertex[])=>{for(let i=1;i<poly.length-1;i++)for(const v of [poly[0],poly[i],poly[i+1]]){positions.push(v.p.x,v.p.y,v.p.z);uvs.push(v.uv.x,v.uv.y);}};
    for(let i=0;i<(idx?.count??p.count);i+=3){
      let pending:Vertex[]=[0,1,2].map(k=>{const id=idx?idx.getX(i+k):i+k;return {p:new THREE.Vector3((p.getX(id)-center.x)/size.x*88+21,(p.getY(id)-box.min.y)/size.y*30-4,(p.getZ(id)-center.z)/size.z*58),uv:new THREE.Vector2(uv?.getX(id)??0,uv?.getY(id)??0)};});
      for(const [axis,value,sign] of planes){if(pending.length<3)break;const parts=split(pending,axis,value,sign);if(parts.outside.length>=3)emit(parts.outside);pending=parts.inside;}
      // Only the final portion inside all six planes is removed.
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.computeVertexNormals();geometry.computeBoundingSphere();
    const mats=(Array.isArray(o.material)?o.material:[o.material]).map(m=>{const copy=m.clone();copy.side=THREE.FrontSide;return copy;});
    const shell=new THREE.Mesh(geometry,Array.isArray(o.material)?mats:mats[0]);shell.name='Целая гора с входом';shell.receiveShadow=true;root.add(shell);
    source.dispose();o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();
  });
  const shellMesh=root.children.find(o=>o.name==='Целая гора с входом') as THREE.Mesh;
  const mountainMaterial=(Array.isArray(shellMesh.material)?shellMesh.material[0]:shellMesh.material) as THREE.MeshStandardMaterial;
  const stone=new THREE.MeshStandardMaterial({map:mountainMaterial.map,color:'#aebac4',roughness:1,side:THREE.DoubleSide});
  const snowCover=new THREE.MeshStandardMaterial({map:mountainMaterial.map,color:'#ffffff',roughness:1,side:THREE.DoubleSide});
  // Broad, sloping interior walls replace the exposed rectangular entrance.
  const vertices:number[]=[],indices:number[]=[],segments=48;
  for(let ring=0;ring<2;ring++)for(let i=0;i<=segments;i++){
    const angle=i/segments*Math.PI*2,r=ring===0?1:.22;
    vertices.push(25+Math.cos(angle)*24*r,ring===0?-3:13,Math.sin(angle)*17*r);
  }
  for(let i=0;i<segments;i++){
    const a=i,b=i+1,c=i+segments+1,d=c+1;
    const cx=(vertices[a*3]+vertices[b*3])/2,cz=(vertices[a*3+2]+vertices[b*3+2])/2;
    if(cx<12&&Math.abs(cz)<5){
      // Close the upper band: leave only a low opening, not a gap to the summit.
      const t=9/16,lowA=vertices.length/3,lowB=lowA+1;
      for(const [bottom,top] of [[a,c],[b,d]])for(let k=0;k<3;k++)vertices.push(THREE.MathUtils.lerp(vertices[bottom*3+k],vertices[top*3+k],t));
      indices.push(lowA,c,lowB,lowB,c,d);continue;
    }
    indices.push(a,c,b,b,c,d);
  }
  const wallsGeo=new THREE.BufferGeometry();wallsGeo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));wallsGeo.setIndex(indices);
  const wallUvs:number[]=[];for(let i=0;i<vertices.length;i+=3)wallUvs.push((vertices[i]+vertices[i+2])/16,(vertices[i+1]+3)/16);
  wallsGeo.setAttribute('uv',new THREE.Float32BufferAttribute(wallUvs,2));wallsGeo.computeVertexNormals();
  const walls=new THREE.Mesh(wallsGeo,stone);walls.name='Наклонные стены внутреннего зала';root.add(walls);
  const floor=new THREE.Mesh(new THREE.CircleGeometry(1,48),stone);floor.rotation.x=-Math.PI/2;floor.scale.set(24,17,1);floor.position.set(25,-3,0);root.add(floor);
  const roof=new THREE.Mesh(new THREE.CircleGeometry(1,32),stone);roof.rotation.x=Math.PI/2;roof.scale.set(5.3,3.8,1);roof.position.set(25,13,0);root.add(roof);
  const rampGeo=new THREE.BufferGeometry();rampGeo.setAttribute('position',new THREE.Float32BufferAttribute([0,0,-3.5,0,0,3.5,12,-3,-3.5,12,-3,3.5],3));rampGeo.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1,0,0,2,1,2],2));rampGeo.setIndex([0,1,2,2,1,3]);rampGeo.computeVertexNormals();root.add(new THREE.Mesh(rampGeo,stone));
  // A covered arch passage blends into the mountain; its roof stays above Vika.
  const coverPositions:number[]=[],coverUvs:number[]=[],coverIndices:number[]=[],steps=24;
  for(let end=0;end<2;end++)for(let layer=0;layer<2;layer++)for(let i=0;i<=steps;i++){
    const angle=i/steps*Math.PI,radius=layer===0?3.7:(end===0?6:11);
    coverPositions.push(end===0?-.7:16,3.5+Math.sin(angle)*radius,Math.cos(angle)*radius);
    coverUvs.push(i/steps,end===0?0:1);
  }
  const row=steps+1;
  for(let i=0;i<steps;i++){
    // Inner vault, snowy outer roof, and the front shoulder around the arch.
    for(const [a,b,c,d] of [[i,i+1,2*row+i,2*row+i+1],[row+i,row+i+1,3*row+i,3*row+i+1],[i,i+1,row+i,row+i+1]])coverIndices.push(a,c,b,b,c,d);
  }
  const coverGeo=new THREE.BufferGeometry();coverGeo.setAttribute('position',new THREE.Float32BufferAttribute(coverPositions,3));coverGeo.setAttribute('uv',new THREE.Float32BufferAttribute(coverUvs,2));coverGeo.setIndex(coverIndices);coverGeo.computeVertexNormals();
  const cover=new THREE.Mesh(coverGeo,snowCover);cover.name='Снежный свод над аркой';root.add(cover);
  for(const side of [-1,1]){
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute([-.7,-.2,side*3.7,-.7,3.5,side*3.7,16,-4,side*3.7,16,3.5,side*3.7],3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,0,1,2,0,2,1],2));geometry.setIndex([0,1,2,2,1,3]);geometry.computeVertexNormals();root.add(new THREE.Mesh(geometry,stone));
  }
  const local=(x:number,z:number)=>root.worldToLocal(new THREE.Vector3(x,root.position.y,z));
  const contains=(p:THREE.Vector3)=>(p.x>=0&&p.x<=12&&Math.abs(p.z)<3.3)||(p.x>=10&&((p.x-25)/23)**2+(p.z/16)**2<1);
  const inside=(x:number,z:number)=>contains(local(x,z));
  const groundY=(x:number,z:number)=>{const p=local(x,z);return contains(p)?root.position.y-(p.x<12?Math.max(0,p.x)*.25:3):undefined;};
  let tableBounds:THREE.Box3|undefined;
  let crystalTop:THREE.Vector3|undefined,orbMixer:THREE.AnimationMixer|undefined,orbPivot:THREE.Group|undefined;
  const obstacleRay=new THREE.Raycaster();
  const blocked=(from:{x:number;z:number},next:{x:number;z:number})=>{
    if(tableBounds&&next.x>tableBounds.min.x&&next.x<tableBounds.max.x&&next.z>tableBounds.min.z&&next.z<tableBounds.max.z)return true;
    const p=local(next.x,next.z),old=local(from.x,from.z);
    if(contains(p))return false;
    if(contains(old)&&old.x>1)return true;
    const direction=new THREE.Vector3(next.x-from.x,0,next.z-from.z),distance=direction.length();
    if(!distance)return false;
    obstacleRay.set(new THREE.Vector3(from.x,ground(from.x,from.z)+1.5,from.z),direction.normalize());obstacleRay.far=distance+.45;
    return obstacleRay.intersectObjects(root.children.filter(o=>o.name==='Целая гора с входом'),true).length>0;
  };
  const addTable=(table:THREE.Group)=>{
    table.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(table),size=bounds.getSize(new THREE.Vector3());
    const scale=Math.min(7.5/Math.max(size.x,size.z,.01),3.45/Math.max(size.y,.01));
    table.scale.multiplyScalar(scale);table.updateMatrixWorld(true);bounds.setFromObject(table);
    const center=bounds.getCenter(new THREE.Vector3());
    table.position.add(new THREE.Vector3(31-center.x,-3-bounds.min.y,-center.z));
    table.name='Каменный стол — центр Снежной горы';table.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=true;}});
    root.add(table);root.updateMatrixWorld(true);tableBounds=new THREE.Box3().setFromObject(table).expandByScalar(.4);
  };
  const addCrystal=(crystal:THREE.Group)=>{
    if(!tableBounds)return;
    crystal.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(crystal),size=bounds.getSize(new THREE.Vector3());
    crystal.scale.multiplyScalar(Math.min(2.8/Math.max(size.y,.01),3.6/Math.max(size.x,size.z,.01)));
    crystal.updateMatrixWorld(true);bounds.setFromObject(crystal);const center=bounds.getCenter(new THREE.Vector3());
    const top=root.worldToLocal(new THREE.Vector3(tableBounds.getCenter(new THREE.Vector3()).x,tableBounds.max.y-.4,tableBounds.getCenter(new THREE.Vector3()).z));
    crystal.position.add(new THREE.Vector3(top.x-center.x,top.y-bounds.min.y,top.z-center.z));
    crystal.traverse(o=>{if(o instanceof THREE.Mesh)o.castShadow=false;});
    crystal.name='Кристаллы из космоса на каменном столе';root.add(crystal);root.updateMatrixWorld(true);const placed=new THREE.Box3().setFromObject(crystal);crystalTop=root.worldToLocal(new THREE.Vector3(placed.getCenter(new THREE.Vector3()).x,placed.max.y,placed.getCenter(new THREE.Vector3()).z));
  };
  const addOrb=(orb:THREE.Group,animations:THREE.AnimationClip[])=>{
    if(!crystalTop)return;
    orb.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(orb),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
    const scale=1.6/Math.max(size.x,size.y,size.z,.01);
    orb.position.sub(center);const fitted=new THREE.Group();fitted.add(orb);fitted.scale.setScalar(scale);
    orbPivot=new THREE.Group();orbPivot.name='Парящий магический шар';orbPivot.add(fitted);orbPivot.position.copy(crystalTop).add(new THREE.Vector3(0,size.y*scale/2+.45,0));root.add(orbPivot);
    orbMixer=new THREE.AnimationMixer(orb);for(const clip of animations)if(clip.name==='Orb rotation')orbMixer.clipAction(clip).play();
    root.updateMatrixWorld(true);
  };
  const update=(dt:number)=>{orbMixer?.update(dt);if(orbPivot)orbPivot.rotation.y+=dt*.25;};
  const addArch=(arch:THREE.Group)=>{
    arch.traverse(o=>{if(!(o instanceof THREE.Mesh))return;
      const old=Array.isArray(o.material)?o.material:[o.material];
      const material=snowCover.clone();material.name='Арка — снежная текстура горы';
      o.material=material;
      for(const m of old){for(const value of Object.values(m))if(value instanceof THREE.Texture)value.dispose();m.dispose();}
    });
    arch.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(arch),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
    const fitted=new THREE.Group();fitted.name='Арка входа в снежную гору';
    arch.position.sub(new THREE.Vector3(center.x,bounds.min.y,center.z));fitted.add(arch);fitted.scale.set(10/size.x,9/size.y,2/size.z);fitted.rotation.y=Math.PI/2;fitted.position.set(0,0,0);root.add(fitted);root.updateMatrixWorld(true);
  };
  root.updateMatrixWorld(true);
  return {root,addArch,addTable,addCrystal,addOrb,update,inside,groundY,blocked,terrainY:(x:number,z:number)=>inside(x,z)?groundY(x,z)!-.35:undefined,
    camera:(x:number,z:number)=>new THREE.Vector3(x,(groundY(x,z)??root.position.y)+4.8,z+7)};
}
