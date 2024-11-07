import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LanguageSpeechCard from "./LanguageSpeechCard";
import useResponsive from "@/hooks/useResponsive";

type HeaderProps = {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
};

export function Header({ selectedLanguage, onLanguageChange }: HeaderProps) {
  const isSmallScreen = useResponsive(768);

  return (
    <View
      style={[
        styles.header,
        isSmallScreen ? styles.headerMobile : styles.headerDesktop,
      ]}
    >
      <Text style={styles.h1}>Speech Reader</Text>
      <View style={[isSmallScreen ? styles.langMobile : styles.langDesktop]}>
        <LanguageSpeechCard
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#25a815",
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
});

export default Header;
