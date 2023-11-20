import { TextsProvider } from "@/translation";
import Image from "next/image";

export function AnnualProfit() {
  const texts = TextsProvider.get();

  return (
    <div className="py-4 px-4 bg-white w-110 h-100 flex items-center content-center shadow-sd absolute right-8 bottom-110 sd:right-34 sd:bottom-110 sm:right-142 sm:bottom-90 lg:right-72 lg:bottom-140 lg:w-200 lg:h-180 lg:px-6 lg:py-6 xl:bottom-158 xl:right-142">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="font-semibold">
            <p className="text-sm1 text-neutral500 lg:text-sd1">
              {texts.ANNUAL_PROFIT}
            </p>
            <p className="text-sm2 text-neutral100 lg:text-sd2">
              {texts.EVOLUTION}
            </p>
          </div>
          <Image
            src="icons/download.svg"
            alt=""
            width={20}
            height={24}
            className="w-3 h-4 lg:w-20 lg:h-24"
            loading="lazy"
          />
        </div>
        <Image
          src="assets/dash.svg"
          alt="annual profit"
          width={200}
          height={200}
          className="w-100 h-40 lg:w-200 lg:h-80"
          loading="lazy"
        />
      </div>
    </div>
  );
}
