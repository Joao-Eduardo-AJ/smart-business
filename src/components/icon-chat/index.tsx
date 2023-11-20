import Image from "next/image";

export const IconChat = () => (
  <div className="rounded-full drop-shadow-md absolute right-158 bottom-214 sd:right-166 sd:bottom-220 sm:right-284 sm:bottom-230 lg:right-328 lg:bottom-352 xl:bottom-410 xl:right-420">
    <Image
      src="icons/chat.svg"
      alt="chat icon"
      width={90}
      height={90}
      className="w-54 h-54 lg:w-90 lg:h-90"
      loading="eager"
    />
  </div>
);
