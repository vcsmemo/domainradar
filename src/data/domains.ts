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

export const LAST_UPDATED_AT = "Nov 12, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "pulsemind.dev",
    "maskedName": "p***nd.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 48,
    "backlinksCount": 972,
    "referringDomains": 89,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsemind.dev",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 2,
    "name": "nexusboard.io",
    "maskedName": "n***rd.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 47,
    "backlinksCount": 2495,
    "referringDomains": 68,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusboard.io",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 3,
    "name": "fitbase.dev",
    "maskedName": "f***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 41,
    "backlinksCount": 903,
    "referringDomains": 101,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitbase.dev",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 4,
    "name": "hubcraft.com",
    "maskedName": "h***ft.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 2341,
    "referringDomains": 72,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubcraft.com",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 5,
    "name": "hyperboost.com",
    "maskedName": "h***st.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 41,
    "backlinksCount": 1076,
    "referringDomains": 60,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperboost.com",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 6,
    "name": "findesk.com",
    "maskedName": "f***sk.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 4154,
    "referringDomains": 128,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=findesk.com",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 7,
    "name": "gitpulse.dev",
    "maskedName": "g***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 39,
    "backlinksCount": 1520,
    "referringDomains": 136,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitpulse.dev",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 9,
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
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 10,
    "name": "craftpulse.co",
    "maskedName": "c***se.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 7,
    "drScore": 31,
    "backlinksCount": 2197,
    "referringDomains": 128,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftpulse.co",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 11,
    "name": "nexusboost.co",
    "maskedName": "n***st.co",
    "tld": ".co",
    "niche": "E-commerce",
    "domainAgeYears": 6,
    "drScore": 31,
    "backlinksCount": 3095,
    "referringDomains": 43,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusboost.co",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  },
  {
    "id": 12,
    "name": "vectormetrics.co",
    "maskedName": "v***cs.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 1310,
    "referringDomains": 106,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectormetrics.co",
    "isClean": true,
    "droppedAt": "Nov 12, 2026"
  }
];
