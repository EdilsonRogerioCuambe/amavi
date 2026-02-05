import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: 'default' | 'accent';
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  variant = 'default'
}: CTASectionProps) {
  const bgClass = variant === 'accent' ? 'bg-amavi-brown' : 'bg-amavi-green';
  const textClass = 'text-white';

  return (
    <section className={`${bgClass} ${textClass} relative overflow-hidden`}>
      {/* Decorative patterns could go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed text-amavi-beige">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className={`${variant === 'accent' ? 'bg-amavi-green hover:bg-amavi-green/90' : 'bg-white hover:bg-amavi-beige text-amavi-green'} transition-all hover:scale-105 px-8`}
            >
              <Link href="/doar">
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            {secondaryButtonText && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className={`${variant === 'accent' ? 'bg-amavi-green hover:bg-amavi-green/90' : 'bg-white hover:bg-amavi-beige text-amavi-green'} transition-all hover:scale-105 px-8`}
              >
                <Link href="/voluntariado">
                  {secondaryButtonText}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
