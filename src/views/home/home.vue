<template>
  <div class="home">
    <h2 class="title">非IP控制后台管理系统</h2>
    <el-form ref="form" label-position="top" :model="form" label-width="100px">
      <el-form-item label="设备型号">
        <el-input :value="form.type"></el-input>
      </el-form-item>
      <el-form-item label="IP地址">
        <el-input :value="form.adress"></el-input>
      </el-form-item>
      <el-form-item label="接口数量">
        <el-input :value="form.count"></el-input>
      </el-form-item>
    </el-form>

    <!-- <div class="showTime">
      <span>当前日期：</span>
      <span>{{ nowTime }}</span>
    </div> -->
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      form: {
        type: "00003",
        adress: "172.16.25.114",
        count: 288,
      },
      nowTime: "",
      time: "",
    };
  },
  methods: {
    getNowTime() {
      this.nowTime = dayjs().format("YYYY-MM-DD HH:mm");
    },
  },
  created() {
    this.getNowTime();
  },
  mounted() {
    this.time = setTimeout(() => {
      this.getNowTime();
    }, 10000);
  },
  beforeDestroy() {
    clearTimeout(this.time);
  },
};
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  width: 500px;
  // justify-content: center;
  // align-items: center;
  padding: 0 30px;
  .title {
    font-size: 32px;
    font-family: Alibaba PuHuiTi 2-65 Medium, Alibaba PuHuiTi 20;
    font-weight: normal;
    color: #ffffff;
    margin-bottom: 40px;
  }
}

/deep/ .el-input {
  width: 260px;
  height: 40px;
  background: #282c38;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  // border: 1px solid #3C4254;
}
/deep/ .el-input__inner {
  background: #282c38;
  // border: 1px solid #3c4254;
  border: 1px solid #3C4254;
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
</style>
