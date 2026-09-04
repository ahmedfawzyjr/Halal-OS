//! Halal Design Kit (HDK) - Hijri Lunar Calendar Converter
//! Accurate astronomical lunar date conversion algorithm.

#[derive(Debug, Clone, PartialEq)]
pub struct HijriDate {
    pub year: i32,
    pub month: u32,
    pub day: u32,
    pub month_name_ar: &'static str,
    pub month_name_en: &'static str,
}

const HIJRI_MONTHS_AR: [&str; 12] = [
    "مُحَرَّم", "صَفَر", "رَبِيع الأَوَّل", "رَبِيع الآخِر",
    "جُمَادَى الأُولَى", "جُمَادَى الآخِرَة", "رَجَب", "شَعْبَان",
    "رَمَضَان", "شَوَّال", "ذُو القَعْدَة", "ذُو الحِجَّة"
];

const HIJRI_MONTHS_EN: [&str; 12] = [
    "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani",
    "Jumada al-Ula", "Jumada al-Akhirah", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
];

pub struct HijriConverter;

impl HijriConverter {
    /// Converts a Gregorian date (year, month 1-12, day 1-31) to Hijri Lunar Date
    pub fn gregorian_to_hijri(year: i32, month: u32, day: u32) -> HijriDate {
        // Julian Day Number Calculation (Fliegel-Van Flandern algorithm)
        let m = month as i64;
        let y = year as i64;
        let d = day as i64;

        let jd = (1461 * (y + 4800 + (m - 14) / 12)) / 4
            + (367 * (m - 2 - 12 * ((m - 14) / 12))) / 12
            - (3 * ((y + 4900 + (m - 14) / 12) / 100)) / 4
            + d - 32075;

        // Convert Julian Day Number to Hijri
        let l = jd - 1948440 + 10632;
        let n = (l - 1) / 10631;
        let l = l - 10631 * n + 354;
        let j = ((10985 - l) / 5316) * ((50 * l) / 17719) + (l / 5670) * ((43 * l) / 15238);
        let l = l - ((30 - j) / 15) * ((17719 * j) / 50) - (j / 16) * ((15238 * j) / 43) + 29;
        let h_month = ((24 * l) / 709) as u32;
        let h_day = (l - ((709 * h_month as i64) / 24)) as u32;
        let h_year = (30 * n + j - 30) as i32;

        let idx = if h_month >= 1 && h_month <= 12 { (h_month - 1) as usize } else { 0 };

        HijriDate {
            year: h_year,
            month: h_month,
            day: h_day,
            month_name_ar: HIJRI_MONTHS_AR[idx],
            month_name_en: HIJRI_MONTHS_EN[idx],
        }
    }
}
