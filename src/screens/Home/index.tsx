import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  );
}
