<template>
    <div class="float-end me-2">
        <button type="button" class="btn btn-danger" @click.prevent="deleteAllCompleted()">Borrar completados</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { deleteAllCompleted } = todoListStore();
</script>

<style scoped>

</style>