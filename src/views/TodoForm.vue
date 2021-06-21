<template>
  <div class="container">
    <div :class="['add-todo', todos.length > 0 && 'slide-up']">
      <e-input v-model="todo" id="addTodoInput" />
      <e-button @click="submit" id="submit">Add Todo!</e-button>
    </div>
    <transition name="fade-in">
      <todo-list v-if="todos.length > 0" :todos="todos" @remove="removeTodo" />
    </transition>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
  name: "TodoForm",
  components: {
    "todo-list": TodoList,
    "e-input": Input,
    "e-button": Button,
  },
  data() {
    return {
      todo: "",
      todos: [],
      activeTodoIndex: null,
    };
  },
  methods: {
    submit() {
      this.todos = [...this.todos, this.todo];
    },
    removeTodo(i) {
      let activeTodos = this.todos.filter((todo, index) => index !== i);

      this.todos = [...activeTodos];
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .add-todo {
    display: flex;
    transition: all 0.3s ease;
    transform: translateY(0px);
    &.slide-up {
      transform: translateY(-20px);
    }
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
  transform: translateY(0%);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  visibility: hidden;
  transform: translateY(100%);
}
</style>