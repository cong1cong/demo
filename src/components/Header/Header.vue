<template>
  <div class="header">
    <div class="header-left">
      <!-- 首页 -->
      <span class="title">{{ index }}</span>
      <span class="quarantine"></span>
      <!-- 输入框 -->
      <div class="inputBox">
        <el-input placeholder="搜索" v-model="searchVal">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>

    <div class="header-right">
      <!-- 时间 -->
      <div class="timeNow">
        <i class="el-icon-time timeIconSty"></i>
        <div class="timeBox">
          <span class="date">{{ date }}</span>
          <span class="time">{{ time }}</span>
        </div>
      </div>

      <span class="quarantine"></span>
      <!-- 管理员 -->
      <div class="user">
        <div class="clickBoxUser" @click="changeUser">
          <img src="../../assets/image/用户.png" alt="" />
          <span class="user-name">{{ user.name }}</span>
          <img src="../../assets/image/组 6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem("user")) || {},
      searchVal: "",
      date: "",
      time: "",
      timer: "",
    };
  },

  computed: {
    index() {
      let a = JSON.parse(sessionStorage.getItem("menu")).find((item) => {
        return item.path == this.$route.name;
      });
      return a.name;
    },
  },

  methods: {
    getNowTime() {
      this.date = dayjs().format("YYYY-MM-DD");
      this.time = dayjs().format("HH:mm");
    },
    changeUser() {
      this.$confirm("是否退出账户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          sessionStorage.clear();
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "成功退出!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
  created() {
    this.getNowTime();
  },
  mounted() {
    this.timer = setInterval(() => {
      this.getNowTime();
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .quarantine {
    width: 2px;
    height: 23px;
    background: #282c38;
    border-radius: 21px 21px 21px 21px;
    opacity: 1;

    // color: #282c38;
    // content: '';
  }

  .header-left {
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      margin-left: 19px;
      margin-right: 66px;
      font-size: 24px;
      font-family: Alibaba PuHuiTi 2-65 Medium, Alibaba PuHuiTi 20;
      font-weight: normal;
      color: #ffffff;
      line-height: 0px;
    }

    .inputBox {
      margin-left: 26px;
      /deep/ .el-input {
        width: 260px;
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
        padding-left: 35px;
        // border: none;

        font-size: 18px;
        font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
        font-weight: normal;
        color: #ffffff;
        line-height: 0px;
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .timeNow {
      display: flex;
      align-items: center;
      .timeIconSty {
        border-radius: 50%;
        font-size: 40px;
        background: #246cf9;
        opacity: 0.4;
      }
      .timeBox {
        font-size: 24px;
        font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
        font-weight: normal;
        color: #ffffff;
        line-height: 0px;
        .date {
          margin-right: 20px;
          margin-left: 10px;
        }
      }
    }

    .quarantine {
      margin: 0 26px;
    }
    .user {
      width: 200px;
      height: 100%;
      right: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0;
      .clickBoxUser {
        display: flex;
        align-items: center;
        .el-avatar {
          background-color: #246cf9;
        }
        .user-name {
          margin: 0 10px;
          font-size: 24px;
          font-family: Alibaba PuHuiTi 2-55 Regular, Alibaba PuHuiTi 20;
          font-weight: normal;
          color: #ffffff;
          line-height: 0px;
        }
      }
    }
  }
}
</style>
