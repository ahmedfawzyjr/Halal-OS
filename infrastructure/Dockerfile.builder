# ☪ Halal OS - Multi-Stage Containerized ISO Builder
# Reproducible build environment for compiling Halal OS v2.0 Live ISO
# Works seamlessly on Linux, Windows (Docker Desktop), and macOS

FROM debian:bookworm-slim AS builder-base

ENV DEBIAN_FRONTEND=noninteractive
ENV RUSTUP_HOME=/usr/local/rustup
ENV CARGO_HOME=/usr/local/cargo
ENV PATH=/usr/local/cargo/bin:/usr/local/go/bin:$PATH

# Install core build dependencies, ISO tools, Rust & Go
RUN apt-get update && apt-get install -y --no-install-recommends \
    debootstrap \
    xorriso \
    squashfs-tools \
    mtools \
    dosfstools \
    grub-pc-bin \
    grub-efi-amd64-bin \
    binutils \
    gcc \
    g++ \
    make \
    curl \
    ca-certificates \
    git \
    pkg-config \
    libssl-dev \
    yara \
    libyara-dev \
    fuse3 \
    libfuse3-dev \
    python3 \
    python3-pip \
    python3-venv \
    wget \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install Rust stable toolchain
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable --profile minimal

# Install Go 1.22
RUN wget -q https://go.dev/dl/go1.22.6.linux-amd64.tar.gz -O /tmp/go.tar.gz && \
    tar -C /usr/local -xzf /tmp/go.tar.gz && \
    rm /tmp/go.tar.gz

WORKDIR /build

# Copy source trees into container
COPY . /build/

# Make build scripts executable
RUN chmod +x /build/infrastructure/build_iso.sh

# Default build execution
ENTRYPOINT ["/bin/bash", "-c", "cd /build/infrastructure && ./build_iso.sh"]
