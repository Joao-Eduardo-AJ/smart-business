import { TextsProvider } from "@/translation";
import Image from "next/image";

export function AnnualProfit({ pageWidth }: { pageWidth: number }) {
  const texts = TextsProvider.get();

  return (
    <div className="py-4 px-4 bg-white w-110 h-100 flex items-center content-center shadow-sd absolute right-0 bottom-62 sd:right-8 sd:bottom-110 sm:right-100 sm:bottom-110 lg:right-64 lg:bottom-0 lg:w-200 lg:h-180 lg:translate-y-190 lg:px-6 lg:py-6 xl:bottom-344 xl:right-150">
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
            width={pageWidth < 985 ? 13 : 20}
            height={pageWidth < 985 ? 16 : 24}
          />
        </div>
        <Image
          src="assets/dash.svg"
          alt="annual profit"
          width={pageWidth < 985 ? 100 : 200}
          height={pageWidth < 985 ? 100 : 200}
        />
      </div>
    </div>
  );
}
