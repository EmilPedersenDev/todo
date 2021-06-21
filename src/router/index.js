import Vue from "vue";
import VueRouter from "vue-router";
import TodoForm from "../views/TodoForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TodoForm",
    component: TodoForm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
