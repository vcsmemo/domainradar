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

export const LAST_UPDATED_AT = "Oct 01, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "fitcraft.io",
    "maskedName": "f***ft.io",
    "tld": ".io",
    "niche": "Health",
    "domainAgeYears": 8,
    "drScore": 44,
    "backlinksCount": 3169,
    "referringDomains": 126,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitcraft.io",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 2,
    "name": "gitops.co",
    "maskedName": "g***ps.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 2362,
    "referringDomains": 57,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitops.co",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 3,
    "name": "cloudgenie.com",
    "maskedName": "c***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 42,
    "backlinksCount": 2352,
    "referringDomains": 62,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudgenie.com",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 4,
    "name": "vectordeploy.com",
    "maskedName": "v***oy.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 3548,
    "referringDomains": 109,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectordeploy.com",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 5,
    "name": "strataboost.io",
    "maskedName": "s***st.io",
    "tld": ".io",
    "niche": "E-commerce",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 4096,
    "referringDomains": 132,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=strataboost.io",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
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
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 8,
    "name": "nexuspulse.app",
    "maskedName": "n***se.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 3865,
    "referringDomains": 68,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexuspulse.app",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 9,
    "name": "pulseboost.app",
    "maskedName": "p***st.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 4,
    "drScore": 35,
    "backlinksCount": 1812,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulseboost.app",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 10,
    "name": "metaops.app",
    "maskedName": "m***ps.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 32,
    "backlinksCount": 1570,
    "referringDomains": 132,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metaops.app",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 11,
    "name": "autosync.app",
    "maskedName": "a***nc.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 2641,
    "referringDomains": 84,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autosync.app",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  },
  {
    "id": 12,
    "name": "bytedesk.io",
    "maskedName": "b***sk.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 2788,
    "referringDomains": 91,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytedesk.io",
    "isClean": true,
    "droppedAt": "Oct 01, 2026"
  }
];
