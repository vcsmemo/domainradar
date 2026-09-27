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

export const LAST_UPDATED_AT = "Sep 27, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "devbase.com",
    "maskedName": "d***se.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 46,
    "backlinksCount": 1338,
    "referringDomains": 51,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devbase.com",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 2,
    "name": "apexmind.app",
    "maskedName": "a***nd.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 45,
    "backlinksCount": 1256,
    "referringDomains": 37,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexmind.app",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 3,
    "name": "promptscale.app",
    "maskedName": "p***le.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 1086,
    "referringDomains": 41,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptscale.app",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 4,
    "name": "hubwork.ai",
    "maskedName": "h***rk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 41,
    "backlinksCount": 1282,
    "referringDomains": 42,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubwork.ai",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 5,
    "name": "cartflow.com",
    "maskedName": "c***ow.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 4188,
    "referringDomains": 103,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartflow.com",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 6,
    "name": "stratapulse.dev",
    "maskedName": "s***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 38,
    "backlinksCount": 1293,
    "referringDomains": 44,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratapulse.dev",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
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
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 9,
    "name": "byteflow.app",
    "maskedName": "b***ow.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 2932,
    "referringDomains": 150,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=byteflow.app",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 10,
    "name": "vectorsync.ai",
    "maskedName": "v***nc.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 4480,
    "referringDomains": 68,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorsync.ai",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 11,
    "name": "autoops.io",
    "maskedName": "a***ps.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 30,
    "backlinksCount": 1557,
    "referringDomains": 135,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autoops.io",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  },
  {
    "id": 12,
    "name": "agentmind.co",
    "maskedName": "a***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 3461,
    "referringDomains": 74,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentmind.co",
    "isClean": true,
    "droppedAt": "Sep 27, 2026"
  }
];
