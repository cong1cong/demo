<template>
  <div class="home">
    <!-- <el-container>
      <el-header height="100px"><Header></Header></el-header>
      <el-container>
        <el-aside><Aside /></el-aside>
        <el-main>
          <el-card>
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container> -->
    <el-container>
      <el-aside><Aside /></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main
          :class="$route.meta.mainstyle == 'controlMain' ? 'mainstyle' : 'main-self'"
        >
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Aside from "../components/Aside/Aside.vue";
export default {
  components: { Header, Aside },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.home {
  /deep/ .el-header {
    margin: 0;
    padding: 0;
    width: calc(100vw - 340px);
    height: 80px !important;
    background: #1e1f25;
    border-radius: 20px 20px 20px 20px;
    opacity: 1;
    // position: relative;
    margin: 26px;
    margin-left: 0;
  }

  .el-aside {
    width: 250px !important;
    // height: 1028px;
    height: calc(100vh - 52px);
    // height: 100%;
    background: #1e1f25;
    border-radius: 20px 20px 20px 20px;
    opacity: 1;
    margin: 26px;
  }

  .el-main{
    padding: 0;
    
    width: calc(100vw - 340px);
    height: calc(100vh - 158px);
  }

  .main-self {
    // width: calc(100vw - 340px);
    // height: calc(100vh - 158px);
    background: #1e1f25;
    border-radius: 20px 20px 20px 20px;
    opacity: 1;
    margin-bottom: 26px;
    padding: 20px;
    // overflow: scroll;
  }
  .controlMain {
    // width: calc(100vw - 340px);
    // height: calc(100vh - 158px);
    margin-bottom: 26px;
    // overflow: scroll;
    // padding: 20px;
    // overflow: scroll;
  }
}
</style>
