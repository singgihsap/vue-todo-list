<script lang="ts" setup>
import { reactive } from "vue";
import useTodosStore from "@/stores/todos";

const store = useTodosStore();

const todo = reactive({
  done: false,
  text: "",
});

const resetTodo = () => {
  todo.done = false;
  todo.text = "";
};
const handleSubmit = () => {
  if (!todo.text) {
    return;
  }
  store.addTodo(todo);
  todo.text = "";
  resetTodo();
};
</script>

<template>
  <div class="todo">
    <input class="todo__input" placeholder="Create a new todo..." type="text" v-model="todo.text"
      @keyup.enter="handleSubmit" />
  </div>
</template>

<style lang="scss" scoped>
.todo {
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  position: relative;

  &__input {
    width: 100%;
    height: 6.4rem;
    border: none;
    border-radius: 0.5rem;

    background-color: var(--color-element);
    color: var(--color-text);

    padding: 0 2.5rem;
    margin-right: -100%;

    &:focus-visible {
      outline: none;
      box-shadow: var(--box-shadow-lift);
    }
  }
}
</style>
