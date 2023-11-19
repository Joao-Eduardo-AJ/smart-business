import { useField } from "@unform/core";
import { useEffect, useRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
  base: "bg-white w-full text-nm text-start text-neutral800 cursor-text z-100 outline-0",
  variants: {
    type: {
      text: "placeholder-neutral200 py-20",
      outlined:
        "placeholder-neutral050 py-16 px-16 border-2 border-neutral002 focus:border-primaryDefault/50",
      news: "placeholder-neutral200 pl-16 py-20",
    },
  },
  defaultVariants: {
    type: "text",
  },
});

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  variant?: VariantProps<typeof input>;
  name: string;
}
export const Input = ({ name, variant, children, ...props }: InputProps) => {
  const { fieldName, registerField, error, clearError } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = "";
      },
    });
  }, [registerField, fieldName]);

  return (
    <div className="flex flex-col w-full gap-1 h-full">
      <div
        className={`flex bg-white ${variant?.type !== "outlined" && "pl-20"}`}
      >
        {children}
        <input
          {...props}
          ref={inputRef}
          className={input(variant)}
          onFocus={() => error && clearError()}
          onKeyDown={() => error && clearError()}
        />
      </div>
      <span
        className={`text-auxiliaryRed text-sd2 text-left ${
          error ? "visible" : "hidden"
        }`}
      >
        {error}
      </span>
    </div>
  );
};
