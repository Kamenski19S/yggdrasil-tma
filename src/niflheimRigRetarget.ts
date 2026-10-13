import * as THREE from 'three';

type RigAsset={scene:THREE.Group;animations:THREE.AnimationClip[]};

/**
 * The green shield goblin (the original troll mesh) and orc use unrelated
 * skeletons. Rebind quaternion *changes from the rest pose* to the goblin's
 * existing bones. Do not copy the orc skin or overwrite its bind pose.
 */
const TROLL_TO_ORC:Record<string,string>={
  Root_M_0220:'Bip001_01',
  Spine1_M_0223:'Bip001 Spine_03',
  Chest_M_0226:'Bip001 Spine2_05',
  Neck_M_0227:'Bip001 Neck_06',
  Head_M_0230:'Bip001 Head_060',
  Scapula_R_0219:'Bip001 R Clavicle_014',
  Shoulder_R_0235:'Bip001 R UpperArm_015',
  Elbow_R_0238:'Bip001 R Forearm_016',
  Wrist_R_0241:'Bip001 R Hand_017',
  Scapula_L_0255:'Bip001 L Clavicle_07',
  Shoulder_L_0256:'Bip001 L UpperArm_08',
  Elbow_L_0259:'Bip001 L Forearm_09',
  Wrist_L_0262:'Bip001 L Hand_037',
  Hip_R_0275:'Bip001 R Thigh_080',
  Knee_R_0278:'Bip001 R Calf_081',
  Ankle_R_0279:'Bip001 R Foot_082',
  Hip_L_0282:'Bip001 L Thigh_073',
  Knee_L_0285:'Bip001 L Calf_074',
  Ankle_L_0286:'Bip001 L Foot_075'
};
const clean=(name:string)=>THREE.PropertyBinding.sanitizeNodeName(name);
const animationName=(name:string)=>name.replace(/[^a-z0-9]/gi,'_').toUpperCase();

/** Orc action tracks in the GLB begin at 16-64 seconds: a clip needs t=0. */
export function normalizeOrcAnimations(orc:RigAsset):void{
  orc.animations=orc.animations.map(original=>{
    const begins=original.tracks.map(t=>t.times.length?t.times[0]:Infinity);
    const start=Math.min(...begins);
    if(!Number.isFinite(start)||start<.001)return original;
    const copy=original.clone();
    copy.tracks.forEach(t=>t.shift(-start));
    copy.resetDuration();return copy;
  });
}

// Convert a node path to the exact sanitized bone name used by GLTFLoader.
// Handles regular GLTF animation tracks and .bones[...] binding tracks.
function trackBoneName(path:string):string|null{
  if(!path.endsWith('.quaternion'))return null;
  const node=path.slice(0,-'.quaternion'.length);
  const name=node.startsWith('.bones[')&&node.endsWith(']')?node.slice(7,-1):node;
  return clean(name);
}

/** Synthesized fallback only for clips a source rig could not transfer.
 * Animation still drives the original goblin shoulder/elbow/spine bones;
 * no static floating body motion or extra rig is required.
 */
function boneClip(troll:RigAsset,name:string):THREE.AnimationClip|null{
  const times=name==='ANM_WALK'?[0,.2,.4,.6,.8]:[0,.18,.37,.54,.78,1.05];
  const wave=(values:number[])=>values.map(v=>v*Math.PI/180);
  const motions:Record<string,{bone:string;axis:'x'|'y'|'z';angles:number[]}[]>={
    // This rig's arm segments extend along local X. Rotate around Z to
    // bend and swing them; X only twists the arm around its own length.
    ANM_LIGHT_ATTACK_2:[
      {bone:'Scapula_R_0219',axis:'y',angles:wave([0,-6,-18,12,3,0])},
      {bone:'Shoulder_R_0235',axis:'z',angles:wave([0,-32,-72,58,18,0])},
      {bone:'Elbow_R_0238',axis:'z',angles:wave([0,-25,-55,12,4,0])},
      {bone:'Wrist_R_0241',axis:'z',angles:wave([0,12,18,-24,-8,0])},
      {bone:'Chest_M_0226',axis:'y',angles:wave([0,-10,-18,20,5,0])},
      {bone:'Spine1_M_0223',axis:'x',angles:wave([0,0,-7,11,4,0])}
    ],
    ANM_DAMAGED:[
      {bone:'Chest_M_0226',axis:'x',angles:wave([0,10,27,-12,-4,0])},
      {bone:'Head_M_0230',axis:'x',angles:wave([0,-4,10,-6,0,0])}
    ],
    ANM_DEATH:[
      {bone:'Chest_M_0226',axis:'x',angles:wave([0,14,38,62,78,82])},
      {bone:'Spine1_M_0223',axis:'x',angles:wave([0,12,28,40,54,56])},
      {bone:'Shoulder_R_0235',axis:'z',angles:wave([0,10,26,41,53,56])}
    ],
    ANM_WALK:[
      {bone:'Hip_R_0275',axis:'x',angles:wave([-20,0,20,0,-20])},
      {bone:'Hip_L_0282',axis:'x',angles:wave([20,0,-20,0,20])},
      {bone:'Shoulder_R_0235',axis:'x',angles:wave([10,0,-10,0,10])},
      {bone:'Shoulder_L_0256',axis:'x',angles:wave([-10,0,10,0,-10])}
    ]
  };
  const tracks:THREE.QuaternionKeyframeTrack[]=[];
  for(const spec of motions[name]||[]){
    const bone=troll.scene.getObjectByName(spec.bone);
    if(!bone)continue;
    const base=bone.quaternion.clone(),values:number[]=[];
    spec.angles.forEach(angle=>{
      const e=new THREE.Euler(spec.axis==='x'?angle:0,spec.axis==='y'?angle:0,spec.axis==='z'?angle:0,'XYZ');
      const q=base.clone().multiply(new THREE.Quaternion().setFromEuler(e)).normalize();
      values.push(q.x,q.y,q.z,q.w);
    });
    tracks.push(new THREE.QuaternionKeyframeTrack(spec.bone+'.quaternion',times,values));
  }
  return tracks.length?new THREE.AnimationClip(name,times[times.length-1],tracks):null;
}

export function retargetOrcAnimationsToShieldTroll(orc:RigAsset|null,troll:RigAsset):boolean{
  const orcBones=new Map<string,THREE.Object3D>();
  const trollBones=new Map<string,THREE.Object3D>();
  orc?.scene.traverse(o=>{if(o instanceof THREE.Bone)orcBones.set(clean(o.name),o);});
  troll.scene.traverse(o=>{if(o instanceof THREE.Bone)trollBones.set(clean(o.name),o);});
  const mappings=Object.entries(TROLL_TO_ORC)
    .map(([to,from])=>({to:clean(to),from:clean(from)}))
    .filter(({to,from})=>trollBones.has(to)&&orcBones.has(from));
  let transferred=0,generated=0;
  for(const targetName of ['ANM_WALK','ANM_LIGHT_ATTACK_2','ANM_DAMAGED','ANM_DEATH']){
    const source=orc?.animations.find(c=>animationName(c.name)===targetName);
    let clip:THREE.AnimationClip|null=null;
    // Orc attack translations twist the goblin rig away from its target.
    // Always use an axe swing authored for the goblin's own shoulder, elbow
    // and wrist; walk/hurt/death can still use the source retargeting.
    if(targetName==='ANM_LIGHT_ATTACK_2'){
      clip=boneClip(troll,targetName);if(clip)generated++;
    }
    if(source&&!clip){
      const tracksByBone=new Map<string,THREE.KeyframeTrack>();
      source.tracks.forEach(t=>{
        const node=trackBoneName(t.name);
        if(node)tracksByBone.set(node,t);
      });
      const tracks:THREE.QuaternionKeyframeTrack[]=[];
      for(const {to,from} of mappings){
        const src=tracksByBone.get(from);
        if(!src||src.getValueSize()!==4||src.times.length<2)continue;
        const srcBase=orcBones.get(from)!.quaternion.clone();
        const dstBase=trollBones.get(to)!.quaternion.clone();
        const invBase=srcBase.invert();
        const values:number[]=[];
        for(let i=0;i<src.times.length;i++){
          const srcQ=new THREE.Quaternion().fromArray(src.values,i*4);
          const delta=invBase.clone().multiply(srcQ);
          const dstQ=dstBase.clone().multiply(delta).normalize();
          values.push(dstQ.x,dstQ.y,dstQ.z,dstQ.w);
        }
        tracks.push(new THREE.QuaternionKeyframeTrack(to+'.quaternion',src.times,values));
      }
      if(tracks.length>=6){
        const transferredClip=new THREE.AnimationClip(targetName,source.duration,tracks);
        if(transferredClip.validate()){clip=transferredClip;transferred++;}
      }
    }
    if(!clip){clip=boneClip(troll,targetName);if(clip)generated++;}
    if(clip){
      troll.animations=troll.animations.filter(c=>animationName(c.name)!==targetName);
      troll.animations.push(clip);
    }
  }
  if(transferred+generated)console.info('Shield goblin animated:',transferred,'retargeted and',generated,'fallback clips');
  return transferred+generated>0;
}
