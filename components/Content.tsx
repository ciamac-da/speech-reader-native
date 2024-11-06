// Content.tsx

import React, { useState } from "react";
import { Grid } from "@mui/material";
import { cardData } from "@/utils/cardData";
import Cards from "@/components/Cards";
import LanguageSpeechCard from "./LanguageSpeechCard";
import { StyleSheet } from "react-native";

export function Content() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div>
      <LanguageSpeechCard
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        style={styles.container}
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Cards
              title={card.title}
              imageUrl={card.imageUrl}
              language={selectedLanguage}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
  },
});
