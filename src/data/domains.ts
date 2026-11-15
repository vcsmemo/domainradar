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

export const LAST_UPDATED_AT = "Nov 15, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "medflow.dev",
    "maskedName": "m***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 47,
    "backlinksCount": 1461,
    "referringDomains": 80,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medflow.dev",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 2,
    "name": "devnode.ai",
    "maskedName": "d***de.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 47,
    "backlinksCount": 2537,
    "referringDomains": 36,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devnode.ai",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 3,
    "name": "opslab.co",
    "maskedName": "o***ab.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 4317,
    "referringDomains": 50,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opslab.co",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 4,
    "name": "finops.ai",
    "maskedName": "f***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 3418,
    "referringDomains": 47,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finops.ai",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 5,
    "name": "medcraft.app",
    "maskedName": "m***ft.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 39,
    "backlinksCount": 2352,
    "referringDomains": 138,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medcraft.app",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 6,
    "name": "neuraboost.com",
    "maskedName": "n***st.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 4462,
    "referringDomains": 121,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuraboost.com",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 8,
    "name": "github.app",
    "maskedName": "g***ub.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 36,
    "backlinksCount": 4083,
    "referringDomains": 113,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=github.app",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 10,
    "name": "omnimind.co",
    "maskedName": "o***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 3835,
    "referringDomains": 47,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnimind.co",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 11,
    "name": "apexcraft.io",
    "maskedName": "a***ft.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 2294,
    "referringDomains": 94,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexcraft.io",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  },
  {
    "id": 12,
    "name": "logicscale.com",
    "maskedName": "l***le.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 30,
    "backlinksCount": 3027,
    "referringDomains": 98,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicscale.com",
    "isClean": true,
    "droppedAt": "Nov 15, 2026"
  }
];
