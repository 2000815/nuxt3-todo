<template>
  <div>
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import AddTodo from "@/src/components/AddTodo.vue";
import TodoList from "@/src/components/TodoList.vue";

export default {
  components: {
    AddTodo,
    TodoList,
  },
};
</script>
