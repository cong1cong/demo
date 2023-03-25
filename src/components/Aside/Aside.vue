<template>
  <div class="aside">
    <div class="top-title">非IP矩阵管理后台</div>
    <el-divider></el-divider>
    <div style="height: 20px"></div>
    <div
      v-for="(item, index) in menuArr"
      :key="index"
      @click="changeRouter(item.path)"
    >
      <div :class="whichActive == item.path ? 'active' : ''">
        <div class="contenText">
          <!-- <i v-if="item.path == 'home'" class="el-icon-menu iconstyle"></i>
          <i
            v-if="item.path == 'control'"
            class="el-icon-s-cooperation iconstyle"
          ></i>
          <i
            v-if="item.path == 'user'"
            class="el-icon-user-solid iconstyle"
          ></i>
          <i v-if="item.path == 'system'" class="el-icon-s-tools iconstyle"></i> -->

          <img
            src="../../assets/image/home.png"
            v-if="item.path == 'home'"
            class="el-icon-menu iconstyle"
          />
          <img
            src="../../assets/image/menuCategory.png"
            v-if="item.path == 'control'"
            class="el-icon-s-cooperation iconstyle"
          />
          <img
            src="../../assets/image/user.png"
            v-if="item.path == 'user'"
            class="el-icon-user-solid iconstyle"
          />
          <img
            src="../../assets/image/setting.png"
            v-if="item.path == 'system'"
            class="el-icon-s-tools iconstyle"
          />
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whichActive: sessionStorage.getItem("whichMenu") || "home",
      menuArr: JSON.parse(sessionStorage.getItem("menu")) || [],
    };
  },

  methods: {
    changeRouter(path) {
      this.$router.push(`/changtu/${path}`);
      this.whichActive = path;
      // console.log(this.$route.name);
      sessionStorage.setItem("whichMenu", path);
    },
  },
  mounted() {
    // console.log(this.menuArr);
    this.whichActive = sessionStorage.getItem("whichMenu") || "home";
  },
};
</script>

<style scoped lang="less">
.aside {
  // height: calc(100vh - 100px);
  width: 250px;
  // height: 1028px;
  // height: 100vh;
  background: #1e1f25;
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
  display: flex;
  flex-direction: column;

  .top-title {
    height: 76px;
    width: 250px;
    font-size: 24px;
    font-family: Alibaba PuHuiTi 2-65 Medium, Alibaba PuHuiTi 20;
    font-weight: normal;
    color: #ffffff;
    line-height: 0px;
    cursor: default;
    justify-content: center;
  }

  div {
    // box-sizing: border-box;
    // width: 100%;
    // height: 100%;
    display: flex;
    align-items: center;
    // justify-content: center;

    cursor: pointer;

    width: 250px;
    height: 100px;
    background: #1e1f25;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;

    line-height: 0px;

    font-size: 24px;
    font-family: Alibaba PuHuiTi 2-65 Medium, Alibaba PuHuiTi 20;
    font-weight: normal;
    color: #757b8c;
    line-height: 0px;

    .contenText {
      padding-left: 32px;
    }
  }

  .active {
    .contenText {
      background-color: #282c37;
      color: #ffffff;
      img {
        color: #3169f4;
        // background-color: #3169f4;
      }
    }
  }

  /deep/ .el-divider {
    width: 247px;
    height: 0px;
    background: #ffffff;
    opacity: 1;
    border: 1px solid #282c38;
    cursor: default;
    padding: 0;
    margin: 0;
  }

  .iconstyle {
    margin-right: 15px;
  }
}
</style>
