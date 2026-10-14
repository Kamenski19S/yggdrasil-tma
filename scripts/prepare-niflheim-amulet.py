"""NicholasDeStefano CC BY 4.0 amulet: mobile textures and six matching fragments.
Usage: python scripts/prepare-niflheim-amulet.py source.glb
Requires NumPy and Pillow. Necklace cord omitted from the fragment set.
"""
import sys,json,struct,io,pathlib,numpy as np
from PIL import Image
root=pathlib.Path(__file__).resolve().parents[1];dest=root/'public/img/models/amulet';dest.mkdir(parents=True,exist_ok=True)
b=pathlib.Path(sys.argv[1]).read_bytes();jl=struct.unpack_from('<I',b,12)[0];j=json.loads(b[20:20+jl]);binary=b[28+jl:]
def pack(doc,chunks,path):
 data=b''.join(chunks);doc['buffers']=[{'byteLength':len(data)}];s=json.dumps(doc,separators=(',',':')).encode();s+=b' '*((-len(s))%4);path.write_bytes(struct.pack('<4sII',b'glTF',2,28+len(s)+len(data))+struct.pack('<I4s',len(s),b'JSON')+s+struct.pack('<I4s',len(data),b'BIN\0')+data)
# Repack original buffer views, replacing large embedded images with 256px WebP.
imageviews={im['bufferView']:i for i,im in enumerate(j['images'])};chunks=[]
for vi,v in enumerate(j['bufferViews']):
 data=binary[v.get('byteOffset',0):v.get('byteOffset',0)+v['byteLength']]
 if vi in imageviews:
  im=Image.open(io.BytesIO(data));im.thumbnail((256,256),Image.Resampling.LANCZOS);out=io.BytesIO();im.save(out,'WEBP',quality=95,method=6);data=out.getvalue();j['images'][imageviews[vi]]['mimeType']='image/webp'
 v['byteOffset']=sum(map(len,chunks));v['byteLength']=len(data);chunks.append(data+b'\0'*((-len(data))%4))
for t in j['textures']:t['extensions']={'EXT_texture_webp':{'source':t.pop('source')}}
j['extensionsUsed']=list(set(j.get('extensionsUsed',[])+['EXT_texture_webp']));j['extensionsRequired']=list(set(j.get('extensionsRequired',[])+['EXT_texture_webp']));j['asset']['generator']='Yggdrasil mobile texture optimization, 256px WebP'
pack(j,chunks,dest/'amulet-optimized.glb')
def read(i):
 a=j['accessors'][i];v=j['bufferViews'][a['bufferView']];d=chunks[a['bufferView']];num={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']];dtype={5126:'<f4',5123:'<u2',5125:'<u4'}[a['componentType']];return np.ndarray((a['count'],num),dtype=dtype,buffer=d,offset=a.get('byteOffset',0),strides=(v.get('byteStride',num*np.dtype(dtype).itemsize),np.dtype(dtype).itemsize)).copy()
objects=[]
def visit(i,parent):
 nd=j['nodes'][i];m=parent@np.array(nd.get('matrix',np.eye(4).T.flatten())).reshape(4,4).T
 if 'mesh' in nd and not nd.get('name','').startswith('NurbsCircle'):
  for prim in j['meshes'][nd['mesh']]['primitives']:
   p=read(prim['attributes']['POSITION']);p=(m@np.column_stack([p,np.ones(len(p))]).T).T[:,:3]
   norm=read(prim['attributes']['NORMAL'])@np.linalg.inv(m[:3,:3]);norm/=np.linalg.norm(norm,axis=1)[:,None];uv=read(prim['attributes']['TEXCOORD_0']);idx=read(prim['indices']).ravel().astype(int);objects.append((p,norm,uv,idx))
 for c in nd.get('children',[]):visit(c,m)
for i in j['scenes'][0]['nodes']:visit(i,np.eye(4))
points=np.concatenate([o[0] for o in objects]);center=(points.min(0)+points.max(0))/2;scale=2.4/np.ptp(points,axis=0)[1];rotation=np.array([[0,0,1],[0,1,0],[-1,0,0]])
triangles=[]
for p,n,uv,idx in objects:
 p=(p-center)@rotation.T*scale;n=n@rotation.T
 for i in range(0,len(idx),3):triangles.append(np.column_stack([p[idx[i:i+3]],n[idx[i:i+3]],uv[idx[i:i+3]]]))
def clip(poly,n):
 out=[]
 for a,b in zip(poly,np.roll(poly,-1,axis=0)):
  da=a[:3]@n;db=b[:3]@n
  if da>=-1e-8:out.append(a)
  if (da>=0)!=(db>=0):out.append(a+(b-a)*da/(da-db))
 return np.array(out)
# Six sectors through the pendant's centre. UVs and normals interpolate at every cut.
parts=[];original_area=0
for tri in triangles:original_area+=np.linalg.norm(np.cross(tri[1,:3]-tri[0,:3],tri[2,:3]-tri[0,:3]))/2
for i in range(6):
 a=i*np.pi/3+.13;c=(i+1)*np.pi/3+.13;n1=np.array([-np.sin(a),np.cos(a),0]);n2=np.array([np.sin(c),-np.cos(c),0]);out=[]
 for tri in triangles:
  poly=clip(tri,n1)
  if len(poly)>=3:poly=clip(poly,n2)
  for k in range(1,len(poly)-1):out.extend(poly[[0,k,k+1]])
 parts.append(np.array(out))
area=sum(np.linalg.norm(np.cross(p[1::3,:3]-p[0::3,:3],p[2::3,:3]-p[0::3,:3]),axis=1).sum()/2 for p in parts);assert abs(area-original_area)<1e-5
out={'asset':j['asset']|{'generator':'Yggdrasil six radial fractures, UV/normal preserving, necklace cord removed'},'scene':0,'scenes':[{'nodes':list(range(6))}],'nodes':[],'meshes':[],'materials':j['materials'],'textures':j['textures'],'samplers':j.get('samplers',[]),'images':[],'bufferViews':[],'accessors':[],'extensionsUsed':j['extensionsUsed'],'extensionsRequired':j['extensionsRequired']};newchunks=[]
def view(data):
 vi=len(out['bufferViews']);out['bufferViews'].append({'buffer':0,'byteOffset':sum(map(len,newchunks)),'byteLength':len(data)});newchunks.append(data+b'\0'*((-len(data))%4));return vi
for im in j['images']:
 v=j['bufferViews'][im['bufferView']];data=chunks[im['bufferView']][:v['byteLength']];out['images'].append({'mimeType':'image/webp','bufferView':view(data)})
def attr(a):
 a=np.array(a,dtype='<f4');ai=len(out['accessors']);out['accessors'].append({'bufferView':view(a.tobytes()),'componentType':5126,'count':len(a),'type':'VEC'+str(a.shape[1]),'min':a.min(0).tolist(),'max':a.max(0).tolist()});return ai
for i,p in enumerate(parts):
 assert len(p)>0;name='AmuletShard'+str(i+1);out['meshes'].append({'name':name,'primitives':[{'attributes':{'POSITION':attr(p[:,:3]),'NORMAL':attr(p[:,3:6]),'TEXCOORD_0':attr(p[:,6:8])},'material':0}]});out['nodes'].append({'mesh':i,'name':name})
pack(out,newchunks,dest/'amulet-six-shards.glb')
print('Triangles by part:',[len(p)//3 for p in parts],'surface area preserved',area);print('Optimized bytes',(dest/'amulet-optimized.glb').stat().st_size,'shards bytes',(dest/'amulet-six-shards.glb').stat().st_size)
