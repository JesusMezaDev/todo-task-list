<template>
    <div class="row m-3">
        <div class="col">
            <ul class="list-group" v-for="(item, index) in todos">
                <li class="list-group-item list-group-item-action" v-if="item.show">
                    <input class="form-check-input me-3" type="checkbox" :id="`check-${ index }`" :checked="item.done" @change="toogle(item.id)">
                    <label class="form-check-label stretched-link" :for="`check-${ index }`" :class="item.done ? 'text-decoration-line-through' : ''">{{ item.text }}</label>
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
    const { createSample, toogle } = todoStore;

    const list = [0,1,3,4,5];

    for (let item of list) {
        createSample(`Tarea Número: ${ item }`)
    }
</script>

<style scoped>

</style>