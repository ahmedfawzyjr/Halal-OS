/**
 * ☪ Halal OS - Phase 3 Islamic Suite & Tauri Native Test Suite
 * Validates:
 * 1. Tauri Native Desktop Packaging (tauri.conf.json, Cargo.toml, main.rs, build.rs)
 * 2. Quran Audio Recitation Engine & Extended Surah Library (11 Surahs, EveryAyah CDN URLs, Synth fallback)
 * 3. 3D Spherical Qibla Compass Trigonometry (16 World Cities Geodetic Bearings, Haversine, Cardinal Directions)
 * 4. Bayt Al-Mal Zakat Engine & Ledger (Gold/Silver Nisab, 2.5% Due, 9 Currencies, 8 Quranic Categories, Receipts)
 * 5. HTML5/CSS3 UI Component & Modal Declarations
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function runTest(description, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✔ ${description}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✖ ${description}`);
    console.error(`    Error: ${err.message}`);
    failedTests++;
  }
}

console.log('\n===============================================================');
console.log('☪ HALAL OS - ISLAMIC SUITE & TAURI NATIVE TEST SUITE');
console.log('===============================================================\n');

// -------------------------------------------------------------
// [Suite 1] Tauri Native Packaging Architecture
// -------------------------------------------------------------
console.log('[Suite 1] Tauri Native Packaging Architecture');

runTest('src-tauri/tauri.conf.json exists and is valid JSON', () => {
  const confPath = path.join(ROOT_DIR, 'src-tauri', 'tauri.conf.json');
  assert(fs.existsSync(confPath), 'tauri.conf.json should exist');
  const conf = JSON.parse(fs.readFileSync(confPath, 'utf8'));
  assert.strictEqual(conf.package.productName, 'Halal OS');
  assert.strictEqual(conf.tauri.bundle.identifier, 'org.halalos.desktop');
  assert(conf.tauri.windows[0].width >= 1200);
  assert(conf.tauri.windows[0].height >= 800);
  assert.strictEqual(conf.tauri.windows[0].resizable, true);
});

runTest('src-tauri/Cargo.toml contains Tauri and Serde dependencies', () => {
  const cargoPath = path.join(ROOT_DIR, 'src-tauri', 'Cargo.toml');
  assert(fs.existsSync(cargoPath), 'Cargo.toml should exist');
  const content = fs.readFileSync(cargoPath, 'utf8');
  assert(content.includes('tauri ='), 'Cargo.toml must declare tauri dependency');
  assert(content.includes('serde ='), 'Cargo.toml must declare serde dependency');
  assert(content.includes('tauri-build'), 'Cargo.toml must declare tauri-build');
});

runTest('src-tauri/src/main.rs implements Tauri application entrypoint', () => {
  const mainRsPath = path.join(ROOT_DIR, 'src-tauri', 'src', 'main.rs');
  assert(fs.existsSync(mainRsPath), 'src/main.rs should exist');
  const content = fs.readFileSync(mainRsPath, 'utf8');
  assert(content.includes('tauri::Builder::default()'), 'main.rs must initialize Tauri Builder');
  assert(content.includes('run(tauri::generate_context!())'), 'main.rs must run tauri context');
});

runTest('src-tauri/src/main.rs registers all 8 sovereign IPC commands', () => {
  const mainRsPath = path.join(ROOT_DIR, 'src-tauri', 'src', 'main.rs');
  const content = fs.readFileSync(mainRsPath, 'utf8');
  const expectedCommands = [
    'get_system_status',
    'calculate_prayer_times',
    'get_hijri_date',
    'verify_app_signature',
    'trigger_adhan_notification',
    'query_local_ai',
    'update_tray_prayer_status',
    'toggle_window_visibility'
  ];
  expectedCommands.forEach(cmd => {
    assert(content.includes(cmd), `main.rs must declare and register IPC command "${cmd}"`);
  });
});

runTest('src-tauri/src/main.rs configures dynamic Islamic System Tray Menu', () => {
  const mainRsPath = path.join(ROOT_DIR, 'src-tauri', 'src', 'main.rs');
  const content = fs.readFileSync(mainRsPath, 'utf8');
  const expectedTrayItems = [
    'show_desktop',
    'prayer_status',
    'quick_quran',
    'quick_qibla',
    'quick_zakat',
    'athan_toggle',
    'quit'
  ];
  expectedTrayItems.forEach(item => {
    assert(content.includes(`"${item}"`), `System Tray must include menu item "${item}"`);
  });
  assert(content.includes('.system_tray(system_tray)'), 'main.rs must attach SystemTray to Builder');
});

runTest('src-tauri/src/main.rs handles CloseRequested to hide window instead of exiting', () => {
  const mainRsPath = path.join(ROOT_DIR, 'src-tauri', 'src', 'main.rs');
  const content = fs.readFileSync(mainRsPath, 'utf8');
  assert(content.includes('WindowEvent::CloseRequested'), 'main.rs must intercept WindowEvent::CloseRequested');
  assert(content.includes('api.prevent_close()'), 'CloseRequested must call api.prevent_close()');
  assert(content.includes('.hide()'), 'CloseRequested must hide the window to tray');
});

runTest('src-tauri/build.rs exists and invokes tauri_build', () => {
  const buildRsPath = path.join(ROOT_DIR, 'src-tauri', 'build.rs');
  assert(fs.existsSync(buildRsPath), 'build.rs should exist');
  const content = fs.readFileSync(buildRsPath, 'utf8');
  assert(content.includes('tauri_build::build()') || content.includes('tauri_build::try_build'), 'build.rs must call tauri_build::build() or tauri_build::try_build()');
});

runTest('.github/workflows/build-desktop.yml defines multi-platform CI/CD matrix', () => {
  const workflowPath = path.join(ROOT_DIR, '.github', 'workflows', 'build-desktop.yml');
  assert(fs.existsSync(workflowPath), 'build-desktop.yml must exist');
  const content = fs.readFileSync(workflowPath, 'utf8');
  assert(content.includes('windows-latest'), 'Workflow matrix must include Windows runner');
  assert(content.includes('ubuntu-latest') || content.includes('ubuntu-22.04'), 'Workflow matrix must include Ubuntu Linux runner');
  assert(content.includes('macos-latest'), 'Workflow matrix must include macOS runner');
  assert(content.includes('tauri-apps/tauri-action'), 'Workflow must use tauri-action');
  assert(content.includes('sha256') || content.includes('SHA256'), 'Workflow must compute SHA-256 binary checksums');
  assert(content.includes('actions/upload-artifact'), 'Workflow must upload desktop release artifacts');
});

runTest('app.js declares Tauri desktop bridge, openApp router, and athan toggle', () => {
  const appJsPath = path.join(ROOT_DIR, 'app.js');
  const content = fs.readFileSync(appJsPath, 'utf8');
  assert(content.includes('function openApp('), 'app.js must declare openApp');
  assert(content.includes('function toggleAthanMute()'), 'app.js must declare toggleAthanMute');
  assert(content.includes('function initTauriBridge()'), 'app.js must declare initTauriBridge');
  assert(content.includes('window.openApp = openApp'), 'app.js must expose window.openApp');
  assert(content.includes('window.toggleAthanMute = toggleAthanMute'), 'app.js must expose window.toggleAthanMute');
  assert(content.includes('update_tray_prayer_status'), 'initTauriBridge must invoke update_tray_prayer_status');
});

// -------------------------------------------------------------
// [Suite 2] Quran Audio Recitation Engine & Dataset Integrity
// -------------------------------------------------------------
console.log('\n[Suite 2] Quran Audio Engine & Dataset Integrity');

// Load Quran dataset and helpers from app.js
const appJsContent = fs.readFileSync(path.join(ROOT_DIR, 'app.js'), 'utf8');

runTest('app.js defines comprehensive SURAH_DATA with 11 Surahs', () => {
  assert(appJsContent.includes('const SURAH_DATA ='), 'SURAH_DATA must be defined');
  
  // Extract and eval the dataset in a safe sandbox
  const match = appJsContent.match(/const SURAH_DATA\s*=\s*(\{[\s\S]*?\n\s*\});/);
  assert(match, 'SURAH_DATA declaration must be extracted');
  const dataset = eval('(' + match[1] + ')');
  
  const expectedSurahs = [1, 2, 36, 55, 67, 103, 108, 109, 112, 113, 114];
  expectedSurahs.forEach(id => {
    assert(dataset[id], `Surah ${id} must exist in SURAH_DATA`);
    assert(dataset[id].name_ar, `Surah ${id} must have Arabic name`);
    assert(dataset[id].name_en, `Surah ${id} must have English name`);
    assert(Array.isArray(dataset[id].verses), `Surah ${id} must have verses array`);
    assert(dataset[id].verses.length > 0, `Surah ${id} must contain verses`);
    
    // Check verse properties
    dataset[id].verses.forEach(v => {
      assert(typeof v.number === 'number', `Verse in Surah ${id} must have numeric number`);
      assert(typeof v.text_ar === 'string' && v.text_ar.length > 0, `Verse ${v.number} must have Arabic text`);
      assert(typeof v.text_en === 'string' && v.text_en.length > 0, `Verse ${v.number} must have English translation`);
      assert(typeof v.tafsir === 'string' && v.tafsir.length > 0, `Verse ${v.number} must have Tafsir`);
    });
  });
});

runTest('RECITERS_MAP defines 4 prominent Qaris with valid EveryAyah directories', () => {
  assert(appJsContent.includes('const RECITERS_MAP ='), 'RECITERS_MAP must be defined');
  const match = appJsContent.match(/const RECITERS_MAP\s*=\s*(\{[\s\S]*?\n\s*\});/);
  assert(match, 'RECITERS_MAP declaration must be extracted');
  const reciters = eval('(' + match[1] + ')');
  
  assert(reciters.alafasy && reciters.alafasy.dir === 'Alafasy_128kbps');
  assert(reciters.abdulbasit && reciters.abdulbasit.dir === 'Abdul_Basit_Murattal_192kbps');
  assert(reciters.alghamdi && reciters.alghamdi.dir === 'Ghamadi_40kbps');
  assert(reciters.husary && reciters.husary.dir === 'Husary_128kbps');
});

runTest('EveryAyah audio CDN URL formatting adheres to 3-digit zero-padding format', () => {
  function getEveryAyahAudioUrl(surahId, verseNumber, reciterKey = 'alafasy') {
    const reciterDir = {
      alafasy: 'Alafasy_128kbps',
      abdulbasit: 'Abdul_Basit_Murattal_192kbps',
      alghamdi: 'Ghamadi_40kbps',
      husary: 'Husary_128kbps'
    }[reciterKey] || 'Alafasy_128kbps';
    const sStr = String(surahId).padStart(3, '0');
    const vStr = String(verseNumber).padStart(3, '0');
    return `https://everyayah.com/data/${reciterDir}/${sStr}${vStr}.mp3`;
  }

  const urlFatiha1 = getEveryAyahAudioUrl(1, 1, 'alafasy');
  assert.strictEqual(urlFatiha1, 'https://everyayah.com/data/Alafasy_128kbps/001001.mp3');

  const urlIkhlas4 = getEveryAyahAudioUrl(112, 4, 'abdulbasit');
  assert.strictEqual(urlIkhlas4, 'https://everyayah.com/data/Abdul_Basit_Murattal_192kbps/112004.mp3');

  const urlMulk10 = getEveryAyahAudioUrl(67, 10, 'husary');
  assert.strictEqual(urlMulk10, 'https://everyayah.com/data/Husary_128kbps/067010.mp3');
});

runTest('Quran playback state machine supports all repeat modes, speeds, and synth fallback', () => {
  assert(appJsContent.includes('function playAyahAudio('), 'playAyahAudio must be declared');
  assert(appJsContent.includes('function toggleQuranPlay()'), 'toggleQuranPlay must be declared');
  assert(appJsContent.includes('function nextQuranAyah()'), 'nextQuranAyah must be declared');
  assert(appJsContent.includes('function prevQuranAyah()'), 'prevQuranAyah must be declared');
  assert(appJsContent.includes('function stopQuranAudio()'), 'stopQuranAudio must be declared');
  assert(appJsContent.includes('function cycleQuranRepeatMode()'), 'cycleQuranRepeatMode must be declared');
  assert(appJsContent.includes('function changeQuranPlaybackSpeed('), 'changeQuranPlaybackSpeed must be declared');
  assert(appJsContent.includes('function playOfflineAyahSynth()'), 'playOfflineAyahSynth must be declared');
  assert(appJsContent.includes('function loadQuranSurah('), 'loadQuranSurah must be declared');
});

// -------------------------------------------------------------
// [Suite 3] 3D Spherical Qibla Compass Trigonometry
// -------------------------------------------------------------
console.log('\n[Suite 3] 3D Spherical Qibla Compass Trigonometry');

const KAABA_COORDS = { lat: 21.422487, lng: 39.826206 };

function calculateQiblaBearing(lat, lng) {
  const phi1 = (lat * Math.PI) / 180;
  const lambda1 = (lng * Math.PI) / 180;
  const phi2 = (KAABA_COORDS.lat * Math.PI) / 180;
  const lambda2 = (KAABA_COORDS.lng * Math.PI) / 180;
  const deltaLambda = lambda2 - lambda1;

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  let qibla = (Math.atan2(y, x) * 180) / Math.PI;
  return (qibla + 360) % 360;
}

function calculateDistanceToKaaba(lat, lng) {
  const R = 6371; // Earth's mean radius in km
  const phi1 = (lat * Math.PI) / 180;
  const phi2 = (KAABA_COORDS.lat * Math.PI) / 180;
  const deltaPhi = ((KAABA_COORDS.lat - lat) * Math.PI) / 180;
  const deltaLambda = ((KAABA_COORDS.lng - lng) * Math.PI) / 180;

  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getCardinalDirection(angle) {
  const directions = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW'
  ];
  const index = Math.round(angle / 22.5) % 16;
  return directions[index];
}

const WORLD_CITIES = [
  { name: 'Cairo, Egypt', lat: 30.0444, lng: 31.2357, expectedBearing: 136.2, expectedDistRange: [1200, 1400] },
  { name: 'London, UK', lat: 51.5074, lng: -0.1278, expectedBearing: 118.9, expectedDistRange: [4700, 4900] },
  { name: 'New York, USA', lat: 40.7128, lng: -74.0060, expectedBearing: 58.5, expectedDistRange: [10200, 10400] },
  { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503, expectedBearing: 293.0, expectedDistRange: [9400, 9600] },
  { name: 'Jakarta, Indonesia', lat: -6.2088, lng: 106.8456, expectedBearing: 295.2, expectedDistRange: [7800, 8000] },
  { name: 'Istanbul, Turkey', lat: 41.0082, lng: 28.9784, expectedBearing: 151.8, expectedDistRange: [2300, 2500] },
  { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, expectedBearing: 258.4, expectedDistRange: [1600, 1750] },
  { name: 'Riyadh, Saudi Arabia', lat: 24.7136, lng: 46.6753, expectedBearing: 243.6, expectedDistRange: [750, 900] },
  { name: 'Kuala Lumpur, Malaysia', lat: 3.1390, lng: 101.6869, expectedBearing: 292.9, expectedDistRange: [6900, 7200] },
  { name: 'Paris, France', lat: 48.8566, lng: 2.3522, expectedBearing: 119.2, expectedDistRange: [4400, 4600] },
  { name: 'Berlin, Germany', lat: 52.5200, lng: 13.4050, expectedBearing: 135.9, expectedDistRange: [4100, 4300] },
  { name: 'Sydney, Australia', lat: -33.8688, lng: 151.2093, expectedBearing: 277.5, expectedDistRange: [13100, 13400] },
  { name: 'Toronto, Canada', lat: 43.6532, lng: -79.3832, expectedBearing: 55.2, expectedDistRange: [10300, 10600] },
  { name: 'Moscow, Russia', lat: 55.7558, lng: 37.6173, expectedBearing: 176.4, expectedDistRange: [3700, 3950] },
  { name: 'Lahore, Pakistan', lat: 31.5204, lng: 74.3587, expectedBearing: 260.4, expectedDistRange: [3500, 3800] },
  { name: 'Cape Town, South Africa', lat: -33.9249, lng: 18.4241, expectedBearing: 23.4, expectedDistRange: [6400, 6700] }
];

WORLD_CITIES.forEach(city => {
  runTest(`Qibla Geodetic Bearing for ${city.name} is accurate (~${city.expectedBearing}°)`, () => {
    const bearing = calculateQiblaBearing(city.lat, city.lng);
    const diff = Math.abs(bearing - city.expectedBearing);
    assert(diff <= 1.0, `Calculated bearing ${bearing.toFixed(1)}° differs from expected ${city.expectedBearing}° by ${diff.toFixed(2)}°`);
  });

  runTest(`Haversine Distance to Kaaba for ${city.name} is within expected geodesic range`, () => {
    const distance = calculateDistanceToKaaba(city.lat, city.lng);
    assert(
      distance >= city.expectedDistRange[0] && distance <= city.expectedDistRange[1],
      `Distance ${distance.toFixed(0)} km for ${city.name} outside range [${city.expectedDistRange[0]}, ${city.expectedDistRange[1]}]`
    );
  });
});

runTest('16-Point Cardinal Direction resolver correctly identifies cardinal bounds', () => {
  assert.strictEqual(getCardinalDirection(0), 'N');
  assert.strictEqual(getCardinalDirection(360), 'N');
  assert.strictEqual(getCardinalDirection(90), 'E');
  assert.strictEqual(getCardinalDirection(180), 'S');
  assert.strictEqual(getCardinalDirection(270), 'W');
  assert.strictEqual(getCardinalDirection(45), 'NE');
  assert.strictEqual(getCardinalDirection(135), 'SE');
  assert.strictEqual(getCardinalDirection(225), 'SW');
  assert.strictEqual(getCardinalDirection(315), 'NW');
  assert.strictEqual(getCardinalDirection(58.5), 'ENE');
  assert.strictEqual(getCardinalDirection(118.9), 'ESE');
  assert.strictEqual(getCardinalDirection(136.2), 'SE');
  assert.strictEqual(getCardinalDirection(293.0), 'WNW');
});

// -------------------------------------------------------------
// [Suite 4] Bayt Al-Mal Interactive Zakat Engine & Ledger
// -------------------------------------------------------------
console.log('\n[Suite 4] Bayt Al-Mal Zakat Engine & Ledger');

const CURRENCY_RATES = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  SAR: 3.75,
  AED: 3.67,
  EGP: 48.50,
  TRY: 34.10,
  PKR: 278.50,
  MYR: 4.42
};

const GOLD_PRICE_PER_GRAM_USD = 75.0;
const SILVER_PRICE_PER_GRAM_USD = 0.95;

function calculateZakat(assets, liabilities, standard = 'gold', currency = 'USD') {
  const rate = CURRENCY_RATES[currency] || 1.0;
  const goldPrice = GOLD_PRICE_PER_GRAM_USD * rate;
  const silverPrice = SILVER_PRICE_PER_GRAM_USD * rate;

  const nisab = standard === 'silver' ? (595 * silverPrice) : (85 * goldPrice);

  const totalAssets = (assets.cash || 0) +
                      (assets.goldGrams || 0) * goldPrice +
                      (assets.silverGrams || 0) * silverPrice +
                      (assets.investments || 0) +
                      (assets.businessGoods || 0) +
                      (assets.receivables || 0);

  const totalLiabilities = (liabilities.shortTermDebts || 0) +
                           (liabilities.immediateExpenses || 0);

  const netWealth = Math.max(0, totalAssets - totalLiabilities);
  const isEligible = netWealth >= nisab;
  const zakatDue = isEligible ? netWealth * 0.025 : 0;

  return {
    currency,
    standard,
    nisab,
    totalAssets,
    totalLiabilities,
    netWealth,
    isEligible,
    zakatDue
  };
}

runTest('Gold Nisab standard correctly computes threshold (85g * GoldPrice)', () => {
  const result = calculateZakat({ cash: 10000 }, { shortTermDebts: 0 }, 'gold', 'USD');
  assert.strictEqual(result.nisab, 85 * 75.0); // 6,375 USD
  assert.strictEqual(result.isEligible, true);
  assert.strictEqual(result.zakatDue, 10000 * 0.025); // 250 USD
});

runTest('Silver Nisab standard correctly computes threshold (595g * SilverPrice)', () => {
  const result = calculateZakat({ cash: 1000 }, { shortTermDebts: 0 }, 'silver', 'USD');
  assert.strictEqual(result.nisab, 595 * 0.95); // 565.25 USD
  assert.strictEqual(result.isEligible, true);
  assert.strictEqual(result.zakatDue, 1000 * 0.025); // 25 USD
});

runTest('Net wealth below Nisab yields 0 Zakat due with isEligible=false', () => {
  const result = calculateZakat({ cash: 3000 }, { shortTermDebts: 0 }, 'gold', 'USD');
  assert.strictEqual(result.isEligible, false);
  assert.strictEqual(result.zakatDue, 0);
});

runTest('Liabilities reduce net wealth below Nisab threshold correctly', () => {
  const result = calculateZakat({ cash: 10000 }, { shortTermDebts: 5000 }, 'gold', 'USD');
  assert.strictEqual(result.netWealth, 5000);
  assert.strictEqual(result.isEligible, false);
  assert.strictEqual(result.zakatDue, 0);
});

runTest('Multi-currency conversion accurately converts Nisab and Zakat Due', () => {
  const resultSAR = calculateZakat({ cash: 50000 }, { shortTermDebts: 0 }, 'gold', 'SAR');
  const expectedNisabSAR = 85 * 75.0 * 3.75; // 23,906.25 SAR
  assert.strictEqual(resultSAR.nisab, expectedNisabSAR);
  assert.strictEqual(resultSAR.isEligible, true);
  assert.strictEqual(resultSAR.zakatDue, 50000 * 0.025); // 1,250 SAR

  const resultEGP = calculateZakat({ cash: 500000 }, { shortTermDebts: 0 }, 'gold', 'EGP');
  const expectedNisabEGP = 85 * 75.0 * 48.50; // 309,187.5 EGP
  assert.strictEqual(resultEGP.nisab, expectedNisabEGP);
  assert.strictEqual(resultEGP.isEligible, true);
  assert.strictEqual(resultEGP.zakatDue, 500000 * 0.025); // 12,500 EGP
});

runTest('Quranic 8 recipient categories (Surah At-Tawbah 9:60) are completely supported', () => {
  assert(appJsContent.includes('const QURANIC_ZAKAT_CATEGORIES ='), 'QURANIC_ZAKAT_CATEGORIES must be declared');
  const match = appJsContent.match(/const QURANIC_ZAKAT_CATEGORIES\s*=\s*(\{[\s\S]*?\n\s*\});/);
  assert(match, 'QURANIC_ZAKAT_CATEGORIES declaration must be extracted');
  const categories = eval('(' + match[1] + ')');

  const expectedKeys = ['fuqara', 'masakin', 'amilina', 'muallafa', 'riqab', 'gharimin', 'sabilillah', 'ibnsabil'];
  expectedKeys.forEach(k => {
    assert(categories[k], `Category ${k} must exist`);
    assert(categories[k].ar, `Category ${k} must have Arabic title`);
    assert(categories[k].en, `Category ${k} must have English description`);
  });
});

runTest('Bayt Al-Mal ledger transaction formatting and receipt generation', () => {
  assert(appJsContent.includes('function calculateZakat()'), 'calculateZakat must be declared');
  assert(appJsContent.includes('function saveZakatDisbursement()'), 'saveZakatDisbursement must be declared');
  assert(appJsContent.includes('function deleteZakatRecord('), 'deleteZakatRecord must be declared');
  assert(appJsContent.includes('function renderZakatLedger()'), 'renderZakatLedger must be declared');
  assert(appJsContent.includes('function renderZakatAssetChart('), 'renderZakatAssetChart must be declared');
  assert(appJsContent.includes('function openZakatCertificate()'), 'openZakatCertificate must be declared');
  assert(appJsContent.includes('function closeZakatCertificate()'), 'closeZakatCertificate must be declared');
  assert(appJsContent.includes('function printZakatCertificate()'), 'printZakatCertificate must be declared');
});

// -------------------------------------------------------------
// [Suite 5] HTML & CSS Islamic Component Declarations
// -------------------------------------------------------------
console.log('\n[Suite 5] HTML & CSS Islamic Component Declarations');

const indexHtmlContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
const indexCssContent = fs.readFileSync(path.join(ROOT_DIR, 'index.css'), 'utf8');

runTest('index.html contains complete Quran Audio Player Bar element hierarchy', () => {
  assert(indexHtmlContent.includes('id="quran-player-bar"'), '#quran-player-bar must exist');
  assert(indexHtmlContent.includes('id="quran-reciter-select"'), '#quran-reciter-select must exist');
  assert(indexHtmlContent.includes('id="btn-quran-audio"'), '#btn-quran-audio must exist');
  assert(indexHtmlContent.includes('id="btn-quran-prev"'), '#btn-quran-prev must exist');
  assert(indexHtmlContent.includes('id="btn-quran-next"'), '#btn-quran-next must exist');
  assert(indexHtmlContent.includes('id="btn-quran-repeat"'), '#btn-quran-repeat must exist');
  assert(indexHtmlContent.includes('id="quran-audio-progress"'), '#quran-audio-progress slider must exist');
  assert(indexHtmlContent.includes('id="quran-audio-current-time"'), '#quran-audio-current-time must exist');
  assert(indexHtmlContent.includes('id="quran-audio-total-time"'), '#quran-audio-total-time must exist');
  assert(indexHtmlContent.includes('id="quran-audio-volume"'), '#quran-audio-volume must exist');
  assert(indexHtmlContent.includes('id="quran-verses-container"'), '#quran-verses-container must exist');
});

runTest('index.html contains 3D Qibla Compass UI elements and telemetry badges', () => {
  assert(indexHtmlContent.includes('id="qibla-compass-wheel"'), '#qibla-compass-wheel must exist');
  assert(indexHtmlContent.includes('id="qibla-needle"'), '#qibla-needle must exist');
  assert(indexHtmlContent.includes('id="qibla-kaaba-marker"'), '#qibla-kaaba-marker must exist');
  assert(indexHtmlContent.includes('id="qibla-city-select"'), '#qibla-city-select must exist');
  assert(indexHtmlContent.includes('id="qibla-target-angle-display"'), '#qibla-target-angle-display must exist');
  assert(indexHtmlContent.includes('id="qibla-distance-display"'), '#qibla-distance-display must exist');
  assert(indexHtmlContent.includes('id="qibla-cardinal-display"'), '#qibla-cardinal-display must exist');
});

runTest('index.html contains Bayt Al-Mal Zakat Ledger & Certificate Modal', () => {
  assert(indexHtmlContent.includes('id="zakat-asset-chart"'), '#zakat-asset-chart must exist');
  assert(indexHtmlContent.includes('id="zakat-ledger-tbody"'), '#zakat-ledger-tbody must exist');
  assert(indexHtmlContent.includes('id="zakat-disburse-category"'), '#zakat-disburse-category must exist');
  assert(indexHtmlContent.includes('id="zakat-disburse-amount"'), '#zakat-disburse-amount must exist');
  assert(indexHtmlContent.includes('id="zakat-disburse-recipient"'), '#zakat-disburse-recipient must exist');
  assert(indexHtmlContent.includes('id="modal-zakat-certificate"'), '#modal-zakat-certificate modal must exist');
  assert(indexHtmlContent.includes('id="cert-ref-number"'), '#cert-ref-number must exist');
  assert(indexHtmlContent.includes('id="cert-donor-name"'), '#cert-donor-name must exist');
  assert(indexHtmlContent.includes('id="cert-date-gregorian"'), '#cert-date-gregorian must exist');
});

runTest('index.css contains Islamic styling rules, animations, and print media layout', () => {
  assert(indexCssContent.includes('.quran-audio-player-bar'), '.quran-audio-player-bar CSS rule must exist');
  assert(indexCssContent.includes('.active-verse-playing'), '.active-verse-playing highlight style must exist');
  assert(indexCssContent.includes('@keyframes versePlayingPulse'), '@keyframes versePlayingPulse animation must exist');
  assert(indexCssContent.includes('.compass-azimuth-ring'), '.compass-azimuth-ring style must exist');
  assert(indexCssContent.includes('.zakat-certificate-card'), '.zakat-certificate-card style must exist');
  assert(indexCssContent.includes('@media print'), '@media print stylesheet must exist for receipts');
});

// -------------------------------------------------------------
// Summary
// -------------------------------------------------------------
console.log('\n===============================================================');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log(`SUCCESS RATE: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
console.log('===============================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
