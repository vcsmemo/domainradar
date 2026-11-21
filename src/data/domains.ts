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

export const LAST_UPDATED_AT = "Nov 21, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "flowlab.io",
    "maskedName": "f***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 47,
    "backlinksCount": 4489,
    "referringDomains": 49,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowlab.io",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 2,
    "name": "autoflow.io",
    "maskedName": "a***ow.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 44,
    "backlinksCount": 3874,
    "referringDomains": 145,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autoflow.io",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 3,
    "name": "stratamind.co",
    "maskedName": "s***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 44,
    "backlinksCount": 2735,
    "referringDomains": 85,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratamind.co",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 4,
    "name": "hublab.io",
    "maskedName": "h***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 40,
    "backlinksCount": 2578,
    "referringDomains": 109,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hublab.io",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 5,
    "name": "craftscale.io",
    "maskedName": "c***le.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 4033,
    "referringDomains": 112,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftscale.io",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 6,
    "name": "neurascale.com",
    "maskedName": "n***le.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 39,
    "backlinksCount": 2235,
    "referringDomains": 56,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurascale.com",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 7,
    "name": "nexusbase.app",
    "maskedName": "n***se.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 4114,
    "referringDomains": 133,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusbase.app",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 8,
    "name": "agentbase.ai",
    "maskedName": "a***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 38,
    "backlinksCount": 1408,
    "referringDomains": 46,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentbase.ai",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 11,
    "name": "finstack.app",
    "maskedName": "f***ck.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 33,
    "backlinksCount": 1342,
    "referringDomains": 68,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finstack.app",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  },
  {
    "id": 12,
    "name": "scaleboost.app",
    "maskedName": "s***st.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 28,
    "backlinksCount": 1697,
    "referringDomains": 111,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboost.app",
    "isClean": true,
    "droppedAt": "Nov 21, 2026"
  }
];
