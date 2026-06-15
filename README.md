# ☪️ Halal OS (هلال)

<div align="center">
  <h3>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h3>
  <p><em>"In the name of Allah, the Most Gracious, the Most Merciful"</em></p>
</div>

<p align="center">
  <img src="favicon.svg" alt="Halal OS Logo" width="120" />
</p>

<p align="center">
  <strong>Halal OS</strong> is a modern, privacy-first, faith-integrated desktop environment concept and web simulator designed specifically for Muslims. It blends state-of-the-art UI/UX patterns (glassmorphic styling, adaptive prayer-time wallpapers, smooth animations) with native, offline-capable Islamic utilities and robust privacy shields.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-gold.svg" alt="License MIT" />
  <img src="https://img.shields.io/badge/Focus-Privacy%20%7C%20Faith-green.svg" alt="Focus" />
  <img src="https://img.shields.io/badge/Platform-Web%20Simulator%20%2F%20Linux%20Concept-darkgreen.svg" alt="Platform" />
</div>

---

## 📸 Desktop Preview & UI Design

Halal OS features a custom interface built on the **HDK (Halal Design Kit)** system, utilizing curated Forest Green and Gold accent scales, custom typography (Inter + Amiri + Noto Sans Arabic), and full support for both RTL (Arabic) and LTR (English) layout directionalities.

### Key Interactive Features in the Web Simulator:
*   **Adaptive Wallpapers:** Dynamic desktop backgrounds that change automatically based on the current local prayer times.
*   **Setup Wizard:** A step-by-step introduction to configure language settings, mathematical prayer calculation methods, and privacy sandboxing profiles.
*   **Maqam Workspace Switcher:** Shift seamlessly between 6 dedicated desktop environments.
*   **Bismillah Launcher:** An elegant application launcher dashboard to search and start system apps.
*   **Insha Notification System:** System notifications that slide in to announce prayer times, security actions, and cloud events.

---

## 📁 Native Apps & Components

### 1. 📁 Hafiz File Manager (100% Complete)
*   **macOS-style Column View:** Dynamic side-by-side pane rendering (Folders → Folder Contents → Deep File Metadata & Deletion Actions).
*   **AI-powered File Search:** Filter documents instantly using natural language keywords (e.g. searching "hadith" scans all folders).
*   **Flexible Tags System:** Categorize files with color-coded badges (e.g., *Faith*, *Secure*, *Personal*) and filter by tags from the toolbar.
*   **Safe Deletion & Trash Auto-cleanup:** Deleted files go to a secure Trash sidebar folder, which can be fully purged using the "Empty Trash" button.
*   **Btrfs Disk Space Widget:** Built-in sidebar storage card rendering partition statistics.
*   **Quick Preview (Spacebar):** Press the `Spacebar` to instantly preview any selected file overlay without launching an external app.
*   **Cloud Sync Status:** Clear indicators show sync states per file with *Halal Cloud*.

### 2. 🕌 Islamic Native Suite
*   **Prayer Times (Athan):** Real-time countdown clock, customizable Calculation Methods (6 methods), automatic coordinate updates, and an audio Athan trigger.
*   **Quran Reader:** Supports audio recitations from multiple Qaris, visual sound wave animations, search, bookmarks, and a fully readable Arabic text panel.
*   **Qibla Finder:** Interactive Qibla compass dial using mock GPS coordinates.
*   **Zakat Calculator:** Easily calculate holdings for Gold, Silver, cash, and business assets against live-updating Nisab limits.
*   **Hijri Calendar:** Dual Gregorian-Hijri calendar system marking major Islamic seasons and holidays.
*   **Haram Browser Blocker:** Prevents connections to restricted sites and triggers visual warning overlays inside the browser.

### 3. 🔒 Amanah Privacy Shield
*   **System-Wide Privacy Score:** Dynamic score calculator reacting to active settings.
*   **Flatpak Sandboxing (halalbox):** Concept for application-level isolation.
*   **Tor Mode & VPN Toggles:** Quick controls to encrypt internet requests.
*   **Network Dot Indicators:** Active security levels (Green/Yellow/Red) shown per program window.

### 4. 💻 Kalam Terminal & Kalam Browser
*   **Kalam Terminal:** Dark-mode tabbed terminal supporting horizontal/vertical splits, custom themes, and built-in Islamic widgets (Ramadan Countdown & Prayer banner).
*   **Halal Browser:** Privacy-centric browser simulator featuring visual tab management, ad/tracker counter gauges, and split-page views.

---

## 🛠️ Technology Stack

The Halal OS Web Simulator and concept files are structured as follows:
*   **Frontend core:** Vanilla HTML5, CSS3 Custom Properties (Forest/Gold theme scales), and ES6+ Javascript.
*   **Icons:** Tabler Icons library.
*   **Fonts:** Google Fonts (Amiri, Noto Sans Arabic, Inter, JetBrains Mono).
*   **Services Framework (Concepts):**
    *   `kernel/` (C/LSM Linux Security Modules Concept)
    *   `security/` & `package-manager/` (Rust-based backends)
    *   `cloud/` & `app-store/` (Go microservices)

---

## 🚀 Getting Started

To run the Halal OS Web Simulator locally on your computer:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ahmedfawzyjr/Halal-OS.git
    cd Halal-OS
    ```

2.  **Start a local HTTP server:**
    To bypass browser security limits for local files (`file://` protocol restrictions), serve the root directory using Python:
    ```bash
    python -m http.server 8888
    ```

3.  **Open the simulator:**
    Navigate to `http://localhost:8888` in your favorite web browser.

---

## ⚖️ License & Contributions

Distributed under the **MIT License**. Contributions to the design system, app integrations, and translation grids are highly welcome. 

*May Allah bless this effort.*
