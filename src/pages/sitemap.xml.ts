import type { APIRoute } from 'astro';
import { DOMAINS } from '../data/domains';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://niche-domain-radar.pages.dev';

  const domainUrls = DOMAINS.map(
    domain => `
  <url>
    <loc>${baseUrl}/domain/${domain.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>${domainUrls}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
