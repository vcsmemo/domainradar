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

export const LAST_UPDATED_AT = "Oct 17, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "craftdesk.app",
    "maskedName": "c***sk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 45,
    "backlinksCount": 3066,
    "referringDomains": 144,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftdesk.app",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 2,
    "name": "pulsedesk.dev",
    "maskedName": "p***sk.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 3107,
    "referringDomains": 46,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsedesk.dev",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 3,
    "name": "devboost.io",
    "maskedName": "d***st.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 42,
    "backlinksCount": 3927,
    "referringDomains": 107,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devboost.io",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 4,
    "name": "devhub.dev",
    "maskedName": "d***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 1135,
    "referringDomains": 54,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devhub.dev",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 5,
    "name": "metriclab.dev",
    "maskedName": "m***ab.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 40,
    "backlinksCount": 958,
    "referringDomains": 71,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metriclab.dev",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 6,
    "name": "synthwork.io",
    "maskedName": "s***rk.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 39,
    "backlinksCount": 1088,
    "referringDomains": 52,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthwork.io",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 7,
    "name": "medbase.dev",
    "maskedName": "m***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 39,
    "backlinksCount": 1322,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medbase.dev",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 10,
    "name": "pulsesync.com",
    "maskedName": "p***nc.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 35,
    "backlinksCount": 2062,
    "referringDomains": 76,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsesync.com",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 11,
    "name": "cartflow.dev",
    "maskedName": "c***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 33,
    "backlinksCount": 3517,
    "referringDomains": 50,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartflow.dev",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  },
  {
    "id": 12,
    "name": "neuracraft.com",
    "maskedName": "n***ft.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 3073,
    "referringDomains": 45,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuracraft.com",
    "isClean": true,
    "droppedAt": "Oct 17, 2026"
  }
];
