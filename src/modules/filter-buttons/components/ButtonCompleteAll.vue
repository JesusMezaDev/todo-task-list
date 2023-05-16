<template>
    <div class="float-end m-2">
        <button type="button" class="btn btn-success bi-check2-square" @click.prevent="finishAll()"> Completar todos</button>
    </div>
</template>

<script setup lang="ts">
    import { todoListStore } from '@/stores/todoList';
    const { finishAll } = todoListStore();
</script>

<style scoped>

</style>