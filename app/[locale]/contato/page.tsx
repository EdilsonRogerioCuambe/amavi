"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // Here you would typically integrate with a form handling service
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amavi-bg-light py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amavi-brown mb-8 font-outfit">
            {t('hero_title_prefix')} <span className="text-amavi-green">{t('hero_title_highlight')}</span>
          </h1>
          <p className="text-xl text-amavi-brown/70 leading-relaxed max-w-2xl mx-auto">
            {t('hero_description')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />
      </section>

      {/* Content Section */}
      <section className="bg-white pb-24 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-10">
              <div className="bg-amavi-brown text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8 font-outfit">{t('info_title')}</h3>
                <p className="mb-8 text-amavi-beige/70">{t('info_desc')}</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amavi-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-amavi-green uppercase tracking-wider mb-1">{t('info_address_label')}</h4>
                      <p className="text-amavi-beige/90">{t('info_address_value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amavi-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-amavi-green uppercase tracking-wider mb-1">{t('info_phone_label')}</h4>
                      <p className="text-amavi-beige/90">{t('info_phone_value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-amavi-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-amavi-green uppercase tracking-wider mb-1">{t('info_email_label')}</h4>
                      <p className="text-amavi-beige/90">{t('info_email_value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-6 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amavi-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-amavi-green uppercase tracking-wider mb-1">{t('info_hours_label')}</h4>
                      <p className="text-amavi-beige/90">{t('info_hours_value')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-amavi-beige/20 p-8 md:p-12 rounded-3xl shadow-sm">
                <h2 className="text-3xl font-bold text-amavi-brown mb-2 font-outfit">{t('form_title')}</h2>
                <p className="text-amavi-brown/60 mb-8">{t('form_desc')}</p>

                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('form_success')}</h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-amavi-brown uppercase tracking-wider ml-1">
                          {t('form_name_label')}
                        </label>
                        <Input id="name" required placeholder={t('form_name_placeholder')} className="bg-amavi-bg-light border-transparent h-12 rounded-xl focus:border-amavi-green focus:ring-0" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-amavi-brown uppercase tracking-wider ml-1">
                          {t('form_email_label')}
                        </label>
                        <Input id="email" type="email" required placeholder={t('form_email_placeholder')} className="bg-amavi-bg-light border-transparent h-12 rounded-xl focus:border-amavi-green focus:ring-0" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-amavi-brown uppercase tracking-wider ml-1">
                        {t('form_subject_label')}
                      </label>
                      <Input id="subject" required placeholder={t('form_subject_placeholder')} className="bg-amavi-bg-light border-transparent h-12 rounded-xl focus:border-amavi-green focus:ring-0" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-amavi-brown uppercase tracking-wider ml-1">
                        {t('form_message_label')}
                      </label>
                      <Textarea id="message" required placeholder={t('form_message_placeholder')} className="bg-amavi-bg-light border-transparent min-h-[150px] rounded-xl focus:border-amavi-green focus:ring-0 resize-none p-4" />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto bg-amavi-green hover:bg-amavi-green/90 text-white font-bold h-14 px-8 rounded-xl shadow-lg shadow-amavi-green/20">
                      {t('form_button')}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </div>

              {/* FAQ Section */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-amavi-brown mb-8 font-outfit">{t('faq_title')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-amavi-bg-light p-6 rounded-2xl border border-amavi-beige/10">
                      <h3 className="font-bold text-amavi-brown mb-3 text-lg">{t(`faq_${i}_q`)}</h3>
                      <p className="text-amavi-brown/70 text-sm leading-relaxed">{t(`faq_${i}_a`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
