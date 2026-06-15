use gtk4::prelude::*;
use gtk4::{
    Application, ApplicationWindow, Box as GtkBox, Label, Orientation, 
    Notebook, Frame, CenterBox
};
use libadwaita as adw;
use adw::prelude::*;

use halal_hdk::{
    HalalButton, ButtonVariant, HalalCard, HalalInput, InputType, 
    HalalSwitch, icons
};

fn build_ui(app: &adw::Application) {
    let window = adw::ApplicationWindow::builder()
        .application(app)
        .title("☪ Halal Design Kit (HDK) - Interactive Storybook")
        .default_width(800)
        .default_height(600)
        .build();

    let main_box = GtkBox::builder()
        .orientation(Orientation::Vertical)
        .spacing(12)
        .margin_top(18)
        .margin_bottom(18)
        .margin_start(18)
        .margin_end(18)
        .build();

    // Title Banner
    let title = Label::builder()
        .label("Halal Design Kit (HDK) Crate Specimen")
        .css_classes(vec!["title-1".to_string()])
        .build();
    main_box.append(&title);

    let notebook = Notebook::new();

    // --- TAB 1: BUTTONS ---
    let btn_box = GtkBox::builder()
        .orientation(Orientation::Vertical)
        .spacing(16)
        .margin_top(12)
        .build();

    let primary_btn = HalalButton::new("Primary Action", ButtonVariant::Primary, false);
    let secondary_btn = HalalButton::new("Secondary Button", ButtonVariant::Secondary, false);
    let ghost_btn = HalalButton::new("Ghost Text Link", ButtonVariant::Ghost, false);
    let gold_btn = HalalButton::new("Gold Premium Action", ButtonVariant::Gold, false);
    let danger_btn = HalalButton::new("Destructive Action", ButtonVariant::Danger, false);
    let prayer_btn = HalalButton::new("Prayer-Aware Action Button", ButtonVariant::Primary, true);

    btn_box.append(primary_btn.as_widget());
    btn_box.append(secondary_btn.as_widget());
    btn_box.append(ghost_btn.as_widget());
    btn_box.append(gold_btn.as_widget());
    btn_box.append(danger_btn.as_widget());
    btn_box.append(prayer_btn.as_widget());

    notebook.append_page(&btn_box, Some(&Label::new(Some("Buttons"))));

    // --- TAB 2: CARDS & INPUTS ---
    let form_box = GtkBox::builder()
        .orientation(Orientation::Vertical)
        .spacing(16)
        .margin_top(12)
        .build();

    // Elevation Cards
    let card_e1 = HalalCard::new(1, true);
    card_e1.add(&Label::new(Some("Elevation 1 Glass Card (Standard surface)")));
    form_box.append(card_e1.as_widget());

    let card_e3 = HalalCard::new(3, true);
    card_e3.add(&Label::new(Some("Elevation 3 Glass Elevated Card (Modal/dialog style)")));
    form_box.append(card_e3.as_widget());

    // Inputs
    let text_input = HalalInput::new("Username or Email", InputType::Text);
    text_input.set_state("success");
    form_box.append(text_input.as_widget());

    let password_input = HalalInput::new("Enter Vault Password", InputType::Password);
    password_input.set_state("error");
    form_box.append(password_input.as_widget());

    let search_input = HalalInput::new("Search Quran verses...", InputType::Search);
    form_box.append(search_input.as_widget());

    // Switches
    let switch_box = GtkBox::new(Orientation::Horizontal, 12);
    switch_box.append(&Label::new(Some("Enable System Adhan Notifications:")));
    let sound_switch = HalalSwitch::new(true);
    switch_box.append(sound_switch.as_widget());
    form_box.append(&switch_box);

    notebook.append_page(&form_box, Some(&Label::new(Some("Cards & Inputs"))));

    // --- TAB 3: ICONS ---
    let icon_box = GtkBox::builder()
        .orientation(Orientation::Vertical)
        .spacing(16)
        .margin_top(12)
        .build();

    let icon_labels = vec!["crescent", "kaaba", "compass", "shield", "quran"];
    for name in icon_labels {
        let row = GtkBox::new(Orientation::Horizontal, 20);
        row.append(&Label::builder().label(&format!("Icon: {}", name)).width_request(120).build());
        
        if let Some(svg_str) = icons::get_icon_svg(name) {
            let desc_lbl = Label::new(Some("SVG loaded successfully"));
            desc_lbl.set_tooltip_text(Some(svg_str));
            row.append(&desc_lbl);
        }
        icon_box.append(&row);
    }
    notebook.append_page(&icon_box, Some(&Label::new(Some("Icons Library"))));

    main_box.append(&notebook);
    window.set_content(Some(&main_box));
    window.present();
}

fn main() {
    let app = adw::Application::builder()
        .application_id("org.halalos.hdk.storybook")
        .build();

    app.connect_activate(build_ui);
    app.run();
}
