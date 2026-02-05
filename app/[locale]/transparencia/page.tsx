"use client"
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Download, FileText, PieChart, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TransparencyPage() {
  const t = useTranslations('TransparencyPage');

  const reports = [
    { year: 2025, name: "Estatutos da AMAVI (Boletim da República)", size: "1.2 MB", type: "PDF" },
    { year: 2025, name: "Certificado de Reconhecimento Jurídico", size: "0.8 MB", type: "PDF" },
    { year: 2025, name: "Regulamento Interno de Governação", size: "1.5 MB", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-amavi-bg-light">
      {/* Hero Section */}
      <section className="bg-amavi-brown py-16 md:py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-outfit">
            {t('hero_title_prefix')} <span className="text-amavi-green">{t('hero_title_highlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-amavi-beige/70 leading-relaxed max-w-2xl mx-auto">
            {t('hero_description')}
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 relative z-20 pb-16 md:pb-24">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-amavi-green/10 flex items-center justify-center text-amavi-green flex-shrink-0">
              <TrendingUp className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm text-amavi-brown/60 font-bold uppercase tracking-wider mb-1">{t('metric_raised')}</p>
              <p className="text-xl md:text-2xl font-bold text-amavi-brown">2025 <span className="text-xs md:text-sm text-amavi-brown/40">ANO</span></p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-amavi-green/10 flex items-center justify-center text-amavi-green flex-shrink-0">
              <PieChart className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm text-amavi-brown/60 font-bold uppercase tracking-wider mb-1">{t('metric_projects')}</p>
              <p className="text-xl md:text-2xl font-bold text-amavi-brown">9 <span className="text-xs md:text-sm text-amavi-brown/40">OBJECTIVOS</span></p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-amavi-green/10 flex items-center justify-center text-amavi-green flex-shrink-0">
              <FileText className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm text-amavi-brown/60 font-bold uppercase tracking-wider mb-1">{t('table_document')}s</p>
              <p className="text-xl md:text-2xl font-bold text-amavi-brown">24+ <span className="text-xs md:text-sm text-amavi-brown/40">Arquivados</span></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content: Reports Table */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-amavi-beige/20">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-amavi-brown font-outfit mb-2">{t('reports_title')}</h2>
                <p className="text-sm md:text-base text-amavi-brown/60">{t('reports_desc')}</p>
              </div>

              {/* Mobile: Card Layout */}
              <div className="block md:hidden space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="border border-amavi-beige/20 rounded-2xl p-4 hover:bg-amavi-bg-light/50 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-amavi-green/10 rounded-xl flex items-center justify-center text-amavi-green flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-amavi-brown text-sm mb-1">{report.year}</p>
                        <p className="text-sm text-amavi-brown/80 leading-tight">{report.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-amavi-beige/10">
                      <span className="text-xs text-amavi-brown/60">{report.size}</span>
                      <Button variant="ghost" size="sm" className="text-amavi-green hover:text-amavi-green hover:bg-amavi-green/10 font-bold h-8 text-xs">
                        <Download className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop/Tablet: Table Layout */}
              <div className="hidden md:block rounded-xl border border-gray-100 overflow-x-auto">
                <Table>
                  <TableHeader className="bg-amavi-bg-light">
                    <TableRow>
                      <TableHead className="w-[100px] font-bold text-amavi-brown">{t('table_year')}</TableHead>
                      <TableHead className="font-bold text-amavi-brown">{t('table_document')}</TableHead>
                      <TableHead className="text-right font-bold text-amavi-brown">{t('table_size')}</TableHead>
                      <TableHead className="text-right font-bold text-amavi-brown">{t('table_action')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report, index) => (
                      <TableRow key={index} className="hover:bg-amavi-bg-light/50 transition-colors">
                        <TableCell className="font-medium text-amavi-brown">{report.year}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-amavi-green/10 rounded flex items-center justify-center text-amavi-green">
                              <FileText className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-amavi-brown/80">{report.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right text-amavi-brown/60">{report.size}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="text-amavi-green hover:text-amavi-green hover:bg-amavi-green/10 font-bold">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Sidebar: Financial Summary */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="bg-amavi-brown text-white p-6 md:p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('financials_title')}</h3>
              <p className="opacity-70 mb-6 md:mb-8 text-sm">{t('financials_desc')}</p>

              <div className="space-y-5 md:space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-xs md:text-sm font-bold">
                    <span className="truncate mr-2">{t('fin_program_expenses')}</span>
                    <span className="text-amavi-green flex-shrink-0">85%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amavi-green w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-xs md:text-sm font-bold">
                    <span className="truncate mr-2">{t('fin_admin_expenses')}</span>
                    <span className="text-amavi-green flex-shrink-0">10%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amavi-green w-[10%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-xs md:text-sm font-bold">
                    <span className="truncate mr-2">Fundraising</span>
                    <span className="text-amavi-green flex-shrink-0">5%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amavi-green w-[5%]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-center">
                <p className="text-xs opacity-50 mb-1">Entidade Legal n.º 105055320</p>
                <p className="text-xs opacity-50 mb-3 md:mb-4">Documentação referente à constituição legal da associação em 2025.</p>
                <Button variant="outline" className="w-full border-white/20 text-amavi-brown hover:bg-white hover:text-amavi-brown font-bold text-sm">
                  Ver Relatório Completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
