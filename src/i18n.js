import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const arabicData = await fetch('/locales/ar/translation.json').then(
  (response) => response.json(),
);
const deutschData = await fetch('/locales/de/translation.json').then(
  (response) => response.json(),
);
const englishData = await fetch('/locales/en/translation.json').then(
  (response) => response.json(),
);
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    default: 'en',
    resources: {
      en: {
        translation: englishData,
      },
      de: {
        translation: deutschData,
      },
      ar: {
        translation: arabicData,
      },
    },
  });
