import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Task() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Estudar javascript</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
