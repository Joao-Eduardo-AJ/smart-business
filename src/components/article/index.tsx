import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const article = tv({
  base: "py-64 px-24 w-full text-neutral400 text-center flex flex-col items-center z-0 gap-40 lg:relative lg:flex-row lg:py-120 lg:px-112 lg:items-start lg:justify-between",
  variants: {
    type: {
      white: "bg-white",
      neutral: "bg-neutral001",
    },
  },
  defaultVariants: {
    type: "white",
  },
});

interface IArticle extends HTMLAttributes<HTMLElement> {
  variant?: VariantProps<typeof article>;
  children: ReactNode;
}

export const Article = ({ variant, children, ...props }: IArticle) => (
  <article {...props} className={article(variant)}>
    {children}
  </article>
);
