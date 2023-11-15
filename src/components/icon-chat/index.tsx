import Image from "next/image";

export const IconChat = ({ pageWidth }: { pageWidth: number }) => (
  <div className="rounded-full drop-shadow-md absolute right-158 bottom-166 sd:right-166 sd:bottom-174 sm:right-284 sm:bottom-250 lg:right-344 lg:bottom-400 xl:right-400 xl:bottom-400">
    <Image
      src="icons/chat.svg"
      alt="chat icon"
      width={pageWidth < 985 ? 54 : 90}
      height={pageWidth < 985 ? 54 : 90}
    />
  </div>
);
