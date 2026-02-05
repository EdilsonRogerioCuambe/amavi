import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md w-full text-center">
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[150px] font-black text-amavi-green/10 font-outfit leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl shadow-amavi-green/10 transform -rotate-3 border border-amavi-green/5">
                <Search className="w-12 h-12 text-amavi-green animate-pulse" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-amavi-brown mb-6 font-outfit">
            Página não encontrada
          </h2>
          <p className="text-lg text-amavi-brown/60 mb-12 leading-relaxed">
            O conteúdo que você está procurando parece ter sido movido ou não existe mais.
            Não se preocupe, ainda há muito para descobrir na AMAVI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center font-outfit">
            <Button
              asChild
              size="lg"
              className="h-16 px-10 bg-amavi-green hover:bg-amavi-green/90 text-white font-bold rounded-2xl shadow-xl shadow-amavi-green/20 transition-all hover:scale-105"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-16 px-10 border-amavi-brown text-amavi-brown hover:bg-amavi-brown/5 font-bold rounded-2xl transition-all"
            >
              <Link href="/noticias">
                Ver Notícias
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
