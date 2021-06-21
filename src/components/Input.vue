<template>
  <input
    type="text"
    :id="id"
    placeholder="Add todo.."
    @input="onInput($event.target.value)"
    :value="value"
  />
</template>

<script>
export default {
  name: "e-todo",
  props: {
    value: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #000;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
}
</style>