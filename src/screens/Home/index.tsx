import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("click...");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>

      <View style={styles.form}>
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
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          {/* tem que estar dentro de um texto */}
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant></Participant>
      <Participant></Participant>
    </View>
  );
}

// próximo:
// utilizando Propriedades ...
