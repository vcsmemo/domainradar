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

export const LAST_UPDATED_AT = "Oct 22, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "finstack.io",
    "maskedName": "f***ck.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 48,
    "backlinksCount": 3675,
    "referringDomains": 141,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finstack.io",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 2,
    "name": "hyperstack.com",
    "maskedName": "h***ck.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 1274,
    "referringDomains": 62,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperstack.com",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 3,
    "name": "apexmetrics.com",
    "maskedName": "a***cs.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 1067,
    "referringDomains": 48,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexmetrics.com",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 4,
    "name": "scaleboard.dev",
    "maskedName": "s***rd.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 42,
    "backlinksCount": 3711,
    "referringDomains": 132,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboard.dev",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 5,
    "name": "logiclab.app",
    "maskedName": "l***ab.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 37,
    "backlinksCount": 4297,
    "referringDomains": 57,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logiclab.app",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 8,
    "name": "metricops.io",
    "maskedName": "m***ps.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 3195,
    "referringDomains": 79,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricops.io",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 9,
    "name": "primedesk.io",
    "maskedName": "p***sk.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 31,
    "backlinksCount": 4249,
    "referringDomains": 57,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primedesk.io",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 10,
    "name": "craftstack.ai",
    "maskedName": "c***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 31,
    "backlinksCount": 1107,
    "referringDomains": 84,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftstack.ai",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 11,
    "name": "flowdesk.com",
    "maskedName": "f***sk.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 4359,
    "referringDomains": 44,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowdesk.com",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  },
  {
    "id": 12,
    "name": "fitpulse.com",
    "maskedName": "f***se.com",
    "tld": ".com",
    "niche": "Health",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 3723,
    "referringDomains": 140,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitpulse.com",
    "isClean": true,
    "droppedAt": "Oct 22, 2026"
  }
];
