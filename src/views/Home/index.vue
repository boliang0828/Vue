<template>
  <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
  </el-table>
</template>
<script>
//引入封装的js
import { dataMethod } from './mock';
export default {
  data() {
    return {
      tableData: [],
      spanObj: {}
    }
  },
  created() {
    this.tableData = [
      {
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1519 弄'
      },
    ]
    //动态渲染 请渲染数剧结束后在执行此方法
    this.spanObj = dataMethod(this.tableData);
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, columnIndex);
      //列合并
      let _row = this.spanObj[column.property] ? this.spanObj[column.property][rowIndex] : 1;
      let _col = _row > 0 ? 1 : 0;
      return {
        rowspan: _row,
        colspan: _col
      }
    },
  }
}
</script>
