#!/bin/bash
# ☪ Halal OS - Live ISO Build Automation Script
# This script automates the compilation of custom Rust/Go/C daemons and packages
# them into a bootable Debian-based Live ISO using live-build and debootstrap.
#
# Prerequisite Packages: sudo apt install -y debootstrap xorriso squashfs-tools mtools grub-pc-bin grub-efi-amd64-bin binutils gcc make cargo golang

set -e

# Configuration
WORKDIR="/tmp/halal-os-build"
OUTDIR="./dist"
ISO_NAME="halal-os-amd64.iso"
DEBIAN_RELEASE="bookworm"
MIRROR="http://deb.debian.org/debian/"

echo "☪ Starting Halal OS ISO Packaging Process..."

# 1. Environment Verification
echo "[1/7] Verifying dependencies..."
for cmd in debootstrap xorriso mksquashfs grub-mkrescue gcc make cargo go; do
    if ! command -v $cmd &> /dev/null; then
        echo "Error: $cmd is required but not installed." >&2
        exit 1
    fi
done

# Prepare working directories
rm -rf "$WORKDIR"
mkdir -p "$WORKDIR/chroot"
mkdir -p "$WORKDIR/scratch"
mkdir -p "$WORKDIR/iso/boot/grub"
mkdir -p "$OUTDIR"

# 2. Bootstrap Debian Base System
echo "[2/7] Bootstrapping Debian $DEBIAN_RELEASE base system..."
sudo debootstrap --arch=amd64 "$DEBIAN_RELEASE" "$WORKDIR/chroot" "$MIRROR"

# Configure local repositories and essential networking inside chroot
sudo mount --bind /dev "$WORKDIR/chroot/dev"
sudo mount --bind /proc "$WORKDIR/chroot/proc"
sudo mount --bind /sys "$WORKDIR/chroot/sys"

cat <<EOF | sudo chroot "$WORKDIR/chroot" /bin/bash
apt-get update
apt-get install -y --no-install-recommends \
    linux-image-amd64 \
    live-boot \
    systemd-sysv \
    xserver-xorg-core \
    lightdm \
    libgtk-4-1 \
    libadwaita-1-0 \
    iptables \
    yara \
    dbus \
    network-manager
EOF

# 3. Compile Custom Kernel LSM Security Module (C)
echo "[3/7] Compiling Custom Kernel LSM module (lsm_halal.c)..."
gcc -O2 -Wall -shared -fPIC -o "$WORKDIR/scratch/lsm_halal.so" ../kernel/lsm_halal.c
sudo cp "$WORKDIR/scratch/lsm_halal.so" "$WORKDIR/chroot/lib/security/"

# 4. Build Rust-based System Daemons (halaldm, halalpkg, security)
echo "[4/7] Compiling Rust Daemons (halaldm, halalpkg, halalfire, halalguard)..."
(cd ../display-manager && cargo build --release)
(cd ../package-manager && cargo build --release)
(cd ../security && cargo build --release)

sudo cp ../display-manager/target/release/halaldm "$WORKDIR/chroot/usr/local/bin/"
sudo cp ../package-manager/target/release/halalpkg "$WORKDIR/chroot/usr/local/bin/"
sudo cp ../security/target/release/halal-security "$WORKDIR/chroot/usr/local/bin/"
sudo cp ../security/rules.yara "$WORKDIR/chroot/etc/halalguard/"

# 5. Build Go-based Cloud & App Store Microservices
echo "[5/7] Compiling Go microservices (cloud-orchestrator, app-store)..."
(cd ../cloud && go build -o cloud-orchestrator main.go)
(cd ../app-store && go build -o app-store main.go)

sudo cp ../cloud/cloud-orchestrator "$WORKDIR/chroot/usr/local/bin/"
sudo cp ../app-store/app-store "$WORKDIR/chroot/usr/local/bin/"

# 6. Install Web Simulator (HDK GUI shell)
echo "[6/7] Deploying HDK Desktop environment workspace files..."
sudo mkdir -p "$WORKDIR/chroot/usr/share/halalos/desktop"
sudo cp -r ../index.html ../index.css ../app.js ../favicon.svg "$WORKDIR/chroot/usr/share/halalos/desktop/"

# 7. Compress Root Filesystem & Generate Bootable Live ISO
echo "[7/7] Packaging squashfs filesystem and generating bootable ISO image..."
sudo mksquashfs "$WORKDIR/chroot" "$WORKDIR/iso/live/filesystem.squashfs" -noappend -e boot

# Copy Kernel & Initrd files to ISO partition
sudo cp "$WORKDIR/chroot/boot/vmlinuz-"* "$WORKDIR/iso/boot/vmlinuz"
sudo cp "$WORKDIR/chroot/boot/initrd.img-"* "$WORKDIR/iso/boot/initrd"

# Cleanup mounts
sudo umount "$WORKDIR/chroot/dev"
sudo umount "$WORKDIR/chroot/proc"
sudo umount "$WORKDIR/chroot/sys"

# Configure GRUB bootloader configurations with Islamic Greetings
cat <<EOF > "$WORKDIR/iso/boot/grub/grub.cfg"
set default=0
set timeout=5

menuentry "☪ Launch Halal OS (Bismillah)" {
    linux /boot/vmlinuz boot=live quiet splash security=halal
    initrd /boot/initrd
}

menuentry "☪ Launch Halal OS (Safe Mode)" {
    linux /boot/vmlinuz boot=live nomodeset security=halal
    initrd /boot/initrd
}
EOF

# Create bootable hybrid ISO
grub-mkrescue -o "$OUTDIR/$ISO_NAME" "$WORKDIR/iso"

echo "✅ Success: Bootable Halal OS ISO image generated at $OUTDIR/$ISO_NAME"
