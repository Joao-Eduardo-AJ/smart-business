import { TextsProvider } from "@/translation";
import Image from "next/image";

export function LoginGoogle() {
  const texts = TextsProvider.get();
  return (
    <button className="flex items-center justify-center gap-2 py-18 border border-neutral001 bg-neutral001 trasition duration-500 hover:bg-white w-full">
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google logo"
        className="w-6 h-6"
        width={24}
        height={24}
        loading="eager"
      />
      <span className="text-sd1 text-neutral100">
        {texts.LOGIN_WITH_GOOGLE}
      </span>
    </button>
  );
}
