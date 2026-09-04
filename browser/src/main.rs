//! Safa Sovereign Web Browser Core & Faith Filter Engine (safa-browser)
//! DNS-over-HTTPS (DoH), Islamic faith-safety filtering, tracker interception, and privacy protection.

use std::collections::HashSet;
use std::env;

pub struct FilterRule {
    pub category: &'static str,
    pub pattern: &'static str,
    pub reason: &'static str,
}

pub struct SafaBrowserEngine {
    pub doh_primary: &'static str,
    pub doh_secondary: &'static str,
    pub filter_rules: Vec<FilterRule>,
    pub blocked_domains: HashSet<&'static str>,
}

impl SafaBrowserEngine {
    pub fn new() -> Self {
        let mut domains = HashSet::new();
        domains.insert("doubleclick.net");
        domains.insert("google-analytics.com");
        domains.insert("ads.facebook.com");
        domains.insert("popads.net");
        domains.insert("scorecardresearch.com");
        domains.insert("taboola.com");
        domains.insert("outbrain.com");

        let rules = vec![
            FilterRule { category: "Gambling/Maysir", pattern: "casino", reason: "Maysir (gambling/betting) violates Islamic ethics" },
            FilterRule { category: "Gambling/Maysir", pattern: "betting", reason: "Maysir (gambling/betting) violates Islamic ethics" },
            FilterRule { category: "Gambling/Maysir", pattern: "poker", reason: "Maysir (gambling/betting) violates Islamic ethics" },
            FilterRule { category: "Gambling/Maysir", pattern: "slot-machine", reason: "Maysir (gambling/betting) violates Islamic ethics" },
            FilterRule { category: "Pornography/Fahisha", pattern: "porn", reason: "Explicit content / Fahisha violates Islamic ethics" },
            FilterRule { category: "Pornography/Fahisha", pattern: "xxx", reason: "Explicit content / Fahisha violates Islamic ethics" },
            FilterRule { category: "Pornography/Fahisha", pattern: "nudity", reason: "Explicit content / Fahisha violates Islamic ethics" },
            FilterRule { category: "Usury/Riba", pattern: "payday-loan", reason: "Predatory usury / Riba violates Islamic ethics" },
            FilterRule { category: "Usury/Riba", pattern: "binary-options-scam", reason: "Gharar and deceptive trading schemes" },
            FilterRule { category: "Intoxicants/Khamr", pattern: "online-liquor", reason: "Intoxicants / Khamr promotion violates Islamic ethics" },
        ];

        SafaBrowserEngine {
            doh_primary: "https://family.cloudflare-dns.com/dns-query",
            doh_secondary: "https://dns-family.adguard.com/dns-query",
            filter_rules: rules,
            blocked_domains: domains,
        }
    }

    pub fn inspect_url(&self, url: &str) -> Result<bool, (&'static str, &'static str)> {
        let lower_url = url.to_lowercase();

        // 1. Check tracker domains
        for domain in &self.blocked_domains {
            if lower_url.contains(domain) {
                return Err(("Telemetry/Ad Tracker", "Blocked intrusive advertising and tracking beacon"));
            }
        }

        // 2. Check Islamic faith-safety filter rules
        for rule in &self.filter_rules {
            if lower_url.contains(rule.pattern) {
                return Err((rule.category, rule.reason));
            }
        }

        Ok(true)
    }

    pub fn print_status(&self) {
        println!("╔═══════════════════════════════════════════════════════════════════╗");
        println!("║               ☪  SAFA SOVEREIGN BROWSER ENGINE                    ║");
        println!("║               Faith-Safe & Zero-Tracking Engine                   ║");
        println!("╠═══════════════════════════════════════════════════════════════════╣");
        println!("  Primary DoH:   {}", self.doh_primary);
        println!("  Secondary DoH: {}", self.doh_secondary);
        println!("  Active Rules:  {} Faith-Safety Filter Patterns", self.filter_rules.len());
        println!("  Adblock Rules: {} Known Tracker Domains Intercepted", self.blocked_domains.len());
        println!("  Mode:          Clean Islamic Family Browsing (100% On-Device)",);
        println!("╚═══════════════════════════════════════════════════════════════════╝");
    }
}

fn print_help() {
    println!("☪ safa-browser - Sovereign Islamic Web Engine v2.0.0");
    println!("Usage: safa-browser <command> [options]\n");
    println!("Commands:");
    println!("  --status              Display browser security & DoH configuration");
    println!("  --inspect <url>       Inspect a URL against faith-safety and privacy filters");
    println!("  --test-suite          Run automated inspection test suite on sample URLs");
    println!("  --list-categories     List active faith-safety filter categories");
}

fn main() {
    let args: Vec<String> = env::args().collect();
    let engine = SafaBrowserEngine::new();

    if args.len() < 2 {
        print_help();
        return;
    }

    match args[1].as_str() {
        "--status" => {
            engine.print_status();
        }
        "--inspect" => {
            if args.len() < 3 {
                eprintln!("Error: URL required. Example: safa-browser --inspect https://quran.com");
                return;
            }
            let url = &args[2];
            match engine.inspect_url(url) {
                Ok(_) => println!("✅ [ALLOWED] Clean and safe to load: {}", url),
                Err((cat, reason)) => {
                    println!("🛑 [BLOCKED] Access restricted: {}", url);
                    println!("   Category: {}", cat);
                    println!("   Reason:   {}", reason);
                }
            }
        }
        "--test-suite" => {
            engine.print_status();
            println!("\nRunning Filter Test Suite:\n");
            let samples = vec![
                "https://quran.halalos.org/surah/1",
                "https://sunnah.com/bukhari:1",
                "https://ads.doubleclick.net/pagead/id=4921",
                "https://online-casino-royale.com/slots",
                "https://predatory-payday-loans-instant.com/borrow",
                "https://islamqa.info/en/answers/1",
            ];

            for url in samples {
                match engine.inspect_url(url) {
                    Ok(_) => println!("  ✅ ALLOWED: {:<50}", url),
                    Err((cat, reason)) => println!("  🛑 BLOCKED: {:<50} [{}: {}]", url, cat, reason),
                }
            }
        }
        "--list-categories" => {
            println!("☪ Safa Browser Active Faith-Safety Filter Categories:");
            let mut cats: Vec<&'static str> = engine.filter_rules.iter().map(|r| r.category).collect();
            cats.sort();
            cats.dedup();
            for c in cats {
                println!("  • {}", c);
            }
        }
        _ => {
            print_help();
        }
    }
}
