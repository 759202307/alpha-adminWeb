<template>
  <el-form>
    <el-input
      v-model="range[0]"
      placeholder="最小"
      type="number"
      class="ipt"
    />
    -&nbsp;
    <el-input
      v-model="range[1]"
      placeholder="最大"
      type="number"
      class="ipt"
    />
  </el-form>
</template>

<script>
export default {
  props: ['range']
}
</script>
<style lang="scss" scoped>
.ipt {
    width: 90px;
    margin-right: 20px;
}
.el-form {
    display: flex;
}
</style>
