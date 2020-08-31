<template>
  <div>
    <input v-model="todoInfo"/>
    <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: "InputTodo",
  methods:{
    addTodo : function () {
      this.$store.commit('addTodo',this.$data.todoInfo)
      console.log(this.$data.todoInfo)
    }
  },
  data:() => {
    return {
      todoInfo:''
    }
  }
}
</script>

<style scoped>

</style>