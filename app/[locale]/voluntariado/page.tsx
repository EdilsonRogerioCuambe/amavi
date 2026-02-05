"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
    ArrowRight,
    Award,
    Briefcase,
    CheckCircle2,
    ChevronRight,
    Heart,
    HelpingHand,
    MessageSquare,
    Send,
    Sparkles,
    Users
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    area: '',
    experience: '',
    motivation: '',
    agreeTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      availability: '',
      area: '',
      experience: '',
      motivation: '',
      agreeTerms: false,
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const volunteerTypes = [
    {
      icon: Users,
      title: 'Voluntariado de Campo',
      description: 'Trabalhe diretamente com as comunidades em programas de educação, saúde e desenvolvimento.',
      requirements: ['Disponibilidade mínima de 3 meses', 'Flexibilidade para deslocações', 'Espírito de equipa'],
    },
    {
      icon: Briefcase,
      title: 'Voluntariado Administrativo',
      description: 'Apoie a gestão de projetos, administração, recursos humanos e operações da organização.',
      requirements: ['Experiência em gestão/administração', 'Disponibilidade de 2-3 dias/semana', 'Competências organizacionais'],
    },
    {
      icon: MessageSquare,
      title: 'Comunicação e Marketing',
      description: 'Ajude a contar nossas histórias através de design, fotografia, vídeo e redes sociais.',
      requirements: ['Competências em comunicação', 'Criatividade', 'Conhecimento de ferramentas digitais'],
    },
  ];

  const benefits = [
    'Experiência prática em desenvolvimento comunitário',
    'Certificado de voluntariado oficial',
    'Networking com profissionais da área social',
    'Desenvolvimento de competências transversais',
    'Impacto direto na vida de crianças e famílias',
    'Integração em equipa multicultural e dinâmica',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amavi-bg-light py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 bg-amavi-green/10 text-amavi-green px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                <HelpingHand className="w-4 h-4" />
                Mãos que Transformam
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amavi-brown mb-8 font-outfit leading-tight tracking-tighter">
                Seja Um <span className="text-amavi-green">Voluntário</span> AMAVI
              </h1>
              <p className="text-xl text-amavi-brown/70 mb-12 leading-relaxed max-w-xl font-medium">
                Doe seu tempo, conhecimento e paixão para transformar vidas.
                Junte-se a uma equipa dedicada a fazer diferença real nas comunidades moçambicanas.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="h-16 md:h-20 px-8 md:px-12 bg-amavi-green hover:bg-amavi-green/90 text-white font-black text-lg md:text-xl rounded-2xl md:rounded-3xl shadow-2xl shadow-amavi-green/20 transition-all hover:scale-105"
                >
                  Quero Participar
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 md:h-20 px-8 md:px-12 border-amavi-brown text-amavi-brown hover:bg-amavi-brown hover:text-white font-bold text-lg md:text-xl rounded-2xl md:rounded-3xl transition-all"
                >
                  Ver Programas
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl md:skew-y-3 transform hover:skew-y-0 transition-transform duration-700 cursor-pointer group">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
                  alt="Voluntários AMAVI"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amavi-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Decorative badges */}
              <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 bg-white p-5 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center gap-3 md:gap-4 animate-bounce duration-[3000ms]">
                <div className="w-12 h-12 bg-amavi-green rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-black text-amavi-brown font-outfit">Certificado</div>
                  <div className="text-xs font-bold text-amavi-green uppercase tracking-widest">Reconhecimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amavi-green/5 -skew-x-12 transform origin-top-right -z-0" />
      </section>

      {/* Volunteer Types */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6 font-outfit tracking-tighter uppercase">
              Onde <span className="text-amavi-green">Podes Ajudar?</span>
            </h2>
            <p className="text-xl text-amavi-brown/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Encontra a forma de voluntariado que melhor se adequa ao teu perfil e disponibilidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {volunteerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="p-10 rounded-[2.5rem] border-amavi-beige/10 bg-amavi-bg-light/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full border-none">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-amavi-green group-hover:text-white transition-colors duration-500">
                    <Icon className="w-8 h-8 text-amavi-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-amavi-brown mb-4 font-outfit group-hover:text-amavi-green transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-amavi-brown/60 mb-8 leading-relaxed font-medium">
                    {type.description}
                  </p>
                  <div className="mt-auto pt-8 border-t border-amavi-beige/10 space-y-4">
                    <div className="text-[10px] font-black text-amavi-brown/40 uppercase tracking-[0.2em]">Principais Requisitos</div>
                    {type.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm font-bold text-amavi-brown/60">
                        <CheckCircle2 className="w-4 h-4 text-amavi-green flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-amavi-brown py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 text-white">
            <div className="inline-flex items-center gap-3 bg-amavi-green text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-4 h-4" />
              Experiência Única
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tighter leading-tight">
              Benefícios do <span className="text-amavi-green">Impacto Social</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-start gap-5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amavi-green/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amavi-green transition-colors">
                  <Award className="w-6 h-6 text-amavi-green group-hover:text-white" />
                </div>
                <span className="text-white text-lg font-medium leading-tight pt-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amavi-green/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer-form" className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6 font-outfit uppercase tracking-tighter">
              A Tua <span className="text-amavi-green">Candidatura</span>
            </h2>
            <p className="text-xl text-amavi-brown/50 font-medium leading-relaxed">
              Dá o primeiro passo para te juntares à nossa missão.
            </p>
          </div>

          {isSubmitted ? (
             <div className="bg-amavi-green/5 border border-amavi-green/20 rounded-[3rem] p-20 text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-amavi-green rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-amavi-green/20 animate-bounce">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-amavi-brown mb-6 font-outfit">Recebemos o Teu Interesse!</h3>
                <p className="text-2xl text-amavi-brown/60 max-w-lg mx-auto leading-relaxed">
                  Obrigado por quereres mudar o mundo connosco. Analisaremos o teu perfil e contactamos-te em breve.
                </p>
                <Button
                  variant="ghost"
                  className="mt-12 text-amavi-green font-black text-lg uppercase tracking-widest"
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar Novo Formulário
                </Button>
             </div>
          ) : (
            <Card className="p-6 md:p-10 lg:p-16 rounded-3xl md:rounded-[3rem] border-none shadow-2xl shadow-amavi-brown/5 bg-amavi-bg-light/30">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Nome Completo *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Albino Langa"
                      className="h-14 md:h-16 rounded-2xl border-none bg-white px-6 md:px-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="email" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="exemplo@email.com"
                      className="h-14 md:h-16 rounded-2xl border-none bg-white px-6 md:px-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+258 XX XXX XXXX"
                      className="h-14 md:h-16 rounded-2xl border-none bg-white px-6 md:px-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="location" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Província / Cidade *</Label>
                    <Input
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ex: Maputo Cidade"
                      className="h-14 md:h-16 rounded-2xl border-none bg-white px-6 md:px-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Volunteer Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="area" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Área de Interesse *</Label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) => setFormData({ ...formData, area: value })}
                    >
                      <SelectTrigger id="area" className="h-14 md:h-16 rounded-2xl border-none bg-white px-6 md:px-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm">
                        <SelectValue placeholder="Selecione uma área" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-amavi-beige/10">
                        <SelectItem value="field">Voluntariado de Campo</SelectItem>
                        <SelectItem value="admin">Administrativo</SelectItem>
                        <SelectItem value="communication">Comunicação e Mkt</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="availability" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Disponibilidade *</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => setFormData({ ...formData, availability: value })}
                    >
                      <SelectTrigger id="availability" className="h-14 md:h-16 rounded-2xl border-none bg-white px-6 md:px-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-amavi-beige/10">
                        <SelectItem value="full">Tempo Integral</SelectItem>
                        <SelectItem value="part">Tempo Parcial</SelectItem>
                        <SelectItem value="weekend">Fins de Semana</SelectItem>
                        <SelectItem value="flexible">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="experience" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Experiência Relevante</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Conta-nos um pouco sobre a tua trajetória e habilidades..."
                    rows={4}
                    className="rounded-2xl md:rounded-3xl border-none bg-white p-5 md:p-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="motivation" className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-amavi-brown/40 ml-2 md:ml-4">Motivação *</Label>
                  <Textarea
                    id="motivation"
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Por que queres ser voluntário na AMAVI?"
                    rows={4}
                    className="rounded-2xl md:rounded-3xl border-none bg-white p-5 md:p-8 text-base md:text-lg font-medium focus:ring-2 focus:ring-amavi-green transition-all shadow-sm resize-none"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl group cursor-pointer hover:bg-amavi-green/5 transition-colors duration-300">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeTerms: checked as boolean })
                    }
                    className="w-6 h-6 rounded-lg border-2 border-amavi-beige/30 data-[state=checked]:bg-amavi-green data-[state=checked]:border-amavi-green transition-all"
                  />
                  <label htmlFor="terms" className="text-sm font-bold text-amavi-brown/40 leading-relaxed cursor-pointer group-hover:text-amavi-brown transition-colors">
                    Concordo em partilhar as minhas informações com a AMAVI para fins de candidatura
                    ao voluntariado e aceito a nossa Política de Privacidade.
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={!formData.agreeTerms}
                  className="w-full h-16 md:h-20 lg:h-24 bg-amavi-green hover:bg-amavi-green/90 text-white font-black text-lg md:text-xl lg:text-2xl rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-amavi-green/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:hover:scale-100"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Enviar Candidatura
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Removed Testimonials as requested */}

      {/* FAQ Section */}
      <section className="bg-white py-24 lg:py-32 border-t border-amavi-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amavi-brown mb-4 font-outfit tracking-tighter">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Preciso ter experiência prévia?",
                a: "Não necessariamente. Oferecemos orientação e formação inicial. No entanto, experiência em áreas específicas como saúde ou educação pode ser vantajosa para candidaturas de campo."
              },
              {
                q: "Qual é o compromisso de tempo mínimo?",
                a: "Varia conforme o tipo de voluntariado. Geralmente, pedimos um compromisso mínimo de 3 meses para voluntariado de campo, visando a continuidade dos projetos junto às comunidades."
              },
              {
                q: "Recebo algum tipo de apoio?",
                a: "Sim! Fornecemos orientação constante, formação em boas práticas de intervenção social, certificado oficial e, dependendo da função, apoio logístico básico."
              }
            ].map((faq, i) => (
              <Card key={i} className="p-8 rounded-[2rem] border-amavi-beige/10 hover:border-amavi-green/20 shadow-sm transition-all duration-300 group">
                <h3 className="text-xl font-bold text-amavi-brown mb-3 flex items-center gap-3 font-outfit group-hover:text-amavi-green transition-colors">
                  <ChevronRight className="w-5 h-5 text-amavi-green/40 group-hover:translate-x-1 transition-transform" />
                  {faq.q}
                </h3>
                <p className="text-amavi-brown/60 text-lg leading-relaxed pl-8">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-amavi-green text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-white/20">
            <Heart className="w-10 h-10 text-white fill-current" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-outfit tracking-tighter leading-tight">
            Pronto Para Fazer <span className="text-amavi-brown">a Diferença?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
            Sua jornada como voluntário AMAVI começa agora. Juntos, transformamos vidas e criamos um futuro melhor.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-16 md:h-20 px-8 md:px-12 bg-white hover:bg-white/90 text-amavi-green font-black text-lg md:text-xl rounded-2xl md:rounded-3xl shadow-2xl transition-all"
            >
              Candidatar-me Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 md:h-20 px-8 md:px-12 border-white text-white hover:bg-white hover:text-amavi-green font-bold text-lg md:text-xl rounded-2xl md:rounded-3xl transition-all border-2 cursor-pointer text-amavi-brown"
            >
              Fale Connosco
            </Button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amavi-brown/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </section>
    </div>
  );
}
