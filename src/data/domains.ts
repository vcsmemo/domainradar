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
  isClean: boolean;
  droppedAt: string;
}

export const DOMAINS: ExpiredDomain[] = [
  {
    "id": 1,
    "name": "superlabs.ai",
    "maskedName": "s***bs.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 7,
    "drScore": 42,
    "backlinksCount": 3450,
    "referringDomains": 120,
    "featuredBacklinks": [
      "ProductHunt",
      "TechCrunch",
      "GitHub"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 2,
    "name": "devpulse.io",
    "maskedName": "d***se.io",
    "tld": ".io",
    "niche": "DevTools",
    "domainAgeYears": 5,
    "drScore": 38,
    "backlinksCount": 2100,
    "referringDomains": 95,
    "featuredBacklinks": [
      "HackerNews",
      "Vercel",
      "GitHub"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 3,
    "name": "cloudmetric.co",
    "maskedName": "c***ic.co",
    "tld": ".co",
    "niche": "SaaS",
    "domainAgeYears": 6,
    "drScore": 35,
    "backlinksCount": 1850,
    "referringDomains": 78,
    "featuredBacklinks": [
      "Medium",
      "Substack",
      "Forbes"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 4,
    "name": "healthbot.app",
    "maskedName": "h***ot.app",
    "tld": ".app",
    "niche": "Health",
    "domainAgeYears": 4,
    "drScore": 31,
    "backlinksCount": 920,
    "referringDomains": 45,
    "featuredBacklinks": [
      "TechCrunch",
      "ProductHunt"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 5,
    "name": "finflow.io",
    "maskedName": "f***ow.io",
    "tld": ".io",
    "niche": "Finance",
    "domainAgeYears": 8,
    "drScore": 45,
    "backlinksCount": 5100,
    "referringDomains": 160,
    "featuredBacklinks": [
      "Bloomberg",
      "Forbes",
      "ProductHunt"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 6,
    "name": "shopgenie.co",
    "maskedName": "s***ie.co",
    "tld": ".co",
    "niche": "E-commerce",
    "domainAgeYears": 5,
    "drScore": 29,
    "backlinksCount": 1150,
    "referringDomains": 52,
    "featuredBacklinks": [
      "Shopify Blog",
      "Medium"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 7,
    "name": "promptcraft.ai",
    "maskedName": "p***ft.ai",
    "tld": ".ai",
    "niche": "AI",
    "domainAgeYears": 3,
    "drScore": 36,
    "backlinksCount": 2400,
    "referringDomains": 88,
    "featuredBacklinks": [
      "ProductHunt",
      "X/Twitter"
    ],
    "isClean": true,
    "droppedAt": "Today"
  },
  {
    "id": 8,
    "name": "codeflow.dev",
    "maskedName": "c***ow.dev",
    "tld": ".dev",
    "niche": "DevTools",
    "domainAgeYears": 6,
    "drScore": 40,
    "backlinksCount": 3100,
    "referringDomains": 110,
    "featuredBacklinks": [
      "GitHub",
      "StackOverflow"
    ],
    "isClean": true,
    "droppedAt": "Today"
  }
];
