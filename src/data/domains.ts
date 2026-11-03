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

export const LAST_UPDATED_AT = "Nov 03, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "autometrics.com",
    "maskedName": "a***cs.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 2151,
    "referringDomains": 148,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autometrics.com",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 2,
    "name": "promptdesk.io",
    "maskedName": "p***sk.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 44,
    "backlinksCount": 3829,
    "referringDomains": 122,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptdesk.io",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 3,
    "name": "medstack.app",
    "maskedName": "m***ck.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 1728,
    "referringDomains": 49,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medstack.app",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 4,
    "name": "gitcraft.com",
    "maskedName": "g***ft.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 41,
    "backlinksCount": 3896,
    "referringDomains": 145,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitcraft.com",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 5,
    "name": "clouddesk.ai",
    "maskedName": "c***sk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 40,
    "backlinksCount": 1246,
    "referringDomains": 123,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=clouddesk.ai",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 6,
    "name": "devmind.com",
    "maskedName": "d***nd.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 38,
    "backlinksCount": 3436,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devmind.com",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 7,
    "name": "promptgenie.app",
    "maskedName": "p***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 1250,
    "referringDomains": 55,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 8,
    "name": "saasmetric.co",
    "maskedName": "s***ic.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1850,
    "referringDomains": 72,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 9,
    "name": "opscraft.dev",
    "maskedName": "o***ft.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 1794,
    "referringDomains": 102,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opscraft.dev",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 10,
    "name": "agentbase.com",
    "maskedName": "a***se.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 3207,
    "referringDomains": 71,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentbase.com",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 11,
    "name": "agentmetrics.com",
    "maskedName": "a***cs.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 33,
    "backlinksCount": 1595,
    "referringDomains": 114,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentmetrics.com",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  },
  {
    "id": 12,
    "name": "neuradeploy.dev",
    "maskedName": "n***oy.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 33,
    "backlinksCount": 3801,
    "referringDomains": 137,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuradeploy.dev",
    "isClean": true,
    "droppedAt": "Nov 03, 2026"
  }
];
