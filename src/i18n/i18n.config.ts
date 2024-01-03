import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./translations/fr.json";
import en from "./translations/en.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const i18nInstance = async () => {
  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: "en",
    compatibilityJSON: "v3",
  });

  return i18n;
};

export default i18nInstance();
