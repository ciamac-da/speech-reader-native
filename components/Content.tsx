import React from "react";
import { Grid } from "@mui/material";
import { cardData } from "@/utils/cardData";
import Cards from "@/components/Cards";

type ContentProps = {
  selectedLanguage: string;
};

export function Content({ selectedLanguage }: ContentProps) {
  return (
    <div style={styles.container}>
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
    paddingTop: 20,
    paddingBottom: 150,
  },
};

export default Content;
