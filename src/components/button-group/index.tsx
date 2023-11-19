import * as Button from "@/components/button";
import { TextsProvider } from "@/translation";
import { tv, type VariantProps } from "tailwind-variants";
import Link from "next/link";

const buttonGroup = tv({
  base: "flex flex-col",
  variants: {
    type: {
      prime: "lg:flex-row lg:w-240 lg:gap-2 lg:mb-300 xl:mb-0",
      doubt: "lg:w-236",
    },
  },
  defaultVariants: {
    type: "prime",
  },
});

export interface IButtonWrapper {
  variant?: VariantProps<typeof buttonGroup>;
}

export function ButtonGroup({ variant }: IButtonWrapper) {
  const texts = TextsProvider.get();

  return (
    <div className={buttonGroup(variant)}>
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
  );
}
