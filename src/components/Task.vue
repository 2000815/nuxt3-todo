<template>
  <div>
    <div v-for="todo in $store?.todoList" :key="todo.id">
      {{ todo.item }} - {{ todo.completed ? "Completed" : "Not Completed" }}
      <button @click="useTodoListStore.commit('deleteTodo', todo.id)">
        Delete
      </button>
      <button @click="useTodoListStore.commit('toggleCompleted', todo.id)">
        Toggle Completed
      </button>
    </div>
    <input v-model="newTodo" />
    <button @click="useTodoListStore.addTodo(newTodo)">Add Todo</button>
  </div>
</template>

<script>
import { useTodoListStore } from "@/src/store/todoListStore";
export default {
  data() {
    return {
      newTodo: "",
    };
  },
};
</script>
