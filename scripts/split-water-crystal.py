"""Split ucukcontorian's CC BY 4.0 diamond into three closed, matching GLB shards."""
import json,struct,pathlib,numpy as np
from scipy.spatial import ConvexHull
root=pathlib.Path(__file__).resolve().parents[1]; folder=root/'public/img/models/crystal'
b=(folder/'diamond-source.glb').read_bytes();jlen=struct.unpack_from('<I',b,12)[0];j=json.loads(b[20:20+jlen]); binary=b[28+jlen:]
def read(i):
 a=j['accessors'][i];v=j['bufferViews'][a['bufferView']];n={'SCALAR':1,'VEC3':3}[a['type']];dtype={5126:'<f4',5123:'<u2',5125:'<u4'}[a['componentType']];return np.frombuffer(binary,dtype=dtype,count=a['count']*n,offset=v.get('byteOffset',0)+a.get('byteOffset',0)).reshape(-1,n)
m=np.eye(4)
for node in j['nodes']:
 if 'matrix' in node:m=m@np.array(node['matrix']).reshape(4,4).T
p=read(0);p=(m@np.column_stack([p,np.ones(len(p))]).T).T[:,:3];p-= (p.min(0)+p.max(0))/2;p*=2/(p.max(0)-p.min(0))[1]
p=np.unique(np.round(p,7),axis=0)
# Two parallel slanted fractures; the three convex solids exactly partition the original.
n=np.array([.24,1,.17]);n/=np.linalg.norm(n)
def clip(points,level,sign):
 h=ConvexHull(points);edges={tuple(sorted((a,b))) for tri in h.simplices for a,b in [(tri[0],tri[1]),(tri[1],tri[2]),(tri[2],tri[0])]};d=points@n-level;out=[v for v,dist in zip(points,d) if dist*sign>=-1e-7]
 for a,b in edges:
  if d[a]*d[b]<-1e-12:out.append(points[a]+(points[b]-points[a])*d[a]/(d[a]-d[b]))
 return np.unique(np.round(out,7),axis=0)
pieces=[clip(p,-.32,-1),clip(clip(p,-.32,1),.34,-1),clip(p,.34,1)]
chunks=[];views=[];accessors=[];meshes=[];nodes=[]
def attr(a):
 a=np.asarray(a,dtype='<f4');data=a.tobytes();off=sum(map(len,chunks));chunks.append(data);vi=len(views);views.append({'buffer':0,'byteOffset':off,'byteLength':len(data)});ai=len(accessors);accessors.append({'bufferView':vi,'componentType':5126,'count':len(a),'type':'VEC3','min':a.min(0).tolist(),'max':a.max(0).tolist()});return ai
volume=0
for i,points in enumerate(pieces):
 hull=ConvexHull(points);volume+=hull.volume;vertices=[];normals=[]
 for tri,eq in zip(hull.simplices,hull.equations):
  v=points[tri];normal=eq[:3]
  if np.dot(np.cross(v[1]-v[0],v[2]-v[0]),normal)<0:v=v[[0,2,1]]
  vertices.extend(v);normals.extend([normal]*3)
 pos=attr(vertices);norm=attr(normals);meshes.append({'name':f'WaterShard{i+1}','primitives':[{'attributes':{'POSITION':pos,'NORMAL':norm},'material':0}]});nodes.append({'mesh':i,'name':f'WaterShard{i+1}'})
assert abs(volume-ConvexHull(p).volume)<1e-6
out={'asset':j['asset']|{'generator':'Yggdrasil: normalized diamond, three closed slanted fractures'},'scene':0,'scenes':[{'nodes':[0,1,2]}],'nodes':nodes,'meshes':meshes,'materials':[{'name':'Pure water crystal','alphaMode':'BLEND','pbrMetallicRoughness':{'baseColorFactor':[.86,.97,1,.68],'metallicFactor':.12,'roughnessFactor':.08}}],'buffers':[{'byteLength':sum(map(len,chunks))}],'bufferViews':views,'accessors':accessors}
s=json.dumps(out,separators=(',',':')).encode();s+=b' '*((-len(s))%4);blob=b''.join(chunks);header=struct.pack('<4sII',b'glTF',2,28+len(s)+len(blob));(folder/'water-crystal-shards.glb').write_bytes(header+struct.pack('<I4s',len(s),b'JSON')+s+struct.pack('<I4s',len(blob),b'BIN\0')+blob)
print('Closed shards:',[len(x) for x in pieces],'volume preserved:',volume,'GLB bytes:',28+len(s)+len(blob))
