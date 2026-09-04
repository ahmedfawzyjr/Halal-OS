#!/bin/bash
# ☪ Halal OS - Dockerized ISO Build Runner (Linux / macOS)
# Builds the Debian Live ISO within a privileged container and outputs to ./dist/

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
IMAGE_NAME="halal-os-builder:v2.0"
DIST_DIR="$ROOT_DIR/dist"

echo "================================================================="
echo "☪  Building Halal OS v2.0 Live ISO via Containerized Builder  ☪"
echo "================================================================="

if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed or not in PATH." >&2
    echo "Please install Docker or Docker Desktop from https://www.docker.com" >&2
    exit 1
fi

mkdir -p "$DIST_DIR"

echo "==> Building Docker builder image ($IMAGE_NAME)..."
docker build -t "$IMAGE_NAME" -f "$SCRIPT_DIR/Dockerfile.builder" "$ROOT_DIR"

echo "==> Compiling Halal OS Live ISO inside privileged builder..."
docker run --rm --privileged \
    -v "$DIST_DIR:/build/infrastructure/dist" \
    -v "$DIST_DIR:/dist" \
    "$IMAGE_NAME"

echo "================================================================="
echo "✅ Build Complete! Check ./dist/ for halal-os-v2.0-amd64.iso"
echo "================================================================="
