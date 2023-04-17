import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type TaskProps = {
  description: string;
};

export function Task({ description }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
