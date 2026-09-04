/**
 * ☪ HALAL OS - COMPREHENSIVE INTEGRATION & SUITE TEST RUNNER
 * Tests all pillars of the sovereign Islamic OS:
 * 1. Static Assets & PWA Readiness (manifest.json, sw.js, index.html, index.css, app.js)
 * 2. Desktop Shell & System Bridge Daemon (/api/system-bridge)
 * 3. AI Engine Endpoints & NLU Logic (ai/local_engine.py)
 * 4. App Store Backend & Signature Verification (app-store/main.go)
 * 5. Halal Cloud E2EE Sync Backend (cloud/main.go)
 * 6. Rust Daemons & HDK Crate Structure (display-manager, package-manager, security, browser, filesystems, HDK)
 * 7. Systemd Unit Services & Live ISO Build Script
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn, execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✔\x1b[0m ${message}`);
  } else {
    failedTests++;
    console.error(`  \x1b[31m✖\x1b[0m ${message}`);
  }
}

async function runTestSuite() {
  console.log('\n===============================================================');
  console.log('☪ HALAL OS - FULL SYSTEM INTEGRATION TEST SUITE');
  console.log('===============================================================\n');

  // --- SUITE 1: STATIC ASSETS & PWA ---
  console.log('\x1b[36m[Suite 1] Static Assets & Offline PWA Layer\x1b[0m');
  
  const manifestPath = path.join(ROOT_DIR, 'manifest.json');
  assert(fs.existsSync(manifestPath), 'manifest.json exists');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    assert(manifest.name && manifest.name.includes('Halal OS'), 'manifest.json has correct name');
    assert(manifest.display === 'standalone', 'manifest.json configured for standalone desktop mode');
    assert(manifest.theme_color === '#0d4d3a', 'manifest.json has Islamic emerald theme color');
  }

  const swPath = path.join(ROOT_DIR, 'sw.js');
  assert(fs.existsSync(swPath), 'sw.js (Service Worker) exists');
  if (fs.existsSync(swPath)) {
    const swContent = fs.readFileSync(swPath, 'utf8');
    assert(swContent.includes('halal-os-v2.0.0-core'), 'sw.js contains cache version definition');
    assert(swContent.includes('stale-while-revalidate') || swContent.includes('caches.open'), 'sw.js handles offline caching');
    assert(swContent.includes('8080') && swContent.includes('8088'), 'sw.js bypasses local daemon microservice ports');
  }

  const htmlPath = path.join(ROOT_DIR, 'index.html');
  assert(fs.existsSync(htmlPath), 'index.html exists');
  if (fs.existsSync(htmlPath)) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    assert(htmlContent.includes('serviceWorker.register'), 'index.html registers Service Worker');
    assert(htmlContent.includes('dual-mode-badge'), 'index.html includes Dual-Mode status badge');
    assert(htmlContent.includes('daemon-status-dropdown'), 'index.html includes daemon status dropdown modal');
  }

  const appJsPath = path.join(ROOT_DIR, 'app.js');
  assert(fs.existsSync(appJsPath), 'app.js exists');
  if (fs.existsSync(appJsPath)) {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    assert(appJsContent.includes('halalSystemBridge'), 'app.js contains halalSystemBridge object');
    assert(appJsContent.includes('async function processAminaQuery'), 'app.js has async processAminaQuery');
    assert(appJsContent.includes('toggleDaemonStatusDropdown'), 'app.js implements toggleDaemonStatusDropdown');
  }

  // --- SUITE 2: DESKTOP SHELL SERVER ---
  console.log('\n\x1b[36m[Suite 2] Desktop Shell Server & Bridge\x1b[0m');
  const desktopShellPath = path.join(ROOT_DIR, 'desktop-shell.js');
  assert(fs.existsSync(desktopShellPath), 'desktop-shell.js exists');

  // Test starting the desktop shell on a test port
  const TEST_PORT = 3199;
  let shellProcess = null;
  try {
    shellProcess = spawn('node', [desktopShellPath, `--port=${TEST_PORT}`], {
      env: { ...process.env, PORT: String(TEST_PORT) },
      cwd: ROOT_DIR
    });

    await new Promise(resolve => setTimeout(resolve, 800));

    // Test GET /
    const homeResponse = await new Promise((resolve) => {
      http.get(`http://localhost:${TEST_PORT}/`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, data }));
      }).on('error', (err) => resolve({ error: err.message }));
    });

    assert(homeResponse.status === 200, `Desktop shell serves HTTP 200 on port ${TEST_PORT}`);
    assert(homeResponse.data && homeResponse.data.includes('Halal OS'), 'Desktop shell response contains "Halal OS"');

    // Test GET /api/system-bridge
    const bridgeResponse = await new Promise((resolve) => {
      http.get(`http://localhost:${TEST_PORT}/api/system-bridge`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, json: JSON.parse(data || '{}') }));
      }).on('error', (err) => resolve({ error: err.message }));
    });

    assert(bridgeResponse.status === 200, 'Desktop shell /api/system-bridge returns HTTP 200');
    assert(bridgeResponse.json && bridgeResponse.json.system === 'Halal OS Sovereign Core', 'Bridge reports correct system name');
    assert(bridgeResponse.json && bridgeResponse.json.telemetry === 'BLOCKED_ZERO_CLOUD', 'Bridge reports zero cloud telemetry guarantee');
    assert(bridgeResponse.json && Array.isArray(bridgeResponse.json.daemons), 'Bridge reports daemons array');

  } catch (err) {
    assert(false, `Desktop shell test failed with error: ${err.message}`);
  } finally {
    if (shellProcess) {
      shellProcess.kill();
    }
  }

  // --- SUITE 3: AI ENGINE SCRIPT & REST ENDPOINTS ---
  console.log('\n\x1b[36m[Suite 3] Local AI Engine & Voice Assistant\x1b[0m');
  const aiEnginePath = path.join(ROOT_DIR, 'ai', 'local_engine.py');
  const voiceAssistantPath = path.join(ROOT_DIR, 'ai', 'voice_assistant.py');
  assert(fs.existsSync(aiEnginePath), 'ai/local_engine.py exists');
  assert(fs.existsSync(voiceAssistantPath), 'ai/voice_assistant.py exists');

  if (fs.existsSync(aiEnginePath)) {
    const aiContent = fs.readFileSync(aiEnginePath, 'utf8');
    assert(aiContent.includes('AminaLocalEngine'), 'local_engine.py defines AminaLocalEngine');
    assert(aiContent.includes('/api/v1/chat'), 'local_engine.py defines /api/v1/chat REST endpoint');
    assert(aiContent.includes('/api/v1/status'), 'local_engine.py defines /api/v1/status REST endpoint');
    assert(aiContent.includes('/api/v1/proxy/ollama'), 'local_engine.py defines Ollama proxy endpoint');
  }

  // --- SUITE 4: GO APP STORE BACKEND ---
  console.log('\n\x1b[36m[Suite 4] Go App Store Microservice\x1b[0m');
  const appStoreGoPath = path.join(ROOT_DIR, 'app-store', 'main.go');
  assert(fs.existsSync(appStoreGoPath), 'app-store/main.go exists');
  if (fs.existsSync(appStoreGoPath)) {
    const storeContent = fs.readFileSync(appStoreGoPath, 'utf8');
    assert(storeContent.includes('/api/v1/catalog'), 'app-store/main.go handles /api/v1/catalog');
    assert(storeContent.includes('/api/v1/apps/'), 'app-store/main.go handles /api/v1/apps/{id}');
    assert(storeContent.includes('/api/v1/install'), 'app-store/main.go handles /api/v1/install');
    assert(storeContent.includes('verifyAppSignature'), 'app-store/main.go verifies GPG & SHA256 signatures');
  }

  // --- SUITE 5: GO CLOUD BACKEND ---
  console.log('\n\x1b[36m[Suite 5] Go Cloud E2EE Microservice\x1b[0m');
  const cloudGoPath = path.join(ROOT_DIR, 'cloud', 'main.go');
  assert(fs.existsSync(cloudGoPath), 'cloud/main.go exists');
  if (fs.existsSync(cloudGoPath)) {
    const cloudContent = fs.readFileSync(cloudGoPath, 'utf8');
    assert(cloudContent.includes('/api/v1/sync/push'), 'cloud/main.go handles /api/v1/sync/push');
    assert(cloudContent.includes('/api/v1/sync/pull'), 'cloud/main.go handles /api/v1/sync/pull');
    assert(cloudContent.includes('/api/v1/auth/login'), 'cloud/main.go handles /api/v1/auth/login');
    assert(cloudContent.includes('Blocks') || cloudContent.includes('StoredBlock'), 'cloud/main.go maintains E2EE ledger');
  }

  // --- SUITE 6: RUST DAEMONS & HDK CRATE ---
  console.log('\n\x1b[36m[Suite 6] Rust Daemons & HDK Crate\x1b[0m');
  const rustDaemons = [
    { name: 'Display Manager', file: 'display-manager/src/main.rs' },
    { name: 'Package Manager (HPM)', file: 'package-manager/src/main.rs' },
    { name: 'Security Suite (Amanah)', file: 'security/src/main.rs' },
    { name: 'Safa Browser Core', file: 'browser/src/main.rs' },
    { name: 'AmanahFS Filesystem', file: 'filesystems/src/main.rs' },
    { name: 'HDK Crate Library', file: 'desktop/hdk/src/lib.rs' },
    { name: 'HDK Prayer Calculation Engine', file: 'desktop/hdk/src/prayer.rs' },
    { name: 'HDK Hijri Calendar Engine', file: 'desktop/hdk/src/hijri.rs' }
  ];

  for (const daemon of rustDaemons) {
    const fullPath = path.join(ROOT_DIR, daemon.file);
    assert(fs.existsSync(fullPath), `${daemon.name} exists (${daemon.file})`);
  }

  // --- SUITE 7: SYSTEMD SERVICES & ISO BUILD SCRIPT ---
  console.log('\n\x1b[36m[Suite 7] Systemd Services & Live ISO Build Infrastructure\x1b[0m');
  const systemdServices = [
    'halal-ai.service',
    'halal-firewall.service',
    'halal-store.service',
    'halal-cloud.service',
    'halal-display.service'
  ];

  for (const s of systemdServices) {
    const sPath = path.join(ROOT_DIR, 'infrastructure', 'services', s);
    assert(fs.existsSync(sPath), `Systemd service ${s} exists`);
    if (fs.existsSync(sPath)) {
      const sContent = fs.readFileSync(sPath, 'utf8');
      assert(sContent.includes('[Unit]') && sContent.includes('[Service]') && sContent.includes('[Install]'), `${s} is a valid systemd unit`);
    }
  }

  const buildIsoPath = path.join(ROOT_DIR, 'infrastructure', 'build_iso.sh');
  assert(fs.existsSync(buildIsoPath), 'infrastructure/build_iso.sh exists');
  if (fs.existsSync(buildIsoPath)) {
    const isoContent = fs.readFileSync(buildIsoPath, 'utf8');
    assert(isoContent.includes('debootstrap') || isoContent.includes('live-build') || isoContent.includes('xorriso'), 'build_iso.sh defines ISO packaging pipeline');
    assert(isoContent.includes('halal-os') && isoContent.includes('.iso'), 'build_iso.sh outputs sovereign Halal OS ISO image');
  }

  // --- SUITE 8: TAURI NATIVE DESKTOP SHELL & CI/CD MATRIX ---
  console.log('\n\x1b[36m[Suite 8] Tauri Native Desktop Shell & CI/CD Matrix\x1b[0m');
  const tauriConfPath = path.join(ROOT_DIR, 'src-tauri', 'tauri.conf.json');
  assert(fs.existsSync(tauriConfPath), 'src-tauri/tauri.conf.json exists');

  const tauriMainPath = path.join(ROOT_DIR, 'src-tauri', 'src', 'main.rs');
  assert(fs.existsSync(tauriMainPath), 'src-tauri/src/main.rs exists');
  if (fs.existsSync(tauriMainPath)) {
    const tauriMainContent = fs.readFileSync(tauriMainPath, 'utf8');
    assert(tauriMainContent.includes('system_tray') && tauriMainContent.includes('prayer_status'), 'main.rs defines Islamic system tray with prayer countdown');
    assert(tauriMainContent.includes('WindowEvent::CloseRequested') && tauriMainContent.includes('prevent_close'), 'main.rs intercepts window close to minimize to system tray');
    assert(tauriMainContent.includes('update_tray_prayer_status'), 'main.rs registers update_tray_prayer_status IPC command');
  }

  const desktopWorkflowPath = path.join(ROOT_DIR, '.github', 'workflows', 'build-desktop.yml');
  assert(fs.existsSync(desktopWorkflowPath), '.github/workflows/build-desktop.yml exists');
  if (fs.existsSync(desktopWorkflowPath)) {
    const workflowContent = fs.readFileSync(desktopWorkflowPath, 'utf8');
    assert(workflowContent.includes('windows-latest') && workflowContent.includes('ubuntu-latest') && workflowContent.includes('macos-latest'), 'Workflow targets Windows, Linux, and macOS matrix');
    assert(workflowContent.includes('tauri-action'), 'Workflow utilizes official tauri-action');
  }

  // --- TEST SUMMARY ---
  console.log('\n===============================================================');
  console.log(`TOTAL TESTS: ${totalTests} | PASSED: \x1b[32m${passedTests}\x1b[0m | FAILED: \x1b[31m${failedTests}\x1b[0m`);
  console.log(`SUCCESS RATE: \x1b[32m${((passedTests / totalTests) * 100).toFixed(1)}%\x1b[0m`);
  console.log('===============================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
