import { RecoverPasswordForm } from "@/forms/RecoverPasswordForm";
import { TextsProvider } from "@/translation";
import Image from "next/image";

interface IRecoverPasswordModal {
  open: boolean;
  onClose: () => void;
}

export function RecoverPasswordModal({ open, onClose }: IRecoverPasswordModal) {
  const texts = TextsProvider.get();

  return (
    <>
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute items-center justify-center top-0 right-0 w-screen h-screen bg-neutral800/60 z-30`}
        onClick={() => onClose()}
      />
      <div
        className={`${
          open ? "bottom-1/2 translate-y-1/2" : "-bottom-500"
        } absolute right-1/2 translate-x-1/2 transition-all duration-500 ease-in-out mx-auto flex items-center sd:items-start md:w-742 lg:flex lg:h-460 z-50`}
      >
        <aside className="hidden lg:flex w-340 bg-primaryDefault rounded-l-md">
          <Image
            src="assets/forgotten-group.svg"
            alt="rcover password aside"
            width={224}
            height={460}
            className="rounded-l-md"
            loading="lazy"
          />
        </aside>
        <div className="px-24 py-24 flex flex-col gap-16 md:px-32 md:pt-40 md:pb-50 lg:px-50 lg:pt-80 lg:pb-100 relative md:w-full bg-white rounded-r-md">
          <Image
            src="icons/x.svg"
            alt="close modal"
            width={14}
            height={14}
            className="absolute cursor-pointer right-24 top-34 md:right-48 md:top-44"
            onClick={() => onClose()}
            loading="eager"
          />
          <div>
            <p className="text-md2 font-semibold lg:text-3.5xl">
              {texts.FORGOTTEN_PASSWORD}
            </p>
            <p className="text-nm text-neutral050 w-280 sm:w-374 ">
              {texts.RECOVERY_INSTRUCTION}
            </p>
          </div>
          <RecoverPasswordForm />
        </div>
      </div>
    </>
  );
}
