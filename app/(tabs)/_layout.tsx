import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Header } from "@/components/Header";
import { Content } from "@/components/Content";
import i18n from "@/i18n";
import { ThemeProvider, useTheme } from "@/utils/ThemeContext";

function TabContent() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { theme } = useTheme();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const backgroundImage =
    theme === "light"
      ? require("../../assets/images/light.jpg")
      : require("../../assets/images/dark.jpeg");

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Header
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <Content selectedLanguage={selectedLanguage} />
    </ImageBackground>
  );
}

export default function TabLayout() {
  return (
    <ThemeProvider>
      <TabContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Nasa21",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
