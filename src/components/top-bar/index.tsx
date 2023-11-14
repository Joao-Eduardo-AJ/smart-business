import { TextsProvider } from "@/translation";
import { XIcon } from "../x-icon";

interface ITopbar {
  onClose: () => void;
}

export const Topbar = ({ onClose }: ITopbar) => {
  const texts = TextsProvider.get();
  return (
    <div className="bg-neutral700 text-neutral001 text-sm flex justify-center items-center relative h-74 px-60 py-16 text-center sm:p-0 sm:h-8">
      <p className="sm:h-21">
        {texts.TOP_BAR_CONTENT}{" "}
        <span className="underline underline-offset-2 sm:no-underline">
          {texts.MAKE_PART}
        </span>
      </p>
      <XIcon width={9.5} height={9.5} onClose={onClose} />
    </div>
  );
};
