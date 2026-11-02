import * as THREE from 'three';
/** Small repeatable maps: brushed steel and scratches, with local reflections for dark corridors. */
export function createTrapSteel(){
 const size=128,data=new Uint8Array(size*size*4);let seed=731;
 const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let y=0;y<size;y++){const band=210+Math.floor(random()*25),scratch=y%23===0?-55:y%31===0?20:0;for(let x=0;x<size;x++){const value=Math.max(90,Math.min(255,band+scratch+Math.floor(random()*15)-7)),i=(y*size+x)*4;data.set([value,value,value,255],i);}}
 const surface=new THREE.DataTexture(data,size,size);surface.name='Brushed steel grain and fine scratches';surface.colorSpace=THREE.SRGBColorSpace;surface.wrapS=surface.wrapT=THREE.RepeatWrapping;surface.generateMipmaps=true;surface.minFilter=THREE.LinearMipmapLinearFilter;surface.magFilter=THREE.LinearFilter;surface.anisotropy=4;surface.needsUpdate=true;
 const bump=new THREE.DataTexture(data.slice(),size,size);bump.name='Steel scratch height';bump.wrapS=bump.wrapT=THREE.RepeatWrapping;bump.generateMipmaps=true;bump.minFilter=THREE.LinearMipmapLinearFilter;bump.needsUpdate=true;
 const tones=[[185,210,235],[75,100,135],[255,231,190],[42,45,52],[200,220,235],[100,125,165]],faces=tones.map(tone=>{const pixels=new Uint8Array(32*32*4);for(let y=0;y<32;y++)for(let x=0;x<32;x++){const shine=.55+.45*Math.exp(-((x-11)**2+(y-9)**2)/90),i=(y*32+x)*4;pixels.set([...tone.map(c=>Math.round(c*shine)),255],i);}return new THREE.DataTexture(pixels,32,32);});
 const reflection=new THREE.CubeTexture(faces);reflection.name='Trap steel warm and cool reflections';reflection.colorSpace=THREE.SRGBColorSpace;reflection.needsUpdate=true;
 const material=new THREE.MeshStandardMaterial({name:'Scratched forged steel',color:'#d7e4ec',map:surface,bumpMap:bump,bumpScale:.045,roughnessMap:bump,metalness:.88,roughness:.36,envMap:reflection,envMapIntensity:1.15,emissive:'#667681',emissiveMap:surface,emissiveIntensity:.22,side:THREE.DoubleSide});
 return {material,dispose(){material.dispose();surface.dispose();bump.dispose();reflection.dispose();faces.forEach(t=>t.dispose());}};
}
