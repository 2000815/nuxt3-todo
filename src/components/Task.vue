<template>
  <div class="task">
    <input type="text" v-model="task.title" placeholder="タスクを入力" />
    <button @click="deleteTask">削除</button>
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
    deleteTask() {
      this.$store.commit("deleteTask", this.task);
    },
  },
};
</script>
