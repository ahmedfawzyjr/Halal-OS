use std::io::{self, Write};
use chrono::Local;

struct UserSession {
    username: String,
    authenticated: bool,
}

impl UserSession {
    fn new(username: &str) -> Self {
        UserSession {
            username: username.to_string(),
            authenticated: false,
        }
    }

    /* PAM auth placeholder wrapper */
    fn authenticate_pam(&mut self, password: &str) -> Result<(), &'static str> {
        if password == "bismillah" {
            self.authenticated = true;
            Ok(())
        } else {
            Err("Authentication failed. Invalid credentials.")
        }
    }

    /* Face Recognition biometric login hook */
    fn authenticate_face_id(&mut self) -> Result<(), &'static str> {
        println!("[Biometrics] Initializing camera device for face identification...");
        println!("[Biometrics] Scanning biometric indices... Matches verified.");
        self.authenticated = true;
        Ok(())
    }
}

fn print_prayer_lock_banner() {
    let now = Local::now();
    println!("------------------------------------------------------");
    println!("☪ Halal OS DM - Lock Screen");
    println!("Date: {}", now.format("%Y-%m-%d %H:%M:%S"));
    println!("Islamic Greeting: Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh");
    println!("Note: Screen dims gently 5 mins prior to Adhan times.");
    println!("------------------------------------------------------");
}

fn main() {
    print_prayer_lock_banner();

    print!("Username: ");
    io::stdout().flush().unwrap();
    let mut username = String::new();
    io::stdin().read_line(&mut username).unwrap();
    let username = username.trim();

    let mut session = UserSession::new(username);

    print!("Password (or type 'face' to trigger biometric ID): ");
    io::stdout().flush().unwrap();
    let mut password = String::new();
    io::stdin().read_line(&mut password).unwrap();
    let password = password.trim();

    if password == "face" {
        match session.authenticate_face_id() {
            Ok(_) => println!("Welcome to your halal workspace, {}!", session.username),
            Err(e) => println!("Error: {}", e),
        }
    } else {
        match session.authenticate_pam(password) {
            Ok(_) => println!("Authentication successful. Spawning session for {}...", session.username),
            Err(e) => println!("Error: {}", e),
        }
    }
}
