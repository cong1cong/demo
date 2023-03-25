<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // makeAddRouter() {
    //   let falg = JSON.parse(sessionStorage.getItem("user")).curd;
    //   console.log(falg);
    //   if (!falg) return;
    //   this.$router.addRoute("changtu", {
    //     path: "/changtu/user",
    //     name: "user",
    //     component: () => import("@/views/user/user.vue"),
    //   });
    //   this.$router.addRoute("changtu", {
    //     path: "/changtu/system",
    //     name: "system",
    //     component: () => import("@/views/system/system.vue"),
    //   });
    // },
  },
  created() {
    // this.makeAddRouter()
  },
};
</script>

<style>
#app {
  /* width: 100vw;
  height: 100vh; */
  background-color: #141518;
}
</style>
