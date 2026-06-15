pub const CRESCENT_ICON: &str = r#"<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="26" cy="26" r="24" stroke="#1B5E20" stroke-width="2.5"/>
  <path d="M26 8 A18 18 0 1 1 8 26 A14 14 0 1 0 26 8Z" fill="#1B5E20"/>
  <path d="M33 16 L34.4 19.6 L38 21 L34.4 22.4 L33 26 L31.6 22.4 L28 21 L31.6 19.6Z" fill="#D4A017"/>
</svg>"#;

pub const KAABA_ICON: &str = r#"<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="32" height="32" rx="4" fill="#1A1A1A" stroke="#D4A017" stroke-width="2"/>
  <rect x="10" y="18" width="32" height="4" fill="#D4A017"/>
  <path d="M26 22 L22 26 L30 26 Z" fill="#D4A017"/>
</svg>"#;

pub const COMPASS_ICON: &str = r#"<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="26" cy="26" r="22" stroke="#8B6914" stroke-width="2"/>
  <path d="M26 8 L30 24 L26 28 L22 24 Z" fill="#C62828"/>
  <path d="M26 44 L30 28 L26 28 L22 28 Z" fill="#888888"/>
  <circle cx="26" cy="28" r="2" fill="#fff"/>
</svg>"#;

pub const SHIELD_CHECK_ICON: &str = r#"<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26 6 L8 14 V26 C8 37 15 44 26 47 C37 44 44 37 44 26 V14 L26 6 Z" fill="#0A3D12" stroke="#43A047" stroke-width="2"/>
  <path d="M18 25 L24 31 L34 19" stroke="#E8F5E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>"#;

pub const QURAN_ICON: &str = r#"<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="6" width="36" height="40" rx="3" fill="#0A3D12" stroke="#D4A017" stroke-width="2"/>
  <line x1="14" y1="12" x2="38" y2="12" stroke="#D4A017" stroke-width="2"/>
  <line x1="14" y1="20" x2="38" y2="20" stroke="#D4A017" stroke-width="2"/>
  <path d="M26 26 C23 29 20 26 20 26 V36 C20 36 23 39 26 36 C29 39 32 36 32 36 V26 C32 26 29 29 26 26 Z" fill="#D4A017"/>
</svg>"#;

pub fn get_icon_svg(name: &str) -> Option<&'static str> {
    match name {
        "crescent" => Some(CRESCENT_ICON),
        "kaaba" => Some(KAABA_ICON),
        "compass" => Some(COMPASS_ICON),
        "shield" => Some(SHIELD_CHECK_ICON),
        "quran" => Some(QURAN_ICON),
        _ => None,
    }
}
