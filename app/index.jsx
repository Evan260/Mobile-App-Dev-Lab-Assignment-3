import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: false }
  ]);

  const addTask = (taskText) => {
    // Check for duplicate and log result
    const isDuplicate = tasks.some(task => {
      const isMatch = task.text.toLowerCase() === taskText.toLowerCase();
      return isMatch;
    });

    if (isDuplicate) {
      window.alert('This task already exists');
      return;
    }
    
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} onToggleTask={toggleTask} />
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default App;