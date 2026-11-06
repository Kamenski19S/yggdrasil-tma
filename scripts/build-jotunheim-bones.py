"""Build solid textured bone reliefs and a curved rib arch for the world boundary.
Usage: python scripts/build-jotunheim-bones.py SOURCE_DIRECTORY
Source PNGs are user-provided concept cutouts. Exported meshes are closed reliefs,
not single image planes; the separate arch is a fully spatial curved tube mesh.
"""
from pathlib import Path
import io,json,struct,sys
import numpy as np
from PIL import Image
from scipy.ndimage import distance_transform_edt,gaussian_filter,binary_opening
from scipy.spatial import Delaunay
from matplotlib.figure import Figure

OUT=Path('public/img/models')
SOURCE=Path(sys.argv[1])
MODULES=[('1000157523.png','Jotunheim_Bone_Ribs',.19),('1000157524.png','Jotunheim_Bone_Spine',.24),('1000157526.png','Jotunheim_Bone_Barricade',.21),('1000157525.png','Jotunheim_Bone_Skull',.39)]

def normals(p,tri):
 n=np.zeros_like(p);face=np.cross(p[tri[:,1]]-p[tri[:,0]],p[tri[:,2]]-p[tri[:,0]])
 for k in range(3):np.add.at(n,tri[:,k],face)
 return n/np.maximum(1e-12,np.linalg.norm(n,axis=1))[:,None]

def write(name,p,tri,uv,texture,extra):
 p=np.asarray(p,dtype='<f4');tri=np.asarray(tri,dtype='<u4');uv=np.asarray(uv,dtype='<f4');n=normals(p,tri).astype('<f4')
 views=[];acc=[];chunks=[];offset=0
 def blob(b,target=None):
  nonlocal offset
  pad=(-offset)%4;chunks.append(b'\0'*pad);offset+=pad
  v={'buffer':0,'byteOffset':offset,'byteLength':len(b)}
  if target:v['target']=target
  views.append(v);chunks.append(b);offset+=len(b);return len(views)-1
 for a,t,ctype,target in [(p,'VEC3',5126,34962),(n,'VEC3',5126,34962),(uv,'VEC2',5126,34962),(tri.reshape(-1,1),'SCALAR',5125,34963)]:
  item={'bufferView':blob(a.tobytes(),target),'componentType':ctype,'count':len(a),'type':t}
  if t=='VEC3' and len(acc)==0:item.update(min=a.min(0).tolist(),max=a.max(0).tolist())
  acc.append(item)
 image=blob(texture)
 j={'asset':{'version':'2.0','generator':'Yggdrasil boundary module builder','extras':extra},'scene':0,'scenes':[{'nodes':[0]}],'nodes':[{'name':name,'mesh':0}],
 'meshes':[{'name':name,'primitives':[{'attributes':{'POSITION':0,'NORMAL':1,'TEXCOORD_0':2},'indices':3,'material':0}]}],
 'materials':[{'name':'Petrified bone — cracks, weathering and frost','pbrMetallicRoughness':{'baseColorTexture':{'index':0},'metallicFactor':0,'roughnessFactor':.95},'alphaMode':'MASK','alphaCutoff':.48}],
 'textures':[{'extensions':{'EXT_texture_webp':{'source':0}},'sampler':0}], 'samplers':[{'magFilter':9729,'minFilter':9987,'wrapS':10497,'wrapT':10497}],
 'images':[{'bufferView':image,'mimeType':'image/webp'}],'extensionsUsed':['EXT_texture_webp'],'extensionsRequired':['EXT_texture_webp'],
 'accessors':acc,'bufferViews':views,'buffers':[{'byteLength':offset}]}
 binary=b''.join(chunks);binary+=b'\0'*((-len(binary))%4);text=json.dumps(j,separators=(',',':')).encode();text+=b' '*((-len(text))%4)
 result=struct.pack('<III',0x46546c67,2,28+len(text)+len(binary))+struct.pack('<II',len(text),0x4e4f534a)+text+struct.pack('<II',len(binary),0x004e4942)+binary
 (OUT/(name+'.glb')).write_bytes(result)
 print(name,':',len(p),'vertices,',len(tri),'triangles,',round(len(result)/1024),'KiB')
 return {'file':name+'.glb','vertices':len(p),'triangles':len(tri),'bytes':len(result)}

report=[]
if '--arch-only' in sys.argv:MODULES=[]
for filename,name,thickness in MODULES:
 original=Image.open(SOURCE/filename).convert('RGBA');im=original.resize((512,512),Image.Resampling.LANCZOS);rgba=np.asarray(im);mask=binary_opening(rgba[:,:,3]>145)
 figure=Figure();ax=figure.subplots();contours=ax.contour(mask.astype(float),levels=[.5]).allsegs[0]
 border=np.concatenate([c[::3] for c in contours if len(c)>24]);grid=np.mgrid[4:508:15,4:508:15].reshape(2,-1).T[:,::-1]
 grid=grid[mask[grid[:,1],grid[:,0]]];points=np.unique(np.round(np.concatenate([border,grid]),3),axis=0)
 triangles=Delaunay(points).simplices
 # Reject triangles spanning transparent gaps, eye sockets or the spaces between ribs.
 samples=[]
 for a,b,c in [(1/3,1/3,1/3),(.8,.1,.1),(.1,.8,.1),(.1,.1,.8),(.5,.5,0),(0,.5,.5),(.5,0,.5)]:
  q=points[triangles[:,0]]*a+points[triangles[:,1]]*b+points[triangles[:,2]]*c
  xy=np.clip(np.rint(q).astype(int),0,511);samples.append(rgba[xy[:,1],xy[:,0],3]>100)
 triangles=triangles[np.all(samples,axis=0)][:,[0,2,1]]
 used=np.unique(triangles);remap=np.full(len(points),-1);remap[used]=np.arange(len(used));points=points[used];triangles=remap[triangles]
 # Split pinch vertices where separate silhouette regions touch at a point.
 # Each front boundary then has two neighbours and its side wall is manifold.
 incident={i:[] for i in range(len(points))}
 for fi,face in enumerate(triangles):
  for v in face:incident[int(v)].append(fi)
 expanded=points.tolist()
 for v,faces in incident.items():
  remaining=set(faces);components=[]
  while remaining:
   stack=[remaining.pop()];component=[]
   while stack:
    fi=stack.pop();component.append(fi);others=set(triangles[fi])-{v}
    neighbours=[fj for fj in remaining if others.intersection(set(triangles[fj])-{v})]
    for fj in neighbours:remaining.remove(fj);stack.append(fj)
   components.append(component)
  for component in components[1:]:
   new=len(expanded);expanded.append(points[v].tolist())
   for fi in component:triangles[fi,triangles[fi]==v]=new
 points=np.asarray(expanded)
 xy=np.clip(np.rint(points).astype(int),0,511);dist=distance_transform_edt(mask);luma=gaussian_filter(rgba[:,:,:3].mean(2)/255,2)
 bulge=np.clip(dist[xy[:,1],xy[:,0]]/38,0,1)**.55
 relief=thickness*(.28+.65*bulge+.07*luma[xy[:,1],xy[:,0]])
 x=(points[:,0]-256)/512;y=(512-points[:,1])/512
 front=np.c_[x,y,relief/2];back=np.c_[x,y,-relief/2];p=np.concatenate([front,back]);uv=np.tile(points/512,(2,1));count=len(front)
 faces=[triangles,triangles[:,::-1]+count]
 edges={}
 for a,b,c in triangles:
  for u,v in [(a,b),(b,c),(c,a)]:
   key=(min(u,v),max(u,v));edges[key]=None if key in edges else (int(u),int(v))
 # Give side walls their own bone-grain UVs instead of stretching a single
 # edge pixel across the thickness. Reuse an opaque patch of this same texture.
 patch_best=None
 for py in range(24,455,12):
  for px in range(24,455,12):
   region=rgba[py:py+36,px:px+36]
   if np.all(region[:,:,3]>245):
    score=region[:,:,:3].mean()
    if patch_best is None or score>patch_best[0]:patch_best=(score,px,py)
 _,px,py=patch_best
 side_points=[];side_uv=[];sides=[]
 for ei,edge in enumerate(edges.values()):
  if edge is None:continue
  a,b=edge;start=len(p)+len(side_points);side_points.extend([p[a],p[b],p[a+count],p[b+count]])
  length=np.linalg.norm(points[a]-points[b]);u0=(px+3+(ei%3)*3)/512;u1=u0+min(24,max(5,length))/512
  v0=(py+3)/512;v1=(py+30)/512
  side_uv.extend([(u0,v0),(u1,v0),(u0,v1),(u1,v1)])
  sides.extend([(start,start+3,start+1),(start,start+2,start+3)])
 p=np.concatenate([p,side_points]);uv=np.concatenate([uv,side_uv]);faces.append(np.asarray(sides));tri=np.concatenate(faces)
 # Preserve the original image detail in a compact embedded texture.
 texture=io.BytesIO();original.resize((1024,1024),Image.Resampling.LANCZOS).save(texture,'WEBP',quality=86,method=6)
 extra={'source':filename,'construction':'Closed two-sided silhouette relief with rounded depth and sealed edges','sourceKind':'User supplied concept art','module':'world boundary','units':'normalized; runtime scales relative to Vicki'}
 report.append(write(name,p,tri,uv,texture.getvalue(),extra))

# A genuinely spatial pair of ribs. Their arch windows frame the distant terrain.
source=Image.open(SOURCE/'1000157523.png').convert('RGBA').resize((512,512));a=np.asarray(source);opaque=a[:,:,3]>245
best=None
for yy in range(60,430,12):
 for xx in range(60,430,12):
  patch=a[yy:yy+48,xx:xx+48]
  if np.all(patch[:,:,3]>245):
   score=patch[:,:,:3].mean()
   if best is None or score>best[0]:best=(score,patch)
tile=best[1];tile=np.concatenate([tile,tile[:,::-1]],axis=1);tile=np.concatenate([tile,tile[::-1]],axis=0);patch=Image.fromarray(tile).resize((256,256),Image.Resampling.LANCZOS);texture=io.BytesIO();patch.save(texture,'WEBP',quality=88,method=6)
p=[];uv=[];tri=[]
for mirror in [-1,1]:
 start=len(p);rings=34;radial=10
 for i in range(rings):
  t=i/(rings-1);cx=mirror*(.31-.285*(1-np.cos(t*np.pi/2)));cy=.015+.985*np.sin(t*np.pi/2);cz=.035*np.sin(t*np.pi)
  tangent=np.array([-mirror*.285*np.pi/2*np.sin(t*np.pi/2),.985*np.pi/2*np.cos(t*np.pi/2),.035*np.pi*np.cos(t*np.pi)]);tangent/=np.linalg.norm(tangent)
  axis=np.cross(tangent,[0,0,1]);axis/=np.linalg.norm(axis);second=np.cross(tangent,axis)
  radius=(.04*(1-t)**.65+.005)*(1+.08*np.sin(t*35))
  for k in range(radial):
   angle=2*np.pi*k/radial;v=np.array([cx,cy,cz])+radius*(axis*np.cos(angle)+second*np.sin(angle));p.append(v);uv.append([k/radial,t*6])
 for i in range(rings-1):
  for k in range(radial):
   x=start+i*radial+k;y=start+i*radial+(k+1)%radial;tri.extend([(x,y,y+radial),(x,y+radial,x+radial)])
 # Close the ends, including the buried bases.
 for ring,reverse in [(0,True),(rings-1,False)]:
  ids=[start+ring*radial+k for k in range(radial)]
  for k in range(1,radial-1):tri.append((ids[0],ids[k+1],ids[k]) if reverse else (ids[0],ids[k],ids[k+1]))
report.append(write('Jotunheim_Bone_Arch',p,tri,uv,texture.getvalue(),{'construction':'Two closed curved tapered tube ribs, open central window','source':'Bone surface sampled from user reference','module':'world boundary'}))
if '--arch-only' in sys.argv:
 report=[row for row in json.loads(Path('scripts/assets/jotunheim-bones-report.json').read_text()) if row['file']!='Jotunheim_Bone_Arch.glb']+report
Path('scripts/assets/jotunheim-bones-report.json').write_text(json.dumps(report,indent=2)+'\n')
