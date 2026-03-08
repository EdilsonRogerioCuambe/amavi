import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Programas | Educação, Saúde e Desenvolvimento",
  description: "Descubra os programas da AMAVI. Educação para Todos, Saúde Comunitária e Empoderamento Familiar transformando Moçambique.",
  keywords: ["Programas sociais Moçambique", "Educação Moçambique", "Saúde comunitária Moçambique", "Projetos AMAVI"],
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
