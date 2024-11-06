import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as Speech from "expo-speech";

type CardProps = {
  title: string;
  imageUrl: string;
};

const Cards: React.FC<CardProps> = ({ title, imageUrl }) => {
  const handleCardClick = () => {
    Speech.speak(title, {
      language: "en",
      pitch: 1,
      rate: 1,
    });
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 13 }}>
      <CardActionArea onClick={handleCardClick}>
        {" "}
        <CardContent>
          <Typography
            fontFamily={"Nasa21"}
            variant="h5"
            component="div"
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
        <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      </CardActionArea>
    </Card>
  );
};

export default Cards;
