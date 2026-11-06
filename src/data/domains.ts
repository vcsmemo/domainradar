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

export const LAST_UPDATED_AT = "Nov 06, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "cloudscale.io",
    "maskedName": "c***le.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 46,
    "backlinksCount": 1346,
    "referringDomains": 78,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudscale.io",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 2,
    "name": "medscale.co",
    "maskedName": "m***le.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 40,
    "backlinksCount": 2582,
    "referringDomains": 61,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medscale.co",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 3,
    "name": "fitnode.ai",
    "maskedName": "f***de.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 40,
    "backlinksCount": 979,
    "referringDomains": 45,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitnode.ai",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 4,
    "name": "logicmetrics.com",
    "maskedName": "l***cs.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 3370,
    "referringDomains": 89,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicmetrics.com",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 7,
    "name": "craftpulse.co",
    "maskedName": "c***se.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 1092,
    "referringDomains": 147,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftpulse.co",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 8,
    "name": "bytegenie.ai",
    "maskedName": "b***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 1762,
    "referringDomains": 35,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytegenie.ai",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 9,
    "name": "vectordesk.ai",
    "maskedName": "v***sk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 30,
    "backlinksCount": 3150,
    "referringDomains": 99,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectordesk.ai",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 10,
    "name": "stackwork.co",
    "maskedName": "s***rk.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 30,
    "backlinksCount": 1450,
    "referringDomains": 135,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackwork.co",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 11,
    "name": "omnigenie.com",
    "maskedName": "o***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 2647,
    "referringDomains": 125,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnigenie.com",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  },
  {
    "id": 12,
    "name": "flowboost.co",
    "maskedName": "f***st.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 28,
    "backlinksCount": 3457,
    "referringDomains": 38,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowboost.co",
    "isClean": true,
    "droppedAt": "Nov 06, 2026"
  }
];
