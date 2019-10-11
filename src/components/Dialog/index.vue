<template>
  <!-- Form -->
  <div>
    <el-button
      type="text"
      :class="dialogFormVisible ?'active' :null"
      @click="dialogFormVisible = true"
    >+ 新增用户</el-button>
    <el-dialog title="新增客户" :visible.sync="dialogFormVisible">
      <el-form :model="form" class="form">
        <div class="left">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="职业" :label-width="formLabelWidth">
            <el-select
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item
            label="所在机构"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item
            label="执业年限"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="职务" :label-width="formLabelWidth">
            <el-select
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="手机" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="微信" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="客户销售人" :label-width="formLabelWidth">
            <el-checkbox autocomplete="off" />本人为客户销售人
          </el-form-item>
        </div>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
<style lang="scss">
.form{
  display: flex;
}
.left,.right{
  flex:5;
}
.el-button--text{
  background: #eee;
  width: 90px;
  height: 30px;
  line-height: 10px;
  text-align: center;
  border: 1px solid #eee;
  border-radius:20px;
  display: inline-block;
  span{
    color: #333;
  }
  .active{
    border: 1px solid orange;
    color: orange;
  }
}
</style>
