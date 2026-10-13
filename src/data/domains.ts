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

export const LAST_UPDATED_AT = "Oct 13, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "gitwork.app",
    "maskedName": "g***rk.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 3713,
    "referringDomains": 111,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitwork.app",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 2,
    "name": "apexpulse.ai",
    "maskedName": "a***se.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 3437,
    "referringDomains": 131,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexpulse.ai",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 3,
    "name": "hubmind.com",
    "maskedName": "h***nd.com",
    "tld": ".com",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 46,
    "backlinksCount": 4400,
    "referringDomains": 125,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubmind.com",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 4,
    "name": "vectorbase.app",
    "maskedName": "v***se.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 6,
    "drScore": 45,
    "backlinksCount": 2745,
    "referringDomains": 95,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=vectorbase.app",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 5,
    "name": "opsboard.dev",
    "maskedName": "o***rd.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 45,
    "backlinksCount": 2649,
    "referringDomains": 53,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=opsboard.dev",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 6,
    "name": "stratabench.co",
    "maskedName": "s***ch.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 38,
    "backlinksCount": 2425,
    "referringDomains": 88,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratabench.co",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 7,
    "name": "stratasync.com",
    "maskedName": "s***nc.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 4,
    "drScore": 37,
    "backlinksCount": 842,
    "referringDomains": 142,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratasync.com",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
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
    "droppedAt": "Oct 13, 2026"
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
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 10,
    "name": "apexnode.ai",
    "maskedName": "a***de.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 35,
    "backlinksCount": 3257,
    "referringDomains": 51,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=apexnode.ai",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 11,
    "name": "hypermetrics.ai",
    "maskedName": "h***cs.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 32,
    "backlinksCount": 3555,
    "referringDomains": 121,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hypermetrics.ai",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  },
  {
    "id": 12,
    "name": "stratapulse.app",
    "maskedName": "s***se.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 8,
    "drScore": 30,
    "backlinksCount": 876,
    "referringDomains": 63,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratapulse.app",
    "isClean": true,
    "droppedAt": "Oct 13, 2026"
  }
];
