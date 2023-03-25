<template>
  <div class="wrapperBox" @click="$router.replace('/changtu/home')">
    <h2>404!!!即将跳转</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  created() {
    this.time = setTimeout(() => {
      this.$router.replace("/changtu/home");
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.time);

    sessionStorage.setItem("whichMenu", "home");
  },
};
</script>

<style scoped lang="less">
.wrapperBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: url("../../assets/logo.png") no-repeat center;
  h2 {
    font-size: 20px;
    margin: 10px;
  }
}
</style>
