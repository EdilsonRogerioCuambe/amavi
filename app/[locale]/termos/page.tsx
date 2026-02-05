"use client"
import { FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('TermsPage');
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-amavi-brown py-16 md:py-20 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-amavi-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 md:w-10 md:h-10 text-amavi-green" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-outfit">
            {t('title')}
          </h1>
          <p className="text-sm md:text-base text-amavi-beige/60">
            {t.rich('last_updated', { date: currentDate })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-amavi-brown/80 leading-relaxed">
            {t('intro')}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 md:space-y-12">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="border-l-4 border-amavi-green pl-6 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amavi-brown mb-4 font-outfit">
                {t(`section${num}_title`)}
              </h2>
              <p className="text-base md:text-lg text-amavi-brown/70 leading-relaxed">
                {t(`section${num}_content`)}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 md:mt-20 bg-amavi-bg-light p-8 md:p-10 rounded-3xl border-2 border-amavi-green/20">
          <h2 className="text-2xl md:text-3xl font-bold text-amavi-brown mb-4 font-outfit">
            {t('contact_title')}
          </h2>
          <p className="text-base md:text-lg text-amavi-brown/70">
            {t('contact_text')}
          </p>
        </div>
      </div>
    </div>
  );
}
