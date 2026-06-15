use regex::Regex;
use std::collections::HashSet;

struct BrowserHelper {
    doh_server: String,
    content_filter_enabled: bool,
    blocklist: HashSet<String>,
}

impl BrowserHelper {
    fn new(doh: &str) -> Self {
        let mut list = HashSet::new();
        list.insert("tracker.analytics.com".to_string());
        list.insert("ads.doubleclick.net".to_string());
        list.insert("telemetry.canonical.org".to_string());

        BrowserHelper {
            doh_server: doh.to_string(),
            content_filter_enabled: true,
            blocklist: list,
        }
    }

    /* Checks if host is in browser adblock lists */
    fn inspect_url(&self, url: &str) -> Result<bool, &'static str> {
        let re = Regex::new(r"https?://([^/]+)").unwrap();
        let cap = re.captures(url).ok_or("Invalid URL format")?;
        let host = &cap[1];

        if self.blocklist.contains(host) {
            println!("[Adblock] Intercepted and blocked tracker request: {}", host);
            return Ok(false); // blocked
        }

        // Simulating Haram Content filter keywords checking
        if self.content_filter_enabled {
            let haram_keywords = vec!["casino", "gambling", "poker", "nudity"];
            for kw in haram_keywords {
                if url.contains(kw) {
                    println!("[Faith Filter] Blocked URL containing inappropriate content: '{}'", kw);
                    return Ok(false);
                }
            }
        }

        Ok(true) // allowed
    }

    fn apply_secure_dns(&self) {
        println!("[DNS] Binding default system network socket to Secure DNS-over-HTTPS (DoH): {}", self.doh_server);
    }
}

fn main() {
    println!("☪ Halal Browser Helper Utilities");
    
    let helper = BrowserHelper::new("https://dns.adguard-dns.com/dns-query");
    helper.apply_secure_dns();

    let tests = vec![
        "https://quran.halalos.org/index.html",
        "https://ads.doubleclick.net/track?id=4223",
        "https://online-casino-game.net/play",
    ];

    for url in tests {
        match helper.inspect_url(url) {
            Ok(allowed) => {
                if allowed {
                    println!("Allowed: {}", url);
                } else {
                    println!("Denied Access: {}", url);
                }
            }
            Err(e) => println!("Error inspecting URL: {}", e),
        }
    }
}
