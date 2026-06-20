# 🤝 Contributing to Halal OS

<div align="center">

**بارك الله فيكم — May Allah bless your efforts**

*Every contribution to Halal OS is an act of sadaqah jariyah (ongoing charity).*

</div>

---

## Table of Contents

- [Welcome](#welcome)
- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Branching Strategy](#branching-strategy)
- [Commit Message Convention](#commit-message-convention)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Requirements](#testing-requirements)
- [Documentation Guidelines](#documentation-guidelines)
- [Translation & Localization](#translation--localization)
- [Issue Reporting](#issue-reporting)
- [Security Vulnerabilities](#security-vulnerabilities)
- [Getting Help](#getting-help)

---

## Welcome

We are **thrilled** you want to contribute to Halal OS. This project exists because of the Muslim developer community — and every type of contribution matters:

| Contribution Type | Examples |
|---|---|
| 💻 **Code** | Bug fixes, features, optimizations |
| 🎨 **Design** | UI mockups, icons, animations |
| 📝 **Documentation** | README, guides, API docs, tutorials |
| 🌐 **Translation** | Arabic, Urdu, Turkish, Indonesian, French... |
| 🐛 **Testing** | Bug reports, test cases, QA |
| 💡 **Ideas** | Feature proposals in GitHub Discussions |
| 🕌 **Islamic Review** | Scholarly review of Islamic feature accuracy |
| ⭐ **Advocacy** | Sharing the project, writing articles |

**If you are new to open source**, start with our [Good First Issues](https://github.com/ahmedfawzyjr/Halal-OS/issues?q=is%3Aopen+label%3A%22good+first+issue%22) — they are carefully curated for first-time contributors.

---

## Code of Conduct

By participating in this project, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

**The short version:** Be kind. Be respectful. Be the Muslim (or friend of Muslims) you would want working alongside you.

---

## Ways to Contribute

### 1. Fix a Bug
1. Search [existing issues](https://github.com/ahmedfawzyjr/Halal-OS/issues) to see if it's reported
2. If not, open an issue describing the bug
3. Fork the repo, fix the bug, open a Pull Request

### 2. Implement a Feature
1. Open a [GitHub Discussion](https://github.com/ahmedfawzyjr/Halal-OS/discussions/categories/ideas) to propose your idea
2. Wait for community feedback (at least 48 hours for minor features)
3. For major features, await maintainer sign-off before starting work
4. Implement, test, document, and submit a PR

### 3. Improve Documentation
- Fix typos, broken links, or unclear instructions in any `.md` file
- Add code examples or explanations
- Translate documentation to other languages

### 4. Add a Translation
See [Translation & Localization](#translation--localization) section.

### 5. Submit an Islamic Feature Review
If you have Islamic scholarly knowledge, you can review our Islamic features for accuracy (prayer calculation methods, Fiqh considerations, etc.). Open a Discussion under the **Islamic Guidance** category.

---

## Development Setup

### Prerequisites

| Tool | Version | Used For |
|---|---|---|
| **Git** | Latest | Version control |
| **Python** | 3.11+ | AI module, Islamic calculations |
| **Rust** | 1.75+ (stable) | Security, browser, filesystem daemons |
| **Go** | 1.21+ | Cloud API, App Store |
| **GCC** | 12+ | Kernel module compilation |
| **Docker** | 24+ | Cloud services |
| **Node.js** | 20+ | Web simulator dev server |

### Step-by-Step Setup

```bash
# 1. Fork the repository on GitHub (click the Fork button)

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/Halal-OS.git
cd Halal-OS

# 3. Add the upstream remote
git remote add upstream https://github.com/ahmedfawzyjr/Halal-OS.git

# 4. Verify remotes
git remote -v
# origin    https://github.com/YOUR_USERNAME/Halal-OS.git (fetch)
# upstream  https://github.com/ahmedfawzyjr/Halal-OS.git (fetch)

# 5. Run the Web Simulator (no build required)
python -m http.server 8888
# Open http://localhost:8888

# 6. (Optional) Build Rust modules
cd security && cargo build
cd ../browser && cargo build
cd ../display-manager && cargo build
cd ../package-manager && cargo build
cd ../filesystems && cargo build

# 7. (Optional) Build Go services
cd cloud && go build -o halalcloud main.go
cd ../app-store && go build -o halalstore main.go

# 8. (Optional) Set up Python AI module
cd ai
pip install -r requirements.txt  # (create this if not present)
python voice_assistant.py
```

---

## Project Structure

```
Halal-OS/
├── kernel/              # C — Linux Security Module (lsm_halal.c)
├── display-manager/     # Rust — halaldm Wayland display manager
├── package-manager/     # Rust — halalpkg package manager
├── security/            # Rust — halalfire + halalguard + YARA rules
├── browser/             # Rust — DoH resolver + adblock engine
├── cloud/               # Go — Cloud sync REST API
├── app-store/           # Go — Halal Store backend
├── filesystems/         # Rust — Partition & mount utilities
├── ai/                  # Python — Local voice assistant (Whisper + LLM)
├── islamic/             # Python — Prayer time astronomical engine
├── infrastructure/      # Terraform + Kubernetes deployment
├── desktop/             # Desktop environment assets/components
├── docs/                # Project documentation
├── .github/
│   ├── ISSUE_TEMPLATE/  # Issue templates
│   ├── workflows/       # GitHub Actions CI/CD
│   └── PULL_REQUEST_TEMPLATE.md
├── index.html           # Web Simulator (182KB)
├── index.css            # HDK Design System (99KB)
├── app.js               # Web Simulator Logic (190KB)
├── README.md
├── CONTRIBUTING.md      # This file
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── GOVERNANCE.md
└── LICENSE
```

---

## Branching Strategy

We use a **trunk-based development** model:

| Branch | Purpose |
|---|---|
| `main` | Stable, production-ready code. All PRs target this. |
| `feature/*` | New features (`feature/hijri-calendar-widget`) |
| `fix/*` | Bug fixes (`fix/prayer-time-calculation-edge-case`) |
| `docs/*` | Documentation only (`docs/update-arabic-readme`) |
| `security/*` | Security patches (`security/fix-lsm-privilege-escalation`) |
| `release/*` | Release preparation branches |

### Rules
- **Never** commit directly to `main`
- Branch names use lowercase kebab-case
- Keep branches focused — one feature/fix per branch
- Delete branches after merging

---

## Commit Message Convention

We follow the **Conventional Commits** specification:

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Formatting, missing semicolons, etc. (no logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or correcting tests |
| `chore` | Build process, dependency updates |
| `security` | Security fix or hardening |
| `i18n` | Internationalization and translation work |
| `islamic` | Changes related to Islamic features specifically |

### Scopes

`kernel` | `security` | `browser` | `cloud` | `ai` | `islamic` | `desktop` | `docs` | `store` | `filesystem` | `display` | `pkg`

### Examples

```bash
feat(islamic): add Hijri calendar widget to taskbar
fix(security): resolve privilege escalation in halalfire daemon
docs(readme): update architecture diagram with cloud layer
i18n(desktop): add Urdu translation for settings panel
islamic(quran): add Al-Sudais recitation audio support
security(browser): patch DoH resolver memory leak
```

---

## Pull Request Process

### Before Submitting
- [ ] Fork the repo and create a descriptive branch
- [ ] Reference the related issue (e.g., `Closes #42`)
- [ ] All new code includes appropriate tests
- [ ] Documentation is updated if behavior changed
- [ ] Code follows the coding standards below
- [ ] `git rebase upstream/main` to stay up to date
- [ ] All CI checks pass locally

### PR Title Format
Same as commit messages: `feat(scope): description`

### PR Description Template
Use the `.github/PULL_REQUEST_TEMPLATE.md` template automatically shown when opening a PR.

### Review Process
1. **Automated CI** — All checks must pass (linting, tests, security scan)
2. **Maintainer Review** — At least 1 maintainer approval required
3. **Community Review** — For significant changes, 48 hours for community comment
4. **Islamic Review** — Required for any changes to Islamic features
5. **Merge** — Squash-merged into `main` by a maintainer

### PR SLA
- Maintainers aim to review PRs within **5 business days**
- If your PR is urgent, mention it in [Discord](https://discord.gg/halalos)

---

## Coding Standards

### JavaScript (Web Simulator)
- ES6+ syntax
- Meaningful variable names (no `x`, `temp`, `data` without context)
- JSDoc comments for public functions
- No `var` — use `const` and `let`
- 2-space indentation

### Rust (Security, Browser, Filesystem, Display Manager, Package Manager)
- Follow `rustfmt` formatting (`cargo fmt`)
- `clippy` must pass with no warnings (`cargo clippy -- -D warnings`)
- Document public APIs with `///` doc comments
- Use `Result<T, E>` for error handling — no panics in library code
- All unsafe code must have a safety comment

### Go (Cloud, App Store)
- Follow `gofmt` formatting
- Error handling must be explicit — no ignoring errors
- Use interfaces for testability
- Meaningful package names

### Python (AI, Islamic calculations)
- PEP 8 style guide
- Type hints on all public functions
- Docstrings for all public functions and classes
- Use `black` for formatting

### C (Kernel Module)
- Linux kernel coding style (`checkpatch.pl`)
- All memory allocations checked for NULL
- No global variables unless absolutely necessary
- Comment every non-obvious operation

### CSS (HDK Design System)
- Use CSS custom properties for all values
- BEM-like naming convention
- Mobile-first responsive design
- RTL support for all new components

---

## Testing Requirements

### JavaScript
- Browser console must show zero errors
- Test on Chrome, Firefox, and Safari

### Rust
```bash
cargo test
cargo clippy -- -D warnings
cargo fmt -- --check
```

### Go
```bash
go test ./...
go vet ./...
```

### Python
```bash
python -m pytest
python -m black --check .
python -m mypy .
```

### Kernel Module
```bash
make
# Test in a VM — never on bare metal without testing first
```

---

## Documentation Guidelines

- Write in **clear, simple English** — many contributors are non-native speakers
- Use **headers** to organize long documents
- Include **code examples** for all technical instructions
- Add **Arabic translations** for Islamic feature documentation where possible
- Screenshots and GIFs are welcome for UI changes
- Keep line lengths under 100 characters

---

## Translation & Localization

Halal OS targets **20+ languages** with Arabic as the primary non-English language.

### Priority Languages
1. 🇸🇦 **Arabic** (العربية) — Primary Islamic language
2. 🇵🇰 **Urdu** (اردو)
3. 🇹🇷 **Turkish** (Türkçe)
4. 🇮🇩 **Indonesian** (Bahasa Indonesia)
5. 🇲🇾 **Malay** (Bahasa Melayu)
6. 🇫🇷 **French** (Français) — North African communities
7. 🇧🇩 **Bengali** (বাংলা)

### How to Contribute a Translation
1. Check if a translation file exists in `docs/translations/`
2. If not, create `docs/translations/<language-code>.md`
3. Translate the README.md and key documentation files
4. Open a PR with the `i18n` type label

### RTL Support
Arabic, Urdu, and other RTL languages require special care in CSS. If you add UI components, ensure they have `[dir="rtl"]` CSS overrides. See `index.css` for patterns.

---

## Issue Reporting

### Before Filing an Issue
1. Search [existing issues](https://github.com/ahmedfawzyjr/Halal-OS/issues) to avoid duplicates
2. Check [GitHub Discussions](https://github.com/ahmedfawzyjr/Halal-OS/discussions) for related conversations

### Bug Reports
Use the **Bug Report** issue template. Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS version (for Web Simulator)
- Screenshots or videos if applicable

### Feature Requests
Use the **Feature Request** template. Explain:
- What problem does this solve?
- Who benefits? (Muslims specifically? All users?)
- Is there an Islamic dimension to this feature?
- Rough implementation idea (optional but helpful)

---

## Security Vulnerabilities

**DO NOT** report security vulnerabilities in public GitHub Issues.

Follow our responsible disclosure process: **[SECURITY.md](SECURITY.md)**

---

## Getting Help

| Channel | Best For |
|---|---|
| [GitHub Discussions](https://github.com/ahmedfawzyjr/Halal-OS/discussions) | Long-form questions, ideas |
| [Discord Server](https://discord.gg/halalos) | Quick questions, chat |
| [Issue Comments](https://github.com/ahmedfawzyjr/Halal-OS/issues) | Issue-specific questions |

---

<div align="center">

*جزاكم الله خيراً — May Allah reward you with the best*

**Your PR, no matter how small, makes Halal OS better for every Muslim.**

</div>
