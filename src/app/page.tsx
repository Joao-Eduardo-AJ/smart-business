"use client";

import Link from "next/link";
import RootLayout from "./layout";
import { Topbar } from "@/components/top-bar";
import { useState } from "react";

const Home = () => {
  const [topbarVisible, setTopbarVisible] = useState(true);

  return (
    <RootLayout>
      <main>
        {topbarVisible && <Topbar onClose={() => setTopbarVisible(false)} />}
        <h1>Home</h1>
        <ul>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </main>
    </RootLayout>
  );
};

export default Home;
