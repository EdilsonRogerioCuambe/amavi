"use client"
import { Link, usePathname } from '@/app/i18n/navigation';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from './language-switcher';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const t = useTranslations('Navigation');
  const tHeader = useTranslations('Header');
  const menuItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/sobre' },
    { label: t('programs'), href: '/programas' },
    { label: t('impact'), href: '/impacto' },
    { label: t('volunteer'), href: '/voluntariado' },
    { label: t('news'), href: '/noticias' },
    { label: t('contacts'), href: '/contato' },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 w-full border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-amavi-beige/20 shadow-lg py-2"
          : "bg-white border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-10 h-10 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <Image
                src="/amavi.svg"
                alt="AMAVI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg md:text-2xl font-bold text-amavi-brown tracking-tighter leading-none font-outfit transition-colors group-hover:text-amavi-green">
                AMAVI
              </div>
              <div className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] text-amavi-green font-bold mt-0.5 md:mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                {tHeader('logo_slogan')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-[13px] font-bold transition-all group/link",
                  pathname === item.href
                    ? "text-amavi-green"
                    : "text-amavi-brown/70 hover:text-amavi-green"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute bottom-0 left-3 right-3 h-0.5 bg-amavi-green transition-transform origin-left duration-300",
                  pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher variant="desktop" />
            <Button
              asChild
              className="bg-amavi-green hover:bg-amavi-green/90 text-white font-bold rounded-full px-8 py-6 shadow-xl shadow-amavi-green/20 transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/doar">{tHeader('donate_button')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-2xl text-amavi-brown hover:bg-amavi-green/10 transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Expanded Area */}
      <div
        className={cn(
          "absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-white transition-all duration-500 ease-in-out z-40 lg:hidden overflow-y-auto",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="p-8 pb-20 flex flex-col min-h-full">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={cn(
                  "flex items-center justify-between p-5 rounded-3xl text-xl font-bold transition-all group",
                  mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  pathname === item.href
                    ? "bg-amavi-green/10 text-amavi-green"
                    : "text-amavi-brown hover:bg-amavi-bg-light hover:text-amavi-green"
                )}
              >
                {item.label}
                <ChevronRight className={cn(
                  "w-6 h-6 transition-all",
                  pathname === item.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-amavi-beige/10 space-y-6">
            <LanguageSwitcher variant="mobile" />

            <Button
              asChild
              className="w-full bg-amavi-green hover:bg-amavi-green/90 text-white font-bold text-xl py-8 rounded-3xl shadow-2xl shadow-amavi-green/20"
            >
              <Link href="/doar" onClick={() => setMobileMenuOpen(false)}>
                {tHeader('donate_button')}
              </Link>
            </Button>
            <p className="mt-10 text-center text-amavi-brown/30 text-sm font-medium uppercase tracking-widest">
              AMAVI &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
