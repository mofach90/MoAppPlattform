import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import arabicData from "../public/locales/ar/translation.json";
import deutschData from "../public/locales/de/translation.json";
import englishData from "../public/locales/en/translation.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: "en",
    default: "en",
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
