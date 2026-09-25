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

export const LAST_UPDATED_AT = "Sep 25, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "apexgenie.app",
    "maskedName": "a***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 4324,
    "referringDomains": 101,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexgenie.app",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 2,
    "name": "hubpulse.app",
    "maskedName": "h***se.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 2408,
    "referringDomains": 45,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubpulse.app",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 3,
    "name": "medscale.co",
    "maskedName": "m***le.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 42,
    "backlinksCount": 2536,
    "referringDomains": 81,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medscale.co",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 4,
    "name": "scalesync.app",
    "maskedName": "s***nc.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 39,
    "backlinksCount": 4470,
    "referringDomains": 97,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalesync.app",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 5,
    "name": "neurahub.ai",
    "maskedName": "n***ub.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 38,
    "backlinksCount": 1770,
    "referringDomains": 113,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurahub.ai",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 6,
    "name": "omnideploy.dev",
    "maskedName": "o***oy.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 38,
    "backlinksCount": 1629,
    "referringDomains": 64,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnideploy.dev",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
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
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 9,
    "name": "synthmetrics.app",
    "maskedName": "s***cs.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 31,
    "backlinksCount": 2568,
    "referringDomains": 107,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthmetrics.app",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 10,
    "name": "metricscale.ai",
    "maskedName": "m***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 31,
    "backlinksCount": 3651,
    "referringDomains": 80,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricscale.ai",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 11,
    "name": "fitmind.app",
    "maskedName": "f***nd.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 28,
    "backlinksCount": 1252,
    "referringDomains": 146,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitmind.app",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  },
  {
    "id": 12,
    "name": "scalebase.dev",
    "maskedName": "s***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 1113,
    "referringDomains": 46,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalebase.dev",
    "isClean": true,
    "droppedAt": "Sep 25, 2026"
  }
];
