export interface ExpiredDomain {
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
  dropStatus: 'Available' | 'Pending Delete' | 'Auction';
  checkUrl: string;
  isClean: boolean;
  droppedAt: string;
}

export const LAST_UPDATED_AT = "Nov 18, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "stratabench.dev",
    "maskedName": "s***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 48,
    "backlinksCount": 3520,
    "referringDomains": 54,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratabench.dev",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 2,
    "name": "apexnode.io",
    "maskedName": "a***de.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 47,
    "backlinksCount": 1427,
    "referringDomains": 142,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexnode.io",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 3,
    "name": "hyperops.app",
    "maskedName": "h***ps.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 44,
    "backlinksCount": 1653,
    "referringDomains": 84,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperops.app",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 4,
    "name": "synthbase.co",
    "maskedName": "s***se.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 41,
    "backlinksCount": 3674,
    "referringDomains": 56,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthbase.co",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 5,
    "name": "fitops.dev",
    "maskedName": "f***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 1685,
    "referringDomains": 41,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitops.dev",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 6,
    "name": "promptgenie.app",
    "maskedName": "p***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 1250,
    "referringDomains": 55,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 7,
    "name": "saasmetric.co",
    "maskedName": "s***ic.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1850,
    "referringDomains": 72,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 8,
    "name": "scalebase.co",
    "maskedName": "s***se.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 3096,
    "referringDomains": 54,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalebase.co",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 9,
    "name": "logiccraft.co",
    "maskedName": "l***ft.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 31,
    "backlinksCount": 3814,
    "referringDomains": 60,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logiccraft.co",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 10,
    "name": "stratastack.io",
    "maskedName": "s***ck.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 30,
    "backlinksCount": 986,
    "referringDomains": 131,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratastack.io",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 11,
    "name": "omnilab.ai",
    "maskedName": "o***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 30,
    "backlinksCount": 3748,
    "referringDomains": 149,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnilab.ai",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  },
  {
    "id": 12,
    "name": "neurapulse.app",
    "maskedName": "n***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 29,
    "backlinksCount": 2315,
    "referringDomains": 35,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurapulse.app",
    "isClean": true,
    "droppedAt": "Nov 18, 2026"
  }
];
