# Contributing to Halal OS / دليل المساهمة في نظام التشغيل الحلال

Welcome to the Halal OS contributor project! Thank you for dedicating your engineering skills to building a secure, privacy-first, and Islamic-native operating system stack.

---

## 1. Core Engineering Conventions / المبادئ الهندسية الأساسية

### A. Memory Safety (Rust)
All systems-level daemons, security layers, window compositor bindings, and package installer actions MUST be built in **Rust** to ensure memory safety and prevent CVE buffer overflow vulnerabilities.

### B. Cloud Concurrency (Go)
All sync services, authentication routing modules (Keycloak wrappers), and storage API managers MUST be built in **Go** to leverage fast compilation times and clean goroutine concurrency.

### C. On-Device AI Processing (Python)
All speech transcribers (Whisper integrations) and speech-to-text synthesis pipelines MUST target **local inference** (no external telemetry cloud logs allowed).

---

## 2. Islamic Domain Conventions / المعايير الإسلامية للمساهمة

- **Zero Telemetry Policies**: Absolutely no background data collection or user profiling is permitted. Every daemon must check for telemetry hooks and block outbound analytics requests.
- **Accurate Astronomical Schedules**: Prayer schedules should use authenticated formulas (double-checked against local state surveyors: Egyptian general survey, MWL, or ISNA conventions).
- **Pure Financial Computations**: Zakat calculators must adhere strictly to Fiqh principles (2.5% lunar year wealth holdings matching the 85g gold Nisab threshold).

---

## ٣. إرشادات المساهمة للمطورين باللغة العربية

مرحباً بك في مشروع نظام التشغيل الحلال! نقدّر مساهمتك البرمجية في بناء نظام تشغيل حر ومفتوح المصدر، مدمج كلياً بالقيم الإسلامية ومعايير الخصوصية القصوى.

### القواعد الأساسية للمطورين:
١. **منع التتبع نهائياً**: يُمنع دمج أي أدوات لجمع البيانات الوصفية أو تتبع سلوك المستخدمين.
٢. **أمان الذاكرة**: نستخدم لغة **رست (Rust)** لبناء الخدمات الأمنية الحساسة لضمان أمان الذاكرة وخلوها من الثغرات.
٣. **التطوير المحلي للذكاء الاصطناعي**: تتم جميع عمليات معالجة اللغات الطبيعية والمساعد الصوتي **محلياً بالكامل** على جهاز المستخدم لضمان سرية البيانات.

---

*بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ — Halal OS is built with intention.*
