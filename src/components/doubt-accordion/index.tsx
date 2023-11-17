import Image from "next/image";
import { useState } from "react";

interface IDoubtAccordion {
  index: string;
  title: string;
  content: string;
}

export function DoubtAccordion({ index, title, content }: IDoubtAccordion) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="py-26 border-b border-neutral002"
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        className={`flex gap-24 w-328 overflow-hidden transition-all duration-500 relative lg:w-480 xl:w-696 ${
          expanded ? "h-202 lg:h-188 xl:h-112" : "h-48 lg:h-58 xl:h-38"
        }`}
      >
        <span className="text-md2 text-primaryDefault cursor-default">
          {index}
        </span>
        <div className="flex flex-col gap-3 text-start w-236 h-full lg:w-380 xl:w-640 xl:pt-1">
          <h4 className="text-nm lg:text-md1 text-neutral200">{title}</h4>
          <p className="text-sd1 lg:text-nm text-neutral400">{content}</p>
        </div>

        <Image
          src="icons/plus.svg"
          alt="expand more"
          width={16}
          height={16}
          className={`transition-all duration-300 top-2 right-0 absolute lg:top-4 xl:top-3 ${
            expanded && "p-2"
          }`}
        />

        <Image
          src="icons/less.svg"
          alt="expand less"
          width={16}
          height={1}
          className={`transition-all duration-300 top-3 right-0 absolute lg:top-4 xl:top-4 ${
            !expanded && "p-2"
          }`}
        />
      </div>
    </div>
  );
}
