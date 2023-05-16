<template>
    <div class="row m-3 d-flex align-items-center justify-content-center">
        <div class="col-auto">
            <LabelPendingTasks />
        </div>
        <div class="col-auto">
            <ButtonFilterAllTasks />
        </div>
        <div class="col-auto">
            <ButtonFilterActive />
        </div>
        <div class="col-auto">
            <ButtonFilterCompleted />
        </div>
        <div class="col-auto">
            <ButtonCompleteAll />
        </div>
        <div class="col-auto">
            <ButtonDeleteCompleted />
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
