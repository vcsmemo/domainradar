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

export const LAST_UPDATED_AT = "Sep 15, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "cartbase.dev",
    "maskedName": "c***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 48,
    "backlinksCount": 3753,
    "referringDomains": 56,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartbase.dev",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 2,
    "name": "agentnode.app",
    "maskedName": "a***de.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 1787,
    "referringDomains": 56,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentnode.app",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 3,
    "name": "medstack.io",
    "maskedName": "m***ck.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 45,
    "backlinksCount": 1837,
    "referringDomains": 52,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medstack.io",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 4,
    "name": "medbase.io",
    "maskedName": "m***se.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 1925,
    "referringDomains": 144,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medbase.io",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 5,
    "name": "synthops.com",
    "maskedName": "s***ps.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 38,
    "backlinksCount": 1656,
    "referringDomains": 129,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthops.com",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 6,
    "name": "hyperflow.dev",
    "maskedName": "h***ow.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 37,
    "backlinksCount": 1335,
    "referringDomains": 106,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperflow.dev",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
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
    "droppedAt": "Sep 15, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 9,
    "name": "metahub.dev",
    "maskedName": "m***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 32,
    "backlinksCount": 2036,
    "referringDomains": 53,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metahub.dev",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 10,
    "name": "bytedeploy.co",
    "maskedName": "b***oy.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 31,
    "backlinksCount": 3802,
    "referringDomains": 61,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytedeploy.co",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 11,
    "name": "devgenie.ai",
    "maskedName": "d***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 31,
    "backlinksCount": 1429,
    "referringDomains": 59,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devgenie.ai",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  },
  {
    "id": 12,
    "name": "omnihub.dev",
    "maskedName": "o***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 1273,
    "referringDomains": 105,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnihub.dev",
    "isClean": true,
    "droppedAt": "Sep 15, 2026"
  }
];
