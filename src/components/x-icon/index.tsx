import Image from "next/image";
import { HTMLAttributes } from "react";

interface XIconProps {
  width: number;
  height: number;
  onClose: () => void;
  className?: HTMLAttributes<HTMLElement> | string;
}

export const XIcon = ({ height, width, onClose, className }: XIconProps) => {
  return (
    <Image
      width={width}
      height={height}
      src="icons/x.svg"
      alt="close"
      className={className?.toString()}
      onClick={onClose}
    />
  );
};
