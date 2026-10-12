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

export const LAST_UPDATED_AT = "Oct 12, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "agentcraft.io",
    "maskedName": "a***ft.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 47,
    "backlinksCount": 3155,
    "referringDomains": 125,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentcraft.io",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 2,
    "name": "synthboard.io",
    "maskedName": "s***rd.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 47,
    "backlinksCount": 938,
    "referringDomains": 35,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthboard.io",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 3,
    "name": "flowcraft.app",
    "maskedName": "f***ft.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 44,
    "backlinksCount": 1429,
    "referringDomains": 87,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowcraft.app",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 4,
    "name": "scaledesk.ai",
    "maskedName": "s***sk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 1557,
    "referringDomains": 78,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaledesk.ai",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 5,
    "name": "hubnode.co",
    "maskedName": "h***de.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 38,
    "backlinksCount": 2591,
    "referringDomains": 49,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubnode.co",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 6,
    "name": "vectorboard.com",
    "maskedName": "v***rd.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 38,
    "backlinksCount": 1592,
    "referringDomains": 140,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorboard.com",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
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
    "droppedAt": "Oct 12, 2026"
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
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 9,
    "name": "fitsync.ai",
    "maskedName": "f***nc.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 33,
    "backlinksCount": 1741,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitsync.ai",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 10,
    "name": "agenthub.co",
    "maskedName": "a***ub.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 31,
    "backlinksCount": 1160,
    "referringDomains": 85,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agenthub.co",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 11,
    "name": "agenthub.app",
    "maskedName": "a***ub.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 4419,
    "referringDomains": 86,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agenthub.app",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  },
  {
    "id": 12,
    "name": "scaleflow.ai",
    "maskedName": "s***ow.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 976,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleflow.ai",
    "isClean": true,
    "droppedAt": "Oct 12, 2026"
  }
];
