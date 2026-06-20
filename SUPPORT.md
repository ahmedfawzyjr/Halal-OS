# 🆘 Support — Halal OS

<div align="center">

*"Whoever relieves a Muslim of a burden from the burdens of the world, Allah will relieve him of a burden from the burdens on the Day of Resurrection."*
— **Prophet Muhammad ﷺ (Muslim)**

</div>

---

## Getting Help

We're here to help! Use the right channel for the fastest response:

| Problem Type | Best Channel | Response Time |
|---|---|---|
| 🐛 **Bug report** | [GitHub Issues](https://github.com/ahmedfawzyjr/Halal-OS/issues/new?template=bug_report.md) | 48–72 hours |
| 💡 **Feature request** | [GitHub Discussions — Ideas](https://github.com/ahmedfawzyjr/Halal-OS/discussions/categories/ideas) | 1 week |
| ❓ **General question** | [GitHub Discussions — Help](https://github.com/ahmedfawzyjr/Halal-OS/discussions/categories/help-support) | 24–48 hours |
| 💬 **Quick chat** | [Discord Server](https://discord.gg/halalos) | Minutes to hours |
| 🔐 **Security issue** | security@halalos.org | 24 hours |
| 🕌 **Islamic guidance** | [Discussions — Islamic](https://github.com/ahmedfawzyjr/Halal-OS/discussions/categories/islamic-guidance) | Community-driven |

---

## Before You Ask

Please check these resources first — your question may already be answered:

1. **[README.md](README.md)** — Project overview, setup, architecture
2. **[FAQ section in README](README.md#-frequently-asked-questions)** — Common questions answered
3. **[CONTRIBUTING.md](CONTRIBUTING.md)** — How to contribute
4. **[GitHub Discussions](https://github.com/ahmedfawzyjr/Halal-OS/discussions)** — Search past discussions
5. **[Closed Issues](https://github.com/ahmedfawzyjr/Halal-OS/issues?q=is%3Aissue+is%3Aclosed)** — Previously solved problems

---

## Web Simulator Issues

If the Web Simulator (`index.html`) is not working:

**Step 1**: Ensure you are serving from a local HTTP server, not opening `file://` directly:
```bash
# Python (recommended)
python -m http.server 8888

# Node.js
npx serve .

# PHP
php -S localhost:8888
```

**Step 2**: Open `http://localhost:8888` — not the `file://` path.

**Step 3**: Open your browser's Developer Tools (F12) → Console tab → look for error messages.

**Step 4**: Try a different browser (Chrome, Firefox, Edge).

**Step 5**: If the problem persists, [open a bug report](https://github.com/ahmedfawzyjr/Halal-OS/issues/new?template=bug_report.md) with the console error output.

---

## Backend Module Issues

### Rust Modules (security/, browser/, filesystem/, display-manager/, package-manager/)

```bash
# Ensure Rust is installed
rustup --version

# Build and check for errors
cargo build 2>&1 | head -50

# Run tests
cargo test

# Check for lint issues
cargo clippy
```

### Go Modules (cloud/, app-store/)

```bash
# Ensure Go is installed
go version

# Download dependencies
go mod tidy

# Build
go build ./...

# Run tests
go test ./...
```

### Python Modules (ai/, islamic/)

```bash
# Ensure Python 3.11+ is installed
python --version

# Install dependencies
pip install -r requirements.txt

# Run with verbose output
python voice_assistant.py --verbose
```

### Kernel Module (kernel/)

> ⚠️ **Warning**: Only test kernel modules in a Virtual Machine, never on your primary system.

```bash
cd kernel
make
# Check for compilation errors above
```

---

## Community Guidelines for Asking Questions

To get the best and fastest answer, include:

1. **What you were trying to do** — your goal
2. **What you did** — the exact steps/commands
3. **What happened** — the exact error message (copy-paste, don't paraphrase)
4. **Your environment** — OS, browser version, Rust/Go/Python version
5. **What you already tried** — saves everyone time

**Example of a good question**:
> "I'm trying to build the security module on Ubuntu 22.04 with Rust 1.75. When I run `cargo build`, I get `error[E0432]: unresolved import 'nix::sys::signal'`. I've already tried `cargo update` and reinstalling Rust."

---

## Contributing vs. Support

This SUPPORT.md is for **users seeking help**. If you want to **contribute** to Halal OS, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Escalation Path

If you've been waiting more than the expected response time:
1. Add a comment to your existing issue/discussion (don't open a duplicate)
2. Ping us in `#help` on [Discord](https://discord.gg/halalos)
3. Tag a maintainer (sparingly — only if time-sensitive)

---

<div align="center">

*الأسئلة مفتاح المعرفة — Questions are the key to knowledge*

We are all learning together. No question is too basic.

</div>
