import { ReactNode } from "react";
import { Archivo } from "next/font/google";
import "./global.css";
import { PagesProvider } from "@/context";

const mainFontFamily = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-br" className={mainFontFamily.className}>
      <head>
        <meta
          name="description"
          content="Empresa de consultoria de tecnologia com foco em estratégia digital, marketing de conteúdo, SEO, SEM, PPC, mídias sociais e muito mais."
        />
        <title>Smart Business</title>
        <link rel="icon" href="icons/logo.ico" />
      </head>
      <PagesProvider>
        <body className="bg-neutral001">{children}</body>
      </PagesProvider>
    </html>
  );
}
