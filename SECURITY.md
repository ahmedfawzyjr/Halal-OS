# 🔐 Security Policy — Halal OS

<div align="center">

*"Amanah (trust) is the foundation of this OS — and of this community."*

</div>

---

## Supported Versions

| Component | Status |
|---|---|
| Web Simulator (`index.html`, `app.js`, `index.css`) | ✅ Actively maintained |
| Kernel Module (`kernel/`) | ✅ Actively maintained |
| Security Daemons (`security/`) | ✅ Actively maintained |
| Browser Engine (`browser/`) | ✅ Actively maintained |
| Cloud API (`cloud/`) | ✅ Actively maintained |
| AI Engine (`ai/`) | ✅ Actively maintained |
| App Store (`app-store/`) | ✅ Actively maintained |
| Filesystem Utils (`filesystems/`) | ✅ Actively maintained |

---

## Reporting a Vulnerability

> [!CAUTION]
> **DO NOT** report security vulnerabilities through public GitHub Issues, Discussions, or Pull Requests. Public disclosure before a fix is available puts all users at risk.

### Responsible Disclosure Process

1. **Email us privately** at: `security@halalos.org`
2. **Subject line**: `[SECURITY] Brief description of vulnerability`
3. **Include in your report**:
   - Component affected (kernel, browser, security daemon, etc.)
   - Severity assessment (Critical / High / Medium / Low)
   - Detailed description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested mitigation (if any)
   - Your name/handle for credit (optional)

### What to Expect

| Timeline | Action |
|---|---|
| **24 hours** | We acknowledge receipt of your report |
| **72 hours** | Initial severity assessment shared with you |
| **14 days** | We aim to provide a fix or mitigation plan |
| **90 days** | Public disclosure (CVE assignment if applicable) |

We follow a **90-day responsible disclosure policy**. If we cannot fix a critical issue within 90 days, we will coordinate with you on an appropriate disclosure timeline.

---

## Security Architecture Overview

Halal OS implements multiple layers of security. Here's what each layer is responsible for:

### Kernel Layer (`kernel/lsm_halal.c`)
- Linux Security Module (LSM) for mandatory access control
- Blocks unauthorized process privilege escalation
- Enforces filesystem access policies

### System Layer (`security/`)
- **halalfire** — Stateful packet inspection firewall
- **halalguard** — Behavioral antivirus with YARA rule engine
- **halalbox** — Flatpak application sandboxing

### Network Layer (`browser/`)
- DNS-over-HTTPS (DoH) resolver prevents DNS snooping
- Adblock engine filters malicious ad networks
- Content Security Policy enforcement

### Application Layer
- Wayland-only (prevents X11 keylogging/screen capture attacks)
- Signed package verification via halalpkg
- Reproducible builds for audit-ability

---

## Vulnerability Severity Definitions

| Severity | CVSS Score | Description |
|---|---|---|
| **Critical** | 9.0–10.0 | Remote code execution, kernel privilege escalation, full system compromise |
| **High** | 7.0–8.9 | Significant data exposure, authentication bypass, local privilege escalation |
| **Medium** | 4.0–6.9 | Information disclosure, DoS, CSRF/XSS in web components |
| **Low** | 0.1–3.9 | Minor information leakage, low-impact configuration issues |

---

## Scope

### In Scope
- All code in this repository
- Web Simulator (XSS, CSRF, data exposure)
- Kernel module security bypass
- Security daemon vulnerabilities (halalfire, halalguard)
- Browser engine vulnerabilities (DoH, adblock)
- Cloud API security issues (authentication, authorization, injection)
- Dependency vulnerabilities with a clear exploit path

### Out of Scope
- Vulnerabilities in third-party dependencies without a clear exploit path in our code
- Social engineering attacks
- Physical attacks
- Issues in infrastructure we don't control (Vercel hosting, GitHub itself)
- Theoretical vulnerabilities without a proof of concept

---

## Bug Bounty

Halal OS is currently a community project with no formal bug bounty program. However, we commit to:

- **Full public credit** for responsible disclosers (in release notes and SECURITY.md)
- **Hall of Fame** recognition on our website and documentation
- **Reference letter** from maintainers for professional security researchers upon request

As the project grows and receives funding (see [FUNDING.yml](.github/FUNDING.yml)), we intend to establish a formal bounty program.

---

## Security Hall of Fame

*We honor those who help make Halal OS safer for all Muslims.*

| Researcher | Vulnerability | Date | Severity |
|---|---|---|---|
| *Be the first!* | — | — | — |

---

## PGP Key

For encrypted communication, you may use our security team's PGP key:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
[PGP key to be generated and published here]
-----END PGP PUBLIC KEY BLOCK-----
```

*Key fingerprint will be published once the security@ email is configured.*

---

## Security Update Notifications

To receive security update notifications:
- Watch this repository (Releases only)
- Join `#security-announcements` on [Discord](https://discord.gg/halalos)

---

<div align="center">

*"Whoever deceives us is not one of us."*
— **Prophet Muhammad ﷺ**

*We hold this standard for our code as we hold it for ourselves.*

</div>
