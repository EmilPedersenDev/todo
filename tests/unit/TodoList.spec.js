import TodoList from "@/components/TodoList.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  it("gets todo as a prop and displays it in a table", () => {
    const wrapper = shallowMount(TodoList, {
      propsData: {
        todos: ["städa"],
      },
    });

    const todoList = wrapper.find("tbody");

    expect(todoList.element.children.length).toBe(1);
  });

  it("after remove event displays updated todos", () => {
    const wrapper = shallowMount(TodoList, {
      propsData: {
        todos: [],
      },
    });

    const todoList = wrapper.find("tbody");

    expect(todoList.element.children.length).toBe(0);
  });
});
