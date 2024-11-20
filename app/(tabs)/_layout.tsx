import { Tabs } from "expo-router";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Header } from "@/components/Header";
import { Content } from "@/components/Content";
import i18n from "@/i18n";

export default function TabLayout() {
  //const colorScheme = useColorScheme();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <View style={styles.container}>
      <Header
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <Content selectedLanguage={selectedLanguage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Nasa21",
    height: Dimensions.get("window").height,
  },
});
