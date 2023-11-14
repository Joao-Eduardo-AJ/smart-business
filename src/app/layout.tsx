import { ReactNode } from "react";
import { Archivo } from "next/font/google";
import "./global.css";

const mainFontFamily = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={mainFontFamily.className}>
      <body className="bg-neutral001">{children}</body>
    </html>
  );
}
