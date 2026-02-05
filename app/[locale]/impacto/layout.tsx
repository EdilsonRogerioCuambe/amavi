import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Impacto | Resultados e Transparência",
  description: "Veja os resultados reais do nosso trabalho. Mais de 50.000 vidas transformadas em 15 anos de atuação em Moçambique.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
