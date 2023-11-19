import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const headerSection = tv({
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

interface ISection extends HTMLAttributes<HTMLElement> {
  variant?: VariantProps<typeof headerSection>;
  children: ReactNode;
}

export const HeaderSection = ({ variant, children, ...props }: ISection) => (
  <header {...props} className={headerSection(variant)}>
    {children}
  </header>
);
