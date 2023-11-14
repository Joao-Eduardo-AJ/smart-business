"use client";

import RootLayout from "./layout";
import { Topbar } from "@/components/top-bar";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import * as Button from "@/components/button";
import { TextsProvider } from "@/translation";

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
          <Button.Root variant={{ type: "text" }}>
            <Button.Icon
              src="icons/person.svg"
              alt="register"
              width={20}
              height={20}
            />
            <span className="font-semibold">{texts.ACCESS_BUTTON}</span>
          </Button.Root>
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
                className="-scale-100 absolute left-200"
              />
            </Button.Root>
          )}
        </div>
      </header>

      {/*  <h1>Home</h1>
        <ul>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul> */}
    </RootLayout>
  );
};

export default Home;
