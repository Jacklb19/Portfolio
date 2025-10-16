import { Lang, defaultLang } from "./config";
import { Dictionary } from "./types";
import { contentEs } from "./es";
import { contentEn } from "./en";

const dictionaries: Record<Lang, Dictionary> = {
  es: contentEs,
  en: contentEn,
};

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
