<template>
  <div class="user">
    <div class="specilBtnAdd">
      <div @click="openForm" class="openFormBtn">
        <img src="../../assets/image/Iconly／Light／Plus.png" alt="" />
        <span>新增</span>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :cell-style="{ borderColor: '#323233', border: 'none' }"
      :header-cell-style="{ background: '#272c37', borderColor: '#323233' }"
      :row-style="{ border: 'none' }"
      :row-class-name="tableRowClassName"
    >
      <el-table-column align="center" type="index" width="55">
      </el-table-column>

      <el-table-column align="center" prop="name" label="用户名">
      </el-table-column>
      <el-table-column
        align="center"
        prop="nameRole"
        label="用户角色"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="phone"
        label="手机号码"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="邮箱"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <div class="controlImage">
            <img
              src="../../assets/image/Iconly／Light／Edit Square.png"
              alt=""
              @click="handleEdit(scope.$index, scope.row)"
            />
            <img
              src="../../assets/image/Iconly／Light／Time Square.png"
              alt=""
            />
            <img
              src="../../assets/image/Iconly／Light／Delete.png"
              alt=""
              @click="handleDelete(scope.$index, scope.row)"
            />
            <img
              src="../../assets/image/Iconly／Light／Arrow - Right Square.png"
              alt=""
            />
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <div class="pagenation-box">
      <ElPagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </div>

    <!-- 添加用户弹框 -->
    <el-dialog title="新增用户" :visible.sync="dialogVisible">
      <div class="body">
        <el-form
          ref="form"
          :model="form"
          label-position="top"
          label-width="80px"
        >
          <el-form-item label="用户名:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input type="password" v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="角色:">
            <el-select v-model="form.role">
              <el-option label="管理员" value="1"></el-option>
              <el-option label="用户" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号码:">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input v-model="form.adress"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span class="dialog-footer">
        <el-button style="background: #2f72fa;" class="specilBtn" type="primary" @click="addUsers"
          >确 定</el-button
        >
        <el-button style="background: #282c37;" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ElPagination from "../../components/el-table-self/ElPagination.vue";
export default {
  components: { ElPagination },
  data() {
    return {
      currentPage4: 4,
      dialogVisible: false,
      tableData: [
        {
          name: "admin",
          nameRole: "管理员",
          phone: "13000000000",
          address: "456@qq.com",
        },
        {
          name: "every",
          nameRole: "用户",
          phone: "13000011000",
          address: "123@qq.com",
        },
      ],
      form: {
        name: "",
        pwd: "",
        role: "",
        phone: "",
        adress: "",
      },
    };
  },
  methods: {
    // 表单样式改变
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "warning-row";
      } else if (rowIndex % 2 === 0) {
        return "success-row";
      }
      return "";
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm("此操作将删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log(index, row);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 填写表单，确定添加用户信息
    addUsers() {
      console.log(this.form);
      this.dialogVisible = false;
    },
    // 分页数量总数变化
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 分页当前页变化
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 按钮打开表单添加用户
    openForm() {
      this.dialogVisible = true;
      this.form = {};
    },
  },
};
</script>

<style scoped lang="less">
.openFormBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 42px;
  background: #282c38;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  margin-bottom: 15px;
  cursor: pointer;
  span{
    margin-left: 8px;
  }
  img{
    margin-right: 3px;
  }
}
.specilBtn {
  /deep/ .el-button {
    background-color: #2f72fa !important;
  }
}
.el-button {
  margin-bottom: 10px;
  // background-color: #282c37;
  border: none;
  border-radius: 10px 10px 10px 10px;
}

.pagenation-box {
  width: 550px;
  margin-right: 150px;
  margin-left: auto;
}

.user {
  .specilBtnAdd {
    /deep/ .el-button {
      background-color: #282c37;
    }
    span {
      font-size: 18px;
      font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
      font-weight: normal;
      color: #ffffff;
    }
  }
  /deep/ .el-table {
    border-radius: 20px;
  }
  /deep/ .el-table tr{
    background-color: #1e1f25;
  }
  /deep/ .el-table, .el-table__expanded-cell{
    background-color: #1e1f25;
  }
  /deep/ .el-table__row .cell {
    padding: 0 10px;
  }

  /deep/ .el-table .warning-row {
    // background: rgb(50, 50, 51);
    background: #272c37;
  }

  /deep/ .el-table .success-row {
    // background: #272829;
    background: #3d4254;
  }
  .fontStyle {
    // font-size: 16px;
    font-size: 18px;
    font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
    font-weight: normal;
    color: #ffffff;
  }
  // 表单所有字体
  /deep/ .el-table .cell {
    .fontStyle();
    color: #cccccc;
  }
  // 表头所有字体
  /deep/ .has-gutter .cell {
    font-weight: 400;
    .fontStyle();
    color: #ffffff;
  }
  /deep/ .el-checkbox__inner {
    color: #272829;
  }

  /deep/.el-table--enable-row-hover
    .el-table__body
    tr:hover
    > td.el-table__cell {
    background-color: #1e1f25 !important;
  }

  // 会话弹框
  /deep/ .el-dialog {
    width: 914px;
    // height: 801px;
    background: #1e1f25;
    border-radius: 20px 20px 20px 20px;
    opacity: 1;
  }
  /deep/ .el-dialog__header {
    width: 914px;
    height: 60px;
    margin-bottom: 20px;
    background: #21232c;
    border-radius: 20px 20px 0px 0px;
    opacity: 1;
    padding: 0;
  }
  /deep/ .el-dialog__title {
    position: relative;
    top: 20px;
    left: 25px;
    font-size: 24px;
    font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
    font-weight: normal;
    color: #ffffff;
    line-height: 0px;
  }
  /deep/ .el-dialog__body {
    width: 914px;
    background: #1e1f25;
    opacity: 1;
    padding: 0;
    padding-bottom: 50px;
    border-radius: 20px;
  }
  /deep/ .el-dialog__footer {
    height: 0;
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    /deep/ .el-input {
      width: 300px;
      height: 40px;
      background: #282c38;
      border-radius: 10px 10px 10px 10px;
      opacity: 1;
      // border: 1px solid #3c4254;
    }
    /deep/ .el-input__inner {
      background: #282c38;
      border: 1px solid #3c4254;
      border-radius: 10px 10px 10px 10px;

      font-size: 20px;
      font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
      font-weight: normal;
      color: #ffffff;
      line-height: 0px;
    }
    /deep/ .el-form-item__label {
      font-size: 20px;
      font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
      font-weight: normal;
      color: #757b8c;
      line-height: 0px;
      margin: 10px;
    }
  }
}

.dialog-footer {
  width: 300px;
  margin: 40px auto 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.controlImage {
  img {
    margin-left: 10px;
  }
}

/deep/ .el-table::before {
  height: 0;
}
</style>
