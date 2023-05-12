<template>
    <div class="float-end me-2">
        <button type="button" class="btn btn-success" @click.prevent="finishAll()">Completar todos</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { finishAll } = todoListStore();
</script>

<style scoped>

</style>