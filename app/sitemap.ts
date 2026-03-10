import { newsArticles } from '@/lib/news-data';
import { programsInfo } from '@/lib/programs-data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amavi.org.mz';
  const locales = ['pt', 'en'];

  const staticRoutes = [
    '',
    '/sobre',
    '/programas',
    '/impacto',
    '/doar',
    '/voluntariado',
    '/noticias',
    '/privacidade',
    '/termos',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Static routes
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.9,
      });
    });

    // News articles
    newsArticles.forEach((article) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/noticias/${article.id}`,
        lastModified: new Date(article.date),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    // Programs
    programsInfo.forEach((program) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/programas/${program.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}
