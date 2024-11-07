import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";

type LanguageSpeechCardProps = {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
};

const languages = [
  { label: "English", value: "en" },
  { label: "German", value: "de" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "es" },
];

const LanguageSpeechCard: React.FC<LanguageSpeechCardProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div style={styles.dropdown}>
      <Text style={styles.dropdownText}>Select Language:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => onLanguageChange(itemValue)}
      >
        {languages.map((lang) => (
          <Picker.Item key={lang.value} label={lang.label} value={lang.value} />
        ))}
      </Picker>
    </div>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    display: "flex",
    gap: 10,
  },
  dropdownText: {
    color: "#fff",
  },
  picker: {
    borderRadius: 6,
  },
});

export default LanguageSpeechCard;
