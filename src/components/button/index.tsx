/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";
import type { ButtonHTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-2 flex items-center justify-center gap-3",
  variants: {
    type: {
      text: "h-56 min-w-full text-neutral500 transition duration-500 hover:scale-110 z-10",
      contained: "bg-primaryDefault text-white h-56 min-w-full",
      outlined:
        "border overflow-hidden transition-all border-primaryDefault duration-500 w-226 h-42 text-primaryDefault relative hidden sm:flex hover:bg-primaryDefault hover:text-white hover:w-260",
      dark: "bg-primaryDefault text-white min-w-full h-56 lg:min-w-0 px-24 lg:w-150 lg:h-42",
    },
  },
  defaultVariants: {
    type: "text",
  },
});

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
}

export function Root({ variant, ...props }: IButton) {
  return <button {...props} className={button(variant)} />;
}

export function Icon(props: ImageProps) {
  return <Image {...props} />;
}
