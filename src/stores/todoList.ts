import { computed, ref } from 'vue';

import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

export const todoListStore = defineStore('todoListStore', () => {
  const todos = ref<{ id: string, text: string, done: boolean, show: boolean }[]>([]);
  const fillterAllTasks = (): void => { todos.value.map(task => task.show = true) };
  const saveInLocalStorage = (): void => { localStorage.setItem('todos', JSON.stringify(todos.value)); }

  return {
    todos,
    create: (text: string) => {
      if (!text.trim()) return; 
      const id = uuid();
      todos.value.push({ id, text, done: false,  show: true });
      fillterAllTasks();
      saveInLocalStorage();
    },
    createSample: (text: string) => { 
      const id = uuid();
      todos.value.push({ id, text, done: true,   show: true  });
      saveInLocalStorage();
    },
    finishAll: () => {
      todos.value = todos.value.map(todo => {
        todo.done = true;
        return todo;
      });
      saveInLocalStorage();
    },
    toogle: (id: string) => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      saveInLocalStorage();
    },
    deleteAllCompleted:  () => {
      todos.value = todos.value.filter(todo => !todo.done);
      saveInLocalStorage();
    },
    pendingTasks: computed(() => todos.value.filter(task => !task.done).length),
    filterActiveTasks: (): void => {
      fillterAllTasks();
      todos.value.map(task => {
        if (task.done) task.show = false;
        return task;
      });
    },
    filterCompletedTasks: (): void => {
      fillterAllTasks();
      todos.value.map(task => {
        if (!task.done) task.show = false;
        return task;
      });
    },
    fillterAllTasks,
    loadFromLocalStorage: (): void => {
      todos.value = JSON.parse(localStorage.getItem('todos') || '[]');
    }
  };  
});
