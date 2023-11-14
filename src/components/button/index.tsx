/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";
import type { ButtonHTMLAttributes } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-2 flex items-center justify-center text-sm gap-3",
  variants: {
    type: {
      text: "absolute right-16 top-7 sm:top-1/4 md:right-278 sm:right-260",
      contained: "bg-primaryDefault text-white h-56 min-w-full",
      outlined:
        "border overflow-hidden transition-all border-primaryDefault duration-500 w-204 h-42 text-primaryDefault relative hover:bg-primaryDefault hover:text-white hover:w-234",
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
