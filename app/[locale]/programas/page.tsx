"use client"
import { CTASection } from '@/components/cta-section';
import { ProgramCard } from '@/components/program-card';
import { Button } from '@/components/ui/button';
import { programsInfo } from '@/lib/programs-data';
import { cn } from '@/lib/utils';
import {
    Activity,
    Calendar,
    CheckCircle2,
    MapPin,
    Users,
    Users2
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function ProgramsPage() {
  const t = useTranslations('ProgramsPage');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programs = programsInfo;

  const categories = ['all', 'Educação', 'Saúde', 'Desenvolvimento', 'Proteção Social', 'Empoderamento', 'Inclusão'];

  const filteredPrograms = selectedCategory === 'all'
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amavi-bg-light py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-amavi-brown mb-8 font-outfit">
              {t('hero_title_prefix')} <span className="text-amavi-green">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-xl text-amavi-brown/70 leading-relaxed max-w-2xl mx-auto">
              {t('hero_description')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-amavi-green/5 skew-y-3 transform origin-bottom-right" />
      </section>

      {/* Programs Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-amavi-brown/30 uppercase tracking-[0.2em] mb-8 text-center md:hidden">
              {t('filter_title_mobile')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-5 py-3 md:px-8 md:py-3.5 rounded-2xl font-bold transition-all text-xs md:text-sm uppercase tracking-widest border-2",
                    selectedCategory === category
                      ? "bg-amavi-green text-white border-amavi-green shadow-lg shadow-amavi-green/20"
                      : "bg-white text-amavi-brown border-amavi-beige/30 hover:border-amavi-green/50 hover:bg-amavi-bg-light"
                  )}
                >
                  {category === 'all' ? t('filter_all') : category}
                </button>
              ))}
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="group h-full flex flex-col">
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  category={program.category}
                  href={`/programas/${program.id}`}
                />
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-amavi-brown/50 px-2">
                  <span className="flex items-center gap-2 bg-amavi-bg-light px-3 py-1 rounded-full group-hover:text-amavi-green transition-colors">
                    <Users className="w-4 h-4" />
                    {program.beneficiaries}
                  </span>
                  <span className="flex items-center gap-2 bg-amavi-bg-light px-3 py-1 rounded-full group-hover:text-amavi-green transition-colors">
                    <MapPin className="w-4 h-4" />
                    {program.locations}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-24">
              <div className="bg-amavi-bg-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-amavi-green/30" />
              </div>
              <h3 className="text-2xl font-bold text-amavi-brown mb-2 font-outfit">{t('no_programs_title')}</h3>
              <p className="text-lg text-amavi-brown/50">
                {t('no_programs_desc')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-amavi-brown py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amavi-green/10 text-amavi-green text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-amavi-green/20">
              Impacto Real
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
              {t('impact_title_prefix')} <span className="text-amavi-green">{t('impact_title_highlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-amavi-beige/60 max-w-2xl mx-auto leading-relaxed">
              {t('impact_desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              { label: t('stat_people'), value: 'Em Mapeamento', icon: Users2 },
              { label: t('stat_communities'), value: 'Foco Marracuene', icon: MapPin },
              { label: t('stat_active_programs'), value: '9 Objetivos', icon: Activity },
              { label: t('stat_years'), value: '2025', icon: Calendar }
            ].map((stat) => (
              <div key={stat.label} className="group relative">
                <div className="absolute inset-0 bg-amavi-green/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-10 text-center hover:bg-white/[0.07] hover:border-amavi-green/30 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center">
                  <div className="bg-amavi-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amavi-green group-hover:shadow-[0_0_30px_rgba(19,146,80,0.4)] transition-all duration-500">
                    <stat.icon className="w-7 h-7 text-amavi-green group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-3 font-outfit tracking-tight leading-tight">{stat.value}</div>
                  <div className="text-amavi-beige/40 font-bold uppercase tracking-[0.15em] text-[10px] md:text-[11px] leading-tight max-w-[140px] mx-auto">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amavi-green/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Why it Matters */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
                  alt="Apoio AMAVI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amavi-green/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-amavi-brown/10 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-8 font-outfit leading-tight">
                {t('why_title_prefix')} <span className="text-amavi-green">{t('why_title_highlight')}</span> {t('why_title_suffix')}
              </h2>
              <div className="space-y-6">
                {[
                  t('why_point_1'),
                  t('why_point_2'),
                  t('why_point_3'),
                  t('why_point_4')
                ].map((point) => (
                  <div key={point} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-amavi-bg-light flex items-center justify-center group-hover:bg-amavi-green transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-amavi-green group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-lg font-bold text-amavi-brown/80">{point}</p>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="mt-12 bg-amavi-green hover:bg-amavi-green/90 text-white font-bold px-10 py-8 rounded-2xl shadow-xl shadow-amavi-green/20"
                asChild
              >
                <a href="#cta">{t('why_button')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div id="cta">
        <CTASection
          title={t('cta_title')}
          description={t('cta_desc')}
          primaryButtonText={t('cta_button_primary')}
          secondaryButtonText={t('cta_button_secondary')}
          variant="accent"
        />
      </div>
    </div>
  );
}
