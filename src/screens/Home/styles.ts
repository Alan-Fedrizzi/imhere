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
  form: {
    width: "100%",
    // já vem com flex, e o defaul aqui é column
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
