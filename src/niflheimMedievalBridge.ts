import * as THREE from 'three';
import {BASE,cachedGlbBuffer} from './core';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import bridgeHeights from './niflheimMedievalBridgeHeights.json';

export function installNiflheimBridge(root:THREE.Group|THREE.Scene,start:{x:number;z:number},end:{x:number;z:number},ground:(x:number,z:number)=>number,onReady:()=>void=()=>{}){
  // Widen the deck, gate openings and side towers together; keep the bank-to-bank span.
  const bridgeWidthScale=1.3,bridgeHeightScale=1.15;
  const bridgeSink=.4,gateClearanceScale=2.2;
  const bridgeWalkHalfWidth=2.6*bridgeWidthScale,bridgeClearHalfWidth=2.2*bridgeWidthScale;
  const bridgeOuterHalfWidth=6.6*bridgeWidthScale;
  const bridge=new THREE.Group();bridge.name='Каменный мост через реку';
  root.updateMatrixWorld(true);const origin=root.worldToLocal(new THREE.Vector3(start.x,root.getWorldPosition(new THREE.Vector3()).y,start.z));
  bridge.position.copy(origin);bridge.rotation.y=Math.atan2(end.x-start.x,end.z-start.z)-root.rotation.y;bridge.scale.z=Math.hypot(end.x-start.x,end.z-start.z)/12;root.add(bridge);root.updateMatrixWorld(true);
  const floor=root.getWorldPosition(new THREE.Vector3()).y;
  const east=bridge.localToWorld(new THREE.Vector3(0,0,0)),west=bridge.localToWorld(new THREE.Vector3(0,0,12));
  const nearY=ground(east.x,east.z)-floor+.12,farY=ground(west.x,west.z)-floor+.12;
  const sourceDeckY=(z:number)=>{const t=THREE.MathUtils.clamp(z/12,0,1),i=t*(bridgeHeights.length-1),a=Math.min(bridgeHeights.length-2,Math.floor(i));return THREE.MathUtils.lerp(bridgeHeights[a],bridgeHeights[a+1],i-a);};
  const deckY=(z:number)=>sourceDeckY(z)*1.35*bridgeHeightScale+THREE.MathUtils.lerp(nearY,farY,THREE.MathUtils.clamp(z/12,0,1))+.04-bridgeSink;
  let alive=true;
  cachedGlbBuffer(`${BASE}img/models/Niflheim_Medieval_Bridge.glb`).then(buffer=>new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parse(buffer,`${BASE}img/models/`,asset=>{
    if(!alive){asset.scene.traverse((o:any)=>{if(!o.isMesh)return;o.geometry.dispose();for(const material of Array.isArray(o.material)?o.material:[o.material]){for(const value of Object.values(material))if(value instanceof THREE.Texture)value.dispose();material.dispose();}});return;}
    asset.scene.name='Клон каменного моста';
    // Bake the original transforms and fit the span between the existing banks.
    asset.scene.updateMatrixWorld(true);
    const prepared=new THREE.Group();
    asset.scene.traverse((o:any)=>{
      if(!o.isMesh)return;
      const geometry=o.geometry.clone();
      // Decode normalized integer positions before editing: integer writes wrap at the new world scale.
      const source=geometry.getAttribute('position'),decoded=new Float32Array(source.count*3);
      for(let i=0;i<source.count;i++){decoded[i*3]=source.getX(i);decoded[i*3+1]=source.getY(i);decoded[i*3+2]=source.getZ(i);}
      geometry.setAttribute('position',new THREE.BufferAttribute(decoded,3));
      geometry.applyMatrix4(o.matrixWorld);
      const positions=geometry.getAttribute('position');
      for(let i=0;i<positions.count;i++){
        const longitudinal=(positions.getZ(i)+1)*6;
        // Stretch the gate above the deck, so lowering the bridge cannot shrink its opening.
        const sourceDeck=sourceDeckY(longitudinal)*1.35*bridgeHeightScale;
        const modelY=(positions.getY(i)+.32716738)*13.5*bridgeHeightScale;
        const aboveDeck=Math.max(0,modelY-sourceDeck);
        // Raise the opening and pillars; translate upper ornamentation without stretching it.
        const gateLift=Math.min(aboveDeck,8)*(gateClearanceScale-1);
        positions.setXYZ(i,positions.getX(i)*14*bridgeWidthScale,modelY+gateLift+THREE.MathUtils.lerp(nearY,farY,longitudinal/12)+.04-bridgeSink,longitudinal);
      }
      positions.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
      const mesh=new THREE.Mesh(geometry,o.material);mesh.castShadow=true;mesh.receiveShadow=true;prepared.add(mesh);
    });
    bridge.add(prepared);onReady();
  },()=>{})).catch(()=>{});
  const bridgeLocal=(px:number,pz:number)=>bridge.worldToLocal(new THREE.Vector3(px,floor,pz));
  return {root:bridge,
    groundY(x:number,z:number){const b=bridgeLocal(x,z);return Math.abs(b.x)<bridgeWalkHalfWidth&&b.z>=0&&b.z<=12?floor+deckY(b.z):undefined;},
    terrainY(x:number,z:number){const y=this.groundY(x,z);return y===undefined?undefined:Math.min(ground(x,z),y-.09);},
    blocked(x:number,z:number){const b=bridgeLocal(x,z);return b.z>.25&&b.z<11.75&&Math.abs(b.x)>bridgeClearHalfWidth&&Math.abs(b.x)<bridgeOuterHalfWidth;},
    dispose(){alive=false;}
  };
}
