import { Texts as TEXTS_EN_US } from "./yup.texts-en_US";
import { Texts as TEXTS_PT_BR } from "./yup.texts-pt_BR";
import { Texts as TEXTS_ES_ES } from "./yup.texts-es_ES";

export type TextsType = typeof TEXTS_PT_BR;

const map = new Map<string, TextsType>();
map.set("pt", TEXTS_PT_BR);
map.set("pt-BR", TEXTS_PT_BR);

map.set("es", TEXTS_ES_ES);
map.set("es-ES", TEXTS_ES_ES);

map.set("en", TEXTS_EN_US);
map.set("en-US", TEXTS_EN_US);

export const TextsProvider = {
  get(lang = typeof navigator !== "undefined" ? navigator.language : "pt-BR") {
    return map.get(lang) ?? map.get(lang.substring(0, 2)) ?? TEXTS_PT_BR;
  },
};
