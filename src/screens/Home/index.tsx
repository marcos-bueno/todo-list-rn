import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Task } from '../../components/Task';

import { styles } from './styles';
import { useState } from 'react';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  function handleTaskAdd() {
    if (tasks.includes(taskDescription))
      return Alert.alert(
        'Oops',
        'Já existe uma tarefa na lista com esse nome.'
      );

    setTasks((prevState) => [...prevState, taskDescription]);
    setTaskDescription('');
  }

  function handleTaskRemove(task: string) {
    Alert.alert('Remover', `Remover a tarefa ${task}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => prevState.filter((item) => item !== task)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);

    console.log(`Você clicou em remover tarefa ${task}!`);
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
          onChangeText={(e) => setTaskDescription(e)}
          value={taskDescription}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            description={item}
            onRemove={() => handleTaskRemove(`${item}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhuma tarefa cadastrada!</Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <Task
            key={task}
            description={task}
            onRemove={() => handleTaskRemove(`${task}`)}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
