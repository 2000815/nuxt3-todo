<template>
  <div>
    <ul>
      <li
        :class="{ todo: true, finished: todo.finished }"
        :key="todo.id"
        v-for="todo in filteredTodos"
        @click="toggleTodo(todo.id)"
        :id="todo.id"
      >
        <div class="todo-content">
          <p v-text="todo.label"></p>
          <Button type="delete-button" @click="deleteTodo(todo.id)"
            >Delete</Button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/src/store/todoListStore";
import Button from "@/src/components/molecules/Button.vue";

const store = useTodoStore();
const { filteredTodos } = store;

const toggleTodo = (id) => store.toggleTodo(id);
const deleteTodo = (id) => store.deleteTodo(id);
</script>

<style scoped>
.todo {
  user-select: none;
  cursor: pointer;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
  list-style: none;
}

.todo:hover {
  background-color: #ececec;
}

.todo.finished {
  text-decoration: line-through;
  color: gray;
}

.todo-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d32f2f;
}

ul {
  padding-left: 0;
}
</style>
