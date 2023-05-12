<template>
    <div class="row m-3">
        <div class="col d-flex justify-content-center">
            <h3>
                Todo List
                <TypescriptIcon />
            </h3>
        </div>
    </div>
    <div class="row m-3">
        <div class="col">
            <input type="text" class="form-control" placeholder="¿Qué tarea tienes pendiente por hacer?" v-model="task" @keyup.enter="saveTask">
        </div>
    </div>
</template>

<script setup lang="ts">
    import TypescriptIcon from '@/modules/icons/components/TypescriptIcon.vue';
    import { useTodoInputTask } from '@/modules/todo-input-task/composables/useTodoInputTask';
    const { saveTask, task } = useTodoInputTask();
</script>

<style scoped>

</style>