<template>
  <div>
    <div class="todo-form">
      <input v-model="newTodoLabel" placeholder="Add a new todo" />
      <Button type="add-button" @click="addTodo">Add</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/src/store/todoListStore";
import Button from "@/src/components/molecules/Button.vue";

const newTodoLabel = ref("");
const store = useTodoStore();

const addTodo = () => {
  if (newTodoLabel.value.trim() !== "") {
    store.addTodo(newTodoLabel.value.trim());
    newTodoLabel.value = "";
  }
};

// これはテストでコメントを作成しています。
</script>

<style scoped>
.todo-form {
  display: flex;
  gap: 10px;
  align-items: center;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
