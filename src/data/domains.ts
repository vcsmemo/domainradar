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

export const LAST_UPDATED_AT = "Sep 30, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "devboost.io",
    "maskedName": "d***st.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 45,
    "backlinksCount": 2505,
    "referringDomains": 102,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=devboost.io",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 2,
    "name": "devbench.app",
    "maskedName": "d***ch.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 1114,
    "referringDomains": 83,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devbench.app",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 3,
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
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 4,
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
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 5,
    "name": "opssync.co",
    "maskedName": "o***nc.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 35,
    "backlinksCount": 3564,
    "referringDomains": 74,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opssync.co",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 6,
    "name": "byteboost.io",
    "maskedName": "b***st.io",
    "tld": ".io",
    "niche": "E-commerce",
    "domainAgeYears": 5,
    "drScore": 33,
    "backlinksCount": 1073,
    "referringDomains": 52,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=byteboost.io",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 7,
    "name": "nexusdesk.app",
    "maskedName": "n***sk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 31,
    "backlinksCount": 1629,
    "referringDomains": 130,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusdesk.app",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 8,
    "name": "hyperwork.ai",
    "maskedName": "h***rk.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 3120,
    "referringDomains": 125,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hyperwork.ai",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 9,
    "name": "apexboard.dev",
    "maskedName": "a***rd.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 1795,
    "referringDomains": 35,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexboard.dev",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 10,
    "name": "devgenie.dev",
    "maskedName": "d***ie.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 29,
    "backlinksCount": 2820,
    "referringDomains": 119,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devgenie.dev",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 11,
    "name": "nexusdeploy.dev",
    "maskedName": "n***oy.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 28,
    "backlinksCount": 4128,
    "referringDomains": 40,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusdeploy.dev",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  },
  {
    "id": 12,
    "name": "cartboost.co",
    "maskedName": "c***st.co",
    "tld": ".co",
    "niche": "E-commerce",
    "domainAgeYears": 8,
    "drScore": 28,
    "backlinksCount": 2968,
    "referringDomains": 76,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartboost.co",
    "isClean": true,
    "droppedAt": "Sep 30, 2026"
  }
];
