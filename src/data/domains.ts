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

export const LAST_UPDATED_AT = "Sep 21, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "opsnode.co",
    "maskedName": "o***de.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 2886,
    "referringDomains": 118,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsnode.co",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 2,
    "name": "neuranode.co",
    "maskedName": "n***de.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 44,
    "backlinksCount": 1611,
    "referringDomains": 117,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuranode.co",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 3,
    "name": "stackdeploy.app",
    "maskedName": "s***oy.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 1635,
    "referringDomains": 58,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackdeploy.app",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 4,
    "name": "bytegenie.app",
    "maskedName": "b***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 43,
    "backlinksCount": 1972,
    "referringDomains": 120,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytegenie.app",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
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
    "droppedAt": "Sep 21, 2026"
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
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 7,
    "name": "nexuspulse.ai",
    "maskedName": "n***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 1118,
    "referringDomains": 140,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexuspulse.ai",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 8,
    "name": "devsync.io",
    "maskedName": "d***nc.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 3751,
    "referringDomains": 77,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=devsync.io",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 9,
    "name": "vectorgenie.co",
    "maskedName": "v***ie.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 2972,
    "referringDomains": 76,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorgenie.co",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 10,
    "name": "stratahub.co",
    "maskedName": "s***ub.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 30,
    "backlinksCount": 2461,
    "referringDomains": 107,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratahub.co",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 11,
    "name": "stratabench.dev",
    "maskedName": "s***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 1889,
    "referringDomains": 59,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratabench.dev",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  },
  {
    "id": 12,
    "name": "promptstack.com",
    "maskedName": "p***ck.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 2618,
    "referringDomains": 128,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptstack.com",
    "isClean": true,
    "droppedAt": "Sep 21, 2026"
  }
];
