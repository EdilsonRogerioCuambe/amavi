import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, image, className }: TestimonialCardProps) {
  return (
    <div className={cn("bg-amavi-bg-light rounded-xl p-8 shadow-sm border border-amavi-green/10 relative h-full flex flex-col", className)}>
      <div className="mb-6">
        <Quote className="w-10 h-10 text-amavi-green opacity-20 absolute top-6 left-6" />
        <p className="text-amavi-brown/90 leading-relaxed italic relative z-10 text-lg">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4 mt-auto border-t border-amavi-green/5 pt-6">
        {image ? (
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amavi-green/20 shadow-sm">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-amavi-green/10 flex items-center justify-center border-2 border-amavi-green/20 shadow-sm">
            <span className="text-amavi-green font-bold text-xl uppercase">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-bold text-amavi-brown">{author}</div>
          {role && <div className="text-sm text-amavi-green font-medium">{role}</div>}
        </div>
      </div>
    </div>
  );
}
