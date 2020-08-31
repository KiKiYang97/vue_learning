<template>
  <div>
        <div class="text">
          <el-alert
              type="success">
            {{ text }}
          </el-alert>
        </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["text"]
}
</script>

<style scoped>
.text {
  width: 300px;
  text-align: center;
}
</style>