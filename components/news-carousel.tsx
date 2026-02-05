"use client"

import { Link } from '@/app/i18n/navigation';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface NewsCarouselProps {
  articles: NewsArticle[];
}

export function NewsCarousel({ articles }: NewsCarouselProps) {
  const t = useTranslations("HomePage");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {articles.map((news, index) => (
            <CarouselItem key={index} className="pl-0 h-full w-full relative">
              <div className="relative w-full h-full">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-[10000ms] ease-linear",
                    current === index
                      ? "scale-110 brightness-50"
                      : "scale-100 brightness-[0.4]"
                  )}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 max-w-5xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amavi-green/90 text-white text-sm font-bold uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom duration-700">
                    <Calendar className="w-4 h-4" />
                    {news.date} • {news.category}
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in zoom-in duration-700 delay-100">
                    {news.title}
                  </h2>
                  <p className="text-lg md:text-2xl text-white/90 max-w-3xl mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                    {news.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                    <Button
                      asChild
                      size="lg"
                      className="bg-amavi-green hover:bg-amavi-green/90 text-white px-8 py-6 text-lg rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                    >
                      <Link
                        href={`/noticias/${news.id}`}
                        className="flex items-center gap-2"
                      >
                        {t("hero_carousel_read_more")}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-amavi-green hover:bg-white/10 px-8 py-6 text-lg rounded-full font-bold backdrop-blur-sm transition-all hover:text-amavi-green hover:border-amavi-green"
                    >
                      <Link href="/noticias">{t("hero_carousel_view_all")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 left-10 flex gap-2 z-20">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 transition-all duration-500 rounded-full",
                current === index
                  ? "w-10 bg-amavi-green"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute bottom-10 right-10 flex gap-4 z-20 text-white">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 border-2 border-white/30 bg-black/20 text-white hover:bg-amavi-green hover:border-amavi-green hover:text-white rounded-full backdrop-blur-md transition-all scale-90 hover:scale-100" />
          <CarouselNext className="static translate-y-0 h-10 w-10 border-2 border-white/30 bg-black/20 text-white hover:bg-amavi-green hover:border-amavi-green hover:text-white rounded-full backdrop-blur-md transition-all scale-90 hover:scale-100" />
        </div>
      </Carousel>
    </section>
  );
}
