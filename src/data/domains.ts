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

export const LAST_UPDATED_AT = "Oct 28, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "hubnode.co",
    "maskedName": "h***de.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 46,
    "backlinksCount": 986,
    "referringDomains": 109,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubnode.co",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 2,
    "name": "scaleops.ai",
    "maskedName": "s***ps.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 4495,
    "referringDomains": 99,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scaleops.ai",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
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
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptgenie.app",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 4,
    "name": "pulsenode.com",
    "maskedName": "p***de.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 36,
    "backlinksCount": 829,
    "referringDomains": 93,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsenode.com",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 5,
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
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 6,
    "name": "medlab.com",
    "maskedName": "m***ab.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 35,
    "backlinksCount": 2160,
    "referringDomains": 47,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medlab.com",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 7,
    "name": "scalelab.co",
    "maskedName": "s***ab.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 34,
    "backlinksCount": 1679,
    "referringDomains": 94,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=scalelab.co",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 8,
    "name": "devpulse.dev",
    "maskedName": "d***se.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 33,
    "backlinksCount": 1769,
    "referringDomains": 72,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devpulse.dev",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 9,
    "name": "stacklab.com",
    "maskedName": "s***ab.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 32,
    "backlinksCount": 3888,
    "referringDomains": 53,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stacklab.com",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 10,
    "name": "stratastack.ai",
    "maskedName": "s***ck.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 30,
    "backlinksCount": 1603,
    "referringDomains": 97,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=stratastack.ai",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 11,
    "name": "findeploy.co",
    "maskedName": "f***oy.co",
    "tld": ".co",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 29,
    "backlinksCount": 3196,
    "referringDomains": 143,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=findeploy.co",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  },
  {
    "id": 12,
    "name": "cloudgenie.co",
    "maskedName": "c***ie.co",
    "tld": ".co",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 28,
    "backlinksCount": 4101,
    "referringDomains": 73,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cloudgenie.co",
    "isClean": true,
    "droppedAt": "Oct 28, 2026"
  }
];
