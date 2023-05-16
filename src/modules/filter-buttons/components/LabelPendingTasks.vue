<template>
    <div class="float-start m-2">
        {{ pendingTasks }} tarea(s) pendiente(s)
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { todoListStore } from '@/stores/todoList';
    const { pendingTasks } = storeToRefs(todoListStore());
</script>

<style scoped>

</style>