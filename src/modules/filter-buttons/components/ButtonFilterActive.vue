<template>
    <div class="float-start ms-2">
        <button type="button" class="btn btn-secondary" @click.prevent="filterActiveTasks()">Activos</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { filterActiveTasks } = todoListStore();
</script>

<style scoped>

</style>