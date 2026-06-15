use gtk4::prelude::*;
use gtk4::Switch;

pub struct HalalSwitch {
    widget: Switch,
}

impl HalalSwitch {
    pub fn new(active: bool) -> Self {
        let switch = Switch::builder()
            .active(active)
            .css_classes(vec!["halal-switch".to_string()])
            .build();

        HalalSwitch { widget: switch }
    }

    pub fn as_widget(&self) -> &Switch {
        &self.widget
    }

    pub fn is_active(&self) -> bool {
        self.widget.is_active()
    }

    pub fn set_active(&self, active: bool) {
        self.widget.set_active(active);
    }

    pub fn connect_state_set<F: Fn(&Switch, bool) -> glib::Propagation + 'static>(&self, f: F) {
        self.widget.connect_state_set(f);
    }
}
