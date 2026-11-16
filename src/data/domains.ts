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

export const LAST_UPDATED_AT = "Nov 16, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "opsstack.dev",
    "maskedName": "o***ck.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 813,
    "referringDomains": 88,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsstack.dev",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 2,
    "name": "omniops.dev",
    "maskedName": "o***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 45,
    "backlinksCount": 4453,
    "referringDomains": 116,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omniops.dev",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 3,
    "name": "finstack.co",
    "maskedName": "f***ck.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 40,
    "backlinksCount": 4309,
    "referringDomains": 78,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finstack.co",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 4,
    "name": "stacknode.com",
    "maskedName": "s***de.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 40,
    "backlinksCount": 1271,
    "referringDomains": 56,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stacknode.com",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 5,
    "name": "bytebench.io",
    "maskedName": "b***ch.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 3364,
    "referringDomains": 89,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytebench.io",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
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
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 8,
    "name": "metriclab.app",
    "maskedName": "m***ab.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 3108,
    "referringDomains": 101,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metriclab.app",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 9,
    "name": "metricflow.app",
    "maskedName": "m***ow.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 34,
    "backlinksCount": 3616,
    "referringDomains": 35,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricflow.app",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 10,
    "name": "byteops.dev",
    "maskedName": "b***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 34,
    "backlinksCount": 1553,
    "referringDomains": 64,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=byteops.dev",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 11,
    "name": "finsync.dev",
    "maskedName": "f***nc.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 33,
    "backlinksCount": 1588,
    "referringDomains": 127,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finsync.dev",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  },
  {
    "id": 12,
    "name": "stackboost.co",
    "maskedName": "s***st.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 29,
    "backlinksCount": 1718,
    "referringDomains": 108,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackboost.co",
    "isClean": true,
    "droppedAt": "Nov 16, 2026"
  }
];
