<template>
  <div>
    <el-row>
      <el-col :span="18">
        <el-table
          :data="list"
          style="width: 100%; margin-bottom: 20px"
          border
          row-key="id"
        >
          <el-table-column label="工单编号" sortable width="180">
            <template slot-scope="scope">
              <el-popover
                placement="right"
                title="流程详情"
                width="100%"
                trigger="click"
                :offset="3000"
              >
                <span style="color: blue; cursor: pointer" slot="reference">{{
                  scope.row.name
                }}</span>
                <!-- <el-button slot="reference"
              > {{ JSON.stringify(scope.row.name) }}</el-button
            > -->
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="开通日期" prop="date" width="180" />
          <el-table-column label="开通人" prop="sex" width="180" />
        </el-table>
      </el-col>
      <el-col :span="6">
        <el-table :data="gridData">
          <el-table-column
            width="150"
            property="id"
            label="id"
          ></el-table-column>
          <el-table-column
            width="150"
            property="date"
            label="开通日期"
          ></el-table-column>
          <el-table-column
            width="100"
            property="name"
            label="开通人"
          ></el-table-column>
          <!-- <el-table-column
                width="300"
                property="address"
                label="地址"
              ></el-table-column> -->
        </el-table></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "growth",
  data() {
    return {
      list: [
        {
          id: "1",
          name: "法外狂徒1",
          sex: "李四",
          date: "2012-01-02",
        },
        { id: "2", name: "张三" },
      ],
      gridData: [
        {
          id: 13123123,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 23434,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 31212,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    detail(row) {
      if (row.$index == 1) {
        console.log("跳转详情");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

