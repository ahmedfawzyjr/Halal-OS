/**
 * ☪ Halal OS - Automated ISO Pipeline & Virtualization Test Suite
 * Validates ISO generation scripts, Docker multi-stage build definitions,
 * Calamares installer configurations, systemd services, and QEMU virtualization harnesses.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const INFRA_DIR = path.join(ROOT_DIR, 'infrastructure');
const SERVICES_DIR = path.join(INFRA_DIR, 'services');
const INSTALLER_DIR = path.join(INFRA_DIR, 'installer');
const BRANDING_DIR = path.join(INSTALLER_DIR, 'branding');
const WORKFLOWS_DIR = path.join(ROOT_DIR, '.github', 'workflows');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  \x1b[32m✔\x1b[0m ${message}`);
        testsPassed++;
    } else {
        console.error(`  \x1b[31m✖\x1b[0m ${message}`);
        testsFailed++;
    }
}

function suite(title, fn) {
    console.log(`\n\x1b[1m\x1b[36m▶ ${title}\x1b[0m`);
    fn();
}

console.log('=================================================================');
console.log('☪  Halal OS ISO Compilation & Virtualization Test Suite  ☪');
console.log('=================================================================');

// 1. ISO Build Script Verification
suite('1. ISO Build Script (infrastructure/build_iso.sh)', () => {
    const scriptPath = path.join(INFRA_DIR, 'build_iso.sh');
    assert(fs.existsSync(scriptPath), 'build_iso.sh exists');

    const content = fs.readFileSync(scriptPath, 'utf8');
    assert(content.startsWith('#!/bin/bash'), 'Has valid bash shebang');
    assert(content.includes('set -e'), 'Enforces exit on error (set -e)');
    assert(content.includes('DEBIAN_RELEASE="bookworm"'), 'Targets Debian 12 Bookworm release');
    assert(content.includes('debootstrap'), 'Includes debootstrap stage');
    assert(content.includes('mksquashfs'), 'Generates compressed SquashFS live filesystem');
    assert(content.includes('grub-mkrescue'), 'Produces hybrid bootable GRUB ISO');
    assert(content.includes('security=halal'), 'Applies custom kernel security parameter (security=halal)');
    assert(content.includes('Bismillah - Sovereign Mode'), 'Features Islamic sovereign GRUB boot menu entry');
    assert(content.includes('toram'), 'Supports transient 100% RAM live-boot mode');
    assert(content.includes('umount'), 'Cleans up chroot mounts (/dev, /proc, /sys)');
});

// 2. Docker Containerized Builder
suite('2. Containerized ISO Builder (Dockerfile.builder & Runner Scripts)', () => {
    const dockerfilePath = path.join(INFRA_DIR, 'Dockerfile.builder');
    assert(fs.existsSync(dockerfilePath), 'Dockerfile.builder exists');

    const dockerContent = fs.readFileSync(dockerfilePath, 'utf8');
    assert(dockerContent.includes('FROM debian:bookworm-slim'), 'Uses official Debian Bookworm base');
    assert(dockerContent.includes('debootstrap') && dockerContent.includes('xorriso'), 'Installs core ISO authoring packages');
    assert(dockerContent.includes('rustup') || dockerContent.includes('cargo'), 'Installs Rust build toolchain');
    assert(dockerContent.includes('go1.22') || dockerContent.includes('golang'), 'Installs Go toolchain');
    assert(dockerContent.includes('build_iso.sh'), 'Configures build_iso.sh as container entrypoint');

    const bashRunner = path.join(INFRA_DIR, 'build_iso_docker.sh');
    assert(fs.existsSync(bashRunner), 'build_iso_docker.sh exists');
    const bashRunnerContent = fs.readFileSync(bashRunner, 'utf8');
    assert(bashRunnerContent.includes('--privileged'), 'Runs container in privileged mode for chroot/loopback mounts');

    const ps1Runner = path.join(INFRA_DIR, 'build_iso_docker.ps1');
    assert(fs.existsSync(ps1Runner), 'build_iso_docker.ps1 exists');
    const ps1RunnerContent = fs.readFileSync(ps1Runner, 'utf8');
    assert(ps1RunnerContent.includes('--privileged'), 'Windows script specifies --privileged container execution');
});

// 3. Calamares Installer & Islamic Emerald Branding
suite('3. Calamares Installer & Islamic Branding', () => {
    const configPath = path.join(INSTALLER_DIR, 'calamares-config.yaml');
    assert(fs.existsSync(configPath), 'calamares-config.yaml exists');

    const configContent = fs.readFileSync(configPath, 'utf8');
    assert(configContent.includes('branding: halalos'), 'Points to halalos branding descriptor');
    assert(configContent.includes('unpackfs') && configContent.includes('bootloader'), 'Defines complete installation sequence');

    const welcomePath = path.join(INSTALLER_DIR, 'welcome.conf');
    assert(fs.existsSync(welcomePath), 'welcome.conf exists');
    const welcomeContent = fs.readFileSync(welcomePath, 'utf8');
    assert(welcomeContent.includes('internetCheckUrl:   ""'), 'Allows 100% sovereign offline installation');

    const brandingPath = path.join(BRANDING_DIR, 'branding.desc');
    assert(fs.existsSync(brandingPath), 'branding.desc exists');
    const brandingContent = fs.readFileSync(brandingPath, 'utf8');
    assert(brandingContent.includes('Halal OS 2.0 (Sovereign Edition)'), 'Specifies official versioned name');
    assert(brandingContent.includes('#0d4d3a'), 'Features Halal OS emerald theme color (#0d4d3a)');

    const qssPath = path.join(BRANDING_DIR, 'stylesheet.qss');
    assert(fs.existsSync(qssPath), 'stylesheet.qss exists');
    const qssContent = fs.readFileSync(qssPath, 'utf8');
    assert(qssContent.includes('#0d4d3a') && qssContent.includes('#d4af37'), 'Includes emerald & gold QSS palettes');
});

// 4. Cross-Platform QEMU Virtualization Runner
suite('4. QEMU Virtualization Sandbox (run_qemu.sh & run_qemu.ps1)', () => {
    const bashRunner = path.join(INFRA_DIR, 'run_qemu.sh');
    assert(fs.existsSync(bashRunner), 'run_qemu.sh exists');

    const bashContent = fs.readFileSync(bashRunner, 'utf8');
    assert(bashContent.includes('kvm') && bashContent.includes('hvf'), 'Supports Linux KVM & macOS HVF hardware acceleration');
    assert(bashContent.includes('hostfwd=tcp::3000-:3000'), 'Maps desktop shell port 3000 to host');
    assert(bashContent.includes('hostfwd=tcp::8088-:8088'), 'Maps Amina AI engine port 8088 to host');
    assert(bashContent.includes('virtio'), 'Configures VirtIO fast disk & network controllers');

    const ps1Runner = path.join(INFRA_DIR, 'run_qemu.ps1');
    assert(fs.existsSync(ps1Runner), 'run_qemu.ps1 exists');

    const ps1Content = fs.readFileSync(ps1Runner, 'utf8');
    assert(ps1Content.includes('whpx'), 'Supports Windows Hypervisor Platform (WHPX) acceleration');
    assert(ps1Content.includes('qemu-system-x86_64.exe'), 'Checks Windows system paths for QEMU executable');
    assert(ps1Content.includes('intel-hda') || ps1Content.includes('audiodev'), 'Configures audio hardware device');
});

// 5. Systemd Sovereign Service Units
suite('5. Sovereign Systemd Unit Files (infrastructure/services/)', () => {
    const expectedServices = [
        { file: 'halal-ai.service', port: '8088', desc: 'Amina Local AI' },
        { file: 'halal-cloud.service', port: '8082', desc: 'Sovereign Cloud' },
        { file: 'halal-store.service', port: '8080', desc: 'Islamic App Store' },
        { file: 'halal-firewall.service', port: null, desc: 'Amanah Shield' },
        { file: 'halal-display.service', port: null, desc: 'Wayland Greeter' }
    ];

    for (const svc of expectedServices) {
        const svcPath = path.join(SERVICES_DIR, svc.file);
        assert(fs.existsSync(svcPath), `${svc.file} exists (${svc.desc})`);
        const content = fs.readFileSync(svcPath, 'utf8');
        assert(content.includes('[Unit]') && content.includes('[Service]') && content.includes('[Install]'), `${svc.file} has standard systemd sections`);
        assert(content.includes('Restart=') || content.includes('RemainAfterExit='), `${svc.file} defines lifecycle/restart policy`);
    }
});

// 6. CI/CD Pipeline Automation
suite('6. GitHub Actions CI/CD (build-iso.yml)', () => {
    const workflowPath = path.join(WORKFLOWS_DIR, 'build-iso.yml');
    assert(fs.existsSync(workflowPath), 'build-iso.yml exists');

    const workflowContent = fs.readFileSync(workflowPath, 'utf8');
    assert(workflowContent.includes('docker build'), 'Includes Docker build step');
    assert(workflowContent.includes('sha256sum'), 'Calculates SHA256 integrity checksums');
    assert(workflowContent.includes('upload-artifact'), 'Uploads ISO artifact');
    assert(workflowContent.includes('softprops/action-gh-release'), 'Publishes release on Git tag push');
});

// 7. Package.json Script Hooks
suite('7. NPM Lifecycle Scripts (package.json)', () => {
    const pkgPath = path.join(ROOT_DIR, 'package.json');
    assert(fs.existsSync(pkgPath), 'package.json exists');

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    assert(pkg.scripts !== undefined, 'Has scripts dictionary');
    assert(pkg.scripts['build:iso'] !== undefined, 'Has "build:iso" script');
    assert(pkg.scripts['build:iso:docker'] !== undefined, 'Has "build:iso:docker" script');
    assert(pkg.scripts['qemu'] !== undefined, 'Has "qemu" virtualization runner script');
    assert(pkg.scripts['test:iso'] !== undefined, 'Has "test:iso" pipeline validation script');
});

console.log('=================================================================');
console.log(`Summary: ${testsPassed} Passed, ${testsFailed} Failed`);
console.log('=================================================================');

if (testsFailed > 0) {
    process.exit(1);
} else {
    process.exit(0);
}
