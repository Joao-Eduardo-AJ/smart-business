import { ReactNode } from "react";
import { Archivo } from "next/font/google";

const mainFontFamily = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={mainFontFamily.className}>
      <body>{children}</body>
    </html>
  );
}
