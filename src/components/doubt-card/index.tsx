import Image from "next/image";

interface IDoubtCard {
  iconSrc: string;
  alt: string;
  title: string;
  content: string;
}

export const DoubtCard = ({ iconSrc, alt, title, content }: IDoubtCard) => (
  <figure className="flex flex-col items-center justify-center px-64 h-204 w-full bg-neutral001 lg:h-240">
    <Image src={iconSrc} alt={alt} width={42} height={42} className="mb-4" />
    <h4 className="text-neutral700 text-nm">{title}</h4>
    <p className="text-neutral300 text-sd1 leading-5 w-198 lg:w-130 xl:w-198">
      {content}
    </p>
  </figure>
);
