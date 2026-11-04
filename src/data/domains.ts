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

export const LAST_UPDATED_AT = "Nov 04, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "neuranode.app",
    "maskedName": "n***de.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 47,
    "backlinksCount": 3638,
    "referringDomains": 44,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuranode.app",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 2,
    "name": "craftbase.app",
    "maskedName": "c***se.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 2379,
    "referringDomains": 103,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftbase.app",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 3,
    "name": "stratanode.io",
    "maskedName": "s***de.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 2918,
    "referringDomains": 36,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratanode.io",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 4,
    "name": "neuradesk.co",
    "maskedName": "n***sk.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 2987,
    "referringDomains": 63,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuradesk.co",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 5,
    "name": "hyperstack.io",
    "maskedName": "h***ck.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 2842,
    "referringDomains": 110,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperstack.io",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 6,
    "name": "apexops.io",
    "maskedName": "a***ps.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 37,
    "backlinksCount": 1671,
    "referringDomains": 49,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexops.io",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
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
    "droppedAt": "Nov 04, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 9,
    "name": "flowwork.com",
    "maskedName": "f***rk.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 35,
    "backlinksCount": 4190,
    "referringDomains": 119,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowwork.com",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 10,
    "name": "devwork.co",
    "maskedName": "d***rk.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 34,
    "backlinksCount": 1428,
    "referringDomains": 112,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devwork.co",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 11,
    "name": "neuramind.co",
    "maskedName": "n***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 33,
    "backlinksCount": 4331,
    "referringDomains": 105,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuramind.co",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  },
  {
    "id": 12,
    "name": "logicwork.co",
    "maskedName": "l***rk.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 1228,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicwork.co",
    "isClean": true,
    "droppedAt": "Nov 04, 2026"
  }
];
