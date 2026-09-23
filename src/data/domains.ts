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

export const LAST_UPDATED_AT = "Sep 23, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "finpulse.app",
    "maskedName": "f***se.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 1829,
    "referringDomains": 122,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finpulse.app",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 2,
    "name": "devmind.co",
    "maskedName": "d***nd.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 4278,
    "referringDomains": 92,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=devmind.co",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 3,
    "name": "autopulse.io",
    "maskedName": "a***se.io",
    "tld": ".io",
    "niche": "Health",
    "domainAgeYears": 6,
    "drScore": 39,
    "backlinksCount": 4018,
    "referringDomains": 66,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autopulse.io",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 4,
    "name": "primeboard.ai",
    "maskedName": "p***rd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 38,
    "backlinksCount": 1722,
    "referringDomains": 38,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=primeboard.ai",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
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
    "droppedAt": "Sep 23, 2026"
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
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 7,
    "name": "flowscale.ai",
    "maskedName": "f***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 35,
    "backlinksCount": 3882,
    "referringDomains": 43,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowscale.ai",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 8,
    "name": "neuragenie.app",
    "maskedName": "n***ie.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 2912,
    "referringDomains": 109,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=neuragenie.app",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 9,
    "name": "synthflow.co",
    "maskedName": "s***ow.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 34,
    "backlinksCount": 3080,
    "referringDomains": 115,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthflow.co",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 10,
    "name": "metricwork.app",
    "maskedName": "m***rk.app",
    "tld": ".app",
    "niche": "SaaS",
    "domainAgeYears": 3,
    "drScore": 32,
    "backlinksCount": 3809,
    "referringDomains": 68,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metricwork.app",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 11,
    "name": "craftdesk.io",
    "maskedName": "c***sk.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 29,
    "backlinksCount": 4352,
    "referringDomains": 69,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=craftdesk.io",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  },
  {
    "id": 12,
    "name": "opsboost.io",
    "maskedName": "o***st.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 28,
    "backlinksCount": 3108,
    "referringDomains": 72,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsboost.io",
    "isClean": true,
    "droppedAt": "Sep 23, 2026"
  }
];
