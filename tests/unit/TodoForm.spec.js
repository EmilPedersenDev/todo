import { mount, shallowMount } from "@vue/test-utils";
import TodoForm from "@/views/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";

describe("TodoForm", () => {
  it("adds todo from input to data object", async () => {
    const wrapper = shallowMount(TodoForm, {
      data() {
        return {
          todo: "",
        };
      },
    });

    await wrapper.find("#addTodoInput").trigger("input");
    await wrapper.find("#submit").trigger("click");
    await wrapper.setData({
      todo: "städa",
    });

    expect(wrapper.vm.todo).toBe("städa");
  });

  it("emits remove event from child to parent", async () => {
    const wrapper = mount(TodoForm, {
      data() {
        return {
          todos: ["städa"],
        };
      },
    });

    const childTodoList = wrapper.findComponent(TodoList);

    childTodoList.vm.$emit("remove", 1);

    await wrapper.vm.$nextTick();

    await wrapper.setData({
      todos: [],
    });

    expect(childTodoList.emitted().remove).toBeTruthy();

    expect(childTodoList.emitted().remove[0]).toEqual([1]);

    expect(wrapper.vm.todos.length).toBe(0);
  });
});
