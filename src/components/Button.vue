<template>
  <button @click="submit($event)" :class="classList" :id="id">
    <slot>click</slot>
  </button>
</template>

<script>
export default {
  name: "e-button",
  props: {
    isDelete: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    submit(e) {
      this.$emit("click", e);
    },
  },
  computed: {
    classList() {
      let btn = "e-button";
      return [btn, this.isDelete && `${btn}--is-delete`];
    },
  },
};
</script>

<style lang="scss" scoped>
.e-button {
  padding: 10px 20px;
  border: none;
  background: green;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: rgb(0, 174, 0);
  }

  &--is-delete {
    background: #fff;
    color: rgb(184, 0, 0);
    font-weight: 300;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1.2px solid rgb(184, 0, 0);
    &:hover {
      background: rgb(184, 0, 0);
      color: #fff;
    }
  }
}
</style>