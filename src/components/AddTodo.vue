<template>
  <div>
    <input v-model="newTodoLabel" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/src/store/todoListStore";

const newTodoLabel = ref("");
const store = useTodoStore();

const addTodo = () => {
  if (newTodoLabel.value !== "") {
    store.addTodo(newTodoLabel.value);
    newTodoLabel.value = "";
  }
};
</script>
