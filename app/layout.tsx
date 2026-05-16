import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivá Cia de Dança — Forte como a natureza",
  description:
    "Companhia de dança contemporânea fundada no Rio de Janeiro em 2012. 12 anos de história, 21 prêmios e editais, 12 espetáculos originais.",
  keywords: [
    "Vivá Cia de Dança",
    "Carlos Fontinelle",
    "dança contemporânea",
    "Rio de Janeiro",
    "Pé de Cachimbo",
    "MoviRio Festival",
  ],
  openGraph: {
    title: "Vivá Cia de Dança",
    description: "Forte como a natureza. 12 anos de criação, território e transformação.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
