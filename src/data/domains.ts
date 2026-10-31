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

export const LAST_UPDATED_AT = "Oct 31, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "autoops.app",
    "maskedName": "a***ps.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 48,
    "backlinksCount": 1831,
    "referringDomains": 58,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autoops.app",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 2,
    "name": "finmind.dev",
    "maskedName": "f***nd.dev",
    "tld": ".dev",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 48,
    "backlinksCount": 3460,
    "referringDomains": 106,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=finmind.dev",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 3,
    "name": "medsync.ai",
    "maskedName": "m***nc.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 47,
    "backlinksCount": 1778,
    "referringDomains": 119,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=medsync.ai",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 4,
    "name": "bytescale.ai",
    "maskedName": "b***le.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 46,
    "backlinksCount": 4374,
    "referringDomains": 132,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=bytescale.ai",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 5,
    "name": "fitboard.com",
    "maskedName": "f***rd.com",
    "tld": ".com",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 46,
    "backlinksCount": 2745,
    "referringDomains": 58,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=fitboard.com",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 6,
    "name": "nexuslab.dev",
    "maskedName": "n***ab.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 3,
    "drScore": 44,
    "backlinksCount": 3065,
    "referringDomains": 63,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexuslab.dev",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 7,
    "name": "pulsenode.io",
    "maskedName": "p***de.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 42,
    "backlinksCount": 2289,
    "referringDomains": 84,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulsenode.io",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 8,
    "name": "medpulse.co",
    "maskedName": "m***se.co",
    "tld": ".co",
    "niche": "Health",
    "domainAgeYears": 3,
    "drScore": 40,
    "backlinksCount": 1098,
    "referringDomains": 100,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medpulse.co",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 9,
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
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 10,
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
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 11,
    "name": "agentscale.app",
    "maskedName": "a***le.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 8,
    "drScore": 35,
    "backlinksCount": 4331,
    "referringDomains": 46,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=agentscale.app",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  },
  {
    "id": 12,
    "name": "autobench.com",
    "maskedName": "a***ch.com",
    "tld": ".com",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 31,
    "backlinksCount": 971,
    "referringDomains": 89,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=autobench.com",
    "isClean": true,
    "droppedAt": "Oct 31, 2026"
  }
];
