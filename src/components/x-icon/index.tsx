import Image from "next/image";

interface XIconProps {
  width: number;
  height: number;
  onClose: () => void;
}

export const XIcon = ({ height, width, onClose }: XIconProps) => {
  return (
    <Image
      width={width}
      height={height}
      src="icons/x.svg"
      alt=""
      className="hidden md:absolute md:right-28 md:block cursor-pointer"
      onClick={onClose}
    ></Image>
  );
};
