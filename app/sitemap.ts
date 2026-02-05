import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amavi.org.mz'; // Replace with production URL

  // Static routes
  const routes = [
    '',
    '/sobre',
    '/programas',
    '/impacto',
    '/doar',
    '/voluntariado',
    '/noticias',
    '/privacidade',
    '/termos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
