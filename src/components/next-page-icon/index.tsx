import Image from "next/image";
import { HTMLAttributes } from "react";

interface XIconProps {
  className?: HTMLAttributes<HTMLElement> | string;
}

export const NextPageIcon = ({ className }: XIconProps) => {
  return (
    <div className={`relative h-30 ${className?.toString()}`}>
      <Image
        src="icons/arrow-down.svg"
        alt="arrow down"
        width={16}
        height={28}
        className={`hidden xl:block hover:animate-bounceArrow`}
        loading="eager"
      />
    </div>
  );
};
