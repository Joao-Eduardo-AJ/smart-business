"use client";

import Link from "next/link";
import RootLayout from "../layout";
import { TextsProvider } from "@/translation";
import { MainForm } from "@/forms/MainForm";
import Image from "next/image";
import "@/forms/translationYup";
import { LoginGoogle } from "@/forms/LoginGoogle";
import { useState } from "react";
import { AnnualProfit, Button, Logo, RecoverPasswordModal } from "@/components";
const Register = () => {
  const [recoverPasswordModalVisible, setRecoverPasswordModalVisible] =
    useState(false);
  const texts = TextsProvider.get();

  return (
    <RootLayout pageRegister>
      <main className="bg-white h-screen text-neutral050 text-sd1 lg:flex overflow-hidden">
        <aside className="hidden bg-primaryDefault lg:flex flex-col gap-62 pt-88 lg:px-32 xl:px-88 w-528 relative">
          <Logo logoColor="white" />
          <p className="text-white text-md2 xl:text-3.5xl w-328">
            {texts.ASIDE_TITLE}{" "}
            <span className="font-semibold">{texts.SMART_COMPANY}</span>
          </p>
          <Image
            src="images/woman2.svg"
            alt=""
            width={284}
            height={665}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            priority
          />
          <Image
            src="assets/graph.svg"
            alt=""
            width={439}
            height={341}
            className="absolute bottom-62 left-0 w-344 xl:w-440"
            loading="eager"
          />
          <div className="z-20 absolute -right-18 -bottom-80 xl:-right-94">
            <AnnualProfit />
          </div>
        </aside>
        <div className="w-full px-32 pt-2 lg:pt-32 xl:pt-72 lg:px-90 xl:px-216">
          <nav className="w-68 lg:mb-40">
            <Link href="/">
              <Button.Root>
                <Button.Icon
                  src="icons/arrow-previous.svg"
                  alt="back"
                  width={16}
                  height={16}
                />
                <span className="font-semibold text-neutral500 text-sd1">
                  {texts.BACK}
                </span>
              </Button.Root>
            </Link>
          </nav>
          <MainForm
            onClickForgottenPass={() => setRecoverPasswordModalVisible(true)}
          />
          <div className="mt-32">
            <LoginGoogle />
          </div>
          <div className="flex text-sd1 gap-1 items-center mt-32">
            <p>{texts.DONT_HAVE_ACCOUNT}</p>
            <strong className="text-neutral100 underline cursor-pointer transition duration-500 hover:text-primaryDefault">
              {texts.SUBSCRIBE}
            </strong>
          </div>
        </div>
      </main>
      <RecoverPasswordModal
        open={recoverPasswordModalVisible}
        onClose={() => setRecoverPasswordModalVisible(false)}
      />
    </RootLayout>
  );
};

export default Register;
