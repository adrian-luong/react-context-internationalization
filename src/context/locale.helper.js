export const defaultLocale = 'en'
export const dictionaries = {
  en: () => import("../contents/en.json").then((module) => module.default),
  vi: () => import("../contents/vi.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]?.() ?? dictionaries.en();
