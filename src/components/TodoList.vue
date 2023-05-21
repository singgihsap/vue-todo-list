<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useTodosStore from "@/stores/todos";
import TodoItem from "./TodoItem.vue";

const store = useTodosStore();
const { todos } = storeToRefs(store);
</script>

<template>
  <div class="todo-list">
    <div v-if="todos.length" v-for="(item, index) in todos" :key="index">
      <TodoItem :key="item.id" :todo="item" />
    </div>

    <section v-else class="todo-list__placeholder">No Items</section>
    <div class="todo-list__footer">
      <div class="todo-list__item">
        {{ todos.length }} todo{{ todos.length > 1 ? "s" : "" }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.todo-list {
  width: 100%;
  margin: 4.8rem 0;
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;

  @media only screen and (max-width: $breakpoint-sm) {
    margin: 2rem 0;
  }

  &__placeholder {
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-element);
    color: var(--color-text-secondary);
    height: 12.8rem;
    font-size: 1.6rem;
    display: grid;
    place-items: center;
  }

  &__footer {
    background-color: var(--color-element);
    height: 6.4rem;
    padding: 0 2.4rem;
    border-radius: 0 0 0.5rem 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    font-size: 1.6rem;
    color: var(--color-text-secondary);
  }

  &__btn {
    cursor: pointer;
    user-select: none;

    &:hover {
      color: var(--color-text);
    }

    &[disabled="true"] {
      cursor: default;
      color: var(--color-text-secondary);
    }
  }
}
</style>
