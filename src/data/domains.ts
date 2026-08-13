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

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
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
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 2,
    "name": "promptgenie.app",
    "maskedName": "p***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 1250,
    "referringDomains": 55,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 3,
    "name": "agentboard.ai",
    "maskedName": "a***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 41,
    "backlinksCount": 3200,
    "referringDomains": 115,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentboard.ai",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 4,
    "name": "gitopsflow.dev",
    "maskedName": "g***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 39,
    "backlinksCount": 2300,
    "referringDomains": 88,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitopsflow.dev",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 5,
    "name": "devmetrics.io",
    "maskedName": "d***cs.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 38,
    "backlinksCount": 2100,
    "referringDomains": 95,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devmetrics.io",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 6,
    "name": "cloudscale.co",
    "maskedName": "c***le.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1850,
    "referringDomains": 78,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudscale.co",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 7,
    "name": "finstack.co",
    "maskedName": "f***ck.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 4100,
    "referringDomains": 140,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finstack.co",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 8,
    "name": "fitpulse.app",
    "maskedName": "f***se.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 820,
    "referringDomains": 38,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitpulse.app",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 9,
    "name": "cartboost.app",
    "maskedName": "c***st.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 31,
    "backlinksCount": 1100,
    "referringDomains": 48,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartboost.app",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  },
  {
    "id": 10,
    "name": "medpulse.co",
    "maskedName": "m***se.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 950,
    "referringDomains": 42,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medpulse.co",
    "isClean": true,
    "droppedAt": "Aug 13, 2026"
  }
];
