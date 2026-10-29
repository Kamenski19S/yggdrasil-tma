import {GLTFLoader as ThreeGLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import type {LoadingManager} from 'three';

export function versionedModelUrl(url:string){
 const [base,hash]=url.split('#',2);return base+(base.includes('?')?'&':'?')+'glb-v=lossless-1'+(hash?'#'+hash:'');
}

/** Both original and losslessly compressed GLBs use the same loader in every realm. */
export class GLTFLoader extends ThreeGLTFLoader {
 constructor(manager?:LoadingManager){super(manager);this.setMeshoptDecoder(MeshoptDecoder);}
 override load(...args:Parameters<ThreeGLTFLoader['load']>){args[0]=versionedModelUrl(args[0]);return super.load(...args);}
}
