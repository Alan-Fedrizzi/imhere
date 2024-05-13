import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex 1 faz ocupar toda a altura da tela
    flex: 1,
    backgroundColor: "#131016",
    padding: 24, // não precisa colocar px
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  button: {},
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
