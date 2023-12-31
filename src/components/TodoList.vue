<template>
  <div>
    <input id="all" type="radio" v-model="filter" value="all" />
    <label for="all">All</label>
    <input id="finished" type="radio" v-model="filter" value="finished" />
    <label for="finished">Finished</label>
    <input id="unfinished" type="radio" v-model="filter" value="unfinished" />
    <label for="unfinished">Unfinished</label>

    <ul>
      <li
        :class="{ todo: true, finished: todo.finished }"
        :key="todo.label"
        v-for="todo in filteredTodos"
        v-text="todo.label"
        @click="toggleTodo(todo.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/src/store/todoListStore";

const store = useTodoStore();
const { filteredTodos, filter } = store;

const toggleTodo = (id) => store.toggleTodo(id);
</script>

<style scoped>
.todo {
  user-select: none;
  cursor: pointer;
}
.todo.finished {
  text-decoration: line-through;
  color: gray;
}
</style>
