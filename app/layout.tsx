import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu SaaS",
  description: "Bem-vindo ao meu SaaS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
