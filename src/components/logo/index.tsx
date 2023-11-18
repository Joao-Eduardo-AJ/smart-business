import { Player } from "@lottiefiles/react-lottie-player";
import { HTMLAttributes, ReactNode, useState } from "react";
import { VariantProps, tv } from "tailwind-variants";

const logo = tv({
  base: "flex text-sm sm:flex-col sm:text-xs leading-4 tracking-wide",
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
  children: ReactNode;
}

export const Logo = ({ logoColor, variant, children }: ILogo) => {
  const [flowDirection, setFlowDirection] = useState(false);
  return (
    <div className="flex flex-row justify-center items-center w-140h-32 gap-2">
      <div
        onMouseOver={() => setFlowDirection(true)}
        onMouseOut={() => setFlowDirection(false)}
      >
        {logoColor &&
          (flowDirection ? (
            <Player
              autoplay
              keepLastFrame
              src={`lottie/flow-begin-end-${logoColor}.json`}
              style={{ width: "34px" }}
              className="hidden sm:block"
            />
          ) : (
            <Player
              autoplay
              keepLastFrame
              src={`lottie/flow-end-begin-${logoColor}.json`}
              style={{ width: "34px" }}
              className="hidden sm:block"
            />
          ))}
        {children}
      </div>
      <div className={logo(variant)}>
        <span className="text-sd1 lg:text-md1 cursor-default">Smart</span>
        <strong className="text-sd1 lg:text-md1">Business</strong>
      </div>
    </div>
  );
};
