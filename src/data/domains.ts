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

export const LAST_UPDATED_AT = "Oct 20, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "omnimind.co",
    "maskedName": "o***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 48,
    "backlinksCount": 4150,
    "referringDomains": 75,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omnimind.co",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 2,
    "name": "metastack.ai",
    "maskedName": "m***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 3189,
    "referringDomains": 41,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metastack.ai",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 3,
    "name": "fitwork.ai",
    "maskedName": "f***rk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 45,
    "backlinksCount": 1711,
    "referringDomains": 115,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitwork.ai",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 4,
    "name": "vectorstack.ai",
    "maskedName": "v***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 45,
    "backlinksCount": 3754,
    "referringDomains": 86,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorstack.ai",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 5,
    "name": "scaleboost.com",
    "maskedName": "s***st.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 42,
    "backlinksCount": 3724,
    "referringDomains": 128,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleboost.com",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 6,
    "name": "cloudboard.ai",
    "maskedName": "c***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 1188,
    "referringDomains": 59,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudboard.ai",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 7,
    "name": "opsstack.dev",
    "maskedName": "o***ck.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 38,
    "backlinksCount": 1496,
    "referringDomains": 74,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsstack.dev",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
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
    "droppedAt": "Oct 20, 2026"
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
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 10,
    "name": "cloudgenie.ai",
    "maskedName": "c***ie.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 33,
    "backlinksCount": 1266,
    "referringDomains": 130,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudgenie.ai",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 11,
    "name": "flowbench.com",
    "maskedName": "f***ch.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 33,
    "backlinksCount": 2437,
    "referringDomains": 85,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowbench.com",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  },
  {
    "id": 12,
    "name": "bytebase.ai",
    "maskedName": "b***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 931,
    "referringDomains": 76,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytebase.ai",
    "isClean": true,
    "droppedAt": "Oct 20, 2026"
  }
];
