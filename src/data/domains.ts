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

export const LAST_UPDATED_AT = "Nov 05, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "logicboost.io",
    "maskedName": "l***st.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 47,
    "backlinksCount": 3594,
    "referringDomains": 144,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicboost.io",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 2,
    "name": "pulsedeploy.com",
    "maskedName": "p***oy.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 1467,
    "referringDomains": 141,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsedeploy.com",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 3,
    "name": "nexushub.com",
    "maskedName": "n***ub.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 42,
    "backlinksCount": 3276,
    "referringDomains": 136,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexushub.com",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 4,
    "name": "flowgenie.com",
    "maskedName": "f***ie.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 42,
    "backlinksCount": 2989,
    "referringDomains": 123,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowgenie.com",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 5,
    "name": "pulseboost.app",
    "maskedName": "p***st.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 8,
    "drScore": 41,
    "backlinksCount": 991,
    "referringDomains": 135,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulseboost.app",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 6,
    "name": "neurahub.io",
    "maskedName": "n***ub.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 38,
    "backlinksCount": 4367,
    "referringDomains": 41,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neurahub.io",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 9,
    "name": "apexbench.com",
    "maskedName": "a***ch.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 35,
    "backlinksCount": 1245,
    "referringDomains": 143,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexbench.com",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 10,
    "name": "hubdesk.ai",
    "maskedName": "h***sk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 34,
    "backlinksCount": 2863,
    "referringDomains": 44,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubdesk.ai",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 11,
    "name": "cloudmetrics.app",
    "maskedName": "c***cs.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 31,
    "backlinksCount": 2480,
    "referringDomains": 113,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudmetrics.app",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  },
  {
    "id": 12,
    "name": "hyperdeploy.dev",
    "maskedName": "h***oy.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 29,
    "backlinksCount": 2737,
    "referringDomains": 92,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperdeploy.dev",
    "isClean": true,
    "droppedAt": "Nov 05, 2026"
  }
];
