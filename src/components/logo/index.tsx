import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import { useState } from "react";

interface ILogo {
  logoColor?: "blue" | "white";
}

export const Logo = ({ logoColor }: ILogo) => {
  const [flowDirection, setFlowDirection] = useState(false);
  return (
    <div className="flex flex-row justify-center items-center w-140h-32 gap-2">
      <div
        onMouseOver={() => setFlowDirection(true)}
        onMouseOut={() => setFlowDirection(false)}
      >
        {logoColor ? (
          flowDirection ? (
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
          )
        ) : (
          <Image
            src="icons/logo.svg"
            width={22}
            height={19}
            alt="logo"
            className="block sm:hidden"
          />
        )}
      </div>
      <div className="flex flex-row text-sm sm:flex-col sm:text-xs leading-4 tracking-wide">
        <span className="text-sd1 lg:text-md1 cursor-default">Smart</span>
        <strong className="text-sd1 lg:text-md1">Business</strong>
      </div>
    </div>
  );
};
