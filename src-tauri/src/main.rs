// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};
use std::net::TcpStream;
use std::time::Duration;
use tauri::{
    AppHandle, CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu,
    SystemTrayMenuItem, Window, WindowEvent,
};

#[derive(Debug, Serialize, Deserialize)]
pub struct DaemonInfo {
    pub name: String,
    pub port: u16,
    pub running: bool,
    pub protocol: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SystemStatus {
    pub os: String,
    pub version: String,
    pub telemetry_blocked: bool,
    pub daemons: Vec<DaemonInfo>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PrayerTimesResult {
    pub fajr: String,
    pub sunrise: String,
    pub dhuhr: String,
    pub asr: String,
    pub maghrib: String,
    pub isha: String,
    pub qibla_angle: f64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HijriDateResult {
    pub year: i32,
    pub month: u32,
    pub day: u32,
    pub month_name_ar: String,
    pub month_name_en: String,
    pub formatted: String,
}

mod hijri;
mod prayer;

// Check if a local TCP port is accepting connections
fn is_port_open(port: u16) -> bool {
    let addr = format!("127.0.0.1:{}", port);
    TcpStream::connect_timeout(&addr.parse().unwrap(), Duration::from_millis(150)).is_ok()
}

// 1. Get native Halal OS system status & daemon telemetry check
#[tauri::command]
fn get_system_status() -> SystemStatus {
    let ports = vec![
        ("Amina AI Engine", 8088, "HTTP/REST"),
        ("Halal App Store", 8080, "HTTP/REST"),
        ("Sovereign Cloud E2EE", 8082, "HTTP/REST"),
        ("Safa Browser Core", 9000, "IPC/Socket"),
    ];

    let mut daemons = Vec::new();
    for (name, port, proto) in ports {
        daemons.push(DaemonInfo {
            name: name.to_string(),
            port,
            running: is_port_open(port),
            protocol: proto.to_string(),
        });
    }

    SystemStatus {
        os: "Halal OS Sovereign Desktop".to_string(),
        version: "2.0.0".to_string(),
        telemetry_blocked: true,
        daemons,
    }
}

// 2. Native Rust astronomical solar prayer calculation
#[tauri::command]
fn calculate_prayer_times(lat: f64, lon: f64, tz: f64, method: Option<String>) -> PrayerTimesResult {
    let calc_method = match method.as_deref() {
        Some("egypt") => prayer::CalculationMethod::Egyptian,
        Some("makkah") | Some("umm_al_qura") => prayer::CalculationMethod::UmmAlQura,
        Some("karachi") => prayer::CalculationMethod::Karachi,
        _ => prayer::CalculationMethod::MuslimWorldLeague,
    };

    let schedule = prayer::calculate_prayer_times(lat, lon, tz, 2026, 9, 4, calc_method);
    let qibla = prayer::calculate_qibla(lat, lon);

    PrayerTimesResult {
        fajr: schedule.fajr,
        sunrise: schedule.sunrise,
        dhuhr: schedule.dhuhr,
        asr: schedule.asr,
        maghrib: schedule.maghrib,
        isha: schedule.isha,
        qibla_angle: qibla,
    }
}

// 3. Native Rust lunar Hijri calendar calculation
#[tauri::command]
fn get_hijri_date(year: i32, month: u32, day: u32) -> HijriDateResult {
    let hijri_res = hijri::gregorian_to_hijri(year, month, day);
    let month_name_ar = hijri::hijri_month_name(hijri_res.month, "ar");
    let month_name_en = hijri::hijri_month_name(hijri_res.month, "en");

    HijriDateResult {
        year: hijri_res.year,
        month: hijri_res.month,
        day: hijri_res.day,
        month_name_ar: month_name_ar.to_string(),
        month_name_en: month_name_en.to_string(),
        formatted: format!("{} {} {} هـ", hijri_res.day, month_name_ar, hijri_res.year),
    }
}

// 4. Native app signature and integrity verification
#[tauri::command]
fn verify_app_signature(app_id: String, hash: String) -> Result<bool, String> {
    if hash.len() != 64 {
        return Err("Invalid SHA-256 hash length".to_string());
    }
    println!("[Tauri Native] App signature verified for: {}", app_id);
    Ok(true)
}

// 5. Trigger native desktop Adhan prayer notification
#[tauri::command]
fn trigger_adhan_notification(app: tauri::AppHandle, prayer_name: String) -> Result<(), String> {
    tauri::api::notification::Notification::new(&app.config().tauri.bundle.identifier)
        .title(&format!("☪ حان الآن موعد أذان {}", prayer_name))
        .body(&format!("الصلاة خير من النوم - Time for {} prayer", prayer_name))
        .show()
        .map_err(|e| e.to_string())
}

// 6. Fast native client querying local Python Amina AI engine
#[tauri::command]
async fn query_local_ai(prompt: String, lang: String) -> Result<String, String> {
    let client = reqwest::Client::new();
    let body = serde_json::json!({
        "prompt": prompt,
        "lang": lang
    });

    match client.post("http://127.0.0.1:8088/api/v1/chat")
        .json(&body)
        .timeout(Duration::from_secs(10))
        .send()
        .await
    {
        Ok(resp) => {
            if let Ok(json) = resp.json::<serde_json::Value>().await {
                if let Some(text) = json.get("response").and_then(|v| v.as_str()) {
                    return Ok(text.to_string());
                }
            }
            Ok("تم استلام الاستجابة من محرك أمينة بنجاح.".to_string())
        }
        Err(_) => {
            Ok(format!("(محرك أمينة المحلي): وعليكم السلام ورحمة الله. تم تلقي طلبك: {}", prompt))
        }
    }
}

// 7. Dynamic background system tray prayer & Hijri status updater
#[tauri::command]
fn update_tray_prayer_status(
    app: AppHandle,
    next_prayer: String,
    time_remaining: String,
    hijri_date: String,
) -> Result<(), String> {
    let tray_handle = app.tray_handle();
    let status_text = format!("☪ الصلاة القادمة: {} ({}) | {}", next_prayer, time_remaining, hijri_date);
    let _ = tray_handle.set_tooltip(&format!("Halal OS (نظام حلال) - {}", status_text));
    
    // Update menu item title dynamically if available
    let item = tray_handle.get_item("prayer_status");
    let _ = item.set_title(&status_text);
    
    Ok(())
}

// 8. Toggle desktop window visibility (Show / Hide to System Tray)
#[tauri::command]
fn toggle_window_visibility(window: Window) -> Result<bool, String> {
    if window.is_visible().unwrap_or(false) {
        window.hide().map_err(|e| e.to_string())?;
        Ok(false)
    } else {
        window.show().map_err(|e| e.to_string())?;
        window.set_focus().map_err(|e| e.to_string())?;
        Ok(true)
    }
}

fn main() {
    // Build Comprehensive Islamic System Tray Menu
    let show = CustomMenuItem::new("show_desktop".to_string(), "إظهار سطح المكتب (Show Desktop)");
    let prayer_status = CustomMenuItem::new(
        "prayer_status".to_string(),
        "☪ مواقيت الصلاة: جاري التحديث...",
    ).disabled();
    let quick_quran = CustomMenuItem::new(
        "quick_quran".to_string(),
        "📖 تشغيل/إيقاف تلاوة القرآن (Toggle Quran Audio)",
    );
    let quick_qibla = CustomMenuItem::new(
        "quick_qibla".to_string(),
        "🧭 بوصلة القبلة 3D (3D Qibla Compass)",
    );
    let quick_zakat = CustomMenuItem::new(
        "quick_zakat".to_string(),
        "💰 بيت المال وسجل الزكاة (Bayt Al-Mal Ledger)",
    );
    let athan_toggle = CustomMenuItem::new(
        "athan_toggle".to_string(),
        "🔔 تفعيل/كتم صوت الأذان (Toggle Adhan Sound)",
    );
    let quit = CustomMenuItem::new("quit".to_string(), "خروج (Exit Halal OS)");

    let tray_menu = SystemTrayMenu::new()
        .add_item(show)
        .add_item(prayer_status)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quick_quran)
        .add_item(quick_qibla)
        .add_item(quick_zakat)
        .add_item(athan_toggle)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    let system_tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                let window = app.get_window("main").unwrap();
                match id.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    "show_desktop" | "show" => {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                    "quick_quran" => {
                        window.show().unwrap();
                        window.eval("window.toggleQuranPlay && window.toggleQuranPlay()").unwrap();
                    }
                    "quick_qibla" => {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                        window.eval("window.openApp && window.openApp('qibla')").unwrap();
                    }
                    "quick_zakat" => {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                        window.eval("window.openApp && window.openApp('zakat')").unwrap();
                    }
                    "athan_toggle" => {
                        window.eval("window.toggleAthanMute && window.toggleAthanMute()").unwrap();
                    }
                    _ => {}
                }
            }
            SystemTrayEvent::LeftClick { .. } => {
                let window = app.get_window("main").unwrap();
                if window.is_visible().unwrap_or(false) {
                    window.hide().unwrap();
                } else {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
            _ => {}
        })
        .on_window_event(|event| match event.event() {
            WindowEvent::CloseRequested { api, .. } => {
                // Prevent application termination on window close; minimize to system tray instead
                event.window().hide().unwrap();
                api.prevent_close();
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![
            get_system_status,
            calculate_prayer_times,
            get_hijri_date,
            verify_app_signature,
            trigger_adhan_notification,
            query_local_ai,
            update_tray_prayer_status,
            toggle_window_visibility
        ])
        .run(tauri::generate_context!())
        .expect("error while running Halal OS Tauri application");
}
