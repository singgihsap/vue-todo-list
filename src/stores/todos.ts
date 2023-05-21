import { defineStore } from "pinia";

import { v4 as uuidv4 } from "uuid";

interface Todo {
  id?: string;
  text: string;
  done: boolean;
}

const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: [] as Todo[],
      filter: "all",
    };
  },
  getters: {
    todosAllCount: (state): number => {
      return state.todos.length;
    },
  },
  actions: {
    addTodo(todo: Todo): void {
      const id = uuidv4();
      this.todos.unshift({ ...todo, id });
    },
    removeTodo(todoId: string | undefined): void {
      if (!todoId) {
        return;
      }
      const index = this.todos.findIndex((t) => t.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
  },
});

export default useTodosStore;
