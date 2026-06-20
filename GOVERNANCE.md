# 🏛️ Governance — Halal OS

<div align="center">

*"And their affairs are [conducted through] shura (consultation) among themselves."*
— **Surah Ash-Shura (42:38)**

</div>

---

## Overview

Halal OS is governed as an **open, community-led project** built on the Islamic principle of **shura (mutual consultation)**. Our governance model is designed to be transparent, inclusive, and scalable as the project grows.

This document describes how decisions are made, who has what authority, and how community members can rise into leadership roles.

---

## Governance Philosophy

Our governance is guided by Islamic values:

| Value | Application |
|---|---|
| **Shura (Consultation)** | Major decisions are made publicly, with community input |
| **Amanah (Trust)** | Maintainers are stewards, not owners |
| **Adl (Justice)** | All contributors are treated fairly and equally |
| **Ihsan (Excellence)** | We always aim for the best outcome, not the fastest |
| **Tawadu (Humility)** | Leadership is a responsibility, not a privilege |

---

## Roles & Responsibilities

### 1. 🌱 Community Contributor
**Who**: Anyone who has participated in the project (issues, PRs, discussions).

**Rights**:
- Open and comment on issues
- Participate in GitHub Discussions
- Submit Pull Requests
- Vote in polls (non-binding)

---

### 2. 🔑 Core Contributor
**Who**: Anyone with **3 or more merged Pull Requests**.

**How to Become One**: Automatically granted after your 3rd merged PR.

**Additional Rights**:
- Binding vote on feature proposals in GitHub Discussions
- Access to `#core-contributors` Discord channel
- Listed in the CONTRIBUTORS file
- Can be nominated as Maintainer

---

### 3. 🛡️ Maintainer
**Who**: Trusted community members who review and merge PRs, triage issues, and guide the project direction.

**How to Become One**:
1. Must be a Core Contributor (3+ merged PRs)
2. Nominated by an existing Maintainer
3. Approved by simple majority (>50%) of existing Maintainers
4. 7-day public comment period in GitHub Discussions

**Responsibilities**:
- Review and merge Pull Requests (target: 5 business days)
- Triage new issues (target: 48 hours)
- Participate in bi-weekly maintainer sync
- Enforce Code of Conduct
- Uphold the security disclosure process

**Rights** (in addition to Core Contributor):
- Merge PRs to `main`
- Close issues
- Manage labels and milestones
- Participate in maintainer-only votes

**Stepping Down**: Maintainers who are inactive for 90+ days are moved to Emeritus Maintainer status. They can return at any time.

---

### 4. 🌙 Lead Maintainer
**Who**: The overall project lead, responsible for strategic direction.

**Current Lead Maintainer**: [@ahmedfawzyjr](https://github.com/ahmedfawzyjr)

**Responsibilities**:
- Final authority on major architectural decisions
- Represents the project publicly
- Manages relationships with foundations and partners
- Appoints and removes Maintainers (with community input)

**Succession**: If the Lead Maintainer is unable to continue, they nominate a successor from the Maintainer pool. In the absence of a nomination, Maintainers vote by simple majority.

---

### 5. 🕌 Islamic Advisory Panel
**Who**: A board of Islamic scholars and knowledgeable community members who advise on Islamic feature correctness.

**Responsibilities**:
- Review Islamic features for Fiqh accuracy
- Provide scholarly guidance on prayer calculation methods
- Review content filtering policies for Islamic appropriateness
- Non-binding advisory role (technical decisions remain with Maintainers)

**How to Join**: Submit your credentials and areas of Islamic expertise via a GitHub Discussion or email. Panel membership is approved by the Lead Maintainer.

---

## Decision-Making Process

### Everyday Decisions
> Bug fixes, minor improvements, documentation updates, minor features.

**Process**: Any Maintainer can merge after review by at least 1 other Maintainer. No community vote required.

---

### Significant Decisions
> New major features, changes to existing Islamic features, new language support, tooling changes.

**Process** (RFC — Request for Comments):
1. Open a GitHub Discussion with `[RFC]` prefix
2. 7-day comment period for community input
3. Core Contributors vote (simple majority, >50%)
4. Maintainer approval to implement

---

### Major Decisions
> Architecture changes, governance changes, license changes, project name/branding, new Maintainer appointments, partnerships.

**Process**:
1. Open a GitHub Discussion with `[MAJOR RFC]` prefix
2. 14-day comment period
3. Core Contributors vote (supermajority, >66%)
4. Maintainer panel approval (>66%)
5. Lead Maintainer final approval

---

### Emergency Security Decisions
> Critical security patches, emergency hotfixes.

**Process**: Lead Maintainer or any 2 Maintainers can merge emergency security fixes immediately. A retrospective Discussion must be opened within 72 hours.

---

## Meetings & Communication

### Maintainer Sync
- **Frequency**: Bi-weekly (every 2 weeks)
- **Platform**: Discord voice channel
- **Agenda**: Open issues, PR reviews, upcoming milestones
- **Minutes**: Published in GitHub Discussions after each meeting

### Community Town Hall
- **Frequency**: Monthly
- **Platform**: Discord voice channel (open to all)
- **Purpose**: Project updates, community Q&A, roadmap discussion

### Office Hours
- Individual maintainers may hold optional "office hours" on Discord
- Schedule posted in `#maintainer-hours` Discord channel

---

## Conflict Resolution

1. **First**: Parties attempt to resolve directly and respectfully
2. **Second**: A neutral Maintainer mediates
3. **Third**: Full Maintainer panel decides by vote
4. **Final**: Lead Maintainer makes the binding decision

All conflict resolution follows the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Amendments to Governance

This document can be amended via the **Major Decision** process above. All governance changes must:
- Have a 14-day community comment period
- Be approved by >66% of Maintainers
- Be approved by the Lead Maintainer

---

## Current Maintainers

| Name | GitHub | Role | Since |
|---|---|---|---|
| Ahmed Fawzy | [@ahmedfawzyjr](https://github.com/ahmedfawzyjr) | Lead Maintainer | June 2026 |
| *You could be here!* | — | Maintainer | — |

**Become a maintainer**: Contribute 3+ PRs and show consistent, high-quality engagement. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License of Governance

This governance document is itself open for community review and amendment. It is part of the MIT-licensed Halal OS repository.

---

<div align="center">

*"The best of people are those who are most beneficial to people."*
— **Prophet Muhammad ﷺ**

</div>
