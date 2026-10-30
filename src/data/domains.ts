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

export const LAST_UPDATED_AT = "Oct 30, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "craftdeploy.io",
    "maskedName": "c***oy.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 48,
    "backlinksCount": 1906,
    "referringDomains": 50,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftdeploy.io",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 2,
    "name": "flownode.app",
    "maskedName": "f***de.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 48,
    "backlinksCount": 4431,
    "referringDomains": 54,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flownode.app",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 3,
    "name": "primelab.ai",
    "maskedName": "p***ab.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 48,
    "backlinksCount": 1226,
    "referringDomains": 61,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primelab.ai",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 4,
    "name": "flowbase.com",
    "maskedName": "f***se.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 47,
    "backlinksCount": 1785,
    "referringDomains": 73,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowbase.com",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 5,
    "name": "metricboard.ai",
    "maskedName": "m***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 1792,
    "referringDomains": 44,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricboard.ai",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 6,
    "name": "primemind.app",
    "maskedName": "p***nd.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 2127,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primemind.app",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 7,
    "name": "stackpulse.app",
    "maskedName": "s***se.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 38,
    "backlinksCount": 4345,
    "referringDomains": 87,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackpulse.app",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
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
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 9,
    "name": "opsboard.com",
    "maskedName": "o***rd.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 2758,
    "referringDomains": 107,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsboard.com",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 11,
    "name": "metricgenie.com",
    "maskedName": "m***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1181,
    "referringDomains": 45,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricgenie.com",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  },
  {
    "id": 12,
    "name": "cloudmetrics.com",
    "maskedName": "c***cs.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 30,
    "backlinksCount": 902,
    "referringDomains": 71,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudmetrics.com",
    "isClean": true,
    "droppedAt": "Oct 30, 2026"
  }
];
