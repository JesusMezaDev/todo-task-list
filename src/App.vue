<template>
  <div class="container">
    <TodoInputTaskView />
    <TodoListView />
    <FilterButtonsView />
  </div>
</template>

<script setup lang="ts">
  import TodoInputTaskView from './modules/todo-input-task/views/TodoInputTaskView.vue';
  import TodoListView from './modules/todo-list/views/TodoListView.vue';
  import FilterButtonsView from './modules/filter-buttons/views/FilterButtonsView.vue';
</script>

<style scoped>

</style>