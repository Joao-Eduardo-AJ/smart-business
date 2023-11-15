import Image from "next/image";
import { HTMLAttributes } from "react";

type IWomanPhone = HTMLAttributes<HTMLDivElement> & {
  pageWidth: number;
};

export const WomanPhone = ({ pageWidth, ...props }: IWomanPhone) => (
  <div {...props}>
    <figure className="relative">
      <Image
        src="images/woman.svg"
        alt="woman"
        width={pageWidth < 985 ? 164 : pageWidth < 1440 ? 144 : 164}
        height={pageWidth < 985 ? 225 : pageWidth < 1440 ? 205 : 255}
      />
      <Image
        src="assets/woman-background.svg"
        alt="woman background"
        width={pageWidth < 985 ? 176 : pageWidth < 1440 ? 156 : 200}
        height={pageWidth < 985 ? 176 : pageWidth < 1440 ? 156 : 200}
        className="absolute bottom-0 right-0 -z-10"
      />
    </figure>
  </div>
);
