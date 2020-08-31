<template>
  <div>
    <InputTodo></InputTodo>
    <TodoList></TodoList>
  </div>
</template>

<script>
import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoList";
export default {
  name: "TodoForm",
  components: {TodoList, InputTodo}
}
</script>

<style scoped>

</style>