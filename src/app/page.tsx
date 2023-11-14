"use client";

import RootLayout from "./layout";
import { Topbar } from "@/components/top-bar";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import "@lottiefiles/lottie-player";
import Image from "next/image";

const Home = () => {
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);

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
      <header>{pageWidth > 560 ? <Logo logoColor="blue" /> : <Logo />}</header>

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
