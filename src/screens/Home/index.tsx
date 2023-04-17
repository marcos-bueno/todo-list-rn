import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Task } from '../../components/Task';

import { styles } from './styles';

export function Home() {
  function handleTaskAdd() {
    console.log('Você clicou em adicionar tarefa!');
  }

  function handleTaskRemove(description: string) {
    console.log(`Você clicou em remover tarefa ${description}!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <Text style={styles.date}>Domingo, 16 de Abril de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa..."
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Task
        description="Estudar react"
        onRemove={() => handleTaskRemove('Estudar react')}
      />
      <Task
        description="Estudar node"
        onRemove={() => handleTaskRemove('Estudar node')}
      />
    </View>
  );
}
