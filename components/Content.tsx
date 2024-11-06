import { cardData } from "@/utils/cardData";
import { StyleSheet } from "react-native";
import Cards from "@/components/Cards";

export function Content() {
  return (
    <div>
      {cardData.map((card, index) => (
        <Cards key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
}
