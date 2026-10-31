import * as THREE from 'three';

export const RECOVERY_CAMERA_FOV=60;
/** Frame the full aura through a real gap between the authored sanctuary columns. */
export function createSanctuaryRecoveryCamera(temple:THREE.Object3D){
 const ray=new THREE.Raycaster();let key='',cached:{position:THREE.Vector3;target:THREE.Vector3;occlusions:number}|undefined;
 return (hero:{x:number;y:number;z:number},aspect:number)=>{
  const nextKey=[hero.x,hero.y,hero.z,aspect].join(',');if(nextKey===key&&cached)return cached;key=nextKey;temple.updateWorldMatrix(true,true);
  const target=new THREE.Vector3(hero.x,hero.y+8.5,hero.z),samples:THREE.Vector3[]=[];
  for(const y of [.3,8.5,17.5])for(const [x,z]of [[0,0],[5.6,0],[-5.6,0],[0,5.6],[0,-5.6]])samples.push(new THREE.Vector3(hero.x+x,hero.y+y,hero.z+z));
  const tangent=Math.tan(RECOVERY_CAMERA_FOV*Math.PI/360),distance=Math.max(29,8/(tangent*Math.max(.3,aspect)*.75));
  let best:{position:THREE.Vector3;target:THREE.Vector3;occlusions:number}|undefined;
  for(const extra of [0,-5,5])for(const yaw of [Math.PI/2,Math.PI/3,Math.PI*2/3,Math.PI/6,Math.PI*5/6,0,Math.PI,-Math.PI/2]){
   const position=new THREE.Vector3(hero.x+Math.sin(yaw)*(distance+extra),hero.y+16,hero.z+Math.cos(yaw)*(distance+extra));let occlusions=0;
   for(const sample of samples){const delta=sample.clone().sub(position),length=delta.length();ray.set(position,delta.normalize());ray.far=Math.max(0,length-.12);if(ray.intersectObject(temple,true).length)occlusions++;}
   const candidate={position,target,occlusions};if(!best||occlusions<best.occlusions)best=candidate;if(!occlusions){cached=candidate;return cached;}
  }
  cached=best!;return cached;
 };
}
