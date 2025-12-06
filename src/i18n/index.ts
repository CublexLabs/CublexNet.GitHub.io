import en from './locales/en';
import tr from './locales/tr';
import { Locale } from './config';

const dictionaries = {
  en,
  tr,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
