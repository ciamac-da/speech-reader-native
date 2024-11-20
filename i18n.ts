import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Speech Reader",
      select_language: "Select Language",
      cards: {
        love: "I love you",
        thirsty: "I'm Thirsty",
        hungry: "I'm Hungry",
        happy: "I feel Happy",
        sad: "I feel Sad",
        scared: "I'm Scared",
        hurt: "I'm Hurt",
        tired: "I'm Tired",
        angry: "I'm Angry",
        home: "I wanna go Home",
        school: "I wanna go to School",
        outside: "I wanna go Outside",
        park: "I wanna go to the Park",
        friends: "I wanna go Play with my Friends",
      },
    },
  },
  de: {
    translation: {
      title: "Sprachleser",
      select_language: "Sprache wählen",
      cards: {
        love: "Ich liebe dich",
        thirsty: "Ich habe Durst",
        hungry: "Ich habe Hunger",
        happy: "Ich bin glücklich",
        sad: "Ich bin traurig",
        scared: "Ich habe Angst",
        hurt: "Ich habe Schmerzen",
        tired: "Ich bin müde",
        angry: "Ich bin wütend",
        home: "Ich will nach Hause",
        school: "Ich will zur Schule",
        outside: "Ich will nach draußen",
        park: "Ich will in den Park",
        friends: "Ich will mit meinen Freunden spielen",
      },
    },
  },
  ar: {
    translation: {
      title: "قارئ الكلام",
      select_language: "اختيار اللغة",
      cards: {
        love: "أنا أحبك",
        thirsty: "أنا عطشان",
        hungry: "أنا جائع",
        happy: "أنا سعيد",
        sad: "أنا حزين",
        scared: "أنا خائف",
        hurt: "أنا متألم",
        tired: "أنا متعب",
        angry: "أنا غاضب",
        home: "أريد الذهاب إلى المنزل",
        school: "أريد الذهاب إلى المدرسة",
        outside: "أريد الخروج",
        park: "أريد الذهاب إلى الحديقة",
        friends: "أريد اللعب مع أصدقائي",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
