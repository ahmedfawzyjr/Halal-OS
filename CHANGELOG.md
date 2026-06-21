# Changelog

All notable changes to the Halal OS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0-alpha] - 2026-06-21

### Added
- **Modernized README.md**: Complete rewrite detailing the project's vision, mission, architecture, security, privacy model, browser strategy, and Roadmap.
- **Community Standards**:
  - `CONTRIBUTING.md` — Detailed instructions for setups, code style conventions, and workflow rules.
  - `CODE_OF_CONDUCT.md` — Faith-based behavioral expectations (Shura, Adab, Ihsan).
  - `SECURITY.md` — Responsible disclosure policy, vulnerability response SLA, and Hall of Fame details.
  - `GOVERNANCE.md` — Consensus-oriented, Shura-based governance structure detailing roles (Contributor to Islamic Advisory Panel).
  - `SUPPORT.md` — Technical support routing and issue troubleshooting guides.
- **GitHub Configurations & Automation**:
  - `FUNDING.yml` — Sponsorship redirects via GitHub Sponsors, Open Collective, and Buy Me a Coffee.
  - Issue templates (`bug_report.yml`, `feature_request.yml`) and Pull Request template (`PULL_REQUEST_TEMPLATE.md`).
  - `.github/dependabot.yml` for automated dependency monitoring across Rust, Go, Python, and Actions.
  - Automated CI workflows for multiple language stacks:
    - `ci-web.yml`: Web simulator linting and styling check.
    - `ci-rust.yml`: Formatting (`cargo fmt`), check (`clippy`), and tests across system modules.
    - `ci-go.yml`: Diagnostics (`go vet`), compilation checks, and testing.
    - `ci-python.yml`: Formatting and syntax validation (`black`, `flake8`).
    - `security-scan.yml`: Security audits (`cargo-audit`, `govulncheck`, `safety`, `trufflehog`, CodeQL).
    - `dependency-updates.yml`: Automerging/approval rules for minor Dependabot PRs.
    - `release.yml`: Automatic release generator for tagged versions.
    - `docs-deploy.yml`: MkDocs deployment wrapper for GitHub Pages.
  - `mkdocs.yml`: Theme and layout configuration for the documentation site.
  - `setup-labels.sh`: Setup script for custom labels.
  - `create_issues.py`: Python automation utility to parse the 175-issue transformation plan and generate creation scripts.
