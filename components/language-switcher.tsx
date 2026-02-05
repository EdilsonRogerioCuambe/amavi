"use client"

import { usePathname, useRouter } from '@/app/i18n/navigation';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { MozambiqueFlag, UKFlag } from './flags';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
}

const languages = [
  { code: 'pt', name: 'Português', Flag: MozambiqueFlag },
  { code: 'en', name: 'English', Flag: UKFlag },
];

export function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  if (variant === 'mobile') {
    return (
      <div className="space-y-2">
        <p className="text-sm font-bold text-amavi-brown/50 uppercase tracking-wider px-5">
          Idioma / Language
        </p>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => {
            const FlagComponent = lang.Flag;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-2xl font-bold transition-all",
                  locale === lang.code
                    ? "bg-amavi-green text-white shadow-lg"
                    : "bg-amavi-bg-light text-amavi-brown hover:bg-amavi-beige/30"
                )}
              >
                <FlagComponent className="w-8 h-6 rounded shadow-sm" />
                <span className="text-sm">{lang.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const CurrentFlag = currentLanguage?.Flag;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-amavi-beige/30 hover:bg-amavi-bg-light hover:border-amavi-green transition-all"
        >
          <Globe className="w-4 h-4" />
          {CurrentFlag && <CurrentFlag className="w-5 h-4 rounded shadow-sm" />}
          <span className="font-bold text-xs uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {languages.map((lang) => {
          const FlagComponent = lang.Flag;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "flex items-center gap-3 cursor-pointer font-medium",
                locale === lang.code && "bg-amavi-green/10 text-amavi-green"
              )}
            >
              <FlagComponent className="w-6 h-5 rounded shadow-sm" />
              <span>{lang.name}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
