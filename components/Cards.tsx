import React, { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { useTheme } from "@/utils/ThemeContext";
import { Colors } from "@/constants/Colors";
import * as Speech from "expo-speech";

type CardProps = {
  title: string;
  imageUrl: string;
  language: string;
};

const Cards: React.FC<CardProps> = ({ title, imageUrl, language }) => {
  const { theme } = useTheme();
  const currentColors = Colors[theme as "light" | "dark"];
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animates the background color transition
    Animated.timing(animatedValue, {
      toValue: theme === "light" ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [theme, animatedValue]);

  const interpolatedBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.light.cardBackground, Colors.dark.cardBackground],
  });

  const handleSpeak = () => {
    Speech.speak(title, { language });
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: interpolatedBackgroundColor, // Animated background
        },
      ]}
    >
      <Pressable
        onPress={handleSpeak}
        {...(Platform.OS === "web" ? { onClick: handleSpeak } : {})}
        style={[
          styles.actionArea,
          {
            backgroundColor: currentColors.background,
          },
        ]}
      >
        <View style={styles.content}>
          <Text
            style={[
              styles.title,
              {
                color: currentColors.text,
              },
            ]}
          >
            {title}
          </Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: 13,
    borderRadius: 8,
    overflow: "hidden",
    ...(Platform.OS === "web"
      ? { transition: "background-color 0.3s ease" }
      : {}),
  },
  actionArea: {
    alignItems: "center",
    padding: 16,
  },
  content: {
    marginBottom: 8,
  },
  title: {
    fontFamily: "Nasa21",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Cards;
