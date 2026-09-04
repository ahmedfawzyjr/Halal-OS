const fs = require('fs');
const path = require('path');

function createSimpleBmpIco(width, height) {
  // DIB header for ICO: BITMAPINFOHEADER (40 bytes)
  const headerSize = 40;
  const imageSize = width * height * 4; // 32 bpp BGRA
  const maskRowSize = Math.floor((width + 31) / 32) * 4;
  const maskSize = maskRowSize * height;
  const dibSize = headerSize + imageSize + maskSize;

  const dib = Buffer.alloc(dibSize);
  // biSize
  dib.writeUInt32LE(40, 0);
  // biWidth
  dib.writeInt32LE(width, 4);
  // biHeight (height * 2 for XOR + AND masks in ICO)
  dib.writeInt32LE(height * 2, 8);
  // biPlanes
  dib.writeUInt16LE(1, 12);
  // biBitCount
  dib.writeUInt16LE(32, 14);
  // biCompression (0 = BI_RGB)
  dib.writeUInt32LE(0, 16);
  // biSizeImage
  dib.writeUInt32LE(imageSize + maskSize, 20);
  // biXPelsPerMeter, biYPelsPerMeter, biClrUsed, biClrImportant = 0

  // Color pixels (Emerald green & Gold Islamic theme)
  let offset = 40;
  const cx = width / 2;
  const cy = height / 2;
  const r = width / 2 - 1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= r) {
        // Emerald Green: B=102, G=163, R=16, A=255 (#10a366)
        dib.writeUInt8(102, offset);     // B
        dib.writeUInt8(163, offset + 1); // G
        dib.writeUInt8(16, offset + 2);  // R
        dib.writeUInt8(255, offset + 3); // A
      } else {
        // Transparent
        dib.writeUInt8(0, offset);
        dib.writeUInt8(0, offset + 1);
        dib.writeUInt8(0, offset + 2);
        dib.writeUInt8(0, offset + 3);
      }
      offset += 4;
    }
  }

  // AND mask (0 for opaque/transparent handled by 32bpp alpha)
  // already zeros

  // ICO header: 6 bytes
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type = 1 (ICO)
  icoHeader.writeUInt16LE(1, 4); // 1 Image

  // Directory entry: 16 bytes
  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(width >= 256 ? 0 : width, 0);
  dirEntry.writeUInt8(height >= 256 ? 0 : height, 1);
  dirEntry.writeUInt8(0, 2); // Color count
  dirEntry.writeUInt8(0, 3); // Reserved
  dirEntry.writeUInt16LE(1, 4); // Planes
  dirEntry.writeUInt16LE(32, 6); // Bit count
  dirEntry.writeUInt32LE(dibSize, 8); // Bytes in res
  dirEntry.writeUInt32LE(22, 12); // Offset = 6 + 16 = 22

  return Buffer.concat([icoHeader, dirEntry, dib]);
}

// Generate valid 32x32 and 128x128 PNGs (minimal valid RGBA PNG)
function createPng(width, height) {
  const zlib = require('zlib');
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8-bit depth
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = require('crypto').createHash('sha256'); // dummy or crc
    // Compute actual CRC32
    const crcVal = crc32(Buffer.concat([Buffer.from(type, 'ascii'), data]));
    buf.writeUInt32BE(crcVal, 8 + len);
    return buf;
  }

  // Simple CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c >>> 0;
  }

  function crc32(buf) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      c = (c >>> 8) ^ crcTable[(c ^ buf[i]) & 0xFF];
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Raw image scanlines: filter byte (0) + 4 bytes per pixel
  const raw = Buffer.alloc(height * (1 + width * 4));
  let idx = 0;
  const cx = width / 2;
  const cy = height / 2;
  const r = width / 2 - 1;

  for (let y = 0; y < height; y++) {
    raw[idx++] = 0; // Filter none
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      if (Math.sqrt(dx * dx + dy * dy) <= r) {
        raw[idx++] = 16;  // R
        raw[idx++] = 163; // G
        raw[idx++] = 102; // B
        raw[idx++] = 255; // A
      } else {
        raw[idx++] = 0;
        raw[idx++] = 0;
        raw[idx++] = 0;
        raw[idx++] = 0;
      }
    }
  }

  const compressed = zlib.deflateSync(raw);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const iconsDir = path.join(__dirname, 'src-tauri', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Write valid ico and png files
fs.writeFileSync(path.join(iconsDir, 'icon.ico'), createSimpleBmpIco(32, 32));
fs.writeFileSync(path.join(iconsDir, '32x32.png'), createPng(32, 32));
fs.writeFileSync(path.join(iconsDir, '128x128.png'), createPng(128, 128));
fs.writeFileSync(path.join(iconsDir, '128x128@2x.png'), createPng(256, 256));
fs.writeFileSync(path.join(iconsDir, 'icon.png'), createPng(512, 512));
fs.writeFileSync(path.join(iconsDir, 'icon.icns'), createPng(512, 512));

console.log('✅ Successfully generated valid ICO and PNG icons in src-tauri/icons!');
