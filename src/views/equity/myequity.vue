<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row v-for="(item, index) in forms" :key="index" type="flex">
        <el-col v-for="(value, key) in item" :key="key" :span="6" class="form-item">
          <el-form-item :label="value.label" class="form-label">
            <component :is="value.is" v-model="form[value.name]" :placeholder="value.placeholder" :range.sync="form[value.name]">
              <el-option v-for="(v, k) in value.options" :key="k" :label="v.label" :value="v.value" />
            </component>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submit">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import RangeInput from '@/components/Common/RangeInput'
export default {
  components: {
    RangeInput
  },
  data() {
    return {
      form: {
        name: '',
        isAlpha: '',
        date: '',
        range: [10, 100]
      },
      forms: [
        [{
          label: '姓名',
          name: 'name',
          placeholder: '请输入姓名',
          is: 'el-input'
        }, {
          label: '姓名',
          name: 'name',
          is: 'el-input'
        }, {
          label: '姓名',
          name: 'name',
          is: 'el-input'
        }, {
          label: '姓名',
          name: 'name',
          is: 'el-input'
        }],
        [{
          label: '课程次数',
          name: 'range',
          is: 'range-input'
        }, {
          label: '是否alpha用户',
          name: 'isAlpha',
          is: 'el-select',
          options: [{
            label: '是',
            value: 1
          }, {
            label: '否',
            value: 0
          }]
        }, {
          label: '是否iCourt学员',
          name: 'name',
          is: 'el-input'
        }, {
          label: '上过的课程',
          name: 'date',
          placeholder: '选择日期',
          is: 'el-date-picker'
        }]
      ]
    }
  },
  methods: {
    submit() {
      console.log('form...', this.$refs.form.model)
    },
    reset() {
      this.$refs.form.resetField()
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-item /deep/ .el-form-item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .form-label /deep/ .el-form-item__label{
    text-align: left;
    font-size: 12px;
    width: 100% !important;
  }
  .form-label /deep/ .el-form-item__content{
    margin-left: 0 !important;
  }
</style>
