<template>
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 400,
    },
    "page-size": {
      type: Number,
      default: 100,
    },
    "page-sizes": {
      type: Array,
      default: () => [100, 200, 300, 400],
    },
    "current-page": {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("size-change", val);
    },
    handleCurrentChange(val) {
      this.$emit("current-change", val);
    },
  },
};
</script>

<style scoped lang="less">
.page {
  margin-top: 30px;
  /deep/ .el-pagination__jump input {
    width: 30px;
    border: none;
    // color: #00fffe;
    color: #2072c1;
    // border-bottom: #00fffe 1px solid;
    border-bottom: #2072c1 1px solid;
    font-weight: 400;
    border-radius: 0;
  }
  /deep/ .el-input__inner {
    border: none;
  }
  /deep/ .el-icon-arrow-up:before {
    content: "";
  }
  /deep/ .el-input {
    margin-right: -10px;
  }
  /deep/ .el-input__inner {
    margin-right: 0px;
    // padding-right: -10px;
    padding: 0;
  }
}

.el-pagination .el-select .el-input .el-input__inner {
  border: none;
}
/deep/ .el-pager li,
/deep/ .el-pagination .btn-prev,
/deep/ .el-pagination .btn-next {
  background-color: #1e1f25;
  color: #bdbebe;
}
/deep/ .el-pager .active {
  background-color: #282c37;
  // color: aquamarine;
  color: #2072c1;
  border: 2px #757b8b solid;
}
/deep/ .el-pagination .el-pagination__total,
/deep/ .el-pagination .el-pagination__jump {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  margin-right: -5px;
}
/deep/ .el-pagination .el-input__inner {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  background-color: #1e1f25;
}
</style>
