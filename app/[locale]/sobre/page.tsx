import { CTASection } from '@/components/cta-section';
import { Button } from '@/components/ui/button';
import {
    Briefcase,
    CheckCircle,
    Eye,
    FileText,
    Gavel,
    Heart,
    PenTool,
    Shield,
    ShieldCheck,
    Target,
    TrendingUp,
    User,
    Users,
    Wallet
} from 'lucide-react';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | Nossa História e Missão',
  description: 'Conheça a história da AMAVI - Associação Mãos que Acolhem Vidas, reconhecida juridicamente em 29 de Julho de 2025, dedicada ao desenvolvimento de comunidades vulneráveis em Moçambique.',
};

export default function AboutPage() {
  const timeline = [
    {
      year: '2025',
      title: 'Fundação da AMAVI',
      description: 'A Associação Mãos que Acolhem Vidas nasce do compromisso de cidadãos moçambicanos com o desenvolvimento de comunidades vulneráveis nas zonas rurais.'
    },
    {
      year: 'Jul 2025',
      title: 'Reconhecimento Jurídico',
      description: 'Reconhecimento oficial como pessoa jurídica pelo Ministério da Justiça, Assuntos Constitucionais e Religiosos, através do despacho do Ministro Mateus da Cecília Feniasse Saize.'
    },
    {
      year: 'Out 2025',
      title: 'Publicação Oficial',
      description: 'Estatutos publicados no Boletim da República, III Série, Número 192, oficializando a nossa actuação em todo o território nacional.'
    },
    {
      year: '2025-26',
      title: 'Primeiros Programas',
      description: 'Início dos programas de empoderamento económico e social focados em mulheres, jovens e pessoas com deficiência nas zonas rurais.'
    },
    {
      year: 'Futuro',
      title: 'Expansão Nacional',
      description: 'Expansão dos programas de educação financeira, saúde reprodutiva e apoio psicossocial para mais comunidades em toda Moçambique.'
    },
  ];

  // Estrutura organizacional conforme estatutos da AMAVI
  // Estrutura organizacional detalhada com membros (Conforme imagens oficiais)
  const organs = [
    {
      title: 'Assembleia Geral',
      type: 'root',
      color: 'amavi-green',
      icon: Users,
      members: [
        { name: 'Ana Paula Micas Culinwa Langa', role: 'Presidente', icon: Gavel, image: '' },
        { name: 'Telma de Lurdes Pessana', role: 'Vice-Presidente', icon: User, image: '' },
      ],
    },
    {
      title: 'Conselho de Direcção',
      type: 'branch',
      color: 'amavi-brown',
      icon: Briefcase,
      members: [
        { name: 'Ana Domingas Matangue Cuambe', role: 'Directora', icon: Briefcase, image: '' },
        { name: 'Lídia Julião Chilaúle Nhambongo', role: 'Secretária', icon: PenTool, image: '' },
        { name: 'Rosa Domingos Muianga Sabeca', role: 'Tesoureira', icon: Wallet, image: '' },
      ],
    },
    {
      title: 'Conselho Fiscal',
      type: 'branch',
      color: 'amavi-brown',
      icon: ShieldCheck,
      members: [
        { name: 'Amélia Lavenesse David Nassone', role: 'Presidente', icon: ShieldCheck, image: '' },
        { name: 'Maria Helena Fabião Uilson', role: 'Secretária', icon: PenTool, image: '' },
        { name: 'Sónia José António Rodrigues', role: '1º Vogal', icon: User, image: '' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amavi-bg-light py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amavi-green/10 text-amavi-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Reconhecida Juridicamente em 29 de Julho de 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-amavi-brown mb-8 font-outfit">
              Sobre a <span className="text-amavi-green">AMAVI</span>
            </h1>
            <p className="text-xl text-amavi-brown/70 leading-relaxed max-w-2xl mx-auto">
              Associação Mãos que Acolhem Vidas - uma pessoa colectiva de direito privado, sem fins lucrativos,
              de carácter social, dedicada ao desenvolvimento de comunidades vulneráveis em Moçambique.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-amavi-green/5 -skew-y-3 transform origin-top-left" />
      </section>

      {/* History Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6">
              Nossa História
            </h2>
            <p className="text-xl text-amavi-brown/60 max-w-2xl mx-auto">
              Uma organização jovem com grandes objectivos para o desenvolvimento de Moçambique.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amavi-green/30 before:to-transparent">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group">
                  {/* Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-amavi-green/20 bg-white shadow-xl text-amavi-green absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-transform group-hover:scale-125 duration-300">
                    <div className="w-4 h-4 rounded-full bg-amavi-green shadow-[0_0_15px_rgba(212,106,46,0.5)]" />
                  </div>
                  {/* Card */}
                  <div className="ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-amavi-bg-light p-6 md:p-8 rounded-3xl border border-amavi-beige/20 shadow-sm transition-all hover:shadow-xl hover:border-amavi-green/20 group-hover:-translate-y-1 duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-amavi-green mb-3 font-outfit">{item.year}</div>
                    <h3 className="text-lg md:text-xl font-bold text-amavi-brown mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-amavi-brown/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-amavi-bg-light py-24 border-y border-amavi-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-amavi-green" />
              </div>
              <h3 className="text-3xl font-bold text-amavi-brown mb-6 font-outfit">Missão</h3>
              <p className="text-amavi-brown/70 leading-relaxed flex-grow">
                Promover o melhoramento da qualidade de vida de grupos em situação de vulnerabilidade nas zonas rurais,
                através do empoderamento económico e social de mulheres, jovens e pessoas com deficiência, acesso à educação,
                saúde sexual e reprodutiva, e desenvolvimento integral de crianças órfãs.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-amavi-green" />
              </div>
              <h3 className="text-3xl font-bold text-amavi-brown mb-6 font-outfit">Visão</h3>
              <p className="text-amavi-brown/70 leading-relaxed flex-grow">
                Um Moçambique onde todas as pessoas em situação de vulnerabilidade, especialmente mulheres, jovens,
                crianças órfãs e pessoas com deficiência, tenham acesso a oportunidades de desenvolvimento,
                vivam com dignidade e possam construir um futuro próspero nas suas comunidades.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-amavi-beige/10 hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-amavi-green" />
              </div>
              <h3 className="text-3xl font-bold text-amavi-brown mb-6 font-outfit">Valores</h3>
              <ul className="space-y-4">
                {[
                  'Dignidade humana',
                  'Transparência',
                  'Compromisso social',
                  'Sustentabilidade',
                  'Inclusão'
                ].map((value) => (
                  <li key={value} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-amavi-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amavi-green transition-colors">
                      <CheckCircle className="w-4 h-4 text-amavi-green group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-amavi-brown font-bold text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6">
            Estrutura Organizacional
          </h2>
          <p className="text-xl text-amavi-brown/60 max-w-2xl mx-auto">
            Órgãos sociais definidos nos estatutos da AMAVI para garantir uma gestão transparente e eficaz.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Assembleia Geral - Topo */}
          <div className="mb-16">
            <div className="flex flex-col items-center">
              {/* Header do órgão */}
              <div className="inline-flex items-center gap-3 bg-amavi-green px-8 py-4 rounded-2xl mb-12">
                <Users className="w-6 h-6 text-white" />
                <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                  {organs[0].title}
                </h3>
              </div>

              {/* Membros */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
                {organs[0].members.map((member, i) => (
                  <div key={i} className="group">
                    <div className="bg-gradient-to-br from-amavi-bg-light to-white border-2 border-amavi-green/20 rounded-3xl p-8 transition-all duration-300 hover:border-amavi-green hover:-translate-y-1">
                      {/* Foto */}
                      <div className="relative w-28 h-28 mx-auto mb-6">
                        <div className="absolute inset-0 bg-amavi-green/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white bg-amavi-beige/10 flex items-center justify-center">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          ) : (
                            <User className="w-12 h-12 text-amavi-green/20" />
                          )}
                          {!member.image && <div className="absolute inset-0 bg-gradient-to-br from-amavi-green/5 to-amavi-brown/5" />}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-amavi-green/10 rounded-xl mb-3">
                          <member.icon className="w-5 h-5 text-amavi-green" />
                        </div>
                        <h4 className="font-bold text-amavi-brown text-lg mb-2 leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-amavi-green font-semibold text-sm uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Linha conectora vertical */}
            <div className="flex justify-center my-8">
              <div className="w-0.5 h-16 bg-gradient-to-b from-amavi-green/40 to-transparent"></div>
            </div>
          </div>

          {/* Conselhos - Grid horizontal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            {/* Linha conectora horizontal (desktop) */}
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-amavi-green/20 via-amavi-green/10 to-transparent"></div>

            {/* Conselho de Direcção */}
            <div className="relative">
              <div className="flex flex-col items-center">
                {/* Header */}
                <div className="inline-flex items-center gap-3 bg-amavi-brown px-6 py-3 rounded-xl mb-10">
                  <Briefcase className="w-5 h-5 text-white" />
                  <h3 className="text-white font-bold text-base uppercase tracking-wide">
                    {organs[1].title}
                  </h3>
                </div>

                {/* Membros em cards compactos */}
                <div className="space-y-4 w-full">
                  {organs[1].members.map((member, i) => (
                    <div key={i} className="bg-amavi-bg-light border border-amavi-beige/30 rounded-2xl p-5 hover:bg-white hover:border-amavi-brown/40 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        {/* Foto pequena */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white flex-shrink-0 bg-amavi-beige/10 flex items-center justify-center">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          ) : (
                            <User className="w-8 h-8 text-amavi-brown/20" />
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-grow">
                          <h4 className="font-bold text-amavi-brown text-base mb-1 leading-tight">
                            {member.name}
                          </h4>
                          <p className="text-amavi-brown/60 text-sm font-medium">
                            {member.role}
                          </p>
                        </div>

                        {/* Ícone */}
                        <div className="w-10 h-10 bg-amavi-brown/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amavi-brown/20 transition-colors">
                          <member.icon className="w-5 h-5 text-amavi-brown" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conselho Fiscal */}
            <div className="relative mb-10">
              <div className="flex flex-col items-center">
                {/* Header */}
                <div className="inline-flex items-center gap-3 bg-amavi-brown px-6 py-3 rounded-xl mb-10">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <h3 className="text-white font-bold text-base uppercase tracking-wide">
                    {organs[2].title}
                  </h3>
                </div>

                {/* Membros em cards compactos */}
                <div className="space-y-4 w-full">
                  {organs[2].members.map((member, i) => (
                    <div key={i} className="bg-amavi-bg-light border border-amavi-beige/30 rounded-2xl p-5 hover:bg-white hover:border-amavi-brown/40 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        {/* Foto pequena */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white flex-shrink-0 bg-amavi-beige/10 flex items-center justify-center">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          ) : (
                            <User className="w-8 h-8 text-amavi-brown/20" />
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-grow">
                          <h4 className="font-bold text-amavi-brown text-base mb-1 leading-tight">
                            {member.name}
                          </h4>
                          <p className="text-amavi-brown/60 text-sm font-medium">
                            {member.role}
                          </p>
                        </div>

                        {/* Ícone */}
                        <div className="w-10 h-10 bg-amavi-brown/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amavi-brown/20 transition-colors">
                          <member.icon className="w-5 h-5 text-amavi-brown" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Objetivos oficiais (Restaurado) */}
          <div className="mt-24 pt-24 border-t border-amavi-beige/20">
            <div className="bg-amavi-bg-light rounded-[3rem] p-10 md:p-16 border border-amavi-beige/10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-amavi-green/10 text-amavi-green px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Target className="w-4 h-4" />
                  Compromisso Estatutário
                </div>
                <h3 className="text-3xl font-bold text-amavi-brown uppercase tracking-widest">Objectivos Estratégicos</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'a) Promover o melhoramento da qualidade de vida de grupos em situação de vulnerabilidade nas zonas rurais;',
                  'b) Promover o Empoderamento económico e social de mulheres, jovens e pessoas com deficiência;',
                  'c) Promover o acesso à educação e à informação sobre saúde sexual e reprodutiva;',
                  'd) Promover o desenvolvimento integral de crianças órfãs através de cuidados e suporte psicossocial.',
                  'e) Promover a Realização de programas de capacitação em educação financeira e empreendedorismo;',
                  'f) Promover o Desenvolvimento de acções de nutrição comunitária com foco em práticas alimentares sustentáveis;',
                  'g) Promover campanhas e oficinas sobre saúde sexual e reprodutiva;',
                  'h) Promover o apoio psicológico e emocional para pessoas em situação de luto, violência ou discriminação;',
                  'i) Promover o acesso de pessoas com deficiência a programas de inclusão e reabilitação social.'
                ].map((objetivo, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-amavi-green/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amavi-green/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-amavi-green" />
                    </div>
                    <p className="text-amavi-brown/70 text-sm leading-relaxed">{objetivo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lista de Membros Fundadores (Restaurado) */}
          <div className="mt-20 bg-white border border-amavi-beige/20 rounded-[3rem] p-8 md:p-16 shadow-sm hover:shadow-xl transition-all">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amavi-brown/10 text-amavi-brown px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Users className="w-4 h-4" />
                Membros Visionários
              </div>
              <h3 className="text-3xl font-bold text-amavi-brown uppercase tracking-widest">Sócios Fundadores</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                'Amélia Lavenesse David Nassone',
                'Ana Domingas Matangue Cuambe',
                'Ana Paula Micas Culinwa Langa',
                'Cecília Lindy David Mafumisse',
                'Lídia Julião Chilaúle Nhambongo',
                'Maria Helena Fabião Uilson',
                'Nilza Guida Davane',
                'Rosa Domingos Muianga Sabeca',
                'Sónia José António Rodrigues',
                'Telma de Lurdes Pessana'
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-amavi-bg-light rounded-[2rem] hover:bg-amavi-green/5 transition-all group border border-transparent hover:border-amavi-green/10">
                  <div className="w-10 h-10 rounded-full bg-amavi-green/10 flex items-center justify-center text-amavi-green font-black text-sm group-hover:bg-amavi-green group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <span className="text-amavi-brown font-bold tracking-tight">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Transparency */}
      <section className="bg-amavi-bg-dark py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Transparência e Prestação de Contas
            </h2>
            <p className="text-xl text-amavi-beige/60 max-w-2xl mx-auto">
              Acreditamos na transparência total. A AMAVI foi reconhecida juridicamente pelo Ministério da Justiça
              e os nossos estatutos foram publicados no Boletim da República.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FileText, title: 'Estatutos', desc: 'Publicado no BR n.º 192, III Série' },
              { icon: TrendingUp, title: 'Reconhecimento', desc: '29 de Julho de 2025' },
              { icon: Shield, title: 'Sede', desc: 'Marracuene, Prov. Maputo' },
              { icon: Users, title: 'Âmbito', desc: 'Nacional - Todo Moçambique' }
            ].map((doc) => (
              <div key={doc.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-amavi-green/50 transition-all group cursor-pointer">
                <doc.icon className="w-14 h-14 text-amavi-green mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-3">{doc.title}</h4>
                <p className="text-sm text-amavi-beige/40 mb-8">{doc.desc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-amavi-green text-amavi-green hover:bg-amavi-green hover:text-white"
                >
                  Ver PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </section>

      {/* CTA */}
      <CTASection
        title="Junte-se a Nós"
        description="Faça parte da transformação. Seja um parceiro, doador ou voluntário da AMAVI."
        primaryButtonText="Apoie Nossa Causa"
        secondaryButtonText="Seja Voluntário"
        variant="accent"
      />
    </div>
  );
}
