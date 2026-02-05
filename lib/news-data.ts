export interface NewsArticle {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  author: string;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "amavi-reconhecimento-juridico-2025",
    title: 'AMAVI Recebe Reconhecimento Jurídico Oficial',
    excerpt: 'A Associação Mãos que Acolhem Vidas foi oficialmente reconhecida pelo Ministério da Justiça, Assuntos Constitucionais e Religiosos de Moçambique.',
    content: `
      <p class="mb-6">Em 29 de Julho de 2025, a AMAVI foi oficialmente reconhecida como pessoa jurídica através de despacho do Ministro Mateus da Cecília Feniasse Saize, marcando um momento histórico para a associação.</p>
      <p class="mb-6">Este reconhecimento permite à AMAVI operar em todo o território nacional, expandindo seus programas de apoio a comunidades vulneráveis nas zonas rurais de Moçambique.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Um Novo Capítulo</h3>
      <p class="mb-6">Com sede em Marracuene, na Província de Maputo, a AMAVI está agora legalmente habilitada a promover o empoderamento económico e social de mulheres, jovens e pessoas com deficiência em todo o país.</p>
    `,
    category: 'Institucional',
    date: '2025-07-29',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
    readTime: '4 min',
    author: 'Conselho de Direcção',
    tags: ['Reconhecimento', 'Institucional', 'Ministério da Justiça', 'AMAVI']
  },
  {
    id: "2",
    slug: "programa-empoderamento-mulheres",
    title: 'Programa de Empoderamento Económico para Mulheres',
    excerpt: 'AMAVI lança programa focado na capacitação em educação financeira e empreendedorismo para mulheres nas zonas rurais.',
    content: `
      <p class="mb-6">A AMAVI está a implementar um programa inovador de empoderamento económico e social focado em mulheres das zonas rurais de Moçambique.</p>
      <p class="mb-6">O programa inclui formação em educação financeira, empreendedorismo e desenvolvimento de pequenos negócios sustentáveis, capacitando as mulheres a tornarem-se agentes de mudança nas suas comunidades.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Objectivos do Programa</h3>
      <p class="mb-6">Este programa está alinhado com os objectivos estatutários da AMAVI de promover o empoderamento económico e social de mulheres em situação de vulnerabilidade, contribuindo para a melhoria da qualidade de vida nas zonas rurais.</p>
    `,
    category: 'Desenvolvimento',
    date: '2025-09-15',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200',
    readTime: '5 min',
    author: 'Equipa de Programas',
    tags: ['Mulheres', 'Empoderamento', 'Educação Financeira', 'Empreendedorismo']
  },
  {
    id: "3",
    slug: "saude-sexual-reprodutiva-campanha",
    title: 'Campanhas de Saúde Sexual e Reprodutiva nas Comunidades',
    excerpt: 'AMAVI realiza oficinas e campanhas sobre saúde sexual e reprodutiva em comunidades rurais.',
    content: `
      <p class="mb-6">Como parte dos seus objectivos estatutários, a AMAVI está a promover campanhas e oficinas sobre saúde sexual e reprodutiva em comunidades rurais de Moçambique.</p>
      <p class="mb-6">As acções incluem sensibilização sobre práticas de saúde, acesso à informação e apoio psicológico para jovens e adultos em situação de vulnerabilidade.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Acesso à Informação</h3>
      <p class="mb-6">O programa visa garantir que todas as pessoas, independentemente da sua localização geográfica, tenham acesso à educação e informação sobre saúde sexual e reprodutiva, contribuindo para comunidades mais saudáveis.</p>
    `,
    category: 'Saúde',
    date: '2025-10-01',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    readTime: '4 min',
    author: 'Equipa de Saúde',
    tags: ['Saúde', 'Educação', 'Comunidades', 'Prevenção']
  },
  {
    id: "4",
    slug: "apoio-criancas-orfas",
    title: 'Programa de Apoio a Crianças Órfãs',
    excerpt: 'AMAVI implementa programa de cuidados e suporte psicossocial para o desenvolvimento integral de crianças órfãs.',
    content: `
      <p class="mb-6">A AMAVI está comprometida com o desenvolvimento integral de crianças órfãs através de programas de cuidados e suporte psicossocial em todo o território moçambicano.</p>
      <p class="mb-6">O programa oferece acompanhamento psicológico, apoio educacional e integração social para garantir que estas crianças tenham oportunidades de crescer com dignidade e esperança.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Protecção e Desenvolvimento</h3>
      <p class="mb-6">Este objectivo estatutário reflecte o compromisso da AMAVI em acolher vidas e transformar futuros, oferecendo suporte às crianças mais vulneráveis da nossa sociedade.</p>
    `,
    category: 'Protecção Social',
    date: '2025-08-20',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200',
    readTime: '5 min',
    author: 'Conselho de Direcção',
    tags: ['Crianças', 'Protecção Social', 'Suporte Psicossocial', 'Desenvolvimento']
  },
  {
    id: "5",
    slug: "inclusao-pessoas-deficiencia",
    title: 'Programa de Inclusão para Pessoas com Deficiência',
    excerpt: 'AMAVI promove acesso a programas de inclusão e reabilitação social para pessoas com deficiência nas zonas rurais.',
    content: `
      <p class="mb-6">A AMAVI reconhece a importância da inclusão social e está a promover programas específicos para pessoas com deficiência em comunidades rurais de Moçambique.</p>
      <p class="mb-6">Os programas incluem reabilitação social, formação profissional adaptada e sensibilização comunitária para eliminar barreiras e promover a plena participação na sociedade.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Acessibilidade e Dignidade</h3>
      <p class="mb-6">Este programa está alinhado com o objectivo estatutário de promover o acesso de pessoas com deficiência a programas de inclusão e reabilitação social, garantindo que todos tenham oportunidades iguais.</p>
    `,
    category: 'Inclusão',
    date: '2025-09-25',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200',
    readTime: '6 min',
    author: 'Equipa de Inclusão',
    tags: ['Inclusão', 'Deficiência', 'Reabilitação', 'Direitos']
  },
  {
    id: "6",
    slug: "nutricao-comunitaria-sustentavel",
    title: 'Acções de Nutrição Comunitária Sustentável',
    excerpt: 'AMAVI desenvolve programas de nutrição comunitária com foco em práticas alimentares sustentáveis.',
    content: `
      <p class="mb-6">A segurança alimentar é uma prioridade para a AMAVI. Estamos a implementar acções de nutrição comunitária que promovem práticas alimentares sustentáveis nas zonas rurais.</p>
      <p class="mb-6">Os programas incluem formação em agricultura familiar, educação nutricional e apoio técnico para melhorar a qualidade da alimentação nas comunidades.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Alimentação Saudável</h3>
      <p class="mb-6">Este objectivo visa garantir que as famílias rurais tenham acesso a uma alimentação nutritiva e diversificada, contribuindo para a saúde e bem-estar de toda a comunidade.</p>
    `,
    category: 'Nutrição',
    date: '2025-10-05',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200',
    readTime: '4 min',
    author: 'Equipa de Nutrição',
    tags: ['Nutrição', 'Sustentabilidade', 'Agricultura', 'Alimentação']
  }
];
