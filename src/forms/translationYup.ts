import { setLocale } from "yup";
import { TextsProvider } from "@/translation/yup";

const texts = TextsProvider.get();

setLocale({
  mixed: {
    default: texts.MIXED_DEFAULT,
    required: texts.MIXED_REQUIRED,
  },
  string: {
    email: () => texts.STRING_EMAIL,
    max: ({ max }) => `${texts.STRING_MAX} ${max} ${texts.CHARACTERS}`,
    min: ({ min }) => `${texts.STRING_MIN} ${min} ${texts.CHARACTERS}`,
    length: ({ length }) => `${texts.STRING_MAX} ${length} ${texts.CHARACTERS}`,
    matches: () => `${texts.MATCHES}`,
  },
  date: {
    max: ({ max }) => `${texts.DATE_MAX} ${max}`,
    min: ({ min }) => `${texts.DATE_MIN} ${min}`,
  },
  number: {
    integer: () => texts.NUMBER_INTEGER,
    negative: () => texts.NUMBER_NEGATIVE,
    positive: () => texts.NUMBER_POSITIVE,
    moreThan: ({ more }) => `${texts.NUMBER_BIGGER_THAN} ${more}`,
    lessThan: ({ less }) => `${texts.NUMBER_SMALLER_THAN} ${less}`,
    min: ({ min }) => `${texts.NUMBER_MIN} ${min}  ${texts.CHARACTERS}`,
    max: ({ max }) => `${texts.NUMBER_MAX}  ${max}  ${texts.CHARACTERS}`,
  },
  boolean: {},
  object: {},
  array: {},
});
