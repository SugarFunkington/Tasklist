<template>
    <header>
            <h1>{{title}}</h1>
            <TasklistButton v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<script>
import TasklistButton from './TasklistButton'
export default {
    name:'TasklistHeader',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components: {
        TasklistButton
    },
    computed: {
        homePage() {
            if (this.$route.path === '/') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
    header {
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:20px;
    }
</style>