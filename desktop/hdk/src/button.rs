use gtk4::prelude::*;
use gtk4::{Button, subclass::prelude::*};

pub enum ButtonVariant {
    Primary,
    Secondary,
    Ghost,
    Gold,
    Danger,
}

pub struct HalalButton {
    widget: Button,
    prayer_aware: bool,
}

impl HalalButton {
    pub fn new(label: &str, variant: ButtonVariant, prayer_aware: bool) -> Self {
        let button = Button::builder()
            .label(label)
            .css_classes(match variant {
                ButtonVariant::Primary => vec!["suggested-action".to_string(), "halal-btn-primary".to_string()],
                ButtonVariant::Secondary => vec!["halal-btn-secondary".to_string()],
                ButtonVariant::Ghost => vec!["flat".to_string(), "halal-btn-ghost".to_string()],
                ButtonVariant::Gold => vec!["halal-btn-gold".to_string(), "accent-gold".to_string()],
                ButtonVariant::Danger => vec!["destructive-action".to_string(), "halal-btn-danger".to_string()],
            })
            .build();

        if prayer_aware {
            // Simulated: adds a gentle visual cue prior to Adhan times
            button.add_css_class("prayer-aware");
            button.set_tooltip_text(Some("This action is prayer-aware (gentle reminders enabled)"));
        }

        HalalButton {
            widget: button,
            prayer_aware,
        }
    }

    pub fn as_widget(&self) -> &Button {
        &self.widget
    }

    pub fn set_label(&self, label: &str) {
        self.widget.set_label(label);
    }

    pub fn connect_clicked<F: Fn(&Button) + 'static>(&self, f: F) {
        self.widget.connect_clicked(f);
    }

    pub fn set_prayer_aware(&mut self, enabled: bool) {
        self.prayer_aware = enabled;
        if enabled {
            self.widget.add_css_class("prayer-aware");
        } else {
            self.widget.remove_css_class("prayer-aware");
        }
    }
}
