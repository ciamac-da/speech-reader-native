import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CountryFlag from "react-native-country-flag";
import i18n from "@/i18n";

type LanguageSelectorProps = {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
};

const languageData = [
  { label: "English", value: "en", countryCode: "GB" },
  { label: "Deutsch", value: "de", countryCode: "DE" },
  { label: "Español", value: "es", countryCode: "ES" },
  { label: "Italiano", value: "it", countryCode: "IT" },
  { label: "Portuguese", value: "pt", countryCode: "PT" },
  { label: "Dutch", value: "nl", countryCode: "NL" },
  { label: "Українська", value: "uk", countryCode: "UA" },
  { label: "Kurdî (Kurmanji)", value: "ku", countryCode: "IQ" },
  { label: "العربية", value: "ar", countryCode: "SA" },
  { label: "Svenska", value: "sv", countryCode: "SE" },
  { label: "Norsk", value: "no", countryCode: "NO" },
  { label: "Dansk", value: "da", countryCode: "DK" },
  { label: "Română", value: "ro", countryCode: "RO" },
  { label: "Ελληνικά", value: "el", countryCode: "GR" },
  { label: "हिन्दी", value: "hi", countryCode: "IN" },
  { label: "中文", value: "zh", countryCode: "CN" },
  { label: "日本語", value: "ja", countryCode: "JP" },
  { label: "한국어", value: "ko", countryCode: "KR" },
  { label: "Türkçe", value: "tr", countryCode: "TR" },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    onLanguageChange(language);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectedLanguageContainer}>
        {languageData.map(
          (language) =>
            language.value === currentLanguage && (
              <View style={styles.flagContainer} key={language.value}>
                <CountryFlag isoCode={language.countryCode} size={20} />
              </View>
            )
        )}
      </View>

      <Picker
        selectedValue={currentLanguage}
        onValueChange={handleLanguageChange}
        style={styles.dropdown}
      >
        {languageData.map((language) => (
          <Picker.Item
            key={language.value}
            label={language.label}
            value={language.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 200,
  },
  selectedLanguageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    marginLeft: 10,
    fontSize: 16,
  },
  dropdown: {
    ...Platform.select({
      ios: {
        height: 100,
      },
      android: {
        height: 50,
      },
    }),
  },
});

export default LanguageSelector;
