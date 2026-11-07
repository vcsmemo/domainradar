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

export const LAST_UPDATED_AT = "Nov 07, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "devwork.co",
    "maskedName": "d***rk.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 48,
    "backlinksCount": 4063,
    "referringDomains": 138,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devwork.co",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 2,
    "name": "craftboard.dev",
    "maskedName": "c***rd.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 48,
    "backlinksCount": 2485,
    "referringDomains": 128,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftboard.dev",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 3,
    "name": "agentdesk.co",
    "maskedName": "a***sk.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 1750,
    "referringDomains": 65,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentdesk.co",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 4,
    "name": "craftgenie.dev",
    "maskedName": "c***ie.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 44,
    "backlinksCount": 1425,
    "referringDomains": 113,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftgenie.dev",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 5,
    "name": "primemind.app",
    "maskedName": "p***nd.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 1643,
    "referringDomains": 52,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primemind.app",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 6,
    "name": "finboard.app",
    "maskedName": "f***rd.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 1064,
    "referringDomains": 54,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finboard.app",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
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
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 8,
    "name": "fitops.ai",
    "maskedName": "f***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 2231,
    "referringDomains": 75,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitops.ai",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
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
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 10,
    "name": "medscale.io",
    "maskedName": "m***le.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 33,
    "backlinksCount": 3054,
    "referringDomains": 65,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medscale.io",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 11,
    "name": "metricsync.dev",
    "maskedName": "m***nc.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 1413,
    "referringDomains": 128,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricsync.dev",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  },
  {
    "id": 12,
    "name": "metricmind.co",
    "maskedName": "m***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 1997,
    "referringDomains": 82,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricmind.co",
    "isClean": true,
    "droppedAt": "Nov 07, 2026"
  }
];
