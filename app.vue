<template>
  <input v-model="state.newTodoLabel" />
  <button @click="addTodo">add</button>

  <input id="all" type="radio" v-model="filter" value="all" />
  <label for="all">すべて</label>
  <input id="finished" type="radio" v-model="filter" value="finished" />
  <label for="finished">完了済み</label>
  <input id="unfinished" type="radio" v-model="filter" value="unfinished" />
  <label for="unfinished">未完了</label>

  <ul>
    <li
      :class="{ todo: true, finished: todo.finished }"
      :key="todo.label"
      v-for="todo in filteredTodos"
      v-text="todo.label"
      @click="toggleTodo(todo.id)"
    />
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useTodoStore } from "@/src/store/todoListStore";

const state = reactive({ newTodoLabel: "" });

// useTodoStore を呼び出すだけで、グローバルストアへのアクセスが可能
const store = useTodoStore();

// ストア内の State や Getters はリアクティブオブジェクトなので、
// リアクティブを失わずに取り出す場合は storeToRefs を用いる
const { filteredTodos, filter } = storeToRefs(store);

const toggleTodo = (id: number) => store.toggleTodo(id);
const addTodo = () => {
  if (state.newTodoLabel !== "") {
    store.addTodo(state.newTodoLabel);
    state.newTodoLabel = "";
  }
};
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
