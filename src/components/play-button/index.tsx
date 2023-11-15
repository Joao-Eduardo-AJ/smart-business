import Image from "next/image";

export const PlayButton = ({ pageWidth }: { pageWidth: number }) => (
  <div className="bg-primaryDefault rounded-full h-8 w-8 flex items-center justify-center lg:h-12 lg:w-12 xl:h-14 xl:w-14 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transition duration-500 hover:shadow-play xl:hover:shadow-playXl cursor-pointer">
    <Image
      src="icons/play.svg"
      alt="video"
      width={pageWidth < 985 ? 15 : pageWidth < 1440 ? 26 : 34}
      height={pageWidth < 985 ? 15 : pageWidth < 1440 ? 26 : 34}
      className="bg-primaryDefault rounded-full"
    />
  </div>
);
