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

export const LAST_UPDATED_AT = "Nov 14, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "autoscale.dev",
    "maskedName": "a***le.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 48,
    "backlinksCount": 4472,
    "referringDomains": 88,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autoscale.dev",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 2,
    "name": "agentpulse.app",
    "maskedName": "a***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 2783,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentpulse.app",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 3,
    "name": "cloudwork.dev",
    "maskedName": "c***rk.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 44,
    "backlinksCount": 2539,
    "referringDomains": 80,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudwork.dev",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 4,
    "name": "bytenode.dev",
    "maskedName": "b***de.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 3651,
    "referringDomains": 69,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytenode.dev",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 6,
    "name": "cloudsync.co",
    "maskedName": "c***nc.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 4141,
    "referringDomains": 53,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudsync.co",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
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
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 8,
    "name": "cloudbench.ai",
    "maskedName": "c***ch.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 35,
    "backlinksCount": 1551,
    "referringDomains": 49,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudbench.ai",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 9,
    "name": "clouddesk.app",
    "maskedName": "c***sk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 34,
    "backlinksCount": 4424,
    "referringDomains": 82,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=clouddesk.app",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 10,
    "name": "opspulse.dev",
    "maskedName": "o***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 908,
    "referringDomains": 143,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opspulse.dev",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 11,
    "name": "bytecraft.co",
    "maskedName": "b***ft.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 32,
    "backlinksCount": 4152,
    "referringDomains": 138,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytecraft.co",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  },
  {
    "id": 12,
    "name": "pulsehub.co",
    "maskedName": "p***ub.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 7,
    "drScore": 31,
    "backlinksCount": 3422,
    "referringDomains": 58,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsehub.co",
    "isClean": true,
    "droppedAt": "Nov 14, 2026"
  }
];
