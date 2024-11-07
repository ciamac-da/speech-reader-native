import React, { useState } from "react";
import { Grid } from "@mui/material";
import { cardData } from "@/utils/cardData";
import Cards from "@/components/Cards";
import LanguageSpeechCard from "./LanguageSpeechCard";
import { Dimensions } from "react-native";

export function Content() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div style={styles.container}>
      <LanguageSpeechCard
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <div style={styles.scrollContainer}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
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
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    height: "100vh",
  },
  scrollContainer: {
    flex: 1,
    overflowY: "scroll" as "scroll",
    padding: 20,
  },
};

export default Content;
