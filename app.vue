<template>
  <div class="layout">
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import AddTodo from "@/src/components/organisms/AddTodo.vue";
import TodoList from "@/src/components/organisms/TodoList.vue";

export default {
  components: {
    AddTodo,
    TodoList,
  },
};
</script>

<style>
.layout {
}
</style>
