import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks, onToggleTask }) {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task, index) => (
        <Pressable 
          key={index}
          onPress={() => onToggleTask(index)}
        >
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={[
              styles.taskText,
              task.completed && styles.completedText
            ]}>
              {task.text}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  task: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  completed: {
    backgroundColor: '#e8e8e8',
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default ToDoList;