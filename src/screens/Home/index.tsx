import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = [
    "Participante 1",
    "Participante 2",
    "Participante 3",
    "Participante 4",
    "Participante 5",
    "Participante 6",
    "Participante 7",
    "Participante 8",
    "Participante 9",
    "Participante 10",
    "Participante 11",
    "Participante 12",
  ];
  const handleParticipantAdd = () => {
    console.log("Você clicou no botão adicionar");
  };

  const handleParticipantRemove = (name: string) => {
    console.log("Você clicou em remover participante");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Quinta, 18 de Julho de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {participants.map((participante) => (
          <Participant
            key={participante}
            name={participante}
            onRemove={() => handleParticipantRemove("")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
