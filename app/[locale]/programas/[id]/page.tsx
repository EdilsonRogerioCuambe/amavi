import { Link } from '@/app/i18n/navigation';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Calendar, ChevronLeft, Heart, MapPin, Users } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { programsInfo } from '@/lib/programs-data';

const programs = programsInfo;

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await getTranslations('ProgramDetailPage');

  const program = programs.find(item => item.id === id) || programs[0];

  if (!program) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-amavi-brown">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amavi-brown via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/programas"
              className="inline-flex items-center text-white/80 hover:text-amavi-green transition-colors mb-6 font-bold group"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('back_to_programs')}
            </Link>
            <div className="flex items-center gap-4 text-amavi-green font-bold uppercase tracking-widest text-sm mb-4">
               <BadgeCheck className="w-5 h-5" />
               {t('certified_badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {program.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
             <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-amavi-beige/20">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-amavi-green/10 flex items-center justify-center text-amavi-green">
                   <Users className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-amavi-brown/60 uppercase font-bold">{t('beneficiaries_label')}</p>
                   <p className="font-bold text-amavi-brown">{program.beneficiaries}</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-amavi-green/10 flex items-center justify-center text-amavi-green">
                   <Heart className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-amavi-brown/60 uppercase font-bold">{t('category_label')}</p>
                   <p className="font-bold text-amavi-brown">{program.category}</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-amavi-green/10 flex items-center justify-center text-amavi-green">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-amavi-brown/60 uppercase font-bold">Localização</p>
                   <p className="font-bold text-amavi-brown">{program.locations}</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-amavi-green/10 flex items-center justify-center text-amavi-green">
                   <Calendar className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-amavi-brown/60 uppercase font-bold">{t('status_label')}</p>
                   <p className="font-bold text-green-600">{program.status}</p>
                 </div>
               </div>
             </div>

             <div className="bg-amavi-green/5 border border-amavi-green/10 rounded-2xl p-6 mb-8">
               <div className="flex items-center gap-2 text-amavi-green font-bold text-xs uppercase tracking-widest mb-2">
                 <div className="w-6 h-6 rounded-md bg-amavi-green text-white flex items-center justify-center">
                   {program.letter}
                 </div>
                 Objectivo Estatutário
               </div>
               <p className="text-amavi-brown font-bold italic leading-relaxed">
                 "{program.description}"
               </p>
             </div>

            <div
              className="prose prose-lg prose-headings:text-amavi-brown prose-p:text-amavi-brown/80 prose-li:text-amavi-brown/80 max-w-none"
              dangerouslySetInnerHTML={{ __html: program.content }}
            />
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-amavi-green text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">{t('cta_title')}</h3>
              <p className="mb-8 opacity-90">{t('cta_desc')}</p>
              <Button asChild size="lg" className="w-full bg-white text-amavi-green hover:bg-white/90 font-bold text-lg h-14 rounded-xl shadow-lg border-0">
                <Link href="/doar">{t('cta_button')}</Link>
              </Button>
              <p className="text-center text-xs mt-4 opacity-70">{t('cta_footer')}</p>
            </div>

            <div className="bg-amavi-bg-light p-8 rounded-3xl border border-amavi-beige/20">
              <h4 className="font-bold text-amavi-brown mb-4">{t('other_programs_title')}</h4>
              <ul className="space-y-4">
                  {programs.filter(p => p.id !== program.id).slice(0, 4).map(p => (
                   <li key={p.id}>
                     <Link href={`/programas/${p.id}`} className="flex items-center gap-3 group">
                       <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0">
                         <Image src={p.image} alt={p.title} fill className="object-cover" />
                       </div>
                       <span className="text-sm font-bold text-amavi-brown group-hover:text-amavi-green transition-colors">
                         {p.title}
                       </span>
                     </Link>
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
