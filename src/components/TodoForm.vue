<template>
  <div class="task">
    <input type="text" v-model="task.title" placeholder="タスクを入力" />
    <button @click="addTask">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: "",
      },
    };
  },
  methods: {
    addTask() {
      const tasks = this.$store.state.tasks;

      tasks.push(this.task);

      this.$store.commit("updateTasks", tasks);
    },
  },
};
</script>
