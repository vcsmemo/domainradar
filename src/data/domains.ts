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

export const LAST_UPDATED_AT = "Nov 02, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "metricboard.dev",
    "maskedName": "m***rd.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 3425,
    "referringDomains": 55,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricboard.dev",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 2,
    "name": "stratabench.com",
    "maskedName": "s***ch.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 45,
    "backlinksCount": 2468,
    "referringDomains": 107,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratabench.com",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 3,
    "name": "byteboard.app",
    "maskedName": "b***rd.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 45,
    "backlinksCount": 815,
    "referringDomains": 37,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=byteboard.app",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 4,
    "name": "omnistack.dev",
    "maskedName": "o***ck.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 44,
    "backlinksCount": 3326,
    "referringDomains": 94,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnistack.dev",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 5,
    "name": "metastack.app",
    "maskedName": "m***ck.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 1026,
    "referringDomains": 116,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metastack.app",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 6,
    "name": "gitpulse.co",
    "maskedName": "g***se.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 4045,
    "referringDomains": 111,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitpulse.co",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 7,
    "name": "metricnode.ai",
    "maskedName": "m***de.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 41,
    "backlinksCount": 4266,
    "referringDomains": 115,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricnode.ai",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 8,
    "name": "metricdesk.app",
    "maskedName": "m***sk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 41,
    "backlinksCount": 4035,
    "referringDomains": 50,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricdesk.app",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
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
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 10,
    "name": "metricscale.co",
    "maskedName": "m***le.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 36,
    "backlinksCount": 2119,
    "referringDomains": 141,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricscale.co",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 11,
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
    "droppedAt": "Nov 02, 2026"
  },
  {
    "id": 12,
    "name": "strataflow.dev",
    "maskedName": "s***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 33,
    "backlinksCount": 3556,
    "referringDomains": 126,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=strataflow.dev",
    "isClean": true,
    "droppedAt": "Nov 02, 2026"
  }
];
