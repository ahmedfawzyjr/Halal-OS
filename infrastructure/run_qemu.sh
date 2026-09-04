#!/bin/bash
# ☪ Halal OS - Sovereign Live ISO QEMU Virtualization Runner (Linux / macOS)
# Boots the compiled Halal OS Live ISO in an accelerated virtual machine.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ISO_PATH="${1:-$ROOT_DIR/dist/halal-os-v2.0-amd64.iso}"
DISK_PATH="$ROOT_DIR/dist/halal-os-testdisk.qcow2"
DISK_SIZE="20G"
RAM="4096"
SMP="4"

echo "================================================================="
echo "☪  Launching Halal OS v2.0 in QEMU Virtualization Sandbox  ☪"
echo "================================================================="

if ! command -v qemu-system-x86_64 &> /dev/null; then
    echo "Error: qemu-system-x86_64 is not installed or not in PATH." >&2
    echo "Install via: sudo apt install qemu-system-x86 (Debian/Ubuntu) or brew install qemu (macOS)" >&2
    exit 1
fi

if [ ! -f "$ISO_PATH" ]; then
    echo "Warning: ISO file not found at $ISO_PATH"
    echo "Generating or checking mock ISO target..."
    mkdir -p "$ROOT_DIR/dist"
fi

# Detect hardware acceleration
ACCEL=""
if [ -e /dev/kvm ] && [ -w /dev/kvm ]; then
    echo "==> Hardware Acceleration: Linux KVM enabled."
    ACCEL="-enable-kvm -cpu host"
elif [ "$(uname)" == "Darwin" ]; then
    echo "==> Hardware Acceleration: macOS Hypervisor.framework (HVF) enabled."
    ACCEL="-accel hvf -cpu host"
else
    echo "==> Hardware Acceleration: None (TCG software emulation)."
    ACCEL="-cpu qemu64"
fi

# Create test virtual hard drive if not present
if [ ! -f "$DISK_PATH" ]; then
    echo "==> Creating virtual disk ($DISK_PATH, $DISK_SIZE)..."
    qemu-img create -f qcow2 "$DISK_PATH" "$DISK_SIZE"
fi

echo "==> Starting QEMU VM (RAM: ${RAM}MB, Cores: $SMP)..."
echo "    Press Ctrl+Alt+G to release cursor, Ctrl+Alt+F for fullscreen."

qemu-system-x86_64 \
    $ACCEL \
    -m "$RAM" \
    -smp "$SMP" \
    -cdrom "$ISO_PATH" \
    -drive file="$DISK_PATH",format=qcow2,if=virtio \
    -boot d \
    -vga virtio \
    -display default \
    -device virtio-net-pci,netdev=net0 \
    -netdev user,id=net0,hostfwd=tcp::3000-:3000,hostfwd=tcp::8080-:8080,hostfwd=tcp::8082-:8082,hostfwd=tcp::8088-:8088 \
    -device intel-hda \
    -device hda-duplex \
    -usb -device usb-tablet
