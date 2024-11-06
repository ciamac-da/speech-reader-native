import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Header } from "@/components/Header";
import { Content } from "@/components/Content";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <div style={styles.html}>
      <Header />
      <Content />
    </div>
  );
}

const styles = StyleSheet.create({
  html: {
    fontFamily: "Nasa21",
  },
});
