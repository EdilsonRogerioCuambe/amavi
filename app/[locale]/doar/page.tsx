"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Building2,
    Check,
    ChevronRight,
    Globe,
    GraduationCap,
    Heart,
    Lock,
    Shield,
    Smartphone,
    TrendingUp,
    Users
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function DonatePage() {
  const t = useTranslations('DonatePage');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fundAllocation = [
    { name: t('allocation_direct'), value: 75, color: '#3D8B37' }, // amavi-green
    { name: t('allocation_admin'), value: 15, color: '#2E4A2A' },     // amavi-brown
    { name: t('allocation_fundraising'), value: 10, color: '#E8F5E6' },          // amavi-beige
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amavi-green py-24 lg:py-32 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20 animate-pulse">
              <Heart className="w-10 h-10 text-white fill-current" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-outfit tracking-tighter">
              {t('hero_title_prefix')} <span className="text-amavi-brown">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              {t('hero_description')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
                <Shield className="w-5 h-5 text-amavi-brown" />
                <span className="text-sm font-bold uppercase tracking-widest">{t('secure_badge')}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
                <Globe className="w-5 h-5 text-amavi-brown" />
                <span className="text-sm font-bold uppercase tracking-widest">{t('transparent_badge')}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
                <Lock className="w-5 h-5 text-amavi-brown" />
                <span className="text-sm font-bold uppercase tracking-widest">{t('encrypted_badge')}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amavi-brown rounded-full blur-3xl" />
        </div>
      </section>

      {/* Donation Flow - Bank Details */}
      <section className="bg-white py-24 relative -mt-16 lg:-mt-24 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-16 rounded-[3rem] shadow-2xl border-amavi-beige/10 bg-white">
             <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                <div>
                  <div className="inline-flex items-center gap-2 bg-amavi-bg-light px-4 py-2 rounded-full text-amavi-green font-black text-xs uppercase tracking-widest mb-6">
                    <Heart className="w-4 h-4" />
                    {t('form_badge')}
                  </div>
                  <h2 className="text-4xl font-bold text-amavi-brown mb-6 font-outfit">{t('form_title')}</h2>
                  <p className="text-xl text-amavi-brown/60 mb-10 leading-relaxed font-medium">
                    {t('form_description')}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Millennium BIM */}
                    <div className="p-8 rounded-3xl border border-amavi-beige/20 bg-amavi-bg-light/10 hover:border-amavi-green/30 transition-all group">
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                          <Building2 className="w-6 h-6 text-amavi-brown" />
                       </div>
                       <h3 className="text-xl font-bold text-amavi-brown mb-1">{t('bank_millennium')}</h3>
                       <p className="text-sm font-bold text-amavi-brown/40 uppercase tracking-widest mb-6">{t('method_transfer')}</p>

                       <div className="space-y-4">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-1">{t('account_number')}</div>
                            <div className="text-2xl font-black text-amavi-brown select-all font-outfit">123456789</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-1">{t('account_nib')}</div>
                            <div className="text-lg font-bold text-amavi-brown/80 select-all font-mono">0001 0000 0012 3456 7890 00</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-1">{t('account_holder')}</div>
                            <div className="text-base font-bold text-amavi-brown">{t('account_owner')}</div>
                          </div>
                       </div>
                    </div>

                    {/* BCI */}
                    <div className="p-8 rounded-3xl border border-amavi-beige/20 bg-amavi-bg-light/10 hover:border-amavi-green/30 transition-all group">
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                          <Building2 className="w-6 h-6 text-amavi-brown" />
                       </div>
                       <h3 className="text-xl font-bold text-amavi-brown mb-1">{t('bank_bci')}</h3>
                       <p className="text-sm font-bold text-amavi-brown/40 uppercase tracking-widest mb-6">{t('method_transfer')}</p>

                       <div className="space-y-4">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-1">{t('account_number')}</div>
                            <div className="text-2xl font-black text-amavi-brown select-all font-outfit">987654321</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-1">{t('account_nib')}</div>
                            <div className="text-lg font-bold text-amavi-brown/80 select-all font-mono">0008 0000 0098 7654 3210 00</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-1">{t('account_holder')}</div>
                            <div className="text-base font-bold text-amavi-brown">{t('account_owner')}</div>
                          </div>
                       </div>
                    </div>

                    {/* Mobile Money */}
                    <div className="p-8 rounded-3xl border border-amavi-beige/20 bg-amavi-bg-light/10 hover:border-amavi-green/30 transition-all group md:col-span-2">
                       <div className="flex items-start justify-between">
                         <div>
                           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                              <Smartphone className="w-6 h-6 text-amavi-green" />
                           </div>
                           <h3 className="text-xl font-bold text-amavi-brown mb-1">{t('method_mobile')}</h3>
                           <p className="text-sm font-bold text-amavi-brown/40 uppercase tracking-widest mb-6">{t('submethod_mobile')}</p>
                         </div>
                         <div className="bg-amavi-green/10 px-4 py-2 rounded-xl">
                            <span className="text-amavi-green font-bold text-sm">{t('badge_fast')}</span>
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-2">M-Pesa</div>
                            <div className="text-3xl font-black text-amavi-brown select-all font-outfit">84 123 4567</div>
                            <div className="text-sm font-medium text-amavi-brown/60 mt-1">{t('account_owner')}</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider text-amavi-brown/50 font-bold mb-2">E-Mola</div>
                            <div className="text-3xl font-black text-amavi-brown select-all font-outfit">86 123 4567</div>
                            <div className="text-sm font-medium text-amavi-brown/60 mt-1">{t('account_owner')}</div>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-amavi-green/5 p-6 rounded-3xl border border-amavi-green/10">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amavi-green rounded-full flex items-center justify-center shrink-0">
                           <Check className="w-5 h-5 text-white" />
                        </div>
                        <div>
                           <h4 className="font-bold text-amavi-brown text-lg">{t('verify_title')}</h4>
                           <p className="text-amavi-brown/60 text-sm">{t('verify_desc')}</p>
                        </div>
                     </div>
                     <Button className="w-full md:w-auto px-8 bg-amavi-brown hover:bg-amavi-brown/90 text-white font-bold rounded-xl h-12">
                        {t('button_verify')}
                     </Button>
                  </div>

                  <div className="mt-10 flex items-center justify-center gap-4 text-amavi-brown/40 font-bold text-xs uppercase tracking-widest">
                    <Shield className="w-5 h-5 text-amavi-green/40" />
                    {t('security_footer')}
                  </div>
                </div>
              </div>
          </Card>
        </div>
      </section>

      {/* Impact Multiplier */}
      <section className="bg-amavi-bg-light py-24 border-y border-amavi-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-6 font-outfit">{t('impact_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                amount: '500 MZN',
                label: t('impact_school_material'),
                icon: GraduationCap,
                desc: t('impact_school_desc')
              },
              {
                amount: '2,500 MZN',
                label: t('impact_health'),
                icon: Heart,
                desc: t('impact_health_desc')
              },
              {
                amount: '10,000 MZN',
                label: t('impact_credit'),
                icon: TrendingUp,
                desc: t('impact_credit_desc')
              }
            ].map((impact, i) => (
              <Card key={i} className="p-10 rounded-[2.5rem] border-none shadow-xl hover:shadow-2xl transition-all group h-full flex flex-col items-center text-center bg-white">
                <div className="w-16 h-16 bg-amavi-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amavi-green transition-colors">
                  <impact.icon className="w-8 h-8 text-amavi-green group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-black text-amavi-green mb-3 font-outfit">{impact.amount}</div>
                <h3 className="text-xl font-bold text-amavi-brown mb-4 uppercase tracking-tighter">{impact.label}</h3>
                <p className="text-amavi-brown/60 font-medium leading-relaxed">{impact.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Charts */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-amavi-green text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg shadow-amavi-green/20">
                <Check className="w-3 h-3" />
                {t('transparency_badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-amavi-brown mb-8 font-outfit leading-tight">
                {t('transparency_title_prefix')} <span className="text-amavi-green">{t('transparency_title_highlight')}</span>
              </h2>
              <p className="text-xl text-amavi-brown/60 mb-12 leading-relaxed font-medium">
                {t('transparency_desc')}
              </p>
              <div className="space-y-8">
                {fundAllocation.map((item) => (
                  <div key={item.name} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-lg transition-transform hover:scale-110" style={{ backgroundColor: item.color }} />
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-amavi-brown text-lg">{item.name}</span>
                      <span className="font-black text-amavi-green text-2xl">{item.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-amavi-bg-light rounded-full overflow-hidden">
                      <div className="h-full transition-all duration-1000" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {mounted && (
              <div className="relative">
                <Card className="p-10 rounded-[3rem] border-none shadow-2xl bg-amavi-bg-light/50 relative z-10 aspect-square flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={fundAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={110}
                        outerRadius={160}
                        paddingAngle={10}
                        dataKey="value"
                        stroke="none"
                      >
                        {fundAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          borderRadius: '24px',
                          border: 'none',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          padding: '16px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <div className="text-5xl font-black text-amavi-brown font-outfit">100%</div>
                    <div className="text-xs font-black text-amavi-green uppercase tracking-widest mt-1">{t('audited')}</div>
                  </div>
                </Card>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-amavi-green/10 rounded-full blur-3xl -z-0" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amavi-brown/10 rounded-full blur-3xl -z-0" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Removed Testimonials as requested */}

      {/* Other Ways to Help */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amavi-brown mb-4 font-outfit">{t('other_ways_title')}</h2>
            <p className="text-lg text-amavi-brown/50">{t('other_ways_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Card className="p-10 rounded-[2.5rem] border-amavi-beige/10 bg-amavi-bg-light/30 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-amavi-green transition-colors">
                  <Users className="w-8 h-8 text-amavi-green group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amavi-brown mb-4 font-outfit uppercase tracking-tighter">{t('volunteer_title')}</h3>
                <p className="text-amavi-brown/60 mb-8 leading-relaxed font-medium">
                  {t('volunteer_desc')}
                </p>
                <Button
                  variant="outline"
                  className="h-14 px-8 border-amavi-green text-amavi-green hover:bg-amavi-green hover:text-white font-bold rounded-2xl"
                  onClick={() => window.open(`https://wa.me/258841234567?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre como posso ser voluntário na AMAVI.')}`, '_blank')}
                >
                  {t('volunteer_button')}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
             </Card>
             <Card className="p-10 rounded-[2.5rem] border-amavi-beige/10 bg-amavi-bg-light/30 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-amavi-brown transition-colors">
                  <Building2 className="w-8 h-8 text-amavi-brown group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amavi-brown mb-4 font-outfit uppercase tracking-tighter">{t('corporate_title')}</h3>
                <p className="text-amavi-brown/60 mb-8 leading-relaxed font-medium">
                  {t('corporate_desc')}
                </p>
                <Button
                  variant="outline"
                  className="h-14 px-8 border-amavi-brown text-amavi-brown hover:bg-amavi-brown hover:text-white font-bold rounded-2xl"
                  onClick={() => window.open(`https://wa.me/258841234567?text=${encodeURIComponent('Olá! Gostaria de falar sobre uma possível parceria corporativa com a AMAVI.')}`, '_blank')}
                >
                  {t('corporate_button')}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
             </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
