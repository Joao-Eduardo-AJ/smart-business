import Image from "next/image";

export const CheckedTopic = ({ text }: { text: string }) => (
  <p className="flex gap-3 text-sd1">
    <Image
      src="icons/check.svg"
      alt="checked topic"
      width={24}
      height={24}
      loading="eager"
    />
    {text}
  </p>
);
