<template>
    <div class="row m-3">
        <div class="col">
            <ul class="list-group" v-for="(item, index) in todos">
                <li class="list-group-item list-group-item-action" v-if="item.show">
                    <input class="form-check-input me-3" type="checkbox" :id="`check-${ index }`" :checked="item.done" @change="toogle(item.id)">
                    <label class="form-check-label stretched-link" :for="`check-${ index }`" :class="item.done ? 'text-decoration-line-through' : ''">{{ item.text }}</label>
                </li>
            </ul>
            <ul class="list-group" v-if="todos.length === 0">
                <li class="list-group-item list-group-item-action d-flex justify-content-center">
                    <label class="form-check-label">¡Felicidades! Has terminado todas las tareas</label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { todoListStore } from '@/stores/todoList';
    
    const todoStore = todoListStore();
    const { todos } = storeToRefs(todoStore);
    const { createSample, toogle, loadFromLocalStorage } = todoStore;

    loadFromLocalStorage();

    if (todos.value.length === 0) {
        const list = [0,1,3];

        for (let item of list) {
            createSample(`Tarea Número: ${ item }`)
        }
    }
</script>

<style scoped>
    .list-group {
        border-radius: 0px;
    }
    
    .list-group:first-child {
        border-top-left-radius: var(--bs-list-group-border-radius);
        border-top-right-radius: var(--bs-list-group-border-radius);
    }

    .list-group:last-child {
        border-bottom-left-radius: var(--bs-list-group-border-radius);
        border-bottom-right-radius: var(--bs-list-group-border-radius);
    }
</style>