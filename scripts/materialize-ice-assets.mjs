import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {fileURLToPath} from 'node:url';
const directory=new URL('../assets/ice-source/',import.meta.url);
for(const file of readdirSync(directory)){
  if(!file.endsWith('.glb.gz.b64'))continue;
  const bytes=gunzipSync(Buffer.from(readFileSync(new URL(file,directory),'utf8'),'base64'));
  if(bytes.readUInt32LE(0)!==0x46546c67||bytes.readUInt32LE(4)!==2||bytes.readUInt32LE(8)!==bytes.length)throw new Error(`Invalid GLB: ${file}`);
  const output=new URL('../public/img/models/'+file.replace('.gz.b64',''),import.meta.url);
  writeFileSync(output,bytes);console.log(`Prepared ${fileURLToPath(output).split('/').pop()}: ${bytes.length} bytes`);
}
