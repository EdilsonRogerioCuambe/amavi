import { Accessibility, Apple, GraduationCap, HandHeart, Heart, LucideIcon, Shield, Stethoscope, Users, Wallet } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  image: string;
  beneficiaries: string;
  locations: string;
  status: string;
  icon?: LucideIcon;
}

export const programsInfo: Program[] = [
  {
    id: "melhoria-qualidade-vida-rural",
    title: 'Melhoria da Qualidade de Vida Rural',
    category: 'Desenvolvimento',
    description: 'Promover o melhoramento da qualidade de vida de grupos em situação de vulnerabilidade nas zonas rurais.',
    content: `
      <p class="mb-6">O objectivo central deste programa é elevar os padrões de vida nas zonas rurais de Moçambique, focando em comunidades que enfrentam desafios geográficos e económicos significativos.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Nossa Acção</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Mapeamento de necessidades básicas em comunidades remotas.</li>
        <li>Implementação de projectos de infraestrutura comunitária.</li>
        <li>Acesso a serviços essenciais e fortalecimento da resiliência local.</li>
      </ul>
    `,
    image: '/imagens/rural-community.png',
    beneficiaries: 'Grupos em vulnerabilidade rural',
    locations: 'Marracuene e Nacional',
    status: 'Activo',
    icon: HandHeart
  },
  {
    id: "empoderamento-economico-social",
    title: 'Empoderamento Económico e Social',
    category: 'Empoderamento',
    description: 'Promover o Empoderamento económico e social de mulheres, jovens e pessoas com deficiência.',
    content: `
      <p class="mb-6">Este pilar foca na autonomia. Trabalhamos para que mulheres, jovens e pessoas com deficiência tenham voz activa e meios de subsistência independentes.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Frentes de Trabalho</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Criação de redes de apoio social e profissional.</li>
        <li>Fomento ao associativismo e cooperativismo.</li>
        <li>Programas de integração social e liderança.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1200',
    beneficiaries: 'Mulheres, Jovens e PCDs',
    locations: 'Província de Maputo',
    status: 'Em Implementação',
    icon: Users
  },
  {
    id: "educacao-informacao-saude",
    title: 'Educação e Informação em Saúde',
    category: 'Saúde',
    description: 'Promover o acesso à educação e à informação sobre saúde sexual e reprodutiva.',
    content: `
      <p class="mb-6">Acreditamos que a informação é a primeira linha de defesa. Este programa dissemina conhecimentos vitais sobre direitos e cuidados de saúde.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Metodologia</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Sessões informativas em escolas e centros comunitários.</li>
        <li>Criação de materiais educativos em línguas locais.</li>
        <li>Uso de rádio e mídias sociais para alcance em massa.</li>
      </ul>
    `,
    image: '/imagens/health-care.png',
    beneficiaries: 'Jovens e Adultos',
    locations: 'Escolas e Comunidades',
    status: 'Em Lançamento',
    icon: Stethoscope
  },
  {
    id: "desenvolvimento-integral-orfaos",
    title: 'Desenvolvimento Integral de Órfãos',
    category: 'Proteção Social',
    description: 'Promover o desenvolvimento integral de crianças órfãs através de cuidados e suporte psicossocial.',
    content: `
      <p class="mb-6">Damos prioridade ao futuro do país: as crianças. Este programa garante que órfãos recebam não apenas sustento, mas o carinho e o apoio psicológico necessários para crescerem saudáveis.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Pilares de Cuidado</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Acompanhamento nutricional e médico regular.</li>
        <li>Inclusão escolar e actividades extra-curriculares.</li>
        <li>Terapia de grupo e suporte emocional especializado.</li>
      </ul>
    `,
    image: '/imagens/children-education.png',
    beneficiaries: 'Crianças Órfãs',
    locations: 'Centros e Famílias de Acolhimento',
    status: 'Prioritário',
    icon: Heart
  },
  {
    id: "educacao-financeira-empreendedorismo",
    title: 'Educação Financeira e Empreendedorismo',
    category: 'Educação',
    description: 'Promover a Realização de programas de capacitação em educação financeira e empreendedorismo.',
    content: `
      <p class="mb-6">Transformamos ideias em negócios sustentáveis. Ensinamos a gerir dinheiro e a criar oportunidades onde outros veem dificuldades.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">O que Ensinamos</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Planeamento financeiro doméstico e de pequenos negócios.</li>
        <li>Técnicas de vendas e atendimento ao cliente.</li>
        <li>Acesso a microfinanças e gestão de poupança.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1554224155-16974a4ea2c5?w=1200',
    beneficiaries: 'Pequenos Empreendedores e Famílias',
    locations: 'Comunidades em Marracuene',
    status: 'Projecto Piloto',
    icon: Wallet
  },
  {
    id: "nutricao-comunitaria-sustentavel",
    title: 'Nutrição Comunitária Sustentável',
    category: 'Saúde',
    description: 'Promover o Desenvolvimento de acções de nutrição comunitária com foco em práticas alimentares sustentáveis.',
    content: `
      <p class="mb-6">Alimentação saudável é a base da vida. Este programa ensina a aproveitar os recursos locais para uma dieta equilibrada e sustentável.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Acções no Terreno</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Demonstrações culinárias com produtos da época.</li>
        <li>Educação nutricional para mães e cuidadores.</li>
        <li>Fomento ao cultivo de alimentos nutritivos no quintal.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1594918808130-99778cd32274?w=1200',
    beneficiaries: 'Famílias Vulneráveis',
    locations: 'Zonas Rurais e Peri-urbanas',
    status: 'Em Planeamento',
    icon: Apple
  },
  {
    id: "oficinas-saude-reprodutiva",
    title: 'Oficinas de Saúde Reprodutiva',
    category: 'Saúde',
    description: 'Promover campanhas e oficinas sobre saúde sexual e reprodutiva.',
    content: `
      <p class="mb-6">Acções práticas e directas. Realizamos oficinas que permitem o diálogo aberto e a quebra de tabus sobre a saúde do corpo.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Destaques</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Campanhas móveis de sensibilização.</li>
        <li>Oficinas práticas de higiene e autocuidado.</li>
        <li>Parcerias com unidades de saúde locais para testagem e consulta.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200',
    beneficiaries: 'Jovens e Mulheres',
    locations: 'Escolas e Distritos Prioritários',
    status: 'Campanha Activa',
    icon: GraduationCap
  },
  {
    id: "apoio-psicologico-emocional",
    title: 'Apoio Psicológico e Emocional',
    category: 'Proteção Social',
    description: 'Promover o apoio psicológico e emocional para pessoas em situação de luto, violência ou discriminação.',
    content: `
      <p class="mb-6">Cuidamos da alma e da mente. Oferecemos suporte especializado para quem enfrenta as dores invisíveis da violência e da perda.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Nossa Ajuda</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Linha de apoio emocional e atendimento individual.</li>
        <li>Grupos de partilha para vítimas de violência.</li>
        <li>Intervenção em situações de crise e luto comunitário.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200',
    beneficiaries: 'Vítimas de violência e pessoas em luto',
    locations: 'Centros de Referência AMAVI',
    status: 'Crítico',
    icon: Shield
  },
  {
    id: "inclusao-reabilitacao-social",
    title: 'Inclusão e Reabilitação Social',
    category: 'Inclusão',
    description: 'Promover o acesso de pessoas com deficiência a programas de inclusão e reabilitação social.',
    content: `
      <p class="mb-6">Ninguém deve ser deixado para trás. Lutamos para que pessoas com deficiência tenham acesso equitativo a todas as oportunidades da sociedade.</p>
      <h3 class="text-2xl font-bold text-amavi-brown mb-4">Objectivos Práticos</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amavi-brown/80">
        <li>Facilitação do acesso a serviços de reabilitação.</li>
        <li>Advocacia por acessibilidade em espaços públicos.</li>
        <li>Inclusão produtiva em projectos de geração de renda.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1200',
    beneficiaries: 'Pessoas com Deficiência (PCDs)',
    locations: 'Nacional',
    status: 'Em Expansão',
    icon: Accessibility
  },
];
