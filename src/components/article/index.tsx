import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const article = tv({
  base: "py-64 px-24 w-full text-center flex flex-col items-center z-0 gap-40 lg:py-120 lg:px-112 lg:justify-between overflow-hidden",
  variants: {
    type: {
      white: "bg-white lg:flex-row text-neutral400 lg:relative lg:items-start",
      neutral:
        "bg-neutral001 lg2:min-h-screen text-neutral400 lg:relative lg:items-start",
      dark: "bg-neutral500 relative text-white",
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
