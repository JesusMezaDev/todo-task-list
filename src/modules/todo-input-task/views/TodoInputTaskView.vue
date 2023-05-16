<template>
    <div class="row m-3">
        <div class="col d-flex justify-content-center">
            <h3>
                Todo List
                <TypescriptIcon />
            </h3>
        </div>
    </div>
    <div class="row m-3 d-flex justify-content-center align-items-center">
        <div class="col-auto">
            <input type="text" class="form-control w-320 m-1" placeholder="¿Qué tarea tienes pendiente por hacer?" v-model="task" @keyup.enter="saveTask">
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-primary m-1 bi-plus-circle" @click.prevent="saveTask"> Agregar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import TypescriptIcon from '@/modules/icons/components/TypescriptIcon.vue';
    import { useTodoInputTask } from '@/modules/todo-input-task/composables/useTodoInputTask';
    const { saveTask, task } = useTodoInputTask();
</script>

<style scoped>
    .w-320 {
        width: 320px;
    }
</style>