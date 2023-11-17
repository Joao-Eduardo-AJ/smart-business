import { HTMLAttributes } from "react";
import { UserSnack } from "../user-snack";
import Image from "next/image";

type INewsCard = HTMLAttributes<HTMLElement> & {
  newsPhotoSrc: string;
  newsSubject: string;
  newsDate: string;
  newsParagraph: string;

  nameAuthor: string;
  avatarSrc: string;
};

export const NewsCard = ({
  newsPhotoSrc,
  newsSubject,
  newsDate,
  newsParagraph,
  nameAuthor,
  avatarSrc,
  ...props
}: INewsCard) => (
  <div {...props} className="flex flex-col gap-24 w-272">
    <figure className="w-272">
      <Image src={newsPhotoSrc} alt={newsSubject} width={280} height={340} />
    </figure>
    <div className="flex flex-col gap-3">
      <div className="flex gap-4">
        <span className="text-primaryDefault text-nm font-semibold">
          {newsSubject}
        </span>
        <span className="text-neutral300 text-nm">{newsDate}</span>
      </div>
      <p className="text-neutral700 text-md1 text-left">{newsParagraph}</p>
    </div>
    <UserSnack
      name={nameAuthor}
      occupation="Autor"
      avatarSrc={avatarSrc}
      avatarAlt="user avatar"
      avatarSize={48}
      className="bg-neutral002"
    />
  </div>
);
