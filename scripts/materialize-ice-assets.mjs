import {readFileSync,writeFileSync,readdirSync,statSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {fileURLToPath} from 'node:url';
const directory=new URL('../assets/ice-source/',import.meta.url);
for(const file of readdirSync(directory)){
  const location=new URL(file,directory);
  const parts=file.endsWith('.glb.gz.b64.parts')&&statSync(location).isDirectory();
  if(!parts&&!file.endsWith('.glb.gz.b64'))continue;
  const encoded=parts?readdirSync(location).filter(name=>/^\d+\.txt$/.test(name)).sort().map(name=>readFileSync(new URL(file+'/'+name,directory),'utf8')).join(''):readFileSync(location,'utf8');
  const bytes=gunzipSync(Buffer.from(encoded,'base64'));
  if(bytes.readUInt32LE(0)!==0x46546c67||bytes.readUInt32LE(4)!==2||bytes.readUInt32LE(8)!==bytes.length)throw new Error(`Invalid GLB: ${file}`);
  const output=new URL('../public/img/models/'+file.replace(/\.gz\.b64(?:\.parts)?$/,''),import.meta.url);
  writeFileSync(output,bytes);console.log(`Prepared ${fileURLToPath(output).split('/').pop()}: ${bytes.length} bytes`);
}
