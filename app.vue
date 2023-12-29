<template>
  <div>
    <h1>ToDoApp</h1>
    <h2>タスク追加</h2>
    <input v-model="taskName" /><button @click="addTask()">追加</button>
    <h2>タスク名</h2>
    <div v-for="taskName in taskNameList" :key="taskName">
      {{ taskName }}<button @click="completeTask(taskName)">完了</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const taskNameList = ref<string[]>(["Vue", "Vue3", "Nuxt3"]);
const taskName = ref<string>("");
const addTask = () => {
  if (taskName.value === "") {
    return;
  }
  taskNameList.value.push(taskName.value);
  taskName.value = "";
};
const completeTask = (completedTaskName: string) => {
  taskNameList.value = taskNameList.value.filter(
    (taskName) => completedTaskName !== taskName
  );
};
</script>
