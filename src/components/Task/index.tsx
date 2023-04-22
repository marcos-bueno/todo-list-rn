import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type TaskProps = {
  description: string;
  onRemove: () => void;
};

export function Task({ description, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
