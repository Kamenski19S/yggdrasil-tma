exec(open('scripts/segment-muspelheim-dark-elf.py').read().split('mask=(np.abs')[0])
from scipy.sparse import diags
weights=np.frombuffer(Path('../output/elf-weights-dense.bin').read_bytes(),dtype='<f4').reshape(-1,22).copy()
M=np.zeros((N,22));counts=np.bincount(inv);np.add.at(M,inv,weights);M/=np.maximum(counts,1)[:,None];initial=M.copy()
e=np.concatenate([edges,edges[:,::-1]]);length=np.linalg.norm(pos[e[:,0]]-pos[e[:,1]],axis=1);A=coo_matrix((1/np.maximum(.004,length),(e[:,0],e[:,1])),shape=(N,N)).tocsr();A=diags(1/np.maximum(1e-8,np.asarray(A.sum(axis=1)).ravel()))@A
pin=np.zeros(N,bool);mask=np.frombuffer(Path('../output/elf-weapon-mask.bin').read_bytes(),dtype='u1')|np.frombuffer(Path('../output/elf-hair-mask.bin').read_bytes(),dtype='u1');np.logical_or.at(pin,inv,mask.astype(bool)|(v[:,1]>1.5)|(v[:,1]<.11))
for _ in range(18):M=.86*(A@M)+.14*initial;M[pin]=initial[pin]
Path('../output/elf-weights-smoothed.bin').write_bytes(M[inv].astype('<f4').tobytes())
print('Smoothed',N,'welded vertices, pinned',pin.sum())
