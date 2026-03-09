import { CTASection } from '@/components/cta-section';
import { ImageGallery } from '@/components/image-gallery';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Galeria de Imagens | AMAVI',
  description: 'Veja fotos e registos das acções e do impacto da AMAVI nas comunidades moçambicanas.',
};

export default function GalleryPage() {
  const t = useTranslations('GalleryPage');
  const tGlobal = useTranslations('HomePage'); // Para a CTA Section e base

  // Re-utilizando as imagens da página inicial e adicionando mais se necessário
  const galleryImages = [
    {
      id: "img1",
      src: "/imagens/WhatsApp Image 2026-03-09 at 04.24.20 (1).jpeg",
      alt: "Participação da AMAVI na Conferência da Mulher da AGRA",
      title: "Conferência - AGRA",
      description: "Representando a AMAVI no debate sobre o papel feminino no agronegócio africano e sistemas alimentares sustentáveis.",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      id: "img2",
      src: "/imagens/WhatsApp Image 2026-03-09 at 04.24.20.jpeg",
      alt: "Momentos de debate e discussão - AGRA",
      title: "Em Discussão",
      description: "Promoção de políticas inclusivas para o acesso a financiamento agrícola e recursos essenciais para as mulheres produtoras rurais.",
    },
    {
      id: "img3",
      src: "/imagens/WhatsApp Image 2026-03-09 at 04.24.21 (1).jpeg",
      alt: "Líderes partilhando experiências",
      title: "Partilha de Experiências",
      description: "Networking com outras entidades para a criação de parcerias estratégicas voltadas à segurança alimentar."
    },
    {
      id: "img4",
      src: "/imagens/WhatsApp Image 2026-03-09 at 04.24.21 (2).jpeg",
      alt: "AMAVI em representação de Moçambique",
      title: "Impacto Moçambicano",
      description: "Líderes de toda a África partilhando soluções e estratégias de empoderamento rural feminino.",
      className: "md:col-span-2"
    },
    {
      id: "img5",
      src: "/imagens/WhatsApp Image 2026-03-09 at 04.24.21 (3).jpeg",
      alt: "Sessão principal do evento AGRA",
      title: "Sessões Principais",
      description: "Acompanhando os principais discursos de liderança sobre as revoluções verdes das comunidades vulneráveis."
    },
    {
      id: "img6",
      src: "/imagens/WhatsApp Image 2026-03-09 at 04.24.21.jpeg",
      alt: "Empoderamento da Mulher Rural",
      title: "Visão & Compromisso",
      description: "Reforçando o posicionamento da AMAVI como ator-chave na advocacia comunitária feminina em Moçambique.",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      id: "img7",
      src: "/imagens/WhatsApp Image 2026-03-09 at 17.14.55.jpeg",
      alt: "Cimeira de Sistemas Alimentares",
      title: "Planeamento Estratégico",
      description: "Alinhando a visão da AMAVI com os objetivos globais de desenvolvimento sustentável e segurança alimentar."
    }
  ];

  return (
    <div className="min-h-screen bg-amavi-bg-light">
      {/* Hero Section Simplificada para a Galeria */}
      <section className="bg-amavi-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('hero_title_prefix')} <span className="text-amavi-beige">{t('hero_title_highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl pt-2 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
            {t('hero_description')}
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <div className="bg-white">
        <ImageGallery
          images={galleryImages}
          title={t('gallery_title')}
          description={t('gallery_desc')}
          className="pb-24 pt-16 bg-transparent"
        />
      </div>

      {/* Final CTA */}
      <CTASection
        title={tGlobal('cta_title')}
        description={tGlobal('cta_desc')}
        primaryButtonText={tGlobal('cta_button_primary')}
        secondaryButtonText={tGlobal('cta_button_secondary')}
      />
    </div>
  );
}
