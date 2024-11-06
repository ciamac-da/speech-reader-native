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
    backgroundColor: "#25a815",
    position: "absolute",
    width: "100%",
    top: 0,
    textAlign: "center",
    zIndex: 1000,
  },
  h1: {
    justifyContent: "center",
    letterSpacing: 5,
    color: "#fff",
    fontSize: 32,
  },
});
