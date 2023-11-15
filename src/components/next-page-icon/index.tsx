import Image from "next/image";
import { HTMLAttributes } from "react";

interface XIconProps {
  className?: HTMLAttributes<HTMLElement> | string;
}

export const NextPageIcon = ({ className }: XIconProps) => {
  return (
    <Image
      src="icons/arrow-down.svg"
      alt="arrow down"
      width={16}
      height={28}
      className={className?.toString()}
    />
  );
};
