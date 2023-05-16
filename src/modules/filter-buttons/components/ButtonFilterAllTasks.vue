<template>
    <div class="float-start m-2">
        <button type="button" class="btn btn-secondary bi-list-task" @click.prevent="fillterAllTasks()"> Todas las tareas</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { fillterAllTasks } = todoListStore();
</script>

<style scoped>

</style>