use gtk4::prelude::*;
use gtk4::{Box, Orientation, Widget};

pub struct HalalCard {
    widget: Box,
    elevation: u32,
}

impl HalalCard {
    pub fn new(elevation: u32, glass: bool) -> Self {
        let widget = Box::builder()
            .orientation(Orientation::Vertical)
            .css_classes(vec!["halal-card".to_string()])
            .build();

        // Apply elevation class
        widget.add_css_class(&format!("elevation-{}", elevation));

        if glass {
            if elevation > 1 {
                widget.add_css_class("glass-panel-elevated");
            } else {
                widget.add_css_class("glass-panel");
            }
        }

        HalalCard { widget, elevation }
    }

    pub fn add<W: IsA<Widget>>(&self, child: &W) {
        self.widget.append(child);
    }

    pub fn as_widget(&self) -> &Box {
        &self.widget
    }

    pub fn set_elevation(&mut self, elevation: u32) {
        self.widget.remove_css_class(&format!("elevation-{}", self.elevation));
        self.elevation = elevation;
        self.widget.add_css_class(&format!("elevation-{}", elevation));
    }
}
