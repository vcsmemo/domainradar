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

export const LAST_UPDATED_AT = "Oct 02, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "scaleboost.io",
    "maskedName": "s***st.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 43,
    "backlinksCount": 3226,
    "referringDomains": 133,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboost.io",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 2,
    "name": "metadeploy.com",
    "maskedName": "m***oy.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 2227,
    "referringDomains": 36,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metadeploy.com",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 3,
    "name": "strataboost.ai",
    "maskedName": "s***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 42,
    "backlinksCount": 3751,
    "referringDomains": 61,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=strataboost.ai",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 4,
    "name": "stratametrics.co",
    "maskedName": "s***cs.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 40,
    "backlinksCount": 991,
    "referringDomains": 79,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratametrics.co",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 5,
    "name": "devmetrics.app",
    "maskedName": "d***cs.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 39,
    "backlinksCount": 2462,
    "referringDomains": 124,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devmetrics.app",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 7,
    "name": "bytebase.io",
    "maskedName": "b***se.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 2753,
    "referringDomains": 112,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytebase.io",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 8,
    "name": "fingenie.com",
    "maskedName": "f***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 2184,
    "referringDomains": 106,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fingenie.com",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 9,
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
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 10,
    "name": "vectorsync.dev",
    "maskedName": "v***nc.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 33,
    "backlinksCount": 2370,
    "referringDomains": 146,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorsync.dev",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 11,
    "name": "agentdesk.co",
    "maskedName": "a***sk.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 31,
    "backlinksCount": 865,
    "referringDomains": 132,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentdesk.co",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  },
  {
    "id": 12,
    "name": "nexusmetrics.io",
    "maskedName": "n***cs.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 30,
    "backlinksCount": 3649,
    "referringDomains": 41,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusmetrics.io",
    "isClean": true,
    "droppedAt": "Oct 02, 2026"
  }
];
