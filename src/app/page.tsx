"use client";

import RootLayout from "./layout";
import { Topbar } from "@/components/top-bar";
import { useState } from "react";
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
import { UserSnack } from "@/components/user-snack";
import { doubtCard, frequentlyDoubts, howWeMeth } from "@/mock";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slides } from "@/components/slides";
import { DoubtAccordion } from "@/components/doubt-accordion";
import { DoubtCard } from "@/components/doubt-card";
import { EmailForm } from "@/components/email-form";
import "@/forms/translationYup";
import Link from "next/link";

const Home = () => {
  const [topbarVisible, setTopbarVisible] = useState(true);
  const texts = TextsProvider.get();

  return (
    <RootLayout>
      {topbarVisible && <Topbar onClose={() => setTopbarVisible(false)} />}
      <header className="flex justify-between items-center px-8 w-full bg-white h-76 sm:bg-neutral001 sm:h-42 sm:mt-40 relative lg:px-116">
        <Logo logoColor="blue">
          <Image
            src="icons/logo.svg"
            width={22}
            height={19}
            alt="logo"
            className="block sm:hidden"
          />
        </Logo>
        <div>
          <Link href="/register">
            <button className="absolute right-18 top-4 sm:top-0 md:right-288 sm:right-270 lg:right-380 flex gap-3 items-center h-42 px-16 transition duration-500 hover:bg-neutral002">
              <Image
                src="icons/person.svg"
                alt="register"
                width={20}
                height={20}
              />
              <span className="font-semibold">{texts.ACCESS_BUTTON}</span>
            </button>
          </Link>
          <Link href="/register">
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
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center pt-64 lg:pt-0 -z-100 overflow-x-hidden">
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
            <div className="flex flex-col lg:flex-row lg:w-240 lg:gap-2 lg:mb-300 xl:mb-0">
              <Link href="/register">
                <Button.Root variant={{ type: "contained" }}>
                  <span className="font-semibold text-md">
                    {texts.BUSINESS_REGISTER_BUTTON}
                  </span>
                </Button.Root>
              </Link>
              <Link href="https://w.app/k6YEDn" target="_blank">
                <Button.Root>
                  <Button.Icon
                    src="icons/phone.svg"
                    alt="talk to us"
                    width={13}
                    height={20}
                  />
                  <span className="text-neutral500 text-nm">
                    {texts.CONTACT_US_BUTTON}
                  </span>
                </Button.Root>
              </Link>
            </div>
            <NextPageIcon className="mt-70 mb-130" />
          </div>
          <Image
            src="images/man.svg"
            alt="some happy guy"
            width={736}
            height={736}
            className="w-420 h-420 lg:w-660 lg:h-660 xl:w-736 xl:h-736 lg:absolute lg:right-40 lg:bottom-0 xl:absolute xl:right-90 xl:bottom-0 -z-10"
            priority
          />
          <AnnualProfit />
          <IconChat />
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
            <UserSnack
              name="Savannah Nguyen"
              occupation="UX Designer | Google"
              nameTextSize="text-md"
              className="bg-auxiliaryYellow"
              avatarAlt="savannah"
              avatarSize={54}
              avatarSrc="images/user3.svg"
            />
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
            <NextPageIcon className="mt-254" />
          </div>
          <div className="flex flex-col gap-48 items-center lg:w-560 xl:w-696">
            <figure className="relative">
              <Image
                src="images/video-group.svg"
                alt="video"
                width={696}
                height={376}
                className="shadow-video w-328 h-auto lg:w-560 xl:w-696 lg:shadow-videoXl"
              />
              <PlayButton />
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
          <WomanPhone className="lg:absolute lg: bottom-120 lg:left-282 xl:left-320" />
        </Article>
        <Clients />
        <Article>
          <HeaderArticle>
            <TitleArticle>{texts.UNDERSTAND_HOW}</TitleArticle>
            <SubTitleArticle>{texts.HOW_WE_APPLY_OUR_METH}</SubTitleArticle>
          </HeaderArticle>
          <ul className="flex flex-col gap-46 relative xl:my-60 xl:mr-34">
            {howWeMeth.map((el, index) => (
              <HowItemList
                key={index}
                item={el.item}
                subItem={el.subItem}
                isLastItem={howWeMeth.length === index + 1}
                index={index + 1}
              />
            ))}
            <Image
              src="assets/dotted-pipe.svg"
              alt="dotted pipe"
              width={2.5}
              height={322}
              className="absolute w-0.2 xl:w-0.25 top-0 left-21 -z-10 xl:left-30"
            />
          </ul>
          <figure className="flex items-end gap-4 overflow-hidden lg:absolute lg:bottom-120 lg:left-112 xl:left-10">
            <Image
              src="images/sales.svg"
              alt="sales"
              width={176}
              height={196}
              className="shadow-sales w-98 h-108 lg:w-128 lg:h-138 xl:w-176 xl:h-196"
            />
            <Image
              src="images/device.svg"
              alt="device"
              width={354}
              height={344}
              className="bg-neutral001 w-278 h-254 lg:w-240 lg:h-220 xl:w-352 xl:h-344"
            />
          </figure>
        </Article>
        <Article variant={{ type: "neutral" }}>
          <HeaderArticle>
            <TitleArticle>{texts.OUR_BLOG}</TitleArticle>
            <SubTitleArticle>{texts.WORDL_TECH_NEWS}</SubTitleArticle>
          </HeaderArticle>
          <Slides />
          <div className="-mt-4 lg:-mt-0 lg: lg:absolute lg:top-152 lg:right-112 xl:top-220 xl:right-480">
            <Button.Root>
              <span className="text-neutral700 underline underline-offset-2 font-semibold text-md">
                {texts.KNOW_OUR_BLOG}
              </span>
              <Button.Icon
                src="icons/arrow-next.svg"
                alt="know our blog"
                width={16}
                height={12}
              />
            </Button.Root>
          </div>
        </Article>
        <Article>
          <div className="flex flex-col items-center gap-40 w-full lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-40 xl:mb-420">
              <header className="flex flex-col gap-4 items-center lg:items-start lg:w-412">
                <TitleArticle>{texts.CLEAR_DOUBTS}</TitleArticle>
                <SubTitleArticle>{texts.FREQUENTLY_QUESTIONS}</SubTitleArticle>
                <p className="text-nm text-neutral500 lg:text-md1 lg:text-left">
                  {texts.DOUBTS_SUBTITLE}
                </p>
              </header>
              <div className="w-full lg:w-236">
                <Link href="/register">
                  <Button.Root variant={{ type: "contained" }}>
                    <span className="font-semibold text-md">
                      {texts.BUSINESS_REGISTER_BUTTON}
                    </span>
                  </Button.Root>
                </Link>
                <Link href="https://w.app/k6YEDn" target="_blank">
                  <Button.Root>
                    <Button.Icon
                      src="icons/phone.svg"
                      alt="talk to us"
                      width={13}
                      height={20}
                    />
                    <span className="text-neutral500 text-nm">
                      {texts.CONTACT_US_BUTTON}
                    </span>
                  </Button.Root>
                </Link>
              </div>
            </div>
            <div className="-mt-32 lg:-mt-0 lg:mb-276 xl:mb-0">
              {frequentlyDoubts.map((el, index) => (
                <DoubtAccordion
                  key={index}
                  index={`0${index + 1}`}
                  title={el.title}
                  content={el.content}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-24 lg:flex-row lg:absolute lg:bottom-120 doubtCards">
            {doubtCard.map((el, index) => (
              <DoubtCard
                key={index}
                iconSrc={el.iconSrc}
                alt={el.alt}
                title={el.title}
                content={el.content}
                href={el.href}
                target={el.target}
              />
            ))}
          </div>
        </Article>
        <Article variant={{ type: "dark" }}>
          <HeaderArticle variant={{ type: "dark" }}>
            <TitleArticle>{texts.NEWSLETTER}</TitleArticle>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-md2/7 w-260 lg:w-full lg:text-3.5xl/9 xl:text-6xl/tight xl:text-lg1">
                {texts.STAY_UTD}
              </h3>
              <p className="text-sd1 lead lg:text-nm xl:w-500">
                {texts.JOIN_US}
              </p>
            </div>
          </HeaderArticle>
          <EmailForm />
          <Image
            src="images/cube-left.svg"
            alt=""
            width={1029}
            height={571}
            className="absolute top-0 left-0 -z-20 w-1030 xl:w-1440 xl:-top-380"
          />
          <Image
            src="images/cube-right.svg"
            alt=""
            width={1029}
            height={571}
            className="absolute top-52 right-0 -z-20 w-1030 xl:w-1440 xl:-top-200"
          />
        </Article>
      </main>
      <footer className="flex flex-col gap-32 py-64 items-center lg:flex-row lg:justify-between lg:px-112">
        <div className="flex flex-col gap-24 lg:flex-row lg:justify-between xl:gap-80">
          <Logo logoColor="blue" variant={{ type: "footer" }}>
            <Image
              src="icons/logo.svg"
              width={22}
              height={19}
              alt="logo"
              className="block sm:hidden"
            />
          </Logo>
          <p className="text-neutral050 w-178 text-sd1 text-center lg:w-full lg:text-neutral400 lg:flex lg:items-center">
            {texts.TM}
          </p>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/joaoeduardoaj/"
            target="_blank"
            className="flex gap-16"
          >
            <Image
              src="icons/twitter.svg"
              width={32}
              height={32}
              alt="twitter"
              className="transition duration-300 hover:scale-150"
            />
            <Image
              src="icons/linkedin.svg"
              width={32}
              height={32}
              alt="twitter"
              className="transition duration-300 hover:scale-150"
            />
            <Image
              src="icons/instagram.svg"
              width={32}
              height={32}
              alt="twitter"
              className="transition duration-300 hover:scale-150"
            />
            <Image
              src="icons/facebook.svg"
              width={32}
              height={32}
              alt="twitter"
              className="transition duration-300 hover:scale-150"
            />
          </Link>
        </div>
        <div className="flex items-center text-neutral050 text-sd1 lg:text-neutral400 lg:text-center gap-1">
          <p>{`${texts.DB}`}</p>
          <span className="underline underline-offset-2 transition-all duration-300 cursor-pointer hover:text-primaryDefault">
            <Link href="https://insany.design/" target="_blank">
              {texts.INSANY_DESIGN}
            </Link>
          </span>
        </div>
      </footer>
    </RootLayout>
  );
};

export default Home;
