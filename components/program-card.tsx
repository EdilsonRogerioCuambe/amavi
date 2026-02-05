import { Link } from '@/app/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  href?: string;
}

export function ProgramCard({ title, description, image, category, href = "/programas" }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amavi-beige/20 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-amavi-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {category}
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-amavi-brown mb-3 group-hover:text-amavi-green transition-colors">{title}</h3>
        <p className="text-amavi-brown/70 mb-6 line-clamp-3 leading-relaxed">{description}</p>
        <div className="mt-auto">
          <Button
            variant="ghost"
            asChild
            className="group/btn p-0 h-auto hover:bg-transparent text-amavi-green font-bold text-base"
          >
            <Link href={href}>
              Saiba Mais
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
