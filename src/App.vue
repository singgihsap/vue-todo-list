<script setup lang="ts">
import Header from './components/Header.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

import { computed } from '@vue/reactivity'
import { storeToRefs } from "pinia";
import useTodosStore from "@/stores/todos";
import useThemeStore from "./stores/theme";

const themeStore = useThemeStore()
const todosStore = useTodosStore();

const isLight = computed((): boolean => {
  return themeStore.isLight;
});
const { todosAllCount } = storeToRefs(todosStore);
</script>

<template>
  <div id="app" :class="isLight ? 'light' : 'dark'">
    <Header />
    <main class="todo__main">
      <TodoInput />
      <TodoList v-if="todosAllCount" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.todo {
  &__main {
    z-index: 1;
    width: 54rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: $breakpoint-sm) {
      width: 32rem;
      margin: 0 auto;
    }
  }

  &__filters {
    z-index: 1;
    width: 100%;
    height: 6.4rem;
    border-radius: 0.5rem;
    background-color: var(--color-element);
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  &__instruction {
    color: var(--color-text-secondary);
    font-size: 1.6rem;
  }
}
</style>
