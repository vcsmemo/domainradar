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

export const LAST_UPDATED_AT = "Oct 19, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "promptlab.io",
    "maskedName": "p***ab.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 1802,
    "referringDomains": 40,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptlab.io",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 2,
    "name": "gitmetrics.dev",
    "maskedName": "g***cs.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 1085,
    "referringDomains": 65,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitmetrics.dev",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 3,
    "name": "byteboost.app",
    "maskedName": "b***st.app",
    "tld": ".app",
    "niche": "E-commerce",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 1116,
    "referringDomains": 45,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=byteboost.app",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 4,
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
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 5,
    "name": "synthbase.app",
    "maskedName": "s***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 36,
    "backlinksCount": 3028,
    "referringDomains": 73,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthbase.app",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 6,
    "name": "stratapulse.dev",
    "maskedName": "s***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 36,
    "backlinksCount": 1237,
    "referringDomains": 75,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratapulse.dev",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 8,
    "name": "fitmind.ai",
    "maskedName": "f***nd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 33,
    "backlinksCount": 2451,
    "referringDomains": 143,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitmind.ai",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 9,
    "name": "stackcraft.io",
    "maskedName": "s***ft.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 33,
    "backlinksCount": 3149,
    "referringDomains": 47,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackcraft.io",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 10,
    "name": "vectorflow.io",
    "maskedName": "v***ow.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 822,
    "referringDomains": 127,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorflow.io",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 11,
    "name": "metriccraft.co",
    "maskedName": "m***ft.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 31,
    "backlinksCount": 1668,
    "referringDomains": 95,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metriccraft.co",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  },
  {
    "id": 12,
    "name": "primedeploy.dev",
    "maskedName": "p***oy.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 3938,
    "referringDomains": 126,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primedeploy.dev",
    "isClean": true,
    "droppedAt": "Oct 19, 2026"
  }
];
