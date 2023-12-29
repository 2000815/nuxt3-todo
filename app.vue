<template>
  <div>
    <Task />
    <!-- <TodoForm /> -->
  </div>
</template>

<script>
import Task from "@/src/components/Task.vue";
import TodoForm from "@/src/components/TodoForm.vue";

export default {
  name: "TodoApp",
  components: {
    Task,
    TodoForm,
  },
};
</script>
