import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle === '') {
      return;
    }

    setTasks([...tasks, {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const allTasks = [...tasks];

    const changedTasks = allTasks.map(task => {
      if (task.id === id) {
        return {
          id: task.id,
          title: task.title,
          done: !task.done
        }
      } else {
        return task;
      }
    })

    setTasks(changedTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const allTasks = [...tasks];

    const changedTasks = allTasks.filter(task => task.id !== id);

    setTasks(changedTasks);
  }

  return (
    <View style={{ backgroundColor: '#eee', height: '100%' }}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}