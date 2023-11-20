import Image from "next/image";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface IDoubtCard {
  iconSrc: string;
  alt: string;
  title: string;
  content: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export const DoubtCard = ({
  iconSrc,
  alt,
  title,
  content,
  href,
  target,
}: IDoubtCard) => (
  <figure className="w-full bg-neutral001 border border-neutral001 transition duration-700 hover:bg-white ">
    <Link
      href={href}
      target={target}
      className="flex flex-col items-center justify-center px-64 h-204 lg:h-240"
    >
      <Image
        src={iconSrc}
        alt={alt}
        width={42}
        height={42}
        className="mb-4"
        loading="lazy"
      />
      <h4 className="text-neutral700 text-nm">{title}</h4>
      <p className="text-neutral300 text-sd1 leading-5 w-198 lg:w-130 xl:w-full">
        {content}
      </p>
    </Link>
  </figure>
);
