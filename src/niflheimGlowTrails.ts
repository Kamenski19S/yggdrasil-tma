import * as THREE from 'three';
import {NIFL_LOCATIONS,NIFL_ROUTES} from './niflheimMapData';

// The same links as the Niflheim map, with short branches to newer landmarks.
// Rendering is deliberately separate from collision/navigation logic.
const EXTRA_LINKS: Array<[string,string]> = [
  ['forge','snowMountain'],
  ['iceLake','snowMountain'],
  ['memoryCave','echoCave'],
  ['roots','threeNornsWell'],
  ['threeNornsWell','nineWorldStranger'],
  ['hvergelmir','threeNornsWell']
];

const dustHash = (a:number,b:number) => {
  const n=Math.sin(a*127.1+b*311.7)*43758.5453;
  return n-Math.floor(n);
};

type TrailPoint={x:number;y:number;z:number;allowed:boolean};

export function createNiflheimGlowTrails(
  scene:THREE.Scene,
  groundY:(x:number,z:number)=>number,
  walkable:(x:number,z:number)=>boolean
) {
  const root=new THREE.Group();
  root.name='Сияющие пути Нифльхейма';
  scene.add(root);

  // Paint the softness into a tiny in-memory texture, not a downloaded PNG.
  // The pale core and almost invisible edges leave the snow visible below.
  const ribbonCanvas=document.createElement('canvas');
  ribbonCanvas.width=64;ribbonCanvas.height=8;
  const ribbonCtx=ribbonCanvas.getContext('2d');
  if(ribbonCtx){
    const gradient=ribbonCtx.createLinearGradient(0,0,64,0);
    gradient.addColorStop(0,'rgba(73,174,230,0)');
    gradient.addColorStop(.16,'rgba(93,191,250,.04)');
    gradient.addColorStop(.34,'rgba(115,214,255,.15)');
    gradient.addColorStop(.50,'rgba(220,249,255,.39)');
    gradient.addColorStop(.66,'rgba(115,214,255,.15)');
    gradient.addColorStop(.84,'rgba(93,191,250,.04)');
    gradient.addColorStop(1,'rgba(73,174,230,0)');
    ribbonCtx.fillStyle=gradient;ribbonCtx.fillRect(0,0,64,8);
  }
  const ribbonTexture=new THREE.CanvasTexture(ribbonCanvas);
  ribbonTexture.colorSpace=THREE.SRGBColorSpace;
  ribbonTexture.wrapS=ribbonTexture.wrapT=THREE.ClampToEdgeWrapping;
  const ribbonMaterial=new THREE.MeshBasicMaterial({
    map:ribbonTexture,transparent:true,opacity:.78,
    depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
    polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1
  });

  const vertices:number[]=[];
  const uvs:number[]=[];
  const indices:number[]=[];
  const sparklePositions:number[][]=[[],[],[]];
  const runes:Array<{x:number;y:number;z:number}>=[];
  const locations=new Map(NIFL_LOCATIONS.map(l=>[l.id,l]));
  const links:ReadonlyArray<readonly [string,string]>=[...NIFL_ROUTES,...EXTRA_LINKS] as Array<[string,string]>;

  for(const [routeIndex,[from,to]] of links.entries()){
    const a=locations.get(from),b=locations.get(to);
    if(!a||!b)continue;
    const dx=b.x-a.x,dz=b.z-a.z;
    const length=Math.hypot(dx,dz);
    if(length<.1)continue;
    const count=Math.max(2,Math.ceil(length/2.3));
    const offset=(dustHash(routeIndex,18)-.5)*Math.min(5,length*.075);
    const crossX=-dz/length,crossZ=dx/length;
    const points:TrailPoint[]=[];
    for(let i=0;i<=count;i++){
      const t=i/count;
      const bend=Math.sin(Math.PI*t)*offset;
      const x=a.x+dx*t+crossX*bend,z=a.z+dz*t+crossZ*bend;
      const allowed=walkable(x,z);
      points.push({x,z,y:groundY(x,z)+.12,allowed});
    }

    // Small individual quads allow gaps at impassable banks and ruined bridges.
    // The shimmer never suggests that Vika can walk across a blocked river.
    for(let i=1;i<points.length;i++){
      const p=points[i-1],q=points[i];
      if(!p.allowed||!q.allowed||Math.abs(p.y-q.y)>2.4)continue;
      const segmentLength=Math.hypot(q.x-p.x,q.z-p.z);
      if(segmentLength<.001)continue;
      const nx=-(q.z-p.z)/segmentLength,nz=(q.x-p.x)/segmentLength;
      const halfWidth=1.25;
      const base=vertices.length/3;
      for(const [point,side,v] of [[p,-1,0],[p,1,0],[q,-1,1],[q,1,1]] as const){
        vertices.push(point.x+nx*halfWidth*side,point.y,point.z+nz*halfWidth*side);
        uvs.push((side+1)/2,v);
      }
      indices.push(base,base+2,base+1,base+1,base+2,base+3);

      // Sparse cold-blue glitter; a few independent groups twinkle out of phase.
      if((i+routeIndex)%2===0){
        const group=(i+routeIndex)%3;
        const t=.25+.5*dustHash(routeIndex*137+i,5);
        const drift=(dustHash(routeIndex*137+i,6)-.5)*1.45;
        sparklePositions[group].push(
          p.x+(q.x-p.x)*t+nx*drift,
          p.y+(q.y-p.y)*t+.08+.13*dustHash(routeIndex*137+i,7),
          p.z+(q.z-p.z)*t+nz*drift
        );
      }
    }

    // Occasional ancient rune, never directly over a blocked patch.
    if(routeIndex%2===0&&length>16&&runes.length<18){
      const point=points[Math.floor(count*.58)];
      if(point?.allowed)runes.push({x:point.x,y:point.y+.20,z:point.z});
    }
  }

  const ribbonGeometry=new THREE.BufferGeometry();
  if(indices.length){
    ribbonGeometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
    ribbonGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
    ribbonGeometry.setIndex(indices);
    ribbonGeometry.computeBoundingSphere();
    const ribbons=new THREE.Mesh(ribbonGeometry,ribbonMaterial);
    ribbons.name='Серебристо-голубая пыльца';
    ribbons.renderOrder=2;
    ribbons.frustumCulled=true;
    root.add(ribbons);
  }

  const sparkleCanvas=document.createElement('canvas');
  sparkleCanvas.width=sparkleCanvas.height=32;
  const sparkleCtx=sparkleCanvas.getContext('2d');
  if(sparkleCtx){
    const star=sparkleCtx.createRadialGradient(16,16,.5,16,16,16);
    star.addColorStop(0,'rgba(245,255,255,.95)');
    star.addColorStop(.24,'rgba(184,238,255,.75)');
    star.addColorStop(.63,'rgba(110,204,255,.19)');
    star.addColorStop(1,'rgba(110,204,255,0)');
    sparkleCtx.fillStyle=star;sparkleCtx.fillRect(0,0,32,32);
  }
  const sparkleTexture=new THREE.CanvasTexture(sparkleCanvas);
  sparkleTexture.colorSpace=THREE.SRGBColorSpace;
  const sparkleMaterials:THREE.PointsMaterial[]=[];
  const sparkleGeometries:THREE.BufferGeometry[]=[];
  sparklePositions.forEach((coords,i)=>{
    if(!coords.length)return;
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(coords,3));
    const material=new THREE.PointsMaterial({
      map:sparkleTexture,color:0xd8f7ff,size:i===0?.44:i===1?.33:.25,
      sizeAttenuation:true,transparent:true,opacity:.40,
      depthWrite:false,blending:THREE.AdditiveBlending
    });
    const points=new THREE.Points(geometry,material);
    points.renderOrder=3;
    root.add(points);
    sparkleGeometries.push(geometry);
    sparkleMaterials.push(material);
  });

  const runeCanvas=document.createElement('canvas');
  runeCanvas.width=runeCanvas.height=96;
  const runeCtx=runeCanvas.getContext('2d');
  if(runeCtx){
    runeCtx.textAlign='center';runeCtx.textBaseline='middle';
    runeCtx.font='bold 68px serif';runeCtx.fillStyle='#d5f5ff';
    runeCtx.shadowColor='#4dbbf4';runeCtx.shadowBlur=12;
    runeCtx.fillText('ᛉ',48,52);
  }
  const runeTexture=new THREE.CanvasTexture(runeCanvas);
  runeTexture.colorSpace=THREE.SRGBColorSpace;
  const runeMaterial=new THREE.SpriteMaterial({
    map:runeTexture,transparent:true,opacity:.28,depthWrite:false,
    blending:THREE.AdditiveBlending
  });
  for(const rune of runes){
    const sprite=new THREE.Sprite(runeMaterial);
    sprite.position.set(rune.x,rune.y,rune.z);
    sprite.scale.set(1.15,1.15,1);
    sprite.renderOrder=3;
    root.add(sprite);
  }

  const update=(time:number)=>{
    ribbonMaterial.opacity=.72+.09*Math.sin(time*.0008);
    sparkleMaterials.forEach((mat,i)=>{
      mat.opacity=.32+.28*(.5+.5*Math.sin(time*.0018+i*2.3));
    });
    runeMaterial.opacity=.22+.08*(.5+.5*Math.sin(time*.0011));
  };

  const dispose=()=>{
    scene.remove(root);
    ribbonGeometry.dispose();
    ribbonMaterial.dispose();
    ribbonTexture.dispose();
    for(const geo of sparkleGeometries)geo.dispose();
    for(const mat of sparkleMaterials)mat.dispose();
    sparkleTexture.dispose();
    runeMaterial.dispose();
    runeTexture.dispose();
  };

  return {update,dispose,links:links.length};
}
