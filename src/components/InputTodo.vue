<template>
  <div>
    <el-input v-model="todoInfo" placeholder="pls input todo"></el-input>
    <el-button type="primary" v-on:click="addTodo">Add</el-button>
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
  .el-input {
    width: 300px;
  }
</style>