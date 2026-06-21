#!/usr/bin/env python3
import os
import re
import sys

AUDIT_FILE_PATH = r"C:\Users\Ahmed Fawzy\.gemini\antigravity-ide\brain\ad7c86a7-898e-49b9-8f8d-c0a7320fdb30\halal_os_audit.md"
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
SH_OUTPUT_PATH = os.path.join(OUTPUT_DIR, "create-issues.sh")
PS_OUTPUT_PATH = os.path.join(OUTPUT_DIR, "create-issues.ps1")

def parse_issues(file_path):
    if not os.path.exists(file_path):
        print(f"Error: Audit file not found at {file_path}")
        sys.exit(1)

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the categories and their tables
    # Categories look like: ### [Icon] [Name] ([Number] issues) or similar
    # Tables are: | # | Title | Labels | followed by separators, then rows
    
    sections = re.split(r"^(?=##\s+)", content, flags=re.MULTILINE)
    
    parsed_issues = []
    
    current_main_tag = ""
    for section in sections:
        if "## 🟣 100 Good First Issues" in section:
            current_main_tag = "good-first"
        elif "## 🔵 50 Help Wanted Issues" in section:
            current_main_tag = "help-wanted"
        elif "## 🎃 25 Hacktoberfest Issues" in section:
            current_main_tag = "hacktoberfest"
        else:
            continue
            
        # Parse sub-categories and tables inside this main section
        sub_sections = re.split(r"^(?=###\s+)", section, flags=re.MULTILINE)
        for sub in sub_sections:
            sub_match = re.match(r"^###\s+(?:[^\w]*)\s*([\w\s&/]+)", sub)
            category_name = sub_match.group(1).strip() if sub_match else "General"
            
            # Find the markdown table rows
            # Format: | # | Title | Labels |
            lines = sub.split("\n")
            for line in lines:
                line = line.strip()
                if not line.startswith("|") or line.startswith("| -") or "Title | Labels" in line or "Title" in line:
                    continue
                # Split row
                parts = [p.strip() for p in line.split("|")[1:-1]]
                if len(parts) >= 3:
                    num_str, title, labels_raw = parts[0], parts[1], parts[2]
                    if not num_str.isdigit():
                        continue
                    
                    # Parse labels: e.g. `good first issue` `documentation`
                    labels = re.findall(r"`([^`]+)`", labels_raw)
                    
                    parsed_issues.append({
                        "main_type": current_main_tag,
                        "category": category_name,
                        "title": title,
                        "labels": labels
                    })
                    
    return parsed_issues

def escape_sh(text):
    return text.replace("'", "'\\''")

def escape_ps(text):
    return text.replace("`", "``").replace('"', '`"').replace('$', '`$')

def main():
    print(f"Reading issues from {AUDIT_FILE_PATH}...")
    issues = parse_issues(AUDIT_FILE_PATH)
    print(f"Successfully parsed {len(issues)} issues.")
    
    # 1. Generate Bash Script
    sh_lines = [
        "#!/bin/bash",
        "# Automated script to create Halal OS issues via GitHub CLI",
        "echo 'Starting issue creation for Halal OS...'",
        ""
    ]
    
    for idx, issue in enumerate(issues, 1):
        title = issue["title"]
        # Format labels as comma-separated
        labels_str = ",".join(issue["labels"])
        body = (
            f"### Description\\n"
            f"This issue is part of the Halal OS open-source transformation plan.\\n\\n"
            f"**Task**: {title}\\n"
            f"**Category**: {issue['category']}\\n\\n"
            f"### How to Contribute\\n"
            f"Please refer to [CONTRIBUTING.md](https://github.com/ahmedfawzyjr/Halal-OS/blob/main/CONTRIBUTING.md) "
            f"and our [CODE_OF_CONDUCT.md](https://github.com/ahmedfawzyjr/Halal-OS/blob/main/CODE_OF_CONDUCT.md).\\n"
            f"Reply with `/assign` if you want to work on this!"
        )
        
        cmd = f"gh issue create --title '{escape_sh(title)}' --body '{escape_sh(body)}' --label '{labels_str}'"
        sh_lines.append(f"echo 'Creating issue {idx}/{len(issues)}: {escape_sh(title)}...'")
        sh_lines.append(cmd)
        
    sh_lines.append("")
    sh_lines.append("echo 'All issues created successfully!'")
    
    with open(SH_OUTPUT_PATH, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(sh_lines))
    print(f"Generated Bash script: {SH_OUTPUT_PATH}")
    
    # 2. Generate PowerShell Script
    ps_lines = [
        "# Automated script to create Halal OS issues via GitHub CLI",
        "Write-Host 'Starting issue creation for Halal OS...'",
        ""
    ]
    
    for idx, issue in enumerate(issues, 1):
        title = issue["title"]
        labels_str = ",".join(issue["labels"])
        body = (
            f"### Description\n"
            f"This issue is part of the Halal OS open-source transformation plan.\n\n"
            f"**Task**: {title}\n"
            f"**Category**: {issue['category']}\n\n"
            f"### How to Contribute\n"
            f"Please refer to [CONTRIBUTING.md](https://github.com/ahmedfawzyjr/Halal-OS/blob/main/CONTRIBUTING.md) "
            f"and our [CODE_OF_CONDUCT.md](https://github.com/ahmedfawzyjr/Halal-OS/blob/main/CODE_OF_CONDUCT.md).\n"
            f"Reply with `/assign` if you want to work on this!"
        )
        
        # Escape for PowerShell double quotes
        title_esc = escape_ps(title)
        body_esc = escape_ps(body)
        
        cmd = f'gh issue create --title "{title_esc}" --body "{body_esc}" --label "{labels_str}"'
        ps_lines.append(f'Write-Host "Creating issue {idx}/{len(issues)}: {title_esc}..."')
        ps_lines.append(cmd)
        
    ps_lines.append("")
    ps_lines.append("Write-Host 'All issues created successfully!'")
    
    with open(PS_OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(ps_lines))
    print(f"Generated PowerShell script: {PS_OUTPUT_PATH}")

if __name__ == "__main__":
    main()
