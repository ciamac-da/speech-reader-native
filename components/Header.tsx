import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useTheme } from "@/utils/ThemeContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
  console.info("object", theme);

  return (
    <View style={styles.header}>
      <Text style={[styles.h1, { color: currentColors.text }]}>
        {t("title")}
      </Text>
      <View style={[isSmallScreen ? styles.langMobile : styles.langDesktop]}>
        <LanguageSelector
          currentLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
        />
        <TouchableOpacity onPress={toggleTheme} style={styles.iconButton}>
          {theme === "light" ? (
            <MaterialIcons name="dark-mode" size={28} color="black" />
          ) : (
            <MaterialIcons name="light-mode" size={28} color="gold" />
          )}
        </TouchableOpacity>
      </View>
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
    fontWeight: "700",
    fontFamily: "Nasa21",
    padding: 20,
  },
  langMobile: {
    display: "flex",
    flexDirection: "row",
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
  iconButton: {
    position: "absolute",
    right: -10,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Header;
