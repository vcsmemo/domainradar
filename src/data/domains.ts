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

export const LAST_UPDATED_AT = "Oct 03, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "gitbench.dev",
    "maskedName": "g***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 2021,
    "referringDomains": 41,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitbench.dev",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 2,
    "name": "promptboost.com",
    "maskedName": "p***st.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 44,
    "backlinksCount": 4436,
    "referringDomains": 123,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptboost.com",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 3,
    "name": "flowmetrics.io",
    "maskedName": "f***cs.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 44,
    "backlinksCount": 1611,
    "referringDomains": 74,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowmetrics.io",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 4,
    "name": "omnihub.io",
    "maskedName": "o***ub.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 42,
    "backlinksCount": 1680,
    "referringDomains": 131,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnihub.io",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 5,
    "name": "neurabench.ai",
    "maskedName": "n***ch.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 1387,
    "referringDomains": 142,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurabench.ai",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 8,
    "name": "opslab.ai",
    "maskedName": "o***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 1149,
    "referringDomains": 122,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opslab.ai",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 9,
    "name": "flowops.co",
    "maskedName": "f***ps.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 4190,
    "referringDomains": 114,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowops.co",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 10,
    "name": "fitnode.dev",
    "maskedName": "f***de.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 1746,
    "referringDomains": 73,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitnode.dev",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 11,
    "name": "gitdesk.app",
    "maskedName": "g***sk.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 3041,
    "referringDomains": 45,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitdesk.app",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  },
  {
    "id": 12,
    "name": "scaleflow.io",
    "maskedName": "s***ow.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 28,
    "backlinksCount": 3637,
    "referringDomains": 63,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleflow.io",
    "isClean": true,
    "droppedAt": "Oct 03, 2026"
  }
];
