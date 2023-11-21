/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";
import type { ButtonHTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-2 flex items-center justify-center gap-3 transition-all duration-500",
  variants: {
    type: {
      text: "h-56 min-w-full text-neutral500 hover:scale-110 z-10",
      contained:
        "bg-primaryDefault text-white h-56 min-w-full hover:shadow-contained",
      outlined:
        "border overflow-hidden border-primaryDefault w-226 h-42 text-primaryDefault relative hidden sm:flex hover:bg-primaryDefault hover:text-white hover:w-260",
      dark: "bg-primaryDefault text-white min-w-full h-56 lg:min-w-0 px-24 lg:w-150 lg:h-42 hover:shadow-contained",
    },
  },
  defaultVariants: {
    type: "text",
  },
});

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
}

export function Root({ variant, ...props }: IButton) {
  return <button {...props} className={button(variant)} />;
}

export function Icon(props: ImageProps) {
  return <Image {...props} />;
}
