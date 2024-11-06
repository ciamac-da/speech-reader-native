import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Header } from "@/components/Header";
import { Content } from "@/components/Content";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Nasa21",
    height: Dimensions.get("window").height,
  },
});
