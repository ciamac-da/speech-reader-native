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
        <Picker.Item label="العربية" value="ar" />
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
