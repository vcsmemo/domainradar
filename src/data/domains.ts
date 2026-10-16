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

export const LAST_UPDATED_AT = "Oct 16, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "metricwork.co",
    "maskedName": "m***rk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 48,
    "backlinksCount": 3395,
    "referringDomains": 81,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricwork.co",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 2,
    "name": "cloudmetrics.io",
    "maskedName": "c***cs.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 3009,
    "referringDomains": 54,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudmetrics.io",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 3,
    "name": "omnisync.dev",
    "maskedName": "o***nc.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 43,
    "backlinksCount": 1118,
    "referringDomains": 71,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnisync.dev",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 4,
    "name": "cloudnode.app",
    "maskedName": "c***de.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 3043,
    "referringDomains": 72,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudnode.app",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 5,
    "name": "gitwork.co",
    "maskedName": "g***rk.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 41,
    "backlinksCount": 2222,
    "referringDomains": 42,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitwork.co",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 6,
    "name": "devhub.co",
    "maskedName": "d***ub.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 3375,
    "referringDomains": 49,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devhub.co",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 7,
    "name": "hubgenie.ai",
    "maskedName": "h***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 38,
    "backlinksCount": 1174,
    "referringDomains": 79,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubgenie.ai",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
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
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 10,
    "name": "vectordeploy.app",
    "maskedName": "v***oy.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 35,
    "backlinksCount": 2971,
    "referringDomains": 69,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectordeploy.app",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 11,
    "name": "logicflow.dev",
    "maskedName": "l***ow.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 35,
    "backlinksCount": 3077,
    "referringDomains": 100,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicflow.dev",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  },
  {
    "id": 12,
    "name": "omnigenie.co",
    "maskedName": "o***ie.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 3848,
    "referringDomains": 149,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnigenie.co",
    "isClean": true,
    "droppedAt": "Oct 16, 2026"
  }
];
