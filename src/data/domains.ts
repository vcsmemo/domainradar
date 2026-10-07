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

export const LAST_UPDATED_AT = "Oct 07, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "neuramind.ai",
    "maskedName": "n***nd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 4303,
    "referringDomains": 71,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuramind.ai",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 2,
    "name": "cloudboard.app",
    "maskedName": "c***rd.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 45,
    "backlinksCount": 3390,
    "referringDomains": 82,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudboard.app",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 3,
    "name": "bytegenie.ai",
    "maskedName": "b***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 42,
    "backlinksCount": 1588,
    "referringDomains": 99,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytegenie.ai",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 4,
    "name": "fitlab.ai",
    "maskedName": "f***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 37,
    "backlinksCount": 3294,
    "referringDomains": 114,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitlab.ai",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 6,
    "name": "neuradeploy.io",
    "maskedName": "n***oy.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 3833,
    "referringDomains": 104,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuradeploy.io",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 8,
    "name": "primesync.com",
    "maskedName": "p***nc.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 3003,
    "referringDomains": 105,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primesync.com",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 9,
    "name": "pulseflow.co",
    "maskedName": "p***ow.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 34,
    "backlinksCount": 3759,
    "referringDomains": 50,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulseflow.co",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 10,
    "name": "gitcraft.co",
    "maskedName": "g***ft.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 34,
    "backlinksCount": 2285,
    "referringDomains": 111,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitcraft.co",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 11,
    "name": "hyperops.io",
    "maskedName": "h***ps.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 2850,
    "referringDomains": 106,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperops.io",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  },
  {
    "id": 12,
    "name": "stackgenie.ai",
    "maskedName": "s***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 30,
    "backlinksCount": 963,
    "referringDomains": 37,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackgenie.ai",
    "isClean": true,
    "droppedAt": "Oct 07, 2026"
  }
];
