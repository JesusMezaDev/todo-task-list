<template>
    <div class="float-end m-2">
        <button type="button" class="btn btn-danger bi-eraser" @click.prevent="deleteAllCompleted()"> Borrar completados</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { deleteAllCompleted } = todoListStore();
</script>

<style scoped>

</style>