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

export const LAST_UPDATED_AT = "Sep 26, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "nexusstack.app",
    "maskedName": "n***ck.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 47,
    "backlinksCount": 3937,
    "referringDomains": 92,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusstack.app",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 2,
    "name": "agentgenie.ai",
    "maskedName": "a***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 1738,
    "referringDomains": 143,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentgenie.ai",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 3,
    "name": "bytegenie.ai",
    "maskedName": "b***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 39,
    "backlinksCount": 2828,
    "referringDomains": 133,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytegenie.ai",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 4,
    "name": "nexusops.app",
    "maskedName": "n***ps.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 38,
    "backlinksCount": 2213,
    "referringDomains": 67,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusops.app",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
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
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 6,
    "name": "scalelab.app",
    "maskedName": "s***ab.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 36,
    "backlinksCount": 3817,
    "referringDomains": 38,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalelab.app",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
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
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 8,
    "name": "flowbase.co",
    "maskedName": "f***se.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 33,
    "backlinksCount": 2491,
    "referringDomains": 122,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowbase.co",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 9,
    "name": "flowmetrics.com",
    "maskedName": "f***cs.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 33,
    "backlinksCount": 3766,
    "referringDomains": 140,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowmetrics.com",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 10,
    "name": "cloudwork.co",
    "maskedName": "c***rk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 29,
    "backlinksCount": 3748,
    "referringDomains": 74,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudwork.co",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 11,
    "name": "autogenie.app",
    "maskedName": "a***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 29,
    "backlinksCount": 2693,
    "referringDomains": 139,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autogenie.app",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  },
  {
    "id": 12,
    "name": "apexhub.dev",
    "maskedName": "a***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 29,
    "backlinksCount": 3614,
    "referringDomains": 48,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexhub.dev",
    "isClean": true,
    "droppedAt": "Sep 26, 2026"
  }
];
