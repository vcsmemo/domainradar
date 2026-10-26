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

export const LAST_UPDATED_AT = "Oct 26, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "stackflow.co",
    "maskedName": "s***ow.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 44,
    "backlinksCount": 4241,
    "referringDomains": 141,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackflow.co",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 2,
    "name": "stratabase.io",
    "maskedName": "s***se.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 42,
    "backlinksCount": 2184,
    "referringDomains": 60,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratabase.io",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 3,
    "name": "metalab.com",
    "maskedName": "m***ab.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 41,
    "backlinksCount": 2116,
    "referringDomains": 74,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metalab.com",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 4,
    "name": "medstack.app",
    "maskedName": "m***ck.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 40,
    "backlinksCount": 2569,
    "referringDomains": 76,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medstack.app",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 5,
    "name": "nexuswork.co",
    "maskedName": "n***rk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 40,
    "backlinksCount": 1259,
    "referringDomains": 85,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexuswork.co",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 6,
    "name": "neurasync.app",
    "maskedName": "n***nc.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 39,
    "backlinksCount": 2152,
    "referringDomains": 78,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurasync.app",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 7,
    "name": "cartbase.io",
    "maskedName": "c***se.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 39,
    "backlinksCount": 1016,
    "referringDomains": 62,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartbase.io",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 8,
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
    "droppedAt": "Oct 26, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 10,
    "name": "findeploy.com",
    "maskedName": "f***oy.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 35,
    "backlinksCount": 2749,
    "referringDomains": 123,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=findeploy.com",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 11,
    "name": "gitpulse.co",
    "maskedName": "g***se.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 4167,
    "referringDomains": 97,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitpulse.co",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  },
  {
    "id": 12,
    "name": "hubstack.dev",
    "maskedName": "h***ck.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 3956,
    "referringDomains": 84,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubstack.dev",
    "isClean": true,
    "droppedAt": "Oct 26, 2026"
  }
];
