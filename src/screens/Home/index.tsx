import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const handleParticipantAdd = () => {
    console.log("Você clicou no botão adicionar");
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

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
      <Participant name="Italo" />
      <Participant name="Diego" />
    </View>
  );
}
