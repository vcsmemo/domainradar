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

export const LAST_UPDATED_AT = "Nov 08, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "scaleflow.dev",
    "maskedName": "s***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 46,
    "backlinksCount": 2175,
    "referringDomains": 60,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleflow.dev",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 2,
    "name": "gitmind.dev",
    "maskedName": "g***nd.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 1118,
    "referringDomains": 138,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitmind.dev",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 3,
    "name": "logicwork.ai",
    "maskedName": "l***rk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 3666,
    "referringDomains": 48,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicwork.ai",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 4,
    "name": "bytescale.ai",
    "maskedName": "b***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 40,
    "backlinksCount": 3620,
    "referringDomains": 134,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytescale.ai",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 5,
    "name": "synthmind.com",
    "maskedName": "s***nd.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 37,
    "backlinksCount": 2379,
    "referringDomains": 105,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthmind.com",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
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
    "droppedAt": "Nov 08, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 8,
    "name": "cartsync.co",
    "maskedName": "c***nc.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 34,
    "backlinksCount": 972,
    "referringDomains": 35,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartsync.co",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 9,
    "name": "stacklab.ai",
    "maskedName": "s***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 4243,
    "referringDomains": 74,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stacklab.ai",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 10,
    "name": "logicsync.dev",
    "maskedName": "l***nc.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 30,
    "backlinksCount": 1879,
    "referringDomains": 135,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicsync.dev",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 11,
    "name": "bytedesk.ai",
    "maskedName": "b***sk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 30,
    "backlinksCount": 3407,
    "referringDomains": 123,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytedesk.ai",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  },
  {
    "id": 12,
    "name": "cartbase.com",
    "maskedName": "c***se.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 28,
    "backlinksCount": 1840,
    "referringDomains": 101,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartbase.com",
    "isClean": true,
    "droppedAt": "Nov 08, 2026"
  }
];
