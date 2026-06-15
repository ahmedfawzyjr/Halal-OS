# ☪ Halal Design Kit (HDK)

Production-ready GTK4 and `libadwaita` UI component library for Halal OS. This package standardizes widgets, colors, typography, and Islamic visual integration tokens.

## Package Architecture

```
halal-hdk/
├── Cargo.toml            - Package configuration & GNOME GTK4/adw dependencies
├── README.md             - Design tokens and integration guides
└── src/
    ├── lib.rs            - Exports public modules
    ├── button.rs         - HalalButton component (Primary, Gold, Ghost, etc.)
    ├── card.rs           - HalalCard containers with elevation and glassmorphism styling
    ├── input.rs          - HalalInput form entry elements with inline verification states
    ├── switch.rs         - HalalSwitch toggle component
    ├── icons.rs          - SVG resource mapping for custom Halal Icons
    └── bin/
        └── storybook.rs  - Interactive GTK4/Adw specimen application
```

## Component APIs

### 1. `HalalButton`
Standard action trigger.
- **Variants**: `Primary`, `Secondary`, `Ghost`, `Gold`, `Danger`.
- **Prayer-Awareness**: Adjusts styling or warnings when a prayer interval is close.
```rust
use halal_hdk::{HalalButton, ButtonVariant};

let primary_btn = HalalButton::new("Download Halal OS", ButtonVariant::Primary, false);
primary_btn.connect_clicked(|_btn| {
    println!("Initiating download...");
});
```

### 2. `HalalCard`
Elevated glassmorphic box containers.
- **Elevations**: `0` (flat) to `4` (high shadow).
- **Glassmorphism**: `.glass-panel` and `.glass-panel-elevated` blurring.
```rust
use halal_hdk::HalalCard;

let panel = HalalCard::new(2, true); // Elevation 2, Glass enabled
panel.add(&gtk4::Label::new(Some("Content Inside Card")));
```

### 3. `HalalInput`
Form input fields.
- **Types**: `Text`, `Password`, `Search`.
- **Validation States**: `success`, `error`, `warning`.
```rust
use halal_hdk::{HalalInput, InputType};

let email_input = HalalInput::new("Enter email", InputType::Text);
email_input.set_state("success"); // Renders green validation check icon
```

### 4. `HalalSwitch`
Slide toggle controls.
```rust
use halal_hdk::HalalSwitch;

let active_switch = HalalSwitch::new(true);
```

### 5. `icons`
Built-in vector icons mapping.
- `crescent`: Star & Crescent logo.
- `kaaba`: Kaaba marker.
- `compass`: Qibla directional compass needle.
- `shield`: Security firewall check icon.
- `quran`: Quran book icon.

## Storybook Demonstration

Launch the interactive widget catalogue:
```bash
cargo run --bin hdk-storybook
```
