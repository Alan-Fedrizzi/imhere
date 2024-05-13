import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        // para usar teclado só com números
        // keyboardType="numeric"
        // keyboardType="email-address"
        // defaul é para texto normal
        // https://reactnative.dev/docs/textinput#keyboardtype
        // algumas só funcionam só apra IOS ou Android, verificar
      />

      {/* é um botão */}
      <TouchableOpacity style={styles.button}>
        {/* tem que estar dentro de um texto */}
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
