const fs = require('fs');
const buf = fs.readFileSync('public/assets/aistudio/foto_15e730f5.pdf');
console.log('PDF size:', buf.length);

let offset = 0;
let count = 0;
while (true) {
  const idx = buf.indexOf(Buffer.from([0xFF, 0xD8, 0xFF]), offset);
  if (idx === -1) break;
  const endIdx = buf.indexOf(Buffer.from([0xFF, 0xD9]), idx);
  if (endIdx === -1) break;
  const jpegBuf = buf.slice(idx, endIdx + 2);
  if (jpegBuf.length > 10000) {
    const filename = 'public/assets/aistudio/extracted_hero_drone_' + count + '.jpg';
    fs.writeFileSync(filename, jpegBuf);
    console.log('Extracted JPEG ' + count + ': ' + jpegBuf.length + ' bytes');
    count++;
  }
  offset = endIdx + 2;
}
console.log('Total extracted JPEGs: ' + count);
