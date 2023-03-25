<template>
  <div class="login-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="login-title">🔐非IP控制后台管理系统</span>
      </div>
      <div class="login-form">
        <el-form :model="form" :rules="loginRules" ref="loginForm">
          <el-form-item prop="account">
            <el-input
              type="text"
              v-model="form.account"
              auto-complete="off"
              placeholder="请输入用户名"
            >
              <template slot="prepend"
                ><i style="font-size: 20px" class="el-icon-user"></i
              ></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="form.password"
              auto-complete="off"
              placeholder="请输入密码"
            >
              <template slot="prepend"
                ><i style="font-size: 20px" class="el-icon-key"></i
              ></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 100%"
              type="primary"
              @click="handleLogin"
              :loading="loading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
// import User from "@/views/user/user.vue";
export default {
  data() {
    return {
      loading: false,
      form: {
        account: "",
        password: "",
      },
      loginRules: {
        userName: [{ required: true, message: "请输入账户", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      // 管理员登陆
      if (this.form.account == "admin" && this.form.password == "123") {
        // this.$router.options.routes[2].children.push(user);
        this.$router.addRoute("changtu", {
          path: "/changtu/user",
          name: "user",
          component: () => import("@/views/user/user.vue"),
        });
        this.$router.addRoute("changtu", {
          path: "/changtu/system",
          name: "system",
          component: () => import("@/views/system/system.vue"),
        });
        // this.$router.push("/changtu/home");
        sessionStorage.setItem(
          "menu",
          JSON.stringify([
            { path: "home", name: "首页" },
            { path: "control", name: "控制" },
            { path: "user", name: "用户管理" },
            { path: "system", name: "系统设置" },
          ])
        );
        // 保存用户信息
        // this.$store.commit('USERINFO',{name:'管理员',curd:true})
        sessionStorage.setItem(
          "user",
          JSON.stringify({ name: "管理员", curd: true })
        );
      } else {
        //用户登录
        // this.$router.push("/changtu/home");
        sessionStorage.setItem(
          "menu",
          JSON.stringify([
            { path: "home", name: "首页" },
            { path: "control", name: "控制" },
          ])
        );
        // 保存用户信息
        // this.$store.commit('USERINFO',{name:'用户',curd:false})
        sessionStorage.setItem(
          "user",
          JSON.stringify({ name: "用户", curd: false })
        );
      }
    },

    handleLogin() {
      this.$refs.loginForm
        .validate()
        .then(() => {
          this.loading = true;

          //模拟异步请求后台接口 登录操作
          setTimeout(() => {
            this.login();
            this.$router.push("/changtu/home");
            this.loading = false;
          }, 300);
        })
        .catch(() => {
          this.$message({
            message: "输入错误！",
            type: "warning",
          });
        });
    },
  },
};
</script>

<style scoped lang="less">
// .login {
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .wrapper {
//     width: 200px;
//     height: 200px;
//     border: 1px dotted rgb(87, 20, 32);
//     padding: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// }
.login-page {
  // background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  background-image: linear-gradient(180deg, #3c4254 0%, #141518 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-title {
  font-size: 20px;
}

.box-card {
  width: 375px;
  opacity: .9;
}
</style>
