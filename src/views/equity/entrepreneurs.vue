<template>
  <div class="main">
    <div class="top">
      <el-form
        ref="form"
        :model="form"
        label-width="180px"
        class="formTop"
      >
        <el-row v-for="(item, index) in forms" :key="index" type="flex">
          <el-col
            v-for="(value, key) in item"
            :key="key"
            :span="6"
            class="form-item"
          >
            <el-form-item :label="value.label" class="form-label">
              <component
                :is="value.is"
                v-model="form[value.name]"
                :placeholder="value.placeholder"
                :range.sync="form[value.name]"
              >
                <el-option
                  v-for="(v, k) in value.options"
                  :key="k"
                  :label="v.label"
                  :value="v.value"
                />
              </component>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="mid">
      <Dialog />
      <div class="box"><el-button type="text">今日跟进</el-button></div>
      <div class="box"><el-button type="text">我的邀请</el-button></div>
      <div class="box">
        <el-button type="text" @click="submit">搜索</el-button>
      </div>
      <div class="box">
        <el-button type="text" @click="reset">重置</el-button>
      </div>
    </div>
    <div class="bottom">
      <!-- <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip
        />
      </el-table> -->
      <Table
        ref="selection"
        height="300"
        border
        :columns="columns2"
        :data="data4"
      />
    </div>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import RangeInput from '@/components/Common/RangeInput'

export default {
  components: {
    RangeInput,
    Dialog
  },
  data() {
    return {
      name: '',
      contentShortLength: '廖修亭',
      columns2: [
        {
          type: 'selection',
          width: 40,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name',
          width: 200,
          sortable: true
        },
        {
          title: '所在机构',
          key: 'age',
          width: 240
        },
        {
          title: '是否Alpha律所',
          key: 'province',
          width: 150
        },
        {
          title: '职务',
          key: 'city',
          width: 200
        },
        {
          title: '执业年限',
          key: 'address',
          width: 130,
          sortable: true
        },
        {
          title: '手机号',
          key: 'zip',
          width: 100
        },
        {
          title: '最后更新时间',
          key: 'zip',
          width: 260,
          sortable: true
        },
        {
          title: '区域',
          key: 'zip',
          width: 200
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                },
                '查看'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                },
                '编辑'
              )
            ])
          }
        }
      ],
      data4: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        }
      ],
      form: {
        name: '',
        isAlpha: '',
        date: '',
        range: [10, 100]
      },
      forms: [
        [
          {
            label: '姓名',
            name: '姓名',
            placeholder: '请输入姓名',
            is: 'el-input'
          },
          {
            label: '所在机构',
            name: '所在机构',
            placeholder: '请输入所在机构',
            is: 'el-input'
          },
          {
            label: '手机号',
            name: '手机号',
            placeholder: '请输入手机号',
            is: 'el-input'
          },
          {
            label: '职务',
            name: '职务',
            placeholder: '请输入所在职务',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          }
        ],
        [
          {
            label: '课程次数',
            name: 'range',
            is: 'range-input'
          },
          {
            label: '是否alpha用户',
            name: '是否Alpha用户',
            is: 'el-select',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '是否iCourt学员',
            name: '是否iCourt学员',
            is: 'el-select',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '上过的课程',
            name: '上过的课程',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          }
        ],
        [
          {
            label: '课程名',
            name: '课程名',
            is: 'el-input'
          },
          {
            label: '选择省',
            name: '选择省',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '选择市',
            name: '选择市',
            is: 'el-select'
          },
          {
            label: '选择区县',
            name: '选择区县',
            is: 'el-select'
          }
        ],
        [
          {
            label: '标签',
            name: '标签',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '是否为排除标签中所选',
            name: '是否为排除标签中所选',
            is: 'el-select',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '邀请状态',
            name: '邀请状态',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '邀请人',
            name: '邀请人',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          }
        ],
        [
          {
            label: '邀请时间筛选',
            name: '邀请时间筛选',
            placeholder: '选择日期',
            is: 'el-date-picker'
          },
          {
            label: '跟进记录',
            name: '跟进记录',
            is: 'el-input'
          },
          {
            label: '最后联系时间',
            name: '最后联系时间',
            placeholder: '选择日期',
            is: 'el-date-picker'
          },
          {
            label: '邀请级别',
            name: '邀请级别',
            is: 'el-select',
            options: [
              {
                label: '无',
                value: 0
              },
              {
                label: 'A',
                value: 1
              },
              {
                label: 'B',
                value: 2
              },
              {
                label: 'C',
                value: 3
              },
              {
                label: 'D',
                value: 4
              },
              {
                label: 'E',
                value: 5
              }
            ]
          }
        ],
        [
          {
            label: '橙子手机',
            name: '橙子手机',
            placeholder: '请输入所在机构',
            is: 'el-input'
          },
          {
            label: '所在群',
            name: '所在群',
            placeholder: '请输入所在机构',
            is: 'el-input'
          },
          {
            label: '备注',
            name: '备注',
            placeholder: '请输入所在机构',
            is: 'el-input'
          },
          {
            label: '执业年限',
            // name: "执业年限",
            name: 'range',
            is: 'range-input'
          }
        ],
        [
          {
            label: '出生日期',
            name: '出生日期',
            placeholder: '选择日期',
            is: 'el-date-picker'
          },
          {
            label: '是否参加活动',
            name: '是否参加活动',
            is: 'el-select',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '活动类型',
            name: '活动类型',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '是否签到',
            name: '是否签到',
            is: 'el-select',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          }
        ],
        [
          {
            label: '参加时间',
            name: '参加时间',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '是否购买该产品',
            name: '是否购买该产品',
            is: 'el-select',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '产品类型',
            name: '产品类型',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '产品名称',
            name: '产品名称',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          }
        ],
        [
          {
            label: '最后一次登录时间',
            name: '最后一次登录时间',
            placeholder: '选择日期',
            is: 'el-date-picker'
          },
          {
            label: '跟进人',
            name: '跟进人',
            is: 'el-select',
            options: [
              {
                label: '主任',
                value: 0
              },
              {
                label: '副主任',
                value: 1
              },
              {
                label: '合伙人',
                value: 2
              },
              {
                label: '执行主任',
                value: 3
              },
              {
                label: '高级合伙人',
                value: 4
              },
              {
                label: '管理合伙人',
                value: 5
              },
              {
                label: '团队负责人',
                value: 6
              },
              {
                label: '律师',
                value: 7
              },
              {
                label: '实习生',
                value: 8
              },
              {
                label: '行政',
                value: 9
              }
            ]
          },
          {
            label: '计划跟进日期',
            name: '计划跟进日期',
            placeholder: '选择日期',
            is: 'el-date-picker'
          },
          {
            label: '近一个月使用次数',
            name: '近一个月使用次数',
            is: 'el-select',
            options: [
              {
                label: '高',
                value: 0
              },
              {
                label: '中',
                value: 1
              },
              {
                label: '低',
                value: 2
              },
              {
                label: '无',
                value: 3
              }
            ]
          }
        ],
        [
          {
            label: '新增邀请日期',
            name: '选择日期',
            placeholder: '选择日期',
            is: 'el-date-picker'
          }
        ]
      ],
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: []
    }
  },
  computed: {},
  created() {},
  mounted() {},
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
<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
}
.top {
    height: auto;
}
.mid {
    height: 60px;
    line-height: 60px;
    display: flex;
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
}
.bottom {
    height: 600px;
}
.el-button--text {
    background: #eee;
    width: 90px;
    height: 30px;
    line-height: 10px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 20px;
    display: inline-block;
    span {
        color: #333;
    }
    .active {
        border: 1px solid orange;
        color: orange;
    }
}
.form-item /deep/ .el-form-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.form-label /deep/ .el-form-item__label {
    text-align: left;
    font-size: 12px;
    width: 100% !important;
}
.form-label /deep/ .el-form-item__content {
    margin-left: 0 !important;
}
.entrepreneurs {
    width: 100%;
    height: 100%;
    .el-form {
        width: 100%;
        height: 100%;
        .el-row,
        .el-row--flex {
            width: 98%;
            //margin: 20px auto;
            // .form-item /deep/ .el-form-item {
            //     display: flex;
            //     flex-direction: column;
            //     align-items: flex-start;
            //   }
            //   .form-label /deep/ .el-form-item__label {
            //     text-align: left;
            //     font-size: 12px;
            //     width: 100% !important;
            //   }
            //   .form-label /deep/ .el-form-item__content {
            //     margin-left: 0 !important;
            //   }
        }
    }
}
</style>
