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

export const LAST_UPDATED_AT = "Oct 08, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "metalab.ai",
    "maskedName": "m***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 1060,
    "referringDomains": 77,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metalab.ai",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 2,
    "name": "agentnode.io",
    "maskedName": "a***de.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 40,
    "backlinksCount": 2822,
    "referringDomains": 94,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentnode.io",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 3,
    "name": "agentcraft.com",
    "maskedName": "a***ft.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 4207,
    "referringDomains": 41,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentcraft.com",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 4,
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
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 5,
    "name": "logichub.com",
    "maskedName": "l***ub.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 4041,
    "referringDomains": 124,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=logichub.com",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 7,
    "name": "medgenie.dev",
    "maskedName": "m***ie.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 35,
    "backlinksCount": 1427,
    "referringDomains": 70,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medgenie.dev",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 8,
    "name": "neurasync.io",
    "maskedName": "n***nc.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1771,
    "referringDomains": 71,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurasync.io",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 9,
    "name": "finhub.co",
    "maskedName": "f***ub.co",
    "tld": ".co",
    "niche": "Finance",
    "domainAgeYears": 7,
    "drScore": 34,
    "backlinksCount": 2477,
    "referringDomains": 50,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finhub.co",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 10,
    "name": "scalemetrics.co",
    "maskedName": "s***cs.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 33,
    "backlinksCount": 3649,
    "referringDomains": 76,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalemetrics.co",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 11,
    "name": "metaflow.com",
    "maskedName": "m***ow.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 31,
    "backlinksCount": 871,
    "referringDomains": 102,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metaflow.com",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  },
  {
    "id": 12,
    "name": "agentdesk.co",
    "maskedName": "a***sk.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 30,
    "backlinksCount": 2563,
    "referringDomains": 138,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentdesk.co",
    "isClean": true,
    "droppedAt": "Oct 08, 2026"
  }
];
