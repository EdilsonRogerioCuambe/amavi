import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seja Voluntário | Junte-se à Nossa Missão",
  description: "Doe seu tempo e talento. Oportunidades de voluntariado em campo e administrativo. Inscreva-se hoje.",
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
