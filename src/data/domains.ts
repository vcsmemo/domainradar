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

export const LAST_UPDATED_AT = "Sep 24, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "craftdeploy.dev",
    "maskedName": "c***oy.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 1782,
    "referringDomains": 143,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftdeploy.dev",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 2,
    "name": "primecraft.io",
    "maskedName": "p***ft.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 3013,
    "referringDomains": 66,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=primecraft.io",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 3,
    "name": "synthboard.io",
    "maskedName": "s***rd.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 1700,
    "referringDomains": 99,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthboard.io",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 4,
    "name": "opsmind.dev",
    "maskedName": "o***nd.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 1934,
    "referringDomains": 39,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsmind.dev",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 5,
    "name": "metadeploy.io",
    "maskedName": "m***oy.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 1232,
    "referringDomains": 51,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metadeploy.io",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 6,
    "name": "nexuswork.io",
    "maskedName": "n***rk.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 39,
    "backlinksCount": 3924,
    "referringDomains": 118,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexuswork.io",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
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
    "droppedAt": "Sep 24, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 9,
    "name": "neurahub.dev",
    "maskedName": "n***ub.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 34,
    "backlinksCount": 2347,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurahub.dev",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 10,
    "name": "neuranode.co",
    "maskedName": "n***de.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 32,
    "backlinksCount": 3088,
    "referringDomains": 107,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuranode.co",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 11,
    "name": "flowbench.dev",
    "maskedName": "f***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 31,
    "backlinksCount": 2863,
    "referringDomains": 70,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowbench.dev",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  },
  {
    "id": 12,
    "name": "finboost.ai",
    "maskedName": "f***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 30,
    "backlinksCount": 3228,
    "referringDomains": 82,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finboost.ai",
    "isClean": true,
    "droppedAt": "Sep 24, 2026"
  }
];
