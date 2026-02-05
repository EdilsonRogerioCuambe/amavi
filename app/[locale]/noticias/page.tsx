"use client"
import { Link } from '@/app/i18n/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { newsArticles } from '@/lib/news-data';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, ChevronRight, Clock, Mail, Newspaper, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function NewsPage() {
  const t = useTranslations('NewsPage');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Educação', 'Saúde', 'Desenvolvimento', 'Institucional', 'Protecção Social', 'Inclusão', 'Nutrição'];

  const filteredArticles = newsArticles
    .filter(article => selectedCategory === 'all' || article.category === selectedCategory)
    .filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amavi-bg-light py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-amavi-brown mb-8 font-outfit">
              {t('hero_title_prefix')} <span className="text-amavi-green">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-xl text-amavi-brown/70 leading-relaxed mb-12 max-w-2xl mx-auto">
              {t('hero_description')}
            </p>
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amavi-brown/30 group-focus-within:text-amavi-green transition-colors" />
              <Input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 h-16 text-lg rounded-3xl border-amavi-beige/20 bg-white shadow-xl shadow-amavi-brown/5 focus:ring-amavi-green border-none"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-amavi-green/5 skew-x-12 transform origin-top-right" />
      </section>

      {/* Category Filter */}
      <section className="bg-white py-10 relative md:sticky md:top-[73px] z-40 border-b border-amavi-beige/10 md:backdrop-blur-md md:bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-8 py-6 font-bold uppercase tracking-wider text-xs transition-all",
                  selectedCategory === category
                    ? "bg-amavi-green hover:bg-amavi-green/90 text-white shadow-lg shadow-amavi-green/20"
                    : "border-amavi-beige/30 text-amavi-brown/60 hover:border-amavi-green hover:text-amavi-green"
                )}
              >
                {category === 'all' ? t('filter_all') : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && selectedCategory === 'all' && searchTerm === '' && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-amavi-green/10 rounded-2xl flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-amavi-green" />
              </div>
              <h2 className="text-3xl font-bold text-amavi-brown font-outfit uppercase tracking-tighter">{t('featured_label')}</h2>
            </div>
            <Link href={`/noticias/${filteredArticles[0].id}`}>
              <Card className="overflow-hidden rounded-[2.5rem] border-none shadow-2xl hover:shadow-amavi-brown/10 transition-all duration-500 group">
                <div className="grid lg:grid-cols-2">
                  <div className="h-[400px] lg:h-auto relative overflow-hidden">
                    <Image
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-10 lg:p-16 flex flex-col justify-center bg-amavi-bg-light">
                    <Badge className="w-fit mb-6 bg-amavi-green px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border-none">
                      {filteredArticles[0].category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-amavi-brown mb-6 font-outfit leading-tight group-hover:text-amavi-green transition-colors">
                      {filteredArticles[0].title}
                    </h3>
                    <p className="text-lg text-amavi-brown/60 mb-8 leading-relaxed line-clamp-3">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-8 text-sm font-bold text-amavi-brown/40 mb-10">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amavi-green" />
                        <span>{formatDate(filteredArticles[0].date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amavi-green" />
                        <span>{filteredArticles[0].readTime} {t('read_time_label')}</span>
                      </div>
                    </div>
                    <Button
                      className="w-fit bg-amavi-brown hover:bg-amavi-brown/90 text-white font-bold px-8 py-7 rounded-2xl transition-all"
                    >
                      {t('button_read_full')}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="bg-amavi-bg-light py-24 border-y border-amavi-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-amavi-brown font-outfit">
              {searchTerm || selectedCategory !== 'all' ? t('results_title_search') : t('results_title_latest')}
            </h2>
            <div className="text-sm font-bold text-amavi-brown/40">
              {filteredArticles.length} {filteredArticles.length === 1 ? t('results_count_one') : t('results_count_many')}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredArticles.slice(searchTerm === '' && selectedCategory === 'all' ? 1 : 0).map((article) => (
                <Link key={article.id} href={`/noticias/${article.id}`}>
                  <Card
                    className="h-full rounded-[2rem] overflow-hidden border border-amavi-beige/10 hover:shadow-2xl transition-all duration-500 group flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-amavi-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-xl">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-black text-amavi-brown/30 uppercase tracking-[0.2em] mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-amavi-green" />
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-amavi-brown mb-4 line-clamp-2 group-hover:text-amavi-green transition-colors font-outfit">
                        {article.title}
                      </h3>
                      <p className="text-amavi-brown/60 mb-8 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto border-t border-amavi-beige/10 pt-6">
                        <Button
                          variant="ghost"
                          className="p-0 h-auto hover:bg-transparent text-amavi-green font-bold text-base group/btn"
                        >
                          {t('button_read')}
                          <ChevronRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-amavi-beige/30">
              <div className="w-24 h-24 bg-amavi-bg-light rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-10 h-10 text-amavi-brown/20" />
              </div>
              <h3 className="text-3xl font-bold text-amavi-brown mb-3 font-outfit">{t('no_results_title')}</h3>
              <p className="text-lg text-amavi-brown/50">
                {t('no_results_desc')}
              </p>
              <Button
                variant="outline"
                className="mt-8 rounded-2xl px-10 border-amavi-green text-amavi-green hover:bg-amavi-green hover:text-white font-bold"
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              >
                {t('button_clear_filters')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-amavi-green py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-amavi-brown rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
             {/* Background Decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amavi-green opacity-10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amavi-beige opacity-5 rounded-full blur-[100px]" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-8">
                  <Mail className="w-8 h-8 text-amavi-green" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 font-outfit leading-tight">
                  {t('newsletter_title_prefix')} <span className="text-amavi-green">{t('newsletter_title_highlight')}</span>
                </h2>
                <p className="text-xl text-amavi-beige/60">
                  {t('newsletter_desc')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder={t('newsletter_placeholder')}
                    className="h-20 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-3xl pl-8 text-lg focus:ring-amavi-green focus:border-amavi-green"
                  />
                </div>
                <Button className="w-full h-20 bg-amavi-green hover:bg-amavi-green/90 text-white font-black text-xl rounded-3xl shadow-xl shadow-amavi-green/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  {t('newsletter_button')}
                </Button>
                <p className="text-center text-amavi-beige/20 text-xs font-bold uppercase tracking-widest">
                  {t('newsletter_footer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
