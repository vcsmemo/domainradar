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

export const LAST_UPDATED_AT = "Oct 23, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "hubmetrics.co",
    "maskedName": "h***cs.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 47,
    "backlinksCount": 965,
    "referringDomains": 127,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubmetrics.co",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 2,
    "name": "craftbench.co",
    "maskedName": "c***ch.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 46,
    "backlinksCount": 3547,
    "referringDomains": 65,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftbench.co",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 3,
    "name": "cartboost.com",
    "maskedName": "c***st.com",
    "tld": ".com",
    "niche": "E-commerce",
    "domainAgeYears": 7,
    "drScore": 45,
    "backlinksCount": 2244,
    "referringDomains": 65,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartboost.com",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 4,
    "name": "metricwork.io",
    "maskedName": "m***rk.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 3708,
    "referringDomains": 77,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricwork.io",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 5,
    "name": "carthub.co",
    "maskedName": "c***ub.co",
    "tld": ".co",
    "niche": "E-commerce",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 887,
    "referringDomains": 70,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=carthub.co",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 6,
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
    "droppedAt": "Oct 23, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 8,
    "name": "scaleboard.dev",
    "maskedName": "s***rd.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 2077,
    "referringDomains": 79,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboard.dev",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 9,
    "name": "nexusbench.dev",
    "maskedName": "n***ch.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 1994,
    "referringDomains": 129,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusbench.dev",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 10,
    "name": "vectorboost.io",
    "maskedName": "v***st.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 32,
    "backlinksCount": 3757,
    "referringDomains": 101,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorboost.io",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 11,
    "name": "apexpulse.com",
    "maskedName": "a***se.com",
    "tld": ".com",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 31,
    "backlinksCount": 950,
    "referringDomains": 139,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexpulse.com",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  },
  {
    "id": 12,
    "name": "cartdeploy.io",
    "maskedName": "c***oy.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 3123,
    "referringDomains": 86,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartdeploy.io",
    "isClean": true,
    "droppedAt": "Oct 23, 2026"
  }
];
