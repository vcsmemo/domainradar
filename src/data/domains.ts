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

export const LAST_UPDATED_AT = "Nov 17, 2026";

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "stackscale.app",
    "maskedName": "s***le.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 8,
    "drScore": 47,
    "backlinksCount": 3621,
    "referringDomains": 124,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=stackscale.app",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 2,
    "name": "gitmetrics.ai",
    "maskedName": "g***cs.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 47,
    "backlinksCount": 1116,
    "referringDomains": 46,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=gitmetrics.ai",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 3,
    "name": "logicnode.app",
    "maskedName": "l***de.app",
    "tld": ".app",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 45,
    "backlinksCount": 1352,
    "referringDomains": 113,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=logicnode.app",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 4,
    "name": "autometrics.io",
    "maskedName": "a***cs.io",
    "tld": ".io",
    "niche": "SaaS",
    "domainAgeYears": 8,
    "drScore": 43,
    "backlinksCount": 2368,
    "referringDomains": 49,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=autometrics.io",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 5,
    "name": "pulseops.app",
    "maskedName": "p***ps.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 4,
    "drScore": 40,
    "backlinksCount": 2729,
    "referringDomains": 57,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=pulseops.app",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 6,
    "name": "devops.app",
    "maskedName": "d***ps.app",
    "tld": ".app",
    "niche": "DevTools",
    "domainAgeYears": 7,
    "drScore": 37,
    "backlinksCount": 3732,
    "referringDomains": 132,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=devops.app",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 7,
    "name": "hubdesk.co",
    "maskedName": "h***sk.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 5,
    "drScore": 37,
    "backlinksCount": 2798,
    "referringDomains": 61,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=hubdesk.co",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
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
    "droppedAt": "Nov 17, 2026"
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
      "TechCrunch",
      "ProductHunt",
      "X/Twitter"
    ],
    "dropStatus": "Available",
    "checkUrl": "https://porkbun.com/checkout/search?q=saasmetric.co",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 10,
    "name": "nexusmetrics.ai",
    "maskedName": "n***cs.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 35,
    "backlinksCount": 1628,
    "referringDomains": 62,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=nexusmetrics.ai",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 11,
    "name": "medcraft.ai",
    "maskedName": "m***ft.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 4,
    "drScore": 30,
    "backlinksCount": 3126,
    "referringDomains": 139,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=medcraft.ai",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  },
  {
    "id": 12,
    "name": "automind.ai",
    "maskedName": "a***nd.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 5,
    "drScore": 28,
    "backlinksCount": 4451,
    "referringDomains": 130,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "dropStatus": "Pending Delete",
    "checkUrl": "https://porkbun.com/checkout/search?q=automind.ai",
    "isClean": true,
    "droppedAt": "Nov 17, 2026"
  }
];
