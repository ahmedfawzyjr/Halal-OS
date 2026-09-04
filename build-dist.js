const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const filesToCopy = [
  'index.html',
  'index.css',
  'app.js',
  'manifest.json',
  'favicon.svg',
  'sw.js'
];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[build-dist] Copied ${file} -> dist/${file}`);
  }
});

console.log('[build-dist] Static web distribution assets ready in dist/');
