import json,struct,io,numpy as np
from PIL import Image
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
from pathlib import Path
b=Path('../output/dark_elf_static.glb').read_bytes();n=struct.unpack_from('<I',b,12)[0];d=json.loads(b[20:20+n]);bb=b[28+n:]
def acc(i):
 a=d['accessors'][i];v=d['bufferViews'][a['bufferView']];sz={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']];return np.frombuffer(bb,dtype={5126:'<f4',5123:'<u2',5125:'<u4'}[a['componentType']],count=a['count']*sz,offset=v.get('byteOffset',0)+a.get('byteOffset',0)).reshape(-1,sz)
p=d['meshes'][0]['primitives'][0];v=acc(p['attributes']['POSITION']);uv=acc(p['attributes']['TEXCOORD_0']);tri=acc(p['indices']).reshape(-1,3);im=d['images'][d['textures'][d['materials'][0]['pbrMetallicRoughness']['baseColorTexture']['index']]['source']];vw=d['bufferViews'][im['bufferView']];tex=np.array(Image.open(io.BytesIO(bb[vw['byteOffset']:vw['byteOffset']+vw['byteLength']])).convert('RGB'))/255
ix=np.clip((uv[:,0]*tex.shape[1]).astype(int),0,tex.shape[1]-1);iy=np.clip((uv[:,1]*tex.shape[0]).astype(int),0,tex.shape[0]-1);rgb=tex[iy,ix]
pos,inv=np.unique(np.round(v,5),axis=0,return_inverse=True);N=len(pos);edges=np.concatenate([tri[:,[0,1]],tri[:,[1,2]],tri[:,[2,0]]]);edges=inv[edges]
mask=(np.abs(pos[:,0])>.265)&(pos[:,1]<.96)
e=edges[mask[edges].all(axis=1)];adj=coo_matrix((np.ones(len(e)),(e[:,0],e[:,1])),shape=(N,N));count,lab=connected_components(adj,directed=False)
seed=np.zeros(N,bool);np.logical_or.at(seed,inv,((v[:,0]<-.31)&(v[:,1]<.65)&(rgb.mean(axis=1)>.28))|((v[:,0]>.31)&(v[:,1]<.89)&(rgb[:,2]>rgb[:,1]*1.15)&(rgb[:,2]>.25)))
labels=np.unique(lab[seed]);out=np.isin(lab,labels)&mask
for label in labels:
 ids=np.where(lab==label)[0]
 if len(ids)>3:print('weapon',len(ids),pos[ids].min(axis=0),pos[ids].max(axis=0))
Path('../output/elf-weapon-mask.bin').write_bytes(out[inv].astype('u1').tobytes())
hair=(rgb.min(axis=1)>.42)&(v[:,1]>1.08)
Path('../output/elf-hair-mask.bin').write_bytes(hair.astype('u1').tobytes())
print('weapons',out[inv].sum(),'hair',hair.sum(),'bounds',v.min(axis=0),v.max(axis=0))
