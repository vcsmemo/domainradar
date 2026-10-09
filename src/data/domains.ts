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

export const LAST_UPDATED_AT = "Oct 09, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "logiclab.dev",
    "maskedName": "l***ab.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 45,
    "backlinksCount": 2394,
    "referringDomains": 115,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logiclab.dev",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 2,
    "name": "scaleops.ai",
    "maskedName": "s***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 3322,
    "referringDomains": 36,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleops.ai",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 3,
    "name": "synthhub.app",
    "maskedName": "s***ub.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 40,
    "backlinksCount": 2398,
    "referringDomains": 95,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthhub.app",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 4,
    "name": "promptdesk.dev",
    "maskedName": "p***sk.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 40,
    "backlinksCount": 1625,
    "referringDomains": 92,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptdesk.dev",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 5,
    "name": "craftboost.co",
    "maskedName": "c***st.co",
    "tld": ".co",
    "niche": "E-commerce",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 4312,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftboost.co",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 6,
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
    "droppedAt": "Oct 09, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 8,
    "name": "autoboard.io",
    "maskedName": "a***rd.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 33,
    "backlinksCount": 2104,
    "referringDomains": 104,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=autoboard.io",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 9,
    "name": "logicstack.dev",
    "maskedName": "l***ck.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 32,
    "backlinksCount": 2169,
    "referringDomains": 45,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicstack.dev",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 10,
    "name": "stackmind.com",
    "maskedName": "s***nd.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 31,
    "backlinksCount": 2691,
    "referringDomains": 121,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackmind.com",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 11,
    "name": "finbase.dev",
    "maskedName": "f***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 30,
    "backlinksCount": 3851,
    "referringDomains": 62,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finbase.dev",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  },
  {
    "id": 12,
    "name": "logicdesk.com",
    "maskedName": "l***sk.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 28,
    "backlinksCount": 2911,
    "referringDomains": 79,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicdesk.com",
    "isClean": true,
    "droppedAt": "Oct 09, 2026"
  }
];
