import * as THREE from 'three';
export const BRIDGE_ASSET='Muspelheim_Stone_Bridge.glb';
export const BRIDGE_CREDIT={author:'adventurer',title:'Wooden bridge Village Wood',url:'https://sketchfab.com/3d-models/wooden-bridge-village-wood-d8e349c0dd7e408d992e711367d79e27'};
export const BRIDGE_TEXTURE='muspelheim-gothic-bridge.jpg';
export const BRIDGE_SPAWN={x:0,z:218};
export function chasmDepth(x:number,z:number){
 const edge=Math.min(224-Math.abs(x),z-161,231-z);
 return -48*THREE.MathUtils.smoothstep(edge,0,4);
}
export function chasmBlocks(x:number,z:number){return chasmDepth(x,z)<-.5&&Math.abs(x)>5.5;}
export function carveEntranceChasm(root:THREE.Object3D){
 root.updateWorldMatrix(true,true);
 root.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const p=o.geometry.getAttribute('position'),v=new THREE.Vector3(),inv=o.matrixWorld.clone().invert();
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);v.y+=chasmDepth(v.x,v.z);v.applyMatrix4(inv);p.setXYZ(i,v.x,v.y,v.z);}
  p.needsUpdate=true;o.geometry.computeVertexNormals();o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();
 });
}
export function createEntranceBridge(source:THREE.Object3D,texture?:THREE.Texture){
 const stoneMaterial=()=>{
  const m=new THREE.MeshStandardMaterial({color:texture?'#ffffff':'#454850',map:texture??null,roughness:.96,metalness:0,side:THREE.DoubleSide});
  if(texture){
   m.onBeforeCompile=shader=>{
    shader.vertexShader='varying vec3 bridgePosition;varying vec3 bridgeNormal;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nbridgePosition=position;bridgeNormal=normal;`);
    shader.fragmentShader='varying vec3 bridgePosition;varying vec3 bridgeNormal;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
     vec3 weights=pow(abs(normalize(bridgeNormal)),vec3(4.));weights/=max(.0001,weights.x+weights.y+weights.z);
     vec3 stone=texture2D(map,bridgePosition.zy/16.).rgb*weights.x+texture2D(map,bridgePosition.xz/16.).rgb*weights.y+texture2D(map,bridgePosition.xy/16.).rgb*weights.z;
     diffuseColor.rgb*=stone;
     #endif`);
   };m.customProgramCacheKey=()=> 'muspelheim-gothic-bridge-triplanar-v1';
  }
  return m;
 };
 // Bake the imported hierarchy before fitting the bridge along the gateway axis.
 source.updateWorldMatrix(true,true);const group=new THREE.Group();
 source.traverse(o=>{if(!(o instanceof THREE.Mesh))return;const geometry=o.geometry.clone().applyMatrix4(o.matrixWorld);const materials=(Array.isArray(o.material)?o.material:[o.material]).map(()=>stoneMaterial());
 group.add(new THREE.Mesh(geometry,materials.length===1?materials[0]:materials));});
 const box=new THREE.Box3().setFromObject(group),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
 // 24 wide, 76 long; keep the rail height proportional to the original width.
 for(const child of group.children){const mesh=child as THREE.Mesh;mesh.geometry.translate(-center.x,-box.min.y,-center.z);mesh.geometry.scale(24/size.x,24/size.x,76/size.z);}
 group.position.z=196;group.name='Stone bridge across Ginnungagap';group.updateWorldMatrix(true,true);
 const ray=new THREE.Raycaster(),profile:number[]=[];
 for(let z=158;z<=234;z+=.5){ray.set(new THREE.Vector3(0,50,z),new THREE.Vector3(0,-1,0));const hit=ray.intersectObject(group,true).find(h=>h.face&&Math.abs(h.face.normal.y)>.25);profile.push(hit?.point.y??0);}
 // Close the original gaps between boards with a continuous stone underlay.
 for(let i=0;i<profile.length;i++)if(profile[i]===0){let a=i-1,b=i+1;while(a>=0&&profile[a]===0)a--;while(b<profile.length&&profile[b]===0)b++;profile[i]=a>=0&&b<profile.length?THREE.MathUtils.lerp(profile[a],profile[b],(i-a)/(b-a)):a>=0?profile[a]:b<profile.length?profile[b]:0;}
 const vertices:number[]=[],indices:number[]=[];
 for(let i=0;i<profile.length;i++){const z=158+i*.5-196;vertices.push(-8,profile[i]-.08,z,8,profile[i]-.08,z);if(i){const a=(i-1)*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}}
 const bed=new THREE.BufferGeometry();bed.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));bed.setIndex(indices);bed.computeVertexNormals();group.add(new THREE.Mesh(bed,stoneMaterial()));
 const end=(profile[0]+profile[profile.length-1])/2;group.position.y=-end+.2;group.updateWorldMatrix(true,true);
 const floorAt=(x:number,z:number)=>{if(Math.abs(x)>5.5||z<158||z>234)return null;const t=(z-158)*2,i=Math.min(profile.length-2,Math.floor(t));return THREE.MathUtils.lerp(profile[i],profile[i+1],t-i)-end+.2;};
 return {group,floorAt,profile};
}
export function createChasmLava(){
 const material=new THREE.ShaderMaterial({uniforms:{time:{value:0}},vertexShader:`varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 p;uniform float time;
 float hash(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
 void main(){vec2 q=p*.12+vec2(time*.035,-time*.022);float n=noise(q)+.5*noise(q*2.1);float seams=1.-smoothstep(.035,.12,abs(n-.73));vec3 color=mix(vec3(.20,.018,.005),vec3(1.,.32,.015),seams);color+=vec3(.24,.025,.001)*noise(q*5.);gl_FragColor=vec4(color,1.);
#include <tonemapping_fragment>\n#include <colorspace_fragment>}`});
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(448,70),material);mesh.rotation.x=-Math.PI/2;mesh.position.set(0,-45.5,196);mesh.name='Flowing lava at bottom of chasm';return {mesh,update:(dt:number)=>{material.uniforms.time.value+=dt;}};
}
