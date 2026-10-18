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

export const LAST_UPDATED_AT = "Oct 18, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "cloudops.ai",
    "maskedName": "c***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 4030,
    "referringDomains": 63,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudops.ai",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 2,
    "name": "agentdeploy.ai",
    "maskedName": "a***oy.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 46,
    "backlinksCount": 4169,
    "referringDomains": 39,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentdeploy.ai",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 3,
    "name": "nexusscale.co",
    "maskedName": "n***le.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 2880,
    "referringDomains": 41,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusscale.co",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 4,
    "name": "opsdesk.com",
    "maskedName": "o***sk.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 2811,
    "referringDomains": 100,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsdesk.com",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 5,
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
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 6,
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
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 7,
    "name": "neurabase.app",
    "maskedName": "n***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 1609,
    "referringDomains": 128,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurabase.app",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 8,
    "name": "vectorops.io",
    "maskedName": "v***ps.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 31,
    "backlinksCount": 3112,
    "referringDomains": 42,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorops.io",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 9,
    "name": "nexusstack.io",
    "maskedName": "n***ck.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 30,
    "backlinksCount": 4336,
    "referringDomains": 93,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusstack.io",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 10,
    "name": "finnode.app",
    "maskedName": "f***de.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 30,
    "backlinksCount": 4406,
    "referringDomains": 129,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finnode.app",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 11,
    "name": "logicbase.ai",
    "maskedName": "l***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 30,
    "backlinksCount": 3078,
    "referringDomains": 48,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicbase.ai",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  },
  {
    "id": 12,
    "name": "metaops.com",
    "maskedName": "m***ps.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 3329,
    "referringDomains": 69,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metaops.com",
    "isClean": true,
    "droppedAt": "Oct 18, 2026"
  }
];
