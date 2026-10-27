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

export const LAST_UPDATED_AT = "Oct 27, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "primeboost.io",
    "maskedName": "p***st.io",
    "tld": ".io",
    "niche": "E-commerce",
    "domainAgeYears": 8,
    "drScore": 46,
    "backlinksCount": 3449,
    "referringDomains": 104,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=primeboost.io",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 2,
    "name": "agenthub.com",
    "maskedName": "a***ub.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 44,
    "backlinksCount": 3876,
    "referringDomains": 84,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agenthub.com",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 3,
    "name": "promptpulse.dev",
    "maskedName": "p***se.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 44,
    "backlinksCount": 4094,
    "referringDomains": 78,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptpulse.dev",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 4,
    "name": "hyperwork.com",
    "maskedName": "h***rk.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 3846,
    "referringDomains": 150,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperwork.com",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 5,
    "name": "flowscale.com",
    "maskedName": "f***le.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 43,
    "backlinksCount": 3992,
    "referringDomains": 76,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowscale.com",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 6,
    "name": "neuraflow.dev",
    "maskedName": "n***ow.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 2520,
    "referringDomains": 105,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuraflow.dev",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 7,
    "name": "flowcraft.io",
    "maskedName": "f***ft.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 41,
    "backlinksCount": 3368,
    "referringDomains": 71,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowcraft.io",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 8,
    "name": "vectordeploy.ai",
    "maskedName": "v***oy.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 40,
    "backlinksCount": 3127,
    "referringDomains": 111,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectordeploy.ai",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 11,
    "name": "cloudgenie.com",
    "maskedName": "c***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 34,
    "backlinksCount": 3251,
    "referringDomains": 59,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudgenie.com",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  },
  {
    "id": 12,
    "name": "autocraft.ai",
    "maskedName": "a***ft.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 28,
    "backlinksCount": 4228,
    "referringDomains": 137,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autocraft.ai",
    "isClean": true,
    "droppedAt": "Oct 27, 2026"
  }
];
