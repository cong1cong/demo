import Vue from 'vue'
import Router from 'vue-router'

// import store from '../store/index.js'

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: "/changtu",
      name: "changtu",
      component: () => import("@/views/index.vue"),
      meta: {
        requiresAuth: true,
        role: ['admin', 'user']
      },
      children: [{
        path: "/changtu/home",
        name: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          requiresAuth: true,
          role: ['admin', 'user']
        }
      },
      {
        path: "/changtu/control",
        name: "control",
        component: () => import("@/views/control/control.vue"),
        meta: {
          requiresAuth: true,
          role: ['admin', 'user'],
          mainstyle:'controlMain'
        }
      }, {
        path: "/changtu/user",
        name: "user",
        component: () => import("@/views/user/user.vue"),
        meta: {
          requiresAuth: true,
          role: ['admin']
        }
      }, {
        path: "/changtu/system",
        name: "system",
        component: () => import("@/views/system/system.vue"),
        meta: {
          requiresAuth: true,
          role: ['admin']
        }
      }]
    },
    {
      path: '*',
      component: () => import('@/views/404/404.vue')
    },
  ]
})


/**
 *  router.addRoute("changtu", {
        path: "/changtu/user",
        name: "user",
        component: () => import("@/views/user/user.vue"),
        meta: {
          requiresAuth: true
        }
      });
      router.addRoute("changtu", {
        path: "/changtu/system",
        name: "system",
        component: () => import("@/views/system/system.vue"),
        meta: {
          requiresAuth: true
        }
      });
 */
// router.beforeEach(async (to, from, next) => {
//   let flag = Boolean(sessionStorage.getItem('user'))
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (to.name !== 'login' && !flag) {
//     next({ name: 'login' })
//   } else {
//     // // 页面刷新
//     if (requiresAuth && flag) {
//       // next({ ...to, replace: true }) // 这里相当于push到一个页面 不在进入路由拦截
//     } else {
//       next()
//     }
//   }
// })

router.beforeEach(async (to, from, next) => {
  let flag = Boolean(sessionStorage.getItem('user'))
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const role = to.meta.role


  function hasRole(role) {
    // 在这里实现判断用户是否有某个角色的逻辑
    // 如果用户有该角色，则返回true，否则返回false
    const adminPermiss = JSON.parse(sessionStorage.getItem('user')).curd
    const adminB = role.some(item => item == 'admin')
    const userB = role.some(item => item == 'user')
    if (adminPermiss && adminB) {
      return true
    } else if (!adminPermiss && userB) {
      return true
    } else {
      return false
    }
  }

  if (requiresAuth && !flag) {
    next('/login')
  } else if (requiresAuth && role && !hasRole(role)) {
    next('/404')
  } else {
    next()
  }

})



export default router

