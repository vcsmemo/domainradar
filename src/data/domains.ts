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

export const LAST_UPDATED_AT = "Oct 29, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "stackmind.com",
    "maskedName": "s***nd.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 48,
    "backlinksCount": 2229,
    "referringDomains": 93,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackmind.com",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 2,
    "name": "promptdesk.app",
    "maskedName": "p***sk.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 48,
    "backlinksCount": 4442,
    "referringDomains": 115,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptdesk.app",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 3,
    "name": "logicmind.co",
    "maskedName": "l***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 41,
    "backlinksCount": 4423,
    "referringDomains": 46,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicmind.co",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 4,
    "name": "cloudmetrics.app",
    "maskedName": "c***cs.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 41,
    "backlinksCount": 4317,
    "referringDomains": 112,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudmetrics.app",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
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
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 6,
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
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 7,
    "name": "cloudwork.co",
    "maskedName": "c***rk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 35,
    "backlinksCount": 4393,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudwork.co",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 8,
    "name": "primedeploy.ai",
    "maskedName": "p***oy.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 35,
    "backlinksCount": 1146,
    "referringDomains": 75,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primedeploy.ai",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 9,
    "name": "opssync.com",
    "maskedName": "o***nc.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 2942,
    "referringDomains": 99,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opssync.com",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 10,
    "name": "devhub.ai",
    "maskedName": "d***ub.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 3475,
    "referringDomains": 97,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devhub.ai",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 11,
    "name": "scalemind.io",
    "maskedName": "s***nd.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 32,
    "backlinksCount": 2593,
    "referringDomains": 91,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalemind.io",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  },
  {
    "id": 12,
    "name": "pulsesync.dev",
    "maskedName": "p***nc.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 2800,
    "referringDomains": 140,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsesync.dev",
    "isClean": true,
    "droppedAt": "Oct 29, 2026"
  }
];
