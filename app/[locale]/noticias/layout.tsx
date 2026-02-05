import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notícias e Atualizações | Blog AMAVI",
  description: "Fique por dentro das últimas notícias, histórias de sucesso e relatórios de atividades da AMAVI.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
