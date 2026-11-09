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

export const LAST_UPDATED_AT = "Nov 09, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "vectorboost.com",
    "maskedName": "v***st.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 4263,
    "referringDomains": 93,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorboost.com",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 2,
    "name": "cartpulse.io",
    "maskedName": "c***se.io",
    "tld": ".io",
    "niche": "Health",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 4454,
    "referringDomains": 113,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartpulse.io",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 3,
    "name": "primeflow.dev",
    "maskedName": "p***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 44,
    "backlinksCount": 1554,
    "referringDomains": 48,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=primeflow.dev",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 4,
    "name": "autobase.com",
    "maskedName": "a***se.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 42,
    "backlinksCount": 1373,
    "referringDomains": 105,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autobase.com",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 5,
    "name": "logicbench.co",
    "maskedName": "l***ch.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 42,
    "backlinksCount": 3800,
    "referringDomains": 85,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicbench.co",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 6,
    "name": "findeploy.app",
    "maskedName": "f***oy.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 4325,
    "referringDomains": 124,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=findeploy.app",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 7,
    "name": "devgenie.dev",
    "maskedName": "d***ie.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 37,
    "backlinksCount": 3335,
    "referringDomains": 52,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devgenie.dev",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 8,
    "name": "devcraft.co",
    "maskedName": "d***ft.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 4088,
    "referringDomains": 55,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devcraft.co",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
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
    "droppedAt": "Nov 09, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 11,
    "name": "neuramind.ai",
    "maskedName": "n***nd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 2819,
    "referringDomains": 62,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuramind.ai",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  },
  {
    "id": 12,
    "name": "vectorboard.ai",
    "maskedName": "v***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 32,
    "backlinksCount": 3308,
    "referringDomains": 122,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorboard.ai",
    "isClean": true,
    "droppedAt": "Nov 09, 2026"
  }
];
