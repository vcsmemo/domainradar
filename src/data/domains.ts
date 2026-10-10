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

export const LAST_UPDATED_AT = "Oct 10, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "synthlab.io",
    "maskedName": "s***ab.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 48,
    "backlinksCount": 1511,
    "referringDomains": 56,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthlab.io",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 2,
    "name": "cartscale.ai",
    "maskedName": "c***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 3754,
    "referringDomains": 102,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartscale.ai",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 3,
    "name": "cloudsync.app",
    "maskedName": "c***nc.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 45,
    "backlinksCount": 960,
    "referringDomains": 104,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudsync.app",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 4,
    "name": "hubstack.ai",
    "maskedName": "h***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 45,
    "backlinksCount": 2174,
    "referringDomains": 134,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubstack.ai",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 5,
    "name": "nexusbench.dev",
    "maskedName": "n***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 1659,
    "referringDomains": 121,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusbench.dev",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 6,
    "name": "agentboost.io",
    "maskedName": "a***st.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 2010,
    "referringDomains": 121,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentboost.io",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 7,
    "name": "neuradeploy.app",
    "maskedName": "n***oy.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 37,
    "backlinksCount": 2141,
    "referringDomains": 91,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuradeploy.app",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 8,
    "name": "finlab.io",
    "maskedName": "f***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 37,
    "backlinksCount": 1242,
    "referringDomains": 131,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finlab.io",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 9,
    "name": "promptgenie.app",
    "maskedName": "p***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 1250,
    "referringDomains": 55,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 10,
    "name": "saasmetric.co",
    "maskedName": "s***ic.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1850,
    "referringDomains": 72,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 11,
    "name": "autopulse.co",
    "maskedName": "a***se.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 3806,
    "referringDomains": 141,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autopulse.co",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  },
  {
    "id": 12,
    "name": "scaleops.io",
    "maskedName": "s***ps.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 2798,
    "referringDomains": 97,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleops.io",
    "isClean": true,
    "droppedAt": "Oct 10, 2026"
  }
];
