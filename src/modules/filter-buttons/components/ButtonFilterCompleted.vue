<template>
    <div class="float-start m-2">
        <button type="button" class="btn btn-secondary bi-list-check" @click.prevent="filterCompletedTasks()"> Completados</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { filterCompletedTasks } = todoListStore();
</script>

<style scoped>

</style>