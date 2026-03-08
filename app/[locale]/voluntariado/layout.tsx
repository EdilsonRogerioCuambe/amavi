import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seja Voluntário | Junte-se à Nossa Missão",
  description: "Doe seu tempo e talento. Oportunidades de voluntariado em campo e administrativo em Moçambique. Inscreva-se hoje.",
  keywords: ["Voluntariado Moçambique", "Ser voluntário ONG", "Trabalho voluntário Moçambique", "AMAVI oportunidades"],
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
