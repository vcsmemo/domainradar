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

export const LAST_UPDATED_AT = "Oct 06, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "fitdesk.co",
    "maskedName": "f***sk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 3703,
    "referringDomains": 104,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitdesk.co",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 2,
    "name": "fitgenie.app",
    "maskedName": "f***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 800,
    "referringDomains": 115,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitgenie.app",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 3,
    "name": "devboost.ai",
    "maskedName": "d***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 2784,
    "referringDomains": 64,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devboost.ai",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 4,
    "name": "pulseboard.co",
    "maskedName": "p***rd.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 1982,
    "referringDomains": 100,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulseboard.co",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
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
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 6,
    "name": "fitops.ai",
    "maskedName": "f***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 36,
    "backlinksCount": 2691,
    "referringDomains": 108,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitops.ai",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
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
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 8,
    "name": "finflow.ai",
    "maskedName": "f***ow.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 33,
    "backlinksCount": 2842,
    "referringDomains": 52,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=finflow.ai",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 9,
    "name": "medhub.dev",
    "maskedName": "m***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 33,
    "backlinksCount": 3123,
    "referringDomains": 98,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medhub.dev",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 10,
    "name": "vectorbench.io",
    "maskedName": "v***ch.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 31,
    "backlinksCount": 2973,
    "referringDomains": 124,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorbench.io",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 11,
    "name": "finops.ai",
    "maskedName": "f***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 29,
    "backlinksCount": 2482,
    "referringDomains": 98,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=finops.ai",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  },
  {
    "id": 12,
    "name": "hypermind.ai",
    "maskedName": "h***nd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 28,
    "backlinksCount": 3531,
    "referringDomains": 47,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hypermind.ai",
    "isClean": true,
    "droppedAt": "Oct 06, 2026"
  }
];
