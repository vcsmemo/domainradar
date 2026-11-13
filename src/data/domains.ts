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

export const LAST_UPDATED_AT = "Nov 13, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "strataboard.io",
    "maskedName": "s***rd.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 3877,
    "referringDomains": 137,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=strataboard.io",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 2,
    "name": "meddesk.co",
    "maskedName": "m***sk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 1871,
    "referringDomains": 137,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=meddesk.co",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 3,
    "name": "cloudops.ai",
    "maskedName": "c***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 1013,
    "referringDomains": 105,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudops.ai",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 4,
    "name": "devflow.com",
    "maskedName": "d***ow.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 39,
    "backlinksCount": 3410,
    "referringDomains": 36,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=devflow.com",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 5,
    "name": "omnisync.io",
    "maskedName": "o***nc.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 1349,
    "referringDomains": 137,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnisync.io",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 8,
    "name": "autometrics.app",
    "maskedName": "a***cs.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 34,
    "backlinksCount": 2381,
    "referringDomains": 75,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autometrics.app",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 9,
    "name": "hyperscale.co",
    "maskedName": "h***le.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 33,
    "backlinksCount": 3567,
    "referringDomains": 121,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperscale.co",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 10,
    "name": "autonode.dev",
    "maskedName": "a***de.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 31,
    "backlinksCount": 1972,
    "referringDomains": 142,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=autonode.dev",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 11,
    "name": "flowcraft.app",
    "maskedName": "f***ft.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 29,
    "backlinksCount": 2920,
    "referringDomains": 91,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowcraft.app",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  },
  {
    "id": 12,
    "name": "neurahub.dev",
    "maskedName": "n***ub.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 28,
    "backlinksCount": 3473,
    "referringDomains": 121,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurahub.dev",
    "isClean": true,
    "droppedAt": "Nov 13, 2026"
  }
];
