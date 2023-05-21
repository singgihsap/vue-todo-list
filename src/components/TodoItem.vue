<script lang="ts" setup>
import { defineProps } from "vue";
import { computed } from "@vue/reactivity";
import useTodosStore from "@/stores/todos";
import useThemeStore from "@/stores/theme";

import TodoCheckbox from "./TodoCheckbox.vue";
import DeleteIcon from "./icons/IconTash.vue";

const store = useTodosStore();
const themeStore = useThemeStore();

const props = defineProps({
  todo: {
    type: Object,
    default: () => ({
      text: "",
      done: false,
    }),
  },
});

const isLight = computed((): boolean => {
  return themeStore.isLight
})

const handleDelete = () => {
  store.removeTodo(props.todo.id);
};
</script>

<template>
  <div class="todo">
    <input :class="{ todo__input: true, done: props.todo.done }" type="text" v-model="props.todo.text" />
    <div class="todo__overlay todo__checkbox">
      <TodoCheckbox v-model:checked="props.todo.done" />
    </div>
    <div class="todo__overlay todo__hover-show todo__trash" @click="handleDelete">
      <DeleteIcon :is-light="isLight" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.todo {
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  position: relative;

  &:first-of-type>&__input {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & &__hover-show {
    display: none;
  }

  &:hover &__hover-show {
    display: flex;
  }

  &__overlay {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__checkbox {
    left: 0;
    margin: 0 2.4rem;
  }

  &__trash {
    right: 0;
    margin: 0 2.4rem;

    & img {
      height: 2.4rem;
      width: 2.4rem;
    }

    cursor: pointer;

    @media only screen and (max-width: $breakpoint-sm) {
      margin: 0 1.6rem;

      & img {
        height: 1.6rem;
        width: 1.6rem;
      }
    }
  }

  &__input {
    width: 100%;
    height: 6.4rem;
    border: none;
    background-color: var(--color-element);
    color: var(--color-text);
    padding: 0 4rem 0 6.8rem;

    &.done {
      text-decoration: line-through;
      color: var(--color-text-secondary);
    }

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
