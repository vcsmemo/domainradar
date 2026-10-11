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

export const LAST_UPDATED_AT = "Oct 11, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "vectorscale.co",
    "maskedName": "v***le.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 42,
    "backlinksCount": 1080,
    "referringDomains": 146,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorscale.co",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 2,
    "name": "autohub.io",
    "maskedName": "a***ub.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 4382,
    "referringDomains": 63,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autohub.io",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 3,
    "name": "promptflow.co",
    "maskedName": "p***ow.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 39,
    "backlinksCount": 1689,
    "referringDomains": 119,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptflow.co",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 4,
    "name": "finsync.co",
    "maskedName": "f***nc.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 2519,
    "referringDomains": 110,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finsync.co",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 5,
    "name": "pulselab.dev",
    "maskedName": "p***ab.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 38,
    "backlinksCount": 1942,
    "referringDomains": 42,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulselab.dev",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 6,
    "name": "automind.app",
    "maskedName": "a***nd.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 866,
    "referringDomains": 52,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=automind.app",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 7,
    "name": "devlab.io",
    "maskedName": "d***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 1885,
    "referringDomains": 106,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devlab.io",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
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
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 10,
    "name": "vectorlab.co",
    "maskedName": "v***ab.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 2046,
    "referringDomains": 63,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorlab.co",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 11,
    "name": "cloudbase.ai",
    "maskedName": "c***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 28,
    "backlinksCount": 1742,
    "referringDomains": 148,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudbase.ai",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  },
  {
    "id": 12,
    "name": "gitnode.com",
    "maskedName": "g***de.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 28,
    "backlinksCount": 3343,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitnode.com",
    "isClean": true,
    "droppedAt": "Oct 11, 2026"
  }
];
