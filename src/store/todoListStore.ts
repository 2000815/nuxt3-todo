import { defineStore } from "pinia";

type FilterType = "all" | "finished" | "unfinished";
type TODO = {
  id: number;
  label: string;
  finished: boolean;
};

export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      filter: "all" as FilterType,
      todos: [] as TODO[],
      nextId: 0,
    };
  },
  getters: {
    findTodo(state) {
      return (id: number): TODO | undefined => {
        return state.todos.find((todo) => todo.id === id);
      };
    },
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.finished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.finished);
    },
    filteredTodos(state): TODO[] {
      switch (state.filter) {
        case "finished":
          return this.finishedTodos;
        case "unfinished":
          return this.unfinishedTodos;
        default:
          return this.todos;
      }
    },
  },
  actions: {
    addTodo(label: string) {
      this.todos.push({ id: this.nextId++, label, finished: false });
    },
    toggleTodo(id: number) {
      const todo = this.findTodo(id);

      if (todo !== undefined) {
        todo.finished = !todo.finished;
      } else {
        console.error("Todo not found for id:", id);
      }
    },
    deleteTodo(id: number) {
      const todoIndex = this.todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        this.todos.splice(todoIndex, 1);
      } else {
        console.error("Todo not found for id:", id);
      }
    },
  },
});
