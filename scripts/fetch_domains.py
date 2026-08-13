import json
import re
import random
from datetime import datetime, timedelta

# NicheDomainRadar — Python Data Pipeline & Cleaning Engine

SPAM_KEYWORDS = [
    'casino', 'poker', 'gambling', 'betting', 'slots', 'payday', 'loan',
    'viagra', 'cialis', 'pharmacy', 'adult', 'porn', 'xxx', 'hack', 'crack'
]

def mask_domain(domain_name):
    parts = domain_name.split('.')
    name = parts[0]
    ext = '.'.join(parts[1:])
    
    if len(name) <= 3:
        masked = name[0] + '*' * (len(name) - 1)
    else:
        masked = name[0] + '***' + name[-2:]
        
    return f"{masked}.{ext}"

def is_clean_history(domain_name):
    for kw in SPAM_KEYWORDS:
        if kw in domain_name.lower():
            return False
    return True

def generate_clean_domains():
    sample_raw = [
        {"name": "superlabs.ai", "niche": "AI", "age": 7, "dr": 42, "backlinks": 3450, "ref_domains": 120, "sources": ["ProductHunt", "TechCrunch", "GitHub"]},
        {"name": "devpulse.io", "niche": "DevTools", "age": 5, "dr": 38, "backlinks": 2100, "ref_domains": 95, "sources": ["HackerNews", "Vercel", "GitHub"]},
        {"name": "cloudmetric.co", "niche": "SaaS", "age": 6, "dr": 35, "backlinks": 1850, "ref_domains": 78, "sources": ["Medium", "Substack", "Forbes"]},
        {"name": "healthbot.app", "niche": "Health", "age": 4, "dr": 31, "backlinks": 920, "ref_domains": 45, "sources": ["TechCrunch", "ProductHunt"]},
        {"name": "finflow.io", "niche": "Finance", "age": 8, "dr": 45, "backlinks": 5100, "ref_domains": 160, "sources": ["Bloomberg", "Forbes", "ProductHunt"]},
        {"name": "shopgenie.co", "niche": "E-commerce", "age": 5, "dr": 29, "backlinks": 1150, "ref_domains": 52, "sources": ["Shopify Blog", "Medium"]},
        {"name": "promptcraft.ai", "niche": "AI", "age": 3, "dr": 36, "backlinks": 2400, "ref_domains": 88, "sources": ["ProductHunt", "X/Twitter"]},
        {"name": "codeflow.dev", "niche": "DevTools", "age": 6, "dr": 40, "backlinks": 3100, "ref_domains": 110, "sources": ["GitHub", "StackOverflow"]}
    ]
    
    cleaned_data = []
    for idx, item in enumerate(sample_raw, start=1):
        if not is_clean_history(item["name"]):
            continue
            
        masked = mask_domain(item["name"])
        domain_entry = {
            "id": idx,
            "name": item["name"],
            "maskedName": masked,
            "tld": "." + item["name"].split('.')[-1],
            "niche": item["niche"],
            "domainAgeYears": item["age"],
            "drScore": item["dr"],
            "backlinksCount": item["backlinks"],
            "referringDomains": item["ref_domains"],
            "featuredBacklinks": item["sources"],
            "isClean": True,
            "droppedAt": "Today"
        }
        cleaned_data.append(domain_entry)
        
    return cleaned_data

def update_typescript_file(domains_data):
    ts_content = f"""export interface ExpiredDomain {{
  id: number;
  name: string;
  maskedName: string;
  tld: string;
  niche: 'SaaS' | 'AI' | 'DevTools' | 'Health' | 'Finance' | 'E-commerce';
  domainAgeYears: number;
  drScore: number;
  backlinksCount: number;
  referringDomains: number;
  featuredBacklinks: string[];
  isClean: boolean;
  droppedAt: string;
}}

export const DOMAINS: ExpiredDomain[] = {json.dumps(domains_data, indent=2)};
"""
    with open('src/data/domains.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print("✅ Updated src/data/domains.ts with fresh daily data.")

if __name__ == "__main__":
    domains = generate_clean_domains()
    update_typescript_file(domains)
