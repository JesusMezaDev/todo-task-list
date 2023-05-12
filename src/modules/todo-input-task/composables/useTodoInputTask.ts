import { ref } from 'vue';
import { todoListStore } from '@/stores/todoList';

export const useTodoInputTask = () => {
    const { create } = todoListStore();
    const task = ref<string>('');

    return {
        saveTask: () => {
            create(task.value);
            task.value = '';
        },
        task,
    };
}