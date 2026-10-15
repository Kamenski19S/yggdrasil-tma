"""Extract one rotor from rabiiwattar1's CC BY 4.0 water wheel.
Usage: python scripts/prepare-steel-wheel.py source.glb output.glb
Requires numpy. Preserves source positions/normals; removes the second wheel,
cameras and stationary base. Aligns shaft to Z and centers the six-unit rotor.
"""
import sys,json,struct
from pathlib import Path
import numpy as np
src,dst=map(Path,sys.argv[1:3]);b=src.read_bytes();n=struct.unpack_from('<I',b,12)[0];j=json.loads(b[20:20+n]);binary=b[28+n:]
def matrix(node):
 if 'matrix' in node:return np.array(node['matrix']).reshape(4,4,order='F')
 x,y,z,w=node.get('rotation',[0,0,0,1]);r=np.eye(4);r[:3,:3]=[[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w)],[2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w)],[2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y)]];r[:3,:3]@=np.diag(node.get('scale',[1,1,1]));r[:3,3]=node.get('translation',[0,0,0]);return r
world={}
def visit(i,parent=np.eye(4)):
 world[i]=parent@matrix(j['nodes'][i])
 for child in j['nodes'][i].get('children',[]):visit(child,world[i])
for root in j['scenes'][j.get('scene',0)]['nodes']:visit(root)
def read(i):
 a=j['accessors'][i];v=j['bufferViews'][a['bufferView']];dtype=np.dtype({5126:'<f4',5123:'<u2',5125:'<u4'}[a['componentType']]);c={'VEC3':3,'SCALAR':1}[a['type']]
 return np.ndarray((a['count'],c),dtype=dtype,buffer=binary,offset=v.get('byteOffset',0)+a.get('byteOffset',0),strides=(v.get('byteStride',dtype.itemsize*c),dtype.itemsize)).copy()
wheel=next(i for i,n in enumerate(j['nodes']) if n.get('name')=='wheel_1');pieces=[]
def gather(i,role):
 node=j['nodes'][i]
 if 'mesh' in node:
  for p in j['meshes'][node['mesh']]['primitives']:
   ids=read(p['indices']).flatten().astype(int);v=read(p['attributes']['POSITION']);normal=read(p['attributes']['NORMAL']);v=(np.c_[v,np.ones(len(v))]@world[i].T)[:,:3];normal=normal@np.linalg.inv(world[i][:3,:3]);normal/=np.maximum(np.linalg.norm(normal,axis=1)[:,None],1e-8);pieces.append((role,v[ids],normal[ids]))
 for child in node.get('children',[]):gather(child,role)
for child in j['nodes'][wheel]['children']:
 name=j['nodes'][child].get('name','')
 if name in ['ROOF','Null_2','tubes','supporter']:gather(child,name)
points=np.concatenate([v for _,v,_ in pieces]);_,axes=np.linalg.eigh(np.cov(points.T));z=axes[:,0];z[1]=0;z/=np.linalg.norm(z)
if z[2]<0:z=-z
y=np.array([0.,1.,0.]);x=np.cross(y,z);basis=np.stack([x,y,z]);aligned=points@basis.T;center=(aligned.min(0)+aligned.max(0))/2;scale=6/max(np.ptp(aligned,axis=0)[:2])
vertices=[];roles=[]
for role,v,normals in pieces:
 vertices.append(np.c_[((v@basis.T)-center)*scale,normals@basis.T]);roles.extend([0 if role in ['ROOF','supporter'] else 1]*len(v))
unique,indices=np.unique(np.round(np.concatenate(vertices),6),axis=0,return_inverse=True);roles=np.array(roles);data=bytearray();views=[];accessors=[]
def accessor(values,kind,component):
 while len(data)%4:data.append(0)
 arr=np.asarray(values,dtype='<f4' if component==5126 else '<u2' if component==5123 else '<u4');view=len(views);views.append({'buffer':0,'byteOffset':len(data),'byteLength':arr.nbytes});data.extend(arr.tobytes());a={'bufferView':view,'componentType':component,'count':len(arr),'type':kind}
 if kind=='VEC3':a.update(min=arr.min(0).tolist(),max=arr.max(0).tolist())
 accessors.append(a);return len(accessors)-1
pos=accessor(unique[:,:3],'VEC3',5126);normal=accessor(unique[:,3:],'VEC3',5126);primitives=[]
for role in [0,1]:
 idx=indices[roles==role];access=accessor(idx,'SCALAR',5123 if len(unique)<65536 else 5125);primitives.append({'attributes':{'POSITION':pos,'NORMAL':normal},'indices':access,'material':role})
asset={**j['asset'],'generator':'Yggdrasil: one centered rotor; steel materials; original geometry and normals','extras':{**j['asset'].get('extras',{}),'changes':'One wheel rotor extracted; second wheel, cameras and fixed base removed; centered, aligned, scaled; steel materials.'}}
doc={'asset':asset,'scene':0,'scenes':[{'nodes':[0]}],'nodes':[{'name':'Steel Water Wheel — rabiiwattar1','mesh':0}],'meshes':[{'name':'Single rotating wheel','primitives':primitives}],'materials':[{'name':'Brushed steel','pbrMetallicRoughness':{'baseColorFactor':[.49,.57,.66,1],'metallicFactor':.78,'roughnessFactor':.35}},{'name':'Dark steel rings','pbrMetallicRoughness':{'baseColorFactor':[.24,.31,.39,1],'metallicFactor':.82,'roughnessFactor':.4}}],'accessors':accessors,'bufferViews':views,'buffers':[{'byteLength':len(data)}]}
text=json.dumps(doc,separators=(',',':'),ensure_ascii=False).encode();text+=b' '*((-len(text))%4);data+=b'\0'*((-len(data))%4);out=struct.pack('<III',0x46546c67,2,28+len(text)+len(data))+struct.pack('<II',len(text),0x4e4f534a)+text+struct.pack('<II',len(data),0x004e4942)+data;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(out);print(f'{len(b):,} -> {len(out):,} bytes; {len(indices)//3:,} triangles; {len(unique):,} vertices')
