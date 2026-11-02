type Renderer={domElement:EventTarget;forceContextLoss:()=>void;forceContextRestore:()=>void;getContext:()=>{isContextLost:()=>boolean}};
/** Keep parsed scene objects, release GPU resources while an interior is active. */
export function createSceneSuspension(renderer:Renderer,onSleep:()=>void,onResume:()=>void){
 let asleep=false,restoring=false,released=false;
 const restored=()=>{restoring=false;};renderer.domElement.addEventListener('webglcontextrestored',restored);
 return {
  update(suspend:boolean,releaseGpu=true){
   if(suspend){if(!asleep){asleep=true;onSleep();released=releaseGpu;if(released)renderer.forceContextLoss();}return false;}
   if(asleep){asleep=false;restoring=released&&renderer.getContext().isContextLost();if(restoring)renderer.forceContextRestore();onResume();}
   return !restoring&&!renderer.getContext().isContextLost();
  },
  dispose(){renderer.domElement.removeEventListener('webglcontextrestored',restored);},
 };
}
