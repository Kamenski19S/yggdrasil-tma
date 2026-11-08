import * as THREE from 'three';
/** Fit every corner of the actual world into an oblique, fog-free map view.
 * Orthographic projection keeps the northern boundary as legible as the entry. */
export function fitJotunheimOverview(camera:THREE.OrthographicCamera,bounds:THREE.Box3,aspect:number,viewportHeight=700){
 const center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3()),distance=Math.max(size.x,size.z)*3;
 camera.position.copy(center).add(new THREE.Vector3(0,1,.38).normalize().multiplyScalar(distance));camera.up.set(0,1,0);camera.lookAt(center);camera.updateMatrixWorld(true);
 const projected=new THREE.Box3();
 for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])projected.expandByPoint(new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse));
 const topInset=THREE.MathUtils.clamp(160/viewportHeight,.14,.40),bottomInset=.06;
 const halfHeight=Math.max((projected.max.y-projected.min.y)/(2*(1-topInset-bottomInset)),(projected.max.x-projected.min.x)/(2*Math.max(.1,aspect)*.92))*1.04;
 const cx=(projected.min.x+projected.max.x)/2,cy=(projected.min.y+projected.max.y)/2+(topInset-bottomInset)*halfHeight;
 camera.left=cx-halfHeight*aspect;camera.right=cx+halfHeight*aspect;camera.top=cy+halfHeight;camera.bottom=cy-halfHeight;camera.near=.5;camera.far=distance*3;camera.updateProjectionMatrix();
}
