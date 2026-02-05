import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faça Sua Doação | Transforme Vidas Hoje",
  description: "Sua doação faz a diferença. Apoie nossos programas de educação e saúde. Doação segura via M-Pesa ou Cartão.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
