<template>
  <div>
    <Todo v-for="todo in this.$store.state.todos"  :key="todo.text" :text="todo.text"></Todo>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
  name: "TodoList",
  components:{
    Todo
  },
  data: function () {
    return {
      todos: [
        {text: "111"},
        {text: "222"},
        {text: "333"}
      ]
    };
  }
}
</script>

<style scoped>

</style>