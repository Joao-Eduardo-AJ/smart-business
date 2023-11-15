import Image from "next/image";

export const IconChat = ({ pageWidth }: { pageWidth: number }) => (
  <div className="rounded-full p-1 drop-shadow-md absolute left-120 bottom-174 sd:left-140 sd:bottom-230 sm:left-200 sm:bottom-250 lg:left-500 lg:bottom-10 xl:left-700 xl:bottom-400">
    <Image
      src="icons/chat.svg"
      alt="chat icon"
      width={pageWidth < 985 ? 54 : 90}
      height={pageWidth < 985 ? 54 : 90}
    />
  </div>
);
