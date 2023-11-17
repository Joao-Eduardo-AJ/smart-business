import Image from "next/image";

interface IHowItemList {
  index: number;
  item: string;
  subItem: string;
  isLastItem?: boolean;
}

export const HowItemList = ({
  index,
  item,
  subItem,
  isLastItem,
}: IHowItemList) => (
  <li className="flex items-center gap-16">
    {isLastItem ? (
      <Image
        src="icons/rounded-star.svg"
        alt="last item"
        width={64}
        height={64}
        className="w-46 h-46 xl:w-64 xl:h-64"
      />
    ) : (
      <span className="border bg-white border-neutral002 rounded-full h-46 w-46 text-primaryDefault flex items-center justify-center xl:h-64 xl:w-64 xl:text-md1">
        {index}
      </span>
    )}
    <div className="flex flex-col text-left overflow-hidden w-256 xl:w-344">
      <p className="text-nm text-neutral700 xl:text-md1">{item}</p>
      <span className="text-sd1 text-neutral300 xl:text-md">{subItem}</span>
    </div>
  </li>
);
