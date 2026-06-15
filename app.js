// ☪ HALAL OS - CORE SIMULATOR LOGIC

// --- 1. LOCALIZATION DICTIONARY ---
const translations = {
  en: {
    langName: "English",
    dir: "ltr",
    titleSettings: "Tazkiyah Settings",
    titleFiles: "Hafiz File Manager",
    titleTerminal: "Kalam Terminal",
    titleBrowser: "Halal Browser",
    titleAmina: "Amina AI Assistant",
    titleIslamic: "Islamic Native Suite",
    
    // Setup Wizard
    lblSetupBack: "Back",
    lblSetupNext: "Continue",
    lblSetupLaunch: "Launch Halal OS",
    txtSetupPTitle: "Prayer Calculation Method",
    txtSetupPDesc: "Configure the calculation method used to compute daily prayer times according to local conventions.",
    txtSetupPrTitle: "Privacy & Protection Profile",
    txtSetupPrDesc: "Halal OS is privacy-first by default. Fine-tune your security configuration here.",
    txtSetupFTitle: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    txtSetupFDesc: "In the name of Allah, the Most Gracious, the Most Merciful",
    txtSetupFSub: "Your Halal OS desktop is configured and ready. Enjoy a secure, modern, and faith-integrated desktop environment.",

    // Settings Sidebar & Buttons
    lblSetNavGeneral: "General",
    lblSetNavPrivacy: "Privacy",
    lblSetNavIslamic: "Faith Settings",
    lblSetNavAppearance: "Appearance",
    lblSetNavHdk: "HDK Lab",
    lblSetGenTitle: "System Configuration",
    lblSetGenLang: "System Language",
    lblSetGenLangDesc: "Switch layout direction and UI language",
    lblSetGenVer: "Halal OS Version",
    lblSetPrivTitle: "Amanah Privacy Dashboard",
    lblSetPrivScore: "Privacy Score: High Protection",
    lblSetPrivScoreDesc: "All system analytics disabled, app sandbox verified.",
    lblSetPrivShield: "halalfire Firewall Shield",
    lblSetPrivShieldDesc: "Filters network requests, block ad-trackers system-wide",
    lblSetPrivTelemetry: "Block Telemetry & Logs",
    lblSetPrivTelemetryDesc: "Intercept and deny metadata collection by package mirrors",
    lblSetPrivSandbox: "Flatpak App Isolation (halalbox)",
    lblSetPrivSandboxDesc: "Strictly isolate third-party apps in security sandboxes",
    lblSetIslTitle: "Islamic Native Preferences",
    lblSetIslCalc: "Calculation Method",
    lblSetIslCalcDesc: "Modify geographical prayer angle parameters",
    lblSetIslAdhan: "System Adhan Sound",
    lblSetIslAdhanDesc: "Play full Adhan call during prayer times",
    lblSetIslLoc: "Mock GPS Coordinates",
    lblSetIslLocDesc: "Set system latitude/longitude for Qibla calculation",
    lblSetAppTitle: "Visual Customization",
    lblSetAppTheme: "System Theme",
    lblSetAppThemeDesc: "Toggle clean dark mode or light modes",
    lblSetAppWp: "Adaptive Wallpaper",
    lblSetAppWpDesc: "Automatically adapt desktop background to prayer intervals",
    lblSetAppMotion: "Reduced Motion System",
    lblSetAppMotionDesc: "Deactivate dynamic desktop transition animations",
    
    // HDK Lab Tab L10n
    lblSetHdkTitle: "Halal Design Kit (HDK) Specimen",
    lblSetHdkDesc: "Standard component specifications defined in the GUI Improvement Plan.",
    lblHdkBtns: "HDK Buttons",
    lblHdkControls: "HDK Slider & Switches",
    lblHdkCrescent: "Crescent Progress Indicator",
    lblHdkCrescentDesc: "Crescent shape maps remaining intervals prior to Adhan alerts.",

    // File Manager
    lblFileNavHome: "Home",
    lblFileNavIslamic: "Islamic Docs",
    lblFileNavSecurity: "Security Core",
    lblFileNavVault: "Faith Vault",
    lblFileVaultTitle: "Faith Vault Locked",
    lblFileVaultDesc: "Enter password to unlock private Zakat and Hajj records.",
    lblFileVaultBtn: "Unlock Vault",

    // Islamic App Tab Titles
    lblIslNavQuran: "Quran Reader",
    lblIslNavPrayer: "Prayer Times",
    lblIslNavQibla: "Qibla Finder",
    lblIslNavZakat: "Zakat Calc",
    lblIslNavCalendar: "Calendar",

    // Islamic Apps Inner
    lblQuranTafsirShow: "Show Tafsir",
    lblQuranTafsirHide: "Hide Tafsir",
    lblPrayerListTitle: "Daily Prayers - Cairo, Egypt",
    lblPrayerCalcIndicator: "Method: Authority of Survey",
    lblQiblaTitle: "Qibla Direction (AR Compass)",
    lblQiblaAngle: "Qibla angle from North: 136° East",
    lblQiblaDesc: "Rotate your device or mock compass to align red needle directly on Kaaba icon.",
    lblQiblaBtn: "Simulate Calibration",
    lblZakatTitle: "Zakat Nisab Obligation Calculator",
    lblZakatNisabVal: "Live Nisab threshold (85g Gold):",
    lblZakatGoldVal: "Gold price per gram:",
    lblZakatISavings: "Total Savings / Cash (held for 1 full Lunar year)",
    lblZakatIGold: "Value of owned Gold & Silver assets",
    lblZakatIInvest: "Value of investment funds and stocks",
    lblZakatResNisab: "Nisab Obligation Status",
    lblZakatResDue: "Zakat Due (2.5%)",
    lblCalTitle: "Hijri Calendar Sync",
    lblCalHijriMonth: "Dhul-Hijjah 1447",
    lblCalHTitle: "Upcoming Holiday: Eid al-Adha",
    lblCalHDesc: "Occurs on 10 Dhul-Hijjah 1447. Notification triggers automatically.",
    lblCalHTag: "Eid Holiday",

    // Launcher Category Buttons
    lblLchAll: "All Apps",
    lblLchFaith: "Faith Native",
    lblLchSys: "System Tools",

    // Privacy Dashboard PSD
    lblPsdTitle: "halalfire Network Audit",
    lblPsdStatus: "Active Protection",
    lblPsdScoreTitle: "Security Core Health",
    lblPsdScoreDesc: "Zero telemetry, local DNS resolution",
    lblPsdBlockTitle: "Block Log (Live)",
    lblPsdBtn: "Manage Permissions",

    // Browser Shield BSD
    lblBshTitle: "Browser Protection",
    lblBshTrackers: "14 Trackers Blocked",
    lblBshDns: "Secure DoH Active",
    lblBshFilter: "Faith Filter: Strict",
    lblBrQuranTitle: "Islamic Web Hub",
    lblBrQuranDesc: "Welcome to the integrated Islamic directory. Search across verses, Hadith collections, and fatwas.",
    lblBrQuranBtn: "Search",

    // Dock Tooltips
    tipBismillah: "Bismillah Menu",
    tipSettings: "Settings",
    tipFiles: "File Manager",
    tipTerminal: "Terminal",
    tipBrowser: "Browser",
    tipQuran: "Quran Reader",
    tipPrayer: "Prayer Times",
    tipQibla: "Qibla Finder",
    tipZakat: "Zakat Calc",
    tipAmina: "Amina AI",

    // Added components for GUI Improvement Plan
    lblIlmTitle: "Ilm Panel",
    lblIlmVerse: "Verse of the Day",
    lblIlmWisdom: "Daily Wisdom",
    lblIlmNotes: "Local Notes",
    lblQsTitle: "Quick Settings",
    lblQsFw: "Firewall Shield",
    lblQsDns: "Secure DoH",
    lblQsSetBtn: "All Settings",
    lblMaqamTitle: "Maqam Workspace",
    lblIlmHadithText: "\"The best of you are those who learn the Quran and teach it.\" (Bukhari)"
  },
  ar: {
    langName: "العربية",
    dir: "rtl",
    titleSettings: "إعدادات التزكية",
    titleFiles: "مدير الملفات الحافظ",
    titleTerminal: "موجه الأوامر القلم",
    titleBrowser: "متصفح الحلال",
    titleAmina: "مساعد أمينة الذكي",
    titleIslamic: "حزمة الخدمات الإسلامية",
    
    // Setup Wizard
    lblSetupBack: "رجوع",
    lblSetupNext: "التالي",
    lblSetupLaunch: "تشغيل نظام الحلال",
    txtSetupPTitle: "طريقة حساب أوقات الصلاة",
    txtSetupPDesc: "تكوين الطريقة المستخدمة لحساب أوقات الصلاة اليومية بناءً على المعايير المحلية.",
    txtSetupPrTitle: "ملف الخصوصية والحماية",
    txtSetupPrDesc: "نظام الحلال يحمي خصوصيتك افتراضياً. قم بضبط تفضيلات الأمان والخصوصية هنا.",
    txtSetupFTitle: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    txtSetupFDesc: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    txtSetupFSub: "سطح مكتب نظام الحلال جاهز الآن للعمل. نتمنى لك تجربة آمنة ومتكاملة مع قيمك العقائدية.",

    // Settings Sidebar & Buttons
    lblSetNavGeneral: "عام",
    lblSetNavPrivacy: "الخصوصية",
    lblSetNavIslamic: "إعدادات العقيدة",
    lblSetNavAppearance: "المظهر",
    lblSetNavHdk: "مختبر المكونات",
    lblSetGenTitle: "تكوين النظام",
    lblSetGenLang: "لغة النظام",
    lblSetGenLangDesc: "تبديل اتجاه التخطيط ولغة واجهة المستخدم",
    lblSetGenVer: "إصدار نظام الحلال",
    lblSetPrivTitle: "لوحة تحكم خصوصية الأمانة",
    lblSetPrivScore: "درجة الخصوصية: حماية عالية",
    lblSetPrivScoreDesc: "تم تعطيل جميع تحليلات النظام، والتحقق من عزل التطبيقات.",
    lblSetPrivShield: "جدار الحماية الحلال (halalfire)",
    lblSetPrivShieldDesc: "تصفية اتصالات الشبكة وحظر أدوات التتبع على مستوى النظام",
    lblSetPrivTelemetry: "حظر القياس عن بعد واللوائح",
    lblSetPrivTelemetryDesc: "اعتراض ومنع جمع البيانات الوصفية بواسطة خوادم الحزم",
    lblSetPrivSandbox: "عزل تطبيقات Flatpak (halalbox)",
    lblSetPrivSandboxDesc: "عزل التطبيقات الخارجية تماماً في بيئات معزولة وآمنة",
    lblSetIslTitle: "تفضيلات الخدمة الإسلامية",
    lblSetIslCalc: "طريقة الحساب",
    lblSetIslCalcDesc: "تعديل معلمات الحساب الجغرافية للصلاة",
    lblSetIslAdhan: "صوت الأذان للنظام",
    lblSetIslAdhanDesc: "تشغيل صوت الأذان كاملاً عند دخول وقت الصلاة",
    lblSetIslLoc: "إحداثيات تحديد الموقع",
    lblSetIslLocDesc: "ضبط خطوط الطول والعرض لحساب اتجاه القبلة وأوقات الصلاة",
    lblSetAppTitle: "تخصيص المظهر",
    lblSetAppTheme: "نمط النظام",
    lblSetAppThemeDesc: "التبديل بين النمط المظلم الهادئ والنمط الفاتح النقي",
    lblSetAppWp: "الخلفية التكيفية",
    lblSetAppWpDesc: "تغيير خلفية سطح المكتب تلقائياً بناءً على أوقات الصلاة",
    lblSetAppMotion: "تقليل الحركة",
    lblSetAppMotionDesc: "إيقاف حركات انتقال سطح المكتب والتأثيرات الديناميكية",
    
    // HDK Lab Tab L10n
    lblSetHdkTitle: "نموذج حزمة تصميم الحلال (HDK)",
    lblSetHdkDesc: "مواصفات المكونات الموحدة المحددة في خطة تحسين واجهة المستخدم الرسومية.",
    lblHdkBtns: "أزرار HDK",
    lblHdkControls: "شريط التمرير والمفاتيح",
    lblHdkCrescent: "مؤشر التقدم الهلالي",
    lblHdkCrescentDesc: "شكل هلالي يوضح الفترات المتبقية قبل تنبيهات الأذان.",

    // File Manager
    lblFileNavHome: "المنزل",
    lblFileNavIslamic: "الوثائق الإسلامية",
    lblFileNavSecurity: "الأمان الأساسي",
    lblFileNavVault: "خزنة العقيدة",
    lblFileVaultTitle: "خزنة العقيدة مغلقة",
    lblFileVaultDesc: "أدخل كلمة المرور لفك تشفير وثائق الزكاة والحج الخاصة بك.",
    lblFileVaultBtn: "فتح الخزنة",

    // Islamic App Tab Titles
    lblIslNavQuran: "قارئ القرآن",
    lblIslNavPrayer: "مواقيت الصلاة",
    lblIslNavQibla: "اتجاه القبلة",
    lblIslNavZakat: "حساب الزكاة",
    lblIslNavCalendar: "التقويم",

    // Islamic Apps Inner
    lblQuranTafsirShow: "إظهار التفسير",
    lblQuranTafsirHide: "إخفاء التفسير",
    lblPrayerListTitle: "الصلوات اليومية - القاهرة، مصر",
    lblPrayerCalcIndicator: "الطريقة: الهيئة العامة المصرية للمساحة",
    lblQiblaTitle: "اتجاه القبلة (البوصلة التفاعلية)",
    lblQiblaAngle: "زاوية القبلة من الشمال: 136 درجة شرقاً",
    lblQiblaDesc: "قم بتدوير جهازك أو البوصلة لتوجيه الإبرة الحمراء مباشرة نحو الكعبة.",
    lblQiblaBtn: "محاكاة معايرة البوصلة",
    lblZakatTitle: "حاسبة نصاب الزكاة والالتزام بها",
    lblZakatNisabVal: "حد النصاب الفعلي (85 جرام ذهب):",
    lblZakatGoldVal: "سعر جرام الذهب الحالي:",
    lblZakatISavings: "إجمالي المدخرات والنقد (الذي حال عليه الحول)",
    lblZakatIGold: "قيمة مدخرات الذهب والفضة المملوكة",
    lblZakatIInvest: "قيمة الصناديق الاستثمارية والأسهم",
    lblZakatResNisab: "حالة وجوب النصاب",
    lblZakatResDue: "الزكاة المستحقة (2.5%)",
    lblCalTitle: "مزامنة التقويم الهجري",
    lblCalHijriMonth: "ذو الحجة 1447",
    lblCalHTitle: "المناسبة القادمة: عيد الأضحى المبارك",
    lblCalHDesc: "يوافق 10 ذو الحجة 1447. سيتم تفعيل التنبيه تلقائياً.",
    lblCalHTag: "عطلة العيد",

    // Launcher Category Buttons
    lblLchAll: "كل التطبيقات",
    lblLchFaith: "الخدمات الإسلامية",
    lblLchSys: "أدوات النظام",

    // Privacy Dashboard PSD
    lblPsdTitle: "تدقيق الشبكة للحلال",
    lblPsdStatus: "الحماية نشطة",
    lblPsdScoreTitle: "صحة أمان النظام",
    lblPsdScoreDesc: "تتبع معدوم، استخدام خوادم DNS محلية",
    lblPsdBlockTitle: "سجل الحظر (مباشر)",
    lblPsdBtn: "إدارة أذونات التطبيقات",

    // Browser Shield BSD
    lblBshTitle: "حماية المتصفح",
    lblBshTrackers: "تم حظر 14 متتبعاً",
    lblBshDns: "تشفير DoH نشط",
    lblBshFilter: "مرشح المحتوى: صارم",
    lblBrQuranTitle: "بوابة الشبكة الإسلامية",
    lblBrQuranDesc: "مرحباً بك في الدليل الإسلامي المتكامل. ابحث في الآيات والأحاديث والفتاوى.",
    lblBrQuranBtn: "بحث الآيات",

    // Dock Tooltips
    tipBismillah: "قائمة بسم الله",
    tipSettings: "الإعدادات",
    tipFiles: "مدير الملفات",
    tipTerminal: "موجه الأوامر",
    tipBrowser: "المتصفح",
    tipQuran: "قارئ القرآن",
    tipPrayer: "مواقيت الصلاة",
    tipQibla: "اتجاه القبلة",
    tipZakat: "حساب الزكاة",
    tipAmina: "مساعد أمينة",

    // Added components for GUI Improvement Plan
    lblIlmTitle: "لوحة العلم",
    lblIlmVerse: "آية اليوم",
    lblIlmWisdom: "حكمة اليوم",
    lblIlmNotes: "الملاحظات المحلية",
    lblQsTitle: "الإعدادات السريعة",
    lblQsFw: "درع الحماية",
    lblQsDns: "تشفير DoH",
    lblQsSetBtn: "كل الإعدادات",
    lblMaqamTitle: "مقام بيئة العمل",
    lblIlmHadithText: "\"خياركم من تعلم القرآن وعلمه.\" (البخاري)"
  },
  ur: {
    langName: "اردو",
    dir: "rtl",
    titleSettings: "تزکیہ ترتیبات",
    titleFiles: "حافظ فائل مینیجر",
    titleTerminal: "کلام ٹرمینل",
    titleBrowser: "حلال براؤزر",
    titleAmina: "آمنہ اے آئی اسسٹنٹ",
    titleIslamic: "اسلامی سروسز سوٹ",
    
    // Setup Wizard
    lblSetupBack: "واپس",
    lblSetupNext: "اگلا",
    lblSetupLaunch: "حلال او ایس شروع کریں",
    txtSetupPTitle: "نماز کا حساب کتاب کا طریقہ",
    txtSetupPDesc: "مقامی رسوم و رواج کے مطابق روزانہ نماز کے اوقات کا حساب لگانے کے طریقے کو ترتیب دیں۔",
    txtSetupPrTitle: "رازداری اور تحفظ پروفائل",
    txtSetupPrDesc: "حلال او ایس پہلے رازداری پر قائم ہے۔ اپنی سیکیورٹی ترتیبات یہاں ترتیب دیں۔",
    txtSetupFTitle: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    txtSetupFDesc: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    txtSetupFSub: "آپ کا حلال او ایس ڈیسک ٹاپ تیار ہے۔ ایک محفوظ اور اسلامی ڈیسک ٹاپ کا تجربہ حاصل کریں۔",

    // Settings Sidebar & Buttons
    lblSetNavGeneral: "عام",
    lblSetNavPrivacy: "رازداری",
    lblSetNavIslamic: "عقیدہ ترتیبات",
    lblSetNavAppearance: "ظاہری شکل",
    lblSetNavHdk: "حزمہ نمونہ",
    lblSetGenTitle: "سیسم کنفیگریشن",
    lblSetGenLang: "سسٹم کی زبان",
    lblSetGenLangDesc: "ترتیب کی سمت اور زبان کو تبدیل کریں",
    lblSetGenVer: "حلال او ایس ورژن",
    lblSetPrivTitle: "امانۃ رازداری ڈیش بورڈ",
    lblSetPrivScore: "رازداری سکور: اعلیٰ ترین سیکیورٹی",
    lblSetPrivScoreDesc: "سسٹم کے تمام تجزئیے بند ہیں اور سیکیورٹی تصدیق شدہ ہے۔",
    lblSetPrivShield: "حلال فائر فائر وال شیلڈ",
    lblSetPrivShieldDesc: "نیٹ ورک ٹریفک کو مانیٹر کریں اور ٹریکرز کو بلاک کریں",
    lblSetPrivTelemetry: "ٹیلی میٹری بلاک کریں",
    lblSetPrivTelemetryDesc: "پیکیج سرورز کی طرف سے معلومات جمع کرنے پر پابندی لگائیں",
    lblSetPrivSandbox: "ایپلی کیشنز تنہائی (halalbox)",
    lblSetPrivSandboxDesc: "ایپس کو سیکیورٹی سینڈ باکسز میں الگ رکھیں",
    lblSetIslTitle: "اسلامی ترجیحات",
    lblSetIslCalc: "حساب کا طریقہ",
    lblSetIslCalcDesc: "نماز کے اوقات کے حساب کے لیے جغرافیائی پیرامیٹرز تبدیل کریں",
    lblSetIslAdhan: "سسٹم اذان کی آواز",
    lblSetIslAdhanDesc: "نماز کے وقت مکمل اذان کی آواز چلائیں",
    lblSetIslLoc: "مقام کی تفصیلات",
    lblSetIslLocDesc: "قبلہ اور نماز کے اوقات کے حساب کے لیے عرض بلد اور طول بلد ترتیب دیں",
    lblSetAppTitle: "ظاہری ترتیبات",
    lblSetAppTheme: "سسٹم تھیم",
    lblSetAppThemeDesc: "ڈارک موڈ یا لائٹ موڈ میں تبدیل کریں",
    lblSetAppWp: "موافقت پذیر وال پیپر",
    lblSetAppWpDesc: "نماز کے اوقات کے مطابق وال پیپر خودکار تبدیل کریں",
    lblSetAppMotion: "کم حرکت والا سسٹم",
    lblSetAppMotionDesc: "سرف ڈیسک ٹاپ حرکات کو غیر فعال کریں",
    
    // HDK Lab Tab L10n
    lblSetHdkTitle: "حلال ڈیزائن کٹ (HDK) کا نمونہ",
    lblSetHdkDesc: "جیوئی امپروومنٹ پلان میں متعین کردہ معیاری اجزاء کی تفصیلات۔",
    lblHdkBtns: "HDK بٹن",
    lblHdkControls: "سلائیڈر اور سوئچز",
    lblHdkCrescent: "ہلال نما پروگریس انڈیکیٹر",
    lblHdkCrescentDesc: "اذان کے انتباہات سے پہلے باقی ماندہ وقت کو ظاہر کرنے والی ہلال کی شکل۔",

    // File Manager
    lblFileNavHome: "ہوم",
    lblFileNavIslamic: "اسلامی دستاویزات",
    lblFileNavSecurity: "سیکیورٹی کور",
    lblFileNavVault: "عقیدہ والٹ",
    lblFileVaultTitle: "عقیدہ والٹ مقفل ہے",
    lblFileVaultDesc: "زکوٰۃ اور حج کے ذاتی ریکارڈ دیکھنے کے لیے پاس ورڈ درج کریں۔",
    lblFileVaultBtn: "والٹ کھولیں",

    // Islamic App Tab Titles
    lblIslNavQuran: "قرآن ریڈر",
    lblIslNavPrayer: "نماز کے اوقات",
    lblIslNavQibla: "قبلہ نما",
    lblIslNavZakat: "زکوٰۃ کیلکولیٹر",
    lblIslNavCalendar: "کیلنڈر",

    // Islamic Apps Inner
    lblQuranTafsirShow: "تفسیر دکھائیں",
    lblQuranTafsirHide: "تفسیر چھپائیں",
    lblPrayerListTitle: "روزانہ کی نمازیں - قاہرہ، مصر",
    lblPrayerCalcIndicator: "طریقہ: مصری جنرل اتھارٹی برائے سروے",
    lblQiblaTitle: "قبلہ کی سمت (بوصلہ تفاعلی)",
    lblQiblaAngle: "شمال سے قبلہ کا زاویہ: 136 ڈگری مشرق",
    lblQiblaDesc: "سرخ سوئی کو براہ راست خانہ کعبہ کے نشان پر سیدھا کرنے کے لیے بوصلہ کو گھمائیں۔",
    lblQiblaBtn: "بوصلہ کی ترتیب درست کریں",
    lblZakatTitle: "زکوٰۃ نصاب کیلکولیٹر",
    lblZakatNisabVal: "حد نصاب (85 گرام سونا):",
    lblZakatGoldVal: "سونے کی فی گرام قیمت:",
    lblZakatISavings: "کل نقد رقم اور بچت (جس پر ایک قمری سال گزر چکا ہو)",
    lblZakatIGold: "ملکیتی سونے اور چاندی کے اثاثوں کی مالیت",
    lblZakatIInvest: "انویسٹمنٹ فنڈز اور شیئرز کی مالیت",
    lblZakatResNisab: "وجوب نصاب کی حیثیت",
    lblZakatResDue: "قابل ادائیگی زکوٰۃ (2.5%)",
    lblCalTitle: "ہجری کیلنڈر مطابقت",
    lblCalHijriMonth: "ذو الحجہ 1447",
    lblCalHTitle: "اگلی تعطیل: عید الاضحیٰ",
    lblCalHDesc: "عید الاضحیٰ 10 ذو الحجہ 1447 کو ہوگی۔ نوٹیفکیشن خودکار ظاہر ہوگا۔",
    lblCalHTag: "عید تعطیل",

    // Launcher Category Buttons
    lblLchAll: "تمام ایپس",
    lblLchFaith: "اسلامی ایپس",
    lblLchSys: "سسٹم ٹولز",

    // Privacy Dashboard PSD
    lblPsdTitle: "حلال فائر نیٹ ورک آڈٹ",
    lblPsdStatus: "تحفظ فعال ہے",
    lblPsdScoreTitle: "سیکیورٹی کور ہیلتھ",
    lblPsdScoreDesc: "زیرو ٹریکنگ، مقامی DNS",
    lblPsdBlockTitle: "بلاک لاگ (لائیو)",
    lblPsdBtn: "ایپلی کیشنز کے اختیارات",

    // Browser Shield BSD
    lblBshTitle: "براؤزر تحفظ",
    lblBshTrackers: "14 ٹریکرز بلاک کیے گئے",
    lblBshDns: "محفوظ DoH فعال",
    lblBshFilter: "فلٹرنگ: سخت",
    lblBrQuranTitle: "اسلامی ویب پورٹل",
    lblBrQuranDesc: "انٹیگریٹڈ اسلامی ڈائریکٹری میں خوش آمدید۔ آیات، احادیث اور فتاویٰ تلاش کریں۔",
    lblBrQuranBtn: "آیات سرچ کریں",

    // Dock Tooltips
    tipBismillah: "بسم اللہ مینو",
    tipSettings: "ترتیبات",
    tipFiles: "فائل مینیجر",
    tipTerminal: "ٹرمینل",
    tipBrowser: "براؤزر",
    tipQuran: "قرآن ریڈر",
    tipPrayer: "نماز کے اوقات",
    tipQibla: "قبلہ نما",
    tipZakat: "زکوٰۃ کیلکولیٹر",
    tipAmina: "مساعد آمنہ",

    // Added components for GUI Improvement Plan
    lblIlmTitle: "علم پینل",
    lblIlmVerse: "آج کی آیت",
    lblIlmWisdom: "روزانہ کی حکمت",
    lblIlmNotes: "لوکل نوٹس",
    lblQsTitle: "فوری ترتیبات",
    lblQsFw: "فائر وال شیلڈ",
    lblQsDns: "محفوظ DoH",
    lblQsSetBtn: "تمام ترتیبات",
    lblMaqamTitle: "مقام ورک اسپیس",
    lblIlmHadithText: "\"تم میں سے بہترین وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔\" (بخاری)"
  }
};

// State Machine
let setupState = {
  step: 0,
  lang: "en",
  dir: "ltr",
  prayerMethod: "egypt",
  firewallEnabled: true,
  aminaEnabled: true,
  syncEnabled: true,
  adaptiveWp: true,
  reducedMotion: false,
  theme: "dark"
};

// Window depth index tracker
let maxZIndex = 100;
let openWindows = new Set();

// Dynamic state extensions for GUI Improvement Plan
let isFilesListView = false;
let filesDualPaneActive = false;
let activeFilesPane = "primary"; // "primary" or "secondary"
let primaryPaneFolder = "home";
let secondaryPaneFolder = "islamic";
let selectedFileName = null; // for Quick Look

// Terminal state extensions
let terminalTabs = [
  { id: 0, title: "Kalam-1" }
];
let activeTerminalTabId = 0;
let terminalSplits = 0; // 0 = none

// Browser state extensions
let browserTabs = [
  { id: 0, title: "Quran Web", url: "https://quran.halalos.org", page: "quran" },
  { id: 1, title: "Privacy Wiki", url: "https://wiki.halalos.org", page: "wiki" },
  { id: 2, title: "Block Stats", url: "https://audit.halalos.org", page: "audit" }
];
let activeBrowserTabId = 0;
let browserSplitActive = false;

// Qibla Finder Drag State
let qiblaRotationAngle = 136; // initial angle
let isDraggingQibla = false;

// Quran Audio State
let quranAudioPlaying = false;
let audioWaveAnimationId = null;

// Ramadan / Fasting Tracker
let ramadanModeActive = false;
let fastingInterval = null;

// Dock Context Menu active target
let contextMenuTargetAppId = null;
let appPermissions = {
  "window-settings": { network: false, files: true, camera: false },
  "window-files": { network: false, files: true, camera: false },
  "window-terminal": { network: true, files: true, camera: false },
  "window-browser": { network: true, files: false, camera: false },
  "window-amina": { network: false, files: false, camera: true },
  "window-islamic": { network: false, files: false, camera: false }
};

// System Simulated Prayer Times (Cairo standard calculations mock)
const prayerSchedule = {
  Fajr: "04:12",
  Shuruq: "05:43",
  Dhuhr: "12:00",
  Asr: "15:28",
  Maghrib: "18:41",
  Isha: "20:06"
};

// Graded authentic Hadith collections list
const internalHadithDb = [
  { text: "\"Actions are judged by intentions...\" (Sahih al-Bukhari 1)", grade: "Sahih" },
  { text: "\"None of you truly believes until he wishes for his brother what he wishes for himself.\" (Sahih al-Bukhari 13)", grade: "Sahih" },
  { text: "\"The best among you are those who have the best manners and character.\" (Sahih al-Bukhari 6035)", grade: "Sahih" },
  { text: "\"Allah does not look at your appearance or wealth, but rather He looks at your hearts and deeds.\" (Sahih Muslim 2564)", grade: "Sahih" },
  { text: "\"A good word is charity.\" (Sahih al-Bukhari 2989)", grade: "Sahih" }
];

// Quran Surahs local content data
const surahData = {
  1: {
    name: "Surah Al-Fatiha",
    arabicName: "سورة الفاتحة",
    verses: [
      { num: 1, ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.", tafsir: "The opening Surah of the Quran, starting with Allah's name. Essential to recite in every prayer unit." },
      { num: 2, ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", en: "[All] praise is [due] to Allah, Lord of the worlds -", tafsir: "Expression of supreme gratitude for Allah's grace and sustainment of all creation." },
      { num: 3, ar: "الرَّحْمَنِ الرَّحِيمِ", en: "The Entirely Merciful, the Especially Merciful,", tafsir: "Declaration of His mercy, which encompasses all creations and is specialized to the believers." },
      { num: 4, ar: "مَالِكِ يَوْمِ الدِّينِ", en: "Sovereign of the Day of Recompense.", tafsir: "Signifies His absolute authority and judgment on the Day of Resurrection." }
    ]
  },
  112: {
    name: "Surah Al-Ikhlas",
    arabicName: "سورة الإخلاص",
    verses: [
      { num: 1, ar: "قُلْ هُوَ اللَّهُ أَحَدٌ", en: "Say, \"He is Allah, [who is] One,", tafsir: "Declares Tawhid — absolute oneness and unique singularity of God." },
      { num: 2, ar: "اللَّهُ الصَّمَدُ", en: "Allah, the Eternal Refuge.", tafsir: "He is self-sufficient, and all of creation depends on Him for their needs." },
      { num: 3, ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ", en: "He neither begets nor is born,", tafsir: "Denies any offspring or parental lineage, separating Him completely from created attributes." },
      { num: 4, ar: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", en: "Nor is there to Him any equivalent.\"", tafsir: "Nothing is equal, comparable, or rival to Allah in any manner." }
    ]
  },
  113: {
    name: "Surah Al-Falaq",
    arabicName: "سورة الفلق",
    verses: [
      { num: 1, ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", en: "Say, \"I seek refuge in the Lord of daybreak", tafsir: "Seeking shelter in God who splits the darkness with the light of morning." },
      { num: 2, ar: "مِن شَرِّ مَا خَلَقَ", en: "From the evil of that which He created", tafsir: "Refuge from any harm that created entities, human or unseen, might inflict." }
    ]
  },
  114: {
    name: "Surah An-Nas",
    arabicName: "سورة الناس",
    verses: [
      { num: 1, ar: "قُل * أَعُوذُ بِرَبِّ النَّاسِ", en: "Say, \"I seek refuge in the Lord of mankind,", tafsir: "Refuge in the Creator who manages, guides, and owns all of humanity." },
      { num: 2, ar: "مَلِكِ النَّاسِ", en: "The Sovereign of mankind,", tafsir: "Reaffirming His absolute dominion over human affairs." }
    ]
  }
};

// Files data system for Hafiz File Manager
const filesData = {
  home: [
    { name: "welcoming_notes.txt", isDir: false, icon: "ti-file-text", size: "1.2 KB", date: "15 Dhul-H 1447", synced: true, tags: ["Faith"] },
    { name: "islamic_apps.lnk", isDir: false, icon: "ti-link", size: "240 Bytes", date: "15 Dhul-H 1447", synced: true, tags: ["Secure"] },
    { name: "Photos", isDir: true, icon: "ti-folder", size: "3 items", date: "10 Dhul-H 1447", synced: false, tags: [] }
  ],
  islamic: [
    { name: "glossary.json", isDir: false, icon: "ti-braces", size: "675 Bytes", date: "14 Dhul-H 1447", synced: true, tags: ["Faith"] },
    { name: "hadith_bukhari.pdf", isDir: false, icon: "ti-file-text", size: "4.8 MB", date: "08 Dhul-H 1447", synced: true, tags: ["Faith"] },
    { name: "quran_translation_german.txt", isDir: false, icon: "ti-file-text", size: "820 KB", date: "05 Dhul-H 1447", synced: false, tags: ["Faith"] }
  ],
  security: [
    { name: "halalfire.conf", isDir: false, icon: "ti-settings", size: "1.1 KB", date: "15 Dhul-H 1447", synced: true, tags: ["Secure"] },
    { name: "blocked_hosts.db", isDir: false, icon: "ti-database", size: "48 KB", date: "15 Dhul-H 1447", synced: true, tags: ["Secure"] },
    { name: "sandbox_profiles.xml", isDir: false, icon: "ti-code", size: "8.4 KB", date: "12 Dhul-H 1447", synced: false, tags: ["Secure"] }
  ],
  vault: [
    { name: "zakat_obligations_1446.xlsx", isDir: false, icon: "ti-table", size: "22 KB", date: "30 Ramadan 1446", synced: true, tags: ["Faith"] },
    { name: "hajj_travel_documents.pdf", isDir: false, icon: "ti-file-text", size: "2.4 MB", date: "01 Shawwal 1446", synced: true, tags: ["Work"] },
    { name: "personal_charity_ledger.txt", isDir: false, icon: "ti-file-text", size: "4.5 KB", date: "12 Dhul-H 1447", synced: false, tags: ["Faith"] }
  ],
  trash: [
    { name: "unverified_mirror_list.txt", isDir: false, icon: "ti-file-text", size: "1.8 KB", date: "02 Dhul-H 1447", synced: false, tags: [] }
  ]
};

// Active Folder tracker
let currentFolder = "home";
let vaultUnlocked = false;
let isFilesColumnView = false;
let filesSearchQuery = "";
let filesActiveTagFilter = "all";

// --- 2. INITIALIZATION / BOOT PROCESS ---
window.addEventListener("DOMContentLoaded", () => {
  // Simulate system load
  let bootFill = document.getElementById("boot-fill");
  let progress = 0;
  
  let bootInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 20) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(bootInterval);
      setTimeout(() => {
        // Transition Boot -> Setup
        document.getElementById("boot-screen").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("boot-screen").style.display = "none";
          document.getElementById("setup-wizard").classList.add("active");
        }, 800);
      }, 300);
    }
    bootFill.style.width = progress + "%";
  }, 120);

  // Initialize Clock & Date loop
  updateTopClock();
  setInterval(updateTopClock, 1000);

  // Initialize draggable windows
  makeWindowsDraggable();

  // Populate first folders
  renderFiles();

  // Set up terminal click listener
  const termClick = document.getElementById("terminal-click-area-0");
  if (termClick) {
    termClick.addEventListener("click", () => {
      focusTerminal(0);
    });
  }

  // Populate Quran initial surah
  loadQuranSurah("1");

  // Populate Zakat default calculations
  calculateZakat();

  // Generate Hijri Calendar Days
  renderHijriCalendar();

  // HDK Specimen slider update
  updateHDKSlider(70);

  // Init dock right-click context menu
  initDockContextMenus();

  // Init files quick look keyboard listener
  initQuickLookKeyboard();

  // Init Qibla drag calibration handle
  initQiblaDragRotation();

  // Draw flat canvas waveform line
  stopWaveformAnimation();

  // Init global accessibility keyboard navigation
  initKeyboardNavigation();
});

// --- 3. CLOCK & PRAYER SCHEDULER LOGIC ---
function updateTopClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  
  // Convert 12h
  hours = hours % 12;
  hours = hours ? hours : 12; // hour 0 is 12
  
  const timeStr = `${hours}:${minutes} ${ampm}`;
  document.getElementById("top-clock").textContent = timeStr;

  // Render countdown to next prayer
  computeNextPrayerCountdown(now.getHours(), now.getMinutes());
}

function computeNextPrayerCountdown(currHour, currMin) {
  const currTotalMin = currHour * 60 + currMin;
  
  let nextPrayer = "Fajr";
  let minDiff = 0;
  
  // Parse prayer minutes
  const parsedPrayers = {};
  for (let p in prayerSchedule) {
    const [h, m] = prayerSchedule[p].split(":").map(Number);
    parsedPrayers[p] = h * 60 + m;
  }

  // Find next prayer in schedule
  if (currTotalMin < parsedPrayers.Fajr) {
    nextPrayer = "Fajr";
    minDiff = parsedPrayers.Fajr - currTotalMin;
  } else if (currTotalMin < parsedPrayers.Shuruq) {
    nextPrayer = "Shuruq";
    minDiff = parsedPrayers.Shuruq - currTotalMin;
  } else if (currTotalMin < parsedPrayers.Dhuhr) {
    nextPrayer = "Dhuhr";
    minDiff = parsedPrayers.Dhuhr - currTotalMin;
  } else if (currTotalMin < parsedPrayers.Asr) {
    nextPrayer = "Asr";
    minDiff = parsedPrayers.Asr - currTotalMin;
  } else if (currTotalMin < parsedPrayers.Maghrib) {
    nextPrayer = "Maghrib";
    minDiff = parsedPrayers.Maghrib - currTotalMin;
  } else if (currTotalMin < parsedPrayers.Isha) {
    nextPrayer = "Isha";
    minDiff = parsedPrayers.Isha - currTotalMin;
  } else {
    // Wrap around to next day's Fajr (24h in minutes = 1440)
    nextPrayer = "Fajr";
    minDiff = (1440 - currTotalMin) + parsedPrayers.Fajr;
  }

  // Formatting remaining string
  let countdownStr = "";
  if (minDiff >= 60) {
    const hr = Math.floor(minDiff / 60);
    const mn = minDiff % 60;
    countdownStr = `${nextPrayer} in ${hr}h ${mn}m`;
  } else {
    countdownStr = `${nextPrayer} in ${minDiff}m`;
  }

  document.getElementById("top-prayer-text").textContent = countdownStr;
}

// --- 4. SETUP WIZARD STATE MANAGEMENT & L10N ---
function selectSetupLanguage(lang, dir) {
  setupState.lang = lang;
  setupState.dir = dir;

  // Update selection style
  document.querySelectorAll("#slide-lang .setup-btn-option").forEach((btn, idx) => {
    btn.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");
}

function selectSetupPrayerMethod(el, method) {
  setupState.prayerMethod = method;

  // Select radio
  document.querySelectorAll("#slide-prayer .setup-checkbox-item").forEach(item => {
    item.querySelector("input[type='radio']").checked = false;
  });
  el.querySelector("input[type='radio']").checked = true;
}

function nextSetupStep() {
  const steps = document.querySelectorAll(".setup-step-dot");
  const slides = document.querySelectorAll(".setup-slide");
  
  if (setupState.step < 3) {
    // Mark current dot as completed
    steps[setupState.step].classList.remove("active");
    steps[setupState.step].classList.add("completed");

    // Advance step
    setupState.step++;
    
    // Update next dot
    steps[setupState.step].classList.add("active");

    // Update slides visibility
    slides.forEach(slide => slide.classList.remove("active"));
    slides[setupState.step].classList.add("active");

    // Show Back button
    document.getElementById("setup-prev-btn").style.visibility = "visible";

    // If final step, change button text
    if (setupState.step === 3) {
      const btn = document.getElementById("setup-next-btn");
      btn.innerHTML = `<span id="lbl-setup-launch">${translations[setupState.lang].lblSetupLaunch || "Launch Halal OS"}</span> <i class="ti ti-rocket"></i>`;
    }
  } else {
    // Launch! Apply wizard config values to system settings UI
    applyWizardPreferences();
    showInshaNotification("Welcome to Halal OS", "All privacy shields are active and calibrated. Bismillah!", "success");
  }
  
  translateSetupWizard();
}

function prevSetupStep() {
  const steps = document.querySelectorAll(".setup-step-dot");
  const slides = document.querySelectorAll(".setup-slide");
  
  if (setupState.step > 0) {
    // Revert active dots
    steps[setupState.step].classList.remove("active");
    
    // Revert current step
    setupState.step--;
    
    steps[setupState.step].classList.remove("completed");
    steps[setupState.step].classList.add("active");

    // Update slides
    slides.forEach(slide => slide.classList.remove("active"));
    slides[setupState.step].classList.add("active");

    // Restore next button text
    const btn = document.getElementById("setup-next-btn");
    btn.innerHTML = `<span id="lbl-setup-next">Continue</span> <i class="ti ti-arrow-right"></i>`;

    // Hide Back button if at first slide
    if (setupState.step === 0) {
      document.getElementById("setup-prev-btn").style.visibility = "hidden";
    }
  }
  
  translateSetupWizard();
}

function applyWizardPreferences() {
  // Apply Lang & Dir
  changeSystemLanguage(setupState.lang);

  // Apply checkboxes
  setupState.firewallEnabled = document.getElementById("chk-halalfire").checked;
  setupState.aminaEnabled = document.getElementById("chk-amina").checked;
  setupState.syncEnabled = document.getElementById("chk-sync").checked;

  document.getElementById("settings-chk-firewall").checked = setupState.firewallEnabled;
  document.getElementById("settings-chk-telemetry").checked = setupState.firewallEnabled;
  document.getElementById("settings-chk-adhan").checked = true;

  // Sync settings Select inputs
  document.getElementById("settings-lang-select").value = setupState.lang;
  document.getElementById("settings-prayer-select").value = setupState.prayerMethod;

  // Toggle firewall logs
  toggleFirewall(setupState.firewallEnabled);

  // Hide Wizard, Fade-in Shell
  document.getElementById("setup-wizard").classList.remove("active");
  document.getElementById("desktop-shell").classList.add("active");
}

// Translations implementation
function changeSystemLanguage(lang) {
  setupState.lang = lang;
  setupState.dir = translations[lang].dir;

  // Apply HTML Direction
  document.documentElement.setAttribute("dir", setupState.dir);
  document.documentElement.setAttribute("lang", lang);

  // Loop translations dictionary
  const dict = translations[lang];
  for (let key in dict) {
    const kebab = key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const el = document.getElementById(kebab);
    if (el) {
      if (el.tagName === "INPUT" && el.placeholder !== "") {
        // Handle input placeholders
      } else {
        el.textContent = dict[key];
      }
    }
    
    // Also try tooltips and labels matching tip-[name] or lbl-[name]
    const tipEl = document.getElementById(key.replace("lbl", "lbl-").replace("tip", "tip-").replace("title", "title-").toLowerCase());
    if (tipEl) {
      tipEl.textContent = dict[key];
    }
  }

  // Explicit translations adjustments
  document.getElementById("title-settings").textContent = dict.titleSettings;
  document.getElementById("title-files").textContent = dict.titleFiles;
  document.getElementById("title-terminal").textContent = dict.titleTerminal;
  document.getElementById("title-browser").textContent = dict.titleBrowser;
  document.getElementById("title-amina").textContent = dict.titleAmina;
  document.getElementById("title-islamic").textContent = dict.titleIslamic;
  
  // Select labels updates
  document.getElementById("lbl-setup-back").textContent = dict.lblSetupBack;
  
  // Re-render apps list in launcher
  renderLauncherApps();
  // Re-render prayers list
  renderPrayersList();
  // Re-render files
  renderFiles();
}

function translateSetupWizard() {
  const dict = translations[setupState.lang];
  document.getElementById("lbl-setup-back").textContent = dict.lblSetupBack;
  
  const nextBtn = document.getElementById("setup-next-btn");
  if (setupState.step < 3) {
    nextBtn.innerHTML = `<span id="lbl-setup-next">${dict.lblSetupNext}</span> <i class="ti ti-arrow-right"></i>`;
  } else {
    nextBtn.innerHTML = `<span id="lbl-setup-launch">${dict.lblSetupLaunch}</span> <i class="ti ti-rocket"></i>`;
  }

  // Labels translations inside Setup Card
  document.getElementById("txt-setup-p-title").textContent = dict.txtSetupPTitle;
  document.getElementById("txt-setup-p-desc").textContent = dict.txtSetupPDesc;
  document.getElementById("txt-setup-pr-title").textContent = dict.txtSetupPrTitle;
  document.getElementById("txt-setup-pr-desc").textContent = dict.txtSetupPrDesc;
  document.getElementById("txt-setup-f-title").textContent = dict.txtSetupFTitle;
  document.getElementById("txt-setup-f-desc").textContent = dict.txtSetupFDesc;
  document.getElementById("txt-setup-f-sub").textContent = dict.txtSetupFSub;
}

// --- 5. WINDOWS SYSTEM INTERACTIVE ACTIONS ---
function makeWindowsDraggable() {
  const workspace = document.getElementById("workspace");
  
  workspace.addEventListener("mousedown", (e) => {
    if (window.innerWidth <= 768) return; // Disable dragging on mobile devices
    
    const titlebar = e.target.closest(".window-titlebar");
    if (!titlebar) return;

    const win = titlebar.closest(".os-window");
    if (win.classList.contains("maximized")) return;

    // Put window on top focus
    focusWindow(win);

    const rect = win.getBoundingClientRect();
    const offsetLeft = e.clientX - rect.left;
    const offsetTop = e.clientY - rect.top;

    function onMouseMove(moveEvent) {
      let left = moveEvent.clientX - offsetLeft;
      let top = moveEvent.clientY - offsetTop - varTopBarHeight();

      win.style.left = left + "px";
      win.style.top = top + "px";
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

function varTopBarHeight() {
  return 40; // var topbar height
}

fnZIndex = 100;
function focusWindow(win) {
  document.querySelectorAll(".os-window").forEach(w => w.classList.remove("window-active-focus"));
  
  win.classList.add("window-active-focus");
  maxZIndex++;
  win.style.zIndex = maxZIndex;

  const dockId = "dock-" + win.id;
  document.querySelectorAll(".dock-item").forEach(item => item.classList.remove("active"));
  const dockEl = document.getElementById(dockId);
  if (dockEl) {
    dockEl.classList.add("active");
  }
}

function openWindow(id) {
  const win = document.getElementById(id);
  win.classList.remove("minimized");
  win.classList.add("active");
  
  const dockEl = document.getElementById("dock-" + id);
  if (dockEl) {
    dockEl.classList.add("running");
  }

  openWindows.add(id);
  focusWindow(win);
}

function minimizeWindow(id) {
  const win = document.getElementById(id);
  win.classList.add("minimized");
  
  const dockEl = document.getElementById("dock-" + id);
  if (dockEl) {
    dockEl.classList.remove("active");
  }
}

fnMaximize = 0;
function maximizeWindow(id) {
  const win = document.getElementById(id);
  win.classList.toggle("maximized");
}

function closeWindow(id) {
  const win = document.getElementById(id);
  win.classList.remove("active", "maximized", "minimized", "window-active-focus");
  
  const dockEl = document.getElementById("dock-" + id);
  if (dockEl) {
    dockEl.classList.remove("running", "active");
  }

  openWindows.delete(id);
}

// --- 6. SETTINGS SUB PANEL CONTROLS ---
function selectSettingsSubTab(tabName) {
  document.querySelectorAll(".settings-nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  document.querySelectorAll(".settings-tab-panel").forEach(panel => {
    panel.style.display = panel.id === "set-tab-" + tabName ? "flex" : "none";
    if (panel.id === "set-tab-" + tabName) {
      panel.style.flexDirection = "column";
      panel.style.gap = "20px";
    }
  });
}

function changeSystemTheme(theme) {
  setupState.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  showInshaNotification("Visual Theme Switched", `Desktop style configured to: ${theme}`, "info");
}

function toggleAdaptiveWallpaper(enabled) {
  setupState.adaptiveWp = enabled;
  if (!enabled) {
    document.body.className = "";
    document.body.style.background = "#0B2B11";
  } else {
    document.body.removeAttribute("style");
    updateTopClock();
  }
}

function toggleReducedMotion(enabled) {
  setupState.reducedMotion = enabled;
  if (enabled) {
    document.documentElement.style.setProperty("--ease-spring", "none");
    document.documentElement.style.setProperty("--ease-enter", "none");
    document.documentElement.style.setProperty("--ease-prayer", "none");
  } else {
    document.documentElement.removeAttribute("style");
  }
}

function changePrayerMethod(method) {
  setupState.prayerMethod = method;
  
  const indicator = document.getElementById("lbl-prayer-calc-indicator");
  let label = "Egyptian Survey";
  if (method === "mwl") label = "Muslim World League";
  if (method === "isna") label = "ISNA (North America)";
  
  indicator.textContent = "Method: " + label;
  
  if (method === "mwl") {
    prayerSchedule.Fajr = "04:18";
    prayerSchedule.Isha = "19:58";
  } else if (method === "isna") {
    prayerSchedule.Fajr = "04:22";
    prayerSchedule.Isha = "19:52";
  } else {
    prayerSchedule.Fajr = "04:12";
    prayerSchedule.Isha = "20:06";
  }

  updateTopClock();
  renderPrayersList();
  showInshaNotification("Prayer Calculation Changed", `Calibrated to: ${label}`, "info");
}

function toggleFirewall(checked) {
  setupState.firewallEnabled = checked;
  const topShield = document.getElementById("top-shield-icon");
  const radialScore = document.getElementById("psd-radial-score");
  const settingsRadialScore = document.getElementById("settings-privacy-score");
  const scoreTitle = document.getElementById("lbl-set-priv-score");

  if (checked) {
    topShield.className = "ti ti-shield-check privacy-shield-indicator";
    radialScore.textContent = "98";
    settingsRadialScore.textContent = "98";
    scoreTitle.textContent = "Privacy Score: High Protection";
    startAuditLogging();
    showInshaNotification("Firewall Shield Active", "Outbound telemetry interceptor running.", "success");
  } else {
    topShield.className = "ti ti-shield-alert privacy-shield-indicator danger";
    radialScore.textContent = "64";
    settingsRadialScore.textContent = "64";
    scoreTitle.textContent = "Privacy Score: Warning Level";
    stopAuditLogging();
    showInshaNotification("Firewall Deactivated", "Warning: outbound tracking requests unblocked.", "danger");
  }
}

// Simulated Firewall Audit Logger
let auditLogInterval;
function startAuditLogging() {
  clearInterval(auditLogInterval);
  const dropdownLogs = document.getElementById("psd-audit-logs");
  
  const sampleTrackers = [
    "metrics.ubuntu.com", "telemetry.kde.org", "google-analytics.com",
    "trackers.doubleclick.net", "facebook.com/tr", "ads.yahoo.com"
  ];

  auditLogInterval = setInterval(() => {
    const time = new Date().toTimeString().split(' ')[0];
    const host = sampleTrackers[Math.floor(Math.random() * sampleTrackers.length)];
    const logLine = `[${time}] Blocked request: ${host}\n`;
    dropdownLogs.textContent = logLine + dropdownLogs.textContent;
    
    // Periodically show firewall block notifications to prove live activity
    if (Math.random() > 0.6) {
      showInshaNotification("Firewall Blocked Script", `Intercepted network connection to ${host}`, "warning");
    }
  }, 5000);
}

function stopAuditLogging() {
  clearInterval(auditLogInterval);
  const dropdownLogs = document.getElementById("psd-audit-logs");
  dropdownLogs.textContent = "[Firewall Disabled] Security Logs suspended.";
}

function togglePrivacyShieldDropdown() {
  const el = document.getElementById("privacy-shield-dropdown");
  el.style.display = el.style.display === "none" ? "flex" : "none";
}

// --- 7. BROWSER SHIELD & URL LOGIC ---
function selectBrowserTab(tabIndex) {
  activeBrowserTabId = tabIndex;
  
  document.querySelectorAll(".browser-v-tab").forEach((tab, idx) => {
    if (idx !== 3) { // skip split tab button
      tab.classList.toggle("active", idx === tabIndex);
    }
  });

  const tab = browserTabs[tabIndex];
  if (tab) {
    navigateBrowser(tab.url);
  }
}

function toggleBrowserSplit() {
  browserSplitActive = !browserSplitActive;
  
  const secPane = document.getElementById("browser-viewport-secondary");
  const splitBtn = document.getElementById("browser-v-tab-split");
  
  if (browserSplitActive) {
    secPane.style.display = "flex";
    splitBtn.classList.add("active");
    showInshaNotification("Browser Split View Enabled", "Side-by-side reading layout active.", "info");
  } else {
    secPane.style.display = "none";
    splitBtn.classList.remove("active");
    showInshaNotification("Browser Split View Disabled", "Single view standard active.", "info");
  }
}

function handleBrowserGo(e) {
  if (e.key === "Enter") {
    navigateBrowser(e.target.value);
  }
}

let haramBlockedUrl = "";

function navigateBrowser(url) {
  const urlEl = document.getElementById("browser-url");
  urlEl.value = url;

  const quranPage = document.getElementById("browser-page-quran");
  const wikiPage = document.getElementById("browser-page-wiki");
  const auditPage = document.getElementById("browser-page-audit");
  const blockerOverlay = document.getElementById("browser-haram-blocker");

  // Check Haram Blocker
  const isHaram = ["haram.com", "gamble.net", "winmoney.biz", "betonline.org", "casino.com"].some(domain => url.toLowerCase().includes(domain));
  
  if (isHaram) {
    haramBlockedUrl = url;
    blockerOverlay.style.display = "flex";
    quranPage.style.display = "none";
    wikiPage.style.display = "none";
    auditPage.style.display = "none";
    showInshaNotification("Threat Blocked by Faith Filter", `Restricted access attempts to flagged domain: ${url}`, "danger");
    return;
  }
  
  blockerOverlay.style.display = "none";

  if (url.includes("wiki.halalos.org")) {
    quranPage.style.display = "none";
    wikiPage.style.display = "flex";
    auditPage.style.display = "none";
    activeBrowserTabId = 1;
  } else if (url.includes("audit.halalos.org")) {
    quranPage.style.display = "none";
    wikiPage.style.display = "none";
    auditPage.style.display = "flex";
    activeBrowserTabId = 2;
  } else {
    quranPage.style.display = "flex";
    wikiPage.style.display = "none";
    auditPage.style.display = "none";
    activeBrowserTabId = 0;
  }

  // Update tabs sidebar highlight
  document.querySelectorAll(".browser-v-tab").forEach((tab, idx) => {
    if (idx !== 3) { // skip split tab button
      tab.classList.toggle("active", idx === activeBrowserTabId);
    }
  });
}

function bypassHaramBlocker() {
  const blockerOverlay = document.getElementById("browser-haram-blocker");
  blockerOverlay.style.display = "none";
  
  // Show page content
  document.getElementById("browser-page-quran").style.display = "none";
  document.getElementById("browser-page-wiki").style.display = "none";
  document.getElementById("browser-page-audit").style.display = "flex"; // route to audit page to log details
  
  showInshaNotification("Access Override Logged", "Override approved. Logs transmitted to local security audit filesystem.", "warning");
}

function browserGoHome() {
  navigateBrowser("https://quran.halalos.org");
}

function toggleBrowserShieldDropdown() {
  const el = document.getElementById("browser-shield-dropdown");
  el.style.display = el.style.display === "none" ? "flex" : "none";
}

function searchBrowserQuran() {
  const searchInput = document.getElementById("browser-search-input").value.trim().toLowerCase();
  const resultsPane = document.getElementById("browser-quran-result-pane");
  
  if (searchInput === "") {
    resultsPane.innerHTML = `
      <div class="quran-verse-block">
        <div class="quran-arabic-text" style="font-size: 22px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
        <div class="quran-translation-text" style="font-size: 12px;">"Read! In the name of your Lord who created" (Surah Al-Alaq 96:1)</div>
      </div>`;
    return;
  }

  let resultsHTML = "";
  for (let sId in surahData) {
    const surah = surahData[sId];
    surah.verses.forEach(v => {
      if (v.en.toLowerCase().includes(searchInput) || surah.name.toLowerCase().includes(searchInput)) {
        resultsHTML += `
          <div class="quran-verse-block">
            <div style="font-size: 10px; color: var(--color-gold-light); margin-bottom:4px;">${surah.name} (${sId}:${v.num})</div>
            <div class="quran-arabic-text" style="font-size: 20px;">${v.ar}</div>
            <div class="quran-translation-text" style="font-size: 12px;">"${v.en}"</div>
          </div>`;
      }
    });
  }

  if (resultsHTML === "") {
    resultsPane.innerHTML = `<div style="font-size:12px; color:var(--color-text-muted); text-align:center; padding: 12px;">No matches found. Try searching 'Lord' or 'refuge'.</div>`;
  } else {
    resultsPane.innerHTML = resultsHTML;
  }
}

// --- 8. HAFIZ FILE SYSTEM INTERACTIVE DIRECTORY ---
function selectFolder(folderName) {
  if (filesDualPaneActive && activeFilesPane === "secondary") {
    secondaryPaneFolder = folderName;
    if (isFilesColumnView) renderFilesColumnView();
    else renderFilesSec();
  } else {
    primaryPaneFolder = folderName;
    currentFolder = folderName;
    if (isFilesColumnView) renderFilesColumnView();
    else renderFiles();
  }
  
  const folder = filesDualPaneActive && activeFilesPane === "secondary" ? secondaryPaneFolder : primaryPaneFolder;
  document.querySelectorAll(".files-sidebar-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-dir") === folder);
  });

  document.getElementById("current-file-path").textContent = `/home/halalos/${folder}/`;

  const vaultOverlay = document.getElementById("vault-auth-overlay");
  const lockBtn = document.getElementById("btn-lock-vault");
  const emptyTrashBtn = document.getElementById("btn-empty-trash");
  
  if (folder === "trash") {
    emptyTrashBtn.style.display = "flex";
  } else {
    emptyTrashBtn.style.display = "none";
  }
  
  if (folder === "vault" && !vaultUnlocked) {
    vaultOverlay.style.display = "flex";
    lockBtn.style.display = "none";
  } else {
    vaultOverlay.style.display = "none";
    if (folder === "vault") {
      lockBtn.style.display = "flex";
    } else {
      lockBtn.style.display = "none";
    }
  }
}

function toggleFilesViewMode() {
  isFilesColumnView = false;
  document.getElementById("files-panes-wrapper").style.display = "flex";
  document.getElementById("files-columns-container").style.display = "none";
  
  isFilesListView = !isFilesListView;
  const btnIcon = document.getElementById("icon-files-view-toggle");
  if (isFilesListView) {
    btnIcon.className = "ti ti-list";
  } else {
    btnIcon.className = "ti ti-layout-grid";
  }
  renderFiles();
  if (filesDualPaneActive) renderFilesSec();
}

function toggleFilesColumnView() {
  isFilesColumnView = !isFilesColumnView;
  const wrapper = document.getElementById("files-panes-wrapper");
  const container = document.getElementById("files-columns-container");
  
  if (isFilesColumnView) {
    wrapper.style.display = "none";
    container.style.display = "flex";
    renderFilesColumnView();
  } else {
    wrapper.style.display = "flex";
    container.style.display = "none";
    renderFiles();
    if (filesDualPaneActive) renderFilesSec();
  }
}

function toggleFilesDualPane() {
  isFilesColumnView = false;
  document.getElementById("files-panes-wrapper").style.display = "flex";
  document.getElementById("files-columns-container").style.display = "none";
  
  filesDualPaneActive = !filesDualPaneActive;
  const secPane = document.getElementById("files-pane-secondary");
  const primHeader = document.getElementById("lbl-pane-primary-title");
  
  if (filesDualPaneActive) {
    secPane.style.display = "flex";
    primHeader.style.display = "flex";
    renderFilesSec();
  } else {
    secPane.style.display = "none";
    primHeader.style.display = "none";
  }
  
  renderFiles();
}

function selectFilesPane(pane) {
  activeFilesPane = pane;
  document.getElementById("files-pane-primary").style.background = pane === "primary" ? "rgba(255,255,255,0.01)" : "none";
  document.getElementById("files-pane-secondary").style.background = pane === "secondary" ? "rgba(255,255,255,0.01)" : "none";
}

function renderFiles() {
  const grid = document.getElementById("files-grid-content");
  grid.innerHTML = "";

  let files = filesData[primaryPaneFolder] || [];
  if (primaryPaneFolder === "vault" && !vaultUnlocked) return; 

  // Apply Search and Tag Filters
  if (filesSearchQuery !== "") {
    files = files.filter(f => f.name.toLowerCase().includes(filesSearchQuery.toLowerCase()));
  }
  if (filesActiveTagFilter !== "all") {
    files = files.filter(f => f.tags && f.tags.includes(filesActiveTagFilter));
  }

  if (isFilesListView) {
    const listContainer = document.createElement("div");
    listContainer.className = "files-list-container";
    listContainer.innerHTML = `
      <div class="file-list-header">
        <div>Name</div>
        <div>Size</div>
        <div>Date Modified</div>
      </div>
    `;
    
    files.forEach(f => {
      const row = document.createElement("div");
      row.className = "file-list-row";
      row.onclick = () => {
        document.querySelectorAll(".file-list-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("primary");
      };
      
      row.ondblclick = () => {
        openQuickLookDirect(f);
      };

      const cloudHtml = f.synced ? '<i class="ti ti-cloud-check file-cloud-indicator" title="Synced to Halal Cloud"></i>' : '<i class="ti ti-cloud-upload file-cloud-indicator" style="color: var(--color-text-muted);" title="Sync Pending"></i>';
      let tagsHtml = "";
      if (f.tags) {
        f.tags.forEach(t => { tagsHtml += `<span class="file-tag-badge tag-${t.toLowerCase()}">${t}</span>`; });
      }
      
      row.innerHTML = `
        <div class="file-list-name-col">
          <i class="ti ${f.icon}" style="font-size: 16px; color: var(--color-emerald);"></i>
          <span>${f.name}</span>
          ${cloudHtml}
          ${tagsHtml}
        </div>
        <div>${f.size}</div>
        <div>${f.date}</div>
      `;
      listContainer.appendChild(row);
    });
    grid.appendChild(listContainer);
  } else {
    files.forEach(f => {
      const card = document.createElement("div");
      card.className = "file-item-card";
      card.onclick = () => {
        document.querySelectorAll(".file-item-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("primary");
      };

      card.ondblclick = () => {
        openQuickLookDirect(f);
      };

      const cloudHtml = f.synced ? '<i class="ti ti-cloud-check file-cloud-indicator" style="position: absolute; right: 6px; top: 6px;" title="Synced to Halal Cloud"></i>' : '';
      let tagsHtml = "";
      if (f.tags) {
        f.tags.forEach(t => { tagsHtml += `<span class="file-tag-badge tag-${t.toLowerCase()}" style="margin: 2px 0 0 0;">${t}</span>`; });
      }

      card.innerHTML = `
        <div style="position: relative; width: 100%; display: flex; flex-direction: column; align-items: center;">
          <i class="ti ${f.icon} file-item-icon"></i>
          ${cloudHtml}
        </div>
        <div class="file-item-name">${f.name}</div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          ${tagsHtml}
          <div class="file-item-date">${f.date}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
}

function renderFilesSec() {
  const grid = document.getElementById("files-grid-content-sec");
  grid.innerHTML = "";

  let files = filesData[secondaryPaneFolder] || [];
  if (secondaryPaneFolder === "vault" && !vaultUnlocked) return; 

  if (filesSearchQuery !== "") {
    files = files.filter(f => f.name.toLowerCase().includes(filesSearchQuery.toLowerCase()));
  }
  if (filesActiveTagFilter !== "all") {
    files = files.filter(f => f.tags && f.tags.includes(filesActiveTagFilter));
  }

  if (isFilesListView) {
    const listContainer = document.createElement("div");
    listContainer.className = "files-list-container";
    listContainer.innerHTML = `
      <div class="file-list-header">
        <div>Name</div>
        <div>Size</div>
        <div>Date Modified</div>
      </div>
    `;
    
    files.forEach(f => {
      const row = document.createElement("div");
      row.className = "file-list-row";
      row.onclick = () => {
        document.querySelectorAll(".file-list-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("secondary");
      };
      
      row.ondblclick = () => {
        openQuickLookDirect(f);
      };
      
      const cloudHtml = f.synced ? '<i class="ti ti-cloud-check file-cloud-indicator"></i>' : '';
      let tagsHtml = "";
      if (f.tags) {
        f.tags.forEach(t => { tagsHtml += `<span class="file-tag-badge tag-${t.toLowerCase()}">${t}</span>`; });
      }

      row.innerHTML = `
        <div class="file-list-name-col">
          <i class="ti ${f.icon}" style="font-size: 16px; color: var(--color-emerald);"></i>
          <span>${f.name}</span>
          ${cloudHtml}
          ${tagsHtml}
        </div>
        <div>${f.size}</div>
        <div>${f.date}</div>
      `;
      listContainer.appendChild(row);
    });
    grid.appendChild(listContainer);
  } else {
    files.forEach(f => {
      const card = document.createElement("div");
      card.className = "file-item-card";
      card.onclick = () => {
        document.querySelectorAll(".file-item-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("secondary");
      };

      card.ondblclick = () => {
        openQuickLookDirect(f);
      };

      const cloudHtml = f.synced ? '<i class="ti ti-cloud-check file-cloud-indicator" style="position: absolute; right: 6px; top: 6px;"></i>' : '';
      let tagsHtml = "";
      if (f.tags) {
        f.tags.forEach(t => { tagsHtml += `<span class="file-tag-badge tag-${t.toLowerCase()}">${t}</span>`; });
      }

      card.innerHTML = `
        <div style="position: relative; width: 100%; display: flex; flex-direction: column; align-items: center;">
          <i class="ti ${f.icon} file-item-icon"></i>
          ${cloudHtml}
        </div>
        <div class="file-item-name">${f.name}</div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          ${tagsHtml}
          <div class="file-item-date">${f.date}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
}

// macOS style Column View rendering
function renderFilesColumnView() {
  const colFolders = document.getElementById("files-col-folders");
  const colFiles = document.getElementById("files-col-files");
  const colDetail = document.getElementById("files-col-detail");

  colFolders.innerHTML = `
    <div style="font-size: 10px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 8px;">Folders</div>
    <div class="files-sidebar-item ${primaryPaneFolder === 'home' ? 'active' : ''}" onclick="selectFolder('home')"><i class="ti ti-home"></i> Home</div>
    <div class="files-sidebar-item ${primaryPaneFolder === 'islamic' ? 'active' : ''}" onclick="selectFolder('islamic')"><i class="ti ti-book-2"></i> Islamic Docs</div>
    <div class="files-sidebar-item ${primaryPaneFolder === 'security' ? 'active' : ''}" onclick="selectFolder('security')"><i class="ti ti-shield"></i> Security Core</div>
    <div class="files-sidebar-item ${primaryPaneFolder === 'vault' ? 'active' : ''}" onclick="selectFolder('vault')"><i class="ti ti-lock"></i> Faith Vault</div>
    <div class="files-sidebar-item ${primaryPaneFolder === 'trash' ? 'active' : ''}" onclick="selectFolder('trash')"><i class="ti ti-trash"></i> Trash</div>
  `;

  colFiles.innerHTML = `<div style="font-size: 10px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 8px;">Files</div>`;
  
  const files = filesData[primaryPaneFolder] || [];
  if (primaryPaneFolder === "vault" && !vaultUnlocked) {
    colFiles.innerHTML += `<div style="font-size: 12px; color: var(--color-text-muted); padding: 10px;">Vault is locked. Open from sidebar or unlock primary pane.</div>`;
    colDetail.innerHTML = "";
    return;
  }

  // Draw Column 2 (Files inside selected folder)
  files.forEach(f => {
    const item = document.createElement("div");
    item.className = `files-sidebar-item ${selectedFileName === f.name ? 'active' : ''}`;
    item.style.padding = "6px 8px";
    item.onclick = () => {
      selectedFileName = f.name;
      renderFilesColumnView();
    };

    item.ondblclick = () => {
      openQuickLookDirect(f);
    };

    const cloudIcon = f.synced ? '<i class="ti ti-cloud-check" style="color: var(--color-emerald); margin-left: auto;"></i>' : '';

    item.innerHTML = `
      <i class="ti ${f.icon}" style="color: var(--color-emerald);"></i>
      <span style="font-size: 12px;">${f.name}</span>
      ${cloudIcon}
    `;
    colFiles.appendChild(item);
  });

  // Draw Column 3 (File Details preview)
  colDetail.innerHTML = "";
  if (selectedFileName) {
    const selectedFileObj = files.find(f => f.name === selectedFileName);
    if (selectedFileObj) {
      const tagBadges = selectedFileObj.tags ? selectedFileObj.tags.map(t => `<span class="file-tag-badge tag-${t.toLowerCase()}">${t}</span>`).join(" ") : "None";
      colDetail.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 12px;">
          <i class="ti ${selectedFileObj.icon}" style="font-size: 64px; color: var(--color-emerald);"></i>
          <h4 style="font-size: 14px; font-weight: 700;">${selectedFileObj.name}</h4>
        </div>
        <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 12px; border-top: 1px solid var(--color-border); padding-top: 16px;">
          <div><strong>Size:</strong> ${selectedFileObj.size}</div>
          <div><strong>Modified:</strong> ${selectedFileObj.date}</div>
          <div><strong>Tags:</strong> ${tagBadges}</div>
          <div><strong>Cloud Sync:</strong> ${selectedFileObj.synced ? "Synced (Halal Cloud)" : "Pending Sync"}</div>
          <button class="btn btn-sm" style="margin-top: 12px; justify-content: center;" onclick="const f = filesData['${primaryPaneFolder}'].find(x=>x.name==='${selectedFileName}'); if(f) openQuickLookDirect(f);"><i class="ti ti-eye"></i> Quick Look</button>
          <button class="btn btn-sm btn-danger" style="justify-content: center; margin-top: 6px;" onclick="triggerDeleteFile('${selectedFileName}')"><i class="ti ti-trash"></i> Delete File</button>
        </div>
      `;
    }
  } else {
    colDetail.innerHTML = `<div style="font-size: 12px; color: var(--color-text-muted); text-align: center; margin-top: 40px;">Select a file to view detailed metadata.</div>`;
  }
}

// AI-powered natural language query search
function searchFilesAI(query) {
  filesSearchQuery = query;
  if (isFilesColumnView) renderFilesColumnView();
  else {
    renderFiles();
    if (filesDualPaneActive) renderFilesSec();
  }
}

// Tag-based filtering
function filterFilesByTag(tag) {
  filesActiveTagFilter = tag;
  if (isFilesColumnView) renderFilesColumnView();
  else {
    renderFiles();
    if (filesDualPaneActive) renderFilesSec();
  }
}

// File deletion (moves to Trash)
function triggerDeleteFile(fileName) {
  const folder = primaryPaneFolder;
  const fileIndex = filesData[folder].findIndex(f => f.name === fileName);
  if (fileIndex > -1) {
    const [deletedFile] = filesData[folder].splice(fileIndex, 1);
    filesData.trash.push(deletedFile);
    selectedFileName = null;
    showInshaNotification("File Deleted", `${fileName} moved to Trash.`, "warning");
    
    if (isFilesColumnView) renderFilesColumnView();
    else {
      renderFiles();
      if (filesDualPaneActive) renderFilesSec();
    }
  }
}

// Empty Trash folder
function triggerEmptyTrash() {
  filesData.trash = [];
  selectedFileName = null;
  showInshaNotification("Trash Cleared", "Permanently purged all deleted files.", "success");
  
  if (isFilesColumnView) renderFilesColumnView();
  else {
    renderFiles();
    if (filesDualPaneActive) renderFilesSec();
  }
}


function toggleFilesViewMode() {
  isFilesListView = !isFilesListView;
  const btnIcon = document.getElementById("icon-files-view-toggle");
  if (isFilesListView) {
    btnIcon.className = "ti ti-list";
  } else {
    btnIcon.className = "ti ti-layout-grid";
  }
  renderFiles();
  if (filesDualPaneActive) renderFilesSec();
}

function toggleFilesDualPane() {
  filesDualPaneActive = !filesDualPaneActive;
  const secPane = document.getElementById("files-pane-secondary");
  const primHeader = document.getElementById("lbl-pane-primary-title");
  
  if (filesDualPaneActive) {
    secPane.style.display = "flex";
    primHeader.style.display = "flex";
    renderFilesSec();
  } else {
    secPane.style.display = "none";
    primHeader.style.display = "none";
  }
  
  renderFiles();
}

function selectFilesPane(pane) {
  activeFilesPane = pane;
  document.getElementById("files-pane-primary").style.background = pane === "primary" ? "rgba(255,255,255,0.01)" : "none";
  document.getElementById("files-pane-secondary").style.background = pane === "secondary" ? "rgba(255,255,255,0.01)" : "none";
}

function renderFiles() {
  const grid = document.getElementById("files-grid-content");
  grid.innerHTML = "";

  const files = filesData[primaryPaneFolder];
  if (primaryPaneFolder === "vault" && !vaultUnlocked) return; 

  if (isFilesListView) {
    const listContainer = document.createElement("div");
    listContainer.className = "files-list-container";
    listContainer.innerHTML = `
      <div class="file-list-header">
        <div>Name</div>
        <div>Size</div>
        <div>Date Modified</div>
      </div>
    `;
    
    files.forEach(f => {
      const row = document.createElement("div");
      row.className = "file-list-row";
      row.onclick = () => {
        document.querySelectorAll(".file-list-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("primary");
      };
      
      row.ondblclick = () => {
        openQuickLookDirect(f);
      };
      
      row.innerHTML = `
        <div class="file-list-name-col">
          <i class="ti ${f.icon}" style="font-size: 16px; color: var(--color-emerald);"></i>
          <span>${f.name}</span>
        </div>
        <div>${f.size}</div>
        <div>${f.date}</div>
      `;
      listContainer.appendChild(row);
    });
    grid.appendChild(listContainer);
  } else {
    files.forEach(f => {
      const card = document.createElement("div");
      card.className = "file-item-card";
      card.onclick = () => {
        document.querySelectorAll(".file-item-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("primary");
      };

      card.ondblclick = () => {
        openQuickLookDirect(f);
      };

      card.innerHTML = `
        <i class="ti ${f.icon} file-item-icon"></i>
        <div class="file-item-name">${f.name}</div>
        <div class="file-item-date">${f.date}</div>
      `;
      grid.appendChild(card);
    });
  }
}

function renderFilesSec() {
  const grid = document.getElementById("files-grid-content-sec");
  grid.innerHTML = "";

  const files = filesData[secondaryPaneFolder];
  if (secondaryPaneFolder === "vault" && !vaultUnlocked) return; 

  if (isFilesListView) {
    const listContainer = document.createElement("div");
    listContainer.className = "files-list-container";
    listContainer.innerHTML = `
      <div class="file-list-header">
        <div>Name</div>
        <div>Size</div>
        <div>Date Modified</div>
      </div>
    `;
    
    files.forEach(f => {
      const row = document.createElement("div");
      row.className = "file-list-row";
      row.onclick = () => {
        document.querySelectorAll(".file-list-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("secondary");
      };
      
      row.ondblclick = () => {
        openQuickLookDirect(f);
      };
      
      row.innerHTML = `
        <div class="file-list-name-col">
          <i class="ti ${f.icon}" style="font-size: 16px; color: var(--color-emerald);"></i>
          <span>${f.name}</span>
        </div>
        <div>${f.size}</div>
        <div>${f.date}</div>
      `;
      listContainer.appendChild(row);
    });
    grid.appendChild(listContainer);
  } else {
    files.forEach(f => {
      const card = document.createElement("div");
      card.className = "file-item-card";
      card.onclick = () => {
        document.querySelectorAll(".file-item-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedFileName = f.name;
        selectFilesPane("secondary");
      };

      card.ondblclick = () => {
        openQuickLookDirect(f);
      };

      card.innerHTML = `
        <i class="ti ${f.icon} file-item-icon"></i>
        <div class="file-item-name">${f.name}</div>
        <div class="file-item-date">${f.date}</div>
      `;
      grid.appendChild(card);
    });
  }
}

function checkVaultPassword(e) {
  if (e.key === "Enter") {
    unlockVault();
  }
}

function unlockVault() {
  const password = document.getElementById("vault-pass-input").value;
  const errMsg = document.getElementById("vault-error-msg");

  if (password.toLowerCase() === "bismillah") {
    vaultUnlocked = true;
    errMsg.style.display = "none";
    document.getElementById("vault-pass-input").value = "";
    selectFolder("vault");
    showInshaNotification("Vault Unlocked", "Encrypted private records accessible.", "success");
  } else {
    errMsg.style.display = "block";
    showInshaNotification("Access Denied", "Incorrect vault password trace logged.", "danger");
  }
}

function triggerVaultLock() {
  vaultUnlocked = false;
  selectFolder("vault");
  showInshaNotification("Vault Locked", "Encrypted partitions sealed.", "info");
}

// --- 9. KALAM TERMINAL INTERACTIVE CLI ENGINE ---
function focusTerminal() {
  document.getElementById("terminal-text-input").focus();
}

const terminalCommands = ["help", "neofetch", "hadith", "quran", "clear", "halalpkg"];

function handleTerminalKey(e, tabId = 0) {
  const textInput = document.getElementById(`terminal-text-input-${tabId}`);
  const val = textInput.value.trim();

  if (e.key === "Tab") {
    e.preventDefault();
    const suggestion = document.getElementById(`terminal-suggestion-${tabId}`).textContent;
    if (suggestion !== "") {
      textInput.value = suggestion;
      document.getElementById(`terminal-suggestion-${tabId}`).textContent = "";
    }
  }

  if (e.key === "Enter") {
    if (val !== "") {
      executeTerminalCommand(val, tabId);
      textInput.value = "";
      document.getElementById(`terminal-suggestion-${tabId}`).textContent = "";
    }
  }
}

function updateTerminalSuggestion(val, tabId = 0) {
  const sug = document.getElementById(`terminal-suggestion-${tabId}`);
  if (val === "") {
    sug.textContent = "";
    return;
  }

  const match = terminalCommands.find(cmd => cmd.startsWith(val.toLowerCase()));
  if (match) {
    sug.textContent = match;
  } else {
    sug.textContent = "";
  }
}

function executeTerminalCommand(cmdText, tabId = 0) {
  const history = document.getElementById(`terminal-history-${tabId}`);
  
  const cmdLine = document.createElement("div");
  cmdLine.className = "terminal-line";
  cmdLine.innerHTML = `
    <div class="terminal-prompt-row">
      <span class="terminal-prompt-symbol">halalos@kalam:~#</span>
      <span>${cmdText}</span>
    </div>
  `;
  history.appendChild(cmdLine);

  const tokens = cmdText.split(" ");
  const baseCmd = tokens[0].toLowerCase();
  
  const responseBlock = document.createElement("div");
  responseBlock.style.color = "#E4E4E4";
  responseBlock.style.paddingLeft = "20px";
  responseBlock.style.whiteSpace = "pre-wrap";
  
  if (baseCmd === "help") {
    responseBlock.textContent = `Available utilities:
  neofetch       Display system specification branding details.
  hadith         Print a graded authentic Hadith statement.
  quran          Print Surah details and local translation.
  halalpkg       Package Manager command tool interface.
  clear          Flush terminal history logs.`;
  } 
  else if (baseCmd === "neofetch") {
    responseBlock.innerHTML = `
<span style="color: var(--color-emerald-active); font-weight:700;">       ☪       </span>   <span style="color: var(--color-gold-light); font-weight: 700;">halalos@kalam</span>
<span style="color: var(--color-emerald-active); font-weight:700;">    .▄███▄.    </span>   -------------
<span style="color: var(--color-emerald-active); font-weight:700;">  .███▀ ▀███.  </span>   OS: Halal OS 2.0.0 (trixie)
<span style="color: var(--color-emerald-active); font-weight:700;">  ███  🕋  ███ </span>   Kernel: Linux 6.6.15-halal-hardened-x86_64
<span style="color: var(--color-emerald-active); font-weight:700;">  ███.   .███  </span>   Uptime: 2 hours, 18 mins
<span style="color: var(--color-emerald-active); font-weight:700;">   ▀███████▀   </span>   Shell: bash 5.2.21 (Kalam wrapper)
<span style="color: var(--color-emerald-active); font-weight:700;">     ▀▀█▀▀     </span>   DE: Halal Desktop v2.0 (GTK4/Rust Compositor)
                  Local AI Assistant: Amina (Weights: on-device)
                  Memory: 4125MiB / 16384MiB (25%)
`;
  }
  else if (baseCmd === "hadith") {
    const randomHadith = internalHadithDb[Math.floor(Math.random() * internalHadithDb.length)];
    responseBlock.innerHTML = `<span style="color: var(--color-gold-light); font-weight:600;">Authentic Hadith grading: ${randomHadith.grade}</span>\n${randomHadith.text}`;
  }
  else if (baseCmd === "quran") {
    responseBlock.textContent = `Surah load instructions: Use the browser or Islamic suite widgets.
Quick preview of Surah 112:1-2:
  قُلْ هُوَ اللَّهُ أَحَدٌ (Say, "He is Allah, [who is] One,")
  اللَّهُ الصَّمَدُ (Allah, the Eternal Refuge.)`;
  }
  else if (baseCmd === "clear") {
    history.innerHTML = "";
    return;
  }
  else if (baseCmd === "halalpkg") {
    if (tokens[1] === "install") {
      const pkg = tokens[2] || "application";
      responseBlock.innerHTML = `Reading package lists... Done
Building dependency tree... Done
Calculating updates... Done
<span style="color: var(--color-emerald-active);">Fetching package: ${pkg}.hpkg (Atomic rollbacks verified)</span>
Installing ${pkg} sandbox profile (seccomp enabled)...
Installation complete. [Package verified via GPG keys]`;
      showInshaNotification("Package Installed", `Successfully set up ${pkg}.hpkg`, "success");
    } else {
      responseBlock.textContent = `halalpkg package manager interface.
Usage:
  halalpkg install [package_name]  Installs a verified .hpkg file.`;
    }
  }
  else {
    responseBlock.textContent = `kalam: command not found: ${baseCmd}. Type 'help' to check utilities.`;
  }

  history.appendChild(responseBlock);
  
  const wrap = document.getElementById(`terminal-click-area-${tabId}`);
  wrap.scrollTop = wrap.scrollHeight;
}

// --- 10. AMINA AI ASSISTANT CHAT ENGINE ---
function handleAminaKeyUp(e) {
  if (e.key === "Enter") {
    submitAminaText();
  }
}

function submitAminaText() {
  const inputEl = document.getElementById("amina-text-input");
  const query = inputEl.value.trim();
  if (query === "") return;

  appendAminaBubble(query, "user");
  inputEl.value = "";

  setTimeout(() => {
    processAminaQuery(query);
  }, 600);
}

function appendAminaBubble(text, sender) {
  const history = document.getElementById("amina-chat-history");
  const bubble = document.createElement("div");
  bubble.className = `amina-bubble ${sender}`;
  bubble.innerHTML = text.replace(/\n/g, "<br>");
  history.appendChild(bubble);
  history.scrollTop = history.scrollHeight;
}

function processAminaQuery(q) {
  const queryLower = q.toLowerCase();
  let response = "";

  if (queryLower.includes("prayer") || queryLower.includes("salah")) {
    response = `⏰ **Simulated Prayer Times Today (Cairo)**:
- Fajr: 04:12 AM
- Dhuhr: 12:00 PM
- Asr: 03:28 PM
- Maghrib: 06:41 PM
- Isha: 08:06 PM
*Next prayer countdown: ${document.getElementById("top-prayer-text").textContent}*`;
  }
  else if (queryLower.includes("quran") || queryLower.includes("verse")) {
    response = `📖 **Quran Recitation Al-Ikhlas (112:1-2)**:
- Arabic: قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ
- English: "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge.'"
*(Source: Uthmani Authenticated Corpus)*`;
  }
  else if (queryLower.includes("zakat") || queryLower.includes("charity")) {
    response = `🧮 **Zakat Obligation calculation (Simulated)**:
Standard Nisab is calculated against 85g gold ($5,420 cash value). Your current assets exceed this limit.
*Your calculated Zakat due: ${document.getElementById("zakat-due-value").textContent}*`;
  }
  else if (queryLower.includes("language") || queryLower.includes("arabic")) {
    response = `🌐 I support multilingual operations. To switch language layout to Arabic, please type **"switch language to Arabic"** or change it in Tazkiyah Settings general tab.`;
  }
  else if (queryLower.includes("switch language to arabic")) {
    changeSystemLanguage("ar");
    response = `مرحباً! تم تحويل لغة النظام إلى العربية بنجاح.`;
  }
  else if (queryLower.includes("switch language to english")) {
    changeSystemLanguage("en");
    response = `Sure, system language switched back to English.`;
  }
  else if (queryLower.includes("firewall") || queryLower.includes("shield")) {
    response = `🛡 **halalfire Security Module**:
The firewall is active, intercepting system tracking calls. Check the top status panel shield icon to open the security audit list logs.`;
  }
  else if (queryLower.includes("install")) {
    response = `📦 You can install verified applications using the package manager. Run \`halalpkg install [app_name]\` in Kalam Terminal.`;
  }
  else {
    response = `🤖 **Amina AI Local Inference**:
I processed your request on-device. All metadata resides completely within local memory storage coordinates. How else may I assist your system control or faith preferences?`;
  }

  appendAminaBubble(response, "assistant");
}

let micActive = false;
function toggleAminaVoice() {
  const mic = document.getElementById("amina-mic");
  micActive = !micActive;
  
  if (micActive) {
    mic.classList.add("active");
    
    setTimeout(() => {
      if (micActive) {
        document.getElementById("amina-text-input").value = "What time is Asr prayer?";
        submitAminaText();
        toggleAminaVoice(); // turn off
      }
    }, 2000);
  } else {
    mic.classList.remove("active");
  }
}

// --- 11. ISLAMIC SERVICES INNER TAB LOGIC ---
function selectIslamicSubTab(tabName) {
  document.querySelectorAll(".islamic-nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  document.querySelectorAll(".islamic-tab-panel").forEach(panel => {
    panel.style.display = panel.id === "isl-tab-" + tabName ? "block" : "none";
  });
}

// Quran Surah loading
let showTafsir = false;
let activeSurahId = "1";

function loadQuranSurah(id) {
  activeSurahId = id;
  const surah = surahData[id];
  document.getElementById("quran-chapter-name").textContent = `${surah.name} (${surah.arabicName})`;
  document.getElementById("quran-surah-select").value = id;

  renderSurahVerses();
}

function renderSurahVerses() {
  const container = document.getElementById("quran-verses-container");
  container.innerHTML = "";

  const surah = surahData[activeSurahId];
  surah.verses.forEach(v => {
    const block = document.createElement("div");
    block.className = "quran-verse-block";
    
    let tafsirHTML = "";
    if (showTafsir) {
      tafsirHTML = `<div style="font-size:11px; color: var(--color-gold); background: rgba(255, 255, 255, 0.02); padding: 8px; border-radius: var(--r-small); border-left: 2px solid var(--color-gold); margin-top: 6px;">Tafsir: ${v.tafsir}</div>`;
    }

    block.innerHTML = `
      <div class="quran-arabic-text">${v.ar} <span>(${v.num})</span></div>
      <div class="quran-translation-text">${v.en}</div>
      ${tafsirHTML}
    `;
    container.appendChild(block);
  });
}

function toggleQuranTafsir() {
  showTafsir = !showTafsir;
  const btnText = document.getElementById("lbl-quran-tafsir");
  const lang = setupState.lang;
  
  if (showTafsir) {
    btnText.textContent = translations[lang].lblQuranTafsirHide || "Hide Tafsir";
  } else {
    btnText.textContent = translations[lang].lblQuranTafsirShow || "Show Tafsir";
  }
  renderSurahVerses();
}

// Prayer Schedule Generation
function renderPrayersList() {
  const container = document.getElementById("prayer-list-rows");
  container.innerHTML = "";

  const now = new Date();
  const currTotalMin = now.getHours() * 60 + now.getMinutes();
  
  const parsedPrayers = {};
  for (let p in prayerSchedule) {
    const [h, m] = prayerSchedule[p].split(":").map(Number);
    parsedPrayers[p] = h * 60 + m;
  }

  let nextP = "Fajr";
  if (currTotalMin < parsedPrayers.Fajr) nextP = "Fajr";
  else if (currTotalMin < parsedPrayers.Shuruq) nextP = "Shuruq";
  else if (currTotalMin < parsedPrayers.Dhuhr) nextP = "Dhuhr";
  else if (currTotalMin < parsedPrayers.Asr) nextP = "Asr";
  else if (currTotalMin < parsedPrayers.Maghrib) nextP = "Maghrib";
  else if (currTotalMin < parsedPrayers.Isha) nextP = "Isha";

  for (let pName in prayerSchedule) {
    const time = prayerSchedule[pName];
    const row = document.createElement("div");
    row.className = `prayer-row ${pName === nextP ? 'next' : ''}`;
    
    let icon = "🌅";
    if (pName === "Shuruq") icon = "☀";
    if (pName === "Dhuhr") icon = "🌞";
    if (pName === "Asr") icon = "🌤";
    if (pName === "Maghrib") icon = "🌆";
    if (pName === "Isha") icon = "🌙";

    row.innerHTML = `
      <div class="prayer-name"><span>${icon}</span> ${pName}</div>
      <div class="prayer-time">${time}</div>
    `;
    container.appendChild(row);
  }
}

// Qibla Compass Calibration
function calibrateQiblaCompass() {
  const needle = document.getElementById("qibla-needle");
  needle.style.transform = "rotate(420deg)";
  setTimeout(() => {
    needle.style.transform = "rotate(136deg)";
    showInshaNotification("Compass Calibrated", "Kaaba vector lock: 136° East", "gold");
  }, 1000);
}

// Zakat nisab calculations formulas
function calculateZakat() {
  const savings = Number(document.getElementById("zakat-savings").value) || 0;
  const gold = Number(document.getElementById("zakat-gold").value) || 0;
  const invest = Number(document.getElementById("zakat-invest").value) || 0;

  const totalWealth = savings + gold + invest;
  const nisabLimit = 5420; // 85g gold price reference

  const badge = document.getElementById("zakat-nisab-badge");
  const dueVal = document.getElementById("zakat-due-value");

  if (totalWealth >= nisabLimit) {
    badge.textContent = setupState.lang === "ar" ? "وجبت الزكاة" : (setupState.lang === "ur" ? "واجب" : "Met");
    badge.className = "tag tag-green";
    const due = totalWealth * 0.025;
    dueVal.textContent = `$${due.toFixed(2)}`;
  } else {
    badge.textContent = setupState.lang === "ar" ? "دون النصاب" : (setupState.lang === "ur" ? "کم" : "Not Met");
    badge.className = "tag tag-gold";
    dueVal.textContent = `$0.00`;
  }
}

// Calendar Days grid rendering
function renderHijriCalendar() {
  const grid = document.getElementById("calendar-days-grid");
  grid.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const blank = document.createElement("div");
    grid.appendChild(blank);
  }

  for (let d = 1; d <= 29; d++) {
    const day = document.createElement("div");
    day.style.padding = "6px";
    day.style.borderRadius = "4px";
    day.style.fontSize = "12px";
    day.style.cursor = "pointer";
    day.style.textAlign = "center";
    
    if (d === 15) {
      day.style.background = "var(--color-emerald)";
      day.style.color = "white";
      day.style.fontWeight = "700";
    } else {
      day.style.background = "rgba(255,255,255,0.02)";
      day.style.border = "1px solid var(--color-border)";
    }

    day.innerHTML = `
      <div style="font-size:11px;">${d}</div>
      <div style="font-size:8px; color:var(--color-text-muted);">${d + 14}</div>
    `;
    grid.appendChild(day);
  }
}

// --- 12. BISMILLAH LAUNCHER APP LOGIC ---
const appsList = [
  { id: "window-settings", name: "Settings", icon: "ti-settings", cat: "system" },
  { id: "window-files", name: "File Manager", icon: "ti-folder", cat: "system" },
  { id: "window-terminal", name: "Terminal", icon: "ti-terminal", cat: "system" },
  { id: "window-browser", name: "Browser", icon: "ti-world", cat: "system" },
  { id: "window-amina", name: "Amina AI", icon: "ti-sparkles", cat: "system" },
  
  { id: "quran", name: "Quran Reader", icon: "ti-book-2", cat: "islamic" },
  { id: "prayer", name: "Prayer Times", icon: "ti-clock", cat: "islamic" },
  { id: "qibla", name: "Qibla Finder", icon: "ti-compass", cat: "islamic" },
  { id: "zakat", name: "Zakat Calc", icon: "ti-calculator", cat: "islamic" }
];

let launcherCategory = "all";

function toggleLauncher() {
  const menu = document.getElementById("bismillah-menu");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.getElementById("menu-search").value = "";
    document.getElementById("menu-search").focus();
    filterLauncherApps("");
    renderLauncherApps();
  }
}

function closeLauncherOnOuterClick(e) {
  if (e.target.className === "menu-overlay") {
    toggleLauncher();
  }
}

function renderLauncherApps() {
  const grid = document.getElementById("launcher-grid");
  grid.innerHTML = "";

  const filtered = appsList.filter(app => {
    if (launcherCategory === "all") return true;
    return app.cat === launcherCategory;
  });

  filtered.forEach(app => {
    const card = document.createElement("div");
    card.className = "launcher-app-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${app.name}`);
    
    let displayName = app.name;
    const dict = translations[setupState.lang];
    if (app.id === "window-settings") displayName = dict.titleSettings;
    if (app.id === "window-files") displayName = dict.titleFiles;
    if (app.id === "window-terminal") displayName = dict.titleTerminal;
    if (app.id === "window-browser") displayName = dict.titleBrowser;
    if (app.id === "window-amina") displayName = dict.titleAmina;
    if (app.id === "quran") displayName = dict.lblIslNavQuran;
    if (app.id === "prayer") displayName = dict.lblIslNavPrayer;
    if (app.id === "qibla") displayName = dict.lblIslNavQibla;
    if (app.id === "zakat") displayName = dict.lblIslNavZakat;

    card.onclick = () => {
      if (app.cat === "islamic") {
        openWindow("window-islamic");
        selectIslamicSubTab(app.id);
      } else {
        openWindow(app.id);
      }
      toggleLauncher();
    };

    let bg = "rgba(255,255,255,0.05)";
    let fg = "white";
    if (app.cat === "islamic") {
      bg = "rgba(212, 160, 23, 0.12)";
      fg = "var(--color-gold-light)";
    }

    card.innerHTML = `
      <div class="launcher-app-icon" style="background: ${bg}; color: ${fg};"><i class="ti ${app.icon}"></i></div>
      <div class="launcher-app-name">${displayName}</div>
    `;
    grid.appendChild(card);
  });
}

function filterLauncherCategory(cat) {
  launcherCategory = cat;
  document.querySelectorAll(".menu-cat-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === cat);
  });
  renderLauncherApps();
}

function filterLauncherApps(query) {
  const grid = document.getElementById("launcher-grid");
  const searchResults = document.getElementById("launcher-search-results");
  const cleanQ = query.trim().toLowerCase();

  if (cleanQ === "") {
    grid.style.display = "grid";
    searchResults.style.display = "none";
    return;
  }

  grid.style.display = "none";
  searchResults.style.display = "flex";
  searchResults.innerHTML = "";

  const matches = appsList.filter(app => app.name.toLowerCase().includes(cleanQ));
  
  matches.forEach(app => {
    const item = document.createElement("div");
    item.className = "search-result-item";
    item.onclick = () => {
      if (app.cat === "islamic") {
        openWindow("window-islamic");
        selectIslamicSubTab(app.id);
      } else {
        openWindow(app.id);
      }
      toggleLauncher();
      document.getElementById("menu-search").value = "";
      filterLauncherApps("");
    };

    item.innerHTML = `
      <i class="ti ${app.icon}" style="font-size: 20px; color: var(--color-emerald);"></i>
      <div>
        <div style="font-size: 13px; font-weight:600;">${app.name}</div>
        <div style="font-size: 10px; color: var(--color-text-muted);">${app.cat === "islamic" ? "Faith Native Application" : "System Tool"}</div>
      </div>
    `;
    searchResults.appendChild(item);
  });

  // Math calculator parsing
  if (/^[0-9+\-*/().\s]+$/.test(cleanQ)) {
    try {
      const res = eval(cleanQ);
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <i class="ti ti-calculator" style="font-size: 20px; color: var(--color-gold);"></i>
        <div>
          <div style="font-size: 13px; font-weight:600;">Calculation: ${cleanQ}</div>
          <div style="font-size: 14px; color: var(--color-emerald-active); font-weight: 700;">Result = ${res}</div>
        </div>
      `;
      searchResults.appendChild(item);
    } catch(e) {}
  }
}

// --- 13. ADDITIONAL GUI IMPROVEMENTS COMPONENT LOGIC ---

// Collapsible Ilm Panel Sidebar
function toggleIlmPanel() {
  const panel = document.getElementById("ilm-panel");
  panel.classList.toggle("open");
}

// Quick Settings Panel toggle
function toggleQuickSettings() {
  const panel = document.getElementById("quick-settings-panel");
  panel.style.display = panel.style.display === "none" ? "flex" : "none";
}

function toggleQSSetting(btn, type) {
  btn.classList.toggle("active");
  const isActive = btn.classList.contains("active");
  
  if (type === "shield") {
    toggleFirewall(isActive);
  } else {
    showInshaNotification(
      `${type.toUpperCase()} Changed`, 
      `Simulated hardware module: ${isActive ? 'ENABLED' : 'DISABLED'}`, 
      isActive ? "success" : "info"
    );
  }
}

// Maqam Switcher functions
function switchMaqamWorkspace(workspace) {
  // Update buttons
  document.querySelectorAll(".maqam-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(workspace));
  });

  // Switch body background (only if not in Ramadan Mode)
  if (!ramadanModeActive) {
    const body = document.body;
    body.className = ""; // clear
    body.removeAttribute("style");
    body.classList.add("wp-" + workspace);
  }

  const deck = document.getElementById("window-deck");
  const rotations = {
    fajr: "rotateY(90deg) scale(0.9)",
    dhuhr: "rotateY(0deg)",
    asr: "rotateY(-90deg) scale(0.9)",
    maghrib: "rotateX(90deg) scale(0.9)",
    isha: "rotateX(-90deg) scale(0.9)",
    qiyam: "rotateY(180deg) scale(0.9)"
  };
  
  if (deck) {
    deck.style.transform = rotations[workspace] || "none";
  }

  // Send Insha Notification
  const workspaceTitle = workspace.charAt(0).toUpperCase() + workspace.slice(1);
  showInshaNotification("Maqam Workspace Switch", `Switched to: ${workspaceTitle} Station`, "gold");
}

// HDK Slider Specimen bindings
function updateHDKSlider(val) {
  document.getElementById("hdk-slider-value").textContent = val + "%";
  
  // Update crescent progress arc (SVG circle length is 2*pi*r = 138)
  const offset = 138 - (138 * (val / 100));
  document.getElementById("hdk-progress-arc").setAttribute("stroke-dashoffset", offset);
  document.getElementById("hdk-progress-text").textContent = val + "%";
}

// Insha Notification alerts
function showInshaNotification(title, message, type = "success") {
  const container = document.getElementById("notification-container");
  
  const toast = document.createElement("div");
  toast.className = `toast-notification ${type}`;
  
  let icon = "🔔";
  if (type === "success") icon = "✅";
  if (type === "warning") icon = "⚠️";
  if (type === "danger") icon = "❌";
  if (type === "gold") icon = "☪";

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  // Auto dismiss after 5s
  setTimeout(() => {
    toast.style.transform = "translateX(120%)";
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}

/* ==================== ADDITIONAL GUI ENHANCEMENT HANDLERS ==================== */

// Ramadan Mode & Fasting Timer
function toggleRamadanMode(enabled) {
  ramadanModeActive = enabled;
  document.getElementById("settings-chk-ramadan").checked = enabled;
  
  const ftWidget = document.getElementById("fasting-tracker-widget");
  
  if (enabled) {
    document.documentElement.setAttribute("data-theme", "ramadan");
    document.body.classList.add("ramadan-mode");
    ftWidget.style.display = "flex";
    startFastingTimer();
    showInshaNotification("Ramadan Mode Enabled", "Gold aesthetics activated. Fasting tracker widget initialized.", "gold");
  } else {
    document.documentElement.setAttribute("data-theme", setupState.theme);
    document.body.classList.remove("ramadan-mode");
    ftWidget.style.display = "none";
    clearInterval(fastingInterval);
    showInshaNotification("Ramadan Mode Disabled", "Returned to system theme standards.", "info");
  }
}

function startFastingTimer() {
  clearInterval(fastingInterval);
  
  function updateTimer() {
    const now = new Date();
    const currentMin = now.getHours() * 60 + now.getMinutes();
    
    // Mock Fasting hours
    const imsakMin = 3 * 60 + 42; // 03:42
    const iftarMin = 18 * 60 + 48; // 18:48 (06:48 PM)
    
    const fillBar = document.getElementById("ft-progress-fill");
    const countText = document.getElementById("ft-countdown-text");
    
    if (currentMin >= imsakMin && currentMin < iftarMin) {
      // Fasting now
      const totalFastingMin = iftarMin - imsakMin;
      const elapsedMin = currentMin - imsakMin;
      const percent = Math.floor((elapsedMin / totalFastingMin) * 100);
      
      fillBar.style.width = percent + "%";
      
      const remainingMin = iftarMin - currentMin;
      const hoursLeft = Math.floor(remainingMin / 60);
      const minLeft = remainingMin % 60;
      countText.textContent = `Iftar in ${hoursLeft}h ${minLeft}m`;
    } else {
      // Not fasting (eating window)
      fillBar.style.width = "0%";
      countText.textContent = "Eating permitted window active";
    }
  }
  
  updateTimer();
  fastingInterval = setInterval(updateTimer, 10000);
}

// Dock Context Menu
function initDockContextMenus() {
  const dock = document.querySelector(".amal-bar");
  
  dock.addEventListener("contextmenu", (e) => {
    const dockItem = e.target.closest(".dock-item");
    if (!dockItem) return;
    
    if (dockItem.id === "dock-launcher" || dockItem.id === "dock-quran" || dockItem.id === "dock-prayer" || dockItem.id === "dock-qibla" || dockItem.id === "dock-zakat") {
      return;
    }
    
    e.preventDefault();
    contextMenuTargetAppId = dockItem.id.replace("dock-", "");
    
    const menu = document.getElementById("dock-context-menu");
    menu.style.display = "flex";
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY - 180}px`;
    
    const pinEl = document.getElementById("lbl-dcm-pin");
    const appInfo = appsList.find(a => a.id === contextMenuTargetAppId);
    pinEl.textContent = appInfo ? "Unpin from Dock" : "Pin to Dock";
    
    updateDockPermissionsUI();
  });
  
  document.addEventListener("click", (e) => {
    const menu = document.getElementById("dock-context-menu");
    if (menu && !e.target.closest(".dock-context-menu") && !e.target.closest(".dock-item")) {
      menu.style.display = "none";
    }
  });
}

function updateDockPermissionsUI() {
  if (!contextMenuTargetAppId) return;
  const perms = appPermissions[contextMenuTargetAppId];
  if (!perms) return;
  
  document.getElementById("dcm-perm-network").classList.toggle("active", perms.network);
  document.getElementById("dcm-perm-files").classList.toggle("active", perms.files);
  document.getElementById("dcm-perm-camera").classList.toggle("active", perms.camera);
}

function toggleDockPermission(type) {
  if (!contextMenuTargetAppId) return;
  const perms = appPermissions[contextMenuTargetAppId];
  if (!perms) return;
  
  perms[type] = !perms[type];
  updateDockPermissionsUI();
  
  const win = document.getElementById(contextMenuTargetAppId);
  if (win) {
    const dot = win.querySelector(".network-dot");
    if (dot) {
      if (perms.network) {
        dot.className = "network-dot red";
        dot.title = "Standard Network permissions: full LAN/WAN access";
      } else if (perms.files) {
        dot.className = "network-dot yellow";
        dot.title = "Local network/isolated permissions only";
      } else {
        dot.className = "network-dot green";
        dot.title = "Strict Sandbox: Isolated, zero outbound networking";
      }
    }
  }
  
  showInshaNotification("Sandbox Permissions Updated", `Modified sandbox access privileges for ${contextMenuTargetAppId.replace("window-", "")}.`, "info");
}

// Custom handler methods for menu items
function dockMenuLaunch() {
  if (contextMenuTargetAppId) {
    openWindow(contextMenuTargetAppId);
  }
  document.getElementById("dock-context-menu").style.display = "none";
}

function dockMenuClose() {
  if (contextMenuTargetAppId) {
    closeWindow(contextMenuTargetAppId);
  }
  document.getElementById("dock-context-menu").style.display = "none";
}

function toggleDockPin() {
  showInshaNotification("Dock Configuration Changed", "Application shortcut pinned status updated.", "info");
  document.getElementById("dock-context-menu").style.display = "none";
}

// File Manager Quick Look
function initQuickLookKeyboard() {
  const filesWin = document.getElementById("window-files");
  
  document.addEventListener("keydown", (e) => {
    if (!filesWin.classList.contains("window-active-focus")) return;
    
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      if (selectedFileName) {
        const folder = filesDualPaneActive && activeFilesPane === "secondary" ? secondaryPaneFolder : primaryPaneFolder;
        const fileObj = filesData[folder].find(f => f.name === selectedFileName);
        if (fileObj) {
          openQuickLookDirect(fileObj);
        }
      }
    }
  });
}

function openQuickLookDirect(fileObj) {
  const overlay = document.getElementById("quick-look-overlay");
  document.getElementById("ql-filename").textContent = fileObj.name;
  document.getElementById("ql-meta-size").textContent = fileObj.size;
  document.getElementById("ql-meta-date").textContent = fileObj.date;
  
  let typeLabel = "Generic Document";
  let content = `Security Metadata Check:
[Sandbox Level]: Isolated FUSE filesystem mount.
[Telemetry Log]: Blocked 0 network egress calls.
[Integrity Signature]: Verified SHA256 matches package standards.`;

  if (fileObj.name.endsWith(".txt")) {
    typeLabel = "Plain Text File";
    content = `[File: ${fileObj.name}]\n\n` + 
              `Welcome to Halal OS! This text file sits securely inside your home sandbox directory. You can edit configurations safely knowing no unauthorized telemetry transmits outside this user partition.`;
  } else if (fileObj.name.endsWith(".pdf")) {
    typeLabel = "PDF Document";
    content = `[Mock PDF Reader Preview]\n\nDocument: ${fileObj.name}\nTotal Pages: 12\n\nThis is a local security preview. PDF plugins are sandboxed with zero socket access to prevent malicious code escalation vulnerabilities.`;
  } else if (fileObj.name.endsWith(".xlsx")) {
    typeLabel = "Spreadsheet Ledger";
    content = `[Zakat Ledger Excel Preview]\n\n` +
              `Nisab calculations Lunar Year 1446:\n` +
              `- Total Cash Balance: $12,000.00\n` +
              `- Total Gold holdings: 24g ($1,500.00)\n` +
              `- Total Stock Equity: $3,000.00\n` +
              `- Zakat Obligation: Met (exceeds gold threshold $5,420)\n` +
              `- Total Zakat Due (2.5%): $412.50\n\n` +
              `[End Sheet Partition. Encrypted locally]`;
  } else if (fileObj.name.endsWith(".conf") || fileObj.name.endsWith(".db") || fileObj.name.endsWith(".xml")) {
    typeLabel = "System Config File";
    content = `[System Configuration Profile]\n\n` +
              `# halalfire rule profile v2.0\n` +
              `dns_resolver_doh = "https://dns.halalos.org/dns-query"\n` +
              `telemetry_reporting = "off"\n` +
              `mirror_signing_key_fingerprint = "E129 4F4A B430 918D"\n` +
              `sandbox_isolation_strictness = "high"`;
  }
  
  document.getElementById("ql-meta-type").textContent = typeLabel;
  document.getElementById("ql-preview-content").textContent = content;
  
  overlay.style.display = "flex";
}

function closeQuickLook(e) {
  if (e.target.id === "quick-look-overlay") {
    document.getElementById("quick-look-overlay").style.display = "none";
  }
}

function closeQuickLookDirect() {
  document.getElementById("quick-look-overlay").style.display = "none";
}

// Terminal Tabs & splits
function addNewTerminalTab() {
  const newId = terminalTabs.length;
  const tabTitle = `Kalam-${newId + 1}`;
  terminalTabs.push({ id: newId, title: tabTitle });
  
  const tabsBar = document.querySelector(".terminal-tabs-bar");
  const addBtn = tabsBar.querySelector(".terminal-tab-add");
  
  const newTab = document.createElement("div");
  newTab.className = "terminal-tab";
  newTab.id = `terminal-tab-${newId}`;
  newTab.onclick = () => selectTerminalTab(newId);
  newTab.innerHTML = `<i class="ti ti-terminal"></i> <span id="lbl-term-tab-${newId}">${tabTitle}</span> <div class="terminal-tab-close" onclick="closeTerminalTab(event, ${newId})"><i class="ti ti-x"></i></div>`;
  
  tabsBar.insertBefore(newTab, addBtn);
  selectTerminalTab(newId);
  showInshaNotification("Terminal Tab Created", `Opened session: ${tabTitle}`, "info");
}

// Tab closing handler
function closeTerminalTab(e, id) {
  e.stopPropagation();
  if (terminalTabs.length <= 1) {
    showInshaNotification("Terminal Close Blocked", "Must retain at least one console session active.", "warning");
    return;
  }
  
  const tabEl = document.getElementById(`terminal-tab-${id}`);
  if (tabEl) tabEl.remove();
  
  terminalTabs = terminalTabs.filter(t => t.id !== id);
  
  if (activeTerminalTabId === id) {
    const nextTab = terminalTabs[0];
    selectTerminalTab(nextTab.id);
  }
}

function selectTerminalTab(id) {
  activeTerminalTabId = id;
  document.querySelectorAll(".terminal-tab").forEach(tab => {
    tab.classList.toggle("active", tab.id === `terminal-tab-${id}`);
  });
  
  showInshaNotification("Tab Switched", `Active Session: Kalam-${id + 1}`, "info");
}

function splitTerminal(direction) {
  terminalSplits++;
  const container = document.getElementById("terminal-panes-container");
  container.className = `terminal-panes-container split-${direction}`;
  
  const splitPane = document.createElement("div");
  splitPane.className = "terminal-pane";
  splitPane.id = `terminal-pane-split-${terminalSplits}`;
  
  const splitId = terminalSplits;
  splitPane.innerHTML = `
    <div class="terminal-wrapper" id="terminal-click-area-split-${splitId}" onclick="focusTerminalSplit(${splitId})">
      <div class="terminal-banner">☪ KALAM SPLIT SESSION (${direction.toUpperCase()}-${splitId})
Base: Debian Hardened Sandbox | Live Logs Egress
Type 'help' to review parameters.
      </div>
      <div class="terminal-history" id="terminal-history-split-${splitId}"></div>
      <div class="terminal-prompt-row">
        <span class="terminal-prompt-symbol">halalos@split-kalam:~#</span>
        <div class="terminal-input-wrapper">
          <input type="text" class="terminal-input" id="terminal-text-input-split-${splitId}" autocomplete="off" spellcheck="false" onkeydown="handleTerminalSplitKey(event, ${splitId})">
        </div>
      </div>
    </div>
  `;
  container.appendChild(splitPane);
  showInshaNotification("Console Split Activated", `Arranged workspace splits: ${direction}`, "info");
}

function resetTerminalSplits() {
  const container = document.getElementById("terminal-panes-container");
  container.className = "terminal-panes-container";
  
  const pane0 = document.getElementById("terminal-pane-0");
  container.innerHTML = "";
  container.appendChild(pane0);
  terminalSplits = 0;
  
  showInshaNotification("Console Splits Cleared", "Reset terminal view back to single console pane.", "info");
}

function focusTerminal(id = 0) {
  const el = document.getElementById(`terminal-text-input-${id}`);
  if (el) el.focus();
}

function focusTerminalSplit(splitId) {
  const el = document.getElementById(`terminal-text-input-split-${splitId}`);
  if (el) el.focus();
}

function handleTerminalSplitKey(e, splitId) {
  const textInput = document.getElementById(`terminal-text-input-split-${splitId}`);
  const val = textInput.value.trim();
  
  if (e.key === "Enter" && val !== "") {
    executeTerminalSplitCommand(val, splitId);
    textInput.value = "";
  }
}

function executeTerminalSplitCommand(cmdText, splitId) {
  const history = document.getElementById(`terminal-history-split-${splitId}`);
  
  const cmdLine = document.createElement("div");
  cmdLine.className = "terminal-line";
  cmdLine.innerHTML = `
    <div class="terminal-prompt-row">
      <span class="terminal-prompt-symbol">halalos@split-kalam:~#</span>
      <span>${cmdText}</span>
    </div>
  `;
  history.appendChild(cmdLine);

  const responseBlock = document.createElement("div");
  responseBlock.style.color = "#E4E4E4";
  responseBlock.style.paddingLeft = "20px";
  responseBlock.style.whiteSpace = "pre-wrap";
  
  const baseCmd = cmdText.split(" ")[0].toLowerCase();
  
  if (baseCmd === "help") {
    responseBlock.textContent = `Split pane help summary:
neofetch       Display system parameters.
hadith         Print authentic hadith citation.
clear          Reset log screen.`;
  } else if (baseCmd === "neofetch") {
    responseBlock.textContent = `OS: Halal OS 2.0.0 (Hardened Sandbox)\nUptime: 2h 18m\nDE: Halal Desktop Compositor (Wayland)`;
  } else if (baseCmd === "hadith") {
    const randomHadith = internalHadithDb[Math.floor(Math.random() * internalHadithDb.length)];
    responseBlock.textContent = `Grading: ${randomHadith.grade}\n${randomHadith.text}`;
  } else if (baseCmd === "clear") {
    history.innerHTML = "";
    return;
  } else {
    responseBlock.textContent = `command not found: ${baseCmd}. Type 'help' for guidelines.`;
  }
  
  history.appendChild(responseBlock);
  
  const wrap = document.getElementById(`terminal-click-area-split-${splitId}`);
  wrap.scrollTop = wrap.scrollHeight;
}

// Quran audio waveform
function toggleQuranPlay() {
  quranAudioPlaying = !quranAudioPlaying;
  const btnIcon = document.getElementById("icon-quran-audio");
  const playLbl = document.getElementById("lbl-quran-play");
  const reciterSelect = document.getElementById("quran-reciter-select");
  const reciterName = reciterSelect.options[reciterSelect.selectedIndex].text;
  
  if (quranAudioPlaying) {
    btnIcon.className = "ti ti-player-pause";
    playLbl.textContent = "Pause";
    showInshaNotification("Recitation Started", `Playing audio recitation by ${reciterName}...`, "gold");
    startWaveformAnimation();
  } else {
    btnIcon.className = "ti ti-player-play";
    playLbl.textContent = "Listen";
    showInshaNotification("Recitation Paused", "Audio stream paused.", "info");
    stopWaveformAnimation();
  }
}

function startWaveformAnimation() {
  const canvas = document.getElementById("quran-audio-wave");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  let step = 0;
  
  function draw() {
    if (!quranAudioPlaying) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(212, 160, 23, 0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.moveTo(0, height / 2);
    
    for (let x = 0; x < width; x++) {
      const y = Math.sin(x * 0.05 + step) * 12 * Math.sin(x * 0.008) + (height / 2);
      ctx.lineTo(x, y);
    }
    
    ctx.stroke();
    step += 0.15;
    
    audioWaveAnimationId = requestAnimationFrame(draw);
  }
  
  draw();
}

function stopWaveformAnimation() {
  if (audioWaveAnimationId) {
    cancelAnimationFrame(audioWaveAnimationId);
    audioWaveAnimationId = null;
  }
  const canvas = document.getElementById("quran-audio-wave");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  }
}

// Qibla Drag Rotator
function initQiblaDragRotation() {
  const knob = document.getElementById("qibla-drag-knob");
  const wheel = document.getElementById("qibla-compass-wheel");
  const needle = document.getElementById("qibla-needle");
  
  if (!knob || !wheel) return;
  
  let center = { x: 0, y: 0 };
  
  knob.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDraggingQibla = true;
    
    const rect = wheel.getBoundingClientRect();
    center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    
    document.body.style.cursor = "grabbing";
  });
  
  document.addEventListener("mousemove", (e) => {
    if (!isDraggingQibla) return;
    
    const angleRad = Math.atan2(e.clientY - center.y, e.clientX - center.x);
    let angleDeg = Math.floor(angleRad * (180 / Math.PI)) + 90;
    if (angleDeg < 0) angleDeg += 360;
    
    qiblaRotationAngle = angleDeg;
    
    wheel.style.transform = `rotate(${angleDeg}deg)`;
    needle.style.transform = `rotate(${136 - angleDeg}deg)`;
    
    document.getElementById("lbl-qibla-angle").textContent = `Aligned Rotation Angle: ${angleDeg}°`;
    
    const targetAngle = 136;
    if (Math.abs(angleDeg - targetAngle) < 3 || Math.abs(angleDeg - targetAngle) > 357) {
      wheel.classList.add("active-lock");
      document.getElementById("lbl-qibla-angle").innerHTML = `Kaaba Vector Lock achieved: <span style="color:var(--color-emerald-active); font-weight:700;">136° East</span> 🕋`;
    } else {
      wheel.classList.remove("active-lock");
    }
  });
  
  document.addEventListener("mouseup", () => {
    if (isDraggingQibla) {
      isDraggingQibla = false;
      document.body.style.cursor = "default";
      
      if (wheel.classList.contains("active-lock")) {
        showInshaNotification("Kaaba Locked", "Compass alignment locked directly towards Mecca. Prayers accepted.", "gold");
      }
    }
  });
}

/* ==================== BRAND SYSTEM & DESIGN SYSTEM HANDLERS ==================== */

// Motion Demo — replay animation on Replay button click
function replayBrandAnim(id, animStr) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.animation = 'none';
  void el.offsetWidth; // force reflow
  el.style.animation = animStr;
}

// Localization Preview — live direction + label update
function setBrandLocale(code, dir, greeting, cardEl) {
  // Highlight selected card
  document.querySelectorAll('#brand-locale-grid .brand-locale-card').forEach(c => c.classList.remove('active'));
  if (cardEl) cardEl.classList.add('active');

  const isRTL = dir === 'rtl';

  const greetEl = document.getElementById('blp-greeting');
  if (greetEl) {
    greetEl.textContent = greeting;
    greetEl.style.direction = dir;
    greetEl.style.textAlign = isRTL ? 'right' : 'left';
  }

  const uiEl = document.getElementById('blp-ui');
  if (uiEl) uiEl.style.direction = dir;

  const labels = {
    ar: ['أوقات الصلاة', 'القاهرة، مصر', 'نشط'],
    ur: ['نماز کے اوقات', 'قاہرہ، مصر', 'فعال'],
    ps: ['د لمانځه وختونه', 'قاهره، مصر', 'فعال'],
    en: ['Prayer times', 'Cairo, Egypt', 'Active'],
    tr: ['Namaz vakitleri', 'Kahire, Mısır', 'Aktif'],
    de: ['Gebetszeiten', 'Kairo, Ägypten', 'Aktiv'],
    fr: ['Heures de prière', 'Le Caire, Égypte', 'Actif'],
    ms: ['Waktu solat', 'Kairo, Mesir', 'Aktif'],
    id: ['Waktu shalat', 'Kairo, Mesir', 'Aktif'],
    bn: ['নামাজের সময়', 'কায়রো, মিসর', 'সক্রিয়'],
    so: ['Wakhtiyada Salaadda', 'Kaayiro, Masar', 'Firfircoon'],
    sw: ['Wakati wa Sala', 'Kairo, Misri', 'Amilifu']
  };

  const l = labels[code] || labels.en;
  const lbl1 = document.getElementById('blp-label1');
  const lbl2 = document.getElementById('blp-label2');
  const badge = document.getElementById('blp-badge');
  if (lbl1) lbl1.textContent = l[0];
  if (lbl2) lbl2.textContent = l[1];
  if (badge) badge.textContent = l[2];

  const scripts = { ar:'Arabic', ur:'Nastaliq', ps:'Pashto', en:'Latin', tr:'Latin',
    de:'Latin', fr:'Latin', ms:'Latin', id:'Latin', bn:'Bengali', so:'Latin', sw:'Latin' };

  const dirEl = document.getElementById('blp-dir');
  const scriptEl = document.getElementById('blp-script');
  if (dirEl) dirEl.textContent = `Dir: ${isRTL ? 'RTL ←' : 'LTR →'}`;
  if (scriptEl) scriptEl.textContent = `Script: ${scripts[code] || 'Unicode'}`;
}

/* ==================== KEYBOARD NAVIGATION & COMPASS ACCESSIBILITY ENGINE ==================== */

maxZIndex = 200;

function cycleWindows() {
  const windows = Array.from(document.querySelectorAll(".os-window.active"));
  if (windows.length <= 1) return;
  
  const activeWin = document.querySelector(".os-window.window-active-focus");
  let nextIdx = 0;
  if (activeWin) {
    const currIdx = windows.indexOf(activeWin);
    nextIdx = (currIdx + 1) % windows.length;
  }
  
  focusWindow(windows[nextIdx]);
}

function handleLauncherKeyboard(e) {
  const menu = document.getElementById("bismillah-menu");
  if (!menu.classList.contains("active")) return;
  
  const cards = Array.from(document.querySelectorAll("#launcher-grid .launcher-app-card, #launcher-search-results .search-result-item"));
  if (cards.length === 0) return;
  
  const active = document.activeElement;
  let idx = cards.indexOf(active);
  
  // Determine columns count based on viewport width
  let cols = 4;
  if (window.innerWidth <= 768) {
    cols = 3;
  }
  if (window.innerWidth <= 480) {
    cols = 2;
  }
  
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (idx === -1) {
      cards[0].focus();
    } else {
      const nextIdx = Math.min(idx + cols, cards.length - 1);
      cards[nextIdx].focus();
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (idx !== -1) {
      if (idx < cols) {
        // Return focus to search bar if moving up from first row
        document.getElementById("menu-search").focus();
      } else {
        const prevIdx = Math.max(idx - cols, 0);
        cards[prevIdx].focus();
      }
    }
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    if (idx === -1) {
      cards[0].focus();
    } else {
      const nextIdx = (setupState.dir === "rtl") ? Math.max(idx - 1, 0) : Math.min(idx + 1, cards.length - 1);
      cards[nextIdx].focus();
    }
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (idx === -1) {
      cards[0].focus();
    } else {
      const prevIdx = (setupState.dir === "rtl") ? Math.min(idx + 1, cards.length - 1) : Math.max(idx - 1, 0);
      cards[prevIdx].focus();
    }
  }
}

function initKeyboardNavigation() {
  // Global shortcut listeners
  document.addEventListener("keydown", (e) => {
    // 1. Super/Meta key OR Ctrl + Space toggles Bismillah launcher
    if (e.key === "Meta" || (e.ctrlKey && e.key === " ")) {
      e.preventDefault();
      toggleLauncher();
      return;
    }
    
    // 2. Escape closes active components
    if (e.key === "Escape") {
      const menu = document.getElementById("bismillah-menu");
      const quickSettings = document.getElementById("quick-settings-panel");
      const shieldDropdown = document.getElementById("privacy-shield-dropdown");
      
      if (menu.classList.contains("active")) {
        toggleLauncher();
      } else if (quickSettings && quickSettings.style.display === "flex") {
        toggleQuickSettings();
      } else if (shieldDropdown && shieldDropdown.style.display === "flex") {
        togglePrivacyShieldDropdown();
      } else if (openWindows.size > 0) {
        const activeWin = document.querySelector(".os-window.window-active-focus");
        if (activeWin) {
          closeWindow(activeWin.id);
        }
      }
      return;
    }
    
    // 3. Alt + q cycles windows
    if (e.altKey && e.key.toLowerCase() === "q") {
      e.preventDefault();
      cycleWindows();
      return;
    }

    // 4. Launcher Specific Keyboard Navigation
    if (e.key.startsWith("Arrow")) {
      handleLauncherKeyboard(e);
    }

    // 5. Trigger click actions on focusable custom controls with Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      const active = document.activeElement;
      if (active && (
        active.classList.contains("launcher-app-card") || 
        active.classList.contains("dock-item") || 
        active.classList.contains("setup-btn-option") || 
        active.classList.contains("setup-checkbox-item") || 
        active.classList.contains("settings-nav-btn") ||
        active.classList.contains("quran-nav-btn") ||
        active.classList.contains("files-nav-btn") ||
        active.getAttribute("role") === "button"
      )) {
        e.preventDefault();
        active.click();
      }
    }
  });

  // Enable keydown event for launcher search input keydown
  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const cards = document.querySelectorAll("#launcher-grid .launcher-app-card");
        if (cards.length > 0) {
          cards[0].focus();
        }
      }
    });
  }
}

