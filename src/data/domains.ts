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

export const LAST_UPDATED_AT = "Aug 14, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "metadeploy.ai",
    "maskedName": "m***oy.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 2572,
    "referringDomains": 124,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=metadeploy.ai",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 2,
    "name": "hypercraft.app",
    "maskedName": "h***ft.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 44,
    "backlinksCount": 3812,
    "referringDomains": 39,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hypercraft.app",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 3,
    "name": "opswork.app",
    "maskedName": "o***rk.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 43,
    "backlinksCount": 1174,
    "referringDomains": 73,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opswork.app",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 4,
    "name": "bytedesk.com",
    "maskedName": "b***sk.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 2378,
    "referringDomains": 112,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytedesk.com",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
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
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 6,
    "name": "promptdesk.io",
    "maskedName": "p***sk.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 36,
    "backlinksCount": 3217,
    "referringDomains": 52,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptdesk.io",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 8,
    "name": "cloudboost.ai",
    "maskedName": "c***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 1348,
    "referringDomains": 122,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudboost.ai",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 9,
    "name": "strataboost.ai",
    "maskedName": "s***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 30,
    "backlinksCount": 3229,
    "referringDomains": 113,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=strataboost.ai",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 10,
    "name": "apexboard.ai",
    "maskedName": "a***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 30,
    "backlinksCount": 903,
    "referringDomains": 142,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexboard.ai",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 11,
    "name": "omniboard.io",
    "maskedName": "o***rd.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 988,
    "referringDomains": 50,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=omniboard.io",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  },
  {
    "id": 12,
    "name": "gitops.ai",
    "maskedName": "g***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 2434,
    "referringDomains": 91,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitops.ai",
    "isClean": true,
    "droppedAt": "Aug 14, 2026"
  }
];
