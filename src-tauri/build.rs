fn main() {
    let mut attrs = tauri_build::Attributes::new();
    let mut windows_attrs = tauri_build::WindowsAttributes::new();

    let manifest_dir = std::env::var("CARGO_MANIFEST_DIR").unwrap_or_else(|_| ".".to_string());
    let icon_path = format!("{}/icons/icon.ico", manifest_dir.replace('\\', "/"));
    windows_attrs = windows_attrs.window_icon_path(std::path::PathBuf::from(icon_path));

    attrs = attrs.windows_attributes(windows_attrs);
    tauri_build::try_build(attrs).expect("failed to run tauri_build");
}
