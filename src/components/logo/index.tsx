import { HTMLAttributes, ReactNode, useState } from "react";
import { VariantProps, tv } from "tailwind-variants";

const logo = tv({
  base: "flex text-sm sm:flex-col  leading-none lg:leading-4 tracking-wide",
  variants: {
    type: {
      header: "flex-row",
      footer: "flex-col",
    },
  },
  defaultVariants: {
    type: "header",
  },
});
interface ILogo extends HTMLAttributes<HTMLElement> {
  variant?: VariantProps<typeof logo>;
  logoColor?: "blue" | "white";
  children?: ReactNode;
}

export const Logo = ({ logoColor, variant, children }: ILogo) => {
  const [flowDirection, setFlowDirection] = useState(false);
  return (
    <div className="flex flex-row gap-2 items-center lg:items-end">
      <div className="h-full flex lg:items-end">
        {logoColor && (
          <div
            className="hidden sm:flex items-end h-6 gap-1"
            onMouseOver={() => setFlowDirection(true)}
            onMouseOut={() => setFlowDirection(false)}
          >
            <div
              className={`transition-all duration-700 border-2 w-3 lg:w-4 ${
                logoColor === "white" ? "border-white" : "border-primaryDefault"
              } ${flowDirection ? "h-6 lg:h-8" : "h-3 lg:h-4"}`}
            />
            <div
              className={`transition-all duration-700 border-2 w-3 lg:w-4 ${
                logoColor === "white"
                  ? "bg-white border-white"
                  : "bg-primaryDefault border-primaryDefault"
              } ${flowDirection ? "h-3 lg:h-4" : "h-6 lg:h-8"}`}
            />
          </div>
        )}
        {children}
      </div>
      <div
        className={`${logo(variant)} ${logoColor === "white" && "text-white"}`}
      >
        <span className="text-sd1 lg:text-md1 cursor-default">Smart</span>
        <strong className="text-sd1 sm:text-nm lg:text-md2">Business</strong>
      </div>
    </div>
  );
};
