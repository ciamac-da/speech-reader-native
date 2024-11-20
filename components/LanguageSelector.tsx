import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import i18n from "@/i18n";

type LanguageSelectorProps = {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    onLanguageChange(language);
  };

  return (
    <View style={styles.dropdownContainer}>
      <Picker
        selectedValue={currentLanguage}
        onValueChange={handleLanguageChange}
        style={styles.dropdown}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Deutsch" value="de" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="Italiano" value="it" />
        <Picker.Item label="Dutch" value="nl" />
        <Picker.Item label="Українська" value="uk" />
        <Picker.Item label="Kurdî (Kurmanji)" value="ku" />
        <Picker.Item label="العربية" value="ar" />
        <Picker.Item label="Svenska" value="sv" />
        <Picker.Item label="Norsk" value="no" />
        <Picker.Item label="Dansk" value="da" />
        <Picker.Item label="Română" value="ro" />
        <Picker.Item label="Ελληνικά" value="el" />
        <Picker.Item label="हिन्दी" value="hi" />
        <Picker.Item label="中文" value="zh" />
        <Picker.Item label="日本語" value="ja" />
        <Picker.Item label="한국어" value="ko" />
        <Picker.Item label="Türkçe" value="tr" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginTop: 10,
    width: 150,
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
