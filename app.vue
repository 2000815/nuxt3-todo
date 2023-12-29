<template>
  <div>
    <Task />
    <TodoForm />
  </div>
</template>

<script>
import Task from "`/src/components/Task";
import TodoForm from "@/components/TodoForm";

export default {
  name: "TodoApp",
  components: {
    Task,
    TodoForm,
  },
};
</script>
