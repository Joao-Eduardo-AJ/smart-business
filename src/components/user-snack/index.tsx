import Image from "next/image";
import { HTMLAttributes } from "react";

interface IUserSnack {
  avatarSrc: string;
  avatarAlt: string;
  avatarSize: number;
  className?: HTMLAttributes<HTMLParagraphElement> | string;

  name: string;
  occupation: string;

  nameTextSize?: "text-md" | "text-nm";
}

export const UserSnack = ({
  name,
  occupation,
  nameTextSize,
  avatarAlt,
  avatarSrc,
  className,
  avatarSize,
}: IUserSnack) => (
  <figure>
    <div className="flex items-center gap-20">
      <Image
        src={avatarSrc}
        alt={avatarAlt}
        width={avatarSize}
        height={avatarSize}
        className={`rounded-full ${className}`}
      />
      <div>
        <p className={`font-semibold ${nameTextSize || "text-nm"}`}>{name}</p>
        <p className="text-sd1 text-left">{occupation}</p>
      </div>
    </div>
  </figure>
);
