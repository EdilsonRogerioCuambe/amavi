import { CTASection } from '@/components/cta-section';
import { ImpactCard } from '@/components/impact-card';
import { NewsCarousel } from '@/components/news-carousel';
import { ProgramCard } from '@/components/program-card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Shield,
  Stethoscope,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AMAVI - Transformando Vidas em Moçambique',
  description: 'Bem-vindo à AMAVI. Junte-se a nós para construir um Moçambique mais justo através da educação, saúde e desenvolvimento sustentável.',
};

import { useTranslations } from 'next-intl';

import { newsArticles } from '@/lib/news-data';

import { programsInfo } from '@/lib/programs-data';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const featuredNews = newsArticles.slice(0, 4);

  const programs = programsInfo.slice(0, 3); // Showing first 3 on home

  const partners = [
    { name: "Millennium BIM", logo: "/partterns/Millennium BIM.jpg" },
    { name: "BCI", logo: "/partterns/bci.svg" },
    { name: "Vodacom", logo: "/partterns/VOD.JO_BIG.png" },
    { name: "Movitel", logo: "/partterns/movitel.jpg" },
    { name: "CFM", logo: "/partterns/cfm.webp" },
    { name: "CDM", logo: "/partterns/cdm.webp" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Featured News Carousel - FULL SCREEN HERO STYLE */}
      <NewsCarousel articles={featuredNews} />

      <section className="relative bg-amavi-bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amavi-green/10 text-amavi-green text-sm font-bold uppercase tracking-wider mb-6">
                <Heart className="w-4 h-4" />
                <span>{t('mission_badge')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amavi-brown mb-8 leading-[1.1]">
                {t('title')}<br />
              </h1>
              <p className="text-xl text-amavi-brown/70 mb-10 leading-relaxed max-w-xl">
                {t('mission_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  size="lg"
                  asChild
                  className="bg-amavi-green hover:bg-amavi-green/90 text-white px-10 py-7 text-lg shadow-xl shadow-amavi-green/20 transition-all hover:scale-105"
                >
                  <Link href="/doar">{t('donate')}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-amavi-brown text-amavi-brown hover:bg-amavi-brown/5 px-10 py-7 text-lg transition-all"
                >
                  <Link href="/sobre">{t('about')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in duration-1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform hover:rotate-1 duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1696601348675-49ea7420c03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3phbWJpcXVlJTIwY29tbXVuaXR5JTIwY2hpbGRyZW4lMjBoYXBweXxlbnwxfHx8fDE3Njk4NzUzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Comunidade AMAVI"
                  width={1080}
                  height={500}
                  className="w-full h-[600px] object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-2xl p-8 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-amavi-green fill-current" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amavi-green">2025</div>
                    <div className="text-sm font-semibold text-amavi-brown uppercase tracking-widest leading-tight">{t('impact_years_badge')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amavi-green/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-8 text-center">
              {t('who_we_are_title')}
            </h2>
            <p className="text-xl text-amavi-brown/70 mb-12 leading-relaxed text-center">
              {t('who_we_are_description')}
            </p>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-amavi-green text-amavi-green hover:bg-amavi-green/10 px-8 transition-all font-bold"
              >
                <Link href="/sobre">{t('who_we_are_button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Action */}
      <section className="bg-amavi-bg-light py-24 border-y border-amavi-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6 text-center">
              {t('areas_title')}
            </h2>
            <p className="text-xl text-amavi-brown/60 max-w-2xl mx-auto text-center">
              {t('areas_description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all group text-center">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amavi-green group-hover:rotate-6 transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-amavi-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-amavi-brown mb-4">{t('area_education_title')}</h3>
              <p className="text-amavi-brown/70 leading-relaxed">
                {t('area_education_desc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all group text-center">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amavi-green group-hover:rotate-6 transition-all duration-300">
                <Stethoscope className="w-8 h-8 text-amavi-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-amavi-brown mb-4">{t('area_health_title')}</h3>
              <p className="text-amavi-brown/70 leading-relaxed">
                {t('area_health_desc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all group text-center">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amavi-green group-hover:rotate-6 transition-all duration-300">
                <HandHeart className="w-8 h-8 text-amavi-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-amavi-brown mb-4">{t('area_development_title')}</h3>
              <p className="text-amavi-brown/70 leading-relaxed">
                {t('area_development_desc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all group text-center">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amavi-green group-hover:rotate-6 transition-all duration-300">
                <Shield className="w-8 h-8 text-amavi-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-amavi-brown mb-4">{t('area_social_protection_title')}</h3>
              <p className="text-amavi-brown/70 leading-relaxed">
                {t('area_social_protection_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6 text-center">
              {t('impact_numbers_title')}
            </h2>
            <p className="text-xl text-amavi-brown/60 max-w-2xl mx-auto text-center">
              {t('impact_numbers_desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCard
              number="2025"
              label="Fundação"
              icon={Heart}
              description="Legalmente reconhecida em Julho de 2025"
            />
            <ImpactCard
              number="Nacional"
              label="Âmbito"
              icon={Home}
              description="Actuação em todo o território nacional moçambicano"
            />
            <ImpactCard
              number="9"
              label="Objectivos"
              icon={Users}
              description="Objectivos estatutários fundamentais de impacto social"
            />
            <ImpactCard
              number="100%"
              label="Compromisso"
              icon={BookOpen}
              description="Dedicação total ao empoderamento das comunidades"
            />
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-amavi-bg-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6 text-center">
              {t('programs_title')}
            </h2>
            <p className="text-xl text-amavi-brown/60 max-w-2xl mx-auto text-center">
              {t('programs_desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program) => (
                <ProgramCard
                  key={program.id}
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  category={program.category}
                  href={`/programas/${program.id}`}
                />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-amavi-green text-amavi-green hover:bg-amavi-green/10 font-bold"
            >
              <Link href="/programas">{t('programs_button')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Removed Testimonials Section as requested */}

      {/* Removed Partners Section as requested */}

      {/* Final CTA */}
      <CTASection
        title={t('cta_title')}
        description={t('cta_desc')}
        primaryButtonText={t('cta_button_primary')}
        secondaryButtonText={t('cta_button_secondary')}
      />
    </div>
  );
}
