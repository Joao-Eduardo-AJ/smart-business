import Image from "next/image";
import { HTMLAttributes } from "react";

type IWomanPhone = HTMLAttributes<HTMLDivElement>;

export const WomanPhone = ({ ...props }: IWomanPhone) => (
  <div {...props}>
    <figure className="relative">
      <Image
        src="images/woman.svg"
        alt="woman"
        width={164}
        height={255}
        className="w-164 h-224 lg:w-144 lg:h-204 xl:w-164 xl:h-244"
        loading="eager"
      />
      <Image
        src="assets/woman-background.svg"
        alt="woman background"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 -z-10 w-176 h-176 lg:w-156 lg:h-156 xl:w-200 xl:h-200"
        loading="eager"
      />
    </figure>
  </div>
);
