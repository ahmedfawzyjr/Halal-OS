use gtk4::prelude::*;
use gtk4::{Entry, Image};

pub enum InputType {
    Text,
    Password,
    Search,
}

pub struct HalalInput {
    widget: Entry,
}

impl HalalInput {
    pub fn new(placeholder: &str, input_type: InputType) -> Self {
        let entry = Entry::builder()
            .placeholder_text(placeholder)
            .css_classes(vec!["halal-input".to_string()])
            .build();

        match input_type {
            InputType::Password => {
                entry.set_visibility(false);
                entry.set_invisible_char(Some('•'));
                entry.set_primary_icon_name(Some("dialog-password"));
            }
            InputType::Search => {
                entry.set_primary_icon_name(Some("system-search"));
                entry.add_css_class("search");
            }
            InputType::Text => {}
        }

        HalalInput { widget: entry }
    }

    pub fn as_widget(&self) -> &Entry {
        &self.widget
    }

    pub fn text(&self) -> String {
        self.widget.text().to_string()
    }

    pub fn set_text(&self, text: &str) {
        self.widget.set_text(text);
    }

    pub fn set_state(&self, state: &str) {
        // Clear old state classes
        self.widget.remove_css_class("success");
        self.widget.remove_css_class("error");
        self.widget.remove_css_class("warning");

        match state {
            "success" => {
                self.widget.add_css_class("success");
                self.widget.set_secondary_icon_name(Some("emblem-ok"));
            }
            "error" => {
                self.widget.add_css_class("error");
                self.widget.set_secondary_icon_name(Some("dialog-error"));
            }
            "warning" => {
                self.widget.add_css_class("warning");
                self.widget.set_secondary_icon_name(Some("dialog-warning"));
            }
            _ => {
                self.widget.set_secondary_icon_name(None);
            }
        }
    }
}
