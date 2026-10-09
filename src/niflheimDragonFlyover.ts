import * as THREE from 'three';

export function createDragonFlyover(scene:THREE.Scene,model:THREE.Group,clips:THREE.AnimationClip[],ground:(x:number,z:number)=>number){
  const root=new THREE.Group();root.name='Нидхёгг — редкий пролёт';root.visible=false;
  model.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  const scale=16/Math.max(size.x,size.y,size.z,.01);model.scale.multiplyScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);root.add(model);scene.add(root);
  model.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=false;}});
  const mixer=new THREE.AnimationMixer(model),clip=clips.find(c=>c.name==='Fly');if(clip)mixer.clipAction(clip).play();
  const routes=[
    [[-140,110],[-65,72],[20,40],[90,-30],[120,-155]],
    [[120,100],[65,45],[-20,-5],[-90,-75],[-115,-155]]
  ].map(points=>new THREE.CatmullRomCurve3(points.map(([x,z],i)=>new THREE.Vector3(x,ground(x,z)+18+Math.sin(i)*3,z)),false,'centripetal'));
  const frustum=new THREE.Frustum(),matrix=new THREE.Matrix4(),sphere=new THREE.Sphere(new THREE.Vector3(),14),direction=new THREE.Vector3();
  let elapsed=0,nextAt=20,flight=0,active=false,routeIndex=0,animationDebt=0;
  return {root,update(dt:number,camera:THREE.Camera,enabled:boolean){
    if(!enabled){root.visible=false;return;}
    elapsed+=dt;
    if(!active&&elapsed>=nextAt){active=true;flight=0;animationDebt=0;nextAt+=180;}
    if(!active)return;
    flight+=dt;
    if(flight>=28){active=false;root.visible=false;routeIndex=(routeIndex+1)%routes.length;return;}
    const curve=routes[routeIndex],t=flight/28;curve.getPointAt(t,root.position);curve.getTangentAt(t,direction);
    root.rotation.set(-Math.asin(THREE.MathUtils.clamp(direction.y,-1,1)),Math.atan2(direction.x,direction.z),Math.sin(t*Math.PI*2)*.08);
    camera.updateMatrixWorld();matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(matrix);sphere.center.copy(root.position);root.visible=frustum.intersectsSphere(sphere);
    // Keep wing animation to 30 Hz, and do no skeleton work outside the view.
    if(root.visible){animationDebt+=dt;if(animationDebt>=1/30){mixer.update(animationDebt);animationDebt=0;}}
  },dispose(){mixer.stopAllAction();mixer.uncacheRoot(model);}};
}
