import * as THREE from 'three';
import {BASE} from './core';
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

  // Original soft silver-white magic dust, compressed to a tiny transparent WebP.
  // Mirrored repetition hides seams as each route bends over the snow.
  const ribbonTexture=new THREE.TextureLoader().load(
    `${BASE}img/models/Niflheim_Magic_Dust_Trail.webp`
  );
  ribbonTexture.colorSpace=THREE.SRGBColorSpace;
  ribbonTexture.wrapS=THREE.ClampToEdgeWrapping;
  ribbonTexture.wrapT=THREE.MirroredRepeatWrapping;
  ribbonTexture.anisotropy=4;
  const ribbonMaterial=new THREE.MeshBasicMaterial({
    map:ribbonTexture,transparent:true,opacity:.72,
    depthWrite:false,side:THREE.DoubleSide,blending:THREE.NormalBlending,
    polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1
  });

  const vertices:number[]=[];
  const uvs:number[]=[];
  const indices:number[]=[];
  const sparklePositions:number[][]=[[],[],[]];
  const runes:Array<{x:number;y:number;z:number}>=[];
  const locations=new Map(NIFL_LOCATIONS.map(l=>[l.id,l]));
  // Put the glitter at the actual exterior entrances, not the buildings' centres.
  // All numbers are world-space after NIFL_SCALE has been applied.
  const doorways:Record<string,{x:number;z:number}>={
    threshold:{x:0,z:127},
    forge:{x:-18,z:96},                  // southern forecourt
    shelter:{x:40,z:91},                 // snow-cave mouth
    frozenRiver:{x:-17,z:49},
    echoCave:{x:82,z:65},
    memoryCave:{x:90,z:19},              // igloo passage
    roots:{x:10,z:-31.75},              // root cave entrance
    nidhogg:{x:62,z:-113},              // silver door of the collapsed tower
    iceLake:{x:-55,z:10},               // accessible shore, not lake centre
    crossing:{x:-72,z:27},              // north end of bridge
    namesHall:{x:-76,z:-75},            // front arch
    snowMountain:{x:-86,z:96},
    threeNornsWell:{x:62,z:-66},
    nineWorldStranger:{x:78,z:-62}
  };
  const links:ReadonlyArray<readonly [string,string]>=[...NIFL_ROUTES,...EXTRA_LINKS] as Array<[string,string]>;

  for(const [routeIndex,[from,to]] of links.entries()){
    const a=doorways[from]??locations.get(from),b=doorways[to]??locations.get(to);
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
      const halfWidth=4.05;
      const base=vertices.length/3;
      for(const [point,side,v] of [[p,-1,0],[p,1,0],[q,-1,1],[q,1,1]] as const){
        const vx=point.x+nx*halfWidth*side,vz=point.z+nz*halfWidth*side;
        vertices.push(vx,groundY(vx,vz)+.105,vz);
        // Repeat once per ~15 metres, not once per tiny segment.
        uvs.push((side+1)/2,((i-1+v)*length/count)/15);
      }
      indices.push(base,base+2,base+1,base+1,base+2,base+3);

      // Sparse cold-blue glitter; a few independent groups twinkle out of phase.
      if((i+routeIndex)%2===0){
        const group=(i+routeIndex)%3;
        const t=.25+.5*dustHash(routeIndex*137+i,5);
        const drift=(dustHash(routeIndex*137+i,6)-.5)*4.4;
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
      map:sparkleTexture,color:0xd8f7ff,size:i===0?.39:i===1?.29:.22,
      sizeAttenuation:true,transparent:true,opacity:.25,
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
    ribbonMaterial.opacity=.68+.045*Math.sin(time*.0008);
    sparkleMaterials.forEach((mat,i)=>{
      mat.opacity=.16+.17*(.5+.5*Math.sin(time*.0018+i*2.3));
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
