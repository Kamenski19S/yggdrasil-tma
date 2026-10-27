import json,struct,numpy as np
from pathlib import Path
from scipy.sparse import coo_matrix,diags
from scipy.sparse.csgraph import connected_components
b=Path('../output/female_static.glb').read_bytes();n=struct.unpack_from('<I',b,12)[0];d=json.loads(b[20:20+n]);bb=b[28+n:]
def acc(i):
 a=d['accessors'][i];v=d['bufferViews'][a['bufferView']];sz={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']];return np.frombuffer(bb,dtype={5126:'<f4',5123:'<u2',5125:'<u4'}[a['componentType']],count=a['count']*sz,offset=v.get('byteOffset',0)+a.get('byteOffset',0)).reshape(-1,sz)
p=d['meshes'][0]['primitives'][0];v=acc(p['attributes']['POSITION']);tri=acc(p['indices']).reshape(-1,3);pos,inv=np.unique(np.round(v,4),axis=0,return_inverse=True);N=len(pos);edges=inv[np.concatenate([tri[:,[0,1]],tri[:,[1,2]],tri[:,[2,0]]])]
mask=(pos[:,0]<-.105)&(pos[:,1]<1.04);e=edges[mask[edges].all(axis=1)];adj=coo_matrix((np.ones(len(e)),(e[:,0],e[:,1])),shape=(N,N));_,lab=connected_components(adj,directed=False);seed=(pos[:,0]<-.37)&(pos[:,1]<.8);out=np.isin(lab,np.unique(lab[seed]))&mask
Path('../output/female-weapon-mask.bin').write_bytes(out[inv].astype('u1').tobytes());print('Blade mask',out[inv].sum())
if __name__=='__main__' and '--smooth' in __import__('sys').argv:
 weights=np.frombuffer(Path('../output/female-weights-dense.bin').read_bytes(),dtype='<f4').reshape(-1,22).copy();M=np.zeros((N,22));counts=np.bincount(inv);np.add.at(M,inv,weights);M/=np.maximum(counts,1)[:,None];initial=M.copy();e=np.concatenate([edges,edges[:,::-1]]);length=np.linalg.norm(pos[e[:,0]]-pos[e[:,1]],axis=1);A=coo_matrix((1/np.maximum(.004,length),(e[:,0],e[:,1])),shape=(N,N)).tocsr();A=diags(1/np.maximum(1e-8,np.asarray(A.sum(axis=1)).ravel()))@A;pin=out|(pos[:,1]>1.57)
 for _ in range(24):M=.9*(A@M)+.1*initial;M[pin]=initial[pin]
 Path('../output/female-weights-smoothed.bin').write_bytes(M[inv].astype('<f4').tobytes())
