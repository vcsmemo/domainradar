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

export const LAST_UPDATED_AT = "Nov 11, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "gitlab.dev",
    "maskedName": "g***ab.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 48,
    "backlinksCount": 1772,
    "referringDomains": 67,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitlab.dev",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 2,
    "name": "medlab.ai",
    "maskedName": "m***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 47,
    "backlinksCount": 1914,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medlab.ai",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 3,
    "name": "byteboard.io",
    "maskedName": "b***rd.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 4031,
    "referringDomains": 118,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=byteboard.io",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 4,
    "name": "finboard.ai",
    "maskedName": "f***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 43,
    "backlinksCount": 3582,
    "referringDomains": 116,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=finboard.ai",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 5,
    "name": "pulsemind.co",
    "maskedName": "p***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 3611,
    "referringDomains": 51,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsemind.co",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 6,
    "name": "finscale.com",
    "maskedName": "f***le.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 2252,
    "referringDomains": 58,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finscale.com",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 7,
    "name": "nexusstack.co",
    "maskedName": "n***ck.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 3543,
    "referringDomains": 71,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusstack.co",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
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
    "droppedAt": "Nov 11, 2026"
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
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 10,
    "name": "opsboost.io",
    "maskedName": "o***st.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 33,
    "backlinksCount": 2677,
    "referringDomains": 75,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsboost.io",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 11,
    "name": "cartmind.dev",
    "maskedName": "c***nd.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 1304,
    "referringDomains": 69,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartmind.dev",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  },
  {
    "id": 12,
    "name": "gitscale.ai",
    "maskedName": "g***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 2742,
    "referringDomains": 96,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitscale.ai",
    "isClean": true,
    "droppedAt": "Nov 11, 2026"
  }
];
