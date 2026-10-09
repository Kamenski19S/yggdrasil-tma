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
  const planes:[ 'x'|'y'|'z',number,number][]=[['x',-24,1],['x',14,-1],['y',-5,1],['y',6,-1],['z',-3.5,1],['z',3.5,-1]];
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
  const stone=new THREE.MeshStandardMaterial({color:'#53616b',roughness:1,side:THREE.DoubleSide});
  const snow=new THREE.MeshStandardMaterial({color:'#d6e5ed',roughness:1});
  const part=(x:number,y:number,z:number,sx:number,sy:number,sz:number,mat=stone)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),mat);mesh.position.set(x,y,z);mesh.receiveShadow=true;root.add(mesh);};
  // A level entrance and a 30 by 20 metre room, with solid walls and ceiling.
  part(-12,-.15,0,24,.3,7,snow);part(5,-.15,0,10,.3,7);part(25,-.15,0,30,.3,20);
  part(25,3.5,-10.2,30,7,.4);part(25,3.5,10.2,30,7,.4);part(40.2,3.5,0,.4,7,20);
  part(10,3.5,-6.75,.4,7,6.5);part(10,3.5,6.75,.4,7,6.5);part(25,7.1,0,30,.2,20);
  part(5,3,-3.7,10,6,.4);part(5,3,3.7,10,6,.4);part(5,6.1,0,10,.2,7.4);
  const local=(x:number,z:number)=>root.worldToLocal(new THREE.Vector3(x,root.position.y,z));
  const contains=(p:THREE.Vector3)=>(p.x>=-24&&p.x<=10&&Math.abs(p.z)<3.45)||(p.x>=10&&p.x<40&&Math.abs(p.z)<9.8);
  const inside=(x:number,z:number)=>contains(local(x,z));
  const groundY=(x:number,z:number)=>inside(x,z)?root.position.y:undefined;
  const blocked=(from:{x:number;z:number},next:{x:number;z:number})=>{
    const p=local(next.x,next.z),old=local(from.x,from.z);
    if(contains(p))return false;
    if(contains(old)&&old.x>-23)return true;
    return ((p.x-21)/44)**2+(p.z/29)**2<1;
  };
  root.updateMatrixWorld(true);
  return {root,inside,groundY,blocked,terrainY:(x:number,z:number)=>inside(x,z)?root.position.y-.35:undefined,
    camera:(x:number,z:number)=>new THREE.Vector3(x,root.position.y+4.8,z+7)};
}
