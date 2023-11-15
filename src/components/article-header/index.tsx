import { ReactNode } from "react";

export const HeaderArticle = ({ children }: { children: ReactNode }) => (
  <header className="flex flex-col gap-4 items-center lg:items-start">
    {children}
  </header>
);
