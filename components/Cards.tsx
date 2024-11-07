import React from "react";
import {
  Pressable,
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import * as Speech from "expo-speech";

type CardProps = {
  title: string;
  imageUrl: string;
  language: string;
};

const Cards: React.FC<CardProps> = ({ title, imageUrl, language }) => {
  const handleSpeak = () => {
    Speech.speak(title, { language });
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={handleSpeak}
        {...(Platform.OS === "web" ? { onClick: handleSpeak } : {})}
        style={styles.actionArea}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: 13,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
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
