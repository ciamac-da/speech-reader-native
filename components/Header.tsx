import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useTheme } from "@/utils/ThemeContext";
import LanguageSelector from "@/components/LanguageSelector";
import { Colors } from "@/constants/Colors";
import useResponsive from "@/hooks/useResponsive";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
};

export function Header({ selectedLanguage, onLanguageChange }: HeaderProps) {
  const isSmallScreen = useResponsive(768);
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const currentColors = Colors[theme as "light" | "dark"];

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: currentColors.background,
        },
      ]}
    >
      <Text style={[styles.h1, { color: currentColors.text }]}>
        {t("title")}
      </Text>
      <View style={[isSmallScreen ? styles.langMobile : styles.langDesktop]}>
        <LanguageSelector
          currentLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
        />
      </View>
      <Button
        title={theme === "light" ? "Dark Mode" : "Light Mode"}
        onPress={toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    top: 0,
    textAlign: "center",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerMobile: {
    flexDirection: "column",
  },
  headerDesktop: {
    flexDirection: "row",
    justifyContent: "center",
  },
  h1: {
    letterSpacing: 5,
    color: "#fff",
    fontSize: 32,
    fontFamily: "Nasa21",
    padding: 20,
  },
  langMobile: {
    marginTop: 10,
    position: "static",
    alignItems: "center",
    padding: 10,
  },
  langDesktop: {
    position: "absolute",
    right: 50,
    fontSize: 32,
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
