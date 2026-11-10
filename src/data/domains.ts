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

export const LAST_UPDATED_AT = "Nov 10, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "opsstack.com",
    "maskedName": "o***ck.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 48,
    "backlinksCount": 2688,
    "referringDomains": 84,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsstack.com",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 2,
    "name": "medscale.app",
    "maskedName": "m***le.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 43,
    "backlinksCount": 3779,
    "referringDomains": 119,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medscale.app",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 3,
    "name": "agentboard.io",
    "maskedName": "a***rd.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 43,
    "backlinksCount": 1009,
    "referringDomains": 45,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentboard.io",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 4,
    "name": "cloudstack.co",
    "maskedName": "c***ck.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 43,
    "backlinksCount": 2044,
    "referringDomains": 52,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudstack.co",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 5,
    "name": "autodeploy.dev",
    "maskedName": "a***oy.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 4128,
    "referringDomains": 128,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=autodeploy.dev",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 6,
    "name": "stackcraft.com",
    "maskedName": "s***ft.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 2977,
    "referringDomains": 104,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackcraft.com",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
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
    "droppedAt": "Nov 10, 2026"
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
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 9,
    "name": "logicbase.app",
    "maskedName": "l***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 34,
    "backlinksCount": 1429,
    "referringDomains": 55,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicbase.app",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 10,
    "name": "flowpulse.dev",
    "maskedName": "f***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 33,
    "backlinksCount": 1162,
    "referringDomains": 62,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowpulse.dev",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 11,
    "name": "scaleboard.app",
    "maskedName": "s***rd.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 4087,
    "referringDomains": 38,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboard.app",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  },
  {
    "id": 12,
    "name": "metrichub.app",
    "maskedName": "m***ub.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 4200,
    "referringDomains": 114,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metrichub.app",
    "isClean": true,
    "droppedAt": "Nov 10, 2026"
  }
];
