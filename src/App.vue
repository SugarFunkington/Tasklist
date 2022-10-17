<template>
  <div class="container">
    <TasklistHeader @toggle-add-task="toggleAddTask" title="Task List" :showAddTask="showAddTask"/>
    <router-view :showAddTask="showAddTask"></router-view>
    <TasklistFooter />
  </div>
</template>

<script>
import TasklistHeader from './components/TasklistHeader'
import TasklistFooter from './components/TasklistFooter'

export default {
  name: 'App',
  components: {
    TasklistHeader,
    TasklistFooter
  },
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body {
  font-family:'Poppins', sans-serif;
}

.container {
  max-width:500px;
  margin:30px auto;
  overflow:auto;
  min-height:300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius:5px;
}

.btn {
  display: inline-block;
  background: black;
  color:white;
  border:none;
  padding: 10px 20px;
  margin:5px;
  border-radius: 5px;
  cursor:pointer;
  text-decoration:none;
  font-size:15px;
  font-family: inherit;
}

.btn:focus {
  outline:none;
}

.btn:active {
  transform:scale(0.99);
}

.btn-block {
  display:block;
  width:100%;
}
</style>
