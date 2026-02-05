import { Link } from '@/app/i18n/navigation';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: tNav('about'), href: '/sobre' },
    { label: tNav('programs'), href: '/programas' },
    { label: tNav('impact'), href: '/impacto' },
    { label: tNav('news'), href: '/noticias' },
    { label: tNav('volunteer'), href: '/voluntariado' },
  ];

  return (
    <footer className="bg-amavi-bg-dark text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/amavi.svg"
                  alt="AMAVI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-amavi-beige">AMAVI</div>
                <div className="text-[8px] uppercase tracking-wider text-amavi-green font-bold">Associação Mãos Que Acolhem Vidas</div>
              </div>
            </Link>
            <p className="text-sm text-amavi-beige/70 leading-relaxed max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amavi-green mb-6 uppercase tracking-wider text-xs">{t('col_links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-amavi-beige/60 hover:text-amavi-green transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-amavi-green mb-6 uppercase tracking-wider text-xs">{t('col_contacts')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-amavi-green flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-sm text-amavi-beige/60 group-hover:text-amavi-beige transition-colors">
                  {t('address')}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-amavi-green flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-sm text-amavi-beige/60 group-hover:text-amavi-beige transition-colors">
                  +258 XX XXX XXXX
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-amavi-green flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-sm text-amavi-beige/60 group-hover:text-amavi-beige transition-colors">
                  contato@amavi.org.mz
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Transparency */}
          <div>
            <h4 className="font-bold text-amavi-green mb-6 uppercase tracking-wider text-xs">{t('col_follow')}</h4>
            <div className="flex gap-3 mb-8">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-amavi-green hover:border-amavi-green hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="pt-6 border-t border-white/5">
              <Link
                href="/transparencia"
                className="inline-flex items-center text-sm font-medium text-amavi-beige/80 hover:text-amavi-green transition-colors group"
              >
                {t('transparency_link')}
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-amavi-beige/40">
              {t.rich('rights_reserved', { year: currentYear })}
            </p>
            <div className="flex gap-8">
              <Link href="/privacidade" className="text-xs text-amavi-beige/40 hover:text-amavi-green transition-colors underline-offset-4 hover:underline">
                {t('privacy_policy')}
              </Link>
              <Link href="/termos" className="text-xs text-amavi-beige/40 hover:text-amavi-green transition-colors underline-offset-4 hover:underline">
                {t('terms_of_use')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
