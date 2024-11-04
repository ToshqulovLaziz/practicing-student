import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import { store } from "./redux";
import uzTranslation from "../public/locales/uz.json";
import enTranslation from "../public/locales/en.json";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: store.getState().language.language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
    },
  });
  store.subscribe(() => {
    const language = store.getState().language.language;
    i18n.changeLanguage(language); 
  });

export default i18n;
