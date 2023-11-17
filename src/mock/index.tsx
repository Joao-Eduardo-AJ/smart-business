import { TextsProvider } from "@/translation";

const texts = TextsProvider.get();

export const howWeMeth: { item: string; subItem: string }[] = [
  { item: texts.FIRST_STEP, subItem: texts.ABOUT_FIRST_STEP },
  { item: texts.SECOND_STEP, subItem: texts.ABOUT_SECOND_STEP },
  { item: texts.THIRD_STEP, subItem: texts.ABOUT_THIRD_STEP },
  { item: texts.FOURTH_STEP, subItem: texts.ABOUT_FOURTH_STEP },
  { item: texts.LAST_STEP, subItem: texts.ABOUT_LAST_STEP },
];

export const peopleAndNewsInfo: {
  name: string;
  occupation: string;
  avatarSrc: string;
  newsSrc: string;
  newsDate: string;
  newsSubject: string;
  newsParagraph: string;
}[] = [
  {
    name: "Savaah Nguyen",
    occupation: "Autor",
    avatarSrc: "images/user1.svg",
    newsSrc: "images/woman1-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.BUSINESS,
    newsParagraph:
      "Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor",
  },
  {
    name: "Madelyn Carder",
    occupation: "Autor",
    avatarSrc: "images/user2.svg",
    newsSrc: "images/man1-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.INNOVATION,
    newsParagraph: "Nulla in donec in massa egestas Facilisis viverra",
  },
  {
    name: "Adison Bator",
    occupation: "Autor",
    avatarSrc: "images/user3.svg",
    newsSrc: "images/man2-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.BUSINESS,
    newsParagraph: "Scelerisque morbi mattis in vel diam mi. Et nibh porttitor",
  },
  {
    name: "Alena Kenter",
    occupation: "Autor",
    avatarSrc: "images/user4.svg",
    newsSrc: "images/woman2-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.TECHNOLOGY,
    newsParagraph: "Scelerisque morbi mattis in vel diam mi. Et nibh porttitor",
  },
  {
    name: "Johnny Carter",
    occupation: "Autor",
    avatarSrc: "images/user1.svg",
    newsSrc: "images/woman1-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.BUSINESS,
    newsParagraph: "Nulla in donec in massa egestas Facilisis viverra",
  },
  {
    name: "Tom Cruise",
    occupation: "Autor",
    avatarSrc: "images/user3.svg",
    newsSrc: "images/man1-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.INNOVATION,
    newsParagraph: "Nulla in donec in massa egestas Facilisis viverra",
  },
  {
    name: "Hannah Montana",
    occupation: "Autor",
    avatarSrc: "images/user4.svg",
    newsSrc: "images/man2-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.BUSINESS,
    newsParagraph: "Scelerisque morbi mattis in vel diam mi. Et nibh porttitor",
  },
  {
    name: "Scooby Doo",
    occupation: "Autor",
    avatarSrc: "images/user2.svg",
    newsSrc: "images/woman2-news.svg",
    newsDate: texts.OCTOBER + " 2021",
    newsSubject: texts.TECHNOLOGY,
    newsParagraph: "Scelerisque morbi mattis in vel diam mi. Et nibh porttitor",
  },
];

export const frequentlyDoubts: { title: string; content: string }[] = [
  { title: texts.FIRST_DOUBT, content: texts.ACCORDION_CONTENT },
  { title: texts.SECOND_DOUBT, content: texts.ACCORDION_CONTENT },
  { title: texts.THIRD_DOUBT, content: texts.ACCORDION_CONTENT },
  { title: texts.FOURTH_DOUBT, content: texts.ACCORDION_CONTENT },
  { title: texts.LAST_DOUBT, content: texts.ACCORDION_CONTENT },
];

export const doubtCard: {
  iconSrc: string;
  alt: string;
  title: string;
  content: string;
}[] = [
  {
    iconSrc: "icons/doubt.svg",
    alt: "doubts?",
    title: texts.DOUBTS,
    content: texts.SEND_MESSAGE_OUR_TEAM,
  },
  {
    iconSrc: "icons/logo.svg",
    alt: "make part",
    title: texts.BE_PART,
    content: texts.REGISTER_TRANSFORM,
  },
  {
    iconSrc: "icons/whatsapp.svg",
    alt: "call us in whatsapp",
    title: texts.CALL_IN_ZAP,
    content: texts.TALK_WITH_OUR_COMMERCIAL_SECTOR,
  },
];
