import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinFlow",
  description: "Sistema Financeiro",
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
