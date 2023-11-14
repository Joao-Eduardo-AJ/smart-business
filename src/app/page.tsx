"use client";

import RootLayout from "./layout";
import { Topbar } from "@/components/top-bar";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import * as Button from "@/components/button";
import { TextsProvider } from "@/translation";
import Image from "next/image";
import { Writer } from "@/components/writer";

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
      <header className="flex justify-between items-center px-6 w-full bg-white h-76 sm:bg-neutral001 sm:h-42 sm:mt-40 relative">
        {pageWidth > 560 ? <Logo logoColor="blue" /> : <Logo />}
        <div>
          <button className="absolute right-16 top-4 sm:top-0 md:right-288 sm:right-270 flex gap-3 items-center h-42 px-16 transition duration-500 hover:bg-neutral002">
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
      <main className="flex flex-col items-center justify-center py-62 px-32">
        <article>
          <header className="flex flex-col items-center gap-16">
            <div className="flex items-center gap-3">
              <Image
                src="icons/world.svg"
                alt="register"
                width={32}
                height={32}
              />
              <p className="font-semibold text-neutral500">
                {texts.ABOVE_SUBTITLE}
              </p>
            </div>
            <h1 className="text-3.5xl leading-10 text-center text-neutral700">
              {texts.MAIN_TITLE}
              <span className="underline underline-offset-0 decoration-primaryDefault text-neutral700">
                <Writer />
              </span>
            </h1>
          </header>
          <p className="text-center text-neutral400 mt-16 mb-40">
            {texts.BELLOW_SUBTITLE}
          </p>
          <div className="flex flex-col gap-2">
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
              <span className="font-semibold">{texts.CONTACT_US_BUTTON}</span>
            </Button.Root>
          </div>
          <figure>
            <Image
              src="images/man.svg"
              alt="some happy guy"
              width={375}
              height={375}
            />
          </figure>
        </article>
      </main>
    </RootLayout>
  );
};

export default Home;
