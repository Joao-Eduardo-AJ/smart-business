"use client";

import RootLayout from "./layout";
import { Topbar } from "@/components/top-bar";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import * as Button from "@/components/button";
import { TextsProvider } from "@/translation";
import Image from "next/image";
import { Writer } from "@/components/writer";
import { AnnualProfit } from "@/components/annual-profit";
import { IconChat } from "@/components/icon-chat";
import { Metrics } from "@/components/metrics";

const Home = () => {
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const texts = TextsProvider.get();

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <RootLayout>
      {topbarVisible && <Topbar onClose={() => setTopbarVisible(false)} />}
      <header className="flex justify-between items-center px-8 w-full bg-white h-76 sm:bg-neutral001 sm:h-42 sm:mt-40 relative lg:px-116">
        {pageWidth > 560 ? <Logo logoColor="blue" /> : <Logo />}
        <div>
          <button className="absolute right-18 top-4 sm:top-0 md:right-288 sm:right-270 lg:right-380 flex gap-3 items-center h-42 px-16 transition duration-500 hover:bg-neutral002">
            <Image
              src="icons/person.svg"
              alt="register"
              width={20}
              height={20}
            />
            <span className="font-semibold">{texts.ACCESS_BUTTON}</span>
          </button>
          {pageWidth > 560 && (
            <Button.Root variant={{ type: "outlined" }}>
              <span className="font-semibold absolute left-16">
                {texts.REGISTER_BUTTON}
              </span>

              <Button.Icon
                src="icons/arrow-next-white.svg"
                alt="register"
                width={20}
                height={20}
                className="-scale-100 absolute left-226"
              />
            </Button.Root>
          )}
        </div>
      </header>
      <main className="flex flex-col items-center justify-center pt-64 lg:pt-0">
        <article className="relative max-w-screen-sm lg:flex lg:justify-between lg:max-w-none lg:w-full px-32 lg:px-116">
          <div className="lg:w-full">
            <header className="flex flex-col items-center gap-16 lg:items-start lg:w-480 lg:gap-20 lg:mt-84 xl:w-688 xl:h-224">
              <div className="flex items-center gap-3">
                <Image
                  src="icons/world.svg"
                  alt="register"
                  width={28}
                  height={28}
                />
                <p className="font-semibold text-neutral500">
                  {texts.ABOVE_SUBTITLE}
                </p>
              </div>
              <h1 className="text-3.5xl leading-10 text-center h-110 sd:h-80 text-neutral700 lg:text-left lg:text-6xl/tight lg:h-116 xl:text-xl1">
                {texts.MAIN_TITLE}
                <span className="underline underline-offset-0 decoration-primaryDefault text-neutral700 lg:underline-offset-1">
                  <Writer />
                </span>
              </h1>
            </header>
            <p className="text-center text-neutral400 mt-16 mb-40 lg:text-left lg:w-440 xl:text-md1 xl:w-560">
              {texts.BELLOW_SUBTITLE}
            </p>
            <div className="flex flex-col gap-2 lg:flex-row lg:w-220">
              <Button.Root variant={{ type: "contained" }}>
                <span className="font-semibold">
                  {texts.BUSINESS_REGISTER_BUTTON}
                </span>
              </Button.Root>
              <Button.Root variant={{ type: "text" }}>
                <Button.Icon
                  src="icons/phone.svg"
                  alt="talk to us"
                  width={13}
                  height={20}
                />
                <span>{texts.CONTACT_US_BUTTON}</span>
              </Button.Root>
            </div>
          </div>
          <figure className="flex justify-center  ">
            <Image
              src="images/man.svg"
              alt="some happy guy"
              width={pageWidth < 985 ? 420 : pageWidth < 1440 ? 650 : 1400}
              height={pageWidth < 985 ? 420 : pageWidth < 1440 ? 650 : 1400}
              priority
            />
          </figure>
          <AnnualProfit pageWidth={pageWidth} />
          <IconChat pageWidth={pageWidth} />
        </article>
        <section className="relative w-full bg-primaryDefault overflow-hidden px-24 py-72 flex flex-col items-center text-center lg:gap-142 text-white lg:flex-row lg:px-116 lg:text-start">
          <Image
            src="assets/pipe-xl.svg"
            alt="pipe xl"
            width={
              112 /* pageWidth < 985 ? 420 : pageWidth < 1440 ? 650 : 1400 */
            }
            height={
              56 /* pageWidth < 985 ? 420 : pageWidth < 1440 ? 650 : 1400 */
            }
            className="absolute top-0 left-0"
          />
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-4">
              <Image src="icons/quote.svg" alt="quote" width={22} height={18} />
              <p className="text-nm text-center max-w-md lg:text-start lg:max-w-none lg:w-440 lg:text-md1">
                {texts.FEEDBACK_QUOTE}
              </p>
            </div>
            <figure>
              <div className="flex items-center gap-20">
                <Image
                  src="images/savannah.svg"
                  alt="savannah"
                  width={54}
                  height={54}
                  className="bg-auxiliaryYellow rounded-full"
                />
                <div>
                  <p className="text-md font-semibold">Savannah Nguyen</p>
                  <p className="text-sd1">UX Designer | Google</p>
                </div>
              </div>
            </figure>
          </div>
          <div className="flex flex-col items-center mt-56 lg:items-start lg:mt-0">
            <div className="flex flex-col gap-56 lg:flex-row">
              <Metrics number="120" legend={texts.PROJECTS_CARRIED_OUT} />
              <Metrics number="12" legend={texts.BRAZILIAN_OFFICES} />
              <Metrics number="1bi" legend={`${texts.INVOICING} 2021`} />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="assets/pipe.svg"
                alt="retangle"
                width={38}
                height={0}
                className="my-32"
              />
              <p className="text-nm leading-4">{texts.EXPANDING_TERRITORY}</p>
            </div>
          </div>
          <Image
            src="assets/rectangle.svg"
            alt="retangle"
            width={120}
            height={120}
            className="absolute -bottom-80 -right-40 lg:bottom-0 lg:right-0"
          />
        </section>
      </main>
    </RootLayout>
  );
};

export default Home;
