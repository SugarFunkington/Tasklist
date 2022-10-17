<template>
    <div :key="task.id" v-for="task in tasks">
        <IndividualTask  :task='task' @delete-task="$emit('delete-task', task.id)" @toggle-reminder="$emit('toggle-reminder', task.id)"/>
    </div>    
</template>

<script>

import IndividualTask from './IndividualTask.vue';

export default {
    name: 'ListOfTasks',
    props: {
        tasks:Array
    },
    components: {
    IndividualTask
},
    emits: ['delete-task', 'toggle-reminder']
}
</script>
