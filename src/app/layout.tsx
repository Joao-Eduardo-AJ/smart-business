import { ReactNode } from "react";
import { Archivo } from "next/font/google";
import "./global.css";

const mainFontFamily = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface IRootLayout {
  children: ReactNode;
  pageRegister?: boolean;
}

export default function RootLayout({ children, pageRegister }: IRootLayout) {
  return (
    <html lang="pt-br" className={mainFontFamily.className}>
      <head>
        <meta
          name="description"
          content="Empresa de consultoria de tecnologia com foco em estratégia digital, marketing de conteúdo, SEO, SEM, PPC, mídias sociais e muito mais."
        />
        <title>Smart Business</title>
        <link rel="icon" href="icons/logo.png"></link>
      </head>
      <body
        className={`bg-neutral001 relative ${
          pageRegister && "overflow-hidden"
        }`}
      >
        {children}
      </body>
    </html>
  );
}
