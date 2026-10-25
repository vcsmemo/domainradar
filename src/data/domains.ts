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

export const LAST_UPDATED_AT = "Oct 25, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "pulsedeploy.ai",
    "maskedName": "p***oy.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 3394,
    "referringDomains": 42,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsedeploy.ai",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 2,
    "name": "agentmetrics.dev",
    "maskedName": "a***cs.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 47,
    "backlinksCount": 1051,
    "referringDomains": 137,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentmetrics.dev",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 3,
    "name": "scalebase.com",
    "maskedName": "s***se.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 964,
    "referringDomains": 37,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalebase.com",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 4,
    "name": "stackboost.app",
    "maskedName": "s***st.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 1037,
    "referringDomains": 122,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackboost.app",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 5,
    "name": "synthscale.co",
    "maskedName": "s***le.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 38,
    "backlinksCount": 4213,
    "referringDomains": 100,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthscale.co",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 6,
    "name": "opsgenie.io",
    "maskedName": "o***ie.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 37,
    "backlinksCount": 1739,
    "referringDomains": 114,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsgenie.io",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 8,
    "name": "flownode.dev",
    "maskedName": "f***de.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 3205,
    "referringDomains": 76,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=flownode.dev",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 10,
    "name": "scalesync.com",
    "maskedName": "s***nc.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 34,
    "backlinksCount": 3570,
    "referringDomains": 127,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalesync.com",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 11,
    "name": "agentwork.io",
    "maskedName": "a***rk.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 32,
    "backlinksCount": 3939,
    "referringDomains": 123,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentwork.io",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  },
  {
    "id": 12,
    "name": "opssync.co",
    "maskedName": "o***nc.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 30,
    "backlinksCount": 2266,
    "referringDomains": 109,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opssync.co",
    "isClean": true,
    "droppedAt": "Oct 25, 2026"
  }
];
