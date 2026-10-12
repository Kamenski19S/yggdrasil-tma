import * as THREE from 'three';
import {retargetClip} from 'three/examples/jsm/utils/SkeletonUtils.js';

type RigAsset={scene:THREE.Group;animations:THREE.AnimationClip[]};

/** The green shield troll already has a working skin/armature.
 * Retarget source ORC animations onto its existing bone names, without
 * replacing/weighting its meshes or uploading a second full body.
 * The trimmed source tracks begin at t=0 (Sketchfab had 33–58s offsets).
 */
const TROLL_TO_ORC:Record<string,string>={
  'Root_M_0220':'Bip001_01',
  'Spine1_M_0223':'Bip001 Spine_03',
  'Chest_M_0226':'Bip001 Spine2_05',
  'Neck_M_0227':'Bip001 Neck_06',
  'Head_M_0230':'Bip001 Head_060',
  'Scapula_R_0219':'Bip001 R Clavicle_014',
  'Shoulder_R_0235':'Bip001 R UpperArm_015',
  'Elbow_R_0238':'Bip001 R Forearm_016',
  'Wrist_R_0241':'Bip001 R Hand_017',
  'Scapula_L_0255':'Bip001 L Clavicle_07',
  'Shoulder_L_0256':'Bip001 L UpperArm_08',
  'Elbow_L_0259':'Bip001 L Forearm_09',
  'Wrist_L_0262':'Bip001 L Hand_037',
  'Hip_R_0275':'Bip001 R Thigh_080',
  'Knee_R_0278':'Bip001 R Calf_081',
  'Ankle_R_0279':'Bip001 R Foot_082',
  'Hip_L_0282':'Bip001 L Thigh_073',
  'Knee_L_0285':'Bip001 L Calf_074',
  'Ankle_L_0286':'Bip001 L Foot_075'
};

function skinned(root:THREE.Object3D):THREE.SkinnedMesh|null{
  let found:THREE.SkinnedMesh|null=null;
  root.traverse(o=>{if(!found&&(o as THREE.SkinnedMesh).isSkinnedMesh)found=o as THREE.SkinnedMesh;});
  return found;
}
const firstTime=(clip:THREE.AnimationClip)=>Math.min(...clip.tracks.map(t=>t.times[0]??Infinity));

export function normalizeOrcAnimations(orc:RigAsset):void{
  orc.animations=orc.animations.map(clip=>{
    const start=firstTime(clip);
    if(!Number.isFinite(start)||start<.001)return clip;
    const c=clip.clone();
    for(const t of c.tracks)t.shift(-start);
    c.resetDuration();return c;
  });
}

export function retargetOrcAnimationsToShieldTroll(orc:RigAsset,troll:RigAsset):boolean{
  const source=skinned(orc.scene),target=skinned(troll.scene);
  if(!source||!target)return false;
  orc.scene.updateMatrixWorld(true);troll.scene.updateMatrixWorld(true);
  const sourceBones=new Map(source.skeleton.bones.map(b=>[b.name,b] as const));
  const targetBones=new Map(target.skeleton.bones.map(b=>[b.name,b] as const));
  // GLTFLoader sanitizes spaces into underscores when creating animation nodes.
  const valid=Object.fromEntries(Object.entries(TROLL_TO_ORC)
    .map(([to,from])=>[THREE.PropertyBinding.sanitizeNodeName(to),THREE.PropertyBinding.sanitizeNodeName(from)] as const)
    .filter(([to,from])=>targetBones.has(to)&&sourceBones.has(from)));
  if(Object.keys(valid).length<16)return false;

  // Precompute neutral-pose correction for mismatched shoulder/hip axes.
  const localOffsets:Record<string,THREE.Matrix4>={};
  for(const [to,from] of Object.entries(valid)){
    const fromQuat=sourceBones.get(from)!.getWorldQuaternion(new THREE.Quaternion());
    const toQuat=targetBones.get(to)!.getWorldQuaternion(new THREE.Quaternion());
    localOffsets[to]=new THREE.Matrix4().makeRotationFromQuaternion(fromQuat.invert().multiply(toQuat));
  }
  const desired=['ANM_WALK','ANM_LIGHT_ATTACK_2','ANM_DAMAGED','ANM_DEATH'];
  const imported:THREE.AnimationClip[]=[];
  for(const name of desired){
    const original=orc.animations.find(c=>c.name===name);
    if(!original)continue;
    // SkeletonUtils' mixer is rooted at a SkinnedMesh: convert named tracks
    // to skeleton bindings and drop irrelevant armor/weapon node transforms.
    const channels=original.tracks.map(t=>{
      const match=t.name.match(/^(.*?)\.(position|quaternion|scale)$/);
      if(!match||!sourceBones.has(match[1]))return null;
      const copy=t.clone();copy.name='.bones['+match[1]+'].'+match[2];return copy;
    }).filter((x):x is THREE.KeyframeTrack=>x!==null);
    if(channels.length<20)continue;
    const sourceClip=new THREE.AnimationClip(name,original.duration,channels);
    try{
      const clip=retargetClip(target,source,sourceClip,{
        names:valid,localOffsets,hip:'__do_not_translate_root__',
        fps:12,useTargetMatrix:true,preserveBonePositions:true
      } as any);
      // Mixer is rooted at the FULL cloned GLB group, not its SkinnedMesh.
      // A named bone track works with any cloned armature from SkeletonUtils.
      clip.tracks.forEach(t=>{
        t.name=t.name.replace(/^\.bones\[([^\]]+)\]/,'$1');
      });
      clip.name=name;
      clip.resetDuration();
      if(clip.tracks.length>=12&&clip.validate())imported.push(clip);
    }catch(err){console.warn('Retarget failed for',name,err);}
  }
  source.skeleton.pose();target.skeleton.pose();
  if(!imported.length)return false;
  troll.animations.push(...imported);return true;
}
