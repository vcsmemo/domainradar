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

export const LAST_UPDATED_AT = "Nov 01, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "apexbase.dev",
    "maskedName": "a***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 46,
    "backlinksCount": 3407,
    "referringDomains": 127,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexbase.dev",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 2,
    "name": "hubgenie.dev",
    "maskedName": "h***ie.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 1454,
    "referringDomains": 77,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubgenie.dev",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 3,
    "name": "devbase.co",
    "maskedName": "d***se.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 42,
    "backlinksCount": 1241,
    "referringDomains": 83,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devbase.co",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 4,
    "name": "hyperboard.ai",
    "maskedName": "h***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 1044,
    "referringDomains": 123,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperboard.ai",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 5,
    "name": "fitwork.io",
    "maskedName": "f***rk.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 1819,
    "referringDomains": 93,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitwork.io",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 6,
    "name": "primepulse.com",
    "maskedName": "p***se.com",
    "tld": ".com",
    "niche": "Health",
    "domainAgeYears": 3,
    "drScore": 37,
    "backlinksCount": 2133,
    "referringDomains": 133,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=primepulse.com",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 9,
    "name": "fitboost.io",
    "maskedName": "f***st.io",
    "tld": ".io",
    "niche": "Health",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 1381,
    "referringDomains": 92,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitboost.io",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 10,
    "name": "apexbase.ai",
    "maskedName": "a***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 3356,
    "referringDomains": 35,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexbase.ai",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 11,
    "name": "vectorops.co",
    "maskedName": "v***ps.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 4168,
    "referringDomains": 131,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorops.co",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  },
  {
    "id": 12,
    "name": "flowops.dev",
    "maskedName": "f***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 28,
    "backlinksCount": 1563,
    "referringDomains": 122,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowops.dev",
    "isClean": true,
    "droppedAt": "Nov 01, 2026"
  }
];
