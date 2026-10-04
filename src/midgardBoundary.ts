import * as THREE from 'three';

const noise = (a:number,b:number) => {
  const n=Math.sin(a*127.1+b*311.7)*43758.5453;
  return n-Math.floor(n);
};

export type BoundaryRock={x:number;z:number;radius:number;height:number;yaw:number;stone:number};

// Outside the movement limits (x ±88, z ±89), with clear river mouths.
export function boundaryRocks(riverCenterX:(z:number)=>number,riverHalf:number):BoundaryRock[] {
  const rocks:BoundaryRock[]=[];
  for(let side=0;side<4;side++) {
    for(let i=0;i<49;i++) {
      const along=-92+i*184/49;
      const edge=92+noise(i,side+71)*.25;
      const x=side===0?-edge:side===1?edge:along;
      const z=side===2?-edge:side===3?edge:along;
      const radius=2.15+noise(i,side+83)*.60;
      // Sample the whole footprint: the river bends near the edge.
      if([z-radius,z,z+radius].some(zz=>Math.abs(x-riverCenterX(zz))<riverHalf+radius+1))continue;
      rocks.push({x,z,radius,height:1.25+noise(i,side+91)*2.25+(i%9===0?1:0),yaw:noise(i,side+103)*Math.PI*2,stone:(i+side)%3});
    }
  }
  return rocks;
}

export function createMidgardBoundary(
  scene:THREE.Scene,stoneMaterials:THREE.MeshStandardMaterial[],
  groundY:(x:number,z:number)=>number,riverCenterX:(z:number)=>number,riverHalf:number
) {
  const geometry=new THREE.DodecahedronGeometry(1,1);
  const positions=geometry.getAttribute('position');
  const colors:number[]=[];
  const bare=new THREE.Color('#b9b7a9'),moss=new THREE.Color('#527641');
  for(let i=0;i<positions.count;i++) {
    const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i);
    // Smooth spatial variation keeps duplicated vertices in the same moss patch.
    const patch=Math.sin(x*5+z*3)+Math.cos(z*7-x*2);
    const coverage=THREE.MathUtils.clamp((y+.2)*.6+patch*.23,0,.85);
    const color=bare.clone().lerp(moss,coverage);
    colors.push(color.r,color.g,color.b);
  }
  geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  const materials=stoneMaterials.map(source=>{
    const material=source.clone();material.vertexColors=true;return material;
  });
  const rocks=boundaryRocks(riverCenterX,riverHalf);
  const transform=new THREE.Object3D();
  const meshes=materials.map((material,stone)=>{
    const instances=rocks.filter(rock=>rock.stone===stone);
    const mesh=new THREE.InstancedMesh(geometry,material,instances.length);
    mesh.name=`Midgard mossy boundary ${stone+1}`;
    instances.forEach((rock,index)=>{
      transform.position.set(rock.x,groundY(rock.x,rock.z)+rock.height*.60,rock.z);
      transform.rotation.set(0,rock.yaw,0);
      transform.scale.set(rock.radius,rock.height,rock.radius);
      transform.updateMatrix();mesh.setMatrixAt(index,transform.matrix);
    });
    mesh.instanceMatrix.needsUpdate=true;
    mesh.computeBoundingSphere();mesh.receiveShadow=true;
    scene.add(mesh);return mesh;
  });
  return {materials,meshes};
}
