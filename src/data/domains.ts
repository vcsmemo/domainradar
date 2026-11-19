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

export const LAST_UPDATED_AT = "Nov 19, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "nexusflow.io",
    "maskedName": "n***ow.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 46,
    "backlinksCount": 3637,
    "referringDomains": 91,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusflow.io",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 2,
    "name": "logicboost.ai",
    "maskedName": "l***st.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 46,
    "backlinksCount": 1800,
    "referringDomains": 111,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicboost.ai",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 3,
    "name": "metabase.co",
    "maskedName": "m***se.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 7,
    "drScore": 44,
    "backlinksCount": 3726,
    "referringDomains": 133,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metabase.co",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 4,
    "name": "bytesync.ai",
    "maskedName": "b***nc.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 43,
    "backlinksCount": 4216,
    "referringDomains": 135,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytesync.ai",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 5,
    "name": "promptscale.io",
    "maskedName": "p***le.io",
    "tld": ".io",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 812,
    "referringDomains": 123,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=promptscale.io",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 6,
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
    "droppedAt": "Nov 19, 2026"
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
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 8,
    "name": "metamind.app",
    "maskedName": "m***nd.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 35,
    "backlinksCount": 2946,
    "referringDomains": 73,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=metamind.app",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 9,
    "name": "mednode.app",
    "maskedName": "m***de.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 34,
    "backlinksCount": 1039,
    "referringDomains": 35,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=mednode.app",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 10,
    "name": "stackcraft.com",
    "maskedName": "s***ft.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 34,
    "backlinksCount": 3152,
    "referringDomains": 144,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackcraft.com",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 11,
    "name": "cartbench.ai",
    "maskedName": "c***ch.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 33,
    "backlinksCount": 3767,
    "referringDomains": 71,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=cartbench.ai",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  },
  {
    "id": 12,
    "name": "hubpulse.io",
    "maskedName": "h***se.io",
    "tld": ".io",
    "niche": "Health",
    "domainAgeYears": 6,
    "drScore": 28,
    "backlinksCount": 1151,
    "referringDomains": 47,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubpulse.io",
    "isClean": true,
    "droppedAt": "Nov 19, 2026"
  }
];
