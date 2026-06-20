# 🏷️ GitHub Labels Setup Script
# Run this with GitHub CLI: bash .github/scripts/setup-labels.sh

gh label create "good first issue" --color "7057ff" --description "Great for newcomers to open source" --force
gh label create "help wanted" --color "008672" --description "Extra attention is needed" --force
gh label create "hacktoberfest" --color "ff7518" --description "Hacktoberfest eligible issue" --force
gh label create "documentation" --color "0075ca" --description "Improvements or additions to documentation" --force
gh label create "bug" --color "d73a4a" --description "Something isn't working" --force
gh label create "enhancement" --color "a2eeef" --description "New feature or request" --force
gh label create "security" --color "ee0701" --description "Security fix or hardening" --force
gh label create "ui/ux" --color "e4e669" --description "User interface or experience" --force
gh label create "architecture" --color "0052cc" --description "Core architecture and design" --force
gh label create "linux" --color "e11d48" --description "Linux-specific issue" --force
gh label create "browser" --color "16a34a" --description "Halal Browser related" --force
gh label create "ai" --color "7c3aed" --description "AI and machine learning features" --force
gh label create "islamic" --color "15803d" --description "Islamic feature or content" --force
gh label create "privacy" --color "6d28d9" --description "Privacy feature or concern" --force
gh label create "performance" --color "f97316" --description "Performance improvement" --force
gh label create "translation" --color "06b6d4" --description "Translation and localization" --force
gh label create "arabic" --color "166534" --description "Arabic/RTL language support" --force
gh label create "kernel" --color "dc2626" --description "Linux kernel module" --force
gh label create "rust" --color "b45309" --description "Rust language modules" --force
gh label create "go" --color "0369a1" --description "Go language modules" --force
gh label create "python" --color "1d4ed8" --description "Python AI/Islamic modules" --force
gh label create "cloud" --color "0891b2" --description "Halal Cloud features" --force
gh label create "store" --color "7c3aed" --description "Halal Store features" --force
gh label create "needs-triage" --color "e2e8f0" --description "Needs maintainer triage" --force
gh label create "needs-discussion" --color "fef3c7" --description "Needs community discussion before implementation" --force
gh label create "wontfix" --color "ffffff" --description "This will not be worked on" --force
gh label create "duplicate" --color "cfd3d7" --description "This issue or pull request already exists" --force
gh label create "blocked" --color "b91c1c" --description "Blocked by another issue or external factor" --force
gh label create "in-progress" --color "84cc16" --description "Currently being worked on" --force
gh label create "roadmap" --color "4f46e5" --description "Part of the official roadmap" --force

echo "✅ All labels created successfully!"
echo "جزاكم الله خيراً"
