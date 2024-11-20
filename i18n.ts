// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Speech Reader",
      select_language: "Select Language",
      // Add more keys as needed
    },
  },
  de: {
    translation: {
      title: "Sprachleser",
      select_language: "Sprache wählen",
      // Add more keys as needed
    },
  },
  ar: {
    translation: {
      title: "قارئ الكلام",
      select_language: "اختيار اللغة",
      // Add more keys as needed
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
