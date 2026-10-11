// Lightweight geometry conversion for the CC BY 4.0 Water Splash Spiral by Will VFX.
// Run during the existing Niflheim asset materialization step; no runtime dependencies.
export function optimizeWaterSpiral(glb, voxelSize = 2.5) {
  if (glb.toString('ascii', 0, 4) !== 'glTF' || glb.readUInt32LE(4) !== 2 || glb.readUInt32LE(8) !== glb.length)
    throw new Error('Invalid source Water Splash Spiral GLB');
  const jsonLength = glb.readUInt32LE(12);
  const source = JSON.parse(glb.toString('utf8', 20, 20 + jsonLength));
  const binaryStart = 20 + jsonLength + 8;
  if (glb.toString('ascii', 20 + jsonLength + 4, binaryStart) !== 'BIN\0')
    throw new Error('Expected binary GLB chunk');
  const binary = glb.subarray(binaryStart);
  const types = {SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4};
  const componentBytes = {5120:1,5121:1,5122:2,5123:2,5125:4,5126:4};
  function accessor(index) {
    const a = source.accessors[index], v = source.bufferViews[a.bufferView];
    const dimensions = types[a.type], byteSize = componentBytes[a.componentType];
    if (!dimensions || !byteSize || a.sparse || v.buffer !== 0) throw new Error('Unsupported water spiral accessor');
    const stride = v.byteStride ?? dimensions * byteSize;
    const base = (v.byteOffset ?? 0) + (a.byteOffset ?? 0);
    const data = new Float64Array(a.count * dimensions);
    for (let i = 0; i < a.count; i++) for(let j = 0; j < dimensions; j++) {
      const offset = base + i * stride + j * byteSize;
      const value = a.componentType === 5126 ? binary.readFloatLE(offset)
        : a.componentType === 5125 ? binary.readUInt32LE(offset)
        : a.componentType === 5123 ? binary.readUInt16LE(offset)
        : a.componentType === 5120 ? binary.readInt8(offset)
        : binary.readUInt8(offset);
      data[i * dimensions + j] = value;
    }
    return data;
  }
  const dest = structuredClone(source);
  dest.accessors = [];
  dest.bufferViews = [];
  dest.buffers = [{byteLength:0}];
  dest.extensionsUsed = [...new Set([...(dest.extensionsUsed || []), 'KHR_mesh_quantization'])];
  dest.extensionsRequired = [...new Set([...(dest.extensionsRequired || []), 'KHR_mesh_quantization'])];
  dest.asset.generator = 'Voxel-simplified quantized GLB (Will VFX CC BY 4.0)';
  const chunks = [];
  let offset = 0, totalTriangles = 0;
  function put(buf, target, stride) {
    const pad = (4 - offset % 4) % 4;
    if (pad) {chunks.push(Buffer.alloc(pad)); offset += pad;}
    const view = {buffer:0,byteOffset:offset,byteLength:buf.length,target};
    if (stride) view.byteStride = stride;
    dest.bufferViews.push(view);
    chunks.push(buf); offset += buf.length;
    return dest.bufferViews.length - 1;
  }
  function addAccessor(bufferView, componentType, count, type, extras = {}) {
    dest.accessors.push({bufferView, componentType, count, type, ...extras});
    return dest.accessors.length - 1;
  }
  for (let meshIndex = 0; meshIndex < dest.meshes.length; meshIndex++) {
    for (const primitive of dest.meshes[meshIndex].primitives) {
      const original = source.meshes[meshIndex].primitives.find(p => p.material === primitive.material) || source.meshes[meshIndex].primitives[0];
      if (Object.keys(original.attributes).sort().join(',') !== 'NORMAL,POSITION')
        throw new Error('Unexpected water spiral attributes');
      const positions = accessor(original.attributes.POSITION);
      const normals = accessor(original.attributes.NORMAL);
      const indices = accessor(original.indices);
      const groups = [], lookup = new Map(), remap = new Uint32Array(positions.length / 3);
      for(let i = 0; i < remap.length; i++) {
        const k = i * 3, x = positions[k], y = positions[k+1], z = positions[k+2];
        const key = Math.floor(x/voxelSize)+','+Math.floor(y/voxelSize)+','+Math.floor(z/voxelSize);
        let id = lookup.get(key);
        if (id === undefined) {id = groups.length; lookup.set(key,id); groups.push({x:0,y:0,z:0,nx:0,ny:0,nz:0,count:0});}
        remap[i] = id;
        const g = groups[id]; g.x += x;g.y += y;g.z += z;
        g.nx += normals[k];g.ny += normals[k+1];g.nz += normals[k+2];g.count++;
      }
      const seen = new Set(), tris = [], used = new Set();
      for(let i=0; i<indices.length; i+=3) {
        const a=remap[indices[i]], b=remap[indices[i+1]], c=remap[indices[i+2]];
        if(a===b || b===c || c===a) continue;
        const sorted = [a,b,c].sort((m,n)=>m-n), key=sorted[0]+','+sorted[1]+','+sorted[2];
        if (seen.has(key)) continue;
        seen.add(key);tris.push(a,b,c);used.add(a);used.add(b);used.add(c);
      }
      const ids = [...used].sort((a,b)=>a-b);
      if (!ids.length) throw new Error('Voxel simplification removed the water spiral');
      const compact = new Map(ids.map((id,i)=>[id,i]));
      const vertexCount = ids.length;
      const avg = ids.map(id=>{const g=groups[id], c=g.count, norm=Math.hypot(g.nx,g.ny,g.nz)||1;return {x:g.x/c,y:g.y/c,z:g.z/c,nx:g.nx/norm,ny:g.ny/norm,nz:g.nz/norm};});
      const mins = [Infinity,Infinity,Infinity], maxs = [-Infinity,-Infinity,-Infinity];
      for (const v of avg) {for(const [k,n] of [v.x,v.y,v.z].entries()){mins[k]=Math.min(mins[k],n);maxs[k]=Math.max(maxs[k],n);}}
      const range = Math.max(...maxs.map((n,k)=>n-mins[k]));
      if(!(range>0)) throw new Error('Water spiral has zero-sized geometry');
      for (const node of dest.nodes) if (node.mesh === meshIndex) {
        if (node.matrix || node.scale || node.translation) throw new Error('Unexpected original water mesh transform');
        node.translation = mins; node.scale = [range,range,range];
      }
      const pb = Buffer.alloc(vertexCount * 8), nb = Buffer.alloc(vertexCount * 4), qaMin=[65535,65535,65535],qaMax=[0,0,0];
      for(let i=0;i<vertexCount;i++) {
        const v=avg[i];
        for(const [k,n] of [v.x,v.y,v.z].entries()) {
          const q=Math.max(0,Math.min(65535,Math.round((n-mins[k])/range*65535)));
          pb.writeUInt16LE(q,i*8+k*2);qaMin[k]=Math.min(qaMin[k],q);qaMax[k]=Math.max(qaMax[k],q);
        }
        for(const [k,n] of [v.nx,v.ny,v.nz].entries())nb.writeInt8(Math.max(-127,Math.min(127,Math.round(n*127))),i*4+k);
      }
      const is16 = vertexCount <= 65535;
      const ib = Buffer.alloc(tris.length*(is16?2:4));
      for(let i=0;i<tris.length;i++) {
        const value=compact.get(tris[i]);
        if(is16)ib.writeUInt16LE(value,i*2); else ib.writeUInt32LE(value,i*4);
      }
      const pv=put(pb,34962,8), nv=put(nb,34962,4), iv=put(ib,34963);
      const pa=addAccessor(pv,5123,vertexCount,'VEC3',{normalized:true,min:qaMin,max:qaMax});
      const na=addAccessor(nv,5120,vertexCount,'VEC3',{normalized:true});
      const ia=addAccessor(iv,is16?5123:5125,tris.length,'SCALAR');
      primitive.attributes={POSITION:pa,NORMAL:na};primitive.indices=ia;
      totalTriangles += tris.length/3;
    }
  }
  const padding=(4-offset%4)%4;if(padding){chunks.push(Buffer.alloc(padding));offset+=padding;}
  dest.buffers[0].byteLength=offset;
  const j = Buffer.from(JSON.stringify(dest),'utf8');
  const jpad = (4-j.length%4)%4, paddedJson = Buffer.concat([j,Buffer.alloc(jpad,0x20)]);
  const header=Buffer.alloc(20), binaryHeader=Buffer.alloc(8);
  header.write('glTF',0);header.writeUInt32LE(2,4);header.writeUInt32LE(20+paddedJson.length+8+offset,8);header.writeUInt32LE(paddedJson.length,12);header.write('JSON',16);
  binaryHeader.writeUInt32LE(offset,0);binaryHeader.write('BIN\0',4);
  const result=Buffer.concat([header,paddedJson,binaryHeader,...chunks]);
  if(result.readUInt32LE(8)!==result.length)throw new Error('Water GLB output has incorrect length');
  console.log('Water spiral optimized: '+glb.length+' -> '+result.length+' bytes ('+totalTriangles+' triangles)');
  return result;
}
