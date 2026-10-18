"""Keep the supplied damaged deck and its supporting ropes; remove railings, pack textures."""
import json,struct,io,sys
from pathlib import Path
import numpy as np
from PIL import Image
b=Path(sys.argv[1]).read_bytes();n=struct.unpack_from('<I',b,12)[0];doc=json.loads(b[20:20+n]);binary=b[28+n:]
def acc(i):
 a=doc['accessors'][i];v=doc['bufferViews'][a['bufferView']];dt={5126:'<f4',5125:'<u4',5123:'<u2',5121:'u1'}[a['componentType']];c={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']];return np.ndarray((a['count'],c),dtype=dt,buffer=binary,offset=v.get('byteOffset',0)+a.get('byteOffset',0),strides=(v.get('byteStride',np.dtype(dt).itemsize*c),np.dtype(dt).itemsize)).copy()
# Mesh 0 is an obsolete collision plane filling the damage. Only mesh 1 is visible deck.
p=doc['meshes'][1]['primitives'][0];pos=acc(p['attributes']['POSITION']);uv=acc(p['attributes']['TEXCOORD_0']);idx=acc(p['indices']).reshape(-1,3)
parent=list(range(len(pos)))
def find(x):
 while parent[x]!=x:parent[x]=parent[parent[x]];x=parent[x]
 return x
for ia,ib,ic in idx:
 parent[find(ib)]=find(ia);parent[find(ic)]=find(ia)
groups={}
for i in range(len(pos)):groups.setdefault(find(i),[]).append(i)
anchors=[]
for g in groups.values():
 v=pos[g];extent=np.ptp(v,axis=0)
 if extent[0]<15 and extent[1]>15 and extent[2]<5:anchors.append((v[:,0].mean(),np.percentile(v[:,2],90)))
anchors=sorted(anchors)
def deck(x):return np.interp(x,[a[0] for a in anchors],[a[1] for a in anchors])
# Railings are about ten units above the boards; discard them and the tall posts.
keep=np.all(pos[idx,2]<=deck(pos[idx,0])+1.65,axis=1);idx=idx[keep];used,inv=np.unique(idx,return_inverse=True);v=pos[used].copy();u=uv[used];along=(v[:,0]-124.75)/95.25*42
height=v[:,2]-deck(v[:,0]);across=-(v[:,1]-219.81)/27.05*17
out=np.column_stack((across,height,along)).astype('<f4');indices=inv.reshape(-1,3)[:,[0,2,1]].reshape(-1).astype('<u2')
chunks=[];views=[];accessors=[];offset=0
def append(data,target=None):
 global offset
 pad=(-offset)%4;chunks.append(bytes(pad));offset+=pad;i=len(views);views.append(dict(buffer=0,byteOffset=offset,byteLength=len(data),**({'target':target} if target else {})));chunks.append(data);offset+=len(data);return i
def attr(a,typ,component=5126,target=34962):
 i=len(accessors);entry=dict(bufferView=append(a.tobytes(),target),componentType=component,count=len(a),type=typ)
 if typ=='VEC3':entry.update(min=a.min(0).tolist(),max=a.max(0).tolist())
 accessors.append(entry);return i
attrs={'POSITION':attr(out,'VEC3'),'TEXCOORD_0':attr(u.astype('<f4'),'VEC2')};ii=attr(indices,'SCALAR',5123,34963)
images=[]
for j,image in enumerate(doc['images']):
 v=doc['bufferViews'][image['bufferView']];im=Image.open(io.BytesIO(binary[v.get('byteOffset',0):v.get('byteOffset',0)+v['byteLength']])).convert('RGB');im.thumbnail((768 if j==0 else 512,)*2);o=io.BytesIO();im.save(o,format='JPEG',quality=85,optimize=True);images.append(dict(bufferView=append(o.getvalue()),mimeType='image/jpeg'))
asset=doc['asset'];asset['extras']['modifications']='Yggdrasil: removed railing, posts and hidden plane; retained damaged boards and under-deck ropes; normalized and compressed textures.'
result=dict(asset=asset,scene=0,scenes=[dict(nodes=[0])],nodes=[dict(mesh=0,name='Damaged boards and supporting ropes')],meshes=[dict(primitives=[dict(attributes=attrs,indices=ii,material=0)])],materials=doc['materials'],textures=doc['textures'],samplers=doc.get('samplers',[]),images=images,buffers=[dict(byteLength=offset)],bufferViews=views,accessors=accessors)
j=json.dumps(result,separators=(',',':')).encode();j+=b' '*((-len(j))%4);data=b''.join(chunks);data+=bytes((-len(data))%4);output=struct.pack('<III',0x46546c67,2,28+len(j)+len(data))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(data),0x004e4942)+data
Path('public/img/models/Muspelheim_Damaged_Rope_Bridge.glb').write_bytes(output)
print('Original bytes',len(b),'optimized',len(output),'triangles',len(indices)//3)
