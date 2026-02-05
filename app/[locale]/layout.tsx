import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    default: "AMAVI - Associação Mãos Que Acolhem Vidas | ONG Moçambique",
    template: "%s | AMAVI - Moçambique"
  },
  description: "A AMAVI é uma ONG moçambicana dedicada a transformar vidas através de educação, saúde e desenvolvimento comunitário sustentável. Junte-se a nós.",
  keywords: ["ONG Moçambique", "Ajuda Humanitária", "Educação em África", "Doações Moçambique", "Voluntariado", "AMAVI", "Desenvolvimento Social", "Associação Mãos Que Acolhem Vidas"],
  authors: [{ name: "AMAVI Team" }],
  creator: "AMAVI",
  publisher: "AMAVI",
  metadataBase: new URL('https://amavi.org.mz'), // Replace with actual domain in production
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/amavi-logo.png', color: '#3D8B37' },
    ],
  },
  openGraph: {
    title: "AMAVI - Transformando Vidas em Moçambique",
    description: "Junte-se à AMAVI na missão de promover educação, saúde e dignidade para comunidades vulneráveis em Moçambique.",
    url: 'https://amavi.org.mz',
    siteName: 'AMAVI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AMAVI - Associação Mãos Que Acolhem Vidas',
      },
    ],
    locale: 'pt_MZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AMAVI - ONG Moçambique",
    description: "Transformando vidas através da educação e saúde em Moçambique.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
