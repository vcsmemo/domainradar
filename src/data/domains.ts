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

export const LAST_UPDATED_AT = "Sep 28, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "autocraft.com",
    "maskedName": "a***ft.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 1327,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autocraft.com",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 2,
    "name": "cartsync.co",
    "maskedName": "c***nc.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 3582,
    "referringDomains": 137,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartsync.co",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 3,
    "name": "hyperdeploy.dev",
    "maskedName": "h***oy.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 41,
    "backlinksCount": 866,
    "referringDomains": 141,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperdeploy.dev",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 4,
    "name": "scaleflow.ai",
    "maskedName": "s***ow.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 2875,
    "referringDomains": 110,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleflow.ai",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 5,
    "name": "primebench.com",
    "maskedName": "p***ch.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 38,
    "backlinksCount": 2895,
    "referringDomains": 139,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primebench.com",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 6,
    "name": "bytedeploy.io",
    "maskedName": "b***oy.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 38,
    "backlinksCount": 1508,
    "referringDomains": 114,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytedeploy.io",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
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
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 9,
    "name": "promptpulse.app",
    "maskedName": "p***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 35,
    "backlinksCount": 4430,
    "referringDomains": 35,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptpulse.app",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 10,
    "name": "primeops.ai",
    "maskedName": "p***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 1907,
    "referringDomains": 105,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primeops.ai",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 11,
    "name": "primescale.com",
    "maskedName": "p***le.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 31,
    "backlinksCount": 1786,
    "referringDomains": 56,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primescale.com",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  },
  {
    "id": 12,
    "name": "logicnode.io",
    "maskedName": "l***de.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 29,
    "backlinksCount": 1676,
    "referringDomains": 47,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicnode.io",
    "isClean": true,
    "droppedAt": "Sep 28, 2026"
  }
];
