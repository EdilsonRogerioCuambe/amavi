import { Link } from '@/app/i18n/navigation';
import { ReadingProgressBar } from '@/components/reading-progress-bar';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/lib/news-data';
import { ArrowRight, Calendar, ChevronLeft, Facebook, Heart, Linkedin, Share2, Tag, Twitter, User } from 'lucide-react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = newsArticles.find(item => item.id === id || item.slug === id);
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
  const news = newsArticles.find(item => item.id === id || item.slug === id);
  const t = await getTranslations('NewsArticlePage');

  if (!news) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-amavi-bg-light/30 pb-24">
      <ReadingProgressBar />

      {/* Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover scale-105 animate-slow-zoom brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amavi-bg-light/30 via-transparent to-black/40" />

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <Link
              href="/noticias"
              className="inline-flex items-center text-white/70 hover:text-amavi-green transition-all mb-8 font-bold group bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              {t('back_to_news')}
            </Link>

            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
              <span className="bg-amavi-green px-4 py-1.5 rounded-full text-white font-black uppercase tracking-[0.15em] text-[10px] shadow-lg shadow-amavi-green/20">
                {news.category}
              </span>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Calendar className="w-4 h-4 text-amavi-green" />
                {news.date}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <User className="w-4 h-4 text-amavi-green" />
                {news.author}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-outfit tracking-tight max-w-4xl drop-shadow-2xl">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Social Floating Sidebar (Desktop) */}
          <aside className="hidden lg:flex flex-col gap-4 sticky top-32 h-fit">
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-amavi-beige/20 bg-white hover:bg-amavi-green hover:text-white transition-all shadow-sm">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-amavi-beige/20 bg-white hover:bg-amavi-green hover:text-white transition-all shadow-sm">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-amavi-beige/20 bg-white hover:bg-amavi-green hover:text-white transition-all shadow-sm">
              <Linkedin className="w-5 h-5" />
            </Button>
            <div className="w-px h-12 bg-amavi-beige/20 mx-auto my-2" />
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-amavi-beige/20 bg-white hover:text-amavi-green transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </Button>
          </aside>

          {/* Main Article Content */}
          <div className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-amavi-brown/5 border border-amavi-beige/5">
            <div
              className="prose prose-lg md:prose-xl max-w-none
                prose-headings:text-amavi-brown prose-headings:font-outfit prose-headings:font-bold prose-headings:tracking-tight
                prose-p:text-amavi-brown/80 prose-p:leading-[1.8] prose-p:mb-8
                prose-strong:text-amavi-brown prose-strong:font-black
                prose-img:rounded-3xl prose-img:shadow-xl
                prose-blockquote:border-amavi-green prose-blockquote:bg-amavi-bg-light/50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-amavi-brown
                first-letter:text-7xl first-letter:font-black first-letter:text-amavi-green first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Tags Section */}
            <div className="mt-20 pt-12 border-t border-amavi-beige/10">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amavi-brown/30 mb-6">{t('tags_label') || 'Tags'}</h4>
              <div className="flex flex-wrap gap-3">
                {news.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-2 bg-amavi-bg-light/50 border border-amavi-beige/10 px-6 py-3 rounded-2xl text-amavi-brown font-bold text-[11px] uppercase tracking-widest hover:bg-amavi-green hover:text-white hover:border-amavi-green hover:-translate-y-1 transition-all cursor-pointer group shadow-sm">
                    <Tag className="w-3.5 h-3.5 text-amavi-green group-hover:text-white" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Post Navigation */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {newsArticles.filter(i => i.id !== news.id).slice(0, 2).map((item, idx) => (
                 <Link key={item.id} href={`/noticias/${item.id}`} className="group p-8 rounded-[2rem] bg-amavi-bg-light/30 border border-amavi-beige/10 hover:border-amavi-green/20 hover:bg-white hover:shadow-xl transition-all">
                    <span className="text-[10px] font-black text-amavi-green uppercase tracking-[0.2em]">
                      {idx === 0 ? 'Anterior' : 'Próxima'}
                    </span>
                    <h5 className="font-bold text-lg text-amavi-brown mt-3 group-hover:text-amavi-green transition-colors line-clamp-2">
                       {item.title}
                    </h5>
                 </Link>
               ))}
            </div>
          </div>

          {/* Elegant Sidebar */}
          <div className="w-full lg:w-96 space-y-12">
            {/* CTA Box */}
            <div className="bg-amavi-brown p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amavi-green/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amavi-green/40 transition-all duration-700" />
              <Heart className="w-12 h-12 text-amavi-green mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold mb-4 font-outfit">Sua contribuição muda vidas.</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">Ajude-nos a continuar acolhendo vidas e transformando comunidades através da AMAVI.</p>
              <Button asChild className="w-full bg-amavi-green hover:bg-amavi-green/90 text-white font-bold py-6 rounded-2xl shadow-xl shadow-amavi-green/20 transition-all hover:scale-[1.02]">
                <Link href="/doar" className="flex items-center justify-center gap-2">
                  Apoiar Missão <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Related News Sticky */}
            <div className="sticky top-12 space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-xl font-bold text-amavi-brown font-outfit uppercase tracking-tighter shrink-0">{t('related_news_title')}</h3>
                  <div className="h-px bg-amavi-beige/20 w-full" />
                </div>
                <div className="space-y-10">
                   {newsArticles.filter(i => i.id !== news.id).slice(0, 3).map(item => (
                     <Link key={item.id} href={`/noticias/${item.id}`} className="group block">
                        <div className="aspect-[16/10] relative rounded-3xl overflow-hidden mb-5 shadow-lg shadow-amavi-brown/5">
                          <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute top-4 left-4">
                             <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-amavi-brown uppercase tracking-widest shadow-sm">
                               {item.category}
                             </span>
                          </div>
                        </div>
                        <h4 className="font-bold text-amavi-brown group-hover:text-amavi-green transition-colors line-clamp-2 leading-snug text-lg font-outfit">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-amavi-brown/30 uppercase tracking-[0.1em]">
                          <Calendar className="w-3.5 h-3.5 text-amavi-green" />
                          {item.date}
                        </div>
                     </Link>
                   ))}
                </div>
              </div>

              {/* Newsletter or Share */}
              <div className="bg-amavi-bg-light/50 p-8 rounded-[2rem] border border-amavi-beige/10">
                 <h3 className="font-bold text-amavi-brown mb-4">Gostou da leitura?</h3>
                 <p className="text-sm text-amavi-brown/60 mb-6">Partilhe este artigo com a sua rede e ajude-nos a alcançar mais pessoas.</p>
                 <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 rounded-xl bg-white border-amavi-beige/20 text-amavi-brown font-bold text-xs uppercase tracking-widest hover:bg-amavi-green hover:text-white transition-all">
                      {t('share_title') || 'Partilhar'}
                    </Button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
