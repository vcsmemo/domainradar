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

export const LAST_UPDATED_AT = "Sep 29, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "devboard.ai",
    "maskedName": "d***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 2608,
    "referringDomains": 44,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=devboard.ai",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 2,
    "name": "metagenie.com",
    "maskedName": "m***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 43,
    "backlinksCount": 2577,
    "referringDomains": 51,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metagenie.com",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 3,
    "name": "metricwork.dev",
    "maskedName": "m***rk.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 2850,
    "referringDomains": 92,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricwork.dev",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 4,
    "name": "metricpulse.io",
    "maskedName": "m***se.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 41,
    "backlinksCount": 3831,
    "referringDomains": 136,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricpulse.io",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 5,
    "name": "flowdesk.co",
    "maskedName": "f***sk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 3526,
    "referringDomains": 94,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowdesk.co",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 6,
    "name": "opslab.co",
    "maskedName": "o***ab.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 37,
    "backlinksCount": 1631,
    "referringDomains": 90,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opslab.co",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
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
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 9,
    "name": "pulsestack.ai",
    "maskedName": "p***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 33,
    "backlinksCount": 1464,
    "referringDomains": 52,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsestack.ai",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 10,
    "name": "hublab.dev",
    "maskedName": "h***ab.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 30,
    "backlinksCount": 2879,
    "referringDomains": 36,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hublab.dev",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 11,
    "name": "synthbase.com",
    "maskedName": "s***se.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 1335,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthbase.com",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  },
  {
    "id": 12,
    "name": "promptdeploy.io",
    "maskedName": "p***oy.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 2510,
    "referringDomains": 67,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptdeploy.io",
    "isClean": true,
    "droppedAt": "Sep 29, 2026"
  }
];
