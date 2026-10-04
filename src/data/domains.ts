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

export const LAST_UPDATED_AT = "Oct 04, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "devmetrics.io",
    "maskedName": "d***cs.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 45,
    "backlinksCount": 4098,
    "referringDomains": 112,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=devmetrics.io",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 2,
    "name": "fitboard.com",
    "maskedName": "f***rd.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 41,
    "backlinksCount": 2550,
    "referringDomains": 63,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitboard.com",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 3,
    "name": "devgenie.io",
    "maskedName": "d***ie.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 1924,
    "referringDomains": 101,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devgenie.io",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 4,
    "name": "fitboost.co",
    "maskedName": "f***st.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 5,
    "drScore": 40,
    "backlinksCount": 3632,
    "referringDomains": 82,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitboost.co",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 5,
    "name": "cloudlab.co",
    "maskedName": "c***ab.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 37,
    "backlinksCount": 2621,
    "referringDomains": 123,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudlab.co",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 6,
    "name": "apexdesk.co",
    "maskedName": "a***sk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 2852,
    "referringDomains": 146,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexdesk.co",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
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
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 8,
    "name": "gitpulse.com",
    "maskedName": "g***se.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 2428,
    "referringDomains": 68,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitpulse.com",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 10,
    "name": "vectormetrics.dev",
    "maskedName": "v***cs.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 32,
    "backlinksCount": 2411,
    "referringDomains": 111,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectormetrics.dev",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 11,
    "name": "autoflow.com",
    "maskedName": "a***ow.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 29,
    "backlinksCount": 3300,
    "referringDomains": 124,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autoflow.com",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  },
  {
    "id": 12,
    "name": "stratabench.io",
    "maskedName": "s***ch.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 4468,
    "referringDomains": 37,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratabench.io",
    "isClean": true,
    "droppedAt": "Oct 04, 2026"
  }
];
