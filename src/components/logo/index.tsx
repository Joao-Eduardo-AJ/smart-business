import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import { useState } from "react";

interface ILogo {
  logoColor?: "blue" | "white";
}

export const Logo = ({ logoColor }: ILogo) => {
  const [flowDirection, setFlowDirection] = useState(false);
  return (
    <div className="flex flex-row justify-center items-center w-136 gap-2">
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
              style={{ width: "32px" }}
            />
          ) : (
            <Player
              autoplay
              keepLastFrame
              src={`lottie/flow-end-begin-${logoColor}.json`}
              style={{ width: "32px" }}
            />
          )
        ) : (
          <Image src="icons/logo.svg" width={22} height={19} alt="" />
        )}
      </div>
      <div className="flex flex-row text-sm sm:flex-col sm:text-xs leading-4 tracking-wide">
        <span>Smart</span>
        <strong>Business</strong>
      </div>
    </div>
  );
};
