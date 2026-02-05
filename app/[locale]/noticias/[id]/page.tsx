import { Button } from '@/components/ui/button';
import { newsArticles } from '@/lib/news-data';
import { Calendar, ChevronLeft, Share2, Tag, User } from 'lucide-react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = newsArticles.find(item => item.id === id);
  const t = await getTranslations('NewsArticlePage');

  if (!news) return { title: t('not_found_title') };

  return {
    title: `${news.title}${t('meta_title_suffix')}`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      type: 'article',
      publishedTime: news.date,
      authors: [news.author],
      images: [{ url: news.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description: news.excerpt,
      images: [news.image],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = newsArticles.find(item => item.id === id);
  const t = await getTranslations('NewsArticlePage');

  if (!news) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/noticias"
              className="inline-flex items-center text-white/80 hover:text-amavi-green transition-colors mb-6 font-bold group"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('back_to_news')}
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-white/90 mb-6 text-sm font-medium">
              <span className="bg-amavi-green px-3 py-1 rounded-full text-white font-bold uppercase tracking-wider text-xs">
                {news.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amavi-green" />
                {news.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-amavi-green" />
                {news.author}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight font-outfit tracking-tighter">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1">
            <div
              className="prose prose-lg md:prose-xl prose-headings:text-amavi-brown prose-headings:font-outfit prose-p:text-amavi-brown/80 prose-p:leading-relaxed prose-strong:text-amavi-brown text-amavi-brown/90"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Tags */}
            <div className="mt-16 flex flex-wrap gap-3 border-t border-amavi-beige/10 pt-10">
              {news.tags.map(tag => (
                <div key={tag} className="flex items-center gap-2 bg-amavi-bg-light px-5 py-2.5 rounded-full text-amavi-brown font-bold text-xs uppercase tracking-widest hover:bg-amavi-green hover:text-white transition-all cursor-pointer group">
                  <Tag className="w-3.5 h-3.5 text-amavi-green group-hover:text-white" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-12">
            <div className="bg-amavi-bg-light p-8 rounded-[2.5rem] border border-amavi-beige/10 sticky top-24 shadow-sm">
              <h3 className="text-xl font-bold text-amavi-brown mb-8 font-outfit uppercase tracking-tighter">{t('share_title')}</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-2xl w-14 h-14 border-amavi-brown/10 hover:bg-amavi-green hover:text-white hover:border-amavi-green hover:shadow-lg transition-all">
                   <Share2 className="w-6 h-6" />
                </Button>
                <div className="flex-grow bg-white rounded-2xl border border-amavi-brown/5 flex items-center justify-center text-xs font-bold text-amavi-brown/30 uppercase tracking-widest">
                  {t('social_media_label')}
                </div>
              </div>

              <h3 className="text-xl font-bold text-amavi-brown mt-12 mb-8 font-outfit uppercase tracking-tighter">{t('related_news_title')}</h3>
              <div className="space-y-8">
                 {newsArticles.filter(i => i.id !== news.id).slice(0, 3).map(item => (
                   <Link key={item.id} href={`/noticias/${item.id}`} className="group block">
                      <div className="aspect-video relative rounded-2xl overflow-hidden mb-4 shadow-sm">
                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <h4 className="font-bold text-amavi-brown group-hover:text-amavi-green transition-colors line-clamp-2 leading-tight text-lg">
                        {item.title}
                      </h4>
                      <p className="text-[10px] font-black text-amavi-green uppercase tracking-[0.2em] mt-3">
                        {item.date}
                      </p>
                   </Link>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
