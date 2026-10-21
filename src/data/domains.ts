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

export const LAST_UPDATED_AT = "Oct 21, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "logicboost.co",
    "maskedName": "l***st.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 3248,
    "referringDomains": 38,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicboost.co",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 2,
    "name": "craftpulse.co",
    "maskedName": "c***se.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 47,
    "backlinksCount": 2134,
    "referringDomains": 67,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftpulse.co",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 3,
    "name": "fitbase.dev",
    "maskedName": "f***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 800,
    "referringDomains": 63,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitbase.dev",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 4,
    "name": "nexusdeploy.app",
    "maskedName": "n***oy.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 1945,
    "referringDomains": 102,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusdeploy.app",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
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
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 6,
    "name": "vectorgenie.co",
    "maskedName": "v***ie.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 36,
    "backlinksCount": 1496,
    "referringDomains": 80,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorgenie.co",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
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
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 8,
    "name": "gitsync.dev",
    "maskedName": "g***nc.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 34,
    "backlinksCount": 3479,
    "referringDomains": 36,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitsync.dev",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 9,
    "name": "medboost.com",
    "maskedName": "m***st.com",
    "tld": ".com",
    "niche": "Health",
    "domainAgeYears": 8,
    "drScore": 32,
    "backlinksCount": 1424,
    "referringDomains": 50,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medboost.com",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 10,
    "name": "medmind.ai",
    "maskedName": "m***nd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 31,
    "backlinksCount": 3110,
    "referringDomains": 62,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medmind.ai",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 11,
    "name": "hubdeploy.co",
    "maskedName": "h***oy.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 29,
    "backlinksCount": 1292,
    "referringDomains": 94,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubdeploy.co",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  },
  {
    "id": 12,
    "name": "stacksync.app",
    "maskedName": "s***nc.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 2361,
    "referringDomains": 86,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stacksync.app",
    "isClean": true,
    "droppedAt": "Oct 21, 2026"
  }
];
