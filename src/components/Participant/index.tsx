import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  // para tipar function:
  onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        {/* tem que estar dentro de um texto */}
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
