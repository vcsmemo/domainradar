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

export const LAST_UPDATED_AT = "Oct 24, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "nexusgenie.co",
    "maskedName": "n***ie.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 48,
    "backlinksCount": 3088,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusgenie.co",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 2,
    "name": "pulsework.dev",
    "maskedName": "p***rk.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 46,
    "backlinksCount": 4201,
    "referringDomains": 69,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsework.dev",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 3,
    "name": "gitnode.ai",
    "maskedName": "g***de.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 1561,
    "referringDomains": 80,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitnode.ai",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 4,
    "name": "medboard.ai",
    "maskedName": "m***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 41,
    "backlinksCount": 4301,
    "referringDomains": 42,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medboard.ai",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 5,
    "name": "nexusdesk.app",
    "maskedName": "n***sk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 39,
    "backlinksCount": 2432,
    "referringDomains": 99,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusdesk.app",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 6,
    "name": "metricgenie.app",
    "maskedName": "m***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 37,
    "backlinksCount": 2098,
    "referringDomains": 93,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricgenie.app",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 9,
    "name": "hyperdesk.com",
    "maskedName": "h***sk.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 1905,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperdesk.com",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 10,
    "name": "metricscale.co",
    "maskedName": "m***le.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 30,
    "backlinksCount": 2062,
    "referringDomains": 118,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricscale.co",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 11,
    "name": "promptsync.com",
    "maskedName": "p***nc.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 30,
    "backlinksCount": 2841,
    "referringDomains": 97,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptsync.com",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  },
  {
    "id": 12,
    "name": "hyperpulse.ai",
    "maskedName": "h***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 29,
    "backlinksCount": 2949,
    "referringDomains": 35,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperpulse.ai",
    "isClean": true,
    "droppedAt": "Oct 24, 2026"
  }
];
