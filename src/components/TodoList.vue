<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, i) in todos" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ todo }}</td>
        <td><e-button @click="remove(i)" isDelete>X</e-button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "todo-list",
  components: {
    "e-button": Button,
  },
  props: {
    todos: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    remove(i) {
      this.$emit("remove", i);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    text-align: center;
  }

  td {
    padding: 10px;
  }
  thead {
    tr {
      background: #eff0f4;
      th {
        background: #eff0f4;
        border-radius: 5px;
        text-align: center;
        padding: 10px;
        &:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        &:nth-child(2) {
          border-radius: 0;
        }

        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background: #eff0f4;
      }
    }
  }
}
</style>