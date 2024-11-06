// components/Cards.tsx
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type CardProps = {
  title: string;
  imageUrl: string;
};

const Cards: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 13 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            fontFamily={"Nasa21"}
            variant="h6"
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
