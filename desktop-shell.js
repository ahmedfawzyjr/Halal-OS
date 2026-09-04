#!/usr/bin/env node
/**
 * ☪ Halal OS - Desktop Shell & Local Runtime Server
 * Native Node.js Server & Local Daemon Bridge for Halal OS
 * Zero External Dependencies - Works out-of-the-box on Windows, Linux, and macOS
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Parse command-line arguments & environment variables
const args = process.argv.slice(2);
let port = parseInt(process.env.PORT, 10) || 3000;
let host = process.env.HOST || '127.0.0.1';
let shouldOpen = false;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg.startsWith('--port=')) {
    port = parseInt(arg.split('=')[1], 10) || port;
  } else if (arg === '--port' || arg === '-p') {
    port = parseInt(args[i + 1], 10) || port;
    i++;
  } else if (arg.startsWith('--host=')) {
    host = arg.split('=')[1] || host;
  } else if (arg === '--host' || arg === '-h') {
    host = args[i + 1] || host;
    i++;
  } else if (arg === '--open' || arg === '-o') {
    shouldOpen = true;
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.wasm': 'application/wasm'
};

const DAEMON_PORTS = {
  ai: 8088,
  store: 8080,
  cloud: 8082
};

// Check if a local TCP port is responding
function checkDaemonStatus(daemonPort) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${daemonPort}/health`, { timeout: 800 }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

const server = http.createServer(async (req, res) => {
  // Add Security and CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Powered-By', 'Halal-OS-Sovereign-Kernel');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${host}:${port}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Health and Diagnostic endpoint
  if (pathname === '/health' || pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      system: 'Halal OS Simulator Shell',
      version: '2.0.0',
      uptime_seconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // System Bridge endpoint: aggregates connected daemons
  if (pathname === '/api/system-bridge') {
    const [aiLive, storeLive, cloudLive] = await Promise.all([
      checkDaemonStatus(DAEMON_PORTS.ai),
      checkDaemonStatus(DAEMON_PORTS.store),
      checkDaemonStatus(DAEMON_PORTS.cloud)
    ]);

    const daemonsMap = {
      amina_ai: { port: DAEMON_PORTS.ai, online: aiLive, endpoint: `http://127.0.0.1:${DAEMON_PORTS.ai}` },
      halal_store: { port: DAEMON_PORTS.store, online: storeLive, endpoint: `http://127.0.0.1:${DAEMON_PORTS.store}` },
      amanah_cloud: { port: DAEMON_PORTS.cloud, online: cloudLive, endpoint: `http://127.0.0.1:${DAEMON_PORTS.cloud}` }
    };

    const daemonsList = [
      { id: 'amina_ai', name: 'Amina AI Engine', port: DAEMON_PORTS.ai, online: aiLive, endpoint: `http://127.0.0.1:${DAEMON_PORTS.ai}` },
      { id: 'halal_store', name: 'Halal App Store', port: DAEMON_PORTS.store, online: storeLive, endpoint: `http://127.0.0.1:${DAEMON_PORTS.store}` },
      { id: 'amanah_cloud', name: 'Amanah Cloud E2EE', port: DAEMON_PORTS.cloud, online: cloudLive, endpoint: `http://127.0.0.1:${DAEMON_PORTS.cloud}` }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      bridge: 'active',
      system: 'Halal OS Sovereign Core',
      telemetry: 'BLOCKED_ZERO_CLOUD',
      daemons: daemonsList,
      daemons_map: daemonsMap,
      mode: (aiLive || storeLive || cloudLive) ? 'CONNECTED_HYBRID' : 'OFFLINE_STANDALONE',
      privacy_guarantee: '100% Zero Cloud Telemetry'
    }));
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

  // Prevent path traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden: Invalid Path');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for directory or 404
      if (!err && stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <!DOCTYPE html>
          <html dir="rtl" lang="ar">
          <head><meta charset="utf-8"><title>Halal OS - 404</title><style>body{background:#041a14;color:#f0f7f4;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;}</style></head>
          <body>
            <div>
              <h1 style="color:#d4af37;">☪ 404 - الصفحة غير موجودة</h1>
              <p>الملف المطلوب غير موجود في نظام Halal OS.</p>
              <a href="/" style="color:#10b981;text-decoration:none;font-weight:bold;">العودة لسطح المكتب ⇚</a>
            </div>
          </body>
          </html>
        `);
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(port, host, () => {
  const url = `http://${host}:${port}`;
  console.log('------------------------------------------------------------');
  console.log('  ☪  Halal OS | نظام حلال - Desktop Shell v2.0.0');
  console.log('  ✨ Sovereign Islamic Operating System & Web Simulator');
  console.log('------------------------------------------------------------');
  console.log(`  🌐 Server running at: \x1b[32m${url}\x1b[0m`);
  console.log(`  🔒 Zero Cloud Telemetry: \x1b[36mACTIVE\x1b[0m`);
  console.log(`  🔌 System Bridge: \x1b[33m${url}/api/system-bridge\x1b[0m`);
  console.log('------------------------------------------------------------');
  console.log('  Press Ctrl+C to shutdown server.\n');

  if (shouldOpen) {
    const startCmd = process.platform === 'win32' ? `start ${url}` :
                     process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
    exec(startCmd, (err) => {
      if (err) console.log('Notice: Could not automatically open browser. Visit the URL manually.');
    });
  }
});
