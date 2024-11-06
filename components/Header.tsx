import { StyleSheet } from "react-native";

export function Header() {
  return (
    <div style={styles.header}>
      <h1 style={styles.h1}>Speech Reader</h1>
    </div>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#25a815",
    position: "absolute",
    width: "100%",
    top: 0,
    textAlign: "center",
  },
  h1: {
    justifyContent: "center",
  },
});
