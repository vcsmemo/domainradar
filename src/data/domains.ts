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

export const LAST_UPDATED_AT = "Oct 15, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "opsnode.com",
    "maskedName": "o***de.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 1914,
    "referringDomains": 126,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsnode.com",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 2,
    "name": "stackgenie.dev",
    "maskedName": "s***ie.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 4405,
    "referringDomains": 132,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackgenie.dev",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 3,
    "name": "bytesync.com",
    "maskedName": "b***nc.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 43,
    "backlinksCount": 3612,
    "referringDomains": 144,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytesync.com",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 4,
    "name": "primestack.com",
    "maskedName": "p***ck.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 42,
    "backlinksCount": 2770,
    "referringDomains": 36,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=primestack.com",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 5,
    "name": "primeflow.app",
    "maskedName": "p***ow.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 42,
    "backlinksCount": 2541,
    "referringDomains": 56,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primeflow.app",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 6,
    "name": "findesk.dev",
    "maskedName": "f***sk.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 40,
    "backlinksCount": 3144,
    "referringDomains": 118,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=findesk.dev",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 7,
    "name": "primemetrics.ai",
    "maskedName": "p***cs.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 37,
    "backlinksCount": 932,
    "referringDomains": 39,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primemetrics.ai",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 9,
    "name": "stackscale.ai",
    "maskedName": "s***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 1073,
    "referringDomains": 79,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackscale.ai",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
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
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 11,
    "name": "cartbench.dev",
    "maskedName": "c***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 33,
    "backlinksCount": 4272,
    "referringDomains": 38,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartbench.dev",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  },
  {
    "id": 12,
    "name": "logicmind.dev",
    "maskedName": "l***nd.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 1268,
    "referringDomains": 127,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicmind.dev",
    "isClean": true,
    "droppedAt": "Oct 15, 2026"
  }
];
