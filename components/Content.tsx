import React from "react";
import { Grid } from "@mui/material";
import { cardData } from "@/utils/cardData";
import { useTheme } from "@/utils/ThemeContext";
import { Colors } from "@/constants/Colors";
import Cards from "@/components/Cards";
import i18n from "@/i18n";

type ContentProps = {
  selectedLanguage: string;
};

export function Content({ selectedLanguage }: ContentProps) {
  const { theme } = useTheme();
  const currentColors = Colors[theme as "light" | "dark"];

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: currentColors.pageBackgeround,
      }}
    >
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
                title={i18n.t(`cards.${card.key}`)}
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
    paddingTop: 20,
    paddingBottom: 150,
  },
};

export default Content;
