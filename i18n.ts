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
  ku: {
    translation: {
      title: "Xwendekara Axiftin",
      select_language: "Ziman hilbijêre",
      cards: {
        love: "Ez hej te dikim",
        thirsty: "Ez tixûbim",
        hungry: "Ez têriya me",
        happy: "Ez kêfxweş im",
        sad: "Ez xeyalî me",
        scared: "Ez têra me",
        hurt: "Ez êşê me",
        tired: "Ez hêrişî me",
        angry: "Ez neşînim",
        home: "Ez dixwazim herî bînim",
        school: "Ez dixwazim biçe dibistan",
        outside: "Ez dixwazim derkevin",
        park: "Ez dixwazim biçe parkê",
        friends: "Ez dixwazim bi hev re lîstin",
      },
    },
  },
  fr: {
    translation: {
      title: "Lecteur de discours",
      select_language: "Sélectionner la langue",
      cards: {
        love: "Je t'aime",
        thirsty: "J'ai soif",
        hungry: "J'ai faim",
        happy: "Je suis heureux",
        sad: "Je suis triste",
        scared: "J'ai peur",
        hurt: "J'ai mal",
        tired: "Je suis fatigué",
        angry: "Je suis en colère",
        home: "Je veux rentrer à la maison",
        school: "Je veux aller à l'école",
        outside: "Je veux sortir",
        park: "Je veux aller au parc",
        friends: "Je veux jouer avec mes amis",
      },
    },
  },
  es: {
    translation: {
      title: "Lector de voz",
      select_language: "Seleccionar idioma",
      cards: {
        love: "Te quiero",
        thirsty: "Tengo sed",
        hungry: "Tengo hambre",
        happy: "Estoy feliz",
        sad: "Estoy triste",
        scared: "Tengo miedo",
        hurt: "Me duele",
        tired: "Estoy cansado",
        angry: "Estoy enojado",
        home: "Quiero ir a casa",
        school: "Quiero ir a la escuela",
        outside: "Quiero ir afuera",
        park: "Quiero ir al parque",
        friends: "Quiero jugar con mis amigos",
      },
    },
  },
  it: {
    translation: {
      title: "Lettore vocale",
      select_language: "Seleziona lingua",
      cards: {
        love: "Ti amo",
        thirsty: "Ho sete",
        hungry: "Ho fame",
        happy: "Sono felice",
        sad: "Sono triste",
        scared: "Ho paura",
        hurt: "Ho dolore",
        tired: "Sono stanco",
        angry: "Sono arrabbiato",
        home: "Voglio andare a casa",
        school: "Voglio andare a scuola",
        outside: "Voglio uscire",
        park: "Voglio andare al parco",
        friends: "Voglio giocare con i miei amici",
      },
    },
  },
  sv: {
    translation: {
      title: "Talarläsare",
      select_language: "Välj språk",
      cards: {
        love: "Jag älskar dig",
        thirsty: "Jag är törstig",
        hungry: "Jag är hungrig",
        happy: "Jag mår bra",
        sad: "Jag är ledsen",
        scared: "Jag är rädd",
        hurt: "Jag har ont",
        tired: "Jag är trött",
        angry: "Jag är arg",
        home: "Jag vill gå hem",
        school: "Jag vill gå till skolan",
        outside: "Jag vill gå ut",
        park: "Jag vill gå till parken",
        friends: "Jag vill leka med mina vänner",
      },
    },
  },
  no: {
    translation: {
      title: "Tale Leseren",
      select_language: "Velg språk",
      cards: {
        love: "Jeg elsker deg",
        thirsty: "Jeg er tørst",
        hungry: "Jeg er sulten",
        happy: "Jeg er glad",
        sad: "Jeg er trist",
        scared: "Jeg er redd",
        hurt: "Jeg har vondt",
        tired: "Jeg er trøtt",
        angry: "Jeg er sint",
        home: "Jeg vil gå hjem",
        school: "Jeg vil gå på skolen",
        outside: "Jeg vil gå ut",
        park: "Jeg vil gå til parken",
        friends: "Jeg vil leke med vennene mine",
      },
    },
  },
  da: {
    translation: {
      title: "Tale Læser",
      select_language: "Vælg sprog",
      cards: {
        love: "Jeg elsker dig",
        thirsty: "Jeg er tørstig",
        hungry: "Jeg er sulten",
        happy: "Jeg er glad",
        sad: "Jeg er ked af det",
        scared: "Jeg er bange",
        hurt: "Jeg har ondt",
        tired: "Jeg er træt",
        angry: "Jeg er vred",
        home: "Jeg vil hjem",
        school: "Jeg vil gå i skole",
        outside: "Jeg vil ud",
        park: "Jeg vil til parken",
        friends: "Jeg vil lege med mine venner",
      },
    },
  },
  nl: {
    translation: {
      title: "Spraaklezer",
      select_language: "Selecteer taal",
      cards: {
        love: "Ik hou van jou",
        thirsty: "Ik heb dorst",
        hungry: "Ik heb honger",
        happy: "Ik ben blij",
        sad: "Ik ben verdrietig",
        scared: "Ik ben bang",
        hurt: "Ik heb pijn",
        tired: "Ik ben moe",
        angry: "Ik ben boos",
        home: "Ik wil naar huis",
        school: "Ik wil naar school",
        outside: "Ik wil naar buiten",
        park: "Ik wil naar het park",
        friends: "Ik wil met mijn vrienden spelen",
      },
    },
  },
  ro: {
    translation: {
      title: "Cititor de discurs",
      select_language: "Selectați limba",
      cards: {
        love: "Te iubesc",
        thirsty: "Mi-e sete",
        hungry: "Mi-e foame",
        happy: "Sunt fericit",
        sad: "Sunt trist",
        scared: "Mi-e frică",
        hurt: "Mă dor",
        tired: "Sunt obosit",
        angry: "Sunt supărat",
        home: "Vreau să merg acasă",
        school: "Vreau să merg la școală",
        outside: "Vreau să ies afară",
        park: "Vreau să merg în parc",
        friends: "Vreau să mă joc cu prietenii mei",
      },
    },
  },
  el: {
    translation: {
      title: "Αναγνώστης Ομιλίας",
      select_language: "Επιλέξτε γλώσσα",
      cards: {
        love: "Σ' αγαπώ",
        thirsty: "Διψάω",
        hungry: "Πεινάω",
        happy: "Είμαι χαρούμενος",
        sad: "Είμαι λυπημένος",
        scared: "Φοβάμαι",
        hurt: "Πονάω",
        tired: "Είμαι κουρασμένος",
        angry: "Είμαι θυμωμένος",
        home: "Θέλω να πάω σπίτι",
        school: "Θέλω να πάω στο σχολείο",
        outside: "Θέλω να βγω έξω",
        park: "Θέλω να πάω στο πάρκο",
        friends: "Θέλω να παίξω με τους φίλους μου",
      },
    },
  },
  hi: {
    translation: {
      title: "स्पीच रीडर",
      select_language: "भाषा चुनें",
      cards: {
        love: "मैं तुमसे प्यार करता हूँ",
        thirsty: "मुझे प्यास लगी है",
        hungry: "मुझे भूख लगी है",
        happy: "मैं खुश हूँ",
        sad: "मैं उदास हूँ",
        scared: "मुझे डर लग रहा है",
        hurt: "मुझे चोट लगी है",
        tired: "मैं थका हुआ हूँ",
        angry: "मैं गुस्से में हूँ",
        home: "मैं घर जाना चाहता हूँ",
        school: "मैं स्कूल जाना चाहता हूँ",
        outside: "मैं बाहर जाना चाहता हूँ",
        park: "मैं पार्क जाना चाहता हूँ",
        friends: "मैं अपने दोस्तों के साथ खेलना चाहता हूँ",
      },
    },
  },
  zh: {
    translation: {
      title: "语音阅读器",
      select_language: "选择语言",
      cards: {
        love: "我爱你",
        thirsty: "我口渴",
        hungry: "我饿了",
        happy: "我很开心",
        sad: "我很难过",
        scared: "我很害怕",
        hurt: "我很痛",
        tired: "我很累",
        angry: "我很生气",
        home: "我要回家",
        school: "我要去学校",
        outside: "我要出去",
        park: "我要去公园",
        friends: "我想和我的朋友们玩",
      },
    },
  },
  ja: {
    translation: {
      title: "スピーチリーダー",
      select_language: "言語を選択",
      cards: {
        love: "愛してる",
        thirsty: "喉が渇いた",
        hungry: "お腹がすいた",
        happy: "幸せだ",
        sad: "悲しい",
        scared: "怖い",
        hurt: "痛い",
        tired: "疲れた",
        angry: "怒っている",
        home: "家に帰りたい",
        school: "学校に行きたい",
        outside: "外に出たい",
        park: "公園に行きたい",
        friends: "友達と遊びたい",
      },
    },
  },
  ko: {
    translation: {
      title: "음성 리더",
      select_language: "언어 선택",
      cards: {
        love: "사랑해요",
        thirsty: "목말라요",
        hungry: "배고파요",
        happy: "행복해요",
        sad: "슬퍼요",
        scared: "무서워요",
        hurt: "아파요",
        tired: "피곤해요",
        angry: "화나요",
        home: "집에 가고 싶어요",
        school: "학교에 가고 싶어요",
        outside: "밖에 나가고 싶어요",
        park: "공원에 가고 싶어요",
        friends: "친구들과 놀고 싶어요",
      },
    },
  },
  tr: {
    translation: {
      title: "Konuşma Okuyucu",
      select_language: "Dil Seçin",
      cards: {
        love: "Seni seviyorum",
        thirsty: "Susadım",
        hungry: "Açım",
        happy: "Mutluyum",
        sad: "Üzgünüm",
        scared: "Korkuyorum",
        hurt: "Ağrım var",
        tired: "Yorgunum",
        angry: "Kızgınım",
        home: "Eve gitmek istiyorum",
        school: "Okula gitmek istiyorum",
        outside: "Dışarı çıkmak istiyorum",
        park: "Parkta olmak istiyorum",
        friends: "Arkadaşlarımla oynamak istiyorum",
      },
    },
  },
  uk: {
    translation: {
      title: "Читач мови",
      select_language: "Оберіть мову",
      cards: {
        love: "Я тебе люблю",
        thirsty: "Я спраглий",
        hungry: "Я голодний",
        happy: "Я щасливий",
        sad: "Я сумую",
        scared: "Я боюся",
        hurt: "Мені боляче",
        tired: "Я втомлений",
        angry: "Я злий",
        home: "Я хочу додому",
        school: "Я хочу до школи",
        outside: "Я хочу вийти",
        park: "Я хочу в парк",
        friends: "Я хочу грати з друзями",
      },
    },
  },
  pt: {
    translation: {
      title: "Leitor de Voz",
      select_language: "Selecionar Idioma",
      cards: {
        love: "Eu te amo",
        thirsty: "Estou com sede",
        hungry: "Estou com fome",
        happy: "Estou feliz",
        sad: "Estou triste",
        scared: "Estou com medo",
        hurt: "Estou machucado",
        tired: "Estou cansado",
        angry: "Estou com raiva",
        home: "Eu quero ir para casa",
        school: "Eu quero ir para a escola",
        outside: "Eu quero sair",
        park: "Eu quero ir ao parque",
        friends: "Eu quero brincar com meus amigos",
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
