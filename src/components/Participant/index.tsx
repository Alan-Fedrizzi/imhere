import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Some name</Text>

      <TouchableOpacity style={styles.button}>
        {/* tem que estar dentro de um texto */}
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
