import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//此VueRouter是自己自定义引入暴露出来的，即是自定义的，以下的VueRouter同样是这样
// 解决两次访问相同路由地址报错

const originalPush = VueRouter.prototype.push
// 获取vuerouter上的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requireAuth: true },
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/Admin.vue'),
        meta: { requireAuth: true },
      },
      {
        path: '/console',
        name: 'console',
        component: () => import('@/views/Console.vue'),
        meta: { requireAuth: true },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { requireAuth: true },
      }, {
        path: '/index',
        name: 'index',
        component: () => import('@/views/Index.vue'),
        meta: { requireAuth: true },
      }, {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User.vue'),
        meta: { requireAuth: true },
      }, {
        path: '/vcharts',
        name: 'vcharts',
        component: () => import('@/components/Vcharts.vue'),
        meta: { requireAuth: true },
      }, {
        path: '/messagebox',
        name: 'messagebox',
        component: () => import('@/views/MessageBox.vue'),
        meta: { requireAuth: true },
      }, {
        path: '/dialog',
        name: 'dialog',
        component: () => import('@/views/Dialog.vue'),
        meta: { requireAuth: true },
      }, {
        path: '/table',
        name: 'table',
        component: () => import('@/views/Table.vue'),
        meta: { requireAuth: true },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  let token = Vue.prototype.getStorage;
  
  token('token').then(res=>{
    window.console.log(res);
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (res) { //判断本地是否存在access_token
        next();
      } else {
        next({
          path: '/login'
        })
      }
    }
    else {
      next();
    }
    /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
    if (to.fullPath == "/login") {
      if (res) {
        next({
          path: from.fullPath
        });
      } else {
        next();
      }
    }
  })
  
});

export default router
