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
import { CheckedTopic } from "@/components/checked-topic";
import { PlayButton } from "@/components/play-button";
import { WomanPhone } from "@/components/woman-phone";
import { NextPageIcon } from "@/components/next-page-icon";
import { Clients } from "@/components/clients-section";
import { SubTitleArticle } from "@/components/article-subtitle";
import { TitleArticle } from "@/components/article-title";
import { HeaderArticle } from "@/components/article-header";
import { HowItemList } from "@/components/how-item-list";
import { Article } from "@/components/article";

const Home = () => {
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const texts = TextsProvider.get();
  const howWeTech: { item: string; subItem: string }[] = [
    { item: texts.FIRST_STEP, subItem: texts.ABOUT_FIRST_STEP },
    { item: texts.SECOND_STEP, subItem: texts.ABOUT_SECOND_STEP },
    { item: texts.THIRD_STEP, subItem: texts.ABOUT_THIRD_STEP },
    { item: texts.FOURTH_STEP, subItem: texts.ABOUT_FOURTH_STEP },
    { item: texts.LAST_STEP, subItem: texts.ABOUT_LAST_STEP },
  ];

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
            <header className="flex flex-col items-center gap-16 lg:items-start lg:w-480 lg:gap-22 lg:mt-102 xl:w-688 xl:h-224">
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
            <p className="text-center text-neutral400 mt-16 mb-40 lg:text-left lg:mt-22 lg:mb-44 lg:w-440 xl:text-md1 xl:w-560">
              {texts.BELLOW_SUBTITLE}
            </p>
            <div className="flex flex-col gap-2 lg:flex-row lg:w-220 lg:mb-300 xl:mb-0">
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
            {pageWidth > 1440 && <NextPageIcon className="mt-70 mb-130" />}
          </div>
          <Image
            src="images/man.svg"
            alt="some happy guy"
            width={pageWidth < 985 ? 420 : 660}
            height={pageWidth < 985 ? 420 : 660}
            className="lg:absolute lg:right-40 lg:bottom-0 xl:absolute xl:right-90 xl:bottom-0 -z-10"
            priority
          />
          <AnnualProfit pageWidth={pageWidth} />
          <IconChat pageWidth={pageWidth} />
        </article>
        <section className="relative w-full bg-primaryDefault overflow-hidden px-24 py-74 flex flex-col items-center text-center xl:gap-142 text-white xl:flex-row xl:px-116 xl:text-start">
          <Image
            src="assets/pipe-xl.svg"
            alt="pipe xl"
            width={112}
            height={56}
            className="absolute top-0 left-0"
          />
          <div className="flex flex-col items-center gap-4 xl:items-start">
            <div className="flex flex-col items-center gap-2 xl:items-start xl:gap-4 xl:pt-2">
              <Image src="icons/quote.svg" alt="quote" width={22} height={18} />
              <p className="text-nm text-center max-w-md xl:text-start xl:max-w-none xl:w-440 xl:text-md1">
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
          <div className="flex flex-col items-center mt-56 xl:items-start xl:mt-0">
            <div className="flex flex-col gap-56 lg:flex-row">
              <Metrics number="120" legend={texts.PROJECTS_CARRIED_OUT} />
              <Metrics number="12" legend={texts.BRAZILIAN_OFFICES} />
              <Metrics number="1bi" legend={`${texts.INVOICING} 2021`} />
            </div>
            <div className="flex flex-col items-center xl:items-start">
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
        <Article>
          <div>
            <HeaderArticle>
              <TitleArticle>{texts.ABOUT_COMPANY}</TitleArticle>
              <SubTitleArticle>{texts.CREATING_INNOATING}</SubTitleArticle>
            </HeaderArticle>
            <div className="flex flex-col gap-24 mt-40 lg:w-max">
              <CheckedTopic text={texts.FIRST_TOPIC} />
              <CheckedTopic text={texts.SECOND_TOPIC} />
              <CheckedTopic text={texts.THIRD_TOPIC} />
            </div>
            {pageWidth > 1440 && <NextPageIcon className="mt-254" />}
          </div>
          <div className="flex flex-col gap-48 items-center lg:w-560 xl:w-696">
            <figure className="relative">
              <Image
                src="images/video-group.svg"
                alt="video"
                width={pageWidth < 985 ? 312 : 1000}
                height={pageWidth < 985 ? 176 : 1000}
                className="shadow-video lg:shadow-videoXl"
              />
              <PlayButton pageWidth={pageWidth} />
            </figure>
            <div className="flex flex-col gap-28 items-center lg:text-start w-328 lg:w-full lg:text-md">
              <p>
                Suscipit pellentesque praesent auctor molestie massa nunc vitae.
                Felis eget est ut gravida in maecenas. Tempus in in in congue
                proin.
              </p>
              <p>
                Sem in feugiat id dui bibendum. Nunc ut mauris congue amet.
                Facilisis amet enim pellentesque eu suspendisse diam sit.
                Bibendum pharetra malesuada aliquam hendrerit consectetur neque.{" "}
                <span className="font-semibold">
                  Gravida rhoncus enim a sodales
                </span>{" "}
                feugiat senectus aenean felis. Vitae purus, amet semper
                pulvinar.
              </p>
            </div>
          </div>
          <WomanPhone
            pageWidth={pageWidth}
            className="lg:absolute lg: bottom-120 lg:left-282 xl:left-320"
          />
        </Article>
        <Clients pageWidth={pageWidth} />
        <Article>
          <HeaderArticle>
            <TitleArticle>{texts.UNDERSTAND_HOW}</TitleArticle>
            <SubTitleArticle>{texts.HOW_WE_APPLY_OUR_TECH}</SubTitleArticle>
          </HeaderArticle>
          <ul className="flex flex-col gap-46 relative xl:my-60 xl:mr-34">
            {howWeTech.map((el, index) => (
              <HowItemList
                key={index}
                item={el.item}
                subItem={el.subItem}
                isLastItem={howWeTech.length === index + 1}
                index={index + 1}
                pageWidth={pageWidth}
              />
            ))}
            <Image
              src="assets/dotted-pipe.svg"
              alt="dotted pipe"
              width={pageWidth < 1440 ? 2 : 2.5}
              height={322}
              className="absolute top-0 left-21 -z-10 xl:left-30"
            />
          </ul>
          <figure className="flex items-end gap-4 overflow-hidden lg:absolute lg:bottom-120 lg:left-112 xl:left-10">
            <Image
              src="images/sales.svg"
              alt="sales"
              width={pageWidth < 985 ? 97 : pageWidth < 1440 ? 127 : 176}
              height={pageWidth < 985 ? 107 : pageWidth < 1440 ? 137 : 195}
              className="shadow-sales"
            />
            <Image
              src="images/device.svg"
              alt="device"
              width={pageWidth < 985 ? 272 : pageWidth < 1440 ? 240 : 354}
              height={pageWidth < 985 ? 254 : pageWidth < 1440 ? 220 : 446}
              className="bg-neutral001"
            />
          </figure>
        </Article>
      </main>
    </RootLayout>
  );
};

export default Home;
