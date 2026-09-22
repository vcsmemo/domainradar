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

export const LAST_UPDATED_AT = "Sep 22, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "medops.dev",
    "maskedName": "m***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 2305,
    "referringDomains": 139,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medops.dev",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 2,
    "name": "scalegenie.app",
    "maskedName": "s***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 47,
    "backlinksCount": 1685,
    "referringDomains": 54,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalegenie.app",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 3,
    "name": "stratalab.ai",
    "maskedName": "s***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 831,
    "referringDomains": 100,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratalab.ai",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 4,
    "name": "nexusnode.dev",
    "maskedName": "n***de.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 2234,
    "referringDomains": 46,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusnode.dev",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
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
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 7,
    "name": "gitnode.co",
    "maskedName": "g***de.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 2384,
    "referringDomains": 56,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitnode.co",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 8,
    "name": "scalehub.dev",
    "maskedName": "s***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 1796,
    "referringDomains": 43,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalehub.dev",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 9,
    "name": "findeploy.co",
    "maskedName": "f***oy.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 34,
    "backlinksCount": 894,
    "referringDomains": 126,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=findeploy.co",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 10,
    "name": "omniflow.com",
    "maskedName": "o***ow.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 3708,
    "referringDomains": 111,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omniflow.com",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 11,
    "name": "hyperdesk.ai",
    "maskedName": "h***sk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 30,
    "backlinksCount": 3796,
    "referringDomains": 122,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperdesk.ai",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  },
  {
    "id": 12,
    "name": "neurascale.com",
    "maskedName": "n***le.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 29,
    "backlinksCount": 3363,
    "referringDomains": 138,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurascale.com",
    "isClean": true,
    "droppedAt": "Sep 22, 2026"
  }
];
