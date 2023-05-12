<template>
    <div class="row m-3 d-flex align-items-center">
        <div class="col">
            <LabelPendingTasks />
            <ButtonCompleteAll />
            <ButtonDeleteCompleted />
            <ButtonFilterAllTasks />
            <ButtonFilterActive />
            <ButtonFilterCompleted />
        </div>
    </div>
</template>

<script setup lang="ts">
    import ButtonCompleteAll from '@/modules/filter-buttons/components/ButtonCompleteAll.vue';
    import ButtonDeleteCompleted from '@/modules/filter-buttons/components/ButtonDeleteCompleted.vue';
    import ButtonFilterCompleted from '@/modules/filter-buttons/components/ButtonFilterCompleted.vue';
    import ButtonFilterActive from '@/modules/filter-buttons/components/ButtonFilterActive.vue';
    import ButtonFilterAllTasks from '@/modules/filter-buttons/components/ButtonFilterAllTasks.vue';
    import LabelPendingTasks from '@/modules/filter-buttons/components/LabelPendingTasks.vue';
</script>

<style scoped>

</style>
