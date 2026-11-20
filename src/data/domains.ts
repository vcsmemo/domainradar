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

export const LAST_UPDATED_AT = "Nov 20, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "flowboost.dev",
    "maskedName": "f***st.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 48,
    "backlinksCount": 2317,
    "referringDomains": 35,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowboost.dev",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 2,
    "name": "opsdeploy.app",
    "maskedName": "o***oy.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 2002,
    "referringDomains": 127,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsdeploy.app",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 3,
    "name": "medgenie.ai",
    "maskedName": "m***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 39,
    "backlinksCount": 3161,
    "referringDomains": 135,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medgenie.ai",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 4,
    "name": "nexusdesk.app",
    "maskedName": "n***sk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 4195,
    "referringDomains": 96,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusdesk.app",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 5,
    "name": "omniboard.com",
    "maskedName": "o***rd.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 38,
    "backlinksCount": 1958,
    "referringDomains": 127,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omniboard.com",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 6,
    "name": "opsgenie.app",
    "maskedName": "o***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 3516,
    "referringDomains": 48,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsgenie.app",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
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
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 9,
    "name": "opslab.io",
    "maskedName": "o***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 33,
    "backlinksCount": 3187,
    "referringDomains": 119,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opslab.io",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 10,
    "name": "scaleops.dev",
    "maskedName": "s***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 4323,
    "referringDomains": 51,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleops.dev",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 11,
    "name": "fitwork.dev",
    "maskedName": "f***rk.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 3786,
    "referringDomains": 88,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitwork.dev",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  },
  {
    "id": 12,
    "name": "flowlab.io",
    "maskedName": "f***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 3978,
    "referringDomains": 105,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowlab.io",
    "isClean": true,
    "droppedAt": "Nov 20, 2026"
  }
];
