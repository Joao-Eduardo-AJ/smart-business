import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const headerArticle = tv({
  base: "flex flex-col gap-4 items-center",
  variants: {
    type: {
      light: "lg:items-start",
      dark: "lg:items-center lg:w-560",
    },
  },
  defaultVariants: {
    type: "light",
  },
});

interface IArticle extends HTMLAttributes<HTMLElement> {
  variant?: VariantProps<typeof headerArticle>;
  children: ReactNode;
}

export const HeaderArticle = ({ variant, children, ...props }: IArticle) => (
  <header {...props} className={headerArticle(variant)}>
    {children}
  </header>
);
