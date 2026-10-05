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

export const LAST_UPDATED_AT = "Oct 05, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "hubmetrics.dev",
    "maskedName": "h***cs.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 2119,
    "referringDomains": 81,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubmetrics.dev",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 2,
    "name": "cartnode.io",
    "maskedName": "c***de.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 40,
    "backlinksCount": 1432,
    "referringDomains": 47,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartnode.io",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 3,
    "name": "bytework.app",
    "maskedName": "b***rk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 1731,
    "referringDomains": 148,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytework.app",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 4,
    "name": "agentops.co",
    "maskedName": "a***ps.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 37,
    "backlinksCount": 2994,
    "referringDomains": 71,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentops.co",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 5,
    "name": "autosync.io",
    "maskedName": "a***nc.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 2336,
    "referringDomains": 70,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=autosync.io",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
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
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 7,
    "name": "omnistack.com",
    "maskedName": "o***ck.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 2072,
    "referringDomains": 113,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnistack.com",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 9,
    "name": "scaleboard.co",
    "maskedName": "s***rd.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 33,
    "backlinksCount": 3210,
    "referringDomains": 131,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboard.co",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 10,
    "name": "hubflow.co",
    "maskedName": "h***ow.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 2567,
    "referringDomains": 43,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubflow.co",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 11,
    "name": "vectorbase.com",
    "maskedName": "v***se.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 28,
    "backlinksCount": 3890,
    "referringDomains": 130,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorbase.com",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  },
  {
    "id": 12,
    "name": "agentscale.co",
    "maskedName": "a***le.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 4108,
    "referringDomains": 135,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentscale.co",
    "isClean": true,
    "droppedAt": "Oct 05, 2026"
  }
];
