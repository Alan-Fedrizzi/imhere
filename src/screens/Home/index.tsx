import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");
  // atualização dos states são async, são rápidos, mas são async

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe na lista um participante com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participantes ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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

          // onChangeText lança evento sempre que atualiza o valor do input, é o valor que contém o input
          // onChangeText={(text) => setParticipantName(text)}
          onChangeText={setParticipantName} // forma resumido, funciona igual
          value={participantName}
        />

        {/* é um botão */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          {/* tem que estar dentro de um texto */}
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* com FlatList não precisamos fazer um map */}
      <FlatList
        data={participants}
        // como é só strings, usamos direto o item, se fosse um objeto seria item.name por exemplo
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          ></Participant>
        )}
        showsVerticalScrollIndicator={false}
        // se a lista estiver vazia podemos renderizar:
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />

      {/* Obs: ScrollView carrega todos os elementos, mesmo os que não estão visíveis na tela, Flatlist carrega só qd vai aparecer na tela e remove os que sairam da tela tb */}

      {/* para gerar scroll usar ScrollView */}
      {/* showsVerticalScrollIndicator remove a scroll bar */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
            // sem parâmetros:
            // onRemove={handleParticipantRemove}
          ></Participant>
        ))}
      </ScrollView> */}
    </View>
  );
}

// próximo:
// utilizando debug e tal..
