<template>
  <div>
    <el-table :data="showList" :span-method="objectSpanMethod" style="width: 100%" :key="randomKey" >
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column prop="date" label="日期" width="180"/>
      <el-table-column prop="address" label="地址"/>
    </el-table>

    <el-pagination background layout="sizes, prev, pager, next" :total="totalNums" :page-size='pageSize'
      :pageSizes="pageSizes" @current-change="changeNums" @size-change="changeSize" />

  </div>
</template>
<script>
//引入封装的js
import { dataMethod } from './mock';
export default {
  data() {
    return {
      num:0,
      showList: [],
      spanObj: {},
      totalNums: 0,   //总条数
      pageNum: 1,		//当前页数
      pageSize: 1,    //一页展示多少页
      pageSizes: [1, 5, 10, 20], //页条数调整
      randomKey:false
    }
  },
  created() {
    this.getData()
    //动态渲染 请渲染数剧结束后在执行此方法
  },
  methods: {
    getData() {
      const vm = this;
      const tableData = [
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
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎6',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎7',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎8',
          address: '上海市普陀区金沙江路 1519 弄'
        },
      ];
      this.totalNums = tableData.length;

      this.showList = tableData.slice(
        (vm.pageNum - 1) * vm.pageSize,
        vm.pageNum * vm.pageSize
      )
      this.randomKey = !this.randomKey;
      console.log(vm.showList);
      
      this.spanObj = dataMethod(vm.showList);
    },
    changeSize(size) {
      console.log(size);
      this.pageSize = size;
      return this.getData()
    },
    changeNums(num) {
      console.log(num);
      this.pageNum = num;
      return this.getData()
    },
    // eslint-disable-next-line no-unused-vars
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
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
