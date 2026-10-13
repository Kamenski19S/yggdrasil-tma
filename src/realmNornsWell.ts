import * as THREE from 'three';

// Shared Three Norns well. Reuse the Midgard GLB in every realm;
// only scale, stone tint, frozen growth and inner light are realm-specific.
export type RealmNornsWellStyle = {
  horizontalScale: number;
  heightScale: number;
  columnExtensionFactor?: number;
  stone: THREE.ColorRepresentation;
  columns: THREE.ColorRepresentation;
  moss: THREE.ColorRepresentation;
  glow: THREE.ColorRepresentation;
};

export const NIFLHEIM_NORNS_STYLE: RealmNornsWellStyle = {
  horizontalScale: .94,
  heightScale: 1.43,
  columnExtensionFactor: 1.5,
  stone: '#b6d2e0',
  columns: '#dfebf5',
  moss: '#9ab9c7',
  glow: '#72d9ff',
};

export function createRealmNornsWell(
  scene: THREE.Scene,
  model: THREE.Group,
  x: number,
  z: number,
  ground: (x:number,z:number)=>number,
  assetBase: string,
  style: RealmNornsWellStyle,
) {
  const root = new THREE.Group();
  root.name = 'Колодец трёх норн';
  root.userData = {id:'threeNornsWell',label:'Колодец трёх норн'};
  root.position.set(x,ground(x,z),z);

  // The original Midgard mesh intentionally has no UVs. Restore readable
  // stone and fluted-marble textures without replacing the well silhouette.
  const loader = new THREE.TextureLoader();
  const stoneTexture = loader.load(assetBase+'T_Norns_Stone.jpg');
  stoneTexture.colorSpace=THREE.SRGBColorSpace;
  stoneTexture.wrapS=stoneTexture.wrapT=THREE.MirroredRepeatWrapping;
  const columnTexture = loader.load(assetBase+'T_Norns_FlutedMarble.jpg');
  columnTexture.colorSpace=THREE.SRGBColorSpace;
  columnTexture.wrapS=THREE.RepeatWrapping;
  columnTexture.wrapT=THREE.ClampToEdgeWrapping;
  const stoneMaterial = new THREE.MeshStandardMaterial({name:'Norns Frozen Stone',map:stoneTexture,color:style.stone,roughness:.94,side:THREE.DoubleSide});
  const columnMaterial = new THREE.MeshStandardMaterial({name:'Norns Frost Marble',map:columnTexture,color:style.columns,roughness:.82,side:THREE.DoubleSide});
  // Extend ONLY the six fluted shafts by 50%. The stone bases and well stay
  // where they are; move capitals and the complete roof above the taller shafts.
  // Reshape the hanging threads continuously so their lower ends remain attached.
  const shaftBottom=1.155,shaftTop=3.805;
  const extensionFactor=Math.max(1,style.columnExtensionFactor??1);
  const roofLift=(shaftTop-shaftBottom)*(extensionFactor-1);
  if(roofLift>0){
    model.traverse(object=>{
      if(!(object instanceof THREE.Mesh))return;
      const name=object.name;
      const shaft=/^PillarShaft_\d+$/.test(name);
      const thread=/^Thread_\d+_\d+$/.test(name);
      if(shaft||thread){
        const geometry=object.geometry.clone();
        const positions=geometry.getAttribute('position');
        for(let i=0;i<positions.count;i++){
          const y=positions.getY(i);
          const offset=shaft?(y-shaftBottom)*(extensionFactor-1):
            THREE.MathUtils.clamp((y-1.9)/(3.85-1.9),0,1)*roofLift;
          positions.setY(i,y+offset);
        }
        positions.needsUpdate=true;
        geometry.computeVertexNormals();
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();
        object.geometry=geometry;
      }else if(/^(PillarCap_|PillarMoss_|Roof_|RoofRock_|RoofMoss_)/.test(name)){
        object.position.y+=roofLift;
      }
    });
  }
  model.scale.set(style.horizontalScale,style.heightScale,style.horizontalScale);
  model.rotation.y = .18;
  model.updateMatrixWorld(true);
  const materialCache = new Map<THREE.Material,THREE.Material>();
  function recolor(source:THREE.Material):THREE.Material {
    const cached=materialCache.get(source);
    if(cached)return cached;
    const m=source.clone();
    if(m instanceof THREE.MeshStandardMaterial){
      const name=m.name.toLowerCase();
      if(name.includes('ancient_stone_dark'))m.color.set('#647e92');
      else if(name.includes('ancient_stone'))m.color.set('#839daf');
      else if(name.includes('moss'))m.color.set(style.moss);
      else if(name.includes('old_wood'))m.color.set('#566878');
      else if(name.includes('sacred_water')){
        m.color.set('#4b9bc9');m.emissive.set('#296d9c');m.emissiveIntensity=.55;
      }else if(name.includes('well_inner_glow')||name.includes('well_glow_hot')){
        m.color.set(style.glow);m.emissive.set(style.glow);
        m.emissiveIntensity=name.includes('hot')?2.5:1.65;
      }else if(name.includes('thread_silver'))m.color.set('#e9f7ff');
    }
    materialCache.set(source,m);
    return m;
  }

  model.traverse(object=>{
    if(!(object instanceof THREE.Mesh))return;
    object.castShadow=true;object.receiveShadow=true;
    const isColumn=/^PillarShaft_\d+$/.test(object.name);
    const isStone=/^(Platform_\d+|EdgeStone_\d+|Pillar(Base|Cap)_\d+|Roof_Stone_Ring|Roof_Wood_Underside|RoofRock_\d+)$/.test(object.name);
    if(isColumn||isStone){
      const geo=object.geometry.index?object.geometry.toNonIndexed():object.geometry.clone();
      const pos=geo.getAttribute('position');
      const uv=new Float32Array(pos.count*2);
      const p=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
      const v1=new THREE.Vector3(),v2=new THREE.Vector3(),normal=new THREE.Vector3();
      const bounds=new THREE.Box3().setFromObject(object),center=bounds.getCenter(new THREE.Vector3());
      for(let i=0;i<pos.count;i+=3){
        for(let j=0;j<3;j++)p[j].fromBufferAttribute(pos,i+j).applyMatrix4(object.matrixWorld);
        normal.crossVectors(v1.subVectors(p[1],p[0]),v2.subVectors(p[2],p[0])).normalize();
        const top=Math.abs(normal.y)>.5,alongX=Math.abs(normal.x)>Math.abs(normal.z);
        const angles=p.map(point=>Math.atan2(point.z-center.z,point.x-center.x)/(Math.PI*2)+.5);
        if(Math.max(...angles)-Math.min(...angles)>.5)for(let j=0;j<3;j++)if(angles[j]<.5)angles[j]+=1;
        for(let j=0;j<3;j++){
          const point=p[j];
          uv[2*(i+j)]=isColumn?angles[j]:(top?point.x:alongX?point.z:point.x)/2.4;
          uv[2*(i+j)+1]=isColumn?.1+.85*(point.y-bounds.min.y)/Math.max(.01,bounds.max.y-bounds.min.y):(top?point.z:point.y)/2.4;
        }
      }
      geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));
      geo.computeVertexNormals();
      object.geometry=geo;
      object.material=isColumn?columnMaterial:stoneMaterial;
    }else{
      object.material=Array.isArray(object.material)?object.material.map(recolor):recolor(object.material);
    }
  });

  model.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(model),center=bounds.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-bounds.min.y,-center.z);
  root.add(model);
  const glowLight=new THREE.PointLight(style.glow,2.2,12,2);
  glowLight.position.set(0,2.7,0);
  root.add(glowLight);
  scene.add(root);
  const radius=Math.max(3.25,Math.min(4.5,Math.max(bounds.max.x-bounds.min.x,bounds.max.z-bounds.min.z)*.39));
  return {root,radius};
}

/** Reach the water from outside the physical well's collision radius. */
export function isNearRealmWell(x:number,z:number,well:{x:number;z:number;radius:number}|undefined):boolean{
  return !!well&&Math.hypot(x-well.x,z-well.z)<=well.radius+5.5;
}
