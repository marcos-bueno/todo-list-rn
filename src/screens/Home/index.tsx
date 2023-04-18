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

export function Home() {
  const tasks = [
    'Estudar react',
    'Estudar angular',
    'Estudar vuejs',
    'Estudar react native',
    'Estudar tailwind css',
    'Estudar chakra ui',
    'Estudar bootstrap',
    'Estudar node',
  ];

  function handleTaskAdd() {
    if (tasks.includes('Estudar react'))
      return Alert.alert(
        'Oops',
        'Já existe uma tarefa na lista com esse nome.'
      );

    console.log('Você clicou em adicionar tarefa!');
  }

  function handleTaskRemove(task: string) {
    Alert.alert('Remover', `Remover a tarefa ${task}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
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
