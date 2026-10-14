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

export const LAST_UPDATED_AT = "Oct 14, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "synthboost.dev",
    "maskedName": "s***st.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 46,
    "backlinksCount": 1622,
    "referringDomains": 44,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=synthboost.dev",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 2,
    "name": "bytelab.io",
    "maskedName": "b***ab.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 44,
    "backlinksCount": 2252,
    "referringDomains": 136,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytelab.io",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 3,
    "name": "opscraft.co",
    "maskedName": "o***ft.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 4032,
    "referringDomains": 115,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=opscraft.co",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 4,
    "name": "scalehub.dev",
    "maskedName": "s***ub.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 41,
    "backlinksCount": 1907,
    "referringDomains": 65,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalehub.dev",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 5,
    "name": "flowops.dev",
    "maskedName": "f***ps.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 1168,
    "referringDomains": 51,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=flowops.dev",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 6,
    "name": "apexboost.ai",
    "maskedName": "a***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 39,
    "backlinksCount": 3010,
    "referringDomains": 126,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexboost.ai",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 7,
    "name": "promptstack.ai",
    "maskedName": "p***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 37,
    "backlinksCount": 2925,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptstack.ai",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
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
    "droppedAt": "Oct 14, 2026"
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
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 10,
    "name": "hypernode.com",
    "maskedName": "h***de.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 32,
    "backlinksCount": 4106,
    "referringDomains": 96,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hypernode.com",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 11,
    "name": "apexboost.io",
    "maskedName": "a***st.io",
    "tld": ".io",
    "niche": "E-commerce",
    "domainAgeYears": 8,
    "drScore": 29,
    "backlinksCount": 2334,
    "referringDomains": 143,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexboost.io",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  },
  {
    "id": 12,
    "name": "gitsync.ai",
    "maskedName": "g***nc.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 28,
    "backlinksCount": 4296,
    "referringDomains": 128,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitsync.ai",
    "isClean": true,
    "droppedAt": "Oct 14, 2026"
  }
];
