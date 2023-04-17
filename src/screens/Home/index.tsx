import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <Text style={styles.date}>Domingo, 16 de Abril de 2023.</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma tarefa..."
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}
